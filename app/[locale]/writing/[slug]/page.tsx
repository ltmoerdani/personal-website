import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';

import { locales, defaultLocale, siteBaseUrl, type Locale } from '@/i18n/config';
import { CaseNav } from '@/components/CaseNav';
import { CaseFooter } from '@/components/CaseFooter';
import { Reveal } from '@/components/Reveal';
import {
  getPostBySlug,
  getAllSlugs,
  formatDate,
  type BlogPost,
} from '@/lib/blog';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const active = (hasLocale(locales, locale) ? locale : defaultLocale) as Locale;
  const post = getPostBySlug(slug);

  if (!post) return {};

  const title = active === 'id' ? post.title.id : post.title.en;
  const description =
    active === 'id' ? post.description.id : post.description.en;
  const path = `/writing/${post.slug}`;

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, `${siteBaseUrl}/${l}${path}`]),
  );
  languages['x-default'] = `${siteBaseUrl}/${defaultLocale}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(siteBaseUrl),
    alternates: {
      // If syndicated, point canonical to the original. Otherwise canonical
      // is the locale-specific URL on this domain.
      canonical: post.canonicalUrl ?? `${siteBaseUrl}/${active}${path}`,
      languages: post.canonicalUrl ? undefined : languages,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      siteName: 'ltmoerdani.com',
      publishedTime: post.date,
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

function SyndicationNote({ post, locale }: { post: BlogPost; locale: Locale }) {
  if (!post.canonicalUrl || !post.syndicatedFrom) return null;
  return (
    <p
      style={{
        fontFamily: 'var(--font-jetbrains), monospace',
        fontSize: 13,
        color: 'rgba(29,28,26,0.45)',
        marginTop: 28,
        lineHeight: 1.6,
      }}
    >
      {locale === 'id'
        ? `Tulisan ini juga diterbitkan di `
        : `This post was originally published on `}
      <a
        href={post.canonicalUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'var(--accent)', textDecoration: 'underline' }}
      >
        {post.syndicatedFrom}
      </a>
      .
    </p>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  const active = locale as Locale;
  setRequestLocale(active);

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const title = active === 'id' ? post.title.id : post.title.en;
  const description =
    active === 'id' ? post.description.id : post.description.en;
  const category = active === 'id' ? post.category.id : post.category.en;
  const body = active === 'id' ? post.bodyId : post.bodyEn;

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', overflowX: 'clip' }}>
      <CaseNav />

      {/* JSON-LD structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            description,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: 'Laksmana Tri Moerdani',
              url: siteBaseUrl,
            },
            publisher: {
              '@type': 'Person',
              name: 'Laksmana Tri Moerdani',
            },
            mainEntityOfPage: `${siteBaseUrl}/${active}/writing/${post.slug}`,
            image: post.coverImage,
            keywords: post.tags.join(', '),
          }),
        }}
      />

      <article>
        <header
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding:
              'clamp(48px,8vh,90px) clamp(20px,4vw,56px) clamp(32px,5vh,48px)',
          }}
        >
          <Reveal index={0}>
            <div
              style={{
                display: 'flex',
                gap: 14,
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: 20,
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
                {category}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: 12,
                  color: 'rgba(29,28,26,0.4)',
                }}
              >
                {formatDate(post.date, active)} · {post.readingTime}{' '}
                {active === 'id' ? 'menit baca' : 'min read'}
              </span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-instrument), serif',
                fontWeight: 400,
                fontSize: 'clamp(32px,5vw,54px)',
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                margin: '0 0 16px',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 19,
                lineHeight: 1.6,
                color: 'rgba(29,28,26,0.55)',
                maxWidth: 620,
                margin: 0,
              }}
            >
              {description}
            </p>
            <SyndicationNote post={post} locale={active} />
          </Reveal>
        </header>

        {post.coverImage && (
          <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 clamp(20px,4vw,56px)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 16,
                marginBottom: 0,
              }}
            />
          </div>
        )}

        <div
          className="ltm-prose"
          dangerouslySetInnerHTML={{ __html: body }}
          style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(40px,6vh,64px) clamp(20px,4vw,56px) 0' }}
        />

        {post.tags.length > 0 && (
          <div
            style={{
              maxWidth: 760,
              margin: '0 auto',
              padding: '24px clamp(20px,4vw,56px) 0',
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
            }}
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: 12,
                  color: 'rgba(29,28,26,0.5)',
                  background: 'rgba(29,28,26,0.05)',
                  padding: '4px 10px',
                  borderRadius: 6,
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      <CaseFooter
        prev={{
          href: '/writing',
          en: 'All writing',
          id: 'Semua tulisan',
        }}
      />
    </div>
  );
}
