# 🧠 WORKLOG — ltmoerdani.com

**Project:** ltmoerdani.com — Personal portfolio (Laksmana Tri Moerdani, Fractional CPO)
**Updated:** 2026-07-07 | **Status:** In development

---

## ⚡ Session Handoff

| Field | Value |
|-------|-------|
| **Last Session** | 2026-07-07 — Jual Tanah Bogor standalone landing page (full build, committed to feat/ads) |
| **Worked On** | **JUAL TANAH BOGOR LANDING PAGE.** (1) Created standalone `app/jual-tanah-bogor/` route outside i18n. (2) Hero with panoramic photo background + glassmorphism stats card + summary aside. (3) Photo gallery: 6 field photos renamed to descriptive filenames, first photo full-width panorama, remaining in grid, all click-to-zoom with lightbox modal. (4) Concept visualization section: 4 growth scenarios (Villa, Airbnb, Studio, Taman) with stacked before/after images, zoomable. (5) Copywriting audit (Writing Framework V4): rewrote scenario descriptions for voice consistency, normalized mixed EN/ID diction. (6) Unified all section widths to 1180px. (7) Fixed image cache issue (.next/cache/images). (8) Committed to `feat/ads` branch, pushed to GitHub. |
| **Stopped At** | Landing page complete and committed. Documentation created. |
| **Next Action** | → (a) Add favicon + OG image (currently 404). (b) Mobile QA across breakpoints for tanah-bogor page. (c) Set `NEXT_PUBLIC_SITE_URL=https://ltmoerdani.com` for production. (d) Deploy to Vercel. (e) Pro Archery case study enrichment. (f) Merge `feat/ads` to main when ready. |
| **Open Issues** | (1) `GET /favicon.ico 404` — no favicon yet. (2) Next.js 16 `middleware.ts` deprecation warning (still functional, monitor). (3) Pro Archery case study still needs enrichment. (4) Branch `feat/ads` not yet merged to main. |

---

## 🔥 ACTIVE TASKS

### CONTENT-02 Real Case Study Data
**Status:** 🟡 Partially Complete
**Priority:** P0 | **Est. remaining:** ~2-3 days
**Started:** 2026-07-05
**Last touched:** 2026-07-06
**Next Action:** → Enrich Pro Archery case study to match MyArchery/OpenCode depth (dynamic data, charts, reviews).
**Blocked by:** -

### SEO-01 Favicon + OG Image
**Status:** 🟡 Not Started
**Priority:** P1 | **Est. remaining:** ~1-2 hours
**Next Action:** → Create favicon set + OG image (1200×630). Add to `app/` and metadata.
**Blocked by:** -

### SEO-02 SEO Polish
**Status:** 🟡 Not Started
**Priority:** P1 | **Est. remaining:** ~3-4 hours
**Next Action:** → Verify sitemap.ts includes all locale variants. Check structured data (JSON-LD Person). Refine metadata.
**Blocked by:** -

### INFRA-01 Deploy to Production
**Status:** 🟡 Not Started
**Priority:** P1 | **Est. remaining:** ~2 hours
**Next Action:** → Deploy to Vercel, configure ltmoerdani.com domain, set NEXT_PUBLIC_SITE_URL, HTTPS.
**Blocked by:** CONTENT-02

---

## ✅ COMPLETED (Recent)

### 📅 2026-07-07 — Session 5: Jual Tanah Bogor Landing Page
| ID | Tag | Task — Impact | Time |
|----|-----|---------------|------|
| ADS-01 | `content` | Standalone landing page — `app/jual-tanah-bogor/` route with own layout, metadata, outside i18n. Excluded from locale middleware | ~30min |
| ADS-02 | `ui` | Hero with photo background — panoramic image as full-bleed background, dual gradient overlay, 2-column grid (title+stats / summary aside), glassmorphism cards | ~25min |
| ADS-03 | `ui` | Photo gallery — 6 field photos renamed to descriptive kebab-case, first photo full-width (21/9), remaining 4 in grid (4/3), all click-to-zoom with shared lightbox modal | ~30min |
| ADS-04 | `content` | Narrative sections — Bismillah (personal story), Detail Properti (spec table), Kontur (descriptive imagery), Lokasi & Akses (Google Maps embed), Mengapa Langsung, Kenapa Cepat, CTA | ~30min |
| ADS-05 | `ui` | Concept visualization section — 4 growth scenarios (Villa, Airbnb, Studio, Taman), 1 card per row, before/after images stacked vertically, both zoomable | ~30min |
| ADS-06 | `content` | Copywriting audit (Writing Framework V4) — rewrote all scenario descriptions for voice consistency with personal narrative tone. Removed marketing buzzwords, added source attributions | ~20min |
| ADS-07 | `content` | Diction normalization — 9 mixed EN/ID terms normalized (short-stay→sewa harian, host→pemilik, resort-style→bergaya resor, landscape→lanskap, natural→alami, etc.) | ~10min |
| ADS-08 | `fix` | Layout consistency — unified all section maxWidth to 1180px, removed per-paragraph maxWidth constraints | ~10min |
| FIX-06 | `fix` | Image cache issue — replaced `01-hero-panoramic-overview.jpg` not updating. Cleared `.next/` + `.next/cache/images`, restarted dev server | ~10min |
| GIT-01 | `infra` | Git commit + push — committed 9 files to `feat/ads` branch (8fa0ee8), pushed to GitHub | ~5min |
| DOC-06 | `docs` | Landing page doc — `docs/case-studies/03-2026-07-07-tanah-bogor-landing-page.md` (full timeline, technical decisions, copywriting framework, lessons) | ~20min |
| DOC-07 | `docs` | Image cache bugfix doc — `docs/bug-fixes/02-2026-07-07-nextjs-image-cache-replacement.md` (root cause, resolution, key insight) | ~10min |

### 📅 2026-07-06 — Session 4: MyArchery Visual Polish
| ID | Tag | Task — Impact | Time |
|----|-----|---------------|------|
| UI-04 | `ui` | Asset renaming — renamed all MyArchery images to descriptive kebab-case filenames (7 files), updated all code references | ~15min |
| UI-05 | `ui` | Header branding — changed to #0d47a3, white metadata text, logo in white block, left-aligned, scaled up | ~15min |
| UI-06 | `ui` | Inside-sport gallery — added 6 on-site photos to "Built from inside the sport" section with responsive grid (220px min) | ~20min |
| UI-07 | `ui` | Feature cards restructure — merged card 01 (Live Scoring) + card 06 (Jakarta Series Ranking) with images into full-width cards. Added `emphasize` prop. Reordered 06-07. Removed duplicate leaderboard image from release timeline | ~25min |
| UI-08 | `ui` | Store badges — downloaded official Google Play + App Store badges, added below mobile scoring flow, 150×46px each, centered | ~15min |
| UI-09 | `ui` | Theme consistency — contact card border/bg → #0d47a3, CTA button → #0d47a3, CaseQuote border → #0d47a3 (added `accentColor` prop to CasePrimitives.tsx) | ~10min |
| UI-10 | `ui` | Logo strip cleanup — removed MyArchery logo from partner/vendor logo strip | ~5min |
| FIX-04 | `fix` | Hydration error fix — moved gallery grid from CaseSection child to standalone `<section>` to avoid `<div>` inside `<p>` wrapper | ~5min |
| FIX-05 | `fix` | Cache busting — dashboard image: versioned filename (-v2.png) instead of query string. Google Play badge: versioned copy + cleared .next/cache | ~10min |
| DOC-05 | `docs` | Case study doc — `docs/case-studies/02-2026-07-06-myarchery-visual-polish.md` (full timeline, files, lessons learned) | ~20min |

### 📅 2026-07-06 — Session 3: ID Localization Naturalization
| ID | Tag | Task — Impact | Time |
|----|-----|---------------|------|
| I18N-01 | `i18n` | ID copy naturalization — audited 10 files, restructured EN→ID translations from word-for-word to semantic equivalence (Writing Framework V4 applied: register calibration, idiom substitution, sentence restructuring) | ~40min |
| I18N-02 | `i18n` | Register calibration — founder-voice ("nggak", "ngasih", "beneran") in narrative sections, professional-neutral in labels/metadata. Section-specific: Hero (professional), Timeline (reflective), Case studies (confessional), Contact (warm-direct) | ~15min |
| I18N-03 | `i18n` | EN idiom → ID equivalent mapping — "drifted apart"→"meleset", "hit a nerve"→"pas sasaran", "numbers tell the story"→"Angkanya yang menjawab", "equally capable"→"tak kalah canggih", "learning curve"→"perlu belajar dari nol" | ~10min |
| CONTENT-07 | `content` | Em dash cleanup (ID) — removed all em dashes in user-facing ID copy across messages/id.json + pro-archery phase 04. Replaced with koma, titik dua, "tapi/melainkan" | ~5min |
| FIX-03 | `fix` | JSX syntax fix — 3 files had `id:` (object syntax) used in JSX prop context after bulk replacement. Fixed: opencode (2 instances), pro-archery (3 instances), myarchery (2 instances) | ~10min |
| DOC-04 | `docs` | ID localization doc — `docs/architecture/04-2026-07-06-id-localization-naturalization.md` (3-layer approach, anti-patterns, lessons for future localization) | ~15min |

### 📅 2026-07-05 — Session 2: Full Site Polish + OpenCode Case Study
| ID | Tag | Task — Impact | Time |
|----|-----|---------------|------|
| UI-01 | `ui` | Hero heading fix — font `clamp(44px,6.4vw,96px)` → `clamp(32px,5vw,64px)`, forced 3-line block display, reduced hero height ~33% | ~15min |
| CONTENT-03 | `content` | Em dash cleanup — 74 em dashes across 16 files → 0 in visible copy (koma, titik dua, titik baru, titik tengah, en dash) | ~30min |
| CONTENT-04 | `content` | Writing Framework V4 copywriting — applied retrospective, friction, rhythm, author presence to all sections (EN/ID) | ~25min |
| CONTENT-05 | `content` | OpenCode case study rewrite — 7 → 11 sections: billing context, 3-tier model, dynamic stats, comparison charts (OpenCode vs z.ai), user reviews | ~60min |
| CONTENT-06 | `content` | Dynamic install count — API route + hook fetching from VS Code Marketplace API, 1hr cache, fallback 5,734 | ~20min |
| UI-02 | `ui` | OpenCode logo integration — homepage card (70%, max 220px) + case study header (20vw, max 260px) with 2-column grid layout | ~15min |
| UI-03 | `ui` | LinkedIn button icons — SVG icon + LinkedIn blue hover (#0A66C2) on hero + footer buttons | ~10min |
| FIX-02 | `fix` | Middleware API exclusion — excluded `/api/` from locale prefix to fix 404 on `/api/installs` | ~5min |
| DOC-02 | `docs` | OpenCode case study doc — `docs/case-studies/01-2026-07-05-opencode-case-study-rewrite.md` | ~10min |
| DOC-03 | `docs` | Hero/em dash design doc — `docs/design/01-2026-07-05-hero-text-size-em-dash-cleanup.md` | ~10min |

### 📅 2026-07-05 — Session 1: Docs + Server Fix
| ID | Tag | Task — Impact | Time |
|----|-----|---------------|------|
| DOC-01 | `docs` | Docs cleanup — rewrote all 7 docs, removed Zertifico residue, aligned to ltmoerdani.com with next-intl architecture | ~45min |
| FIX-01 | `fix` | Turbopack cache corruption fix — cleared `.next/` to resolve `Internal Server Error` from missing SST files | ~10min |

---

## 📋 COMPLETED HISTORY

### 📅 2026-07-05 — Project Foundation
- Next.js 16 + React 19 + TypeScript project initialized
- next-intl 4.13 i18n integration with `[locale]` routing (en/id)
- `i18n/config.ts` as single source of truth (locales, defaultLocale, siteBaseUrl)
- `middleware.ts` locale negotiation (Accept-Language + NEXT_LOCALE cookie)
- Design tokens in `globals.css` (warm paper bg, forest green accent)
- Fonts via `next/font` (Archivo, Instrument Serif, JetBrains Mono)
- Homepage: 11 sections (Nav → Hero → StatsMarquee → Positioning → CaseStudies → Approach → Timeline → Rating → Testimonials → Credentials → Contact)
- Case study routing: `/[locale]/case/{myarchery, opencode, pro-archery}`
- Shared primitives: `CasePrimitives.tsx`, `CaseNav.tsx`, `CaseFooter.tsx`
- `<T>` inline i18n helper (renders only active locale)
- `<Reveal>` scroll animation wrapper
- SEO scaffolding: `sitemap.ts`, `robots.ts`, hreflang alternates, OG metadata
- Prototype lineage: v1 → v2 → v3 → v4 (current source of truth)

---

*Last updated: 2026-07-07*
*Project: **ltmoerdani.com** — Personal portfolio*
