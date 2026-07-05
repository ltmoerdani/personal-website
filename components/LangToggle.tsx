'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

/**
 * Switches the active locale by navigating to the same path under the other
 * locale prefix. The choice is reflected in the URL (e.g. /en/... → /id/...),
 * which makes it shareable, SEO-crawlable, and persistent without localStorage.
 *
 * The visible label always shows the *other* language (the one you'd switch to),
 * matching the original v3 prototype behavior.
 */
export function LangToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === 'en' ? 'id' : 'en';

  const toggle = () => {
    // Same path, different locale prefix. next-intl handles the replacement.
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggle}
      style={btn}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--ink)';
        e.currentTarget.style.color = 'var(--bg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--ink)';
      }}
      aria-label={`Switch to ${nextLocale === 'id' ? 'Bahasa Indonesia' : 'English'}`}
    >
      {nextLocale === 'id' ? '🌐 ID' : '🌐 EN'}
    </button>
  );
}

const btn: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.08em',
  padding: '7px 14px',
  border: '1.5px solid var(--ink)',
  borderRadius: 99,
  background: 'transparent',
  color: 'var(--ink)',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
};
