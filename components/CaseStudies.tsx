'use client';

import { Link } from '@/i18n/navigation';
import { Reveal } from './Reveal';
import { Counter } from './Counter';
import { T } from './T';
import { useInstallCount, formatInstalls } from '@/lib/useInstallCount';

export function CaseStudies() {
  return (
    <section
      id="work"
      style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 clamp(20px,4vw,56px) clamp(64px,10vh,120px)',
      }}
    >
      <Reveal index={0}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 40, flexWrap: 'wrap' }}>
          <h2 style={sectionTitle}>
            <T en="Case studies" id="Studi kasus" />
          </h2>
          <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 15, color: 'var(--accent)' }}>
            (06)
          </span>
          <p style={{ margin: '0 0 0 auto', maxWidth: 380, fontSize: '14.5px', lineHeight: 1.6, color: 'rgba(29,28,26,0.6)' }}>
            <T
              en="Every one of these started from a business problem. The technology came after."
              id="Semuanya berangkat dari masalah bisnis. Teknologinya menyusul."
            />
          </p>
        </div>
      </Reveal>

      <ProArcheryCard />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: '40px 28px' }}>
        <Reveal index={0}>
          <MyArcheryCard />
        </Reveal>
        <Reveal index={1}>
          <OpenCodeCard />
        </Reveal>
        <Reveal index={0}>
          <BlazzCard />
        </Reveal>
        <Reveal index={1}>
          <JakiCard />
        </Reveal>
        <Reveal index={2}>
          <BookCard />
        </Reveal>
      </div>
    </section>
  );
}

/* --- Featured: Pro Archery --- */
function ProArcheryCard() {
  return (
    <Reveal index={0}>
      <Link href="/case/pro-archery" style={{ ...featuredCard, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 32 }}>
        <div>
          <div style={featuredEyebrow}>
            <span style={dot} />
            <T en="Featured · Fractional CPO · Oct 2024 – present" id="Unggulan · Fractional CPO · Okt 2024 – sekarang" />
          </div>
          <h3 style={featuredTitle}>Pro Archery</h3>
          <p style={featuredBody}>
            <T
              en="No product function existed before this. Four phases: internal inventory, multi-store transactions, warehouse-to-storefront UX, and a consumer platform launching September 2026. Each phase had to work before the next one started."
              id="Sebelumnya tidak ada fungsi produk sama sekali. Empat fase: inventori internal, transaksi multi-toko, UX gudang-ke-etalase, dan platform konsumen yang rilis September 2026. Tiap fase harus jalan dulu sebelum fase berikutnya dimulai."
            />
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 22 }}>
            <Tag>
              <T en="Product strategy" id="Strategi produk" />
            </Tag>
            <Tag>E-commerce</Tag>
            <Tag>
              <T en="Retail ops" id="Operasi retail" />
            </Tag>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26, borderLeft: '1px solid rgba(248,247,243,0.15)', paddingLeft: 32 }}>
          <StatBlock
            value={<Counter target={12000} suffix="+" fallback="12,000+" />}
            labelEn="SKUs under management"
            labelId="SKU dikelola"
          />
          <StatBlock value="Rp10M+" labelEn="Monthly transactions" labelId="Transaksi bulanan" />
          <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 13, color: 'var(--bg)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <T en="Read case study" id="Baca studi kasus" /> <span>→</span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function MyArcheryCard() {
  return (
    <Link href="/case/myarchery" style={caseLink}>
      <div style={placeholderBox}>
        <div style={hatch} />
        <div style={{ fontFamily: 'var(--font-archivo), sans-serif', fontWeight: 900, fontSize: 'clamp(48px,5vw,72px)', letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--accent)', position: 'relative' }}>
          <Counter target={8000} suffix="+" fallback="8,000+" />
        </div>
        <div style={caption}>
          <T en="[ screenshot: event scoring interface ]" id="[ screenshot: antarmuka skoring event ]" />
        </div>
      </div>
      <h3 style={caseTitle}>MyArchery.id</h3>
      <p style={caseBody}>
        <T
          en="The platform most archery clubs in Indonesia now run their events on. Built from inside the sport, not from a pitch deck. I hold a Grade C judge license."
          id="Platform yang kini dipakai mayoritas klub panahan Indonesia untuk menjalankan event. Dibangun dari dalam olahraganya, bukan dari pitch deck. Saya pemegang lisensi juri Grade C."
        />
      </p>
      <Tags>
        <Tag>
          <T en="Sports platform" id="Platform olahraga" />
        </Tag>
        <Tag>SaaS</Tag>
        <Tag>
          <T en="Community" id="Komunitas" />
        </Tag>
      </Tags>
    </Link>
  );
}

function OpenCodeCard() {
  const { installs } = useInstallCount();

  return (
    <Link href="/case/opencode" style={caseLink}>
      <div style={{ ...placeholderBox, background: 'var(--ink)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/opencodego.png"
          alt="OpenCode for Copilot Chat"
          style={{ width: '55%', maxWidth: 160, height: 'auto', objectFit: 'contain' }}
        />
        <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: 'color-mix(in oklab, var(--accent) 45%, white)', position: 'absolute', bottom: 12, left: 0, right: 0, textAlign: 'center' }}>
          {formatInstalls(installs)} installs · 5.0 ★
        </div>
      </div>
      <h3 style={caseTitle}>
        OpenCode <span style={{ fontWeight: 500, color: 'rgba(29,28,26,0.5)' }}>for Copilot Chat</span>
      </h3>
      <p style={caseBody}>
        <T
          en="30+ frontier AI models inside GitHub Copilot Chat, at a fraction of Copilot Pro+ cost. Same UI, same Agent Mode, no context switching."
          id="30+ model AI frontier di dalam GitHub Copilot Chat, dengan biaya sebagian kecil dari Copilot Pro+. UI yang sama, Agent Mode yang sama, tanpa pindah konteks."
        />
      </p>
      <Tags>
        <Tag>Open source</Tag>
        <Tag>Dev tools</Tag>
        <Tag>AI</Tag>
      </Tags>
    </Link>
  );
}

function BlazzCard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={placeholderBox}>
        <div style={hatch} />
        <div style={{ position: 'relative', background: 'var(--paper)', border: '1.5px solid rgba(29,28,26,0.15)', borderRadius: '16px 16px 16px 4px', padding: '12px 18px', fontSize: 15, fontWeight: 600, boxShadow: '0 4px 14px -8px rgba(29,28,26,0.3)' }}>
          <T en="Business happens in the chat 💬" id="Bisnis terjadi di dalam chat 💬" />
        </div>
        <div style={caption}>
          <T en="[ product shot: Blazz ]" id="[ tampilan produk: Blazz ]" />
        </div>
      </div>
      <h3 style={caseTitle}>Blazz</h3>
      <p style={caseBody}>
        <T
          en="WhatsApp-native SaaS for Indonesian SMEs. Built where business actually happens: inside the chat, not in a slide deck."
          id="SaaS WhatsApp untuk UKM Indonesia. Dibangun di tempat bisnis beneran terjadi: di dalam chat, bukan di slide deck."
        />
      </p>
      <Tags>
        <Tag>WhatsApp</Tag>
        <Tag>B2B SaaS</Tag>
        <Tag>SME</Tag>
      </Tags>
    </div>
  );
}

function JakiCard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ ...placeholderBox, background: 'var(--ink)' }}>
        <div style={{ fontFamily: 'var(--font-archivo), sans-serif', fontWeight: 900, fontSize: 'clamp(40px,4.4vw,60px)', letterSpacing: '-0.04em', lineHeight: 1, color: 'color-mix(in oklab, var(--accent) 45%, white)' }}>
          IoT
        </div>
        <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, letterSpacing: '0.08em', color: 'rgba(248,247,243,0.6)' }}>
          <T en="[ dashboard shot: national road monitoring ]" id="[ tampilan dashboard: monitoring jalan nasional ]" />
        </div>
      </div>
      <h3 style={caseTitle}>
        Jalan Kita 2.0 <span style={{ fontWeight: 500, color: 'rgba(29,28,26,0.5)' }}>(JAKI)</span>
      </h3>
      <p style={caseBody}>
        <T
          en="Road and bridge condition monitoring for Indonesia's national roads authority. A bridge that goes unreported stays broken."
          id="Pemantauan kondisi jalan dan jembatan untuk Ditjen Bina Marga. Jembatan yang nggak dilaporkan ya tetap rusak."
        />
      </p>
      <Tags>
        <Tag>GovTech</Tag>
        <Tag>IoT</Tag>
        <Tag>Dashboard</Tag>
      </Tags>
    </div>
  );
}

function BookCard() {
  return (
    <a
      href="https://validasiidebisnis.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        gridColumn: '1 / -1',
        border: '1.5px dashed color-mix(in oklab, var(--accent) 55%, transparent)',
        borderRadius: 20,
        padding: '26px 30px',
        background: 'transparent',
        color: 'var(--ink)',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        flexWrap: 'wrap',
        transition: 'background .3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'color-mix(in oklab, var(--accent) 7%, var(--bg))';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
      }}
    >
      <span style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic', fontSize: 26, color: 'var(--accent)' }}>+</span>
      <div style={{ flex: 1, minWidth: 260 }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>
          Cara Validasi Ide Bisnis dalam Waktu Cepat
        </h3>
        <p style={{ margin: '4px 0 0', fontSize: 14, color: 'rgba(29,28,26,0.6)' }}>
          <T
            en="A self-published 7-day framework for validating a business idea, before the money and the building start."
            id="Framework 7 hari untuk memvalidasi ide bisnis, sebelum uang dan pembangunan dimulai."
          />
        </p>
      </div>
      <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12.5px' }}>
        validasiidebisnis.com ↗
      </span>
    </a>
  );
}

/* --- shared styles --- */
const sectionTitle: React.CSSProperties = {
  margin: 0,
  fontFamily: 'var(--font-instrument), serif',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: 'clamp(40px,5vw,68px)',
  letterSpacing: '-0.02em',
};

const featuredCard: React.CSSProperties = {
  background: 'var(--ink)',
  color: 'var(--bg)',
  borderRadius: 22,
  padding: 'clamp(28px,4vw,52px)',
  textDecoration: 'none',
  marginBottom: 20,
  transition: 'transform .3s, box-shadow .3s',
};

const featuredEyebrow: React.CSSProperties = {
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 12,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'color-mix(in oklab, var(--accent) 60%, white)',
};

const dot: React.CSSProperties = {
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: 'color-mix(in oklab, var(--accent) 60%, white)',
};

const featuredTitle: React.CSSProperties = {
  margin: '20px 0 14px',
  fontSize: 'clamp(30px,3.4vw,46px)',
  fontWeight: 900,
  letterSpacing: '-0.03em',
  lineHeight: 1.05,
};

const featuredBody: React.CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.75,
  color: 'rgba(248,247,243,0.7)',
  maxWidth: 520,
};

const caseLink: React.CSSProperties = {
  color: 'var(--ink)',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  transition: 'transform .3s',
};

const caseTitle: React.CSSProperties = {
  margin: '12px 0 0',
  fontSize: 25,
  fontWeight: 800,
  letterSpacing: '-0.02em',
};

const caseBody: React.CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.7,
  color: 'rgba(29,28,26,0.65)',
};

const placeholderBox: React.CSSProperties = {
  aspectRatio: '16 / 10',
  borderRadius: 20,
  overflow: 'hidden',
  border: '1.5px solid rgba(29,28,26,0.12)',
  background: 'color-mix(in oklab, var(--accent) 16%, var(--bg))',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
};

const hatch: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background:
    'repeating-linear-gradient(-45deg,rgba(29,28,26,0.035) 0 14px,transparent 14px 28px)',
};

const caption: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 12,
  letterSpacing: '0.08em',
  color: 'rgba(29,28,26,0.55)',
  position: 'relative',
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={tagStyle}>
      {children}
    </span>
  );
}

const tagStyle: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 11,
  letterSpacing: '0.06em',
  padding: '6px 12px',
  border: '1px solid rgba(29,28,26,0.25)',
  borderRadius: 99,
};

function Tags({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 6 }}>{children}</div>
  );
}

function StatBlock({
  value,
  labelEn,
  labelId,
}: {
  value: React.ReactNode;
  labelEn: string;
  labelId: string;
}) {
  return (
    <div>
      <div style={statValue}>{value}</div>
      <div style={statLabel}>
        <T en={labelEn} id={labelId} />
      </div>
    </div>
  );
}

const statValue: React.CSSProperties = {
  fontFamily: 'var(--font-archivo), sans-serif',
  fontWeight: 900,
  fontSize: 'clamp(38px,3.6vw,54px)',
  letterSpacing: '-0.03em',
  color: 'color-mix(in oklab, var(--accent) 45%, white)',
};

const statLabel: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 12,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'rgba(248,247,243,0.55)',
};
