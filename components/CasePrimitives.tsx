'use client';

import { ReactNode } from 'react';
import { T } from './T';
import { Reveal } from './Reveal';

/** Single key metric in a case-study stat grid. */
export function CaseStat({
  value,
  labelEn,
  labelId,
  accent = 'dark',
}: {
  value: ReactNode;
  labelEn: string;
  labelId: string;
  accent?: 'dark' | 'light';
}) {
  const valueColor =
    accent === 'dark' ? 'var(--accent)' : 'color-mix(in oklab, var(--accent) 45%, white)';
  const labelColor =
    accent === 'dark' ? 'rgba(29,28,26,0.5)' : 'rgba(248,247,243,0.5)';
  const cellBg = accent === 'dark' ? 'var(--bg)' : 'var(--ink)';

  return (
    <div style={{ background: cellBg, padding: 24 }}>
      <div
        style={{
          fontWeight: 900,
          fontSize: 34,
          letterSpacing: '-0.03em',
          color: valueColor,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '11.5px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: labelColor,
          marginTop: 4,
        }}
      >
        <T en={labelEn} id={labelId} />
      </div>
    </div>
  );
}

export function CaseStatGrid({
  children,
  accent = 'dark',
}: {
  children: ReactNode;
  accent?: 'dark' | 'light';
}) {
  const border = accent === 'dark' ? 'rgba(29,28,26,0.14)' : 'rgba(248,247,243,0.15)';
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
        gap: 1,
        background: border,
        border: `1px solid ${border}`,
        borderRadius: 16,
        overflow: 'hidden',
        marginTop: 52,
        animation: 'ltm-rise 0.9s var(--ease) 0.4s both',
      }}
    >
      {children}
    </div>
  );
}

/** A section title + paragraph block, max-width 820px. */
export function CaseSection({
  titleEn,
  titleId,
  children,
}: {
  titleEn: string;
  titleId: string;
  children: ReactNode;
}) {
  return (
    <section
      style={{
        maxWidth: 820,
        margin: '0 auto',
        padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0',
      }}
    >
      <Reveal index={0}>
        <h2 style={sectionTitle}>
          <T en={titleEn} id={titleId} />
        </h2>
        <p style={sectionBody}>{children}</p>
      </Reveal>
    </section>
  );
}

const sectionTitle: React.CSSProperties = {
  margin: '0 0 16px',
  fontFamily: 'var(--font-instrument), serif',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: 'clamp(30px,3.6vw,44px)',
};

const sectionBody: React.CSSProperties = {
  margin: 0,
  fontSize: 17,
  lineHeight: 1.8,
  color: 'rgba(29,28,26,0.72)',
};

/** Pull quote at the end of a case study. */
export function CaseQuote({ en, id, accentColor }: { en: ReactNode; id: ReactNode; accentColor?: string }) {
  return (
    <section
      style={{
        maxWidth: 820,
        margin: '0 auto',
        padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) clamp(56px,9vh,100px)',
      }}
    >
      <Reveal index={0}>
        <div style={{ borderLeft: `3px solid ${accentColor || 'var(--accent)'}`, paddingLeft: 28 }}>
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-instrument), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(24px,2.8vw,32px)',
              lineHeight: 1.5,
            }}
          >
            <T en={en} id={id} />
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/** Dashed placeholder box for a screenshot that's not yet available. */
export function CaseScreenshot({ en, id }: { en: string; id: string }) {
  return (
    <section
      style={{
        maxWidth: 820,
        margin: '0 auto',
        padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0',
      }}
    >
      <Reveal index={0}>
        <div
          style={{
            border: '1.5px dashed rgba(29,28,26,0.3)',
            borderRadius: 16,
            aspectRatio: '16 / 8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background:
              'repeating-linear-gradient(-45deg,rgba(29,28,26,0.03) 0 12px,transparent 12px 24px)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '12.5px',
              color: 'rgba(29,28,26,0.5)',
            }}
          >
            <T en={en} id={id} />
          </span>
        </div>
      </Reveal>
    </section>
  );
}
