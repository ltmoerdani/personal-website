import type { MetadataRoute } from 'next';
import { siteBaseUrl } from '@/i18n/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteBaseUrl}/sitemap.xml`,
  };
}
