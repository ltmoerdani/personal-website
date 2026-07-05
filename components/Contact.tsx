'use client';

import { Reveal } from './Reveal';
import { T } from './T';

export function Contact() {
  return (
    <footer id="contact" style={{ background: 'var(--ink)', color: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(80px,13vh,150px) clamp(20px,4vw,56px) 40px' }}>
        <Reveal index={0}>
          <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'color-mix(in oklab, var(--accent) 50%, white)', marginBottom: 20 }}>
            <T en="One last thing" id="Satu hal terakhir" />
          </div>
        </Reveal>

        <Reveal index={0}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(34px,4.6vw,66px)', lineHeight: 1.15, letterSpacing: '-0.015em', maxWidth: 940, textWrap: 'balance' }}>
            <T
              en={
                <>
                  If your product decisions and business outcomes have quietly drifted apart, that conversation is{' '}
                  <AccentWord>welcome</AccentWord>.
                </>
              }
              id={
                <>
                  Kalau keputusan produk dan hasil bisnis Anda diam-diam mulai berjalan sendiri-sendiri, percakapan itu{' '}
                  <AccentWord>terbuka</AccentWord>.
                </>
              }
            />
          </h2>
        </Reveal>

        <Reveal index={1}>
          <div style={{ display: 'flex', gap: 14, marginTop: 44, flexWrap: 'wrap' }}>
            <a
              href="mailto:hello@ltmoerdani.com"
              style={primaryBtn}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              hello@ltmoerdani.com
            </a>
            <a
              href="https://www.linkedin.com/in/ltmoerdani"
              target="_blank"
              rel="noopener noreferrer"
              style={outlineBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(248,247,243,0.08)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'none';
              }}
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginTop: 90, paddingTop: 24, borderTop: '1px solid rgba(248,247,243,0.12)', fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: 'rgba(248,247,243,0.45)' }}>
          <span>© 2026 ltmoerdani.com · Jakarta</span>
          <span>Fractional CPO · Co-Founder Reka Cipta Digital</span>
        </div>
      </div>
    </footer>
  );
}

function AccentWord({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: 'color-mix(in oklab, var(--accent) 45%, white)', borderBottom: '3px solid color-mix(in oklab, var(--accent) 45%, white)' }}>
      {children}
    </span>
  );
}

const primaryBtn: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  background: 'var(--bg)',
  color: 'var(--ink)',
  fontWeight: 700,
  fontSize: 15,
  padding: '16px 30px',
  borderRadius: 99,
  transition: 'transform .25s',
};

const outlineBtn: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  border: '1.5px solid rgba(248,247,243,0.4)',
  color: 'var(--bg)',
  fontWeight: 700,
  fontSize: 15,
  padding: '16px 30px',
  borderRadius: 99,
  transition: 'transform .25s, background .25s',
};
