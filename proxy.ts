import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n/config';

/**
 * Locale negotiation proxy (Next.js 16 renamed "middleware" to "proxy").
 *
 *  - Prefixed routes are always required: `/en/...` and `/id/...`.
 *  - Visiting `/` negotiates the locale via the `Accept-Language` header and
 *    the `NEXT_LOCALE` cookie, then redirects to the matching prefix. The
 *    default fallback is `en`.
 *  - The chosen locale is persisted in the `NEXT_LOCALE` cookie so repeat
 *    visits skip negotiation.
 *
 * Excluded from i18n:
 *  - Next internals (_next, static assets)
 *  - public/ files (anything with a dot in the last segment)
 */
export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true,
});

export const config = {
  // Match all paths except:
  //  - Next.js internals: /_next, /favicon.ico, /__nextjs_*
  //  - Files with an extension in the final segment (images, fonts, etc.)
  //  - API routes (don't need locale prefix)
  matcher: ['/((?!_next|_vercel|api|favicon\\.ico|jual-tanah-bogor|.*\\..*).*)'],
};
