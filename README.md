# ltmoerdani.com

> This website is not a portfolio. It is an argument.

Most consultant sites work like a brochure: big name, service list, client logos, a button that says "Contact Me." This one opens with a question, filters out the wrong visitor in the first ten seconds, and builds a case the rest of the way down. Problem. Thesis. Evidence. Conversation.

The site belongs to **Laksmana (Oci) Tri Moerdani**, a fractional Chief Product Officer based in Jakarta who works inside companies that have stopped being clear with themselves about what they are building.

---

## Why this repo exists

The website's single job is not clicks. Not anonymous form submissions. Not newsletter signups. The job is one qualified conversation: someone who already knows, before they open the contact form, exactly why they are reaching out.

Every decision in this codebase serves that job. The hero headline does not sell Oci. It makes the *wrong* reader leave. The case studies do not list features. They show how a specific product failure was traced back to a sentence that nobody had written down. The timeline does not brag about titles. It shows twenty years of the same pattern, repeated under different job descriptions.

If you came here looking for a tech stack to copy, the stack is deliberately boring. The interesting part is the editorial logic underneath.

---

## What is actually inside

A single-page argument with three case study deep-dives hanging off it.

```
Homepage flow (in order, no accident):
  Nav → Hero → StatsMarquee → Positioning → CaseStudies → Approach
       → Timeline → Rating → Testimonials → Credentials → Contact
```

Each section does one thing and gets out of the way.

| Section | What it is really doing |
|---|---|
| `Hero` | Filters the audience. The right reader leans in, the wrong one bounces. |
| `StatsMarquee` | Social proof without a logos wall. |
| `Positioning` | The thesis: three pillars, one of them will not apply to you. |
| `CaseStudies` | Evidence. Each links to a long-form deep dive. |
| `Approach` | How Oci works. Named steps, not a process diagram. |
| `Timeline` | Twenty years, one pattern. Credibility without resume-speak. |
| `Rating` | One number. 5.0. No stars animation. |
| `Testimonials` | Voice of customer, in their words. |
| `Credentials` | Formal bio for the reader who needs paper. |
| `Contact` | The ask. One form, one job. |

### Case studies

Three deep-dive pages, each a separate argument:

- `/case/myarchery` — Booking platform for Indonesian archery events
- `/case/opencode` — VS Code extension that routes 30+ AI models into Copilot Chat
- `/case/pro-archery` — Retail inventory and consumer platform, led as fractional CPO

These are not feature lists. They trace a product from the sentence that was missing to the decision that fixed it.

---

## Stack

Deliberately small. Four runtime dependencies. No UI framework. No backend.

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (App Router) | Locale-aware routing, static export, `next/font`. |
| UI | React 19 | Server components, zero client overhead where possible. |
| i18n | next-intl 4.13 | URL-driven locale. `/en/...` and `/id/...`. The URL decides the language, not a toggle. |
| Styling | Vanilla CSS + design tokens | No Tailwind, no CSS-in-JS. One `globals.css`, one set of `:root` variables. |
| Fonts | Archivo, Instrument Serif, JetBrains Mono | Self-hosted via `next/font`. Editorial display, serif accents, mono for numbers. |
| Animation | Intersection Observer | Scroll reveal. No Framer Motion. |
| Backend | None | Static site. No database, no auth, no server actions. |
| Language | TypeScript 5 (strict) | |

The entire dependency list:

```
next, react, react-dom, next-intl
```

That is the whole story. Anything else that shows up is a dev dependency or a type definition.

---

## Getting started

Requires Node 18+ and npm.

```bash
# install
npm install

# develop
npm run dev      # http://localhost:3000

# build for production
npm run build
npm start
```

### Environment

One variable matters for production URLs:

```bash
NEXT_PUBLIC_SITE_URL=https://ltmoerdani.com
```

Without it, sitemap and OG tags fall back to localhost.

---

## How i18n actually works

This part confuses people, so it gets its own section.

The locale lives in the URL. `/en/case/opencode` is English, `/id/case/opencode` is Bahasa Indonesia. There is no runtime language toggle in the navbar. The decision is architectural: URL-driven locale is better for SEO, better for link sharing, and produces a smaller payload because only the matching language ships to the browser.

```
proxy.ts            →  negotiates locale (Accept-Language + cookie)
app/[locale]/        →  renders the matching language
components/T.tsx     →  <T en="Work" id="Karya" />  renders only one
```

The `<T>` helper is inline and component-scoped. Framework-level strings (nav labels, meta) live in `messages/{en,id}.json`. Component-level copy lives next to the component that uses it. No single 2,000-line translation file.

---

## Project structure

```
ltmoerdani/
├── app/
│   ├── [locale]/           # locale segment (en | id)
│   │   ├── layout.tsx      # html lang, fonts, NextIntlClientProvider
│   │   ├── page.tsx        # homepage (the argument)
│   │   ├── not-found.tsx   # locale-aware 404
│   │   └── case/
│   │       ├── myarchery/
│   │       ├── opencode/
│   │       └── pro-archery/
│   ├── globals.css         # design tokens + global styles
│   ├── layout.tsx          # passthrough (real layout in [locale])
│   ├── robots.ts
│   └── sitemap.ts
├── components/             # one file per homepage section
├── i18n/
│   ├── config.ts           # source of truth: locales, baseUrl
│   ├── navigation.ts
│   └── request.ts
├── messages/               # en.json, id.json
├── docs/                   # architecture, worklog, bug fixes
├── prototype/              # HTML reference designs (v1–v4)
├── proxy.ts               # locale routing
├── next.config.js
└── tsconfig.json           # @/* path alias
```

### Where things live

- **Copy** lives next to the component that renders it, via `<T>`.
- **Design tokens** live in `app/globals.css` under `:root`.
- **Documentation** lives in `docs/`. Start with `docs/project-context.md`.
- **Prototypes** live in `prototype/`. They are HTML reference, not production code.

---

## Design tokens

The visual language is intentionally narrow. Three fonts, a small palette, one grain texture.

```css
:root {
  --bg:        /* paper cream */;
  --ink:       /* near-black */;
  --accent:    /* single brand accent */;
  --paper:     /* card surface */;

  --font-display:     Archivo;
  --font-instrument:  Instrument Serif;
  --font-jetbrains:   JetBrains Mono;
}
```

No dark mode toggle. No theme switching. The site picks one mood and commits to it.

---

## Case study authoring

Case studies follow a shared layout built from `CasePrimitives.tsx`. If you are adding a new one:

1. Create `app/[locale]/case/[slug]/page.tsx`
2. Compose the page from primitives in `components/CasePrimitives.tsx`
3. Add an entry card in `components/CaseStudies.tsx`
4. Mirror the content across `en` and `id` using `<T>`

The voice across case studies is consistent: trace the missing sentence first, the product decision second, the outcome last. Not the other way around.

---

## Contributing

This is a personal site, not an open-source project. Pull requests are not expected. If you found a bug or a broken link, open an issue and describe what you saw versus what you expected.

If you are a developer evaluating Oci for work and you want to see how the codebase is organized, the `docs/` folder is the honest map. `worklog.md` tracks what actually happened, in order, with dates.

---

## Documentation

| Document | What it covers |
|---|---|
| `docs/project-context.md` | The full briefing: purpose, audience, architecture, stack rationale |
| `docs/worklog.md` | Session-by-session changelog. Read this to understand recent decisions. |
| `docs/architecture/` | Design decisions, indexed by date |
| `docs/bug-fixes/` | Problems and how they were traced |
| `docs/design/` | Visual and editorial decisions |

Start with `project-context.md`. It is the source of truth for why this site is shaped the way it is.

---

## License

All code in this repository is © Laksmana Tri Moerdani. The source is visible for transparency and for developers evaluating the work. It is not licensed for redistribution, rebranding, or competitive use. If you want to build something similar, open a conversation first.

---

## Contact

The site is the argument. The contact form is the conclusion.

If you are a founder or CEO whose product is running but whose direction has started to blur, the form at [ltmoerdani.com](https://ltmoerdani.com) is the right door. Everything else, including this README, is preamble.
