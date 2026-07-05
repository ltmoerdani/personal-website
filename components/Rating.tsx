import { Reveal } from './Reveal';
import { Counter } from './Counter';
import { T } from './T';

export function Rating() {
  return (
    <section
      style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: 'clamp(72px,11vh,130px) clamp(20px,4vw,56px)',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 'clamp(28px,6vw,90px)',
        alignItems: 'center',
      }}
    >
      <Reveal index={0}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic', fontSize: 'clamp(96px,12vw,180px)', lineHeight: 0.9, color: 'var(--accent)' }}>
            <Counter target={5} decimals={1} fallback="5.0" />
          </div>
          <div style={{ fontSize: 22, letterSpacing: 6, color: 'var(--accent)', marginTop: 10 }}>
            ★★★★★
          </div>
        </div>
      </Reveal>

      <Reveal index={1}>
        <div>
          <p style={{ margin: 0, fontSize: 'clamp(20px,2.2vw,27px)', lineHeight: 1.6, fontWeight: 500, letterSpacing: '-0.01em', maxWidth: 640, textWrap: 'pretty' }}>
            <T
              en="Clients across three continents have rated the collaboration 5.0. What I can't tell you is whether this approach scales past a handful of sessions per founder. So far it hasn't needed to."
              id="Klien dari tiga benua memberi rating kolaborasi 5.0. Yang tidak bisa saya janjikan: apakah pendekatan ini bisa diskalakan lebih dari beberapa sesi per founder. Sejauh ini belum perlu."
            />
          </p>
          <div style={{ marginTop: 20, fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(29,28,26,0.5)' }}>
            <T
              en="Early-stage founder consulting · direct clients & referrals"
              id="Konsultasi founder early-stage · klien langsung & referral"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
