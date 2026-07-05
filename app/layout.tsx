/**
 * Root pass-through layout.
 *
 * The actual <html> document lives in app/[locale]/layout.tsx because
 * locale-aware metadata (lang attribute, hreflang alternates) requires
 * knowing the active locale. Next.js App Router requires a root layout,
 * so this file simply forwards children.
 *
 * Do NOT add <html>, <body>, fonts, or metadata here — those belong to
 * the [locale] layout.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
