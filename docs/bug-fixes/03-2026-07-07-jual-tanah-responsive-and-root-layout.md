**Status:** ✅ Solved

# Jual Tanah Bogor — Responsive Layout + Root Layout HTML Tags Fix

**Topic:** bugfix / responsive / nextjs-layout
**Created:** 2026-07-07
**Updated:** 2026-07-07
**Tags:** #nextjs #responsive #css #layout #fix
**Supersedes:** —

---

## Overview

Tiga bug berurutan pada halaman `/jual-tanah-bogor` yang ditemukan dan diperbaiki dalam satu sesi:

1. **Responsive layout pecah di mobile & tablet** — hero tetap dua kolom, social proof menimpa konten.
2. **Runtime error: Missing `<html>` and `<body>` tags in root layout** — Next.js 16 requirement.
3. **Social proof notification hilang di mobile/tablet + posisi card salah** — over-correction dari fix #1.

---

## Bug 1: Responsive Layout Pecah di Mobile & Tablet

### Evidence

Diverifikasi via Playwright browser inspection pada `localhost:3000/jual-tanah-bogor` di tiga viewport:

| Viewport | `scrollWidth` vs `innerWidth` | Overflow? | Hero grid columns |
|---|---|---|---|
| 390×844 (mobile) | 355 vs 355 | ❌ no horizontal overflow | 2 kolom (`1.3fr 0.7fr`) — terjepit |
| 768×1024 (tablet) | 576 vs 576 | ❌ no horizontal overflow | 2 kolom — terjepit |
| 1440×900 (desktop) | — | ❌ | 2 kolom — OK |

**Root cause:** Hero container `gridTemplateColumns: 'minmax(0, 1.3fr) minmax(280px, 0.7fr)'` tidak punya media query — tetap dua kolom di semua viewport. Kolom kanan (`aside` ringkasan) memaksa `minmax(280px, ...)` yang mengunci lebar minimum, menghimpit kolom kiri (judul + deskripsi).

**Secondary issue:** Social proof notification (`position: fixed; bottom: 20; left: 20`) menimpa konten utama di viewport sempit.

### Resolution

**Files changed:**

| File | Change |
|---|---|
| `app/jual-tanah-bogor/page.tsx` | Tambah className hooks: `land-hero-shell`, `land-hero-content`, `land-hero-title`, `land-hero-lead`, `land-hero-facts`, `land-hero-aside`, `land-detail-row`, `land-detail-value`, `land-social-proof` |
| `app/globals.css` | Tambah media queries untuk mobile (`max-width: 767px`) dan tablet (`max-width: 1023px`) |

**CSS strategy:**

```css
/* Tablet kecil & mobile: hero stack jadi 1 kolom */
@media (max-width: 1023px) {
  .land-hero-shell {
    grid-template-columns: 1fr !important;
    gap: 28px !important;
    align-items: start !important;
  }
}

/* Mobile: heading kecil, facts grid 2 kolom, detail row stack */
@media (max-width: 767px) {
  .land-hero-title {
    font-size: clamp(28px, 10vw, 44px) !important;
    line-height: 1.08 !important;
    text-wrap: pretty;
  }
  .land-hero-facts {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
  .land-detail-row {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 6px;
  }
}
```

### Verification

| Check | Mobile (390) | Tablet (768) | Desktop (1440) |
|---|---|---|---|
| `gridTemplateColumns` | `315px` (1 col) | `529px` (1 col) | 2 cols (OK) |
| Hero not cramped | ✅ | ✅ | ✅ |
| Detail rows stack | ✅ `column` | — | — |

---

## Bug 2: Missing `<html>` and `<body>` in Root Layout

### Error Message

```
## Error Type
Runtime Error

## Error Message
Missing <html> and <body> tags in the root layout.
Read more at https://nextjs.org/docs/messages/missing-root-layout-tags

Next.js version: 16.2.10 (Turbopack)
```

### Root Cause

Root layout `app/layout.tsx` hanya return fragment:

```tsx
// ❌ BEFORE — tidak valid di Next.js 16
export default function RootLayout({ children }) {
  return <>{children}</>;
}
```

Nested layouts masing-masing punya `<html>`/`<body>` sendiri:
- `app/[locale]/layout.tsx` — `<html lang={localeHtmlLang[active]}>` + `<body>`
- `app/jual-tanah-bogor/layout.tsx` — `<html lang="id">` + `<body style={{ margin: 0 }}>`
- `app/[locale]/not-found.tsx` — `<html lang="en">` + `<body>`

**Next.js 16 mewajibkan** root layout (`app/layout.tsx`) mengembalikan `<html>` dan `<body>`. Nested layout tidak boleh punya tag ini lagi.

### Resolution

**Files changed (4):**

| File | Before | After |
|---|---|---|
| `app/layout.tsx` | Fragment `<>{children}</>` | `<html lang="id">` + `<body>` + fonts (Archivo, Instrument Serif, JetBrains Mono) + `globals.css` import |
| `app/[locale]/layout.tsx` | `<html>` + `<body>` + font declarations | `<div lang={localeHtmlLang[active]}>` wrapper (fonts & CSS moved to root) |
| `app/jual-tanah-bogor/layout.tsx` | `<html>` + `<body>` + font declarations | `<>` fragment + structured data scripts (fonts & CSS moved to root) |
| `app/[locale]/not-found.tsx` | `<html lang="en">` + `<body>` | `<div>` wrapper |

**Key decisions:**
- Font variables (Archivo, Instrument Serif, JetBrains Mono) dipindah ke root layout — tidak diduplikasi.
- `lang` attribute: root layout set `lang="id"` (default), locale layout set via `<div lang={...}>` untuk semantic correctness.
- Structured data JSON-LD scripts di `jual-tanah-bogor/layout.tsx` tetap di nested layout, hanya wrapper HTML-nya yang dihilangkan.

### Verification

```bash
grep -r '<html\|<body' app/**/*.tsx
# Result: hanya app/layout.tsx yang punya <html>/<body> (3 matches: comment + 2 tags)
```

Error runtime hilang. Semua TypeScript checks bersih (no errors).

---

## Bug 3: Social Proof Notification — Hilang & Posisi Salah

### Problem Statement

Setelah fix Bug 1, social proof notification:
1. **Hilang total** di mobile & tablet (di-hide via `display: none` sebagai over-correction).
2. **Card muncul dari bawah** — user ingin card notifikasi di posisi atas, badge count di bawah.

### Evidence

Playwright DOM inspection:
```
Desktop (1440): spDisplay = "none"  ← seharusnya "flex"
```

CSS yang bermasalah:
```css
/* ❌ OVER-CORRECTION dari Bug 1 fix */
@media (max-width: 1023px) {
  .land-social-proof {
    display: none !important;  /* mati total, bukan adaptif */
  }
}
```

### Resolution

**File: `app/jual-tanah-bogor/page.tsx`**

1. Container `flexDirection` dari `column` → `column-reverse` (card di atas, count di bawah).
2. Card animation dari `translateY(20px)` → `translateY(-16px)` (masuk dari atas, bukan bawah).

**File: `app/globals.css`**

Menghapus `display: none`, ganti dengan adaptif layout:

```css
@media (max-width: 1023px) {
  .land-social-proof {
    left: 12px !important;
    right: 12px;
    bottom: 12px !important;
    align-items: flex-start;
  }
  .land-social-proof-card {
    max-width: calc(100vw - 24px) !important;
  }
  .land-social-proof-count {
    max-width: calc(100vw - 24px);
  }
}
```

### Verification

| Viewport | `display` | `flexDirection` | Card di atas count? | Card top | Count top |
|---|---|---|---|---|---|
| Mobile (390) | `flex` | `column-reverse` | ✅ | 642px | 728px |
| Tablet (768) | `flex` | `column-reverse` | ✅ | — | — |
| Desktop (1440) | `flex` | `column-reverse` | ✅ | 354px | 440px |

---

## Timeline

| Time | Event |
|---|---|
| Start | User request: "menyesuaikan responsive di mobile dan tablet" |
| +15min | Visual inspection via Playwright — hero 2-col cramped, social proof overlay |
| +10min | Fix Bug 1: hero stack 1-col, detail rows stack, social proof hidden (over-correction) |
| +5min | User report: runtime error "Missing `<html>` and `<body>` tags" |
| +10min | Fix Bug 2: root layout dapat `<html>`/`<body>`, nested layouts di-strip |
| +5min | User report: social proof hilang di mobile + posisi card salah |
| +10min | Fix Bug 3: social proof visible lagi, card di atas count, animasi dari atas |
| End | Dokumentasi + worklog update |

---

## Key Insights

1. **Next.js 16 root layout requirement** — `<html>` dan `<body>` hanya boleh di `app/layout.tsx`. Nested layouts harus pakai `<div>` atau fragment. Ini berbeda dari Next.js 14/15 yang lebih longgar.

2. **Responsive fix dengan CSS class hooks** — daripada inline JS media query (tidak mungkin di SSR), tambah `className` ke elemen lalu kontrol via `globals.css`. Inline styles tetap sebagai baseline, CSS overrides dengan `!important` untuk media queries.

3. **`column-reverse` untuk urutan visual** — mengubah `flexDirection: 'column'` ke `column-reverse` membalik urutan visual tanpa mengubah urutan DOM. Card (notifikasi detail) muncul di atas, count badge di bawah.

4. **Jangan over-correct** — meng-hide elemen sepenuhnya (`display: none`) untuk "fix responsive" adalah solusi yang terlalu agresif. Selalu coba adaptasi layout dulu sebelum menghilangkan fungsionalitas.

---

## Files Changed Summary

| File | Lines Changed | Type |
|---|---|---|
| `app/layout.tsx` | +33 -3 | rewrite (fragment → html/body) |
| `app/[locale]/layout.tsx` | -20 +2 | remove html/body + fonts |
| `app/jual-tanah-bogor/layout.tsx` | -20 +2 | remove html/body + fonts |
| `app/[locale]/not-found.tsx` | -4 +4 | html/body → div |
| `app/jual-tanah-bogor/page.tsx` | +12 -3 | className hooks + flex-direction + animation |
| `app/globals.css` | +45 -7 | media queries for responsive |

---

*Created: 2026-07-07 — Session 6*
