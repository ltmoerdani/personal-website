# 📋 Documentation Standards

**Project:** ltmoerdani.com — Personal portfolio website
**Version:** 1.0 | **Updated:** 2026-07-05

---

## 🎯 Core Principles

| # | Principle | Description |
|---|-----------|-------------|
| 1 | **One topic = one document** | Consolidate, don't fragment |
| 2 | **Self-contained** | Reader doesn't need to open other docs |
| 3 | **Codebase verification** | Cross-check against codebase before deprecating |
| 4 | **English default** | Bahasa Indonesia allowed for narrative/personal notes; technical terms stay English |
| 5 | **No hardcoded secrets** | Use placeholders or safe references |

### Codebase Verification
```bash
# ALWAYS verify before deprecating — check if pattern is still in use
grep -r "ComponentName" app/ components/
```
> ⚠️ **NEVER** deprecate just because it looks old. Verify first!

---

## 📁 File Naming & Header

### Naming Format
```
docs/{subfolder}/[seq]-[YYYY-MM-DD]-[kebab-case-description].md
```

**Example:** `docs/case-studies/01-2026-07-05-myarchery-founder-builder.md`

**Rules:**
- Lowercase • kebab-case
- Sequential 2-digit prefix per subfolder (reset per cluster)
- Date = **creation date** (immutable — never updated on edit; use header `Updated:` for last-modified)
- Group by topic in subfolders (architecture, case-studies, design, bug-fixes, etc.)
- Date is always present in filename (ISO 8601 format: `YYYY-MM-DD`)

> 💡 **Why creation date in filename?** Provides chronological context at a glance without opening the file, and stays stable across edits (unlike "last modified" which would force constant renames and break links). The header `Updated:` field tracks when the file was last edited.

### Header Template
```markdown
**Status:** 🟢 Active | ✅ Solved | ⚠️ Deprecated

# Document Title

**Topic:** architecture / design / case-study / bugfix / setup
**Created:** YYYY-MM-DD
**Updated:** YYYY-MM-DD
**Tags:** #nextjs #react #portfolio #design
**Supersedes:** [Link if deprecated]

---

## Overview
[Brief description of the document]
```

### Common Tags
```
#nextjs #react #typescript #portfolio #design #prototype #case-study #bugfix #seo
```

---

## 📊 Status & Lifecycle

| Status | When to Use |
|--------|-------------|
| 🟢 **Active** | Ongoing, not yet finished |
| ✅ **Solved** | Issue fixed, still relevant for reference |
| ⚠️ **Deprecated** | Newer document exists (kept in original folder) |

### Lifecycle Rules
- **DELETE** → If 100% absorbed in new document
- **DEPRECATED** → If historical reference is needed, issue may recur
- **SOLVED** → If permanent fix and still useful for reference

> Deprecated documents stay in their **original folder** with status marking.

---

## 🔐 Security Rules

**NEVER** include in documentation:
- Passwords, API keys, tokens
- Database URLs with credentials
- Production secrets

### ✅ Safe Patterns
```bash
# Environment variable
ANALYTICS_ID=YOUR_ANALYTICS_ID

# Placeholder
API_KEY=YOUR_API_KEY
```

Since this is a static portfolio site with no backend, there should be minimal secrets — but the rule still applies to analytics IDs, form service tokens, or deploy keys.

---

## 📂 Folder Structure

```
/
├── app/                          # Next.js App Router (pages + layout)
│   ├── layout.tsx                # Root layout (fonts + metadata)
│   ├── page.tsx                  # Homepage (single-page portfolio)
│   ├── globals.css               # Global styles + design tokens
│   └── case/                     # Case study subroutes
│       ├── myarchery/
│       ├── opencode/
│       └── pro-archery/
│
├── components/                   # React components
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
│   ├── Reveal.tsx                # Scroll reveal wrapper
│   ├── T.tsx                     # i18n translation component
│   ├── LangToggle.tsx
│   ├── CaseNav.tsx
│   ├── CaseFooter.tsx
│   └── CasePrimitives.tsx        # Shared case study UI primitives
│
├── prototype/                    # Design prototypes (HTML reference)
│   ├── v1/                        # Initial concept
│   ├── v2/                        # Portfolio variant
│   ├── v3/                        # Case study pages
│   └── v4/                        # Latest bundled prototype
│
├── public/                        # Static assets
├── docs/                          # This documentation
│   ├── documentation-standards.md
│   ├── project-context.md
│   ├── getting-started.md
│   ├── changelog-guide.md
│   ├── release-guide.md
│   ├── worklog-guide.md
│   └── worklog.md
│
├── package.json
├── tsconfig.json
├── next.config.js
└── next-env.d.ts
```

### Subfolder Clustering Guide (when docs grow)

| Subfolder | Content |
|-----------|---------|
| `architecture/` | Site architecture, routing, design system |
| `design/` | Prototypes, design tokens, copywriting decisions |
| `case-studies/` | Narrative + data for each featured project |
| `bug-fixes/` | Issue logs, root cause analysis, fixes |
| `releases/` | Public release notes for major site updates |

> When adding a new doc, pick the most relevant subfolder. Create a new subfolder only if the topic is genuinely distinct and has ≥3 documents.

---

## 🔄 Workflow

### Development Phase
Create separate documents during research/analysis/implementation → **OK**

### Consolidation Phase
```
User: "merge these, make compact"
├── Read all related documents
├── Write 1 main document
├── Preserve substance, remove redundancy
└── DELETE old documents that are absorbed
```

### ⏱️ Consolidation Rules: Timeline Order

**REQUIRED** when merging multiple documents/issues:

1. **Arrange chronologically** — Earliest issue on top, newest at bottom
2. **Include dates** — Each issue/event must have a date
3. **Create a clear timeline** — Reader must understand the order of events

---

## ✅ Final Checklist

Before committing documentation:

- [ ] Header complete (Status, Topic, Updated, Tags)
- [ ] Overview section present
- [ ] **No secrets/credentials**
- [ ] Not redundant with another document
- [ ] Root directory clean (no temp scripts)
- [ ] Codebase verified before deprecating

---

**This guide is for maintainability. Flexible, not rigid.**
