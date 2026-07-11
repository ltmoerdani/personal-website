**Status:** 🟢 Active

# CampaignForge Case Study — New Page + Homepage Card

**Topic:** case-study / feature / new-page
**Created:** 2026-07-11
**Updated:** 2026-07-12
**Tags:** #case-study #campaign-forge #ai #affiliate #nextjs #portfolio #homepage #screenshot
**Related:** `docs/case-studies/01-2026-07-05-opencode-case-study-rewrite.md` (pattern reference), `docs/case-studies/02-2026-07-06-myarchery-visual-polish.md` (visual pattern reference)

---

## Overview

New case study page for **CampaignForge** — an AI tool that turns one brief into 5 ad copies, a self-hostable landing page, and a 3-email welcome sequence, then deploys to Meta Ads, Vercel, and Brevo in a single click. Built as a 2-week prototype for an affiliate marketing build challenge.

This document covers: context/narrative decisions, file structure, screenshots taken, homepage card positioning iterations, and the final layout.

---

## 1. Context & Narrative Framing

### Origin story

Matt from It's Today Media ran an automated outreach campaign to find builders for a build challenge. The outreach was automated (not personal), and the challenge was for an affiliate marketing company in Baltimore whose mission is explicit: "We buy media at scale to build email and SMS lists."

### Why it didn't continue

Matt closed the challenge honestly — being based in Indonesia was the deciding factor due to timezone overlap and US work situation. Not a quality rejection.

### Framing decision

CampaignForge is framed as a **prototype experiment**, not a contest entry or product launch. The narrative arc:

1. **The invitation** — catalyst, not the reason
2. **The gap nobody fills** — 1 week of research, gap matrix
3. **Message match is where the money is** — Moz 212% CVR lift data
4. **Pipeline architecture** — sequential multi-call, angle × formula matrix
5. **Deploy Hub** — 3 platform integrations (Meta/Vercel/Brevo)
6. **Operator data** — 20 campaigns/month, 5 hrs → 2.5 hrs
7. **What happened next** — honest ending, thesis proven
8. **Decisions that mattered** — 4 non-trivial technical choices
9. **Stack** — Next.js 16 + AI SDK v7 + 16 models + zero DB

Matt is mentioned **once** in section 1 as context, never again. The focus is on product thinking and technical decisions.

---

## 2. Files Created / Modified

### New files

| File | Purpose |
|------|---------|
| `app/[locale]/case/campaign-forge/page.tsx` | Full case study page (client component) |

### Modified files

| File | Change |
|------|--------|
| `components/CaseStudies.tsx` | Added `CampaignForgeCard()` function; inserted card in grid; updated counter `(06)` → `(07)` |
| `app/[locale]/case/opencode/page.tsx` | Added `next` prop to `CaseFooter` → CampaignForge |

### New assets (screenshots from live CampaignForge dev server)

| File | Content |
|------|---------|
| `public/campaignforge-landing.png` | Landing page hero with pitch metrics (5 hrs, 2×, 96%) |
| `public/campaignforge-problem.png` | Problem section — 3 pain cards (copywriter, LP dev, message drift) |
| `public/campaignforge-showcase.png` | Solution section — faux app frame with 4 tabs |
| `public/campaignforge-app-idle.png` | App form — 5 fields + sample topic picker |
| `public/campaignforge-impact.png` | Impact section — before/after + revenue math |
| `public/campaignforge-howitworks.png` | How it works — setup guide + MVP status badges |
| `public/campaignforge-stack.png` | Under the hood — vendor transparency rows |

All screenshots captured at 1440×900 viewport from `http://localhost:3000` (CampaignForge dev server).

---

## 3. Case Study Page Structure

### Header (dark, `var(--ink)` background)

- **Eyebrow:** `"Case study · AI prototype · 2-week build · Jun–Jul 2026"`
- **Title:** `Campaign` + `Forge` (blue accent `#3B82F6`)
- **Logo:** SVG lightning bolt in blue rounded square (CampaignForge brand mark)
- **Lede:** One-sentence description of what CampaignForge does
- **Stats grid (4):** `5 hrs` (down to minutes) · `3` (platform deploys) · `96%` (consistency) · `2 wks` (research to prototype)

### Sections (9 narrative blocks + 6 screenshots)

| # | Section title (EN) | Content |
|---|---|---|
| — | Landing screenshot | `campaignforge-landing.png` |
| 1 | The invitation | Matt, automated outreach, catalyst framing |
| 2 | The gap nobody fills | Riset 1 minggu, kompetitor analysis, 3-way gap |
| — | Problem screenshot | `campaignforge-problem.png` |
| 3 | Message match is where the money is | Moz/Disruptive Advertising data (212.74% CVR lift) |
| — | Solution screenshot | `campaignforge-showcase.png` |
| 4 | How the pipeline works | 4-stage sequential multi-call, angle × formula matrix, email arc |
| — | App screenshot | `campaignforge-app-idle.png` |
| 5 | Deploy Hub: one click, three platforms | Vercel REST, Meta MCP, Brevo REST + decision records |
| — | Impact screenshot | `campaignforge-impact.png` |
| 6 | What the operator's data said | 20 campaigns/month, 5→2.5 hrs, 50 hrs/month saved |
| — | Stack screenshot | `campaignforge-stack.png` |
| 7 | What happened next | Honest ending: timezone, thesis proven |
| 8 | The decisions that mattered | 4 decisions: LP count, Vercel vs CF, MCP vs CLI, multi-call vs mega-call |
| 9 | Stack | Next.js 16, AI SDK v7, 16 models, zero DB/auth |
| — | How it works screenshot | `campaignforge-howitworks.png` |
| — | CaseQuote | `"The cheapest way to learn if a gap is real is to build the smallest thing that closes it."` |

### Footer navigation

- **Prev:** OpenCode (`/case/opencode`)
- **Next:** (none)

### Bilingual

All content uses `<T en="..." id="..." />` component for EN/ID switching.

---

## 4. Homepage Card Iterations

### Iteration 1: Featured card (full-width, outside grid)

- Placed CampaignForgeCard after ProArcheryCard as second featured card
- Used `ltm-featured-card-grid` class + `featuredCard` style
- Background `#0a0a0a`, accent `#3B82F6`
- **Result:** Too dominant, visually disconnected from grid cards below

### Iteration 2: Featured card (span 2, inside grid)

- Moved inside grid with `gridColumn: 'span 2'` on Reveal wrapper
- Horizontal layout: text left, stats right
- **Result:** Card height mismatch (629px vs 405px normal cards), aspect ratio distortion

### Iteration 3: Normal card with span 2

- Same card style as other grid cards (`caseLink`, `caseTitle`, `caseBody`, `Tags`)
- Overrode `aspectRatio` from `16/10` → `32/10` on visual box to match height
- **Result:** Heights matched (405px) but user preferred uniform 3-per-row layout

### Iteration 4 (FINAL): Normal card, 1 column, 3 per row

- Removed `gridColumn: span 2` and `aspectRatio` override
- Identical styling to OpenCodeCard, BlazzCard, JakiCard
- All cards: 405px height, `placeholderBox` visual + title + description + tags
- Card order swapped: OpenCode moved before MyArchery

### Final card order

```
ProArchery (featured full-width, outside grid)
─── grid (3 columns) ───
[ CampaignForge ] [ OpenCode ] [ MyArchery.id ]
[ Blazz         ] [ JAKI 2.0 ] [ Validasi Ide  ]
```

### Counter

Updated from `(06)` → `(07)` in the section header.

---

## 5. OpenCode Footer Navigation Update

`app/[locale]/case/opencode/page.tsx` — `CaseFooter` now has:

```tsx
<CaseFooter
  prev={{ href: '/case/myarchery', en: 'Prev: MyArchery.id', id: 'Sebelumnya: MyArchery.id' }}
  next={{ href: '/case/campaign-forge', en: 'Next: CampaignForge', id: 'Berikutnya: CampaignForge' }}
/>
```

---

## 6. CampaignForge Card Component (Final)

```tsx
function CampaignForgeCard() {
  return (
    <Link href="/case/campaign-forge" style={caseLink}>
      <div style={{ ...placeholderBox, background: '#0a0a0a' }}>
        <svg width="48" height="48" viewBox="0 0 22 22" ...>
          <rect width="22" height="22" rx="6" fill="#3B82F6" />
          <path d="M13 3.5L5.5 12H10.5L9.5 18.5L16.5 10H11.5L13 3.5Z" fill="white" />
        </svg>
        <div style={...}>
          brief → 3 assets · 1 click deploy
        </div>
      </div>
      <h3 style={caseTitle}>
        Campaign<span style={{ color: '#3B82F6' }}>Forge</span>
      </h3>
      <p style={caseBody}>...</p>
      <Tags>
        <Tag>AI tool</Tag>
        <Tag>Affiliate</Tag>
        <Tag>Next.js</Tag>
      </Tags>
    </Link>
  );
}
```

Uses existing shared styles: `caseLink`, `caseTitle`, `caseBody`, `placeholderBox`, `Tags`, `Tag`. Only custom: `background: '#0a0a0a'` on visual box and `color: '#3B82F6'` accent.

---

## 7. Technical Details

### Stack referenced in case study

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 App Router + React 19 |
| LLM SDK | Vercel AI SDK v7 (`ai@7`, `@ai-sdk/openai-compatible@3`) |
| Providers | OpenCode Go (13 models) + Z.AI Coding Plan (3 models) = 16 total |
| Structured output | Zod v4 + `Output.object()` |
| Styling | Tailwind v4 (dark theme `#141414`) |
| HTML sanitization | `sanitize-html@2.17.5` |
| Deploy integrations | Vercel REST API, Pipeboard MCP (Meta Ads), Brevo REST API |
| Hosting | Vercel Hobby (free tier) |
| Database | None (BYOK from localStorage) |
| Auth | None |

### Screenshot capture process

1. Start CampaignForge dev server: `npm run dev --prefix /Users/ltmoerdani/Startup/campaign-forge`
2. Open `http://localhost:3000` at 1440×900 viewport
3. Navigate to pages: `/` (landing), `/app` (form), `/how-it-works` (transparency)
4. Scroll to relevant sections, capture via Playwright `page.screenshot()`
5. Save to `ltmoerdani/public/campaignforge-*.png`
6. For app screenshot: inject dummy API key via `localStorage.setItem('campaignforge:opencode-api-key', '...')`

---

## 8. Verification

- `get_errors` on all 3 modified files → 0 errors
- Browser verified: `/en/case/campaign-forge` → 200 OK, all sections render
- Browser verified: homepage grid → CampaignForge card appears in position [0], 405px height, matches other cards
- Browser verified: card counter shows `(07)`
- Browser verified: OpenCode `CaseFooter` next link → `/en/case/campaign-forge`

---

## 9. Regression Watch

- Do **not** add `gridColumn: 'span 2'` back to CampaignForgeCard — it breaks height alignment
- Do **not** change `aspectRatio` on the CampaignForge visual box — `placeholderBox` default `16/10` is correct for 1-column width
- If adding more case study cards in the future, maintain the 3-per-row grid pattern
- Screenshots are static — if CampaignForge UI changes significantly, re-capture from dev server
- The `campaignforge-*.png` files are large (80–274 KB each) — consider optimization if page load becomes an issue

---

**Status:** 🟢 Active · Page live, all content bilingual, screenshots captured, card positioned.
