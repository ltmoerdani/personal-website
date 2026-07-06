**Status:** ✅ Solved

# Next.js Image Cache: Replaced Image Not Updating in Dev

**Topic:** bugfix / nextjs / image-optimization / cache
**Created:** 2026-07-07
**Updated:** 2026-07-07
**Tags:** #nextjs #image-cache #dev-server #fix

---

## Overview

When replacing a source image file (same filename, new content) in `public/`, the Next.js dev server continued serving the old optimized version. Browser refresh alone did not resolve the issue.

---

## Root Cause

Next.js Image Optimization maintains its own cache separate from the browser cache and the `.next` build cache. Located at `.next/cache/images/`, this cache stores optimized versions of images served via `next/image`. When the source file is replaced with identical filename, the cache key (based on filename + query params) does not change, so the stale optimized version is served.

Three cache layers are involved:

1. **Browser cache** — HTTP cache headers on image responses
2. **Next.js Image Optimization cache** — `.next/cache/images/`
3. **Next.js build cache** — `.next/` (includes compiled pages, but NOT image cache)

---

## Resolution

```bash
# Full fix: clear all three layers
kill $(lsof -ti:3000) 2>/dev/null      # Stop dev server
rm -rf .next                            # Clear build cache + image cache
rm -rf .next/cache/images 2>/dev/null   # Explicit image cache clear (if .next already rebuilt)
npm run dev                             # Restart dev server

# Browser side: hard reload
# Cmd+Shift+R (macOS) or DevTools > Network > Disable cache > Reload
```

For page-level cache busting (does NOT fix image cache, but helps browser):
```
http://localhost:3000/jual-tanah-bogor?v=2
```

---

## Key Insight

Query string cache busting (`?v=2`) on the page URL helps the browser fetch fresh HTML, but does **not** invalidate the Next.js Image Optimization cache. The image cache key is based on the `src` path + optimization parameters, not the page URL. Must clear `.next/cache/images/` explicitly.

---

## Files Affected

- `public/tanah-bogor/01-hero-panoramic-overview.jpg` — replaced source file, stale optimized version persisted

---

*Created: 2026-07-07 — Session 5*
