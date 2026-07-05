'use client';

import { Reveal } from './Reveal';
import { T } from './T';

type Pillar = {
  num: string;
  title: string;
  en: string;
  id: string;
};

const pillars: Pillar[] = [
  {
    num: '01',
    title: 'Fractional CPO',
    en: 'Embedded inside organizations, not advising from a slide deck. Currently leading product at Pro Archery — roadmap, team, priorities. Decisions that move revenue.',
    id: 'Bekerja di dalam organisasi, bukan memberi saran dari slide deck. Saat ini memimpin produk di Pro Archery — roadmap, tim, prioritas. Keputusan yang menggerakkan revenue.',
  },
  {
    num: '02',
    title: 'Builder',
    en: 'MyArchery.id, Blazz, OpenCode. Products that started from a business problem and are live today. The technology came after — the same order every time.',
    id: 'MyArchery.id, Blazz, OpenCode. Produk yang berangkat dari masalah bisnis dan berjalan sampai hari ini. Teknologinya menyusul — urutannya selalu sama.',
  },
  {
    num: '03',
    title: 'Founder consulting',
    en: "Turning a raw concept into something that survives a real conversation with an investor. A few sessions, not months. Rated 5.0 across three continents.",
    id: 'Mengubah konsep mentah menjadi sesuatu yang lolos percakapan sungguhan dengan investor. Beberapa sesi, bukan berbulan-bulan. Rating 5.0 dari tiga benua.',
  },
];

export function Positioning() {
  return (
    <section
      style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: 'clamp(56px,9vh,110px) clamp(20px,4vw,56px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: 20,
        }}
      >
        {pillars.map((p, i) => (
          <Reveal key={p.num} index={i}>
            <PillarCard pillar={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <div
      style={{
        border: '1.5px solid rgba(29,28,26,0.14)',
        borderRadius: 18,
        padding: '30px 28px',
        background: 'var(--paper)',
        transition: 'transform .3s, border-color .3s',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'var(--accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.borderColor = 'rgba(29,28,26,0.14)';
      }}
    >
      <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: 'var(--accent)', letterSpacing: '0.12em' }}>
        {pillar.num}
      </div>
      {pillar.title === 'Founder consulting' ? (
        <h3 style={pillarTitle}>
          <T en="Founder consulting" id="Konsultan founder" />
        </h3>
      ) : (
        <h3 style={pillarTitle}>{pillar.title}</h3>
      )}
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'rgba(29,28,26,0.65)' }}>
        <T en={pillar.en} id={pillar.id} />
      </p>
    </div>
  );
}

const pillarTitle: React.CSSProperties = {
  margin: '14px 0 10px',
  fontSize: 22,
  fontWeight: 800,
  letterSpacing: '-0.02em',
};
