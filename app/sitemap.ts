import type { MetadataRoute } from 'next';
import { locales, defaultLocale, siteBaseUrl } from '@/i18n/config';
import { getSortedPosts } from '@/lib/blog';

/**
 * Sitemap entries for all locale-prefixed routes.
 *
 * Each route is emitted once per locale with the appropriate `hreflang`
 * alternates so search engines understand the relationship between the
 * English and Indonesian versions.
 */
const routes = ['', '/writing', '/case/myarchery', '/case/opencode', '/case/pro-archery'];

/** Standalone pages outside the i18n routing (no locale prefix). */
const standaloneRoutes = [
  {
    url: '/jual-tanah-bogor',
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  },
];

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

  for (const page of standaloneRoutes) {
    entries.push({
      url: `${siteBaseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  }

  // Individual blog posts — emitted per locale. Posts with a canonical URL
  // (syndicated) are still included so crawlers discover them and follow the
  // canonical hint emitted by the page metadata.
  for (const post of getSortedPosts()) {
    const lastModified = new Date(post.date);
    for (const locale of locales) {
      entries.push({
        url: `${siteBaseUrl}/${locale}/writing/${post.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
