'use client';

import { T } from './T';

export function Hero() {
  return (
    <header
      id="top"
      style={{
        position: 'relative',
        padding: 'clamp(72px,12vh,160px) clamp(20px,6vw,120px) clamp(48px,10vh,120px)',
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      <div style={{ maxWidth: 680 }}>
        <div
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 12,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            animation: 'ltm-fade 0.8s both',
          }}
        >
          <span>Laksmana (Oci) Tri Moerdani · Jakarta</span>
        </div>

        <h1
          style={{
            margin: '28px 0 0',
            fontSize: 'clamp(40px,7vw,72px)',
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            fontWeight: 400,
            fontStyle: 'italic',
            textWrap: 'balance',
            fontFamily: 'var(--font-eb-garamond), serif',
          }}
        >
          <T
            en={
              <>
                Most product failures
                <br />
                aren&apos;t engineering problems.
                <br />
                They&apos;re clarity problems.
              </>
            }
            id={
              <>
                Kebanyakan produk gagal
                <br />
                bukan karena engineering.
                <br />
                Tapi karena tidak jelas.
              </>
            }
          />
        </h1>

        <p
          style={{
            margin: '32px 0 0',
            maxWidth: 520,
            fontSize: 'clamp(1.125rem, 1.05rem + 0.3vw, 1.3125rem)',
            lineHeight: 1.6,
            color: 'var(--ink)',
            animation: 'ltm-rise 0.9s var(--ease-out) 0.2s both',
          }}
        >
          <T
            en={
              <>
              Fractional CPO and co-founder of Reka Cipta Digital. Twenty years in
              digital work, helping founders build the right product, not just a product.
              </>
            }
            id={
              <>
              Fractional CPO dan co-founder Reka Cipta Digital. Dua puluh tahun
              di dunia digital, membantu founder membangun produk yang tepat, bukan sekadar produk.
              </>
            }
          />
        </p>

        <div
          style={{
            display: 'flex',
            gap: 16,
            marginTop: 40,
            flexWrap: 'wrap',
            alignItems: 'center',
            animation: 'ltm-rise 0.9s var(--ease-out) 0.32s both',
          }}
        >
          <a
            href="#work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 18px',
              border: '1px solid var(--ink)',
              color: 'var(--ink)',
              fontSize: 'clamp(1rem, 0.98rem + 0.1vw, 1.0625rem)',
              transition: 'all 180ms var(--ease-out)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--ink)';
              e.currentTarget.style.color = 'var(--bg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--ink)';
            }}
          >
            <T en="See the work" id="Lihat karya" />
          </a>
          <a
            href="https://www.linkedin.com/in/ltmoerdani"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--muted)',
              fontSize: 'clamp(1rem, 0.98rem + 0.1vw, 1.0625rem)',
              transition: 'color 180ms var(--ease-out)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--ink)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--muted)';
            }}
          >
            LinkedIn
          </a>
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
