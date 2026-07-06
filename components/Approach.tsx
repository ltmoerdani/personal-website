import { Reveal } from './Reveal';
import { T } from './T';

type Step = {
  num: string;
  titleEn: string;
  titleId: string;
  bodyEn: string;
  bodyId: string;
};

const steps: Step[] = [
  {
    num: '01',
    titleEn: 'Name the problem in a sentence',
    titleId: 'Sebutkan masalahnya dalam satu kalimat',
    bodyEn:
      "Then build the smallest thing that proves or kills the assumption. If the problem doesn't fit in a sentence, the project isn't ready, no matter how good the deck looks.",
    bodyId:
      'Lalu bangun hal terkecil yang membuktikan atau mematikan asumsinya. Kalau masalahnya tidak muat dalam satu kalimat, proyeknya belum siap, sebagus apa pun presentasinya.',
  },
  {
    num: '02',
    titleEn: 'Sequence beats speed',
    titleId: 'Urutan mengalahkan kecepatan',
    bodyEn:
      "At Pro Archery I wanted the consumer platform first. Two months with the inventory mess showed it would only expose the same chaos prettied up. Each phase has to work before the next begins.",
    bodyId:
      'Di Pro Archery saya awalnya ingin mulai dari platform konsumen. Tapi dua bulan bergelut dengan inventori bikin saya sadar: itu cuma menutupi kekacauan yang sama dengan tampilan lebih rapi. Tiap fase harus jalan dulu sebelum fase berikutnya.',
  },
  {
    num: '03',
    titleEn: 'Words a CFO would sign off on',
    titleId: 'Kata-kata yang berani diteken CFO',
    bodyEn:
      "The failures I've watched weren't process failures. The product owner was never forced to define what the business actually needed, in words a CFO would sign off on. That definition is the job.",
    bodyId:
      'Kegagalan yang saya lihat bukan soal proses. Pemilik produknya nggak pernah dipaksa nulis apa yang bisnis sebenarnya butuh, dalam bahasa yang berani diteken CFO. Itulah pekerjaan yang sebenarnya.',
  },
];

export function Approach() {
  return (
    <section id="approach" style={{ background: 'color-mix(in oklab, var(--accent) 10%, var(--bg))' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px,10vh,120px) clamp(20px,4vw,56px)' }}>
        <Reveal index={0}>
          <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>
            <T en="How I work" id="Cara saya bekerja" />
          </div>
        </Reveal>
        <Reveal index={0}>
          <h2 style={heading}>
            <T
              en="Forcing clarity before the money and the building start."
              id="Memaksa kejelasan sebelum uang dan pembangunan dimulai."
            />
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gap: 0 }}>
          {steps.map((step, i) => (
            <Reveal key={step.num} index={0}>
              <ApproachRow step={step} last={i === steps.length - 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachRow({ step, last }: { step: Step; last: boolean }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 'clamp(20px,4vw,56px)',
        padding: '36px 0',
        borderTop: '1.5px solid rgba(29,28,26,0.15)',
        borderBottom: last ? '1.5px solid rgba(29,28,26,0.15)' : undefined,
        alignItems: 'start',
      }}
    >
      <div style={stepNum}>{step.num}</div>
      <div style={{ maxWidth: 640 }}>
        <h3 style={stepTitle}>
          <T en={step.titleEn} id={step.titleId} />
        </h3>
        <p style={stepBody}>
          <T en={step.bodyEn} id={step.bodyId} />
        </p>
      </div>
    </div>
  );
}

const heading: React.CSSProperties = {
  margin: '0 0 56px',
  fontFamily: 'var(--font-instrument), serif',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: 'clamp(38px,4.6vw,64px)',
  letterSpacing: '-0.02em',
  maxWidth: 760,
  textWrap: 'balance',
};

const stepNum: React.CSSProperties = {
  fontFamily: 'var(--font-instrument), serif',
  fontStyle: 'italic',
  fontSize: 'clamp(48px,5vw,76px)',
  lineHeight: 0.9,
  color: 'var(--accent)',
  minWidth: 90,
};

const stepTitle: React.CSSProperties = {
  margin: '0 0 12px',
  fontSize: 'clamp(22px,2.4vw,30px)',
  fontWeight: 800,
  letterSpacing: '-0.02em',
};

const stepBody: React.CSSProperties = {
  margin: 0,
  fontSize: '16.5px',
  lineHeight: 1.75,
  color: 'rgba(29,28,26,0.68)',
};
