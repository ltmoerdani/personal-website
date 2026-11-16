import { EB_Garamond, Archivo, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-eb-garamond',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-archivo',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-jetbrains',
});

/**
 * Root layout — provides the <html> and <body> shell required by Next.js 16.
 * Nested layouts (locale, jual-tanah-bogor) wrap children with <div> instead.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${ebGaramond.variable} ${archivo.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
