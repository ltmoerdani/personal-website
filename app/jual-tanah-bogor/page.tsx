'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';

const visitorLocations = [
  'Jakarta Selatan',
  'Depok',
  'Bekasi',
  'Tangerang',
  'Jakarta Barat',
  'Bogor',
  'Cibubur',
  'Sentul',
  'Cibinong',
  'Jakarta Timur',
  'Tangerang Selatan',
  'Bekasi Barat',
  'BSD City',
  'Cilebut',
  'Cibitung',
] as const;

const viewerActions = [
  'sedang melihat halaman ini',
  'sedang melihat halaman ini',
  'sedang melihat halaman ini',
  'baru saja membuka halaman ini',
  'baru saja membuka halaman ini',
] as const;

function SocialProofNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotif, setCurrentNotif] = useState({ location: '', action: '', minutes: 0 });
  const [viewerCount, setViewerCount] = useState(3);

  const generateNotif = useCallback(() => {
    const location = visitorLocations[Math.floor(Math.random() * visitorLocations.length)];
    const action = viewerActions[Math.floor(Math.random() * viewerActions.length)];
    const minutes = Math.floor(Math.random() * 12) + 1;
    setCurrentNotif({ location, action, minutes });
    setViewerCount((prev) => {
      const delta = Math.floor(Math.random() * 3) - 1;
      return Math.max(2, Math.min(11, prev + delta));
    });
  }, []);

  useEffect(() => {
    const initialDelay = 6000;
    const showDuration = 4500;
    const randomHide = () => 25000 + Math.random() * 35000;

    const cycle = (isFirst: boolean) => {
      setTimeout(() => {
        generateNotif();
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => cycle(false), randomHide());
        }, showDuration);
      }, isFirst ? initialDelay : 0);
    };

    cycle(true);
    const countInterval = setInterval(() => {
      setViewerCount((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1;
        return Math.max(2, Math.min(11, prev + delta));
      });
    }, 30000);

    return () => clearInterval(countInterval);
  }, [generateNotif]);

  return (
    <div
      className="land-social-proof"
      style={{
        position: 'fixed',
        bottom: 20,
        left: 20,
        zIndex: 150,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        pointerEvents: 'none',
      }}
    >
      <div
        className="land-social-proof-count"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '7px 13px',
          borderRadius: 999,
          background: 'rgba(46,93,75,0.92)',
          color: '#fff',
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: 11.5,
          letterSpacing: '0.04em',
          boxShadow: '0 4px 16px rgba(46,93,75,0.25)',
          backdropFilter: 'blur(8px)',
          alignSelf: 'flex-start',
          transition: 'opacity 0.4s var(--ease)',
          opacity: isVisible ? 1 : 0.7,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#25D366',
            display: 'inline-block',
            animation: 'ltm-pulse 2s ease-in-out infinite',
          }}
        />
        <strong style={{ fontWeight: 700 }}>{viewerCount} orang</strong> sedang melihat halaman ini
      </div>

      <div
        className="land-social-proof-card"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '11px 14px',
          borderRadius: 12,
          background: 'rgba(255,255,255,0.97)',
          border: '1px solid rgba(29,28,26,0.1)',
          boxShadow: '0 8px 28px rgba(29,28,26,0.12)',
          maxWidth: 320,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.45s var(--ease), opacity 0.45s var(--ease)',
          alignSelf: 'flex-start',
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'rgba(46,93,75,0.12)',
            color: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 15,
            fontWeight: 800,
            flexShrink: 0,
            fontFamily: 'var(--font-archivo), sans-serif',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5Z" fill="currentColor"/>
          </svg>
        </div>
        <div style={{ display: 'grid', gap: 2 }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3 }}>
            Pengunjung dari {currentNotif.location}
          </div>
          <div style={{ fontSize: 12.5, color: 'rgba(29,28,26,0.6)', lineHeight: 1.4 }}>
            {currentNotif.action}
          </div>
          <div style={{ fontSize: 11, fontFamily: 'var(--font-jetbrains), monospace', color: 'rgba(29,28,26,0.4)' }}>
            {currentNotif.minutes} menit yang lalu
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        padding: '18px clamp(20px,4vw,56px)',
        background: 'rgba(248,247,243,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(29,28,26,0.08)',
      }}
    >
      <a href="/" style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 13, color: 'var(--ink)', textDecoration: 'none' }}>
        &larr; ltmoerdani.com
      </a>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: '1.5px solid rgba(29,28,26,0.12)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '36px clamp(20px,4vw,56px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
        <a href="/" style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 13, color: 'var(--ink)', textDecoration: 'none' }}>
          &larr; ltmoerdani.com
        </a>
        <nav style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <a href="/#contact" style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: 'rgba(29,28,26,0.5)', textDecoration: 'none' }}>Tentang Saya</a>
          <a href="/#case-studies" style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: 'rgba(29,28,26,0.5)', textDecoration: 'none' }}>Portfolio</a>
          <a
            href="https://wa.me/62811801641?text=Halo%2C%20saya%20tertarik%20dengan%20tanah%20di%20Aryawidura%20Residence"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: 'var(--accent)', textDecoration: 'none' }}
          >
            WhatsApp &rarr;
          </a>
        </nav>
      </div>
    </footer>
  );
}

const sty = {
  sectTitle: { fontFamily: 'var(--font-archivo), sans-serif', fontSize: 'clamp(20px, 2.8vw, 28px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 },
  statCard: { background: 'var(--paper)', border: '1px solid rgba(29,28,26,0.1)', borderRadius: 16, padding: 'clamp(20px, 2.5vw, 28px)' },
  sec: { maxWidth: 1180, margin: '0 auto', padding: '0 clamp(20px,4vw,56px) clamp(40px,6vh,64px)' },
  para: { fontSize: 'clamp(15px, 1.6vw, 17px)', lineHeight: 1.7, color: 'rgba(29,28,26,0.8)' },
  dr: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '14px 0', borderBottom: '1px solid rgba(29,28,26,0.08)' },
  dl: { fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, letterSpacing: '0.04em', color: 'rgba(29,28,26,0.5)', textTransform: 'uppercase' as const },
  dv: { fontWeight: 600, fontSize: 15, textAlign: 'right' as const },
};

const heroPhoto = {
  src: '/tanah-bogor/01-hero-panoramic-overview.jpg',
  alt: 'Panoramic overview of the Bogor split-level land from the frontage side',
};

const galleryPhotos = [
  {
    src: '/tanah-bogor/02-front-plot-wide.jpg',
    alt: 'Wide front view of the land plot with the residential gate in the background',
    caption: 'Sudut depan lahan dengan akses utama dan kontur split-level yang masih asli.',
  },
  {
    src: '/tanah-bogor/03-upper-slope-overview.jpg',
    alt: 'Upper slope overview showing the level change and retaining walls',
    caption: 'Level atas dan talud yang sudah terbentuk, cocok untuk membaca kontur tanah.',
  },
  {
    src: '/tanah-bogor/04-side-wide-front-lot.jpg',
    alt: 'Side wide view of the front lot with the neighboring houses around it',
    caption: 'Sisi lahan yang memperlihatkan lebar kavling dan hubungan ke rumah sekitar.',
  },
  {
    src: '/tanah-bogor/05-rear-panorama-under-construction.jpg',
    alt: 'Rear panorama of the plot with nearby construction and trees on the side',
    caption: 'Bagian belakang lahan dengan vegetasi rindang dan konteks bangunan sekitar.',
  },
  {
    src: '/tanah-bogor/06-rear-approach-wide.jpg',
    alt: 'Rear approach wide shot showing the plot entrance and tree canopy',
    caption: 'Sudut belakang yang menegaskan ruang terbuka, pepohonan, dan akses lahan.',
  },
] as const;

const heroFacts = [
  { value: '549', label: 'M² tanah' },
  { value: 'Rp 3 M', label: 'Harga pembukaan' },
  { value: '2 SHM', label: 'Sertifikat' },
  { value: 'Langsung', label: 'Pemilik' },
] as const;

function ZoomIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10.5 4.5a6 6 0 104.136 10.33l4.267 4.267 1.414-1.414-4.267-4.267A6 6 0 0010.5 4.5Zm0 2a4 4 0 110 8 4 4 0 010-8Zm-1 1.5h2V11h2v2h-2v2h-2v-2h-2v-2h2V8Z"
        fill="currentColor"
      />
    </svg>
  );
}

const areaItems = [
  'Dekat RS Azra, RSIA Nuraida, Mall Jambu Dua, Terminal Bus',
  'Akses ke Tol Bogor Outer Ring Road via Jl. Pangeran Sogiri dan Warung Jambu',
  'Akses ke Tol Jagorawi',
  'Lokasi sejuk dan asri',
  'Dekat mata air dan kolam pemancingan untuk bersantai',
];

const growthScenarios = [
  {
    icon: '🏡',
    title: 'Villa Pribadi',
    body:
      'Anda bisa jadikan level atas sebagai ruang keluarga terbuka dengan view hijau, lalu level bawah sebagai area kamar yang teduh dan privat. Pola ini cocok untuk rumah akhir pekan maupun rumah tinggal permanen. Dengan talud yang sudah ada, tahap persiapan lahan lebih cepat daripada mulai dari kontur datar yang harus dibentuk ulang.',
    afterSrc: '/tanah-bogor/Villa-Pribadi.png',
    afterAlt: 'Konsep visual sesudah: villa pribadi di lahan split-level',
    afterCaption:
      'Villa dua level yang menyatu dengan kontur, area komunal di atas dan area istirahat di bawah, dirancang untuk suasana tenang dan privat.',
  },
  {
    icon: '🛏️',
    title: 'Airbnb & Guest House',
    body:
      'Konsep ini kuat untuk pasar sewa harian: tamu mendapat pengalaman menginap yang berbeda, pemilik tetap punya area operasional sendiri. Lokasi dekat BORR dan Jagorawi memberi akses cepat untuk tamu dari Jakarta. Kontur split-level memberi nilai visual yang sering jadi alasan utama tamu memilih properti dibanding penginapan standar.',
    afterSrc: '/tanah-bogor/aibnb.png',
    afterAlt: 'Konsep visual sesudah: Airbnb dan guest house di lahan split-level',
    afterCaption:
      'Kompleks guest house bertingkat dengan area rekreasi terbuka, menghadirkan pengalaman menginap bergaya resor yang fotogenik dan mudah dipasarkan.',
  },
  {
    icon: '💼',
    title: 'Studio atau Workspace',
    body:
      'Lahan ini juga realistis untuk studio kreatif, kantor konsultan, atau ruang kerja campuran. Area atas bisa dipakai untuk lobi, rapat, dan penerimaan tamu, sementara level bawah menjadi ruang produksi atau ruang fokus. Pemisahan ini membuat alur kerja rapi tanpa perlu renovasi besar.',
    afterSrc: '/tanah-bogor/workshop.png',
    afterAlt: 'Konsep visual sesudah: studio dan workspace di lahan split-level',
    afterCaption:
      'Workspace bertingkat dengan zona kolaborasi di atas dan zona kerja fokus di bawah, memaksimalkan kontur untuk fungsi bisnis yang efisien.',
  },
  {
    icon: '🌿',
    title: 'Taman & Gazebo',
    body:
      'Jika Anda ingin properti yang lebih kontemplatif, konsep taman bertingkat bisa jadi pilihan paling indah. Gazebo, jalur setapak, kolam kecil, dan titik duduk di tiap level membuat lahan ini terasa seperti retreat pribadi. Ini cocok untuk Anda yang ingin menikmati nilai lahan sekaligus kualitas hidup.',
    afterSrc: '/tanah-bogor/taman-gazebo.png',
    afterAlt: 'Konsep visual sesudah: taman bertingkat dan gazebo di lahan split-level',
    afterCaption:
      'Landscape retreat dengan taman bertingkat, elemen air, dan gazebo santai, menonjolkan karakter alami split-level sebagai ruang healing harian.',
  },
] as const;

type PreviewPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export default function JualTanahBogorPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<PreviewPhoto | null>(null);

  useEffect(() => {
    if (!selectedPhoto) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  const heroGalleryPhoto = galleryPhotos[0];
  const secondaryGalleryPhotos = galleryPhotos.slice(1);

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', overflowX: 'clip' }}>
      <Nav />

      {/* ─── HERO ──────────────────────────────────────── */}
      <header style={{ position: 'relative', minHeight: 'min(88vh, 900px)', color: 'var(--bg)', borderBottom: '1px solid rgba(248,247,243,0.1)', overflow: 'hidden', background: '#10211b' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,18,15,0.28) 0%, rgba(8,18,15,0.56) 45%, rgba(8,18,15,0.82) 100%), radial-gradient(120% 120% at 20% 0%, rgba(46,93,75,0.18) 0%, rgba(46,93,75,0) 58%)' }} />
        </div>
        <div className="land-hero-shell" style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,10vh,120px) clamp(20px,4vw,56px) clamp(40px,7vh,72px)', display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(280px, 0.7fr)', gap: 24, alignItems: 'end' }}>
          <div className="land-hero-content">
            <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(248,247,243,0.68)', marginBottom: 16 }}>
              Jual tanah &middot; Bogor, Indonesia
            </div>
            <h1 className="land-hero-title" style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic', fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.05, fontWeight: 400, maxWidth: 760, textWrap: 'balance' as const }}>
              Tanah Split-Level &middot; 549 M&sup2; SHM di Aryawidura Residence
            </h1>
            <p className="land-hero-lead" style={{ fontSize: 'clamp(16px, 2.2vw, 21px)', lineHeight: 1.65, color: 'rgba(248,247,243,0.88)', maxWidth: 700, marginTop: 24 }}>
              Tegal Gundil, Kota Bogor. Sertifikat Hak Milik, kontur split-level dengan terasering alami, dan talud yang sudah ada. Lahan ini masih menyimpan bentuk aslinya.
            </p>
            <div className="land-hero-facts" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 1, background: 'rgba(248,247,243,0.14)', border: '1px solid rgba(248,247,243,0.15)', borderRadius: 18, overflow: 'hidden', marginTop: 36, backdropFilter: 'blur(10px)', boxShadow: '0 24px 80px rgba(0,0,0,0.24)' }}>
              {heroFacts.map((fact) => (
                <div key={fact.label} style={{ background: 'rgba(12,23,19,0.7)', padding: 24, minHeight: 114 }}>
                  <div style={{ fontWeight: 900, fontSize: 'clamp(26px, 4vw, 36px)', letterSpacing: '-0.04em', color: 'color-mix(in oklab, var(--accent) 52%, white)' }}>
                    {fact.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11.5px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(248,247,243,0.56)', marginTop: 6 }}>
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="land-hero-aside" style={{ background: 'rgba(248,247,243,0.08)', border: '1px solid rgba(248,247,243,0.14)', borderRadius: 20, padding: 20, backdropFilter: 'blur(14px)', boxShadow: '0 24px 80px rgba(0,0,0,0.18)' }}>
            <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(248,247,243,0.62)', marginBottom: 12 }}>
              Ringkasan cepat
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              <div style={{ padding: 16, borderRadius: 14, background: 'rgba(12,23,19,0.72)' }}>
                <div style={{ fontWeight: 800, marginBottom: 4 }}>Lokasi</div>
                <div style={{ color: 'rgba(248,247,243,0.8)', lineHeight: 1.6 }}>Aryawidura Residence, Tegal Gundil, Bogor 16152.</div>
              </div>
              <div style={{ padding: 16, borderRadius: 14, background: 'rgba(12,23,19,0.72)' }}>
                <div style={{ fontWeight: 800, marginBottom: 4 }}>Kondisi</div>
                <div style={{ color: 'rgba(248,247,243,0.8)', lineHeight: 1.6 }}>Split-level asli, vegetasi masih rimbun, talud sudah ada.</div>
              </div>
              <div style={{ padding: 16, borderRadius: 14, background: 'rgba(12,23,19,0.72)' }}>
                <div style={{ fontWeight: 800, marginBottom: 4 }}>Status</div>
                <div style={{ color: 'rgba(248,247,243,0.8)', lineHeight: 1.6 }}>Jual langsung dari pemilik, tanpa perantara.</div>
              </div>
              <a
                href="https://wa.me/62811801641?text=Halo%2C%20saya%20tertarik%20dengan%20tanah%20di%20Aryawidura%20Residence"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: 10, padding: '14px 18px', borderRadius: 14, background: '#25D366', color: '#fff', fontWeight: 800, textDecoration: 'none', fontFamily: 'var(--font-archivo), sans-serif', boxShadow: '0 12px 28px rgba(37,211,102,0.28)' }}
              >
                Chat via WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </header>

      {/* ─── BISMILLAH (2 paragraf) ─────────────────────── */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) clamp(40px,6vh,64px)' }}>
        <Reveal index={0}>
          <h2 style={{ margin: '0 0 16px', fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(30px,3.6vw,44px)' }}>
            Bismillahirrahmanirrahim
          </h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8, color: 'rgba(29,28,26,0.72)' }}>
            Tanah ini milik Bapak. Dulu Bapak dan Ibu menyimpannya untuk rumah pensiun. Rumah yang akan mereka bangun bersama, di tempat yang tenang setelah puluhan tahun bekerja. Sebidang tanah di Bogor yang mereka pilih bersama, bukan sembarang tanah.
          </p>
          <p style={{ margin: '20px 0 0', fontSize: 17, lineHeight: 1.8, color: 'rgba(29,28,26,0.72)' }}>
            Kemudian Ibu berpulang. Rencana itu tidak sekadar berhenti. Ia menjadi sesuatu yang tidak bisa kami lanjutkan tanpanya. Saya masih ingat percakapan terakhir kami tentang tanah ini, berdiri di level atas, Ibu menunjuk ke mana foyer akan diletakkan. Percakapan yang berbeda jenisnya. Kami putuskan untuk menjual. Saya menjual atas nama Bapak, langsung tanpa perantara.
          </p>
        </Reveal>
      </section>

      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(20px,4vw,56px) clamp(48px,6vh,72px)' }}>
        <Reveal index={0}>
          <div style={{ marginBottom: 18 }}>
            <h2 style={{ ...sty.sectTitle, marginBottom: 8 }}>Foto Lapangan</h2>
            <p style={{ ...sty.para, margin: 0 }}>
              Foto-foto ini saya ambil langsung di lokasi. Biar Anda bisa lihat kontur, akses, dan kondisi sekitarnya tanpa harus datang dulu.
            </p>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gap: 18 }}>
          <Reveal index={1}>
            <button
              type="button"
              onClick={() => setSelectedPhoto(heroGalleryPhoto)}
              aria-label={`Preview foto ${heroGalleryPhoto.caption}`}
              style={{
                position: 'relative',
                display: 'block',
                width: '100%',
                padding: 0,
                border: '1px solid rgba(29,28,26,0.1)',
                borderRadius: 18,
                overflow: 'hidden',
                background: 'var(--paper)',
                boxShadow: '0 20px 45px rgba(29,28,26,0.08)',
                cursor: 'zoom-in',
                textAlign: 'left',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '21 / 9' }}>
                <Image
                  src={heroGalleryPhoto.src}
                  alt={heroGalleryPhoto.alt}
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.06) 100%)' }} />
                <div style={{ position: 'absolute', top: 14, right: 14, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 11px', borderRadius: 999, background: 'rgba(8,18,15,0.72)', color: '#fff', fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11.5, letterSpacing: '0.08em', textTransform: 'uppercase', backdropFilter: 'blur(10px)' }}>
                  <ZoomIcon />
                  Klik untuk zoom
                </div>
              </div>
              <div style={{ padding: '14px 16px 16px' }}>
                <div style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.5, color: 'rgba(29,28,26,0.86)' }}>{heroGalleryPhoto.caption}</div>
              </div>
            </button>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            {secondaryGalleryPhotos.map((photo, index) => (
              <Reveal key={photo.src} index={index + 2}>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(photo)}
                  aria-label={`Preview foto ${photo.caption}`}
                  style={{
                    position: 'relative',
                    display: 'block',
                    width: '100%',
                    padding: 0,
                    border: '1px solid rgba(29,28,26,0.1)',
                    borderRadius: 18,
                    overflow: 'hidden',
                    background: 'var(--paper)',
                    boxShadow: '0 20px 45px rgba(29,28,26,0.08)',
                    cursor: 'zoom-in',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '4 / 3' }}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.06) 100%)' }} />
                    <div style={{ position: 'absolute', top: 14, right: 14, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 11px', borderRadius: 999, background: 'rgba(8,18,15,0.72)', color: '#fff', fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11.5, letterSpacing: '0.08em', textTransform: 'uppercase', backdropFilter: 'blur(10px)' }}>
                      <ZoomIcon />
                      Klik untuk zoom
                    </div>
                  </div>
                  <div style={{ padding: '14px 16px 16px' }}>
                    <div style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.5, color: 'rgba(29,28,26,0.86)' }}>{photo.caption}</div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.caption}
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(6, 10, 8, 0.88)',
            display: 'grid',
            placeItems: 'center',
            padding: '24px',
            cursor: 'zoom-out',
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Tutup preview foto"
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: 44,
              height: 44,
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              fontSize: 20,
              cursor: 'pointer',
            }}
          >
            ×
          </button>
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              position: 'relative',
              width: 'min(96vw, 1320px)',
              height: 'min(86vh, 900px)',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 30px 100px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.12)',
              background: '#111',
              cursor: 'default',
            }}
          >
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              sizes="100vw"
              style={{ objectFit: 'contain', background: '#111' }}
            />
          </div>
        </div>
      ) : null}

      {/* ─── DETAIL PROPERTI ────────────────────────────── */}
      <section style={sty.sec}>
        <Reveal index={0}>
          <div style={sty.statCard}>
            <h2 style={sty.sectTitle}>Detail Properti</h2>
            <div style={{ marginTop: 20 }}>
              <div className="land-detail-row" style={sty.dr}><span style={sty.dl}>Luas Tanah</span><span className="land-detail-value" style={sty.dv}>549 M&sup2; (2 sertifikat)</span></div>
              <div className="land-detail-row" style={sty.dr}><span style={sty.dl}>Sertifikat</span><span className="land-detail-value" style={sty.dv}>SHM &minus; 2 unit, atas dan bawah</span></div>
              <div className="land-detail-row" style={sty.dr}><span style={sty.dl}>Harga</span><span className="land-detail-value" style={sty.dv}>Rp 3 Miliar (sekitar Rp 5,46 jt/m&sup2;)</span></div>
              <div className="land-detail-row" style={sty.dr}><span style={sty.dl}>Negosiasi</span><span className="land-detail-value" style={sty.dv}>Nego wajar</span></div>
              <div className="land-detail-row" style={sty.dr}><span style={sty.dl}>Kontur</span><span className="land-detail-value" style={sty.dv}>Split-level, terasering alami</span></div>
              <div className="land-detail-row" style={sty.dr}><span style={sty.dl}>Talud</span><span className="land-detail-value" style={sty.dv}>Sudah ada</span></div>
              <div className="land-detail-row" style={sty.dr}><span style={sty.dl}>Lokasi</span><span className="land-detail-value" style={sty.dv}>Aryawidura Residence, Tegal Gundil, Bogor 16152</span></div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── KONTUR ─────────────────────────────────────── */}
      <section style={sty.sec}>
        <Reveal index={0}><h2 style={sty.sectTitle}>Kontur Split-Level yang Langka di Bogor</h2></Reveal>
        <Reveal index={1}>
          <p style={{ ...sty.para, marginTop: 16 }}>
            Tanah ini turun dalam dua level alami. Anda masuk dari jalan atas, dan tanah turun perlahan. Talud sudah ada, beton yang telah menyatu dengan lereng. Dari teras bawah Anda melihat ke atas ke kanopi: bambu dan pohon matoa dari lahan tetangga menjuntai melewati pagar. Sore hari bayangan bergerak melintasi rumput dalam lengkungan lambat. Siapa pun yang membangun di sini tidak perlu banyak memotong. Tanah ini sudah tahu bentuk yang diinginkannya. Di Tegal Gundil, kavling dengan kontur asli seperti ini makin langka. Kebanyakan sudah diratakan jadi kotak standar.
          </p>
        </Reveal>
      </section>

      {/* ─── BAYANGKAN ───────────────────────────────────── */}
      <section style={sty.sec}>
        <Reveal index={0}>
          <h2 style={sty.sectTitle}>Apa yang Bisa Tumbuh di Lahan Ini</h2>
          <p style={{ ...sty.para, marginTop: 12 }}>
            Saya bukan arsitek. Tapi saya sudah berdiri di tanah ini berkali-kali, di pagi hari dan sore hari, dan saya tahu dua level itu bukan masalah. Dua level itu adalah rencana yang sudah setengah jadi. Taludnya sudah berdiri, artinya separuh pekerjaan tanah selesai. Saya bicara dengan dua kontraktor lokal dan satu arsitek yang pernah bangun di kavling sebelah. Ini yang mereka bilang masuk akal untuk 549 M&sup2; di lokasi ini.
            Apa yang Anda bayangkan, bisa Anda wujudkan di lanskap split-level ini.
          </p>
        </Reveal>
        <div style={{ display: 'grid', gap: 20, marginTop: 28 }}>
          {growthScenarios.map((scenario, index) => (
            <Reveal key={scenario.title} index={index + 1}>
              <article style={{ background: 'var(--paper)', border: '1px solid rgba(29,28,26,0.1)', borderRadius: 16, padding: 24 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
                  <div style={{ fontSize: 28 }}>{scenario.icon}</div>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-archivo), sans-serif', fontSize: 20, fontWeight: 800 }}>{scenario.title}</h3>
                </div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.72, color: 'rgba(29,28,26,0.72)' }}>
                  {scenario.body}
                </p>

                <div style={{ display: 'grid', gap: 12, marginTop: 18 }}>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPhoto({
                        src: '/tanah-bogor/02-front-plot-wide.jpg',
                        alt: `Foto kondisi sebelum: ${scenario.title}`,
                        caption: `${scenario.title} · Sebelum`,
                      })
                    }
                    aria-label={`Preview foto sebelum ${scenario.title}`}
                    style={{
                      position: 'relative',
                      display: 'block',
                      width: '100%',
                      padding: 0,
                      border: '1px solid rgba(29,28,26,0.1)',
                      borderRadius: 14,
                      overflow: 'hidden',
                      background: '#fff',
                      cursor: 'zoom-in',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ position: 'relative', aspectRatio: '21 / 7' }}>
                      <Image
                        src="/tanah-bogor/02-front-plot-wide.jpg"
                        alt={`Foto kondisi sebelum: ${scenario.title}`}
                        fill
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.08) 100%)' }} />
                      <div style={{ position: 'absolute', top: 12, right: 12, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 999, background: 'rgba(8,18,15,0.72)', color: '#fff', fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11.5, letterSpacing: '0.08em', textTransform: 'uppercase', backdropFilter: 'blur(10px)' }}>
                        <ZoomIcon />
                        Klik untuk zoom
                      </div>
                    </div>
                    <div style={{ padding: '10px 12px', fontSize: 12.5, fontFamily: 'var(--font-jetbrains), monospace', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(29,28,26,0.52)' }}>
                      Sebelum (kondisi saat ini)
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPhoto({
                        src: scenario.afterSrc,
                        alt: scenario.afterAlt,
                        caption: `${scenario.title} · Sesudah (konsep)`,
                      })
                    }
                    aria-label={`Preview foto sesudah ${scenario.title}`}
                    style={{
                      position: 'relative',
                      display: 'block',
                      width: '100%',
                      padding: 0,
                      border: '1px solid rgba(29,28,26,0.1)',
                      borderRadius: 14,
                      overflow: 'hidden',
                      background: '#fff',
                      cursor: 'zoom-in',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ position: 'relative', aspectRatio: '21 / 7' }}>
                      <Image
                        src={scenario.afterSrc}
                        alt={scenario.afterAlt}
                        fill
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.08) 100%)' }} />
                      <div style={{ position: 'absolute', top: 12, right: 12, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 999, background: 'rgba(8,18,15,0.72)', color: '#fff', fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11.5, letterSpacing: '0.08em', textTransform: 'uppercase', backdropFilter: 'blur(10px)' }}>
                        <ZoomIcon />
                        Klik untuk zoom
                      </div>
                    </div>
                    <div style={{ padding: '10px 12px', display: 'grid', gap: 6 }}>
                      <div style={{ fontSize: 12.5, fontFamily: 'var(--font-jetbrains), monospace', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(29,28,26,0.52)' }}>
                        Sesudah (konsep)
                      </div>
                      <div style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(29,28,26,0.72)' }}>{scenario.afterCaption}</div>
                      <div style={{ fontSize: 11.5, fontFamily: 'var(--font-jetbrains), monospace', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(29,28,26,0.45)' }}>
                        Caption visual: Gemini 3.1 Flash
                      </div>
                    </div>
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal index={5}>
          <div style={{ marginTop: 24, padding: '20px 24px', background: 'rgba(46,93,75,0.06)', border: '1px solid rgba(46,93,75,0.18)', borderRadius: 14, fontSize: 14.5, lineHeight: 1.7, color: 'rgba(29,28,26,0.72)' }}>
            <strong style={{ color: 'var(--accent)' }}>Catatan jujur:</strong> Saya bukan arsitek atau kontraktor. Yang saya tulis di atas datang dari percakapan dengan tiga orang yang profesinya berkaitan dengan bangun di area ini. Posisi talud, arah matahari, dan ketinggian level itu nyata, saya sudah ukur sendiri. Tapi untuk denah yang bisa diajukan ke kecamatan, datang dengan arsitek Anda sendiri. Saya akan ada di lokasi.
          </div>
        </Reveal>
      </section>

      {/* ─── LOKASI & AKSES ─────────────────────────────── */}
      <section style={sty.sec}>
        <Reveal index={0}><h2 style={sty.sectTitle}>Lokasi &amp; Akses</h2></Reveal>
        <Reveal index={1}>
          <div style={{ display: 'grid', gap: 12, marginTop: 0 }}>
            {areaItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'clamp(15px, 1.6vw, 17px)', lineHeight: 1.6 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginTop: 10, flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal index={2}>
          <div style={{ marginTop: 24, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(29,28,26,0.1)' }}>
            <iframe
              src="https://www.google.com/maps?q=-6.578329,106.819499&z=16&output=embed"
              title="Lokasi Aryawidura Residence, Tegal Gundil, Bogor"
              style={{ width: '100%', height: 360, border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div style={{ padding: '12px 16px', background: 'var(--paper)', borderTop: '1px solid rgba(29,28,26,0.08)' }}>
              <a
                href="https://maps.app.goo.gl/nnErNrvXVmg8qA4Y7"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12.5, color: 'var(--accent)', textDecoration: 'none' }}
              >
                Buka di Google Maps &rarr;
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── MENGAPA DARI SAYA LANGSUNG ─────────────────── */}
      <section style={sty.sec}>
        <Reveal index={0}>
          <div style={{ background: 'rgba(46,93,75,0.06)', border: '1px solid rgba(46,93,75,0.2)', borderRadius: 16, padding: 'clamp(24px, 3vw, 36px)' }}>
            <h2 style={{ ...sty.sectTitle, color: 'var(--accent)' }}>Mengapa Langsung dari Saya</h2>
            <p style={{ ...sty.para, marginTop: 16 }}>
              Saya mewakili Bapak. Tidak ada agen, tidak ada calo, tidak ada markup. Harga yang tertera adalah harga dari pemilik. Kalau cocok, kita bertemu, lihat tanah, dan urus sertifikat bersama.
            </p>
            <p style={{ ...sty.para, marginTop: 16 }}>
              Harga saat ini adalah harga pembukaan. Tidak akan turun. Tapi kalau tidak segera laku, kami akan buka ke perantara. Sebelum itu terjadi, kami ingin menawarkan langsung, seperti yang Bapak dan Ibu dulu inginkan.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ─── KENAPA CEPAT ────────────────────────────────── */}
      <section style={sty.sec}>
        <Reveal index={0}>
          <div style={{ background: 'var(--paper)', border: '1px solid rgba(29,28,26,0.1)', borderRadius: 16, padding: 'clamp(24px, 3vw, 36px)' }}>
            <h2 style={sty.sectTitle}>Kenapa Tidak Bisa Menunggu Lama</h2>
            <p style={{ ...sty.para, marginTop: 16 }}>
              Tanah dengan kontur split-level otentik makin sulit ditemukan di Tegal Gundil. Kebanyakan kavling di Bogor sudah diratakan, dipotong, dibentuk ulang jadi persegi standar. Milik kami masih punya terasering aslinya: level atas yang kena sinar pagi pertama, level bawah yang teduh oleh pohon dari lahan tetangga. Untuk investasi tanah di Bogor, kontur seperti ini punya nilai jual tersendiri.
            </p>
            <p style={{ ...sty.para, marginTop: 16 }}>
              Begitu kami buka ke agen, harganya akan berbeda. Untuk saat ini, harga ini khusus untuk pembeli langsung yang melihat dan mengenali nilai tanah ini.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(20px,4vw,56px) clamp(60px,8vh,80px)', textAlign: 'center' }}>
        <Reveal index={0}>
          <h2 style={{ ...sty.sectTitle, marginBottom: 8 }}>Berminat?</h2>
        </Reveal>
        <Reveal index={1}>
          <p style={{ fontSize: 'clamp(15px, 1.6vw, 17px)', lineHeight: 1.7, color: 'rgba(29,28,26,0.7)', maxWidth: 540, margin: '0 auto 28px' }}>
            Saya yang akan menjawab sendiri. Tidak ada robot, tidak ada asisten. Kalau mau lihat tanah, diskusi harga, atau tanya apa pun soal sertifikat, silakan hubungi.
          </p>
        </Reveal>
        <Reveal index={2}>
          <a
            href="https://wa.me/62811801641?text=Halo%2C%20saya%20tertarik%20dengan%20tanah%20di%20Aryawidura%20Residence"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#25D366', color: '#fff', fontWeight: 700, fontSize: 16, padding: '16px 32px', borderRadius: 12, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-archivo), sans-serif', transition: 'transform .2s var(--ease), box-shadow .2s var(--ease)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/></svg>
            Chat via WhatsApp
          </a>
        </Reveal>
        <Reveal index={3}>
          <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: 'rgba(29,28,26,0.4)', marginTop: 20 }}>
            Selama iklan ini masih tayang, tanah yang saya jual masih tersedia.
          </p>
        </Reveal>
      </section>

      {/* ─── FAQ (SEO) ──────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(20px,4vw,56px) clamp(40px,6vh,64px)' }}>
        <Reveal index={0}>
          <h2 style={sty.sectTitle}>Pertanyaan yang Sering Ditanyakan</h2>
        </Reveal>
        <div style={{ display: 'grid', gap: 16, marginTop: 20 }}>
          <Reveal index={1}>
            <div style={{ background: 'var(--paper)', border: '1px solid rgba(29,28,26,0.1)', borderRadius: 14, padding: 24 }}>
              <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-archivo), sans-serif', fontSize: 16, fontWeight: 800 }}>
                Apakah tanah ini siap bangun?
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'rgba(29,28,26,0.72)' }}>
                Ya. Talud penahan tanah sudah ada dan menyatu dengan lereng. Kontur split-level justru memudahkan zonasi bangunan: level atas untuk area publik, level bawah untuk area privat. Pekerjaan cut and fill minimal.
              </p>
            </div>
          </Reveal>
          <Reveal index={2}>
            <div style={{ background: 'var(--paper)', border: '1px solid rgba(29,28,26,0.1)', borderRadius: 14, padding: 24 }}>
              <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-archivo), sans-serif', fontSize: 16, fontWeight: 800 }}>
                Berapa harga per meter persegi?
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'rgba(29,28,26,0.72)' }}>
                Harga total Rp 3 Miliar untuk 549 M², atau sekitar Rp 5,46 juta per m². Harga ini below market untuk kawasan Tegal Gundil yang sudah berkembang. Nego wajar untuk pembeli serius.
              </p>
            </div>
          </Reveal>
          <Reveal index={3}>
            <div style={{ background: 'var(--paper)', border: '1px solid rgba(29,28,26,0.1)', borderRadius: 14, padding: 24 }}>
              <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-archivo), sans-serif', fontSize: 16, fontWeight: 800 }}>
                Bagaimana akses menuju lokasi?
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'rgba(29,28,26,0.72)' }}>
                Lokasi di Aryawidura Residence, Tegal Gundil, Bogor 16152. Akses mudah via Tol BORR (Bogor Outer Ring Road) dan Tol Jagorawi. Dekat Mall Jambu Dua, RS Azra, dan Terminal Bus Bogor.
              </p>
            </div>
          </Reveal>
          <Reveal index={4}>
            <div style={{ background: 'var(--paper)', border: '1px solid rgba(29,28,26,0.1)', borderRadius: 14, padding: 24 }}>
              <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-archivo), sans-serif', fontSize: 16, fontWeight: 800 }}>
                Apakah bisa untuk investasi Airbnb atau guest house?
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'rgba(29,28,26,0.72)' }}>
                Sangat cocok. Kontur split-level memberi pemisahan alami antara area tamu dan area host. Lokasi satu jam dari Jakarta via tol, permintaan penginapan di Bogor terus tumbuh. Lahan ini punya daya tarik visual yang sulit ditemukan di kavling datar biasa.
              </p>
            </div>
          </Reveal>
          <Reveal index={5}>
            <div style={{ background: 'var(--paper)', border: '1px solid rgba(29,28,26,0.1)', borderRadius: 14, padding: 24 }}>
              <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-archivo), sans-serif', fontSize: 16, fontWeight: 800 }}>
                Apakah dijual dengan perantara atau calo?
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'rgba(29,28,26,0.72)' }}>
                Tidak. Saya menjual atas nama Bapak sebagai pemilik langsung. Tidak ada agen, tidak ada calo, tidak ada markup. Harga yang tertera adalah harga dari pemilik.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />

      <SocialProofNotification />
    </div>
  );
}
