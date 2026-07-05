# Changelog Writing & Update Guide

Rules and format for maintaining the changelog of **ltmoerdani.com** — the personal portfolio of Laksmana (Oci) Tri Moerdani.

---

## Purpose

- Record notable changes: new sections, design updates, bug fixes, i18n additions, performance.
- Track the site's evolution from prototype → launch → refinement.

---

## Format

1. **`# Changelog`** heading
2. Brief opening paragraph
3. Each version in this order:
   - `## [x.y.z] — YYYY-MM-DD`
   - `### Added` / `### Changed` / `### Fixed` / `### Removed`
   - Concise bullets
4. `---` separator between versions
5. Reverse chronological (newest first)

### Writing Rules

- **Language:** English
- **Present tense:** "add", "fix", "remove"
- **Tag areas:** `[Hero]`, `[Nav]`, `[Case Studies]`, `[i18n]`, `[Design]`, `[SEO]`, `[Infra]`
- Focus on what changed and why
- Include release date

---

## Versioning (Semantic)

| Bump | When | Example |
|------|------|---------|
| **Patch** (x.x.Z) | Typo, copy fix, minor CSS | Fix misaligned icon on mobile |
| **Minor** (x.Y.x) | New section, new case study, new locale | Add `/case/new-project` |
| **Major** (X.y.x) | Redesign, stack migration | Full rebrand with new design system |

---

## Template

```md
## [x.y.z] — YYYY-MM-DD

### Added
- **[Area] What was added.** Brief context.

### Changed
- **[Area] What changed.** What's different.

### Fixed
- **[Area] What was fixed.** Root cause summary.

### Removed
- **[Area] What was removed.** Why.

---
```

---

## Steps

1. Determine version bump (semver)
2. Add entry at the top
3. Update `package.json` version
4. Tag: `git tag -a vX.Y.Z -m "Release vX.Y.Z"`

---

## Checklist

- [ ] Changelog updated
- [ ] `package.json` version bumped
- [ ] Build succeeds
- [ ] Mobile QA at 375px, 768px, 1024px, 1440px
- [ ] Both locales render correctly

---

## References
- [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
- [Semantic Versioning](https://semver.org/)

---

*Updated: 2026-07-05 • Project: ltmoerdani.com*
