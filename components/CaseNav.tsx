'use client';

import { Link } from '@/i18n/navigation';
import { LangToggle } from './LangToggle';

export function CaseNav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        padding: '18px clamp(20px,4vw,56px)',
        background: 'rgba(248,247,243,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(29,28,26,0.08)',
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: 13,
          color: 'var(--ink)',
        }}
      >
        ← ltmoerdani.com
      </Link>
      <LangToggle />
    </nav>
  );
}
