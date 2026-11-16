'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { LangToggle } from './LangToggle';
import { T } from './T';

const navItem: React.CSSProperties = {
  fontFamily: 'var(--font-eb-garamond), serif',
  fontSize: 'clamp(1rem, 0.98rem + 0.1vw, 1.0625rem)',
  color: 'var(--muted)',
  transition: 'color 180ms var(--ease-out)',
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
          padding: '16px clamp(20px,6vw,120px)',
          background: 'rgba(222,218,211,0.9)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <span
            style={{
              fontFamily: 'var(--font-eb-garamond), serif',
              fontStyle: 'italic',
              fontSize: 22,
              color: 'var(--ink)',
            }}
          >
            lt
          </span>
          <span style={{ fontWeight: 500, fontSize: 18, letterSpacing: '-0.01em' }}>
            moerdani
          </span>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 11,
              color: 'var(--muted)',
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
                e.currentTarget.style.color = 'var(--ink)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--muted)';
              }}
            >
              <T en={item.en} id={item.id} />
            </a>
          ))}
          <Link
            href="/writing"
            style={navItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--ink)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--muted)';
            }}
          >
            <T en="Writing" id="Tulisan" />
          </Link>
          <LangToggle />
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="ltm-nav-mobile-right">
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
        <Link
          href="/writing"
          style={mobileNavItem}
          onClick={closeMenu}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
        >
          <T en="Writing" id="Tulisan" />
        </Link>
      </div>
    </>
  );
}
