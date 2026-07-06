import type { Metadata } from 'next';
import { Archivo, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import { siteBaseUrl } from '@/i18n/config';
import '../globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-archivo',
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: 'Jual Tanah Split-Level 549 M² SHM · Aryawidura Residence Bogor · Oci Moerdani',
  description: 'Tanah SHM split-level 549 M² di Aryawidura Residence, Tegal Gundil, Bogor. Kontur asli dua level, talud sudah ada. Jual langsung pemilik, tanpa perantara. Rp 3 M.',
  metadataBase: new URL(siteBaseUrl),
  alternates: {
    canonical: `${siteBaseUrl}/jual-tanah-bogor`,
  },
  openGraph: {
    title: 'Jual Tanah Split-Level 549 M² SHM · Aryawidura Residence Bogor · Oci Moerdani',
    description: 'Tanah SHM split-level 549 M² di Aryawidura Residence, Tegal Gundil, Bogor. Kontur asli dua level, talud sudah ada. Jual langsung pemilik, tanpa perantara.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'ltmoerdani.com',
  },
};

export default function JualTanahLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${instrument.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
