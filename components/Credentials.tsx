import { Reveal } from './Reveal';
import { T } from './T';

type Award = {
  year: string;
  title: string;
  noteEn?: string;
  noteId?: string;
};

const awards: Award[] = [
  {
    year: '2023',
    title: 'PitchFest Series · AMSI',
    noteEn: 'On behalf of Reka Cipta Digital',
    noteId: 'Atas nama Reka Cipta Digital',
  },
  {
    year: '2016',
    title: 'Alpha Startups ID #Batch 1 · 1337 Ventures',
    noteEn: 'Pre-accelerator program',
    noteId: 'Program pre-accelerator',
  },
  {
    year: '2013',
    title: '2nd Winner Business Coach · SBM ITB ESTAR',
  },
];

const credentials = [
  {
    titleEn: 'Licensed Grade C Archery Judge',
    titleId: 'Juri Panahan Berlisensi Grade C',
    noteEn:
      '+ Wakabid Media & Database, Perpani Jakarta Timur, verified domain authority, not a personal claim',
    noteId:
      '+ Wakabid Media & Database, Perpani Jakarta Timur, otoritas domain terverifikasi, bukan klaim personal',
  },
  {
    titleEn: 'MBA Entrepreneurship · Institut Teknologi Bandung',
    titleId: 'MBA Entrepreneurship · Institut Teknologi Bandung',
    noteEn: 'S.Kom., S.Si Mathematics & Computer Science · BINUS University',
    noteId: 'S.Kom., S.Si Mathematics & Computer Science · BINUS University',
  },
  {
    titleEn: 'Languages',
    titleId: 'Bahasa',
    noteEn: 'Indonesian (native) · English (professional) · Japanese (elementary)',
    noteId: 'Indonesia (native) · Inggris (profesional) · Jepang (dasar)',
  },
];

export function Credentials() {
  return (
    <section style={{ borderTop: '1.5px solid rgba(29,28,26,0.12)' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(56px,9vh,100px) clamp(20px,4vw,56px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 'clamp(32px,5vw,72px)',
        }}
      >
        <Reveal index={0}>
          <div>
            <h3 style={colHeading}>
              <T en="Recognition" id="Penghargaan" />
            </h3>
            <div style={{ display: 'grid', gap: 0 }}>
              {awards.map((a, i) => (
                <AwardRow key={a.year + a.title} award={a} last={i === awards.length - 1} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal index={1}>
          <div>
            <h3 style={colHeading}>
              <T en="Credentials" id="Kredensial" />
            </h3>
            <div style={{ display: 'grid', gap: 0 }}>
              {credentials.map((c, i) => (
                <CredRow key={c.titleEn} cred={c} last={i === credentials.length - 1} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AwardRow({ award, last }: { award: Award; last: boolean }) {
  return (
    <div
      style={{
        padding: '16px 0',
        borderTop: '1px solid rgba(29,28,26,0.12)',
        borderBottom: last ? '1px solid rgba(29,28,26,0.12)' : undefined,
        display: 'grid',
        gridTemplateColumns: '56px 1fr',
        gap: 16,
        alignItems: 'baseline',
      }}
    >
      <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: 'var(--accent)' }}>
        {award.year}
      </span>
      <div>
        <strong style={{ fontSize: '15.5px' }}>{award.title}</strong>
        {award.noteEn && (
          <span style={{ display: 'block', fontSize: '13.5px', color: 'rgba(29,28,26,0.55)', marginTop: 2 }}>
            <T en={award.noteEn} id={award.noteId ?? award.noteEn} />
          </span>
        )}
      </div>
    </div>
  );
}

function CredRow({ cred, last }: { cred: (typeof credentials)[number]; last: boolean }) {
  return (
    <div
      style={{
        padding: '16px 0',
        borderTop: '1px solid rgba(29,28,26,0.12)',
        borderBottom: last ? '1px solid rgba(29,28,26,0.12)' : undefined,
      }}
    >
      <strong style={{ fontSize: '15.5px' }}>
        <T en={cred.titleEn} id={cred.titleId} />
      </strong>
      <span style={{ display: 'block', fontSize: '13.5px', color: 'rgba(29,28,26,0.55)', marginTop: 2 }}>
        <T en={cred.noteEn} id={cred.noteId} />
      </span>
    </div>
  );
}

const colHeading: React.CSSProperties = {
  margin: '0 0 24px',
  fontFamily: 'var(--font-instrument), serif',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: 30,
};
