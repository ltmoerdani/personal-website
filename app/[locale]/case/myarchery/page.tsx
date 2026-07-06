'use client';

import Image from 'next/image';
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

const releases = [
  {
    period: 'Oct 2021',
    en: 'Alpha release. The HUB Cibubur, "The HUB Scoring Games 2021"',
    id: 'Rilis alpha. The HUB Cibubur, "The HUB Scoring Games 2021"',
  },
  {
    period: 'Mar 2022',
    en: 'Public 1.0. Pengprov Perpani Jakarta, 4-series "Jakarta Series"',
    id: 'Rilis publik 1.0. Pengprov Perpani Jakarta, 4 seri "Jakarta Series"',
  },
  {
    period: 'Jul 2022',
    en: 'Public 2.0. Full end-to-end system for Jakarta Series #2',
    id: 'Rilis publik 2.0. Sistem end-to-end penuh untuk Jakarta Series #2',
  },
  {
    period: 'Sep 2022',
    en: 'Public 2.1. Jakarta Series #3',
    id: 'Rilis publik 2.1. Jakarta Series #3',
  },
  {
    period: 'Nov 2022',
    en: 'Public 2.2. Jakarta Series 2022 finale',
    id: 'Rilis publik 2.2. Penutup Jakarta Series 2022',
  },
  {
    period: 'Dec 2022',
    en: 'Public 2.3 and 2.4. Sumbawa Barat and Purwakarta championships',
    id: 'Rilis publik 2.3 dan 2.4. Kejuaraan Sumbawa Barat dan Purwakarta',
  },
  {
    period: 'Early 2024',
    en: 'Booking core focus. Seamless registration integrated with IANSEO scoring',
    id: 'Fokus pada booking. Registrasi seamless terintegrasi dengan skoring IANSEO',
  },
  {
    period: 'Aug 2024',
    en: 'First international event. 161 teams, 8 countries. MyArchery handles registration and payment, IANSEO handles scoring',
    id: 'Event internasional pertama. 161 tim, 8 negara. MyArchery urus registrasi dan pembayaran, IANSEO urus skoring',
  },
];

const futureModules = [
  {
    num: '01',
    titleEn: 'Club Management',
    titleId: 'Manajemen Klub',
    bodyEn:
      'Digital membership cards, training schedules, Perpani integration, achievement tracking, and reward badges.',
    bodyId:
      'Kartu anggota digital, jadwal latihan, integrasi Perpani, pelacakan prestasi, dan lencana penghargaan.',
  },
  {
    num: '02',
    titleEn: 'Ranking Management',
    titleId: 'Manajemen Peringkat',
    bodyEn:
      'National selection & championship management, multi-level points and ranking system for athletes, clubs, and regions.',
    bodyId:
      'Manajemen seleksi nasional & kejuaraan, sistem poin dan peringkat multi-level untuk atlet, klub, dan daerah.',
  },
  {
    num: '03',
    titleEn: 'Venue Management',
    titleId: 'Manajemen Venue',
    bodyEn:
      'Online venue booking, member management, training schedules, equipment inventory, venue analytics.',
    bodyId:
      'Pemesanan venue online, manajemen anggota, jadwal latihan, inventaris peralatan, analitik venue.',
  },
  {
    num: '04',
    titleEn: 'Archery Virtual Assistant',
    titleId: 'Asisten Virtual Panahan',
    bodyEn:
      'AI-powered real-time feedback on posture and technique, interactive tutorials, community forums, progress analytics.',
    bodyId:
      'Umpan balik real-time berbasis AI untuk postur dan teknik, tutorial interaktif, forum komunitas, analitik progres.',
  },
];

export default function MyArcheryCase() {
  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, #0d47a3 0px, #0d47a3 340px, color-mix(in oklab, #0d47a3 6%, var(--bg)) 340px, var(--bg) 100%)',
        color: 'var(--ink)',
        overflowX: 'clip',
      }}
    >
      <CaseNav />

      <header
        style={{
          background:
            'radial-gradient(120% 180% at 0% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 56%), linear-gradient(140deg, #0d47a3 0%, #0d47a3 100%)',
          color: '#e8f1ff',
          borderBottom: '1px solid rgba(171, 209, 255, 0.2)',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: 'clamp(64px,10vh,120px) clamp(20px,4vw,56px)',
          }}
        >
          <div style={eyebrow}>
            <T
              en="Case study · Co-Founder & builder · Side project → market standard"
              id="Studi kasus · Founder & builder · Proyek sampingan → standar pasar"
            />
          </div>
          <div style={headerTopRow}>
            <div style={headerLogoBlock}>
              <Image
                src="/myarchery-logo.svg"
                alt="MyArchery logo"
                width={340}
                height={340}
                style={headerLogo}
                priority
              />
            </div>
          </div>
          <p style={lede}>
            <T
              en="First digital archery platform in Indonesia. 7,100 users, 550 clubs, 160 partners, 27 provinces. Scoring to certificates, everything inside one platform."
              id="Platform digital panahan pertama di Indonesia. 7.100 pengguna, 550 klub, 160 mitra, 27 provinsi. Dari skoring sampai sertifikat, semua dalam satu platform."
            />
          </p>
          <CaseStatGrid accent="light">
            <CaseStat value="7,100+" labelEn="Active users" labelId="Pengguna aktif" accent="light" />
            <CaseStat value="550+" labelEn="Archery clubs" labelId="Klub panahan" accent="light" />
            <CaseStat value="Rp 1.7B+" labelEn="GMV processed" labelId="GMV diproses" accent="light" />
            <CaseStat value="27" labelEn="Provinces" labelId="Provinsi" accent="light" />
          </CaseStatGrid>
        </div>
      </header>

      <CaseSection titleEn="Built from inside the sport" titleId="Dibangun dari dalam olahraganya">
        <T
          en={<>I started as an archery enthusiast. Showed up at events, watched how clubs ran things, saw the chaos first-hand. That was enough to start building. But the deeper I got into product development, the more I realized I needed to understand the sport from the inside out. So I got serious: obtained a <strong>Grade C archery judge license</strong> in 2025, took on the role of <strong>Wakabid Media & Database at Perpani Jakarta Timur</strong>, the city-level federation. Not because I wanted to be a judge. Because product-market fit demands that you go all the way in. My co-founder Aditya Priyantoro was already deep in it: ranked #1 Barebow Jakarta in the 2022 Jakarta Series. He shoots. I study the system that scores him. Between the two of us, the product gets the sport from every angle.</>}
          id={<>Saya mulai sebagai penggiat panahan. Datang ke event, lihat bagaimana klub menjalankan semuanya, menyaksikan kekacauan langsung. Itu cukup untuk mulai membangun. Tapi semakin dalam saya di development produk, semakin saya sadar perlu memahami olahraga ini dari dalam. Maka saya serius: ambil <strong>lisensi juri panahan Grade C</strong> di tahun 2025, menjabat sebagai <strong>Wakabid Media & Database di Perpani Jakarta Timur</strong>, federasi tingkat kota. Bukan karena saya ingin jadi juri. Tapi karena product-market fit menuntut Anda untuk masuk sepenuhnya. Co-founder saya Aditya Priyantoro sudah lebih dulu di dalam: Peringkat #1 Barebow Jakarta di Jakarta Series 2022. Dia memanah. Saya mempelajari sistem yang menskornya. Antara kami berdua, produk ini mencakup olahraga dari semua sudut.</>}
        />
      </CaseSection>

      <section style={{ maxWidth: 820, margin: '0 auto', padding: '16px clamp(20px,4vw,56px) 0' }}>
        <div style={builtInsideSportGrid}>
          <Reveal index={0}>
            <figure style={inlineMediaFigureLight}>
              <Image
                src="/myarchery-inside-sport-judge-portrait.png"
                alt="Portrait during on-site judging duty at an archery event"
                width={768}
                height={768}
                style={inlineMediaImage}
              />
              <figcaption style={inlineMediaCaptionLight}>
                <T en="On-site judge perspective, close to daily event operations" id="Perspektif juri di lapangan, dekat dengan operasi event harian" />
              </figcaption>
            </figure>
          </Reveal>
          <Reveal index={1}>
            <figure style={inlineMediaFigureLight}>
              <Image
                src="/myarchery-inside-sport-field-operations-view.png"
                alt="Field operations view from judge and organizer desk during competition day"
                width={768}
                height={768}
                style={inlineMediaImage}
              />
              <figcaption style={inlineMediaCaptionLight}>
                <T en="Judge and organizer desk view when competition is running" id="Sudut pandang meja juri dan organizer saat kompetisi berjalan" />
              </figcaption>
            </figure>
          </Reveal>
          <Reveal index={2}>
            <figure style={inlineMediaFigureLight}>
              <Image
                src="/myarchery-inside-sport-target-line-judging.png"
                alt="Judge at the target line validating arrows and recording results"
                width={768}
                height={768}
                style={inlineMediaImage}
              />
              <figcaption style={inlineMediaCaptionLight}>
                <T en="Target-line judging: validation and score integrity" id="Penjurian di garis target: validasi dan integritas skor" />
              </figcaption>
            </figure>
          </Reveal>
          <Reveal index={3}>
            <figure style={inlineMediaFigureLight}>
              <Image
                src="/myarchery-inside-sport-judge-lane-19.png"
                alt="Judge lane assignment during live competition session"
                width={768}
                height={768}
                style={inlineMediaImage}
              />
              <figcaption style={inlineMediaCaptionLight}>
                <T en="Live lane assignment and scoring supervision on the field" id="Pengawasan lane dan skoring langsung di lapangan" />
              </figcaption>
            </figure>
          </Reveal>
          <Reveal index={4}>
            <figure style={inlineMediaFigureLight}>
              <Image
                src="/myarchery-inside-sport-laptop-ops-desk.png"
                alt="Operating laptop desk during live event execution"
                width={1200}
                height={1600}
                style={inlineMediaImage}
              />
              <figcaption style={inlineMediaCaptionLight}>
                <T en="Live operations desk: monitoring and updating event flow" id="Meja operasi live: monitoring dan update alur event" />
              </figcaption>
            </figure>
          </Reveal>
          <Reveal index={5}>
            <figure style={inlineMediaFigureLight}>
              <Image
                src="/myarchery-inside-sport-laptop-printer-station.png"
                alt="Laptop and printer station used to support field logistics"
                width={1245}
                height={1622}
                style={inlineMediaImage}
              />
              <figcaption style={inlineMediaCaptionLight}>
                <T en="Field logistics station for documents and technical support" id="Pos logistik lapangan untuk dokumen dan dukungan teknis" />
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <CaseSection titleEn="The problem was everywhere" titleId="Masalahnya ada di mana-mana">
        <T
          en="A club wants to run a tournament. They open WhatsApp, create a group. Participants send name, class, distance in one long thread. Someone volunteers to type everything into Google Forms. Another person handles bank transfers by checking screenshots. Ianseo handles the scoring, except Ianseo was built for a different country's federation and nothing connects. The bracket seeding? A whiteboard marker that keeps drying out. By the end, the organizer spends more time reconciling spreadsheets than watching archers shoot. This is how every event ran, not five years ago, last year."
          id="Ada klub mau bikin turnamen. Buka WhatsApp, bikin grup. Peserta kirim nama, kelas, jarak dalam satu thread panjang. Ada yang rela ngetik semua ke Google Form. Orang lain urus transfer bank dengan cek screenshot. Ianseo untuk skoring, tapi Ianseo dibuat untuk federasi negara lain dan tidak ada yang nyambung. Seeding bantalan? Spidol whiteboard yang tintanya habis. Di akhir, penyelenggara lebih sibuk mencocokkan spreadsheet daripada nonton atlet memanah. Beginilah cara setiap event berjalan, bukan lima tahun lalu, tahun kemarin."
        />
      </CaseSection>

      <CaseSection titleEn="Alpha to market standard" titleId="Dari alpha jadi standar pasar">
        <T
          en={<>October 2021: The HUB Cibubur. One event, one club. Scoring tool, that was it. By December 2022 the platform had run 39 events, processed 21,000 transactions worth Rp 1.7 billion. A database of 4,205 active athletes across 27 provinces. <strong>I didn't plan for any of this.</strong> I built a scoring tool. What grew out of it is something else: the operating system for archery events in Indonesia. I say "operating system" carefully. Not a metaphor. Clubs literally cannot run their events without it now. That both terrifies and vindicates me.</>}
          id={<>Oktober 2021: The HUB Cibubur. Satu event, satu klub. Alat skoring, itu saja. Pada Desember 2022 platform sudah menjalankan 39 event, memproses 21.000 transaksi senilai Rp 1,7 miliar. Database 4.205 atlet aktif di 27 provinsi. <strong>Saya tidak merencanakan semua ini.</strong> Saya bikin alat skoring. Yang tumbuh dari situ adalah sesuatu yang lain: sistem operasi event panahan di Indonesia. Saya bilang "sistem operasi" dengan hati-hati. Bukan metafora. Klub benar-benar tidak bisa menjalankan event tanpa ini sekarang. Itu menakutkan sekaligus memuaskan.</>}
        />
      </CaseSection>

      <CaseSection titleEn="CPO perspective: the build order" titleId="Perspektif CPO: urutan membangun">
        <T
          en={<>Everyone asked for the marketplace. Browse events, register, pay. That is what people imagine an archery platform should be. I said no. Took two months to explain why. The operational core was broken. Clubs could not score reliably. Registration meant manually checking 200 names against bank screenshots. Certificates took days, sometimes weeks. A consumer marketplace would have made the same chaos visible to more people. So I rebuilt from the inside out. Scoring engine first: the hardest technical problem, the one Ianseo solved for other countries but not ours. Then registration and payment. Then certificates and reports. Only then, the marketplace on top. Each layer enabled the next. <strong>The consumer marketplace shipped last, not first.</strong> That decision still gets questioned. But the people who run events understand. They are the ones who told me, finally, someone built the thing we actually needed.</>}
          id={<>Semua orang minta marketplace. Cari event, daftar, bayar. Itu yang orang bayangkan dari platform panahan. Saya bilang tidak. Butuh dua bulan untuk menjelaskan kenapa. Inti operasionalnya rusak. Klub tidak bisa menskor dengan andal. Registrasi artinya mencocokkan 200 nama dengan screenshot transfer manual. Sertifikat butuh berhari-hari, kadang berminggu-minggu. Marketplace konsumen hanya akan menampilkan kekacauan yang sama ke lebih banyak orang. Jadi saya bangun dari dalam ke luar. Mesin skoring dulu: masalah teknis terberat, yang Ianseo selesaikan untuk negara lain tapi tidak untuk kita. Lalu registrasi dan pembayaran. Lalu sertifikat dan laporan. Baru setelah itu marketplace di atasnya. Setiap lapisan memungkinkan lapisan berikutnya. <strong>Marketplace konsumen dirilis paling akhir, bukan paling awal.</strong> Keputusan itu masih dipertanyakan. Tapi orang yang menjalankan event paham. Merekalah yang bilang, akhirnya, ada yang membangun yang benar-benar kami butuhkan.</>}
        />
      </CaseSection>

      <CaseSection titleEn="What running an event looks like" titleId="Seperti apa menjalankan event">
        <T
          en={<>An organizer logs in and creates an event in five steps. General info: banner, date, venue. Registration fees: including early bird tiers. Competition categories: class, distance, individual or team. Match rules: club ranking calculations, medal criteria. Schedule. The system generates everything from that configuration. Registration page, payment integration, bracket seeding. If athletes from the same club end up on the same target butt, the system warns you. On event day, officials scan QR codes from ID cards. Enter scores per arrow through a mobile app. The live score appears on TV screens in real time. No paper, no whiteboard marker. After the event, e-certificates, ID cards, and financial reports generate in under 15 minutes. The entire lifecycle, from announcement to medal standing, runs inside one platform. This is the part that sounds like a pitch. It is not a pitch. It is literally what happens.</>}
          id={<>Penyelenggara login dan buat event dalam lima langkah. Info umum: banner, tanggal, venue. Biaya registrasi: termasuk early bird. Kategori lomba: kelas, jarak, individu atau beregu. Aturan bertanding: kalkulasi peringkat klub, kriteria medali. Jadwal. Sistem generate semuanya dari konfigurasi itu. Halaman pendaftaran, integrasi pembayaran, seeding bantalan. Kalau atlet dari klub yang sama dapat bantalan yang sama, sistem memperingatkan. Hari-H, official scan QR code dari ID Card. Input skor per rambahan lewat aplikasi mobile. Skor live muncul di layar TV real-time. Tanpa kertas, tanpa spidol whiteboard. Setelah event, e-certificate, ID Card, dan laporan keuangan selesai dalam 15 menit. Seluruh siklus, dari pengumuman hingga medal standing, berjalan dalam satu platform. Ini bagian yang terdengar seperti promosi. Bukan promosi. Ini yang benar-benar terjadi.</>}
        />
      </CaseSection>

      <section style={inlineMediaSection}>
        <Reveal index={0}>
          <figure style={inlineMediaFigureLight}>
            <Image
              src="/myarchery-dashboard-scoring-suite-v2.png"
              alt="MyArchery organizer dashboard and scoring suite used in live competitions"
              width={1460}
              height={1450}
              style={inlineMediaImage}
            />
            <figcaption style={inlineMediaCaptionLight}>
              <T en="Organizer dashboard and scoring surfaces used on event day" id="Dashboard organizer dan permukaan skoring yang dipakai saat hari-H" />
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Release timeline */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0' }}>
        <Reveal index={0}>
          <h2 style={sectionTitle}>
            <T en="Release timeline" id="Linimasa rilis" />
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gap: 10, marginTop: 24 }}>
          {releases.map((r, i) => (
            <Reveal key={r.period} index={i}>
              <div style={releaseRow}>
                <span style={releasePeriod}>{r.period}</span>
                <span style={releaseDesc}>
                  <T en={r.en} id={r.id} />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal index={releases.length}>
          <p style={{ marginTop: 16, fontSize: 14, color: 'rgba(29,28,26,0.5)', fontFamily: 'var(--font-jetbrains), monospace' }}>
            <T
              en="6 major releases in 14 months. Alpha to multi-province adoption."
              id="6 rilis besar dalam 14 bulan. Dari alpha ke adopsi multi-provinsi."
            />
          </p>
        </Reveal>
        <div style={posterInlineGrid}>
          <Reveal index={releases.length + 1}>
            <figure style={posterInlineCard}>
              <Image
                src="/myarchery-poster-jakarta-series-2022.png"
                alt="Jakarta Series 2022 competition campaign poster"
                width={640}
                height={850}
                style={inlineMediaImage}
              />
            </figure>
          </Reveal>
          <Reveal index={releases.length + 2}>
            <figure style={posterInlineCard}>
              <Image
                src="/myarchery-poster-west-java-league-2023.png"
                alt="West Java Archery League 2023 campaign poster"
                width={640}
                height={850}
                style={inlineMediaImage}
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Athlete demographics */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0' }}>
        <Reveal index={0}>
          <h2 style={sectionTitle}>
            <T en="Who uses MyArchery" id="Siapa yang pakai MyArchery" />
          </h2>
        </Reveal>
        <Reveal index={1}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 24 }}>
            <div style={demographicCard}>
              <div style={demoLabel}>
                <T en="By bow category" id="Per kategori busur" />
              </div>
              <div style={demoList}>
                <DemoRow label="National / Standard Bow" value="2,170" />
                <DemoRow label="Barebow" value="1,232" />
                <DemoRow label="Compound" value="480" />
                <DemoRow label="Recurve" value="378" />
                <DemoRow label="Horsebow / Traditional" value="107" />
              </div>
            </div>
            <div style={demographicCard}>
              <div style={demoLabel}>
                <T en="By division" id="Per divisi" />
              </div>
              <div style={demoList}>
                <DemoRow label="U-17" value="2,717" />
                <DemoRow label="Open" value="2,086" />
                <DemoRow label="Military" value="112" />
                <DemoRow label="Master" value="19" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Feature showcase — live features */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0' }}>
        <Reveal index={0}>
          <h2 style={sectionTitle}>
            <T en="Live features" id="Fitur yang sudah aktif" />
          </h2>
          <p style={sectionSecondary}>
            <T
              en="44 features shipped across event management and marketplace. Each one solving a specific operational pain point, not a hypothetical one."
              id="44 fitur dirilis di event management dan marketplace. Masing-masing menyelesaikan pain point operasional spesifik, bukan yang hipotetis."
            />
          </p>
        </Reveal>

        <Reveal index={1}>
          <div style={featureGrid}>
            <FeatureCard
              num="01"
              titleEn="Live Scoring"
              titleId="Skoring Langsung"
              bodyEn="Real-time scores on TV screens configurable per category and session. Officials input via mobile. Scan QR, verify archer, enter per-arrow score, submit. The scoreboard updates while the next archer is still shooting."
              bodyId="Skor real-time di layar TV, bisa diatur per kategori dan per sesi. Official input via mobile. Scan QR, verifikasi atlet, input skor per rambahan, submit. Papan skor update saat pemanah berikutnya masih membidik."
              mediaSrc="/myarchery-live-score-operations.png"
              mediaAlt="Live score control room and on-site operations"
              mediaCaptionEn="Live score control plus venue-side operations"
              mediaCaptionId="Kontrol live score plus operasi di venue"
              emphasize
            />
            <FeatureCard
              num="02"
              titleEn="Target Butt Seeding"
              titleId="Seating Bantalan"
              bodyEn="Automatic participant distribution across target butts. If two archers from the same club land on the same butt, the system warns you. This single feature eliminated the most common fairness complaint in archery events."
              bodyId="Distribusi peserta otomatis ke bantalan. Kalau dua atlet dari klub yang sama dapat bantalan yang sama, sistem memperingatkan. Satu fitur ini menghilangkan keluhan fairness paling umum di event panahan."
            />
            <FeatureCard
              num="03"
              titleEn="IRAT Scoring System"
              titleId="Sistem Skoring IRAT"
              bodyEn="Index Rata-Rata. Two qualification sessions, three elimination sessions. The algorithm measures ability, not just luck. Results appear in a live leaderboard that updates after every end."
              bodyId="Index Rata-Rata. Dua sesi kualifikasi, tiga sesi eliminasi. Algoritma mengukur kemampuan, bukan sekadar keberuntungan. Hasil muncul di leaderboard live yang update setelah setiap babak."
            />
            <FeatureCard
              num="04"
              titleEn="E-Certificates & ID Cards"
              titleId="Sertifikat & ID Card Digital"
              bodyEn="Auto-generated digital certificates with customizable templates. Participant ID cards with QR codes for check-in. Bulk download per club or category. The certificate generator alone saves organizers three days of work per event."
              bodyId="Sertifikat digital otomatis dengan template yang bisa diatur. ID Card peserta dengan QR code untuk check-in. Download massal per klub atau kategori. Generator sertifikat saja menghemat tiga hari kerja penyelenggara per event."
            />
            <FeatureCard
              num="05"
              titleEn="Elimination Brackets"
              titleId="Bagan Eliminasi"
              bodyEn="Visual elimination bracket that auto-populates from qualification results. Supports individual and team categories. Printable scoresheets included. What used to take an hour with marker on paper now takes zero minutes."
              bodyId="Bagan eliminasi visual yang terisi otomatis dari hasil kualifikasi. Mendukung kategori individu dan beregu. Scoresheet siap cetak. Yang dulu makan waktu sejam dengan spidol di kertas, sekarang nol menit."
            />
            <FeatureCard
              num="06"
              titleEn="Jakarta Series Ranking"
              titleId="Pemeringkatan Jakarta Series"
              bodyEn="Multi-event series leaderboard across 4-series Jakarta 2022 competition. Accessible via web and mobile. Athletes track their standing across the season without asking the organizer for updates."
              bodyId="Leaderboard multi-event lintas 4 seri kompetisi Jakarta 2022. Bisa diakses via web dan mobile. Atlet melacak peringkat mereka sepanjang musim tanpa harus nanya penyelenggara."
              mediaSrc="/myarchery-series-leaderboard.png"
              mediaAlt="Jakarta Series ranking and leaderboard experience across laptop and mobile"
              mediaCaptionEn="Leaderboard layer that made multi-series competition traceable"
              mediaCaptionId="Lapisan leaderboard yang membuat kompetisi multi-series bisa dilacak"
              emphasize
            />
            <FeatureCard
              num="07"
              titleEn="Financial Reports"
              titleId="Laporan Keuangan"
              bodyEn="Integrated payment gateway (Midtrans). Auto-generated financial reports per event. Revenue breakdown by registration fees, early bird, WNA and official fees. The reports come out as PDF, ready for audit."
              bodyId="Payment gateway terintegrasi (Midtrans). Laporan keuangan auto-generate per event. Rincian revenue per biaya registrasi, early bird, biaya WNA dan official. Laporan keluar sebagai PDF, siap diaudit."
            />
            <FeatureCard
              num="08"
              titleEn="DOS Dashboard"
              titleId="Dashboard DOS"
              bodyEn="Director of Shooting dashboard accessible from anywhere. Category winners, elimination results, club medal standings. Real-time. No paper. No phone calls asking who won what."
              bodyId="Dashboard Director of Shooting bisa diakses dari mana saja. Pemenang per kategori, hasil eliminasi, perolehan medali klub. Real-time. Tanpa kertas. Tanpa telepon nanya siapa juara."
            />
          </div>
        </Reveal>
        <div style={inlineFeatureImageGrid}>
          <Reveal index={2}>
            <div>
              <figure style={inlineMediaFigureLight}>
                <Image
                  src="/myarchery-mobile-scoring-flow.png"
                  alt="Mobile workflow from login, QR check-in, to score submission"
                  width={2048}
                  height={737}
                  style={inlineMediaImage}
                />
                <figcaption style={inlineMediaCaptionLight}>
                  <T en="Mobile scoring flow from check-in to submit" id="Alur skoring mobile dari check-in sampai submit" />
                </figcaption>
              </figure>
              <div style={storeBadgeRow}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.adminmyarchery&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download MyArchery Organizer on Google Play"
                  style={storeBadgeLink}
                >
                  <Image
                    src="/google-play-badge-v2.png"
                    alt="Get it on Google Play"
                    width={2000}
                    height={593}
                    style={storeBadgeImage}
                  />
                </a>
                <a
                  href="https://apps.apple.com/my/app/myarchery-organizer/id1637413642?l=ms"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download MyArchery Organizer on the App Store"
                  style={storeBadgeLink}
                >
                  <Image
                    src="/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={250}
                    height={83}
                    style={storeBadgeImage}
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CaseSection titleEn="Trusted by clubs, associations, and vendors" titleId="Dipercaya klub, asosiasi, dan vendor">
        <T
          en="Perpani Jaya DKI Jakarta. Perpani Kab. Kebumen. PRO Archery Shop. The HUB (Equestrian-Archery-Coffee). FAST Archery Sport Team. Barebow Karawang. BXP Archery Range. TAC Indonesia. Kujang Archery. Victory Archery Club. San Archery Club Sunnah Sport. Monster Wing Vanes. Queen Archery Proshop. Exclusive collaboration with Pemprov DKI Jakarta in 2022. Pengprov Jawa Barat in 2023. I list them because each name paid real money to use the platform. Not a pilot. Not a partnership MoU. Actual event registrations."
          id="Perpani Jaya DKI Jakarta. Perpani Kab. Kebumen. PRO Archery Shop. The HUB (Equestrian-Archery-Coffee). FAST Archery Sport Team. Barebow Karawang. BXP Archery Range. TAC Indonesia. Kujang Archery. Victory Archery Club. San Archery Club Sunnah Sport. Monster Wing Vanes. Queen Archery Proshop. Kolaborasi eksklusif dengan Pemprov DKI Jakarta tahun 2022. Pengprov Jawa Barat tahun 2023. Saya sebut satu per satu karena masing-masing bayar betulan untuk pakai platform. Bukan pilot. Bukan MoU kemitraan. Registrasi event beneran."
        />
      </CaseSection>

      <section style={inlineMediaSectionLight}>
        <Reveal index={0}>
          <figure style={inlineMediaFigureLight}>
            <Image
              src="/myarchery-partner-campaign.png"
              alt="MyArchery partner campaign with club and vendor brands"
              width={2048}
              height={1024}
              style={inlineMediaImage}
            />
            <figcaption style={inlineMediaCaptionLight}>
              <T en="Partnership campaign used for clubs and vendor onboarding" id="Kampanye partnership untuk onboarding klub dan vendor" />
            </figcaption>
          </figure>
        </Reveal>
        <div style={logoStripGrid}>
          <Reveal index={1}>
            <figure style={logoStripCard}>
              <Image src="/grand-triumph-logo.svg" alt="Grand Triumph event logo" width={340} height={340} style={logoStripImage} />
            </figure>
          </Reveal>
          <Reveal index={2}>
            <figure style={logoStripCard}>
              <Image src="/perpani-jawa-barat-logo.png" alt="Perpani Jawa Barat emblem" width={600} height={600} style={logoStripImage} />
            </figure>
          </Reveal>
          <Reveal index={3}>
            <figure style={logoStripCard}>
              <Image src="/perpani-jakarta-timur-logo.png" alt="Perpani Jakarta Timur emblem" width={2048} height={2048} style={logoStripImage} />
            </figure>
          </Reveal>
          <Reveal index={4}>
            <figure style={logoStripCard}>
              <Image src="/perpani-kebumen-logo.png" alt="Perpani Kebumen emblem" width={1080} height={1080} style={logoStripImage} />
            </figure>
          </Reveal>
          <Reveal index={5}>
            <figure style={logoStripCard}>
              <Image src="/perpani-dki-jakarta-logo.jpg" alt="Perpani DKI Jakarta emblem" width={256} height={256} style={logoStripImage} />
            </figure>
          </Reveal>
        </div>
      </section>

      <section style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0' }}>
        <Reveal index={0}>
          <h2 style={sectionTitle}>
            <T en="What the data says" id="Angkanya seperti ini" />
          </h2>
        </Reveal>
        <Reveal index={1}>
          <div style={metricGrid}>
            <div style={metricCard}>
              <div style={metricVal}>70%</div>
              <div style={metricLabel}>
                <T
                  en="Active users buy 2× more events"
                  id="Pengguna aktif beli 2× lebih banyak event"
                />
              </div>
            </div>
            <div style={metricCard}>
              <div style={metricVal}>99%</div>
              <div style={metricLabel}>
                <T
                  en="Score calculation accuracy"
                  id="Akurasi perhitungan skor"
                />
              </div>
            </div>
            <div style={metricCard}>
              <div style={metricVal}>24h</div>
              <div style={metricLabel}>
                <T
                  en="200 slots filled in one day"
                  id="200 slot terisi dalam sehari"
                />
              </div>
            </div>
            <div style={metricCard}>
              <div style={metricVal}>15 min</div>
              <div style={metricLabel}>
                <T
                  en="Generate all event documents"
                  id="Generate semua berkas event"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CaseSection titleEn="Going international: the IANSEO integration" titleId="Melangkah internasional: integrasi IANSEO">
        <T
          en={<>Early 2024, we made a call: booking is the core. Not scoring, not marketplace. Booking. The registration flow from start to finish, seamless. That decision led to the first real test: Grand Triumph 2024, an international indoor archery championship in Yogyakarta. Over 1,000 participants. 161 teams from 8 countries: Indonesia, Thailand, Malaysia, Philippines, Singapore, India, South Korea, Canada. MyArchery handled registration and payment. IANSEO handled scoring. Two systems, one event, zero friction. The organizers didn't have to reconcile anything. Athletes registered, paid, got their target assignments. IANSEO picked up the data and ran the scoring. This was the proof: the platform can be the registration layer for any scoring system. Not just ours. The world uses IANSEO. Now we plug into it.</>}
          id={<>Awal 2024, kami putuskan: booking adalah inti. Bukan skoring, bukan marketplace. Booking. Alur registrasi dari awal sampai akhir, seamless. Keputusan itu langsung diuji: Grand Triumph 2024, kejuaraan panahan indoor internasional di Yogyakarta. Lebih dari 1.000 peserta. 161 tim dari 8 negara: Indonesia, Thailand, Malaysia, Filipina, Singapura, India, Korea Selatan, Kanada. MyArchery urus registrasi dan pembayaran. IANSEO urus skoring. Dua sistem, satu event, nol gesekan. Penyelenggara tidak perlu merekonsiliasi apa pun. Atlet daftar, bayar, dapat bantalan. IANSEO ambil data dan jalankan skoring. Ini buktinya: platform bisa jadi lapisan registrasi untuk sistem skoring apa pun. Bukan cuma milik kita. Dunia pakai IANSEO. Sekarang kami colok ke sana.</>}
        />
      </CaseSection>

      <section style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(28px,4vh,44px) clamp(20px,4vw,56px) 0' }}>
        <Reveal index={0}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="https://grandtriumph.id/"
              target="_blank"
              rel="noopener noreferrer"
              style={ctaBtnBlue}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#3A9BDC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#5BB5F0';
              }}
            >
              <T en="Grand Triumph 2024 ↗" id="Grand Triumph 2024 ↗" />
            </a>
            <a
              href="https://ianseo.net/Details.php?toId=19090"
              target="_blank"
              rel="noopener noreferrer"
              style={ctaBtnDark}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1d1c1a';
              }}
            >
              <T en="Results on IANSEO ↗" id="Hasil di IANSEO ↗" />
            </a>
          </div>
        </Reveal>
      </section>

      <section style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0' }}>
        <Reveal index={0}>
          <h2 style={sectionTitle}>
            <T en="Achievements" id="Pencapaian" />
          </h2>
          <p style={sectionSecondary}>
            <T
              en="The numbers that validated the thesis. Not projections. Actual results from real events."
              id="Angka yang memvalidasi tesisnya. Bukan proyeksi. Hasil nyata dari event nyata."
            />
          </p>
        </Reveal>

        <Reveal index={1}>
          <div style={metricGrid}>
            <div style={metricCard}>
              <div style={metricVal}>$267K</div>
              <div style={metricLabel}>
                <T en="Platform valuation" id="Valuasi platform" />
              </div>
            </div>
            <div style={metricCard}>
              <div style={metricVal}>4,205</div>
              <div style={metricLabel}>
                <T en="Active athletes in database" id="Atlet aktif di database" />
              </div>
            </div>
            <div style={metricCard}>
              <div style={metricVal}>21,000+</div>
              <div style={metricLabel}>
                <T en="Transactions processed" id="Transaksi diproses" />
              </div>
            </div>
            <div style={metricCard}>
              <div style={metricVal}>39</div>
              <div style={metricLabel}>
                <T en="Events run end-to-end" id="Event dijalankan end-to-end" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal index={2}>
          <div style={{ marginTop: 24, display: 'grid', gap: 12 }}>
            <AchievementRow
              num="01"
              titleEn="First platform in its category"
              titleId="Platform pertama di kategorinya"
              bodyEn="1st to market for digital archery event management in Indonesia. 100 percent made in Indonesia. No foreign competitor existed in this niche."
              bodyId="Pertama di pasar untuk manajemen event panahan digital di Indonesia. 100 persen made in Indonesia. Tidak ada kompetitor asing di niche ini."
            />
            <AchievementRow
              num="02"
              titleEn="Exclusive government collaborations"
              titleId="Kolaborasi pemerintah eksklusif"
              bodyEn="Exclusive partnerships with Pemprov DKI Jakarta (2022) and Pengprov Jawa Barat (2023). Two of the most active archery provinces run their events exclusively on MyArchery."
              bodyId="Kemitraan eksklusif dengan Pemprov DKI Jakarta (2022) dan Pengprov Jawa Barat (2023). Dua provinsi panahan paling aktif menjalankan event mereka eksklusif di MyArchery."
            />
            <AchievementRow
              num="03"
              titleEn="International scale proven"
              titleId="Terbukti skala internasional"
              bodyEn="Grand Triumph 2024: 1,000+ participants, 161 teams, 8 countries. MyArchery handled registration and payment for an event of global caliber."
              bodyId="Grand Triumph 2024: 1.000+ peserta, 161 tim, 8 negara. MyArchery menangani registrasi dan pembayaran untuk event berkaliber global."
            />
            <AchievementRow
              num="04"
              titleEn="Operational impact that organizers feel"
              titleId="Dampak operasional yang dirasakan penyelenggara"
              bodyEn="99 percent score accuracy. Event documents generated in under 15 minutes. 200 registration slots filled in 24 hours. Paperless, real-time, accessible from anywhere."
              bodyId="99 persen akurasi skor. Dokumen event selesai dalam 15 menit. 200 slot registrasi terisi dalam 24 jam. Paperless, real-time, bisa diakses dari mana saja."
            />
            <AchievementRow
              num="05"
              titleEn="National athlete database built from scratch"
              titleId="Database atlet nasional dibangun dari nol"
              bodyEn="4,205 active athletes, 234 officials, across 27 provinces. Five bow categories, four divisions. The largest digital archery database in Indonesia, built event by event."
              bodyId="4.205 atlet aktif, 234 official, di 27 provinsi. Lima kategori busur, empat divisi. Database panahan digital terbesar di Indonesia, dibangun event demi event."
            />
          </div>
        </Reveal>
      </section>

      <CaseSection titleEn="Business model" titleId="Model bisnis">
        <T
          en={<>Four revenue pillars. <strong>Commissions</strong>: 5 to 10 percent per transaction. <strong>Subscriptions</strong>: five to twenty dollars monthly for premium features. <strong>Sponsorship</strong>: brand and equipment vendor partnerships. <strong>Advertising</strong>: paid listings for users. The split is 90 percent to event organizers, 10 percent to MyArchery. GMV has crossed Rp 1.7 billion. The platform works, the users pay, and the growth is organic. No ads, no sales team.</>}
          id={<>Empat pilar revenue. <strong>Komisi</strong>: 5 sampai 10 persen per transaksi. <strong>Subscription</strong>: lima sampai dua puluh dolar bulanan untuk fitur premium. <strong>Sponsorship</strong>: kemitraan merek dan vendor peralatan. <strong>Iklan</strong>: listing berbayar untuk pengguna. Pembagiannya 90 persen ke penyelenggara event, 10 persen ke MyArchery. GMV sudah tembus Rp 1,7 miliar. Platformnya berfungsi, usernya bayar, dan pertumbuhannya organik. Tanpa iklan, tanpa tim sales.</>}
        />
      </CaseSection>

      {/* Future roadmap */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0' }}>
        <Reveal index={0}>
          <h2 style={sectionTitle}>
            <T en="What's next" id="Selanjutnya" />
          </h2>
          <p style={sectionSecondary}>
            <T
              en="Four expansion pillars in the pipeline. We accelerated from a 5-year plan to 2-year delivery. Whether that timeline holds depends on funding."
              id="Empat pilar ekspansi yang sedang dikerjakan. Kami percepat dari rencana 5 tahun menjadi 2 tahun. Apakah timeline itu bertahan, tergantung pendanaan."
            />
          </p>
        </Reveal>
        <div style={{ display: 'grid', gap: 12, marginTop: 24 }}>
          {futureModules.map((m, i) => (
            <Reveal key={m.num} index={i}>
              <FutureRow module={m} />
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0' }}>
        <Reveal index={1}>
          <div style={contactCard}>
            <p style={contactIntro}>
              <T
                en="Want to run your event on MyArchery? Or partner, sponsor, invest? Visit the platform or get in touch. No deck, just a conversation."
                id="Mau jalankan event di MyArchery? Atau jadi partner, sponsor, investor? Kunjungi platform atau hubungi kami. Tanpa deck, cukup ngobrol."
              />
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="https://myarchery.id"
                target="_blank"
                rel="noopener noreferrer"
                style={ctaBtnHeaderBlue}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0a3a82';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0d47a3';
                }}
              >
                myarchery.id ↗
              </a>
            </div>
            <p style={contactMuted}>
              <T
                en="Powered by Reka Cipta Digital. Jakarta, Indonesia."
                id="Didukung oleh Reka Cipta Digital. Jakarta, Indonesia."
              />
            </p>
          </div>
        </Reveal>
      </section>

      <CaseQuote
        en="The strongest product insight comes from being your own most demanding user."
        id="Insight produk terkuat datang dari menjadi pengguna paling menuntut atas produkmu sendiri."
        accentColor="#0d47a3"
      />

      <CaseFooter
        prev={{ href: '/case/pro-archery', en: 'Prev: Pro Archery', id: 'Sebelumnya: Pro Archery' }}
        next={{ href: '/case/opencode', en: 'Next: OpenCode for Copilot Chat', id: 'Berikutnya: OpenCode for Copilot Chat' }}
      />
    </div>
  );
}

function DemoRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={demoRow}>
      <span>{label}</span>
      <span style={demoVal}>{value}</span>
    </div>
  );
}

function AchievementRow({
  num,
  titleEn,
  titleId,
  bodyEn,
  bodyId,
}: {
  num: string;
  titleEn: string;
  titleId: string;
  bodyEn: string;
  bodyId: string;
}) {
  return (
    <div style={futureRowBox}>
      <span style={futureNum}>{num}</span>
      <div>
        <strong style={{ fontSize: 16 }}>
          <T en={titleEn} id={titleId} />
        </strong>
        <p style={{ margin: '4px 0 0', fontSize: '14.5px', lineHeight: 1.7, color: 'rgba(29,28,26,0.62)' }}>
          <T en={bodyEn} id={bodyId} />
        </p>
      </div>
    </div>
  );
}

function FeatureCard({
  num,
  titleEn,
  titleId,
  bodyEn,
  bodyId,
  mediaSrc,
  mediaAlt,
  mediaCaptionEn,
  mediaCaptionId,
  emphasize = false,
}: {
  num: string;
  titleEn: string;
  titleId: string;
  bodyEn: string;
  bodyId: string;
  mediaSrc?: string;
  mediaAlt?: string;
  mediaCaptionEn?: string;
  mediaCaptionId?: string;
  emphasize?: boolean;
}) {
  return (
    <div style={{ ...featureCardBox, ...(emphasize ? featureCardBoxEmphasis : null) }}>
      <div style={featureCardHeader}>
        <span style={featureNum}>{num}</span>
        <strong style={{ fontSize: 16 }}>
          <T en={titleEn} id={titleId} />
        </strong>
      </div>
      <p style={{ margin: '8px 0 0', fontSize: '14.5px', lineHeight: 1.7, color: 'rgba(29,28,26,0.62)' }}>
        <T en={bodyEn} id={bodyId} />
      </p>
      {mediaSrc && mediaAlt && mediaCaptionEn && mediaCaptionId ? (
        <figure style={featureCardMediaFigure}>
          <Image src={mediaSrc} alt={mediaAlt} width={2048} height={1136} style={inlineMediaImage} />
          <figcaption style={inlineMediaCaptionLight}>
            <T en={mediaCaptionEn} id={mediaCaptionId} />
          </figcaption>
        </figure>
      ) : null}
    </div>
  );
}

function FutureRow({
  module,
}: {
  module: (typeof futureModules)[number];
}) {
  return (
    <div style={futureRowBox}>
      <span style={futureNum}>{module.num}</span>
      <div>
        <strong style={{ fontSize: 16 }}>
          <T en={module.titleEn} id={module.titleId} />
        </strong>
        <p style={{ margin: '4px 0 0', fontSize: '14.5px', lineHeight: 1.7, color: 'rgba(29,28,26,0.62)' }}>
          <T en={module.bodyEn} id={module.bodyId} />
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
  color: '#ffffff',
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
  color: 'rgba(232,241,255,0.84)',
  animation: 'ltm-rise 0.9s var(--ease) 0.25s both',
};

const headerTopRow: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: 22,
};

const headerLogoBlock: React.CSSProperties = {
  background: '#ffffff',
  borderRadius: 16,
  padding: '14px clamp(14px,1.8vw,22px)',
  border: '1px solid rgba(255,255,255,0.62)',
  boxShadow: '0 10px 28px rgba(1, 18, 52, 0.3)',
};

const headerLogo: React.CSSProperties = {
  width: 'clamp(270px,40vw,620px)',
  height: 'auto',
  objectFit: 'contain',
  filter: 'drop-shadow(0 10px 24px rgba(2, 12, 30, 0.45))',
  opacity: 1,
};

const inlineMediaSection: React.CSSProperties = {
  maxWidth: 980,
  margin: '0 auto',
  padding: 'clamp(24px,4vh,42px) clamp(20px,4vw,56px) 0',
};

const inlineMediaSectionLight: React.CSSProperties = {
  maxWidth: 980,
  margin: '0 auto',
  padding: 'clamp(20px,3vh,36px) clamp(20px,4vw,56px) 0',
};

const inlineMediaFigureDark: React.CSSProperties = {
  margin: 0,
  borderRadius: 16,
  overflow: 'hidden',
  border: '1px solid rgba(171, 209, 255, 0.28)',
  background: 'rgba(7, 28, 60, 0.72)',
  boxShadow: '0 16px 42px rgba(4, 18, 42, 0.34)',
};

const inlineMediaFigureLight: React.CSSProperties = {
  margin: 0,
  borderRadius: 16,
  overflow: 'hidden',
  border: '1px solid rgba(29,28,26,0.1)',
  background: 'var(--paper)',
};

const inlineMediaImage: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  display: 'block',
};

const inlineMediaCaptionDark: React.CSSProperties = {
  margin: 0,
  padding: '11px 14px',
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 11,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'rgba(221, 235, 255, 0.78)',
};

const inlineMediaCaptionLight: React.CSSProperties = {
  margin: 0,
  padding: '11px 14px',
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 11,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'rgba(29,28,26,0.56)',
};

const posterInlineGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: 12,
  marginTop: 12,
};

const posterInlineCard: React.CSSProperties = {
  margin: 0,
  borderRadius: 14,
  overflow: 'hidden',
  border: '1px solid rgba(29,28,26,0.1)',
  background: 'var(--paper)',
};

const inlineFeatureImageGrid: React.CSSProperties = {
  marginTop: 14,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: 12,
};

const storeBadgeRow: React.CSSProperties = {
  marginTop: 12,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  alignItems: 'center',
  justifyContent: 'center',
};

const storeBadgeLink: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 150,
  height: 46,
  borderRadius: 10,
  textDecoration: 'none',
};

const storeBadgeImage: React.CSSProperties = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
};

const builtInsideSportGrid: React.CSSProperties = {
  marginTop: 16,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: 12,
};

const logoStripGrid: React.CSSProperties = {
  marginTop: 12,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
  gap: 10,
};

const logoStripCard: React.CSSProperties = {
  margin: 0,
  borderRadius: 12,
  border: '1px solid rgba(29,28,26,0.1)',
  background: 'var(--paper)',
  minHeight: 110,
  padding: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const logoStripImage: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  maxWidth: 90,
  maxHeight: 90,
};

const sectionTitle: React.CSSProperties = {
  margin: '0 0 16px',
  fontFamily: 'var(--font-instrument), serif',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: 'clamp(30px,3.6vw,44px)',
};

const sectionSecondary: React.CSSProperties = {
  margin: 0,
  fontSize: 17,
  lineHeight: 1.8,
  color: 'rgba(29,28,26,0.72)',
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

const ctaBtnBlue: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  background: '#5BB5F0',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: 15,
  padding: '14px 26px',
  borderRadius: 99,
  transition: 'background .25s',
};

const ctaBtnHeaderBlue: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  background: '#0d47a3',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: 15,
  padding: '14px 26px',
  borderRadius: 99,
  transition: 'background .25s',
};

const ctaBtnDark: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  background: '#1d1c1a',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: 15,
  padding: '14px 26px',
  borderRadius: 99,
  transition: 'background .25s',
};

/* Release timeline */
const releaseRow: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '100px 1fr',
  gap: 16,
  padding: '12px 16px',
  background: 'var(--paper)',
  border: '1px solid rgba(29,28,26,0.1)',
  borderRadius: 12,
  alignItems: 'baseline',
};

const releasePeriod: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 12.5,
  fontWeight: 700,
  color: 'var(--accent)',
  whiteSpace: 'nowrap',
};

const releaseDesc: React.CSSProperties = {
  fontSize: 14.5,
  lineHeight: 1.6,
  color: 'rgba(29,28,26,0.72)',
};

/* Demographic cards */
const demographicCard: React.CSSProperties = {
  background: 'var(--paper)',
  border: '1px solid rgba(29,28,26,0.1)',
  borderRadius: 16,
  padding: 20,
};

const demoLabel: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 11.5,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'rgba(29,28,26,0.45)',
  marginBottom: 14,
};

const demoList: React.CSSProperties = {
  display: 'grid',
  gap: 8,
};

const demoRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 14.5,
  lineHeight: 1.5,
  color: 'rgba(29,28,26,0.72)',
};

const demoVal: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontWeight: 700,
  fontSize: 13,
  color: 'var(--accent)',
};

/* Metric cards */
const metricGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: 12,
};

const metricCard: React.CSSProperties = {
  background: 'var(--paper)',
  border: '1px solid rgba(29,28,26,0.1)',
  borderRadius: 16,
  padding: 22,
  textAlign: 'center',
};

const metricVal: React.CSSProperties = {
  fontWeight: 900,
  fontSize: 32,
  letterSpacing: '-0.03em',
  color: 'var(--accent)',
};

const metricLabel: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 11,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  color: 'rgba(29,28,26,0.5)',
  marginTop: 6,
};

/* Future roadmap */
const futureRowBox: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '44px 1fr',
  gap: 16,
  padding: '20px 22px',
  border: '1.5px solid rgba(29,28,26,0.14)',
  borderRadius: 16,
  background: 'var(--paper)',
  alignItems: 'baseline',
};

const futureNum: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 18,
  color: 'var(--accent)',
  fontFamily: 'var(--font-jetbrains), monospace',
};

/* Feature showcase */
const featureGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: 12,
  marginTop: 24,
};

const featureCardBox: React.CSSProperties = {
  background: 'var(--paper)',
  border: '1px solid rgba(29,28,26,0.1)',
  borderRadius: 16,
  padding: '20px 22px',
};

const featureCardBoxEmphasis: React.CSSProperties = {
  gridColumn: '1 / -1',
};

const featureCardMediaFigure: React.CSSProperties = {
  margin: '14px 0 0',
  borderRadius: 12,
  overflow: 'hidden',
  border: '1px solid rgba(29,28,26,0.1)',
  background: 'var(--paper)',
};

const featureCardHeader: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
};

const featureNum: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 14,
  color: 'var(--accent)',
  fontFamily: 'var(--font-jetbrains), monospace',
  minWidth: 28,
};

/* Contact card */
const contactCard: React.CSSProperties = {
  background: 'color-mix(in oklab, #0d47a3 9%, var(--bg))',
  border: '1.5px solid #0d47a3',
  borderRadius: 20,
  padding: '40px 32px',
  textAlign: 'center',
};

const contactIntro: React.CSSProperties = {
  fontSize: 18,
  lineHeight: 1.7,
  color: 'rgba(29,28,26,0.72)',
  maxWidth: 520,
  margin: '0 auto 24px',
};

const contactMuted: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 12,
  color: 'rgba(29,28,26,0.45)',
  margin: '20px 0 0',
};
