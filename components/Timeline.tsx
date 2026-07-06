'use client';

import { Reveal } from './Reveal';
import { T } from './T';

type Entry = {
  period: string;
  role: string;
  en: string;
  id: string;
};

const entries: Entry[] = [
  {
    period: '2024 –',
    role: 'Fractional CPO · Pro Archery',
    en: 'Not advising from a deck. Making product decisions that move revenue.',
    id: 'Bukan memberi saran dari deck. Mengambil keputusan produk yang menggerakkan revenue.',
  },
  {
    period: '2021 –',
    role: 'Co-Founder · Reka Cipta Digital',
    en: 'A remote-first agency built on one rule: name the problem in a sentence, then build the smallest thing that proves or kills the assumption.',
    id: 'Agensi remote-first dengan satu aturan: sebutkan masalahnya dalam satu kalimat, lalu bangun hal terkecil yang membuktikan atau mematikan asumsinya.',
  },
  {
    period: '2020 – 21',
    role: 'Head of Product · Plaza Digital Solusi',
    en: '40% jump in product adoption; build cycles halved. Less a strategy than a series of small bets that mostly held.',
    id: 'Adopsi produk naik 40%; siklus build terpangkas separuh. Bukan strategi besar, serangkaian taruhan kecil yang kebanyakan bertahan.',
  },
  {
    period: '2018 – 20',
    role: 'Product Manager · Plaza Digital Solusi',
    en: 'MyHalalTrip & Pesantren Go Digital (with Telkom Indonesia). Users ranged from daily-app fluent to first-time smartphone. +35% active users.',
    id: 'MyHalalTrip & Pesantren Go Digital (bersama Telkom Indonesia). Pengguna dari yang fasih aplikasi sampai pertama kali pegang smartphone. Pengguna aktif +35%.',
  },
  {
    period: '2015 – 18',
    role: 'Project Manager · Trimedia Global Kreasi',
    en: "What this period quietly built became RCD's operating model: small teams, clear ownership, no ambiguity about what done looks like.",
    id: 'Periode ini diam-diam jadi fondasi cara kerja RCD: tim kecil, kepemilikan jelas, semua paham apa artinya selesai.',
  },
  {
    period: '2014 – 15',
    role: 'Founder · Photomobs',
    en: "Learned more about product-market fit from what didn't sell than from what did.",
    id: 'Lebih banyak belajar product-market fit dari produk yang nggak laku ketimbang yang laku.',
  },
  {
    period: '2009 – 11',
    role: 'Database Engineer · McDermott International',
    en: 'Offshore engineering, Batam & Thailand. Where the habit of thinking in systems started.',
    id: 'Offshore engineering, Batam & Thailand. Dari sinilah kebiasaan berpikir sistemik bermula.',
  },
  {
    period: '2007 – 09',
    role: 'Web Designer & Instructor · Batavianet / BINUS Center',
    en: "First lesson worth keeping: explaining technical work clearly to people who aren't technical is its own skill.",
    id: 'Pelajaran pertama yang sampai sekarang saya pegang: menjelaskan hal teknis dengan jelas ke orang non-teknis itu keahlian tersendiri.',
  },
];

export function Timeline() {
  return (
    <section id="timeline" style={{ background: 'var(--ink)', color: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px,10vh,120px) clamp(20px,4vw,56px)' }}>
        <Reveal index={0}>
          <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'color-mix(in oklab, var(--accent) 50%, white)', marginBottom: 14 }}>
            2007 – 2026
          </div>
        </Reveal>
        <Reveal index={0}>
          <h2 style={heading}>
            <T en="Twenty years, one pattern" id="Dua puluh tahun, satu pola" />
          </h2>
        </Reveal>
        <Reveal index={0}>
          <p style={{ margin: '0 0 52px', maxWidth: 560, fontSize: 16, lineHeight: 1.7, color: 'rgba(248,247,243,0.6)' }}>
            <T
              en="Enough time to watch the same failure repeat, and to learn which order things actually have to happen in."
              id="Cukup lama untuk menyaksikan kegagalan yang sama berulang, dan belajar urutan yang sebenarnya harus terjadi."
            />
          </p>
        </Reveal>

        <div style={{ display: 'grid', gap: 0 }}>
          {entries.map((entry, i) => (
            <Reveal key={entry.period + entry.role} index={0}>
              <TimelineRow entry={entry} last={i === entries.length - 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineRow({ entry, last }: { entry: Entry; last: boolean }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '130px 1fr',
        gap: 'clamp(16px,3vw,40px)',
        padding: '22px 0',
        borderTop: '1px solid rgba(248,247,243,0.12)',
        borderBottom: last ? '1px solid rgba(248,247,243,0.12)' : undefined,
        alignItems: 'baseline',
        transition: 'background .25s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(248,247,243,0.04)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
      }}
    >
      <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 13, color: 'color-mix(in oklab, var(--accent) 50%, white)' }}>
        {entry.period}
      </div>
      <div>
        <strong style={{ fontSize: 17 }}>{entry.role}</strong>
        <span style={{ display: 'block', fontSize: 14, color: 'rgba(248,247,243,0.55)', marginTop: 3 }}>
          <T en={entry.en} id={entry.id} />
        </span>
      </div>
    </div>
  );
}

const heading: React.CSSProperties = {
  margin: '0 0 18px',
  fontFamily: 'var(--font-instrument), serif',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: 'clamp(38px,4.6vw,64px)',
  letterSpacing: '-0.02em',
};
