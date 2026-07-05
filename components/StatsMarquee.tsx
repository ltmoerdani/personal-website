import { T } from './T';

type StatItem = {
  value: string;
  labelEn: string;
  labelId: string;
};

const items: StatItem[] = [
  { value: '12,000+', labelEn: 'SKUs', labelId: 'SKU' },
  {
    value: '8,000+',
    labelEn: 'active users — MyArchery.id',
    labelId: 'pengguna aktif — MyArchery.id',
  },
  {
    value: '3,952',
    labelEn: 'installs · 5★ — OpenCode',
    labelId: 'instalasi · 5★ — OpenCode',
  },
  { value: 'Rp10M+', labelEn: 'monthly transactions', labelId: 'transaksi bulanan' },
  { value: '3', labelEn: 'continents of clients', labelId: 'benua klien' },
  { value: '20', labelEn: 'years in digital work', labelId: 'tahun di dunia digital' },
];

function MarqueeRow() {
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
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  );
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
};

const strongStyle: React.CSSProperties = {
  fontFamily: 'var(--font-archivo), sans-serif',
  fontWeight: 900,
  fontSize: 19,
};

function Diamond() {
  return <span style={{ marginLeft: 44, color: 'var(--accent)' }}>◆</span>;
}
