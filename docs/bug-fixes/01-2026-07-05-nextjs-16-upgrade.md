**Status:** ✅ Solved

# Next.js 14 → 16 Upgrade

**Topic:** bugfix / upgrade / infrastructure
**Created:** 2026-07-05
**Updated:** 2026-07-05
**Tags:** #nextjs #react #upgrade #turbopack

---

## Overview

Upgraded the project from Next.js 14.2.5 (React 18) to Next.js 16.2.10 (React 19.2). This document records the breaking changes encountered, how each was resolved, and the stale-process pitfall that caused runtime errors.

---

## What Changed

### Version Matrix

| Package | Before | After |
|---------|--------|-------|
| `next` | 14.2.5 | **16.2.10** |
| `react` / `react-dom` | 18.3.1 | **19.2.0** |
| `@types/react` / `@types/react-dom` | 18 | **19** |
| `@types/node` | 20 | **22** |
| Bundler | Webpack (default) | **Turbopack** (default in v16) |

### Note on Version Number

User requested "Next.js 16.3" but npm's latest stable release is **16.2.10** (published 3 days prior). Version 16.3 does not exist yet on npm.

---

## Breaking Changes Encountered & Resolved

### 1. Turbopack is Default

**Change:** `next dev` and `next build` now use Turbopack automatically. The `--turbopack` flag is no longer needed.

**Action:** No code change required. Build time improved from ~3s to ~1.6s.

### 2. React 19 Upgrade

**Change:** React 18 → 19.2. Types must match.

**Action:** Upgraded `react`, `react-dom`, and their `@types/*` packages to v19. No code changes needed — the project doesn't use any APIs that changed between 18 and 19.

### 3. `next lint` Removed

**Change:** The `next lint` command was removed in v16. `next build` no longer runs linting.

**Action:** Removed the `"lint": "next lint"` script from `package.json`. ESLint is not configured for this project (no `.eslintrc`), so this had no impact.

### 4. Scroll Behavior Override

**Change:** In Next.js 15 and earlier, the framework temporarily overrode `scroll-behavior: smooth` during SPA route transitions to ensure instant scroll-to-top. In v16, this override is **off by default**.

**Impact:** Without action, clicking a nav link would smooth-scroll to the top instead of jumping — feeling sluggish.

**Action:** Added `data-scroll-behavior="smooth"` to the `<html>` element in `app/layout.tsx`:

```tsx
<html lang="en" data-scroll-behavior="smooth" ...>
```

This restores the previous behavior (instant scroll on navigation, smooth scroll for in-page anchors).

### 5. TypeScript `jsx` Setting

**Change:** Next.js 16 requires `jsx: "react-jsx"` in `tsconfig.json` (React automatic runtime).

**Action:** Next.js auto-updated `tsconfig.json` during the first build. No manual intervention needed.

### 6. Build Output Metrics Removed

**Change:** `next build` no longer shows `Size` and `First Load JS` columns in the route table.

**Reason:** These metrics were inaccurate in RSC architectures. Use Chrome Lighthouse or Vercel Analytics for real performance measurement.

---

## Breaking Changes NOT Applicable

| Change | Why It Doesn't Apply |
|--------|---------------------|
| Async `params`/`searchParams` | No dynamic routes — all pages are static |
| PPR / `cacheComponents` | Using default static rendering |
| `middleware` → `proxy` rename | No middleware file exists |
| `next/image` config changes | Using plain `<img>` tags, not `next/image` |
| AMP removal | Not using AMP |
| Runtime config removal | Not using `serverRuntimeConfig`/`publicRuntimeConfig` |
| Parallel routes `default.js` | Not using parallel routes |
| ESLint Flat Config | No ESLint configured |
| `revalidateTag` second arg | Not using cache revalidation |
| Image `localPatterns` / `qualities` | Not using `next/image` |

---

## The Stale Process Pitfall

### Symptom

After upgrading `node_modules`, the dev server produced cascading errors:

```
Error: Cannot find module 'next/dist/server/future/route-modules/pages/vendored/contexts/html-context'
Module not found: Can't resolve 'private-next-instrumentation-client'
```

### Root Cause

A **Next.js 14.2.33 dev server** was still running (from a previous session) on port 3000. When `npm install` replaced `node_modules/next` with v16, the old server's file watcher detected changes and tried to hot-reload. But the v14 code in memory was incompatible with the v16 files on disk → cascade of `MODULE_NOT_FOUND` errors.

### Fix

```bash
# Kill ALL Next.js processes before upgrading
pkill -f "next dev"
pkill -f "next-server"
lsof -ti:3000,3001 | xargs kill -9

# Then verify clean state
rm -rf .next node_modules/.cache
npm run build  # should succeed
```

### Lesson

> **Always kill the dev server before a major version upgrade.** Hot-reload across major Next.js versions is not supported and produces spectacular errors. The errors look like code bugs but are actually stale-process conflicts.

---

## Verification

After upgrade:

| Check | Result |
|-------|--------|
| `npm run build` | ✅ Compiles in 1.6s, all 5 routes prerendered |
| Homepage render | ✅ All 11 sections, hero, marquee |
| Case page navigation | ✅ `/case/opencode` renders with terminal mockup |
| Language toggle | ✅ EN ↔ ID switches correctly |
| Counter animations | ✅ Fire on scroll |
| TypeScript | ✅ No type errors |

---

## New Features Available (Not Yet Used)

Next.js 16 unlocks these features, currently unused but available:

| Feature | Potential Use |
|---------|---------------|
| **React Compiler** (`reactCompiler: true`) | Auto-memoization — could remove manual optimization needs |
| **View Transitions** | Smooth animated transitions between case study pages |
| **Turbopack FS Cache** (`experimental.turbopackFileSystemCacheForDev`) | Faster dev server restarts |
| **`useEffectEvent`** | Cleaner hover-state handlers (currently using `onMouseEnter/Leave`) |
| **Activity component** | Preserve state when toggling language |

To enable React Compiler:
```bash
npm install -D babel-plugin-react-compiler
```
```js
// next.config.js
const nextConfig = { reactCompiler: true };
```

---

*Upgrade completed 2026-07-05. Next.js 16.2.10 + React 19.2.0.*
