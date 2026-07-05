'use client';

import { CaseNav } from '@/components/CaseNav';
import { CaseFooter } from '@/components/CaseFooter';
import {
  CaseStat,
  CaseStatGrid,
  CaseSection,
  CaseQuote,
  CaseScreenshot,
} from '@/components/CasePrimitives';
import { Reveal } from '@/components/Reveal';
import { T } from '@/components/T';

const phases = [
  {
    num: '01',
    titleEn: 'Internal inventory',
    titleId: 'Inventori internal',
    bodyEn:
      '12,000+ SKUs. The foundation everything else depends on. Live since mid-2025.',
    bodyId:
      '12.000+ SKU. Fondasi yang menopang semuanya. Live sejak pertengahan 2025.',
  },
  {
    num: '02',
    titleEn: 'Multi-store transactions',
    titleId: 'Transaksi multi-toko',
    bodyEn:
      'Infrastructure handling Rp10M+ in monthly transactions across stores.',
    bodyId:
      'Infrastruktur yang menangani transaksi Rp10 juta+ per bulan lintas toko.',
  },
  {
    num: '03',
    titleEn: 'Warehouse-to-storefront UX',
    titleId: 'UX gudang-ke-etalase',
    bodyEn:
      'The operational flow between what\u2019s in the warehouse and what the store can sell.',
    bodyId:
      'Alur operasional antara isi gudang dan apa yang bisa dijual toko.',
  },
  {
    num: '04',
    titleEn: 'Consumer e-commerce platform',
    titleId: 'Platform e-commerce konsumen',
    bodyEn:
      'What the business asked for first \u2014 shipping last, on purpose. Launches September 2026.',
    bodyId:
      'Yang pertama diminta bisnis \u2014 sengaja dirilis terakhir. Meluncur September 2026.',
    featured: true,
  },
];

export default function ProArcheryCase() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', overflowX: 'clip' }}>
      <CaseNav />

      <header style={{ background: 'var(--ink)', color: 'var(--bg)' }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: 'clamp(64px,10vh,120px) clamp(20px,4vw,56px)',
          }}
        >
          <div style={eyebrow}>
            <T
              en="Case study · Fractional CPO · Oct 2024 – present"
              id="Studi kasus · Fractional CPO · Okt 2024 – sekarang"
            />
          </div>
          <h1 style={h1}>Pro Archery</h1>
          <p style={lede}>
            <T
              en="Indonesia's professional archery equipment retailer. No product function existed before this. The roadmap, the team, the priorities all started here."
              id="Retailer perlengkapan panahan profesional Indonesia. Sebelumnya tidak ada fungsi produk sama sekali. Roadmap, tim, dan prioritas semuanya dimulai di sini."
            />
          </p>
          <CaseStatGrid accent="light">
            <CaseStat accent="light" value="12,000+" labelEn="SKUs" labelId="SKU" />
            <CaseStat
              accent="light"
              value="Rp10M+"
              labelEn="Monthly transactions"
              labelId="Transaksi / bulan"
            />
            <CaseStat accent="light" value="4" labelEn="Phases" labelId="Fase" />
            <CaseStat
              accent="light"
              value="Sep 2026"
              labelEn="Consumer launch"
              labelId="Rilis konsumen"
            />
          </CaseStatGrid>
        </div>
      </header>

      <CaseSection
        titleEn="The wrong first move"
        titleId="Langkah pertama yang keliru"
      >
        <T
          en="I initially wanted to start with the consumer platform, since that's what the business was asking for. It took two months of looking at the inventory mess to realize the consumer platform would just expose the same chaos with a nicer interface."
          id="Awalnya saya ingin mulai dari platform konsumen, karena itu yang diminta bisnis. Butuh dua bulan bergelut dengan kekacauan inventori untuk sadar bahwa platform konsumen hanya akan memamerkan kekacauan yang sama dengan tampilan lebih bagus."
        />
      </CaseSection>

      <section style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0' }}>
        <Reveal index={0}>
          <h2 style={sectionTitle}>
            <T en="Four phases, four problems" id="Empat fase, empat masalah" />
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gap: 14, marginTop: 24 }}>
          {phases.map((p, i) => (
            <Reveal key={p.num} index={i}>
              <PhaseRow phase={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <CaseScreenshot
        en="[ product screenshot: internal platform dashboard ]"
        id="[ screenshot produk: dashboard platform internal ]"
      />

      <CaseQuote
        en="Not advising from a deck. Making product decisions that move revenue."
        id="Bukan memberi saran dari deck. Mengambil keputusan produk yang menggerakkan revenue."
      />

      <CaseFooter next={{ href: '/case/myarchery', en: 'Next: MyArchery.id', id: 'Berikutnya: MyArchery.id' }} />
    </div>
  );
}

function PhaseRow({
  phase,
}: {
  phase: (typeof phases)[number];
}) {
  const featured = phase.featured;
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '64px 1fr',
        gap: 20,
        padding: '22px 24px',
        border: featured ? '1.5px solid var(--accent)' : '1.5px solid rgba(29,28,26,0.14)',
        borderRadius: 16,
        background: featured ? 'color-mix(in oklab, var(--accent) 9%, var(--bg))' : 'var(--paper)',
        alignItems: 'baseline',
      }}
    >
      <span style={phaseNum}>{phase.num}</span>
      <div>
        <strong style={{ fontSize: 17 }}>
          <T en={phase.titleEn} id={phase.titleId} />
        </strong>
        <p style={{ margin: '4px 0 0', fontSize: '14.5px', lineHeight: 1.7, color: 'rgba(29,28,26,0.62)' }}>
          <T en={phase.bodyEn} id={phase.bodyId} />
        </p>
      </div>
    </div>
  );
}

const eyebrow: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 13,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'color-mix(in oklab, var(--accent) 50%, white)',
  animation: 'ltm-fade 1s both',
};

const h1: React.CSSProperties = {
  margin: '22px 0 0',
  fontSize: 'clamp(48px,7vw,104px)',
  fontWeight: 900,
  letterSpacing: '-0.035em',
  lineHeight: 1,
  animation: 'ltm-rise 0.9s var(--ease) 0.1s both',
};

const lede: React.CSSProperties = {
  margin: '26px 0 0',
  maxWidth: 640,
  fontSize: 19,
  lineHeight: 1.7,
  color: 'rgba(248,247,243,0.7)',
  animation: 'ltm-rise 0.9s var(--ease) 0.25s both',
};

const sectionTitle: React.CSSProperties = {
  margin: '0 0 24px',
  fontFamily: 'var(--font-instrument), serif',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: 'clamp(30px,3.6vw,44px)',
};

const phaseNum: React.CSSProperties = {
  fontFamily: 'var(--font-instrument), serif',
  fontStyle: 'italic',
  fontSize: 34,
  color: 'var(--accent)',
};
