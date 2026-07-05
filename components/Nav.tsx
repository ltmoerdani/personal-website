'use client';

import { LangToggle } from './LangToggle';
import { T } from './T';

const navItem: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 12,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--ink)',
  borderBottom: '1px solid transparent',
  transition: 'color .2s, border-color .2s',
};

export function Nav() {
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
      <a href="#top" style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
        <span
          style={{
            fontFamily: 'var(--font-instrument), serif',
            fontStyle: 'italic',
            fontSize: 24,
            color: 'var(--accent)',
          }}
        >
          lt
        </span>
        <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: '-0.02em' }}>
          moerdani
        </span>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 12,
            color: 'var(--accent)',
          }}
        >
          .com
        </span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px,2.5vw,28px)' }}>
        {[
          { href: '#work', en: 'Work', id: 'Karya' },
          { href: '#approach', en: 'Approach', id: 'Cara kerja' },
          { href: '#timeline', en: 'Journey', id: 'Perjalanan' },
          { href: '#contact', en: 'Contact', id: 'Kontak' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={navItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.borderBottomColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--ink)';
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}
          >
            <T en={item.en} id={item.id} />
          </a>
        ))}
        <LangToggle />
      </div>
    </nav>
  );
}
