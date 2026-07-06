'use client';

import { useState } from 'react';
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

const mobileNavItem: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 18,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--ink)',
  transition: 'color .2s',
};

const navLinks = [
  { href: '#work', en: 'Work', id: 'Karya' },
  { href: '#approach', en: 'Approach', id: 'Cara kerja' },
  { href: '#timeline', en: 'Journey', id: 'Perjalanan' },
  { href: '#contact', en: 'Contact', id: 'Kontak' },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
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

        {/* Desktop nav links */}
        <div className="ltm-nav-links">
          {navLinks.map((item) => (
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

        {/* Mobile: lang toggle + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="ltm-mobile-controls">
            <LangToggle />
          </div>
          <button
            className="ltm-nav-hamburger"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`ltm-nav-mobile-overlay${mobileOpen ? ' open' : ''}`}>
        {navLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={mobileNavItem}
            onClick={closeMenu}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
          >
            <T en={item.en} id={item.id} />
          </a>
        ))}
      </div>
    </>
  );
}
