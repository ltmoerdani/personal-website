'use client';

import { ReactNode } from 'react';
import { useLocale } from 'next-intl';
import type { Locale } from '@/i18n/config';

/**
 * Renders the appropriate language variant of a string based on the active
 * route locale (driven by next-intl). Both props are kept on the API for
 * ergonomic inline authoring — no external message files required.
 *
 *   <T en="Work" id="Karya" />
 *
 * On `/en/...` renders:  Work
 * on `/id/...` renders:  Karya
 *
 * IMPORTANT: the active locale is decided by the URL segment, not by a
 * runtime toggle. There is no CSS-driven dual-render anymore — only the
 * matching language is sent to the browser, which is better for SEO and
 * payload size.
 */
export function T({ en, id }: { en: ReactNode; id: ReactNode }) {
  const locale = useLocale() as Locale;
  return <>{locale === 'id' ? id : en}</>;
}
