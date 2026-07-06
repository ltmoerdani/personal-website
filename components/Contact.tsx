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
                  If your product decisions and business outcomes have quietly drifted apart, and nobody's said it out loud yet, that conversation is{' '}
                  <AccentWord>welcome</AccentWord>.
                </>
              }
              id={
                <>
                  Kalau keputusan produk dan hasil bisnis Anda sudah mulai meleset, dan belum ada yang berani bilang terus terang, saya{' '}
                  <AccentWord>terbuka</AccentWord> untuk obrolan itu.
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
              style={{ ...outlineBtn, background: '#0A66C2', borderColor: '#0A66C2', color: '#fff' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#004182';
                e.currentTarget.style.borderColor = '#004182';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0A66C2';
                e.currentTarget.style.borderColor = '#0A66C2';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
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
