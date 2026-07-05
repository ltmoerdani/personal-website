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
            <span>Laksmana (Oci) Tri Moerdani — Jakarta</span>
            <span style={{ animation: 'ltm-blink 1.2s step-end infinite' }}>▍</span>
          </div>

          <h1
            style={{
              margin: '26px 0 0',
              fontSize: 'clamp(44px,6.4vw,96px)',
              lineHeight: 1.02,
              letterSpacing: '-0.035em',
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
              margin: '28px 0 0',
              maxWidth: 560,
              fontSize: 18,
              lineHeight: 1.7,
              color: 'rgba(29,28,26,0.68)',
              animation: 'ltm-rise 0.9s var(--ease) 0.5s both',
            }}
          >
            <T
              en={
                <>
                  Fractional CPO and co-founder of Reka Cipta Digital. Twenty years in
                  digital work — helping companies build the{' '}
                  <strong style={{ color: 'var(--ink)' }}>right</strong> product, not just{' '}
                  <em>a</em> product.
                </>
              }
              id={
                <>
                  Fractional CPO dan co-founder Reka Cipta Digital. Dua puluh tahun di
                  dunia digital — membantu perusahaan membangun produk yang{' '}
                  <strong style={{ color: 'var(--ink)' }}>tepat</strong>, bukan sekadar{' '}
                  <em>sebuah</em> produk.
                </>
              }
            />
          </p>

          <div
            style={{
              display: 'flex',
              gap: 14,
              marginTop: 36,
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
                e.currentTarget.style.background = 'var(--ink)';
                e.currentTarget.style.color = 'var(--bg)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--ink)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              LinkedIn <span style={{ fontFamily: 'var(--font-jetbrains), monospace' }}>↗</span>
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
        display: 'inline-block',
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
