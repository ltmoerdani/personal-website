import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';

import { locales, defaultLocale, siteBaseUrl, type Locale } from '@/i18n/config';
import { CaseNav } from '@/components/CaseNav';
import { CaseFooter } from '@/components/CaseFooter';
import { Reveal } from '@/components/Reveal';
import { getSortedPosts, formatDate, type BlogPost } from '@/lib/blog';

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
      ? 'Tulisan · Oci Moerdani'
      : 'Writing · Oci Moerdani';
  const description =
    active === 'id'
      ? 'Catatan tentang product, AI tooling, dan membangun perangkat lunak di Indonesia.'
      : 'Notes on product, AI tooling, and building software in Indonesia.';

  const path = '/writing';
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
      siteName: 'ltmoerdani.com',
    },
  };
}

function PostCard({ post, locale }: { post: BlogPost; locale: Locale }) {
  return (
    <Reveal index={0}>
      <a
        href={`/${locale}/writing/${post.slug}`}
        style={{
          display: 'block',
          padding: '28px 0',
          borderTop: '1px solid rgba(29,28,26,0.12)',
          transition: 'padding .3s var(--ease)',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 16,
            alignItems: 'baseline',
            flexWrap: 'wrap',
            marginBottom: 8,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 12,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            {locale === 'id' ? post.category.id : post.category.en}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 12,
              color: 'rgba(29,28,26,0.4)',
            }}
          >
            {formatDate(post.date, locale)} · {post.readingTime}{' '}
            {locale === 'id' ? 'menit' : 'min read'}
          </span>
          {post.syndicatedFrom && (
            <span
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 10,
                letterSpacing: '0.04em',
                color: 'rgba(29,28,26,0.35)',
                border: '1px solid rgba(29,28,26,0.15)',
                padding: '2px 8px',
                borderRadius: 4,
              }}
            >
              ↗ {post.syndicatedFrom}
            </span>
          )}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-instrument), serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(24px,3vw,34px)',
            lineHeight: 1.2,
            margin: '0 0 8px',
            transition: 'color .2s',
          }}
        >
          {locale === 'id' ? post.title.id : post.title.en}
        </h3>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: 'rgba(29,28,26,0.6)',
            margin: 0,
          }}
        >
          {locale === 'id' ? post.description.id : post.description.en}
        </p>
      </a>
    </Reveal>
  );
}

export default async function WritingIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  const active = locale as Locale;
  setRequestLocale(active);

  const posts = getSortedPosts();

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', overflowX: 'clip' }}>
      <CaseNav />

      <header style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(64px,10vh,120px) clamp(20px,4vw,56px) clamp(32px,5vh,48px)' }}>
        <div
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 12,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: 16,
          }}
        >
          {active === 'id' ? 'Tulisan' : 'Writing'}
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-instrument), serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(38px,6vw,68px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
          }}
        >
          {active === 'id'
            ? 'Catatan dari membangun.'
            : 'Notes from building.'}
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: 'rgba(29,28,26,0.6)',
            maxWidth: 560,
            margin: 0,
          }}
        >
          {active === 'id'
            ? 'Product, AI tooling, dan pelajaran dari membangun perangkat lunak di Indonesia. Beberapa tulisan juga saya terbitkan di dev.to.'
            : 'Product, AI tooling, and lessons from building software in Indonesia. Some pieces are cross-published on dev.to.'}
        </p>
      </header>

      <main style={{ maxWidth: 820, margin: '0 auto', padding: '0 clamp(20px,4vw,56px) clamp(64px,10vh,120px)' }}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} locale={active} />
        ))}
      </main>

      <CaseFooter />
    </div>
  );
}
