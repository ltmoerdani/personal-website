import { Reveal } from './Reveal';
import { T } from './T';

type Testimonial = {
  initials: string;
  name: string;
  metaEn: string;
  metaId?: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    initials: 'A',
    name: 'almutaz_bellah',
    metaEn: 'Norway · Business plan',
    metaId: 'Norwegia · Business plan',
    quote:
      'Thank you for the great work! The plan was detailed, well-researched, and you listened carefully to my notes. Creative and professional from start to finish.',
  },
  {
    initials: 'S',
    name: 'salatas',
    metaEn: 'Indonesia · Business plan',
    quote:
      'Professional work, deep understanding of the business, and sharp data interpretation & presentation.',
  },
  {
    initials: 'Y',
    name: 'yashica23',
    metaEn: 'United States · Business plan',
    metaId: 'Amerika Serikat · Business plan',
    quote: 'Quick, professional, and a great delivery. I can recommend his services without question.',
  },
  {
    initials: 'G',
    name: 'gederay',
    metaEn: 'Indonesia · Business plan',
    quote:
      'The seller listened to exactly what I was expecting. The requirements were understood very quickly. I greatly appreciated the communication and service.',
  },
  {
    initials: 'B',
    name: 'brampyvich',
    metaEn: 'Indonesia · Business plan',
    quote: 'Very fast response to revision requests, and a very detailed report. Highly recommended.',
  },
  {
    initials: 'A',
    name: 'asudradji',
    metaEn: 'Indonesia · Business plan',
    quote: 'Thank you for your support and cooperation. Good luck and all the best for the future.',
  },
];

export function Testimonials() {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,4vw,56px) clamp(64px,10vh,120px)' }}>
      <Reveal index={0}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 36, flexWrap: 'wrap' }}>
          <h2 style={heading}>
            <T en="What founders say" id="Kata para founder" />
          </h2>
          <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
            <T en="Via Fiverr · Business plans for startups · 5.0 ★" id="Via Fiverr · Business plan untuk startup · 5.0 ★" />
          </span>
        </div>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
        {testimonials.map((t, i) => (
          <Reveal key={t.name} index={i % 3}>
            <Card t={t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <figure style={card}>
      <div style={{ color: 'var(--accent)', fontSize: 14, letterSpacing: 3 }}>★★★★★</div>
      <blockquote style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'rgba(29,28,26,0.78)', flex: 1 }}>
        “{t.quote}”
      </blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={avatar}>{t.initials}</span>
        <span>
          <strong style={{ fontSize: 14 }}>{t.name}</strong>
          <span style={{ display: 'block', fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: 'rgba(29,28,26,0.5)' }}>
            {t.metaId ? <T en={t.metaEn} id={t.metaId} /> : t.metaEn}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

const heading: React.CSSProperties = {
  margin: 0,
  fontFamily: 'var(--font-instrument), serif',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: 'clamp(34px,4.2vw,54px)',
  letterSpacing: '-0.02em',
};

const card: React.CSSProperties = {
  margin: 0,
  border: '1.5px solid rgba(29,28,26,0.14)',
  borderRadius: 18,
  padding: '26px 26px 22px',
  background: 'var(--paper)',
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  height: '100%',
};

const avatar: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  background: 'color-mix(in oklab, var(--accent) 18%, var(--bg))',
  color: 'var(--accent)',
  fontWeight: 800,
  fontSize: 14,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
};
