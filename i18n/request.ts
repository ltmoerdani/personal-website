import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { defaultLocale, locales, type Locale } from './config';

/**
 * Loads the message bundle for the active locale.
 *
 * Messages are intentionally light — the bulk of bilingual copy in this site
 * still lives inline in components via the <T en id /> helper. This file
 * exists so `next-intl` has something to render for framework-level strings
 * (lang attribute, alternate links, navigation labels) and so future content
 * can migrate to message keys without re-architecting.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: Locale = hasLocale(locales, requested) ? requested : defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
