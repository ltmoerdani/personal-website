# 🌐 ltmoerdani.com — Project Context

> **Purpose:** Provide complete context about the ltmoerdani.com project for AI assistants, contributors, and future reference.

---

## 1. Overview

### What is ltmoerdani.com?

**ltmoerdani.com** is the personal portfolio website of **Laksmana (Oci) Tri Moerdani** — Fractional Chief Product Officer (CPO) and co-founder of Reka Cipta Digital. The site serves as a single-page argument-driven portfolio that positions Oci as a senior product leader for Indonesian digital companies.

### Core Concept

> **"This website is not a portfolio — it is an argument."**

Unlike typical consultant websites that work like brochures (big name, service list, client logos, "Contact Me" button), this site opens with a question that makes the *right* visitor stop and think — and lets the *wrong* visitor leave. It then builds the case gradually: problem → thesis → evidence → conclusion.

### Target Audience

Founders or CEOs of Indonesian digital companies whose product is running but whose direction has started to blur.

### One Job

Generate a qualified initial conversation — not clicks, not anonymous form submissions, but someone who already knows exactly why they are contacting Oci.

### Status

| Aspect | Detail |
|--------|--------|
| **Version** | `1.0.0` (`package.json`) |
| **Status** | In development (i18n architecture in place, content polish ongoing) |
| **Repository** | Local workspace at `/Users/ltmoerdani/Startup/ltmoerdani` |
| **Domain** | `ltmoerdani.com` (`NEXT_PUBLIC_SITE_URL` env var) |
| **Owner** | Laksmana (Oci) Tri Moerdani |

---

## 2. Tech Stack

```
┌─────────────────────────────────────────────────────────────┐
│                  LTMOERDANI.COM STACK                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FRAMEWORK         Next.js 16 (App Router)                  │
│  ├── React 19                                               │
│  └── Turbopack (default dev bundler)                        │
│                                                             │
│  i18n              next-intl 4.13                           │
│  ├── Locale routing: /en/... and /id/... (prefix required)  │
│  ├── middleware.ts → locale negotiation + prefix enforce    │
│  ├── [locale] dynamic segment in app router                 │
│  ├── Inline <T en id /> helper for component copy           │
│  └── messages/{en,id}.json for framework-level strings      │
│                                                             │
│  LANGUAGE          TypeScript 5 (strict)                    │
│                                                             │
│  STYLING           CSS custom properties (design tokens)    │
│  ├── No CSS framework (vanilla CSS + inline styles)         │
│  └── globals.css with :root token definitions               │
│                                                             │
│  FONTS (next/font)                                          │
│  ├── Archivo (display + body sans, 400-900)                 │
│  ├── Instrument Serif (editorial accents, 400 + italic)     │
│  └── JetBrains Mono (stats, numbers, code refs)             │
│                                                             │
│  ANIMATION          Scroll reveal (Intersection Observer)   │
│  DEPLOY             TBD (likely Vercel)                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Key Stack Notes

- **i18n via next-intl** — URL-driven locale (`/en/...`, `/id/...`). No runtime toggle; the URL segment decides the language. Better for SEO and payload size.
- **No backend** — Pure static/portfolio site. No database, no auth, no server actions.
- **No UI framework** — Vanilla CSS with design tokens.
- **next/font** — Self-hosted Google Fonts.
- **Minimal dependencies** — `next`, `react`, `react-dom`, `next-intl`.

---

## 3. Architecture & Structure

### Locale-Aware Routing

```
ltmoerdani/
├── app/
│   ├── [locale]/               # Dynamic locale segment (en | id)
│   │   ├── layout.tsx          # Locale-aware root layout
│   │   │                       #   <html lang>, font CSS vars,
│   │   │                       #   NextIntlClientProvider, metadata
│   │   ├── page.tsx            # Homepage (single-page portfolio)
│   │   ├── not-found.tsx       # Locale-aware 404
│   │   └── case/               # Case study deep-dive pages
│   │       ├── myarchery/
│   │       ├── opencode/
│   │       └── pro-archery/
│   │
│   ├── globals.css             # Global styles + design tokens
│   ├── layout.tsx              # Root passthrough (actual layout in [locale])
│   ├── robots.ts               # robots.txt
│   └── sitemap.ts              # Dynamic sitemap
│
├── i18n/
│   ├── config.ts               # SOURCE OF TRUTH: locales, defaultLocale,
│   │                           #   siteBaseUrl, localeHtmlLang, localeLabels
│   ├── navigation.ts           # Locale-aware navigation helpers
│   └── request.ts              # Server-side message loader (next-intl)
│
├── messages/                   # Framework-level i18n strings
│   ├── en.json
│   └── id.json
│
├── middleware.ts               # next-intl middleware:
│                               #   locale negotiation + prefix enforcement
│                               #   (Accept-Language + NEXT_LOCALE cookie)
│
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── StatsMarquee.tsx
│   ├── Positioning.tsx
│   ├── CaseStudies.tsx
│   ├── Approach.tsx
│   ├── Timeline.tsx
│   ├── Rating.tsx
│   ├── Testimonials.tsx
│   ├── Credentials.tsx
│   ├── Contact.tsx
│   ├── Reveal.tsx              # Scroll reveal wrapper
│   ├── T.tsx                   # Inline i18n: <T en="..." id="..." />
│   ├── CaseNav.tsx
│   ├── CaseFooter.tsx
│   └── CasePrimitives.tsx
│
├── prototype/                  # Design prototypes (HTML reference)
│   ├── v1/                     # Initial concept + OCI concept doc
│   ├── v2/                     # Portfolio variants (light/dark)
│   ├── v3/                     # Case study pages
│   └── v4/                     # Latest bundled prototype (current)
│
├── public/                     # Static assets
├── docs/                       # This documentation
│
├── package.json                # Deps: next, react, react-dom, next-intl
├── tsconfig.json               # TS strict config (@/* path alias)
├── next.config.js              # withNextIntl plugin wrapper
└── middleware.ts               # Locale routing middleware
```

### i18n Data Flow

```
Visitor hits "/"
       │
       ▼
┌─────────────────────┐
│  middleware.ts      │  next-intl createMiddleware
│  (locale negotiate) │  Accept-Language + NEXT_LOCALE cookie
└────────┬────────────┘
         │  redirect to /en/... or /id/...
         ▼
┌─────────────────────┐
│  app/[locale]/      │  setRequestLocale() for static rendering
│  layout.tsx         │  NextIntlClientProvider wraps children
└────────┬────────────┘
         │
         ▼
┌─────────────────────┐
│  Components         │  <T en="Work" id="Karya" />
│  (T.tsx helper)     │  Renders only matching language → smaller payload
└─────────────────────┘
```

### Homepage Section Flow

`app/[locale]/page.tsx` renders sections in this order:

```
Nav → Hero → StatsMarquee → Positioning → CaseStudies → Approach
     → Timeline → Rating → Testimonials → Credentials → Contact
```

1. **Hero** — Opening question that filters the audience
2. **StatsMarquee** — Social proof at a glance
3. **Positioning** — The thesis
4. **CaseStudies** — Evidence (links to deep-dive pages)
5. **Approach** — How Oci works with clients
6. **Timeline** — 20-year career credibility
7. **Rating** — Quantified proof
8. **Testimonials** — Voice-of-customer evidence
9. **Credentials** — Formal credentials + bio
10. **Contact** — The ask: start a conversation

### Case Study Pages

Each case study (`/[locale]/case/[slug]`) is a long-form deep dive:
- **MyArchery** — Founder & builder, side project → market standard
- **OpenCode** — (details in page)
- **Pro Archery** — (details in page)

---

## 4. Design System

### Color Tokens

Defined in `globals.css` `:root`:

```css
:root {
  --bg:           /* warm near-white background */
  --ink:          /* warm black text */
  --ink-light:    /* warm mid-gray secondary text */
  --accent:       /* deep muted green — forest accent */
  --accent-bg:    /* very light green surface */
  --white:        /* pure white */
}
```

**Reasoning:** Deep muted green — deliberate choice for an Indonesian digital consultant. Almost all competitors use blue or gray. Green feels authoritative, measured, not aggressive.

### Typography

| Role | Font | CSS Variable | Usage |
|------|------|-------------|-------|
| Display + Body | Archivo (400-900) | `--font-archivo` | Headlines, body, UI |
| Editorial | Instrument Serif (400 + italic) | `--font-instrument` | Pull quotes, accents |
| Mono | JetBrains Mono (400/500/700) | `--font-jetbrains` | Stats, numbers, code |

Loaded via `next/font/google` in `app/[locale]/layout.tsx`.

### Design Principles

1. **Argument-driven** — Every section earns its place
2. **Warm, not corporate** — Paper-like background
3. **Editorial typography** — Serif accents for authority
4. **Minimal motion** — Scroll reveal only
5. **Mobile-first** — Responsive `clamp()` sizing

---

## 5. Key Features

### 5.1 Internationalization (next-intl)

Fully bilingual (English / Bahasa Indonesia) with URL-driven locale routing:

- **Locales:** `en` (default), `id` — `i18n/config.ts`
- **URL pattern:** `/en/...` and `/id/...` (prefix always required)
- **Negotiation:** `middleware.ts` uses `Accept-Language` + `NEXT_LOCALE` cookie
- **Inline helper:** `<T en="Work" id="Karya" />` — most copy inline in components
- **Message bundles:** `messages/{en,id}.json` for framework-level strings
- **SEO:** hreflang alternates in `generateMetadata`

**To add a new locale:**
1. Add code to `locales` in `i18n/config.ts`
2. Create `messages/{code}.json`
3. Add to `localeHtmlLang` and `localeLabels`

### 5.2 Scroll Reveal

- `<Reveal>` wrapper uses Intersection Observer
- Respects `prefers-reduced-motion`

### 5.3 Case Study System

- Shared primitives (`CaseStat`, `CaseSection`, `CaseQuote`, `CaseScreenshot`)
- Consistent `CaseNav` + `CaseFooter`
- Route: `/[locale]/case/[slug]`

### 5.4 Performance & SEO

- `next/font` self-hosting
- Static generation with `setRequestLocale()`
- Only active locale content sent to browser
- `sitemap.ts`, `robots.ts`, hreflang, OG metadata

---

## 6. Conventions

### Architecture Rules

1. **`app/[locale]/`** — All pages live under `[locale]` segment
2. **`app/[locale]/layout.tsx`** — Real root layout (fonts, `<html>`, provider, metadata)
3. **`i18n/config.ts`** — Single source of truth for locale config
4. **`<T>` for bilingual copy** — Inline `en`/`id` props
5. **Inline styles for layout** — CSS custom properties for theming

### Import Aliases

```typescript
import { Nav } from '@/components/Nav';
import { T } from '@/components/T';
import { locales, defaultLocale } from '@/i18n/config';
```

### Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Component | PascalCase | `StatsMarquee.tsx` |
| Page | lowercase | `page.tsx` |
| CSS variable | kebab-case | `--accent-bg` |
| Locale folder | bracket | `[locale]/` |

### Git Conventions

- Conventional Commits: `feat:`, `fix:`, `design:`, `i18n:`, `docs:`, `chore:`

---

## 7. Environment

### Prerequisites

- **Node.js** 20+
- **npm**

### Commands

```bash
npm install
npm run dev      # localhost:3000
npm run build    # Production build
npm run start    # Start production
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production URL (SEO, sitemap, OG) | `http://localhost:3000` |

Production:
```bash
NEXT_PUBLIC_SITE_URL=https://ltmoerdani.com
```

---

## 8. Known Issues

- **Turbopack cache corruption:** If `Internal Server Error` appears with SST file errors, delete `.next/` and restart.
- **`middleware.ts` deprecation warning:** Next.js 16 may warn about middleware vs proxy convention. Still functional.
- **No favicon yet** — `GET /favicon.ico 404`.

---

## 9. Roadmap

### ✅ Done
- [x] Next.js 16 + React 19 + TypeScript setup
- [x] next-intl i18n with `[locale]` routing (en/id)
- [x] Design tokens + fonts
- [x] Homepage 11 sections
- [x] Case study routing + primitives
- [x] `<T>` i18n helper + `<Reveal>` scroll
- [x] SEO scaffolding (sitemap, robots, hreflang)

### 🟡 Next
- [ ] Final copy polish (EN/ID)
- [ ] Real case study data + screenshots
- [ ] Favicon + OG image
- [ ] Mobile QA
- [ ] Deploy to ltmoerdani.com
- [ ] Contact form + analytics

---

*This document reflects the current state of ltmoerdani.com. Update when significant changes occur.*
