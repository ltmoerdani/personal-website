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

export default function MyArcheryCase() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', overflowX: 'clip' }}>
      <CaseNav />

      <header style={{ background: 'color-mix(in oklab, var(--accent) 12%, var(--bg))' }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: 'clamp(64px,10vh,120px) clamp(20px,4vw,56px)',
          }}
        >
          <div style={eyebrow}>
            <T
              en="Case study · Founder & builder · Side project → market standard"
              id="Studi kasus · Founder & builder · Proyek sampingan → standar pasar"
            />
          </div>
          <h1 style={h1}>
            MyArchery
            <span style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>
              .id
            </span>
          </h1>
          <p style={lede}>
            <T
              en="The platform most archery clubs in Indonesia now run their events on: scoring, registration, event management. Built from inside the sport, not from a pitch deck."
              id="Platform yang kini dipakai mayoritas klub panahan Indonesia untuk menjalankan event: skoring, registrasi, manajemen event. Dibangun dari dalam olahraganya, bukan dari pitch deck."
            />
          </p>
          <CaseStatGrid>
            <CaseStat value="8,000+" labelEn="Active users" labelId="Pengguna aktif" />
            <CaseStat
              value="#1"
              labelEn="Platform for club events in Indonesia"
              labelId="Platform event klub di Indonesia"
            />
            <CaseStat
              value="Grade C"
              labelEn="Licensed archery judge"
              labelId="Juri panahan berlisensi"
            />
          </CaseStatGrid>
        </div>
      </header>

      <CaseSection titleEn="Built from inside the sport" titleId="Dibangun dari dalam olahraganya">
        <T
          en="This isn't a builder guessing what archers need. I hold a Grade C archery judge license and serve as Wakabid Media & Database at Perpani Jakarta Timur, the city-level archery federation. The domain expertise is institutionally verified, not a personal claim."
          id="Ini bukan builder yang asal nebak kebutuhan pemanah. Saya pemegang lisensi juri panahan Grade C dan menjabat sebagai Wakabid Media & Database di Perpani Jakarta Timur, federasi panahan tingkat kota. Keahlian domainnya terverifikasi institusi, bukan klaim personal."
        />
      </CaseSection>

      <CaseSection titleEn="Business problem first" titleId="Masalah bisnis dulu">
        <T
          en="Clubs ran events on spreadsheets, WhatsApp groups, and paper scoresheets. Every one of my products started from a business problem like this one, the technology came after, the same order every time. Today 8,000+ active users run their events on the platform."
          id="Dulu klub menjalankan event lewat spreadsheet, grup WhatsApp, dan lembar skor kertas. Semua produk saya berangkat dari masalah bisnis seperti ini, teknologinya menyusil, urutannya selalu sama. Kini 8.000+ pengguna aktif menjalankan event mereka di platform ini."
        />
      </CaseSection>

      <CaseScreenshot
        en="[ product screenshot: event scoring interface ]"
        id="[ screenshot produk: antarmuka skoring event ]"
      />

      <section style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0' }}>
        <Reveal index={1}>
          <a
            href="https://myarchery.id"
            target="_blank"
            rel="noopener noreferrer"
            style={ctaBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                'color-mix(in oklab, var(--accent) 78%, black)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent)';
            }}
          >
            myarchery.id ↗
          </a>
        </Reveal>
      </section>

      <CaseQuote
        en="The strongest product insight comes from being your own most demanding user."
        id="Insight produk terkuat datang dari menjadi pengguna paling menuntut atas produkmu sendiri."
      />

      <CaseFooter
        prev={{ href: '/case/pro-archery', en: 'Prev: Pro Archery', id: 'Sebelumnya: Pro Archery' }}
        next={{ href: '/case/opencode', en: 'Next: OpenCode for Copilot Chat', id: 'Berikutnya: OpenCode for Copilot Chat' }}
      />
    </div>
  );
}

const eyebrow: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 13,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
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
  color: 'rgba(29,28,26,0.68)',
  animation: 'ltm-rise 0.9s var(--ease) 0.25s both',
};

const ctaBtn: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  background: 'var(--accent)',
  color: 'var(--bg)',
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: 15,
  padding: '14px 26px',
  borderRadius: 99,
  transition: 'background .25s',
};
