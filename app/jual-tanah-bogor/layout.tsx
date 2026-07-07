import type { Metadata } from 'next';
import { siteBaseUrl } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Jual Tanah Split-Level 549 M² SHM di Aryawidura Residence Bogor (Rp 3 M)',
  description:
    'Tanah SHM 549 M² split-level di Aryawidura Residence, Tegal Gundil, Bogor. Talud siap bangun, dekat Tol BORR & Jagorawi. Cocok untuk villa, Airbnb, atau investasi. Langsung dari pemilik, tanpa calo. Rp 3 M (Rp 5,46 jt/m²).',
  keywords: [
    'jual tanah bogor',
    'tanah tegal gundil',
    'tanah split level bogor',
    'jual tanah aryawidura residence',
    'tanah 500m bogor',
    'tanah hook bogor',
    'investasi tanah bogor',
    'harga tanah tegal gundil',
    'tanah buildable bogor',
    'jual tanah langsung pemilik bogor',
    'tanah SHM bogor',
    'tanah kontur bogor',
  ],
  metadataBase: new URL(siteBaseUrl),
  alternates: {
    canonical: `${siteBaseUrl}/jual-tanah-bogor`,
  },
  openGraph: {
    title: 'Jual Tanah Split-Level 549 M² SHM di Aryawidura Residence Bogor',
    description:
      'Tanah SHM 549 M² di Tegal Gundil, Bogor. Split-level asli, talud siap bangun. Dekat Tol BORR & Jagorawi. Langsung dari pemilik, tanpa calo. Rp 3 M.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'ltmoerdani.com',
    images: [
      {
        url: '/tanah-bogor/01-hero-panoramic-overview.jpg',
        width: 1200,
        height: 630,
        alt: 'Foto lahan split-level 549 M² di Aryawidura Residence Bogor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jual Tanah Split-Level 549 M² SHM di Aryawidura Residence Bogor',
    description:
      'Tanah SHM 549 M² di Tegal Gundil, Bogor. Split-level asli, talud siap bangun. Langsung dari pemilik. Rp 3 M.',
    images: ['/tanah-bogor/01-hero-panoramic-overview.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'ID-JB',
    'geo.placename': 'Bogor, Jawa Barat',
    'geo.position': '-6.578329;106.819499',
    'ICBM': '-6.578329, 106.819499',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Tanah Split-Level 549 M² SHM di Aryawidura Residence Bogor',
  description:
    'Tanah Sertifikat Hak Milik (SHM) 549 M² dengan kontur split-level asli di Aryawidura Residence, Tegal Gundil, Kota Bogor. Talud sudah ada, siap bangun untuk villa, guest house, atau investasi.',
  category: 'Real Estate > Land for Sale',
  image: `${siteBaseUrl}/tanah-bogor/01-hero-panoramic-overview.jpg`,
  offers: {
    '@type': 'Offer',
    price: '3000000000',
    priceCurrency: 'IDR',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    url: `${siteBaseUrl}/jual-tanah-bogor`,
    seller: {
      '@type': 'Person',
      name: 'Laksmana Tri Moerdani',
    },
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Aryawidura Residence, Tegal Gundil',
    addressLocality: 'Kota Bogor',
    addressRegion: 'Jawa Barat',
    postalCode: '16152',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.578329,
    longitude: 106.819499,
  },
  areaServed: {
    '@type': 'City',
    name: 'Bogor',
  },
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Luas Tanah', value: '549 M²' },
    { '@type': 'PropertyValue', name: 'Sertifikat', value: 'SHM (2 unit)' },
    { '@type': 'PropertyValue', name: 'Kontur', value: 'Split-level, terasering alami' },
    { '@type': 'PropertyValue', name: 'Talud', value: 'Sudah ada' },
    { '@type': 'PropertyValue', name: 'Harga per m²', value: 'Rp 5.460.000' },
  ],
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apakah tanah ini siap bangun?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Talud penahan tanah sudah ada dan menyatu dengan lereng. Kontur split-level justru memudahkan zonasi bangunan: level atas untuk area publik, level bawah untuk area privat. Pekerjaan cut and fill minimal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Berapa harga per meter persegi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Harga total Rp 3 Miliar untuk 549 M², atau sekitar Rp 5,46 juta per m². Harga ini below market untuk kawasan Tegal Gundil. Nego wajar untuk pembeli serius.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana akses menuju lokasi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lokasi di Aryawidura Residence, Tegal Gundil, Bogor 16152. Akses mudah via Tol BORR dan Tol Jagorawi. Dekat Mall Jambu Dua, RS Azra, dan Terminal Bus Bogor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah bisa untuk investasi Airbnb atau guest house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sangat cocok. Kontur split-level memberi pemisahan alami antara area tamu dan area host. Lokasi satu jam dari Jakarta via tol, permintaan penginapan di Bogor terus tumbuh.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah dijual dengan perantara atau calo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tidak. Dijual atas nama pemilik langsung. Tidak ada agen, tidak ada calo, tidak ada markup. Harga yang tertera adalah harga dari pemilik.',
      },
    },
  ],
};

const breadcrumbStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'ltmoerdani.com',
      item: siteBaseUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Jual Tanah Bogor',
      item: `${siteBaseUrl}/jual-tanah-bogor`,
    },
  ],
};

export default function JualTanahLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {children}
    </>
  );
}
