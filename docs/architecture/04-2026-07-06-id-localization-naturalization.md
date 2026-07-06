**Status:** 🟢 Active

# ID Localization Naturalization — Writing Framework V4 Applied

**Topic:** i18n / content / writing
**Created:** 2026-07-06
**Updated:** 2026-07-06
**Tags:** #i18n #content #writing-framework #localization
**Supersedes:** Initial ID translations in `components/` and `app/[locale]/case/` (word-for-word, register-mismatched)

---

## Overview

The initial Bahasa Indonesia (ID) translations across the site were structurally English with Indonesian words swapped in — "translate plek-plekan". The result read stiff and unnatural because EN and ID differ in sentence structure, register, and conversational rhythm. This document captures the naturalization pass that restructured ID copy to sound like a real Indonesian professional wrote it, applying **Writing Framework V4** principles (author presence, natural rhythm, register calibration).

The goal was **semantic equivalence with structural freedom** — same meaning, different shape.

---

## Problem: Word-for-Word Translation Pitfalls

Three failure patterns identified across `components/` and `app/[locale]/case/`:

### 1. Structural mimicry — EN syntax forced onto ID
| English | Literal ID (bad) | Natural ID (good) |
|---------|------------------|-------------------|
| "product decisions and business outcomes have drifted apart" | "berjalan sendiri-sendiri" | "sudah mulai meleset" |
| "where the habit of thinking in systems started" | "Tempat kebiasaan berpikir sistem dimulai" | "Dari sinilah kebiasaan berpikir sistemik bermula" |
| "a conversation that is welcome" | "percakapan itu terbuka" | "saya terbuka untuk obrolan itu" |

### 2. Register mismatch — formal textbook ID for conversational context
The ID copy used formal/literary register ("tidak", "memberi", "sebenarnya") where a real Indonesian founder would speak more casually ("nggak", "ngasih", "beneran"). This made the copy sound like a government memo, not a founder talking.

### 3. Anglicized idioms — EN expressions literally translated
| English idiom | Literal ID (bad) | Natural ID (good) |
|---------------|------------------|-------------------|
| "the numbers tell the story" | "Angkanya berbicara sendiri" | "Angkanya yang menjawab" |
| "hit a nerve" | "kena sasaran" | "pas sasaran" |
| "equally capable" | "sama canggihnya" | "tak kalah canggih" |

---

## Approach: Three-Layer Naturalization

### Layer 1 — Register calibration (context-dependent)

ID has a spectrum of formality. The pass calibrated register per section context:

| Section context | Register chosen | Examples |
|-----------------|-----------------|----------|
| Hero headline + lede | Professional-neutral | "bukan karena engineering", "sebagian besarnya habis untuk belajar" |
| Approach (personal narrative) | Semi-formal, first-person | "saya awalnya ingin", "bikin saya sadar" |
| Timeline (20-year history) | Reflective, slightly casual | "nggak laku", "Dari sinilah... bermula" |
| Case study deep-dives | Founder-confessional | "nggak ada fungsi produk", "asal nebak", "muak dengan harga" |
| Contact (invitation) | Warm, direct | "saya terbuka untuk obrolan itu" |
| Labels, tags, metadata | Keep English (industry standard) | "SaaS", "GovTech", "Open source" |

**Key decision:** "nggak" / "nggak ada" used sparingly for founder-voice authenticity in personal-narrative sections. NOT used in labels, stats, or structural copy where brevity > personality.

### Layer 2 — Sentence restructuring

ID prefers front-loaded subjects and shorter predicate chains. Restructured sentences to lead with the actor:

- **EN:** "Every one of my products started from a business problem"
- **Before:** "Semua produk saya berangkat dari masalah bisnis" *(awkward word order)*
- **After:** "Semua produk saya berangkat dari masalah bisnis seperti ini" *(anchored to context)*

### Layer 3 — Cultural idiom substitution

Replaced EN idioms with ID equivalents that carry the same pragmatic force, not the same literal image:

| EN idiom | Naturalized ID |
|----------|----------------|
| "drifted apart" | "sudah mulai meleset" |
| "hit a nerve" | "pas sasaran" |
| "numbers tell the story" | "Angkanya yang menjawab" |
| "the same chaos prettied up" | "kekacauan yang sama dengan tampilan yang lebih bagus" |
| "learning curve" | "perlu belajar dari nol" |

---

## Writing Framework V4 Principles Applied

### Prinsip 1: Kehadiran Penulis (Author Presence)
Added retrospective self-mention where the EN had it but ID lost it in translation:
- "saya awalnya ingin mulai" *(commitment before demonstration)*
- "saya sadar" *(stating realization)*
- "saya pikir orang lain pasti merasakan hal sama" *(expressing view)*

### Prinsip 5: Ritme Sebagai Konsekuensi
Mixed sentence lengths to match argument rhythm. Short punchy fragments where EN had them:
- EN: "The extension already did what it needed to do."
- ID: "Ekstensinya sudah menjalankan fungsinya dengan baik." *(not the wordy "sudah melakukan apa yang harus dilakukan")*

### Prinsip 7: Asimetri Relasional
Contact section invitation restructured to place the author in a vulnerable position:
- **Before:** "percakapan itu terbuka" *(passive — no actor)*
- **After:** "saya terbuka untuk obrolan itu" *(active — author commits)*

---

## Files Changed

### `components/` (homepage sections)
| File | Section | What changed |
|------|---------|--------------|
| `Hero.tsx` | Lede paragraph | Restructured: "sebagian besarnya habis untuk belajar mana keputusan produk yang benar-benar bertahan" |
| `Positioning.tsx` | Pillar 01, 03 | "ngasih saran" (casual), "materi yang siap dilontarkan ke investor" (idiom swap) |
| `Approach.tsx` | Step 02, 03 | "saya awalnya ingin", "bikin saya sadar", "nggak pernah dipaksa nulis" |
| `Contact.tsx` | Headline | "sudah mulai meleset" + "saya terbuka untuk obrolan itu" |
| `Timeline.tsx` | 6 entries | "Dari sinilah... bermula", "nggak laku", "diam-diam jadi fondasi cara kerja RCD" |
| `Testimonials.tsx` | Heading | "Apa kata founder" (not "Kata para founder") |
| `CaseStudies.tsx` | Blazz, JAKI cards | "beneran terjadi", "nggak dilaporkan ya tetap rusak" |

### `app/[locale]/case/` (case study pages)
| File | Sections | What changed |
|------|----------|--------------|
| `opencode/page.tsx` | 6 sections | "tak kalah canggih", "Angkanya seperti ini", "Angkanya yang menjawab", "muak dengan harga", "memastikan sebuah masalah itu nyata", "nggak bisa dimatikan begitu saja" |
| `pro-archery/page.tsx` | Lede, phases, "wrong first move" | "nggak ada" (fungsi produk), "ngasih saran", "cuma akan memamerkan kekacauan", phase 04 em dash removed |
| `myarchery/page.tsx` | 2 narrative sections | "asal nebak" (not "menebak-nebak"), "Dulu klub menjalankan" (temporal anchor) |

### `messages/id.json`
| Field | Change |
|-------|--------|
| `site.title` | Em dash (—) → middle dot (·) |
| `site.description` | Em dash removed, "bukan sekadar produk biasa" |

---

## Anti-Patterns Avoided

Per Writing Framework V4 zero-tolerance rules:

1. **Zero em dashes (—)** in user-facing ID copy. Replaced with: koma (sisipan), titik dua (elaborasi), titik baru (pivot), "tapi/melainkan/namun" (kontras).
2. **No "imagine" / "bayangkan"** speculative framing. All claims stayed concrete.
3. **No formulaic transitions** ("Selain itu", "Oleh karena itu", "Lebih lanjut") — each sentence builds from the previous via RST relations, not connector words.
4. **No "kita akan lihat" / "perhatikan bahwa"** chatbot-style helper language.

---

## What Stayed English (Intentional)

These ID copy items deliberately kept in English — they are industry-standard terms where translation would reduce clarity:

- Product names: "Copilot Chat", "OpenCode", "MyArchery.id"
- Role titles: "Fractional CPO", "Co-Founder"
- Technical terms: "tool-calling", "Agent Mode", "context awareness", "roadmap", "pitch deck", "slide deck"
- Tags: "SaaS", "B2B SaaS", "GovTech", "IoT", "Open source", "Dev tools"
- Units: "SKU", "page view", "traffic"

**Rationale:** These terms are universally used in Indonesian tech/professional discourse. Translating them (e.g., "sumber terbuka" for "open source") would sound forced and reduce professional credibility.

---

## Verification

Browser QA confirmed all ID pages render correctly after the naturalization pass:

- ✅ `http://localhost:3000/id` — homepage all 11 sections
- ✅ `http://localhost:3000/id/case/pro-archery`
- ✅ `http://localhost:3000/id/case/myarchery`
- ✅ `http://localhost:3000/id/case/opencode`
- ✅ Zero TypeScript/lint errors across all 10 edited files
- ✅ Zero em dashes in user-facing ID copy

---

## Lessons for Future Localization

1. **Translate meaning, not words.** "Drifted apart" is about misalignment, not walking — ID needs "meleset", not "berjalan sendiri-sendiri".
2. **Register is contextual.** A founder bio can use "nggak" in narrative sections but should stay professional in labels and metadata. Match register to the section's emotional temperature.
3. **ID prefers front-loaded actors.** Lead with "saya" or the subject, not the circumstance.
4. **Keep industry English.** "Roadmap", "pitch deck", "tool-calling" are clearer untranslated.
5. **Read aloud test.** If the ID copy sounds like a textbook when spoken, it's wrong. Rewrite until it sounds like a conversation.
