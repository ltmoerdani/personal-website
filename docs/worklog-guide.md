# 📋 Worklog Guide

> **Trigger:** "read worklog" / "check worklog" / "lanjut kerja" / "what's next"

---

## Core Principle

**AI acts directly based on document contents.** Empty fields → suggest immediately. Ambiguous status → interpret from context.

---

## Step 1 — Read Session Handoff

Parse the `⚡ Session Handoff` section of `docs/worklog.md`:

| Field | If Filled | If Empty |
|-------|-----------|----------|
| Last Session | Time context | `[No previous session]` |
| Worked On | Context | Infer from active tasks |
| Stopped At | Resume point | Infer from most recent task |
| Next Action | Execute | Infer from P0 task |
| Open Issues | Constraint | `[No issues recorded]` |

---

## Step 2 — Task Status Inference

Read `🔥 ACTIVE TASKS`. For each:

- **Ready if:** Status = 🟡 AND Blocked by = `-`
- **Likely complete if:** Same task in `✅ COMPLETED` → suggest move
- **Blocked if:** Blocked by references active task
- **Stale if:** Last touched > 3 days → suggest confirmation

Priority order: P0 (not blocked) → P1 → P2.

---

## Step 3 — Auto-Fill Empty Fields

Write suggestions directly. Estimate time from scope:
- 1–3 items → `~2–4 hours`
- 4–7 items → `~1–2 days`
- 8+ items → `~3–5 days`

---

## Step 4 — Read History Selectively

| Trigger | Read |
|---------|------|
| "what's done?" | Last 7 days only |
| Specific task | Search by ID/name |
| New task | Check for similar prior work |
| Debugging | Check similar past issues |

---

## Step 5 — Auto-Response at Session Start

```
## 📍 Current Status
**Last worked on:** [Last Session]
**Working on:** [Worked On]
**Stopped at:** [Stopped At]

## ⚡ Continue Now
[Next Action]
**Active task:** [P0 name]

## ⚠️ Needs Attention
[Open issues, stale tasks, likely-complete tasks]
```

Skip empty sections.

---

## Tag → Reference Mapping

| Tag | Auto-Read |
|------|-----------|
| `ui` | `components/` |
| `i18n` | `i18n/config.ts`, `messages/` |
| `content` | Copy in components |
| `design` | `prototype/`, `globals.css` |
| `seo` | `app/sitemap.ts`, `app/robots.ts`, metadata |
| `fix` | `docs/bug-fixes/` (if exists) |

---

## Task ID Prefixes

| Prefix | Scope |
|--------|-------|
| `UI-XX` | Component / section work |
| `CONTENT-XX` | Copy, case study data |
| `I18N-XX` | Locale, translation |
| `DESIGN-XX` | Design system, tokens |
| `FIX-XX` | Bug fix |
| `SEO-XX` | SEO, metadata, sitemap |
| `INFRA-XX` | Deploy, hosting, domain |
| `DOC-XX` | Documentation |

---

## Update Templates

### Task Completed
```
📋 Update WORKLOG:
1. REMOVE from Active: [ID]
2. ADD to Completed:
   ### 📅 [DATE]
   | [ID] | `[tag]` | [Name] — [impact] | [TIME] |
3. UPDATE Session Handoff
```

### Task Started
```
### [PREFIX-XX] Task Name
**Status:** 🟡 In Progress
**Priority:** [P0/P1/P2] | **Est:** ~[X]
**Started:** [DATE] | **Last touched:** [DATE]
**Next Action:** → [step]
**Blocked by:** -
```

---

## Prohibitions

- ❌ Don't ask before suggesting
- ❌ Don't leave fields empty
- ❌ Don't read entire history every session
- ❌ Don't skip Session Handoff

---

*Updated: 2026-07-05 • Project: ltmoerdani.com*
