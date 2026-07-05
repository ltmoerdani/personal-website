'use client';

import { Link } from '@/i18n/navigation';
import { T } from './T';

type NavTarget = {
  href: string;
  en: string;
  id: string;
};

export function CaseFooter({
  prev,
  next,
}: {
  prev?: NavTarget;
  next?: NavTarget;
}) {
  return (
    <footer style={{ borderTop: '1.5px solid rgba(29,28,26,0.12)' }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '36px clamp(20px,4vw,56px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 20,
          flexWrap: 'wrap',
        }}
      >
        <span>
          {prev ? (
            <Link
              href={prev.href}
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 13,
                color: 'var(--ink)',
              }}
            >
              ← <T en={prev.en} id={prev.id} />
            </Link>
          ) : (
            <Link
              href="/"
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 13,
                color: 'var(--ink)',
              }}
            >
              ← <T en="All work" id="Semua karya" />
            </Link>
          )}
        </span>
        <span>
          {next && (
            <Link
              href={next.href}
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 13,
                color: 'var(--accent)',
                fontWeight: 700,
              }}
            >
              <T en={next.en} id={next.id} /> →
            </Link>
          )}
        </span>
      </div>
    </footer>
  );
}
