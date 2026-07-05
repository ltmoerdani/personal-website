'use client';

import { T } from './T';

export function Hero() {
  return (
    <header
      id="top"
      style={{
        position: 'relative',
        padding: 'clamp(48px,8vh,96px) clamp(20px,4vw,56px) 0',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 'clamp(24px,5vw,80px)',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 13,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              animation: 'ltm-fade 1s both',
            }}
          >
            <span
              style={{
                width: 34,
                height: '1.5px',
                background: 'var(--accent)',
                display: 'inline-block',
              }}
            />
            <span>Laksmana (Oci) Tri Moerdani · Jakarta</span>
            <span style={{ animation: 'ltm-blink 1.2s step-end infinite' }}>▍</span>
          </div>

          <h1
            style={{
              margin: '22px 0 0',
              fontSize: 'clamp(32px,5vw,64px)',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              fontWeight: 900,
              textWrap: 'balance',
            }}
          >
            <T
              en={
                <>
                  <Line delay="0.05s">Most product failures</Line>
                  <Line delay="0.18s">
                    {'aren\u2019t '}
                    <Italic>engineering</Italic> problems.
                  </Line>
                  <Line delay="0.32s">
                    {'They\u2019re '}
                    <Italic accent underline>
                      clarity
                    </Italic>{' '}
                    problems.
                  </Line>
                </>
              }
              id={
                <>
                  <Line delay="0.05s">Kebanyakan produk gagal</Line>
                  <Line delay="0.18s">
                    bukan karena <Italic>engineering</Italic>.
                  </Line>
                  <Line delay="0.32s">
                    Tapi karena <Italic accent underline>tidak jelas</Italic>.
                  </Line>
                </>
              }
            />
          </h1>

          <p
            style={{
              margin: '22px 0 0',
              maxWidth: 480,
              fontSize: 16,
              lineHeight: 1.6,
              color: 'rgba(29,28,26,0.68)',
              animation: 'ltm-rise 0.9s var(--ease) 0.5s both',
            }}
          >
            <T
              en={
                <>
                  Fractional CPO and co-founder of Reka Cipta Digital. Twenty years in
                  digital work, most of it learning the hard way which product decisions
                  actually hold up.
                </>
              }
              id={
                <>
                  Fractional CPO dan co-founder Reka Cipta Digital. Dua puluh tahun di
                  dunia digital, sebagian besar belajar dengan cara yang tidak mudah
                  keputusan produk mana yang benar-benar bertahan.
                </>
              }
            />
          </p>

          <div
            style={{
              display: 'flex',
              gap: 14,
              marginTop: 28,
              flexWrap: 'wrap',
              animation: 'ltm-rise 0.9s var(--ease) 0.62s both',
            }}
          >
            <a
              href="#work"
              style={primaryBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  'color-mix(in oklab, var(--accent) 78%, black)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <T en="See the work" id="Lihat karya" />{' '}
              <span style={{ fontFamily: 'var(--font-jetbrains), monospace' }}>↓</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ltmoerdani"
              target="_blank"
              rel="noopener noreferrer"
              style={outlineBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0A66C2';
                e.currentTarget.style.borderColor = '#0A66C2';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'var(--ink)';
                e.currentTarget.style.color = 'var(--ink)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            width: 'clamp(220px,24vw,340px)',
            aspectRatio: '1',
            justifySelf: 'center',
            animation: 'ltm-fade 1.2s 0.3s both',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: -22,
              border: '1.5px dashed color-mix(in oklab, var(--accent) 55%, transparent)',
              borderRadius: '50%',
              animation: 'ltm-spin 32s linear infinite',
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="ltm-photo"
            src="/profile.png"
            alt="Laksmana Tri Moerdani"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              background: 'var(--accent)',
              boxShadow: '0 24px 60px -20px rgba(29,58,46,0.45)',
            }}
          />
          <div style={badgeLeft}>
            <T en="20 yrs · 3 continents" id="20 thn · 3 benua" />
          </div>
          <div style={badgeRight}>★ 5.0</div>
        </div>
      </div>
    </header>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: string }) {
  return (
    <span
      style={{
        display: 'block',
        animation: `ltm-rise 0.9s var(--ease) ${delay} both`,
      }}
    >
      {children}
    </span>
  );
}

function Italic({
  children,
  accent,
  underline,
}: {
  children: React.ReactNode;
  accent?: boolean;
  underline?: boolean;
}) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-instrument), serif',
        fontStyle: 'italic',
        fontWeight: 400,
        color: accent ? 'var(--accent)' : undefined,
        borderBottom: underline ? '5px solid var(--accent)' : undefined,
      }}
    >
      {children}
    </span>
  );
}

const primaryBtn: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  background: 'var(--accent)',
  color: 'var(--bg)',
  fontWeight: 700,
  fontSize: 15,
  padding: '15px 28px',
  borderRadius: 99,
  transition: 'transform .25s, background .25s',
};

const outlineBtn: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  border: '1.5px solid var(--ink)',
  color: 'var(--ink)',
  fontWeight: 700,
  fontSize: 15,
  padding: '15px 28px',
  borderRadius: 99,
  transition: 'transform .25s, background .25s, color .25s',
};

const badgeLeft: React.CSSProperties = {
  position: 'absolute',
  bottom: -6,
  left: -18,
  background: 'var(--ink)',
  color: 'var(--bg)',
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: '11.5px',
  letterSpacing: '0.08em',
  padding: '9px 16px',
  borderRadius: 99,
  transform: 'rotate(-4deg)',
};

const badgeRight: React.CSSProperties = {
  position: 'absolute',
  top: 2,
  right: -14,
  background: 'var(--bg)',
  border: '1.5px solid var(--ink)',
  color: 'var(--ink)',
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: '11.5px',
  letterSpacing: '0.06em',
  padding: '9px 16px',
  borderRadius: 99,
  transform: 'rotate(3deg)',
};
