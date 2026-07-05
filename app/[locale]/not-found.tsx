import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          background: 'var(--bg)',
          color: 'var(--ink)',
          fontFamily: 'system-ui, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: 24,
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-instrument), Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(56px,12vw,120px)',
            fontWeight: 400,
            margin: 0,
          }}
        >
          404
        </h1>
        <p style={{ marginTop: 16, fontSize: 17, opacity: 0.7 }}>
          This page drifted off-route.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            marginTop: 28,
            padding: '14px 28px',
            borderRadius: 99,
            background: 'var(--accent)',
            color: 'var(--bg)',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          ← Back home
        </Link>
      </body>
    </html>
  );
}
