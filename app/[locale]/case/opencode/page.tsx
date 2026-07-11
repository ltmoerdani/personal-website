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
import { useInstallCount, formatInstalls } from '@/lib/useInstallCount';

export default function OpenCodeCase() {
  const { installs } = useInstallCount();

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
              en="Case study · Open source · VS Code extension · Released May 2026"
              id="Studi kasus · Open source · Ekstensi VS Code · Rilis Mei 2026"
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 'clamp(20px, 3vw, 48px)' }}>
            <div>
              <h1 style={h1}>
                opencode
                <span style={{ color: 'color-mix(in oklab, var(--accent) 45%, white)', animation: 'ltm-blink 1.2s step-end infinite' }}>
                  _
                </span>
              </h1>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/case-studies/opencode/opencodego.png"
              alt="OpenCode for Copilot Chat"
              style={{ width: 'clamp(120px, 20vw, 260px)', height: 'auto' }}
            />
          </div>
          <p style={lede}>
            <T
              en="An open-source extension that plugs 30+ frontier AI models into GitHub Copilot Chat. You keep the native Copilot UI, tool-calling, and Agent Mode. You just get way more models, often cheaper than Copilot Pro+."
              id="Ekstensi open-source yang menyatukan 30+ model AI frontier ke dalam GitHub Copilot Chat. Anda tetap pakai UI Copilot, tool-calling, dan Agent Mode. Anda cuma dapat lebih banyak model, sering kali lebih murah dari Copilot Pro+."
            />
          </p>
          <CaseStatGrid accent="light">
            <CaseStat accent="light" value={formatInstalls(installs)} labelEn="Installs" labelId="Instalasi" />
            <CaseStat accent="light" value="5.0 ★" labelEn="Marketplace rating" labelId="Rating marketplace" />
            <CaseStat accent="light" value="30+" labelEn="Frontier AI models" labelId="Model AI frontier" />
            <CaseStat accent="light" value="12+" labelEn="Countries" labelId="Negara" />
          </CaseStatGrid>
        </div>
      </header>

      <CaseSection
        titleEn="The bill that started it"
        titleId="Tagihan yang memicu ini"
      >
        <T
          en={<>On April 27, 2026, GitHub{' '}<a href="https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/" target="_blank" rel="noopener noreferrer" style={inlineLink}>announced</a> Copilot was moving to usage-based billing. Agentic mode, which calls the model dozens of times per task, made the cost spike unpredictable. I was paying more for fewer conversations. The premium models I relied on, Claude Opus, GPT-5.5, Gemini, were locked behind a $39/mo Pro+ tier, and the free tier was rate-limited to the point of being unusable mid-sprint.</>}
          id={<>Pada 27 April 2026, GitHub{' '}<a href="https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/" target="_blank" rel="noopener noreferrer" style={inlineLink}>mengumumkan</a> Copilot beralih ke billing berbasis pemakaian. Mode agentic, yang memanggil model belasan kali per task, membuat biaya melonjak tak terduga. Saya membayar lebih mahal untuk percakapan yang lebih sedikit. Model premium yang saya andalkan, Claude Opus, GPT-5.5, Gemini, dikunci di tier Pro+ $39/bulan, dan free tier dibatasi sampai tidak bisa dipakai di tengah sprint.</>}
        />
      </CaseSection>

      {/* GitHub Copilot pricing screenshot */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '0 clamp(20px,4vw,56px)' }}>
        <Reveal index={0}>
          <figure style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/case-studies/opencode/github-copilot-price.png"
              alt="GitHub Copilot pricing tiers: Free, Pro ($10/mo), Pro+ ($39/mo), Enterprise ($39/user/mo) — the announcement that triggered usage-based billing changes"
              style={{ width: '100%', height: 'auto', borderRadius: 16, border: '1px solid rgba(29,28,26,0.1)' }}
            />
            <figcaption style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: 'rgba(29,28,26,0.45)', marginTop: 10, textAlign: 'center' }}>
              <T en="GitHub Copilot pricing tiers, April 2026" id="Tier harga GitHub Copilot, April 2026" />
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <CaseSection
        titleEn="The problem was cost, not the IDE"
        titleId="Masalahnya biaya, bukan IDE-nya"
      >
        <T
          en="I liked Copilot Chat. The inline tool-calling, the Agent Mode, the context awareness. Switching to another IDE meant rebuilding my entire workflow. What I wanted was simple: keep the Copilot Chat interface, but plug in cheaper, equally capable models. DeepSeek V4, Kimi K2.6, GLM-5.1, Qwen3.7. Frontier open models that cost a fraction of what I was paying. No separate app, no context switching, no learning curve."
          id="Saya suka Copilot Chat. Tool-calling inline, Agent Mode, context awareness, semua enak dipakai. Pindah ke IDE lain berarti membangun ulang seluruh alur kerja saya. Yang saya mau sebenarnya sederhana: tetap pakai Copilot Chat, tapi colok model yang lebih murah dan tak kalah canggih. DeepSeek V4, Kimi K2.6, GLM-5.1, Qwen3.7. Model open frontier yang harganya sebagian kecil dari yang saya bayar. Tanpa aplikasi terpisah, tanpa pindah-pindah konteks, tanpa perlu belajar dari nol."
        />
      </CaseSection>

      <CaseSection
        titleEn="How it works"
        titleId="Cara kerjanya"
      >
        <T
          en="The extension plugs OpenCode's model gateway directly into Copilot Chat's model picker. Three tiers: OpenCode Zen gives you 2-5 rotating free models (Big Pickle is always free; DeepSeek V4 Flash, MiMo-V2.5, and others rotate weekly) plus pay-as-you-go access to Claude Opus, GPT-5.5, and Gemini. OpenCode Go ($10/mo, $5 first month) adds a curated set of open models with generous limits. Or bring your own API keys and pay nothing to OpenCode. You pick the model from the same dropdown. Everything else, the tool-calling, the Agent Mode, the inline suggestions, stays exactly where it was."
          id="Ekstensi ini mencolokkan model gateway OpenCode langsung ke model picker Copilot Chat. Tiga tier: OpenCode Zen memberi 2-5 model gratis yang berotasi (Big Pickle selalu gratis; DeepSeek V4 Flash, MiMo-V2.5, dan lainnya berotasi tiap minggu) plus akses pay-as-you-go ke Claude Opus, GPT-5.5, dan Gemini. OpenCode Go ($10/bulan, $5 bulan pertama) menambah kurasi model open dengan limit generous. Atau bawa API key sendiri dan tidak bayar apa-apa ke OpenCode. Anda pilih model dari dropdown yang sama. Sisanya, tool-calling, Agent Mode, inline suggestions, tetap persis di tempatnya."
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
              <span style={prompt}>$</span> code --install-extension ltmoerdani.opencode-copilot-chat
            </div>
            <div style={{ color: 'rgba(248,247,243,0.45)' }}>
              <T
                en="# 30+ models · same Copilot UI · zero context switching"
                id="# 30+ model · UI Copilot yang sama · nol pindah konteks"
              />
            </div>
            <div>
              <span style={check}>✓</span>{' '}
              <T
                en="installed, rated 5.0 by developers in 12+ countries"
                id="terpasang, rating 5.0 dari developer di 12+ negara"
              />
            </div>
          </div>
        </Reveal>
        <Reveal index={1}>
          <div style={{ marginTop: 20 }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=ltmoerdani.opencode-copilot-chat"
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
              <a
                href="https://open-vsx.org/extension/ltmoerdani/opencode-copilot-chat"
                target="_blank"
                rel="noopener noreferrer"
                style={ctaBtnPurple}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#4B286D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#6B3FA0';
                }}
              >
                Open VSX Registry ↗
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <CaseSection
        titleEn="What the data says"
        titleId="Angkanya seperti ini"
      >
        <T
          en={`Released May 14, 2026. In less than two months, ${formatInstalls(installs)} developers across 12+ countries installed it. Brazil, Spain, Germany, India, Japan, the US. The rating held at 5.0. The most common feedback: "I was about to cancel Copilot Pro+." The second most common: a request for one more model. Not a request for a feature. The extension already did what it needed to do.`}
          id={`Rilis 14 Mei 2026. Belum genap dua bulan, ${formatInstalls(installs)} developer di 12+ negara sudah memasang. Brazil, Spanyol, Jerman, India, Jepang, Amerika. Rating bertahan di 5.0. Umpan balik yang paling sering masuk: "Saya hampir batal Copilot Pro+." Yang kedua paling sering: minta tambah satu model lagi. Bukan minta fitur. Ekstensinya sudah menjalankan fungsinya dengan baik.`}
        />
      </CaseSection>

      {/* Extension comparison chart */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0' }}>
        <Reveal index={0}>
          <h2 style={sectionHeading}>
            <T en="Two extensions, one pattern" id="Dua ekstensi, satu pola" />
          </h2>
          <p style={sectionIntro}>
            <T
              en="I shipped a second extension, z.ai Copilot Chat, to test whether the approach generalized. The numbers tell the story."
              id="Saya merilis ekstensi kedua, z.ai Copilot Chat, untuk menguji apakah pendekatannya bisa diulang. Angkanya yang menjawab."
            />
          </p>
        </Reveal>

        <Reveal index={1}>
          <div style={singleCol}>
            <div style={chartItem}>
              <div style={chartHeader}>
                <div style={chartTitle}>
                  <span style={chartName}>OpenCode for Copilot Chat</span>
                  <span style={chartBadge}>7.6× more installs than z.ai</span>
                </div>
                <div style={chartStats}>
                  <span style={chartStatVal}>{formatInstalls(installs)}</span>
                  <span style={chartStatSep}>·</span>
                  <span style={chartStatVal}>5.0 ★</span>
                  <span style={chartStatSep}>·</span>
                  <span style={chartStatVal}>12+ countries</span>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/case-studies/opencode/opencode-chart.png"
                alt="OpenCode for Copilot Chat: 60-day install trend showing consistent daily growth with peak at 136 installs, averaging 85-100/day in recent weeks"
                style={chartImg}
              />
              <p style={chartDesc}>
                <T
                  en="Launched May 14, 2026. Daily installs climbed steadily within the first week, peaking at 136 on June 2. The curve never dips below 80 in the most recent 30 days, showing organic word-of-mouth among developers frustrated with Copilot Pro+ pricing. 6,307 page views converted to 5,123 acquisitions, a 284% conversion rate driven by developers actively searching for alternatives."
                  id="Rilis 14 Mei 2026. Instalasi harian naik konsisten di minggu pertama, puncaknya 136 pada 2 Juni. Dalam 30 hari terakhir kurvanya nggak pernah turun di bawah 80, tanda mulut-ke-mulut organik dari developer yang muak dengan harga Copilot Pro+. 6.307 page view berubah jadi 5.123 akuisisi, konversi 284% yang didorong developer yang memang lagi cari alternatif."
                />
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal index={2}>
          <div style={singleCol}>
            <div style={chartItem}>
              <div style={chartHeader}>
                <div style={chartTitle}>
                  <span style={chartName}>z.ai Copilot Chat</span>
                  <span style={chartBadge}>Second extension, different audience</span>
                </div>
                <div style={chartStats}>
                  <span style={chartStatVal}>826</span>
                  <span style={chartStatSep}>·</span>
                  <span style={chartStatVal}>5.0 ★</span>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/case-studies/opencode/zai-chart.png"
                alt="z.ai Copilot Chat: 60-day install trend showing steady growth from near-zero to 15-25 daily installs, with 654 installs in the last 30 days"
                style={chartImg}
              />
              <p style={chartDesc}>
                <T
                  en="Same architecture, different model pool targeting a niche audience. The curve starts near zero and builds gradually, peaking around 25 daily installs. 79 page views yielded 654 acquisitions, an 828% conversion rate. That's the hallmark of direct traffic: people who already know what they want. z.ai proves the pattern generalizes. Build a gateway, plug it into Copilot Chat, ship it open source. The market decides."
              id="Arsitektur yang sama, kumpulan model yang berbeda menjangkau audiens niche. Kurva dimulai dari nol dan naik perlahan, puncaknya sekitar 25 instalasi per hari. 79 page view menghasilkan 654 akuisisi, tingkat konversi 828%. Itu ciri khas direct traffic: orang yang sudah tahu apa yang mereka cari. z.ai membuktikan polinya bisa diulang. Bangun gateway, colok ke Copilot Chat, rilis open source. Biarkan pasar yang memutuskan."
                />
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal index={3}>
          <p style={comparisonNote}>
            <T
              en="Same problem, same solution shape, different audience. OpenCode hit a nerve because Copilot pricing was already in the news. z.ai proved the pattern works for any model gateway, not just one. Data via VS Code Marketplace publisher dashboard, July 2026."
              id="Masalah yang sama, bentuk solusi yang sama, audiensnya beda. OpenCode pas sasaran karena harga Copilot lagi ramai dibicarakan. z.ai membuktikan polinya bisa dipakai untuk gateway model mana pun, bukan cuma satu. Data via dashboard publisher VS Code Marketplace, Juli 2026."
            />
          </p>
        </Reveal>
      </section>

      <CaseSection
        titleEn="Why a CPO ships an open-source dev tool"
        titleId="Kenapa seorang CPO merilis dev tool open-source"
      >
        <T
          en="Because the instinct doesn't turn off. I saw a pricing change that hurt me, assumed it was hurting others, built the smallest thing that tested that assumption, and shipped it. The extension is not a pivot. It's the same pattern: name the problem in a sentence, then build the smallest thing that proves or kills it."
          id="Karena instingnya memang nggak bisa dimatikan begitu saja. Saya lihat perubahan harga yang merugikan saya, saya pikir orang lain pasti merasakan hal sama, lalu membangun hal terkecil yang bisa menguji asumsi itu, dan merilisnya. Ekstensi ini bukan pivot. Polinya sama: sebut masalahnya dalam satu kalimat, lalu bangun hal terkecil yang membuktikan atau mematikan asumsi itu."
        />
      </CaseSection>

      {/* User reviews from VS Code Marketplace */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0' }}>
        <Reveal index={0}>
          <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>
            <T en="From the Marketplace" id="Dari Marketplace" />
          </div>
          <h2 style={sectionHeading}>
            <T en="What developers are saying" id="Kata developer" />
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gap: 16, marginTop: 28 }}>
          <Reveal index={1}>
            <div style={reviewCard}>
              <div style={reviewMeta}>
                <span style={reviewAvatar}>LB</span>
                <div>
                  <div style={reviewName}>Leandro Berth</div>
                  <div style={reviewDate}>May 17, 2026 · ★★★★★</div>
                </div>
              </div>
              <p style={reviewQuote}>
                "Excellent extension! Works well right out of the gate and has everything I wanted it to have."
              </p>
            </div>
          </Reveal>

          <Reveal index={2}>
            <div style={reviewCard}>
              <div style={reviewMeta}>
                <span style={reviewAvatar}>PP</span>
                <div>
                  <div style={reviewName}>Patrik Porubän</div>
                  <div style={reviewDate}>May 27, 2026 · ★★★★★</div>
                </div>
              </div>
              <p style={reviewQuote}>
                "Amazing, why I didn't find this sooner."
              </p>
            </div>
          </Reveal>

          <Reveal index={3}>
            <div style={reviewCard}>
              <div style={reviewMeta}>
                <span style={reviewAvatar}>GC</span>
                <div>
                  <div style={reviewName}>Gonzalo Cruz Licona</div>
                  <div style={reviewDate}>Jun 24, 2026 · ★★★★★</div>
                </div>
              </div>
              <p style={reviewQuote}>
                "Just installed the extension and loaded my OpenCode GO account and it worked. I have access to all the models in the plan."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CaseQuote
        en="The cheapest way to learn if a problem is real is to ship the smallest thing that solves it."
        id="Cara termurah untuk memastikan sebuah masalah itu nyata: rilis hal terkecil yang menyelesaikannya."
      />

      <CaseFooter
        prev={{ href: '/case/myarchery', en: 'Prev: MyArchery.id', id: 'Sebelumnya: MyArchery.id' }}
        next={{ href: '/case/campaign-forge', en: 'Next: CampaignForge', id: 'Berikutnya: CampaignForge' }}
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

const ctaBtnPurple: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  background: '#6B3FA0',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: 15,
  padding: '14px 26px',
  borderRadius: 99,
  transition: 'background .25s',
};

const inlineLink: React.CSSProperties = {
  color: 'var(--accent)',
  textDecoration: 'underline',
  textDecorationThickness: '1.5px',
  textUnderlineOffset: '3px',
};

const sectionHeading: React.CSSProperties = {
  margin: '0 0 16px',
  fontFamily: 'var(--font-instrument), serif',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: 'clamp(30px,3.6vw,44px)',
};

const sectionIntro: React.CSSProperties = {
  margin: '0 0 36px',
  fontSize: 17,
  lineHeight: 1.8,
  color: 'rgba(29,28,26,0.72)',
};
const singleCol: React.CSSProperties = {
  marginBottom: 24,
};

const chartItem: React.CSSProperties = {
  background: 'var(--paper)',
  border: '1px solid rgba(29,28,26,0.1)',
  borderRadius: 16,
  padding: '24px 24px 20px',
  overflow: 'hidden',
};

const chartHeader: React.CSSProperties = {
  marginBottom: 16,
};

const chartTitle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  flexWrap: 'wrap',
  marginBottom: 8,
};

const chartBadge: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 11,
  letterSpacing: '0.04em',
  color: 'rgba(29,28,26,0.45)',
  background: 'rgba(29,28,26,0.06)',
  padding: '3px 10px',
  borderRadius: 99,
};

const chartStats: React.CSSProperties = {
  display: 'flex',
  alignItems: 'baseline',
  gap: 6,
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 13,
  color: 'rgba(29,28,26,0.6)',
};

const chartStatVal: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 14,
  color: 'var(--ink)',
};

const chartStatSep: React.CSSProperties = {
  opacity: 0.3,
};

const chartName: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  letterSpacing: '-0.01em',
  color: 'var(--accent)',
};

const chartImg: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  borderRadius: 8,
  display: 'block',
  marginBottom: 14,
};

const chartDesc: React.CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.7,
  color: 'rgba(29,28,26,0.65)',
};

const comparisonNote: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.7,
  color: 'rgba(29,28,26,0.55)',
  margin: 0,
};

const reviewCard: React.CSSProperties = {
  background: 'var(--paper)',
  border: '1px solid rgba(29,28,26,0.1)',
  borderRadius: 16,
  padding: '20px 24px',
};

const reviewMeta: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginBottom: 12,
};

const reviewAvatar: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  background: 'var(--accent)',
  color: 'var(--bg)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 800,
  fontSize: 14,
  flexShrink: 0,
};

const reviewName: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 15,
};

const reviewDate: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 11,
  color: 'rgba(29,28,26,0.45)',
  letterSpacing: '0.04em',
  marginTop: 2,
};

const reviewQuote: React.CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.7,
  color: 'rgba(29,28,26,0.72)',
  fontStyle: 'italic',
};
