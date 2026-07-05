**Status:** ✅ Solved

# Hero Text Size & Line Count Fix

**Topic:** design / ui / copywriting
**Created:** 2026-07-05
**Updated:** 2026-07-05
**Tags:** #hero #ui #design #typography #copywriting #em-dash
**Supersedes:** —

---

## Overview

Fix hero section text sizing (too tall), reduce em dashes to zero across all visible copy, and apply Writing Framework V4 principles to all copywriting.

---

## Problem

1. **Hero too tall:** `fontSize: clamp(44px, 6.4vw, 96px)` made heading extremely large, pushing content below the fold
2. **74 em dashes** across 16 files violated the absolute zero-em-dash rule
3. **Copywriting lacked consistency** in sentence length across similar elements

---

## Changes Made

### 1. Hero Heading

| Property | Before | After |
|---|---|---|
| `fontSize` | `clamp(44px, 6.4vw, 96px)` | `clamp(32px, 5vw, 64px)` |
| `lineHeight` | `1.02` | `1.12` |
| `Line display` | `inline-block` | `block` |
| Lines | 3 (natural wrap) | 3 (forced block) |

### 2. Hero Subtitle (Prinsip 1: Retrospective)

| EN | ID |
|---|---|
| "Twenty years in digital work, helping companies build the right product..." | "Dua puluh tahun di dunia digital, membantu perusahaan membangun..." |
| → "Twenty years in digital work, most of it learning the hard way which product decisions actually hold up." | → "Dua puluh tahun di dunia digital, sebagian besar belajar dengan cara yang tidak mudah keputusan produk mana yang benar-benar bertahan." |

### 3. Positioning Cards (Balanced ~20 words each)

- **Fractional CPO:** "Embedded inside organizations" → "Inside organizations"
- **Builder:** "Each started as" vs "Products that started" (rhythm)
- **Founder consulting:** "A few sessions" → "A few focused sessions"

### 4. Approach Steps (Length Balance)

- **Step 2:** 42 → 32 words (trimmed)
- **Step 3:** "Whoever owned" → "The product owner"
- **ID:** "deck-nya" → "presentasinya"

### 5. Case Studies Cards

- **MyArchery:** "not from a pitch deck" (Prinsip 4: friction)
- **OpenCode:** "No separate app, no context switching" (Prinsip 5: rhythm)
- **Blazz:** "not in a slide deck" (Prinsip 4: friction)

### 6. Contact CTA

- EN: "...and nobody's said it out loud yet" (honest friction)
- ID: "...dan belum ada yang bilang terus terang" (honest friction)

### 7. Em Dash Cleanup (74 → 0)

| Replacement | Usage |
|---|---|
| `,` (koma) | Sisipan parentetikal |
| `:` (titik dua) | Elaborasi |
| `.` (titik baru) | Pivot dramatis |
| `·` (titik tengah) | Nama + lokasi |
| `–` (en dash) | Date ranges |

### 8. Metadata

- Page title: `Moerdani — Fractional CPO` → `Moerdani · Fractional CPO`
- Meta description: em dash → koma

---

## Files Modified

| File | Changes |
|------|---------|
| `components/Hero.tsx` | Font size, line-height, Line display, subtitle text, LinkedIn button |
| `components/Positioning.tsx` | Card copy (EN/ID) |
| `components/Approach.tsx` | Step copy (EN/ID) |
| `components/CaseStudies.tsx` | Card copy (EN/ID) |
| `components/Contact.tsx` | CTA text (EN/ID), LinkedIn button |
| `components/StatsMarquee.tsx` | Em dash cleanup |
| `components/Timeline.tsx` | Date ranges, em dash cleanup |
| `components/Credentials.tsx` | Em dash cleanup |
| `components/Testimonials.tsx` | Em dash cleanup |
| `app/[locale]/layout.tsx` | Title + description metadata |
| `app/[locale]/case/myarchery/page.tsx` | Copy + em dash |
| `app/[locale]/case/opencode/page.tsx` | Copy + em dash |
| `app/[locale]/case/pro-archery/page.tsx` | Copy + em dash |

---

## Writing Framework V4 Principles Applied

| Principle | Application |
|---|---|
| **Prinsip 1** (Author Presence) | Retrospective subtitle, first-person in case studies |
| **Prinsip 3** (Discovery) | Approach steps flow as argument progression |
| **Prinsip 4** (Friction) | "not from a pitch deck", "nobody's said it out loud" |
| **Prinsip 5** (Rhythm) | Sentence length variance, short punchy lines mixed with longer |

---

*Created: 2026-07-05 • Project: ltmoerdani.com*
