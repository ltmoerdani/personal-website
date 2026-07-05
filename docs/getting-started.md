# Getting Started with ltmoerdani.com

> Personal portfolio of Laksmana (Oci) Tri Moerdani — Fractional CPO.

---

## Quick Start

### Prerequisites

- **Node.js** 20+
- **npm**

### Install & Run

```bash
git clone <repo-url>
cd ltmoerdani
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The middleware will redirect `/` to `/en` or `/id` based on your browser language.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Start production server |

### Environment

| Variable | Required | Default |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production only | `http://localhost:3000` |

---

## Project Structure

```
ltmoerdani/
├── app/
│   ├── [locale]/              # All pages under locale segment
│   │   ├── layout.tsx         # Root layout (fonts, i18n provider, metadata)
│   │   ├── page.tsx           # Homepage
│   │   └── case/              # Case studies
│   ├── globals.css            # Styles + design tokens
│   ├── robots.ts
│   └── sitemap.ts
├── i18n/
│   ├── config.ts              # Locale config (source of truth)
│   ├── navigation.ts
│   └── request.ts             # Message loader
├── messages/
│   ├── en.json
│   └── id.json
├── middleware.ts              # Locale negotiation
├── components/                # React components
└── prototype/                 # Design references (v1-v4)
```

Homepage (`app/[locale]/page.tsx`) composes 11 sections:

```
Nav → Hero → StatsMarquee → Positioning → CaseStudies → Approach
     → Timeline → Rating → Testimonials → Credentials → Contact
```

---

## Working with i18n

### URL-Driven Locales

- `/en/...` — English (default)
- `/id/...` — Bahasa Indonesia
- `/` — redirects based on `Accept-Language` header

### Inline Bilingual Copy

Use the `<T>` component for most copy:

```tsx
import { T } from '@/components/T';

<T en="Work" id="Karya" />
```

Only the matching language renders — no hidden duplicate content.

### Framework-Level Strings

For navigation labels, metadata, and structural strings, edit:

- `messages/en.json`
- `messages/id.json`

### Adding a Locale

1. Add code to `locales` in `i18n/config.ts`
2. Create `messages/{code}.json`
3. Add to `localeHtmlLang` and `localeLabels`

---

## Editing a Homepage Section

Each section is a component in `components/`:

```tsx
// components/Hero.tsx
import { T } from '@/components/T';
import { Reveal } from '@/components/Reveal';

export function Hero() {
  return (
    <Reveal>
      <T en="English copy" id="Teks Indonesia" />
    </Reveal>
  );
}
```

- Use `<T en="..." id="..." />` for any user-facing text
- Wrap with `<Reveal>` for scroll-triggered animation

---

## Adding a Case Study

1. Create `app/[locale]/case/your-slug/page.tsx`
2. Use shared primitives:

```tsx
import { CaseStat, CaseStatGrid, CaseSection, CaseQuote, CaseScreenshot } from '@/components/CasePrimitives';
import { CaseNav } from '@/components/CaseNav';
import { CaseFooter } from '@/components/CaseFooter';
```

3. Add a preview card in `components/CaseStudies.tsx`
4. Link to `/{locale}/case/your-slug`

---

## Design Tokens

Defined in `app/globals.css`:

```css
:root {
  --bg:         /* warm near-white */
  --ink:        /* warm black */
  --accent:     /* deep muted green */
  --accent-bg:  /* light green surface */
}
```

Use tokens in styles — don't hardcode hex values.

---

## Prototypes

Stored in `prototype/` for reference:

- **v1/** — Initial concept
- **v2/** — Portfolio variants
- **v3/** — Case study pages
- **v4/** — Latest (source of truth)

---

## Troubleshooting

### `Internal Server Error` with Turbopack

Delete the cache and restart:

```bash
rm -rf .next
npm run dev
```

### Page returns 500 with "No intl context found"

Ensure the page is under `app/[locale]/` and `NextIntlClientProvider` is in the layout. Client components using `<T>` must be marked `'use client'`.

---

## Deployment

Static Next.js app with no backend. Recommended: **Vercel**.

1. Push to GitHub
2. Connect repo to Vercel
3. Set `NEXT_PUBLIC_SITE_URL=https://ltmoerdani.com`
4. Deploy

---

*Last updated: 2026-07-05*
