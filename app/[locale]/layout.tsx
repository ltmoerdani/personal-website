import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import {
  locales,
  defaultLocale,
  localeHtmlLang,
  siteBaseUrl,
  type Locale,
} from '@/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const active = (hasLocale(locales, locale) ? locale : defaultLocale) as Locale;

  const title =
    active === 'id'
      ? 'Fractional CPO & co-founder Reka Cipta Digital · Oci Moerdani'
      : 'Fractional CPO & co-founder of Reka Cipta Digital · Oci Moerdani';
  const description =
    active === 'id'
      ? 'Fractional CPO dan co-founder Reka Cipta Digital. Dua puluh tahun di dunia digital, membantu perusahaan membangun produk yang tepat, bukan sekadar sebuah produk.'
      : 'Fractional CPO and co-founder of Reka Cipta Digital. Twenty years in digital work, helping companies build the right product, not just a product.';

  // hreflang alternates — every page declares both locale variants.
  const path = ''; // root; sub-pages will override metadata via their own generateMetadata
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, `${siteBaseUrl}/${l}${path}`]),
  );
  languages['x-default'] = `${siteBaseUrl}/${defaultLocale}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(siteBaseUrl),
    alternates: {
      canonical: `${siteBaseUrl}/${active}${path}`,
      languages,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: localeHtmlLang[active].replace('-', '_'),
      siteName: 'ltmoerdani.com',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  const active = locale as Locale;
  // Enable static rendering for this locale segment.
  setRequestLocale(active);

  return (
    <div lang={localeHtmlLang[active]}>
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </div>
  );
}
