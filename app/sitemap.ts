import type { MetadataRoute } from 'next';
import { locales, defaultLocale, siteBaseUrl } from '@/i18n/config';

/**
 * Sitemap entries for all locale-prefixed routes.
 *
 * Each route is emitted once per locale with the appropriate `hreflang`
 * alternates so search engines understand the relationship between the
 * English and Indonesian versions.
 */
const routes = ['', '/case/myarchery', '/case/opencode', '/case/pro-archery'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const alternates = Object.fromEntries(
      locales.map((l) => [l, `${siteBaseUrl}/${l}${route}`]),
    );

    for (const locale of locales) {
      entries.push({
        url: `${siteBaseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            ...alternates,
            'x-default': `${siteBaseUrl}/${defaultLocale}${route}`,
          },
        },
      });
    }
  }

  return entries;
}
