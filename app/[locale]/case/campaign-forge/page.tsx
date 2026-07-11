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

export default function CampaignForgeCase() {
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
              en="Case study · AI prototype · 2-week build · Jun–Jul 2026"
              id="Studi kasus · Prototipe AI · Build 2 minggu · Jun–Jul 2026"
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 'clamp(20px, 3vw, 48px)' }}>
            <div>
              <h1 style={h1}>
                Campaign
                <span style={{ color: '#3B82F6' }}>Forge</span>
              </h1>
            </div>
            <div style={logoBox}>
              <svg width="56" height="56" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="22" height="22" rx="6" fill="#3B82F6" />
                <path d="M13 3.5L5.5 12H10.5L9.5 18.5L16.5 10H11.5L13 3.5Z" fill="white" />
              </svg>
            </div>
          </div>
          <p style={lede}>
            <T
              en="Turns one brief into 5 ad copies, a self-hostable landing page, and a 3-email welcome sequence in a single pass. Built for affiliate media buyers who buy traffic, capture opt-ins, and monetize via email. Three platform deploys from one button."
              id="Mengubah satu brief jadi 5 ad copy, landing page yang bisa self-host, dan 3 email welcome sequence dalam satu pass. Dibangun untuk affiliate media buyer yang beli traffic, capture opt-in, dan monetisasi via email. Deploy ke tiga platform dengan satu tombol."
            />
          </p>
          <CaseStatGrid accent="light">
            <CaseStat accent="light" value="5 hrs" labelEn="Down to minutes per package" labelId="Jadi menit per paket" />
            <CaseStat accent="light" value="3" labelEn="Platform deploys in one click" labelId="Deploy platform dalam satu klik" />
            <CaseStat accent="light" value="96%" labelEn="Message consistency score" labelId="Skor konsistensi pesan" />
            <CaseStat accent="light" value="2 wks" labelEn="From research to working prototype" labelId="Dari riset ke prototipe" />
          </CaseStatGrid>
        </div>
      </header>

      {/* Landing page hero screenshot */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0' }}>
        <Reveal index={0}>
          <figure style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/campaignforge-landing.png"
              alt="CampaignForge landing page — hero with pitch metrics: 5 hrs to minutes, 2× throughput, 96% angle match"
              style={{ width: '100%', height: 'auto', borderRadius: 16, border: '1px solid rgba(29,28,26,0.1)' }}
            />
            <figcaption style={figcaption}>
              <T en="CampaignForge landing page, built as an internal pitch deck" id="Landing page CampaignForge, dibangun sebagai pitch deck internal" />
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <CaseSection
        titleEn="The invitation"
        titleId="Undangan itu"
      >
        <T
          en={<>An automated outreach campaign found me for a build challenge run by It's Today Media, an affiliate marketing company based in Baltimore. Their operational mission is explicit: {'"'}We buy media at scale to build email and SMS lists.{'"'} That is not e-commerce. That is list-building: buy traffic, capture opt-ins, nurture, monetize. I used the invitation as a catalyst. Not because of the contest, but because I had already been sitting on a thesis about a gap in this exact market.</>}
          id={<>Sebuah campaign outreach otomatis menemukan saya untuk sebuah build challenge yang diadakan It's Today Media, perusahaan affiliate marketing di Baltimore. Misi operasional mereka jelas: {'"'}We buy media at scale to build email and SMS lists.{'"'} Itu bukan e-commerce. Itu list-building: beli traffic, capture opt-in, nurture, monetisasi. Saya pakai undangan itu sebagai pemicu. Bukan karena kontesnya, tapi karena saya sudah lama melihat gap di pasar yang persis ini.</>}
        />
      </CaseSection>

      <CaseSection
        titleEn="The gap nobody fills"
        titleId="Gap yang tidak diisi siapa pun"
      >
        <T
          en={<>I spent the first week reading every adjacent tool before writing a line of code. Jasper, Copy.ai, HubSpot Campaign Assistant, Anyword. They all generate ad copy from a brief. Done. That territory is settled.{' '}<br /><br />{' '}The gap nobody fills is the intersection of three things: deploy-ready self-hostable landing page HTML, labeled angle × formula A/B system, and an affiliate list-building email arc. All three from one brief, in one pass.</>}
          id={<>Saya habiskan minggu pertama membaca semua tool yang adjacent sebelum nulis satu baris kode. Jasper, Copy.ai, HubSpot Campaign Assistant, Anyword. Semua bisa generate ad copy dari brief. Selesai. Territori itu sudah dikuasai.{' '}<br /><br />{' '}Gap yang tidak diisi siapa pun adalah perpotongan tiga hal: landing page HTML yang deploy-ready dan self-hostable, sistem A/B test dengan angle × formula yang dilabeli, dan email arc untuk affiliate list-building. Ketiganya dari satu brief, dalam satu pass.</>}
        />
      </CaseSection>

      {/* Problem section screenshot */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '0 clamp(20px,4vw,56px)' }}>
        <Reveal index={0}>
          <figure style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/campaignforge-problem.png"
              alt="CampaignForge problem section — three pain cards: copywriter bottleneck, LP dev time, message drift"
              style={{ width: '100%', height: 'auto', borderRadius: 16, border: '1px solid rgba(29,28,26,0.1)' }}
            />
            <figcaption style={figcaption}>
              <T en="The three structural pains: copywriter bottleneck, LP dev time, message drift" id="Tiga pain struktural: bottleneck copywriter, waktu dev LP, pesan yang drift" />
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <CaseSection
        titleEn="Message match is where the money is"
        titleId="Message match adalah di mana uangnya"
      >
        <T
          en={<>A 2014 Moz study, reproduced by Disruptive Advertising across 500+ accounts, measured a {' '}<strong style={{ color: 'var(--ink)' }}>212.74% conversion rate lift</strong>{' '}and a {' '}<strong style={{ color: 'var(--ink)' }}>69.39% CPA reduction</strong>{' '}when ad copy and landing page carry the same message. KlientBoost separately measured a 66% CVR lift from matched messaging alone. Those are not rounding errors.{' '}<br /><br />{' '}And yet most tools generate ad copy in one session, the landing page in another, the email in a third. The angle drifts. The message fractures. I generate all three in one call, so it cannot drift — because the LLM never gets a chance to reframe the offer between assets.</>}
          id={<>Studi Moz 2014, yang direproduksi Disruptive Advertising di 500+ akun, mengukur {' '}<strong style={{ color: 'var(--ink)' }}>kenaikan conversion rate 212,74%</strong>{' '}dan {' '}<strong style={{ color: 'var(--ink)' }}>penurunan CPA 69,39%</strong>{' '}saat ad copy dan landing page membawa pesan yang sama. KlientBoost secara terpisah mengukur kenaikan CVR 66% dari matched messaging saja. Itu bukan angka yang bisa diabaikan.{' '}<br /><br />{' '}Tapi kebanyakan tool generate ad copy di sesi satu, landing page di sesi lain, email di sesi ketiga. Angle-nya drift. Pesannya pecah. Saya generate ketiganya dalam satu call, jadi tidak bisa drift — karena LLM tidak pernah sempat mereframe offer antar aset.</>}
        />
      </CaseSection>

      {/* Solution/showcase screenshot */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '0 clamp(20px,4vw,56px)' }}>
        <Reveal index={0}>
          <figure style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/campaignforge-showcase.png"
              alt="CampaignForge solution section — faux app frame showing generated output with 4 tabs"
              style={{ width: '100%', height: 'auto', borderRadius: 16, border: '1px solid rgba(29,28,26,0.1)' }}
            />
            <figcaption style={figcaption}>
              <T en="One brief in, three assets out — all on the same page" id="Satu brief masuk, tiga aset keluar — semuanya di halaman yang sama" />
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <CaseSection
        titleEn="How the pipeline works"
        titleId="Cara kerja pipeline-nya"
      >
        <T
          en={<>Instead of one mega-call that tries to produce everything at once, the pipeline splits into four focused stages. Stage 1 generates five ad copy variants, each tagged with its persuasion angle and DR formula: Fear × PAS, Curiosity × Slippery Slide, Social Proof × AIDA, Aspiration × BAB, Authority × QUEST. Stage 2 generates landing pages in parallel — one per angle. Stage 3 writes the three-email cold-traffic arc. Stage 4 audits message consistency across all assets and scores it.{' '}<br /><br />{' '}The email arc is specific to affiliate list-building. Email 1 delivers the lead magnet with zero affiliate links. Email 2 tells a story with a real name, age, location, number. Email 3 surfaces the offer as a recommendation, not a pitch. This is not generic marketing. Cold traffic needs trust before offer, every time.</>}
          id={<>Alih-alih satu mega-call yang mencoba menghasilkan semua sekaligus, pipeline dipecah jadi empat stage fokus. Stage 1 generate lima varian ad copy, masing-masing diberi label angle persuasi dan formula DR: Fear × PAS, Curiosity × Slippery Slide, Social Proof × AIDA, Aspiration × BAB, Authority × QUEST. Stage 2 generate landing page secara paralel — satu per angle. Stage 3 menulis arc email tiga seri untuk cold traffic. Stage 4 audit konsistensi pesan lintas aset dan berikan skor.{' '}<br /><br />{' '}Arc email ini spesifik untuk affiliate list-building. Email 1 deliver lead magnet tanpa affiliate link. Email 2 bercerita dengan nama, umur, lokasi, dan angka yang konkret. Email 3 baru memunculkan offer sebagai rekomendasi, bukan pitch. Ini bukan marketing generik. Cold traffic butuh trust sebelum offer, setiap kali.</>}
        />
      </CaseSection>

      {/* App form screenshot */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '0 clamp(20px,4vw,56px)' }}>
        <Reveal index={0}>
          <figure style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/campaignforge-app-idle.png"
              alt="CampaignForge app — brief form with 5 fields and sample topic picker"
              style={{ width: '100%', height: 'auto', borderRadius: 16, border: '1px solid rgba(29,28,26,0.1)' }}
            />
            <figcaption style={figcaption}>
              <T en="The brief form — five fields, one Generate button, sample topics for quick testing" id="Form brief — lima field, satu tombol Generate, topik contoh untuk testing cepat" />
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <CaseSection
        titleEn="Deploy Hub: one click, three platforms"
        titleId="Deploy Hub: satu klik, tiga platform"
      >
        <T
          en={<>The part that closes the loop. One button fires three deployment channels in sequence. First, the landing page goes live via Vercel REST API — a single zero-dependency HTML file uploaded inline, live URL in two to five seconds. Then that URL becomes the destination for Meta Ads, pushed via Pipeboard MCP as a paused campaign with five creatives. Zero spend until you hit publish. Meanwhile, the three-email drip sequence lands as draft campaigns in Brevo, attached to an empty subscriber list as a safety net.{' '}<br /><br />{' '}Each platform integration went through its own decision. Vercel REST over Cloudflare Workers because Vercel accepts arbitrary HTML inline — no wrapping, no escaping. MCP HTTP over CLI subprocess because serverless functions cannot spawn binaries. Brevo over Mailchimp because one API key header is cleaner than MCP token toggles, and the free tier fits a pilot.</>}
          id={<>Bagian yang menutup loop. Satu tombol menyalakan tiga channel deployment secara berurutan. Pertama, landing page live via Vercel REST API — satu file HTML zero-dependency yang di-upload inline, URL live dalam dua sampai lima detik. Lalu URL itu jadi destination untuk Meta Ads, di-push via Pipeboard MCP sebagai campaign paused dengan lima creatives. Nol spend sampai Anda tekan publish. Bersamaan, tiga email drip sequence masuk sebagai draft campaigns di Brevo, ditempelkan ke subscriber list kosong sebagai pengaman.{' '}<br /><br />{' '}Tiap integrasi platform punya keputusannya sendiri. Vercel REST dipilih dari Cloudflare Workers karena Vercel menerima arbitrary HTML inline — tanpa wrapping, tanpa escaping. MCP HTTP dipilih dari CLI subprocess karena serverless function tidak bisa spawn binary. Brevo dipilih dari Mailchimp karena satu API key header lebih bersih dari MCP token toggle, dan free tier-nya cocok untuk pilot.</>}
        />
      </CaseSection>

      {/* Impact section screenshot */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '0 clamp(20px,4vw,56px)' }}>
        <Reveal index={0}>
          <figure style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/campaignforge-impact.png"
              alt="CampaignForge impact section — before/after comparison showing 50 hours saved per month"
              style={{ width: '100%', height: 'auto', borderRadius: 16, border: '1px solid rgba(29,28,26,0.1)' }}
            />
            <figcaption style={figcaption}>
              <T en="The math: 20 campaigns/month × 5 hours = 100 hours of production. CampaignForge cuts that in half." id="Hitungannya: 20 campaign/bulan × 5 jam = 100 jam produksi. CampaignForge memangkasnya jadi setengah." />
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <CaseSection
        titleEn="What the operator's data said"
        titleId="Angka dari operasinya"
      >
        <T
          en={<>The team runs about 20 campaigns per month. Each campaign package — ad copy, landing page, emails — takes roughly 5 hours across several people. That is 100 hours a month spent on production alone, roughly 60% of one full-time role.{' '}<br /><br />{' '}With CampaignForge, the generation itself takes under 30 minutes. Add 2 hours for polish and QA, and the package drops from 5 hours to 2.5. That is 50 hours a month freed up — enough to double throughput with the same team, or redirect capacity into A/B testing and optimization that rarely gets done.</>}
          id={<>Tim ini menjalankan sekitar 20 campaign per bulan. Tiap paket campaign — ad copy, landing page, email — makan sekitar 5 jam lintas beberapa orang. Itu artinya 100 jam per bulan cuma untuk produksi, kira-kira 60% dari satu peran full-time.{' '}<br /><br />{' '}Dengan CampaignForge, proses generate-nya sendiri kurang dari 30 menit. Tambah 2 jam untuk polish dan QA, dan paketnya turun dari 5 jam jadi 2,5 jam. Itu 50 jam per bulan yang dibebaskan — cukup untuk menggandakan throughput dengan tim yang sama, atau mengalihkan kapasitas ke A/B testing dan optimisasi yang jarang sempat dilakukan.</>}
        />
      </CaseSection>

      {/* How it works / stack transparency screenshot */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '0 clamp(20px,4vw,56px)' }}>
        <Reveal index={0}>
          <figure style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/campaignforge-stack.png"
              alt="CampaignForge how-it-works page — under the hood section showing each vendor, role, and why it was picked"
              style={{ width: '100%', height: 'auto', borderRadius: 16, border: '1px solid rgba(29,28,26,0.1)' }}
            />
            <figcaption style={figcaption}>
              <T en="The transparency page — every vendor, component, and MVP status badge" id="Halaman transparansi — setiap vendor, komponen, dan status badge MVP" />
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <CaseSection
        titleEn="What happened next"
        titleId="Yang terjadi selanjutnya"
      >
        <T
          en={<>The challenge closed. Matt wrote back honestly — the outreach was automated, and being based in Indonesia was the deciding factor. Timezone overlap and US work situation made it tough to move forward. He had a strong pool of candidates to choose from.{' '}<br /><br />{' '}I did not continue to production. But the thesis I brought to week one was proven by week two. One brief, one pipeline, three platform deploys, 96% message consistency. The gap I found in the research was real, and it was closeable in two weeks of focused work. That is the version worth documenting.</>}
          id={<>Challengenya ditutup. Matt membalas dengan jujur — outreach-nya otomatis, dan lokasi saya di Indonesia jadi penentu. Timezone overlap dan situasi kerja US membuatnya sulit untuk dilanjutkan. Dia punya pool kandidat yang kuat.{' '}<br /><br />{' '}Saya tidak melanjutkan ke produksi. Tapi thesis yang saya bawa di minggu pertama terbukti di minggu kedua. Satu brief, satu pipeline, deploy ke tiga platform, konsistensi pesan 96%. Gap yang saya temukan di riset itu nyata, dan bisa ditutup dalam dua minggu kerja terfokus. Itu versi yang patut didokumentasikan.</>}
        />
      </CaseSection>

      <CaseSection
        titleEn="The decisions that mattered"
        titleId="Keputusan yang berarti"
      >
        <T
          en={<>Every non-trivial choice, documented and verifiable from source.{' '}<br /><br />{' '}<strong style={{ color: 'var(--ink)' }}>Single LP vs five.</strong> The concept called for five angle-matched landing pages. Reality: reasoning models burn token budget fast. The pipeline generates five in parallel when budget allows, falls back to one when it does not.{' '}<br /><br />{' '}<strong style={{ color: 'var(--ink)' }}>Vercel REST over Cloudflare.</strong> Vercel accepts arbitrary HTML as inline file data. Cloudflare Workers would need the HTML wrapped into Worker source with escaped quotes. One credential instead of two.{' '}<br /><br />{' '}<strong style={{ color: 'var(--ink)' }}>MCP HTTP over CLI subprocess.</strong> The first prototype spawned the Pipeboard CLI binary. It worked locally but broke on Vercel — serverless functions cannot spawn processes. Direct JSON-RPC over HTTP fixed it. Zero install for the user.{' '}<br /><br />{' '}<strong style={{ color: 'var(--ink)' }}>Sequential multi-call over one mega-call.</strong> One call for all assets meant the model ran out of output tokens halfway through the emails. Four focused stages with dedicated token budgets solved it, with fault isolation as a bonus.</>}
          id={<>Setiap pilihan yang non-trivial, didokumentasikan dan bisa diverifikasi dari source.{' '}<br /><br />{' '}<strong style={{ color: 'var(--ink)' }}>Single LP vs lima.</strong> Konsep awalnya minta lima landing page dengan angle-match. Realitas: model reasoning cepat menghabiskan token budget. Pipeline generate lima secara paralel saat budget cukup, fallback ke satu kalau tidak.{' '}<br /><br />{' '}<strong style={{ color: 'var(--ink)' }}>Vercel REST dari Cloudflare.</strong> Vercel menerima arbitrary HTML sebagai inline file data. Cloudflare Workers harus membungkus HTML ke Worker source dengan escaped quotes. Satu kredensial, bukan dua.{' '}<br /><br />{' '}<strong style={{ color: 'var(--ink)' }}>MCP HTTP dari CLI subprocess.</strong> Prototipe pertama spawn binary CLI Pipeboard. Jalan di lokal, tapi rusak di Vercel — serverless function tidak bisa spawn process. Direct JSON-RPC over HTTP fix-nya. Zero install untuk user.{' '}<br /><br />{' '}<strong style={{ color: 'var(--ink)' }}>Sequential multi-call dari satu mega-call.</strong> Satu call untuk semua aset berarti model kehabisan output tokens di tengah email. Empat stage fokus dengan token budget terpisah menyelesaikannya, dengan fault isolation sebagai bonus.</>}
        />
      </CaseSection>

      <CaseSection
        titleEn="Stack"
        titleId="Stack"
      >
        <T
          en={<>Next.js 16 App Router, React 19, Vercel AI SDK v7 with structured output via Zod v4. Provider layer supports both OpenCode Go and Z.AI Coding Plan — 16 models total, switchable without re-entering keys. Tailwind v4 for the dark theme. Zero database, zero auth, zero server-side state. BYOK from localStorage. Deployed on Vercel Hobby, free tier.</>}
          id={<>Next.js 16 App Router, React 19, Vercel AI SDK v7 dengan structured output via Zod v4. Layer provider mendukung OpenCode Go dan Z.AI Coding Plan — total 16 model, bisa switch tanpa re-enter key. Tailwind v4 untuk dark theme. Tanpa database, tanpa auth, tanpa server-side state. BYOK dari localStorage. Deploy di Vercel Hobby, free tier.</>}
        />
      </CaseSection>

      {/* How it works page screenshot */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '0 clamp(20px,4vw,56px)' }}>
        <Reveal index={0}>
          <figure style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/campaignforge-howitworks.png"
              alt="CampaignForge how-it-works page — setup guide with 4 steps and honest MVP status badges"
              style={{ width: '100%', height: 'auto', borderRadius: 16, border: '1px solid rgba(29,28,26,0.1)' }}
            />
            <figcaption style={figcaption}>
              <T en="How it works page — setup guide and technical transparency with MVP status badges" id="Halaman cara kerja — panduan setup dan transparansi teknis dengan status badge MVP" />
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <CaseQuote
        en="The cheapest way to learn if a gap is real is to build the smallest thing that closes it."
        id="Cara termurah untuk memastikan sebuah gap itu nyata: bangun hal terkecil yang menutupnya."
      />

      <CaseFooter
        prev={{ href: '/case/opencode', en: 'Prev: OpenCode', id: 'Sebelumnya: OpenCode' }}
      />
    </div>
  );
}

/* --- styles --- */
const eyebrow: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 13,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#3B82F6',
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

const logoBox: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'clamp(80px, 12vw, 120px)',
  height: 'clamp(80px, 12vw, 120px)',
  borderRadius: 24,
  background: 'rgba(59, 130, 246, 0.12)',
  border: '1.5px solid rgba(59, 130, 246, 0.3)',
  flexShrink: 0,
};

const figcaption: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 12,
  color: 'rgba(29,28,26,0.45)',
  marginTop: 10,
  textAlign: 'center',
};
