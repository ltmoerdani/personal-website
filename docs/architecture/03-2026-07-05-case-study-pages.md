**Status:** 🟢 Active

# Case Study Pages Architecture

**Topic:** architecture / routing / case-study
**Created:** 2026-07-05
**Updated:** 2026-07-05
**Tags:** #nextjs #routing #case-study #architecture

---

## Overview

Three case study detail pages extend the portfolio with deeper narratives for Pro Archery, MyArchery.id, and OpenCode. They share a common layout via reusable primitives and are interconnected with prev/next navigation.

---

## Routes

| Route | File | Hero Theme | Source Prototype |
|-------|------|------------|-----------------|
| `/case/pro-archery` | `app/case/pro-archery/page.tsx` | Dark (`#1D1C1A`) | `Case Pro Archery.dc.html` |
| `/case/myarchery` | `app/case/myarchery/page.tsx` | Green tint | `Case MyArchery.dc.html` |
| `/case/opencode` | `app/case/opencode/page.tsx` | Dark (`#1D1C1A`) | `Case OpenCode.dc.html` |

All routes are statically prerendered — no dynamic params, no server-side data fetching.

---

## Page Structure

Every case study page follows the same skeleton:

```
<div>                          ← wrapper (bg, color, overflow)
  <CaseNav />                  ← sticky nav: "← ltmoerdani.com" + LangToggle
  <header>                     ← dark/light hero with stats grid
  <CaseSection />              ← narrative sections (title + paragraph)
  <CaseScreenshot />           ← dashed placeholder for screenshots
  <CaseQuote />                ← pull quote with accent border
  <CaseFooter />               ← prev/next navigation
</div>
```

### Pro Archery (most complex)

```
CaseNav
Header (dark)     → eyebrow + h1 + lede + 4-stat grid
CaseSection       → "The wrong first move"
Section           → "Four phases, four problems" (4 numbered phase rows)
CaseScreenshot    → "[ product screenshot — internal platform dashboard ]"
CaseQuote         → "Not advising from a deck..."
CaseFooter        → next: MyArchery
```

### MyArchery (medium)

```
CaseNav
Header (green)    → eyebrow + h1 (.id in serif) + lede + 3-stat grid
CaseSection       → "Built from inside the sport"
CaseSection       → "Business problem first"
CaseScreenshot    → "[ event scoring interface ]"
CTA button        → myarchery.id ↗
CaseQuote         → "The strongest product insight..."
CaseFooter        → prev: Pro Archery, next: OpenCode
```

### OpenCode (with terminal mockup)

```
CaseNav
Header (dark)     → eyebrow + h1 (opencode_) + lede + 4-stat grid
CaseSection       → "Why a CPO ships an open-source dev tool"
Terminal mockup   → faux CLI with traffic-light dots
CTA button        → VS Code Marketplace ↗
CaseQuote         → "Every product started from a business problem..."
CaseFooter        → prev: MyArchery
```

---

## Shared Primitives (`components/CasePrimitives.tsx`)

### `CaseStat`

A single key metric in the hero stat grid.

```tsx
<CaseStat
  value="12,000+"
  labelEn="SKUs"
  labelId="SKU"
  accent="dark"  // 'dark' = light text (for dark backgrounds)
                  // 'light' = dark text (for light backgrounds)
/>
```

### `CaseStatGrid`

Wraps multiple `CaseStat`s in a responsive grid with divider lines.

```tsx
<CaseStatGrid accent="light">
  <CaseStat accent="light" value="12,000+" labelEn="SKUs" labelId="SKU" />
  ...
</CaseStatGrid>
```

### `CaseSection`

A narrative section with title + paragraph, max-width 820px, scroll-revealed.

```tsx
<CaseSection titleEn="The wrong first move" titleId="Langkah pertama yang keliru">
  <T en="I initially wanted..." id="Awalnya saya ingin..." />
</CaseSection>
```

### `CaseQuote`

A pull quote with a left accent border, Instrument Serif italic.

```tsx
<CaseQuote
  en="Not advising from a deck. Making product decisions that move revenue."
  id="Bukan memberi saran dari deck..."
/>
```

### `CaseScreenshot`

A dashed placeholder box (16:8 aspect ratio) for screenshots not yet available.

```tsx
<CaseScreenshot
  en="[ product screenshot — internal platform dashboard ]"
  id="[ screenshot produk — dashboard platform internal ]"
/>
```

---

## Navigation Flow

```
Homepage Case Studies section
    │
    ├── Featured card → /case/pro-archery
    ├── MyArchery card → /case/myarchery
    └── OpenCode card → /case/opencode

Case page navigation:
    Pro Archery  →  next: MyArchery
    MyArchery    ←  prev: Pro Archery  |  next: OpenCode →
    OpenCode     ←  prev: MyArchery    |  (end: links to /#contact)
```

### Wiring

Homepage cards use `next/link` `<Link>` for client-side navigation:

```tsx
<Link href="/case/pro-archery" style={{ ...featuredCard, ... }}>
```

Case page footers use `<CaseFooter>` with `prev` and `next` props:

```tsx
<CaseFooter
  prev={{ href: '/case/pro-archery', en: 'Prev: Pro Archery', id: 'Sebelumnya: Pro Archery' }}
  next={{ href: '/case/opencode', en: 'Next: OpenCode', id: 'Berikutnya: OpenCode' }}
/>
```

---

## What's Not Here (Yet)

| Project | Homepage Card | Detail Page | Status |
|---------|:---:|:---:|--------|
| Pro Archery | ✅ | ✅ | Complete |
| MyArchery.id | ✅ | ✅ | Complete |
| OpenCode | ✅ | ✅ | Complete |
| Blazz | ✅ | ❌ | Card only — no detail page in prototype |
| Jalan Kita 2.0 (JAKI) | ✅ | ❌ | Card only — no detail page in prototype |
| Validasi Ide Bisnis (book) | ✅ | ❌ | External link to validasiidebisnis.com |

To add a new case study page, create `app/case/{slug}/page.tsx` using the shared primitives and add a `<Link>` card in `components/CaseStudies.tsx`.

---

*Case study pages converted from v3 prototype on 2026-07-05.*
