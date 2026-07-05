'use client';

import { T } from './T';
import { useInstallCount, formatInstalls } from '@/lib/useInstallCount';

type StatItem = {
  value: string;
  labelEn: string;
  labelId: string;
};

const staticItems: Omit<StatItem, 'value'>[] = [
  { labelEn: 'SKUs', labelId: 'SKU' },
  { labelEn: 'active users · MyArchery.id', labelId: 'pengguna aktif · MyArchery.id' },
  { labelEn: 'monthly transactions', labelId: 'transaksi bulanan' },
  { labelEn: 'continents of clients', labelId: 'benua klien' },
  { labelEn: 'years in digital work', labelId: 'tahun di dunia digital' },
];

function MarqueeRow({ items }: { items: StatItem[] }) {
  return (
    <div style={rowStyle}>
      {items.map((item, i) => (
        <span key={i} style={itemStyle}>
          <strong style={strongStyle}>{item.value}</strong>{' '}
          <T en={item.labelEn} id={item.labelId} />
          <Diamond />
        </span>
      ))}
    </div>
  );
}

export function StatsMarquee() {
  const { installs } = useInstallCount();

  const items: StatItem[] = [
    { value: '12,000+', ...staticItems[0] },
    { value: '8,000+', ...staticItems[1] },
    {
      value: formatInstalls(installs),
      labelEn: 'installs · 5★ · OpenCode',
      labelId: 'instalasi · 5★ · OpenCode',
    },
    { value: 'Rp10M+', ...staticItems[2] },
    { value: '3', ...staticItems[3] },
    { value: '20', ...staticItems[4] },
  ];

  return (
    <div
      style={{
        marginTop: 'clamp(48px,8vh,88px)',
        borderTop: '1.5px solid var(--ink)',
        borderBottom: '1.5px solid var(--ink)',
        padding: '18px 0',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      <div style={{ display: 'flex', width: 'max-content', animation: 'ltm-marquee 28s linear infinite' }}>
        <MarqueeRow items={items} />
        <MarqueeRow items={items} />
      </div>
    </div>
  );
}

function Diamond() {
  return <span style={{ margin: '0 20px', fontSize: 8, opacity: 0.35 }}>◆</span>;
}

const rowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'baseline',
  gap: 44,
  paddingRight: 44,
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 14,
  letterSpacing: '0.05em',
  whiteSpace: 'nowrap',
};

const itemStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'baseline',
  gap: 6,
};

const strongStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 800,
};
