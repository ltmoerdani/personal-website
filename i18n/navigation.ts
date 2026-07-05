import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './config';

/**
 * Locale-aware navigation helpers.
 *
 * Usage mirrors next/link and next/navigation, but automatically inserts the
 * active locale prefix:
 *
 *   import { Link, redirect, usePathname, useRouter } from '@/i18n/navigation';
 *   <Link href="/case/myarchery">…</Link>      // → /en/case/myarchery
 *   <Link href="/" locale="id">Switch to ID</Link>
 *
 * Callers should NOT manually prepend `/en/` or `/id/` — pass the localeless
 * path and let the helper resolve it.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({ locales, localePrefix: 'always', defaultLocale });
