'use client';

import { CaseNav } from '@/components/CaseNav';
import { CaseFooter } from '@/components/CaseFooter';
import {
  CaseStat,
  CaseStatGrid,
  CaseSection,
  CaseQuote,
} from '@/components/CasePrimitives';
import { Reveal } from '@/components/Reveal';
import { T } from '@/components/T';

export default function OpenCodeCase() {
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
              en="Case study · Open source · VS Code extension"
              id="Studi kasus · Open source · Ekstensi VS Code"
            />
          </div>
          <h1 style={h1}>
            opencode
            <span style={{ color: 'color-mix(in oklab, var(--accent) 45%, white)', animation: 'ltm-blink 1.2s step-end infinite' }}>
              _
            </span>
          </h1>
          <p style={lede}>
            <T
              en="An open-source extension that brings 30+ frontier AI models into GitHub Copilot Chat — used by developers in more than a dozen countries."
              id="Ekstensi open-source yang menghadirkan 30+ model AI frontier ke dalam GitHub Copilot Chat — dipakai developer di belasan negara."
            />
          </p>
          <CaseStatGrid accent="light">
            <CaseStat accent="light" value="3,952" labelEn="Installs" labelId="Instalasi" />
            <CaseStat accent="light" value="5.0 ★" labelEn="Marketplace rating" labelId="Rating marketplace" />
            <CaseStat accent="light" value="30+" labelEn="Frontier AI models" labelId="Model AI frontier" />
            <CaseStat accent="light" value="12+" labelEn="Countries" labelId="Negara" />
          </CaseStatGrid>
        </div>
      </header>

      <CaseSection
        titleEn="Why a CPO ships an open-source dev tool"
        titleId="Kenapa seorang CPO merilis dev tool open-source"
      >
        <T
          en="Same rule as everything else: it started from a problem, not a technology. Developers wanted frontier models inside the Copilot Chat workflow they already lived in — not another separate app. The extension solves exactly that, and nothing more."
          id="Aturannya sama seperti yang lain: berangkat dari masalah, bukan teknologi. Developer ingin model frontier di dalam alur kerja Copilot Chat yang sudah mereka pakai — bukan aplikasi terpisah lagi. Ekstensi ini menyelesaikan persis itu, tidak lebih."
        />
      </CaseSection>

      <section style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0' }}>
        <Reveal index={0}>
          <div style={terminalBox}>
            <div style={dots}>
              <span style={dot} />
              <span style={dot} />
              <span style={{ ...dot, background: 'color-mix(in oklab, var(--accent) 60%, white)' }} />
            </div>
            <div>
              <span style={prompt}>$</span> code --install-extension opencode-copilot
            </div>
            <div style={{ color: 'rgba(248,247,243,0.45)' }}>
              <T
                en="# 30+ models · one chat window · zero context switching"
                id="# 30+ model · satu jendela chat · nol pindah konteks"
              />
            </div>
            <div>
              <span style={check}>✓</span>{' '}
              <T
                en="installed — rated 5.0 by developers in 12+ countries"
                id="terpasang — rating 5.0 dari developer di 12+ negara"
              />
            </div>
          </div>
        </Reveal>
        <Reveal index={1}>
          <div style={{ marginTop: 20 }}>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=opencode"
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
              VS Code Marketplace ↗
            </a>
          </div>
        </Reveal>
      </section>

      <CaseQuote
        en="Every product started from a business problem. The technology came after."
        id="Setiap produk berangkat dari masalah bisnis. Teknologinya menyusul."
      />

      <CaseFooter
        prev={{ href: '/case/myarchery', en: 'Prev: MyArchery.id', id: 'Sebelumnya: MyArchery.id' }}
      />
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
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 'clamp(38px,5.6vw,84px)',
  fontWeight: 700,
  letterSpacing: '-0.04em',
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

const terminalBox: React.CSSProperties = {
  background: 'var(--ink)',
  borderRadius: 16,
  padding: '28px 30px',
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 14,
  lineHeight: 2,
  color: 'rgba(248,247,243,0.85)',
  overflow: 'auto',
};

const dots: React.CSSProperties = {
  display: 'flex',
  gap: 8,
  marginBottom: 18,
};

const dot: React.CSSProperties = {
  width: 11,
  height: 11,
  borderRadius: '50%',
  background: 'rgba(248,247,243,0.25)',
};

const prompt: React.CSSProperties = {
  color: 'color-mix(in oklab, var(--accent) 50%, white)',
};

const check: React.CSSProperties = {
  color: 'color-mix(in oklab, var(--accent) 50%, white)',
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
