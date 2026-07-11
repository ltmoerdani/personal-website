/**
 * Central i18n configuration.
 *
 * Consumed by:
 *  - proxy.ts             → locale negotiation + prefix enforcement
 *  - i18n/request.ts       → server-side message loader
 *  - app/[locale]/layout.tsx → <html lang>, metadata alternates
 *
 * Source of truth for the list of supported locales. Adding a locale here
 * is the only change required to enable a new language everywhere.
 */
export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];

/** Locale used when the visitor lands on `/` without a prefix. */
export const defaultLocale: Locale = 'en';

/** Fallback if a message key is missing in a non-default locale. */
export const localeFallback: Locale = 'en';

export const localeLabels: Record<Locale, { native: string; english: string }> = {
  en: { native: 'English', english: 'English' },
  id: { native: 'Bahasa Indonesia', english: 'Indonesian' },
};

/** BCP-47 tags used for <html lang>, og:locale, and hreflang alternates. */
export const localeHtmlLang: Record<Locale, string> = {
  en: 'en',
  id: 'id-ID',
};

/**
 * Used for SEO metadata and sitemap. Set this once you have a production
 * domain; until then the dev value (http://localhost:3000) is fine.
 */
export const siteBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
