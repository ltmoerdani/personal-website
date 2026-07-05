# Release Guide

Workflow for shipping public releases of **ltmoerdani.com**.

---

## Core Principle

For a personal portfolio, releases are lightweight. No dual-track (internal changelog vs marketing release notes) — the audience is the site owner and future collaborators.

| Document | Audience | Tone |
|----------|----------|------|
| `CHANGELOG.md` or `docs/worklog.md` | Owner, AI, contributors | Technical, concise |
| Git tags | Public (if open repo) | Neutral |

---

## Versioning

```
v1.0.0  — Initial production launch
v1.1.0  — New case study
v1.0.1  — Copy fix, CSS tweak
v2.0.0  — Full redesign
```

### When to Bump

| Change | Bump | Announce? |
|--------|------|-----------|
| Typo / copy fix | Patch | No |
| CSS adjustment | Patch | No |
| New case study / section | Minor | Optional |
| Complete redesign | Major | Yes |
| Domain launch | Major | Yes |

---

## Workflow

### A. Routine Patch

1. Code + test
2. Add changelog entry (if maintained)
3. Commit: `docs: changelog x.y.z`
4. Deploy
5. Done

### B. Minor Release

1. Merge changes to `main`
2. Update changelog + `package.json` version
3. Tag:
   ```bash
   git tag -a vX.Y.Z -m "Release vX.Y.Z — [Name]"
   git push origin main --tags
   ```
4. Deploy
5. Optional: share on social

### C. Major Release

1. Pre-flight:
   - All features merged + tested
   - Changelog updated
   - Version bumped
   - Mobile QA across breakpoints
   - SEO metadata present
2. Tag + push
3. Deploy to production
4. Smoke test:
   - Homepage loads at `/en` and `/id`
   - Case study links work
   - Language toggle works
   - Mobile responsive
5. Optional announcement

---

## Pre-Release Checklist

### Content
- [ ] All copy finalized (EN/ID)
- [ ] Case study data accurate
- [ ] Contact info current

### Technical
- [ ] `package.json` version matches
- [ ] `npm run build` succeeds
- [ ] Both `/en` and `/id` render correctly
- [ ] Fonts loading (Archivo, Instrument Serif, JetBrains Mono)
- [ ] No console errors
- [ ] `NEXT_PUBLIC_SITE_URL` set for production
- [ ] SEO: metadata, hreflang, OG, sitemap

### Deployment
- [ ] Domain `ltmoerdani.com` configured
- [ ] HTTPS working
- [ ] Deploy successful

---

## References
- [Semantic Versioning](https://semver.org/)
- `docs/changelog-guide.md`
- `docs/worklog.md`

---

*Updated: 2026-07-05 • Project: ltmoerdani.com*
