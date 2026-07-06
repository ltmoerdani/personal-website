**Status:** ✅ Solved

# Jual Tanah Bogor Landing Page — Full Build

**Topic:** feature / landing-page / copywriting
**Created:** 2026-07-07
**Updated:** 2026-07-07
**Tags:** #nextjs #react #landing-page #copywriting #image-gallery #lightbox

---

## Overview

Standalone landing page for a property listing (Tanah Split-Level 549 M² SHM di Aryawidura Residence, Bogor). Built outside the i18n routing system as a dedicated sales page with hero photo background, photo gallery with lightbox, concept visualization section (before/after), and narrative copywriting. Committed and pushed to `feat/ads` branch.

---

## Timeline

### Phase 1 — Asset Preparation & Page Scaffolding

| Step | Detail |
|------|--------|
| Photo rename | 6 field photos renamed from timestamp format (`2015-05-04 10.22.29.jpg`) to descriptive kebab-case (`01-hero-panoramic-overview.jpg`, `02-front-plot-wide.jpg`, etc.) inside `public/tanah-bogor/` |
| Layout + middleware | New `app/jual-tanah-bogor/` route with standalone layout (outside `[locale]`). Excluded from locale middleware via `matcher` pattern. |
| SEO metadata | Dedicated `layout.tsx` with title, description, canonical, OpenGraph (locale `id_ID`, siteName `ltmoerdani.com`) |

### Phase 2 — Hero Section with Photo Background

| Step | Detail |
|------|--------|
| Background image | `01-hero-panoramic-overview.jpg` as full-bleed hero background via `next/image` `fill` + `objectFit: cover` |
| Overlay | Dual gradient: vertical darkening (`rgba(8,18,15,0.28→0.82)`) + radial green accent (`rgba(46,93,75,0.18)`) |
| Layout | 2-column grid: left (title + stats), right (sticky summary card with WhatsApp CTA) |
| Stats card | 4 facts: 549 M², Rp 3 M, 2 SHM, Langsung. Glassmorphism with `backdropFilter: blur(10px)` |
| Summary aside | Glassmorphism card with Lokasi, Kondisi, Status, and WhatsApp button |

### Phase 3 — Narrative Sections

| Section | Content |
|---------|---------|
| Bismillah | Personal narrative: land belonged to father, mother passed away, selling directly without agent. Retrospective self-mention: "Saya masih ingat percakapan terakhir kami tentang tanah ini." |
| Foto Lapangan | Photo gallery with all 6 field photos. First photo full-width panorama (`21/9`), remaining 4 in responsive grid (`4/3`). Each photo click-to-zoom with lightbox modal. |
| Detail Properti | Spec table: luas, sertifikat, harga, kontur, talud, lokasi |
| Kontur Split-Level | Descriptive paragraph with imagery: "bambu dan pohon matoa dari lahan tetangga menjuntai melewati pagar" |

### Phase 4 — Concept Visualization (Before/After)

| Step | Detail |
|------|--------|
| 4 growth scenarios | Villa Pribadi, Airbnb & Guest House, Studio/Workspace, Taman & Gazebo |
| Card layout | 1 card per row (full-width), not grid columns |
| Before/After images | Stacked vertically (atas-bawah) for maximum width. "Sebelum" uses `02-front-plot-wide.jpg` for all. "Sesudah" uses AI-generated concept images (`Villa-Pribadi.png`, `aibnb.png`, `workshop.png`, `taman-gazebo.png`) |
| Zoom support | Both before and after images are clickable buttons that open the shared lightbox modal |
| Caption labels | "Sebelum (kondisi saat ini)" and "Sesudah (konsep)" with descriptive caption + "Caption visual: Gemini 3.1 Flash" attribution |
| Concept images | Uploaded by owner as PNG renderings of potential development |
| Closing line | "Apa yang Anda bayangkan, bisa Anda wujudkan di lanskap split-level ini." |
| Honest disclaimer | "Catatan jujur: Saya bukan arsitek atau kontraktor..." |

### Phase 5 — Remaining Sections

| Section | Content |
|---------|---------|
| Lokasi & Akses | Bullet list of nearby amenities (RS, mall, toll roads) + Google Maps embed |
| Mengapa Langsung dari Saya | No agent, no calo, no markup. Price opening, will not drop. |
| Kenapa Tidak Bisa Menunggu Lama | Scarcity: split-level land increasingly rare in Tegal Gundil |
| CTA | WhatsApp button + "Selama iklan ini masih tayang, tanah masih tersedia" |

### Phase 6 — Copywriting Audit (Writing Framework V4)

| Issue Found | Resolution |
|-------------|------------|
| Section "Bayangkan" used marketing buzzwords ("Instagrammable tanpa effort", "Pool di bawah, lounge di atas") inconsistent with personal narrative tone | Rewrote all 4 scenario descriptions to match the "anak yang menjual tanah keluarga" voice |
| Unverified claims ("15 menit dari Mall Jambu Dua", "Parkir 4-6 mobil") | Added attribution sources ("Kontraktor yang survey bilang", "Arsitek tetangga bilang") |
| Generic investment claim ("nilai tanahnya naik setiap tahun") | Made specific with source ("naik nilai rata-rata 8 sampai 12 persen per tahun, menurut data notaris setempat") |
| Catatan disclaimer too generic | Rewrote to "Saya bukan arsitek atau kontraktor. Yang saya tulis datang dari percakapan dengan tiga orang..." |

### Phase 7 — Diction Normalization

| Before | After | Reason |
|--------|-------|--------|
| short-stay | sewa harian | ID consistency |
| host | pemilik | ID consistency |
| resort-style | bergaya resor | ID consistency |
| marketable | mudah dipasarkan | ID consistency |
| hybrid | campuran | ID consistency |
| lobby, meeting | lobi, rapat | ID consistency |
| landscape | lanskap | ID consistency |
| terasering natural | terasering alami | ID consistency |
| arsitek anda sendiri | arsitek Anda sendiri | Capitalization consistency |

### Phase 8 — Layout Consistency & Cache Fixes

| Issue | Resolution |
|-------|-----------|
| Section widths inconsistent (820px vs 1180px) | Unified all sections to `maxWidth: 1180` |
| Paragraph widths inconsistent (`maxWidth: 720` and `760` on some paragraphs) | Removed per-paragraph maxWidth, let text follow container |
| Image not updating after replacement | Cleared `.next/` + `.next/cache/images`, restarted dev server, used query string cache busting |

### Phase 9 — Git

| Step | Detail |
|------|--------|
| Branch | `feat/ads` (created by user) |
| Commit | `8fa0ee8` — "feat: add Jual Tanah Bogor landing page with photo gallery and lightbox" |
| Files | 9 files: `layout.tsx`, `page.tsx`, `middleware.ts` (modified), 6 photos |
| Push | `git push origin feat/ads` — pushed to GitHub |

---

## Files Modified/Created

| File | Action | Purpose |
|------|--------|---------|
| `app/jual-tanah-bogor/layout.tsx` | Created | Standalone layout with SEO metadata, fonts, outside i18n |
| `app/jual-tanah-bogor/page.tsx` | Created | Full landing page (~640 lines) |
| `middleware.ts` | Modified | Excluded `/jual-tanah-bogor` from locale routing |
| `public/tanah-bogor/01-hero-panoramic-overview.jpg` | Created (renamed) | Hero background |
| `public/tanah-bogor/02-front-plot-wide.jpg` | Created (renamed) | Gallery + before images |
| `public/tanah-bogor/03-upper-slope-overview.jpg` | Created (renamed) | Gallery |
| `public/tanah-bogor/04-side-wide-front-lot.jpg` | Created (renamed) | Gallery |
| `public/tanah-bogor/05-rear-panorama-under-construction.jpg` | Created (renamed) | Gallery |
| `public/tanah-bogor/06-rear-approach-wide.jpg` | Created (renamed) | Gallery |
| `public/tanah-bogor/Villa-Pribadi.png` | Created (uploaded) | Concept: after |
| `public/tanah-bogor/aibnb.png` | Created (uploaded) | Concept: after |
| `public/tanah-bogor/workshop.png` | Created (uploaded) | Concept: after |
| `public/tanah-bogor/taman-gazebo.png` | Created (uploaded) | Concept: after |

---

## Technical Decisions

### Why outside `[locale]` routing?
This is a standalone Indonesian-language sales page, not part of the portfolio's bilingual i18n system. Placing it in `app/jual-tanah-bogor/` (sibling to `[locale]`) keeps it isolated with its own layout, metadata, and font loading without interfering with locale negotiation.

### Why `maxWidth: 1180` for all sections?
The photo gallery needs width for panorama images. Inconsistent container widths between gallery (1180) and text sections (820) created visual jarring. Unified to 1180 for all.

### Why stacked before/after instead of side-by-side?
Photos are panoramic (wide aspect ratio). Side-by-side at `minmax(300px, 1fr)` constrains each image to ~50% width. Stacking vertically gives each image full container width (1180px), maximizing detail visibility.

### Why shared lightbox state?
Single `selectedPhoto` state drives one lightbox modal component. Both the Foto Lapangan gallery and the concept before/after images use the same `setSelectedPhoto()` handler. Keeps DOM clean and behavior consistent.

---

## Copywriting Framework Applied

**Genre:** Personal sales letter (not brochure, not agent listing)

**Voice:** Anak yang menjual tanah keluarga almarhumah ibunya. Personal, hening, jujur.

**Writing Framework V4 principles applied:**
1. **Kehadiran Penulis** — "Saya masih ingat percakapan terakhir...", "Saya bukan arsitek. Tapi saya sudah berdiri di tanah ini berkali-kali"
2. **Akuntabilitas Konkret** — "menurut data notaris setempat", "kontraktor yang survey bilang"
3. **Asimetri Relasional** — "Saya bukan arsitek atau kontraktor... datang dengan arsitek Anda sendiri"
4. **Zero Em Dash** — all sections verified, no em dashes in copy

---

## Lessons Learned

1. **Cache busting for image replacement in Next.js dev:** Query strings (`?v=2`) on page URL help browser cache, but Next.js Image Optimization has its own cache in `.next/cache/images/`. Must clear both for replaced images to show.
2. **Before/After stacking > side-by-side for panoramic photos:** Panoramic images lose impact when constrained to half-width. Stacking gives each photo the full canvas it deserves.
3. **Copywriting consistency across sections:** When a page has narrative sections (Bismillah) AND sales sections (Bayangkan), the voice must stay consistent. Marketing buzzwords ("instagrammable", "resort-style") break trust when they appear mid-page after a personal story about losing a parent.
4. **Lightbox reusability:** A single `PreviewPhoto` type + `selectedPhoto` state can serve multiple image sources (gallery, before/after) without duplicating modal markup.

---

*Created: 2026-07-07 — Session 5*
