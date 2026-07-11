# 🧠 WORKLOG — ltmoerdani.com

**Project:** ltmoerdani.com — Personal portfolio (Laksmana Tri Moerdani, Fractional CPO)
**Updated:** 2026-07-12 | **Status:** In development

---

## ⚡ Session Handoff

| Field | Value |
|-------|-------|
| **Last Session** | 2026-07-12 — CampaignForge case study: new page + homepage card + 7 screenshots |
| **Worked On** | **CAMPAIGNFORGE CASE STUDY.** (1) New case study page `app/[locale]/case/campaign-forge/page.tsx` — 9 narrative sections, 6 screenshots, bilingual EN/ID, stats grid, CaseQuote. (2) Homepage card in `CaseStudies.tsx` — `CampaignForgeCard()`, counter `(06)`→`(07)`. (3) 7 screenshots captured from live CampaignForge dev server (landing, problem, showcase, app form, impact, how-it-works, stack). (4) OpenCode footer nav updated with next→CampaignForge. (5) Card positioning iterated 4× (featured full-width → span 2 → span 2 normal → final: normal 1-column card, 3 per row). (6) Card order: swapped OpenCode/MyArchery positions. All verified via Playwright DOM inspection. |
| **Stopped At** | Case study page live, all content bilingual, screenshots captured, card positioned as normal grid card. Documentation created. |
| **Next Action** | → (a) Add favicon + OG image (currently 404). (b) Commit Session 7 changes. (c) Set `NEXT_PUBLIC_SITE_URL=https://ltmoerdani.com` for production. (d) Deploy to Vercel. (e) Pro Archery case study enrichment. (f) Merge to main when ready. |
| **Open Issues** | (1) `GET /favicon.ico 404` — no favicon yet. (2) Next.js 16 `middleware.ts` deprecation warning (still functional, monitor). (3) Pro Archery case study still needs enrichment. (4) Branch not yet merged to main. (5) Session 7 changes not yet committed. |

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

### 📅 2026-07-12 — Session 7: CampaignForge Case Study
| ID | Tag | Task — Impact | Time |
|----|-----|---------------|------|
| CASE-01 | `case-study` | New case study page — `app/[locale]/case/campaign-forge/page.tsx`. 9 narrative sections (invitation, gap, message match, pipeline, deploy hub, operator data, what happened next, decisions, stack). Bilingual EN/ID via `<T>`. Header dark theme with CampaignForge blue accent `#3B82F6`. Stats grid: 5hrs→min, 3 platforms, 96% consistency, 2 wks | ~45min |
| CASE-02 | `screenshot` | 7 screenshots from live CampaignForge dev server — captured at 1440×900 viewport: landing hero, problem section, solution showcase, app form, impact metrics, how-it-works, stack transparency. Saved to `public/campaignforge-*.png` | ~20min |
| CASE-03 | `ui` | Homepage card — `CampaignForgeCard()` in `CaseStudies.tsx`. Normal card style (same as OpenCode/MyArchery). Visual box: dark `#0a0a0a` bg with SVG lightning bolt logo. Tags: AI tool, Affiliate, Next.js. Counter updated `(06)`→`(07)` | ~15min |
| CASE-04 | `ui` | Card positioning iterations — 4 attempts: (1) featured full-width outside grid, (2) featured span 2 inside grid, (3) normal span 2 with aspectRatio override, (4) FINAL: normal 1-column card, 3 per row, 405px height matching all others | ~25min |
| CASE-05 | `ui` | Card order swap — swapped OpenCode and MyArchery positions. Final: CampaignForge, OpenCode, MyArchery (row 1) / Blazz, JAKI, Validasi (row 2) | ~2min |
| CASE-06 | `nav` | OpenCode footer nav — added `next` prop to `CaseFooter` in opencode page → CampaignForge | ~2min |
| DOC-09 | `docs` | Case study documentation — `docs/case-studies/04-2026-07-11-campaignforge-case-study.md` (narrative framing, file structure, screenshot list, card iterations, technical details, regression watch) | ~20min |
| DOC-10 | `docs` | Worklog update — Session 7 handoff + completed tasks table | ~10min |

### 📅 2026-07-07 — Session 6: Responsive Fixes + Root Layout HTML Tags
| ID | Tag | Task — Impact | Time |
|----|-----|---------------|------|
| FIX-07 | `fix` | Responsive hero layout — hero grid stack 1-col on mobile/tablet via `land-hero-shell` CSS class + media queries. Heading resize `clamp(28px,10vw,44px)`, facts grid 2-col, detail rows stack vertical | ~20min |
| FIX-08 | `fix` | Root layout HTML tags — Next.js 16 runtime error "Missing `<html>` and `<body>` tags". Added `<html>`+`<body>`+fonts+globals.css to `app/layout.tsx`. Stripped `<html>`/`<body>` from `app/[locale]/layout.tsx`, `app/jual-tanah-bogor/layout.tsx`, `app/[locale]/not-found.tsx` (4 files) | ~15min |
| FIX-09 | `fix` | Social proof notification — restored visibility on mobile/tablet (was hidden via `display:none` over-correction). Restructured card-above-count via `flexDirection: column-reverse`. Animation enter from top (`translateY(-16px)` instead of `translateY(20px)`) | ~15min |
| DOC-08 | `docs` | Bug fix documentation — `docs/bug-fixes/03-2026-07-07-jual-tanah-responsive-and-root-layout.md` (3 bugs, timeline, key insights, verification matrix) | ~20min |

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
