# 🧠 WORKLOG — ltmoerdani.com

**Project:** ltmoerdani.com — Personal portfolio (Laksmana Tri Moerdani, Fractional CPO)
**Updated:** 2026-07-05 | **Status:** In development

---

## ⚡ Session Handoff

| Field | Value |
|-------|-------|
| **Last Session** | 2026-07-05 — Hero fix, em dash cleanup, OpenCode case study rewrite, dynamic install count |
| **Worked On** | **FULL SITE POLISH + OPENCODE CASE STUDY.** (1) Hero heading: font `clamp(44px,6.4vw,96px)` → `clamp(32px,5vw,64px)`, forced 3-line block display. (2) Zero em dashes: 74 across 16 files → 0 in visible copy. (3) Writing Framework V4 applied to all copywriting (EN/ID). (4) OpenCode case study: complete rewrite with 11 sections, billing context, 3-tier model explanation, dynamic install count from VS Code Marketplace API, comparison charts (OpenCode vs z.ai), user reviews. (5) OpenCode logo integration: homepage card + case study header. (6) LinkedIn button icons + hover colors. (7) Middleware fix: excluded `/api/` from locale prefix. |
| **Stopped At** | All sections polished. OpenCode case study fully written with dynamic data, charts, reviews. Zero errors across all pages. |
| **Next Action** | → (a) Add favicon + OG image (currently 404). (b) Mobile QA across breakpoints. (c) Set `NEXT_PUBLIC_SITE_URL=https://ltmoerdani.com` for production. (d) Deploy to Vercel. (e) Pro Archery + MyArchery case study enrichment (similar depth to OpenCode). |
| **Open Issues** | (1) `GET /favicon.ico 404` — no favicon yet. (2) Next.js 16 `middleware.ts` deprecation warning (still functional, monitor). (3) Pro Archery + MyArchery case studies still need enrichment to match OpenCode depth. |

---

## 🔥 ACTIVE TASKS

### CONTENT-02 Real Case Study Data
**Status:** 🟡 Partially Complete
**Priority:** P0 | **Est. remaining:** ~2-3 days
**Started:** 2026-07-05
**Last touched:** 2026-07-05
**Next Action:** → Enrich Pro Archery + MyArchery case studies to match OpenCode depth (dynamic data, charts, reviews).
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

*Last updated: 2026-07-05 14:00*
*Project: **ltmoerdani.com** — Personal portfolio*
