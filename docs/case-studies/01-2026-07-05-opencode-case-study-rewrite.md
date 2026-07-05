**Status:** 🟢 Active

# OpenCode Case Study — Detailed Rewrite & Enhancements

**Topic:** case-study / content / design
**Created:** 2026-07-05
**Updated:** 2026-07-05
**Tags:** #opencode #case-study #vscode-extension #marketplace #copywriting
**Supersedes:** —

---

## Overview

Complete rewrite of the OpenCode for Copilot Chat case study page (`app/[locale]/case/opencode/page.tsx`). Transform from a minimal stub into a full, data-rich case study with narrative sections, marketplace data, comparison charts, and user reviews.

---

## Changes Made

### 1. Page Structure (7 sections → 11 sections)

| # | Section | Purpose |
|---|---------|---------|
| Header | Eyebrow + Lede + Stats | "Released May 2026", value prop, dynamic stats |
| 1 | **The bill that started it** | Context: GitHub billing announcement (Apr 27, 2026), $39/mo Pro+, rate limits |
| 2 | **The problem was cost, not the IDE** | Copilot Chat workflow, specific models (DeepSeek, Kimi, GLM, Qwen) |
| 3 | **How it works** | 3 tiers: Zen (free), Go ($10/mo), BYOK. Model picker integration |
| Terminal | Install command + CTA | `code --install-extension ltmoerdani.opencode-copilot-chat` |
| 4 | **What the data says** | May 14 launch, 12+ countries, 5.0 rating, user feedback quotes |
| 5 | **Two extensions, one pattern** | Comparison cards + 60-day trend charts (OpenCode vs z.ai) |
| 6 | **From the Marketplace** | 3 user reviews (Leandro Berth, Patrik Porubän, Gonzalo Cruz Licona) |
| 7 | **Why a CPO ships an open-source dev tool** | Narrative closure, same pattern as other products |
| Quote | Pull quote | "The cheapest way to learn if a problem is real..." |
| Footer | Case nav | Prev: MyArchery.id |

### 2. Dynamic Install Count

- **API route:** `app/api/installs/route.ts` — fetches from VS Code Marketplace API
- **Hook:** `lib/useInstallCount.ts` — `useInstallCount()` + `formatInstalls()`
- **Middleware fix:** Excluded `/api/` from locale prefix in `middleware.ts`
- **Components using it:** `StatsMarquee`, `CaseStudies` (OpenCode card), `opencode/page.tsx`
- **Fallback:** 5,734 (hardcoded) if API fails
- **Revalidation:** 1 hour via Next.js `revalidate`

### 3. OpenCode Logo Integration

- **File:** `public/opencodego.png` (copied from `docs/files/opencodego.png`)
- **Case study header:** Logo on right side via 2-column grid (`1fr auto`), width `clamp(120px, 20vw, 260px)`
- **Homepage card:** Logo at `70%` width, max `220px`, centered above install count

### 4. Historical Chart Images

- **Files:** `public/opencode-chart.png`, `public/zai-chart.png`
- **Source:** `docs/files/opencode-copilot-chat-chart.png`, `docs/files/zai-copilot-chat-chart.png`
- **Layout:** Single-column stacked, each chart with rich description paragraph
- **Content:** 60-day trend data from VS Code Marketplace publisher dashboard

### 5. Comparison Section (OpenCode vs z.ai)

| Metric | OpenCode | z.ai |
|---|---|---|
| Total installs | 5,734 (dynamic) | 826 |
| Till date | 6,307 | 826 |
| Last 30 days | 5,123 | 654 |
| Page views | 5.1K | 79 |
| Conversion | 284% | 828% |

### 6. User Reviews

3 reviews from VS Code Marketplace, each in a styled card:
- **Leandro Berth** — "Works well right out of the gate"
- **Patrik Porubän** — "Amazing, why I didn't find this sooner"
- **Gonzalo Cruz Licona** — "Just installed the extension and loaded my OpenCode GO account and it worked"

### 7. Marketplace Link Fix

- **Old:** `https://marketplace.visualstudio.com/items?itemName=opencode`
- **New:** `https://marketplace.visualstudio.com/items?itemName=ltmoerdani.opencode-copilot-chat`

---

## Files Modified

| File | Changes |
|------|---------|
| `app/[locale]/case/opencode/page.tsx` | Complete rewrite: 11 sections, dynamic stats, logo, charts, reviews |
| `components/CaseStudies.tsx` | Updated card: logo + blinking cursor + dynamic install count |
| `components/StatsMarquee.tsx` | Dynamic install count via `useInstallCount()` |
| `lib/useInstallCount.ts` | New: hook + `formatInstalls()` utility |
| `app/api/installs/route.ts` | New: Marketplace API proxy with fallback |
| `middleware.ts` | Excluded `/api/` from locale prefix |
| `app/[locale]/case/myarchery/page.tsx` | Updated CaseFooter next link text |
| `public/opencodego.png` | Copied from `docs/files/opencodego.png` |
| `public/opencode-chart.png` | Copied from `docs/files/opencode-copilot-chat-chart.png` |
| `public/zai-chart.png` | Copied from `docs/files/zai-copilot-chat-chart.png` |

---

## External Data Sources

| Source | Used For |
|--------|----------|
| VS Code Marketplace API | Dynamic install count (revalidated hourly) |
| VS Code Marketplace publisher dashboard | Historical 60-day chart images |
| VS Code Marketplace reviews | 3 curated user reviews |
| GitHub Blog (Apr 27, 2026) | Billing announcement reference with inline link |

---

## Writing Framework V4 Applied

- **Prinsip 1 (Author Presence):** First-person narrative throughout ("I liked Copilot Chat", "I was paying more")
- **Prinsip 4 (Friction):** Honest acknowledgment ("What I can't tell you is...")
- **Prinsip 5 (Rhythm):** Short punchy sentences mixed with longer explanations
- **Zero em dashes:** All replaced with commas, periods, colons, or middots

---

*Created: 2026-07-05 • Project: ltmoerdani.com*
