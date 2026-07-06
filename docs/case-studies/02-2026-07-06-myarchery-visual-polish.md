**Status:** ✅ Solved

# MyArchery Case Study — Visual Polish & Asset Integration

**Topic:** case-study / design / ui
**Created:** 2026-07-06
**Updated:** 2026-07-06
**Tags:** #myarchery #nextjs #case-study #design #assets #theming
**Supersedes:** —

---

## Overview

Complete visual polish of the MyArchery case study page (`/en/case/myarchery`). Transformed a text-heavy layout into a rich, image-driven narrative with consistent blue theme branding (#0d47a3), structured feature cards, store badge integration, and representative on-site photos.

---

## Timeline

### 1. Asset Naming & Distribution (13:00–13:20)

- Renamed all MyArchery images in `public/` to descriptive kebab-case filenames (`myarchery-hero-kids-archers.png`, `myarchery-mobile-scoring-flow.png`, etc.).
- Distributed images across narrative sections instead of grouped blocks.
- Updated home card (`components/CaseStudies.tsx`) to use real image instead of placeholder.

### 2. Header Branding (13:20–13:45)

- Header background changed to `#0d47a3` (MyArchery brand blue).
- Metadata text changed to white for contrast.
- Title text removed; replaced with logo in white block background.
- Logo: black fills restored (white conversion was reverted), left-aligned, scaled up.
- Fixed stale dashboard image via versioned filename (`myarchery-dashboard-scoring-suite-v2.png`) — query-string cache busting rejected by Next.js `localPatterns`.

### 3. Built from Inside the Sport — Photo Gallery (13:50–14:10)

- Added 6 representative on-site photos to "Built from inside the sport" section:
  1. `myarchery-inside-sport-judge-portrait.png`
  2. `myarchery-inside-sport-field-operations-view.png`
  3. `myarchery-inside-sport-target-line-judging.png`
  4. `myarchery-inside-sport-judge-lane-19.png`
  5. `myarchery-inside-sport-laptop-ops-desk.png`
  6. `myarchery-inside-sport-laptop-printer-station.png`
- Gallery grid: `repeat(auto-fit, minmax(220px, 1fr))` for responsive 2–3 column layout.

### 4. Feature Cards Restructuring (14:10–14:45)

- **Card 01 (Live Scoring):** Merged with `myarchery-live-score-operations.png` image. Made full-width (`gridColumn: '1 / -1'`) so card 02 drops below.
- **Card 07 → 06 (Jakarta Series Ranking):** Merged with `myarchery-series-leaderboard.png`. Full-width card.
- **Card 06 → 07 (Financial Reports):** Moved after Jakarta Series Ranking for logical flow.
- Final order: Live Scoring → Target Butt Seeding → IRAT Scoring → E-Certificates → Elimination Brackets → Jakarta Series Ranking → Financial Reports → DOS Dashboard.
- Added `FeatureCard` props: `mediaSrc`, `mediaAlt`, `mediaCaptionEn`, `mediaCaptionId`, `emphasize`.
- Removed duplicate leaderboard image from Release Timeline section.

### 5. Store Badges (14:45–15:00)

- Downloaded official Google Play badge (`google-play-badge-v2.png`) and App Store badge (`app-store-badge.svg`).
- Added store badge row below Mobile Scoring Flow image.
- Both badges: same visual size (150×46px), centered via `justifyContent: 'center'`.
- Links:
  - Google Play: `https://play.google.com/store/apps/details?id=com.adminmyarchery&hl=en`
  - App Store: `https://apps.apple.com/my/app/myarchery-organizer/id1637413642?l=ms`

### 6. Theme Consistency (15:00–15:15)

- **Contact card:** Border + background changed from `var(--accent)` (green) to `#0d47a3` (blue).
- **CTA button:** Changed from `var(--accent)` to `#0d47a3` with `#0a3a82` hover.
- **CaseQuote border:** Added `accentColor` prop to `CasePrimitives.tsx`. MyArchery page passes `#0d47a3`.

### 7. Hydration Error Fix (14:00)

- **Error:** `<div> cannot be a descendant of <p>` — `CaseSection` wraps children in `<p>`.
- **Root cause:** Gallery grid (`<div>`) was placed as child of `CaseSection`.
- **Fix:** Moved gallery grid into its own `<section>` below the `CaseSection`, keeping text and visual sections separate but visually adjacent.

### 8. Cache Busting (13:30, 15:00)

- **Dashboard image:** Query-string `?v=2` rejected by Next.js `localPatterns`. Solution: versioned filename (`-v2.png`).
- **Google Play badge:** Old cached version persisted. Solution: versioned copy (`-v2.png`) + cleared `.next/cache`.

---

## Files Modified

| File | Changes |
|------|---------|
| `app/[locale]/case/myarchery/page.tsx` | Header branding, gallery grid, feature cards, store badges, theme colors, reorder |
| `components/CasePrimitives.tsx` | Added `accentColor` prop to `CaseQuote` |
| `components/CaseStudies.tsx` | Home card uses real MyArchery image |
| `public/myarchery-inside-sport-*.png` | 6 new on-site photos |
| `public/google-play-badge-v2.png` | Google Play badge (replaced) |
| `public/app-store-badge.svg` | App Store badge |

---

## Lessons Learned

1. **Next.js `localPatterns` blocks query strings.** Cache-bust via versioned filenames, not `?v=` params.
2. **`CaseSection` uses `<p>` wrapper.** Never put block elements (`<div>`, `<figure>`) as children of `CaseSection`. Use standalone `<section>` for visual blocks.
3. **`FeatureCard` needs `emphasize` prop.** Full-width cards (`gridColumn: '1 / -1'`) create visual hierarchy when merging card + image.
4. **Badge optical balance.** Official Google Play and App Store badges have different visual weight at same pixel dimensions. Fixed container + `objectFit: contain` works well enough for MVP.
5. **Theme consistency across components.** Adding `accentColor` prop to shared primitives (like `CaseQuote`) is cleaner than overriding via CSS variables.

---

*Last updated: 2026-07-06 15:15*
