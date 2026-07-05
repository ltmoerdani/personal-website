# Personal Website Concept
## Laksmana (Oci) Tri Moerdani — ltmoerdani.com

---

## CORE CONCEPT

**Satu kalimat:** Website ini bukan portfolio — ia adalah sebuah argumen.

Kebanyakan website personal konsultan bekerja seperti brosur: nama besar, daftar layanan, logo klien, tombol "Contact Me." Pengunjung datang, scan 10 detik, pergi. Tidak ada yang berubah di benak mereka.

Website ini bekerja berbeda. Ia membuka dengan sebuah pertanyaan yang langsung membuat pengunjung yang tepat berhenti dan berpikir — dan membiarkan pengunjung yang salah pergi. Kemudian ia membangun kasus secara bertahap, seperti argumen yang ditulis dengan baik: masalah, tesis, bukti, kesimpulan. Pengunjung yang sampai ke bawah sudah half-sold sebelum membaca satu kata tentang layanan.

**Audiens utama:** Founder atau CEO perusahaan digital Indonesia yang produknya sudah berjalan tapi arahnya mulai kabur.

**Satu job halaman ini:** Menghasilkan percakapan awal yang qualified — bukan klik, bukan form submission anonim, tapi orang yang datang sudah tahu persis mengapa mereka menghubungi Oci.

---

## DESIGN TOKENS

### Palette

```
--color-paper:     #F8F7F3   /* warm near-white, seperti laid paper */
--color-ink:       #1D1C1A   /* warm black, bukan pure black */
--color-ink-light: #6B6860   /* warm mid-gray untuk secondary text */
--color-forest:    #2E5D4B   /* deep muted green — accent utama */
--color-forest-bg: #E8F0EB   /* very light green, untuk subtle surfaces */
--color-white:     #FFFFFF
```

**Reasoning palette:** Hijau forest ini pilihan yang tidak obvious untuk konsultan digital Indonesia — hampir semua kompetitor pakai biru atau abu-abu. Tapi warnanya tepat secara psikologis: authoritative, measured, tidak agresif. Terasa seperti seseorang yang sudah cukup lama bekerja untuk tidak perlu berteriak. Bukan pilihan startup; pilihan practitioner.

### Typography

```
Display:  DM Serif Display — karakter editorial, authority tanpa kesan kaku
Body:     DM Sans — pasangan natural, bersih, tidak generic seperti Inter
Mono:     JetBrains Mono — digunakan sparingly untuk stats, angka, code references
```

**Type scale:**
```
--text-hero:   clamp(2.5rem, 5vw, 4.5rem)   /* pertanyaan pembuka */
--text-display: clamp(1.75rem, 3vw, 2.75rem) /* section titles */
--text-lead:    1.25rem                       /* thesis statement */
--text-body:    1rem / line-height: 1.7
--text-small:   0.875rem                      /* labels, captions */
--text-mono:    0.9rem                        /* stats, data */
```

### Layout System

```
Max width:     1140px
Gutter:        clamp(1.5rem, 5vw, 4rem)
Section gap:   clamp(5rem, 10vw, 9rem)
Grid:          12 kolom, 24px gap
Border radius: 4px (minimal, hampir tidak ada)
```

---

## SIGNATURE ELEMENT

**Pertanyaan sebagai hero.**

Tidak ada foto, tidak ada nama besar di atas, tidak ada tagline tentang diri sendiri. Halaman dibuka full-viewport dengan satu pertanyaan:

> *"What's the last product decision your team made that you could trace directly to a customer problem?"*

Tidak ada jawaban. Tidak ada petunjuk. Hanya pertanyaan itu, dalam teks besar, dengan ruang kosong di sekeliling.

Yang terjadi: pengunjung yang tepat (founder dengan product confusion) akan diam sejenak. Tidak bisa menjawab, atau menjawab dengan ragu-ragu. Itu adalah momen yang menciptakan kebutuhan sebelum Oci bahkan memperkenalkan diri.

Pengunjung yang salah akan scroll cepat — bagus, mereka bukan klien yang tepat.

Ini adalah risiko desain yang bisa dipertahankan: sebuah CPO yang membantu perusahaan menemukan clarity seharusnya juga mendemonstrasikan clarity dalam cara ia mempresentasikan dirinya.

---

## STRUKTUR HALAMAN

### Section 1 — COLD OPEN
```
╔═══════════════════════════════════════════════╗
║                                               ║
║                                               ║
║   "What's the last product decision           ║
║    your team made that you could              ║
║    trace directly to a customer               ║
║    problem?"                                  ║
║                                               ║
║                                               ║
║                        ↓                     ║
╚═══════════════════════════════════════════════╝
```
- Background: --color-paper
- Font: DM Serif Display, --text-hero
- Teks: --color-ink
- Tidak ada navigasi di viewport ini
- Scroll indicator: panah tipis, animasi subtle bounce 1x kemudian berhenti
- Navigasi muncul setelah scroll pertama (sticky, ringan)

---

### Section 2 — IDENTITY + THESIS
```
╔═══════════════════════════════════════════════╗
║  Laksmana (Oci) Tri Moerdani                  ║
║  Fractional CPO · Co-Founder, RCD             ║
║  ─────────────────────────────                ║
║                                               ║
║  "Most product failures aren't                ║
║  engineering problems.                        ║
║  They're clarity problems."                   ║
║                                               ║
║  [body: 2 paragraf dari About]                ║
║                                               ║
║  Start a conversation →                       ║
╚═══════════════════════════════════════════════╝
```
- Layout: 2 kolom desktop (4/8 grid), 1 kolom mobile
- Nama + title di kolom kiri, kecil dan clean
- Thesis statement besar di kanan atas
- Body teks di bawah thesis
- CTA: teks link dengan panah, bukan button — lebih subtle, lebih sesuai tone

---

### Section 3 — CURRENT ENGAGEMENT
```
╔═══════════════════════════════════════════════╗
║  [background: --color-ink]                    ║
║  [text: --color-paper]                        ║
║                                               ║
║  Currently embedded at                        ║
║                                               ║
║  PRO ARCHERY                                  ║
║  ────────────────────────────                 ║
║  12,000+ SKUs   Rp10M+/mo   Sept 2026 Launch  ║
║                                               ║
║  [2 kalimat: apa yang sedang dikerjakan]      ║
║  [italic: "This is what Fractional CPO        ║
║   looks like in practice."]                   ║
╚═══════════════════════════════════════════════╝
```
- Full-width dark section sebagai kontras visual
- "PRO ARCHERY" dalam DM Serif Display, besar
- Stats dalam JetBrains Mono, ukuran medium
- Fungsi ganda: social proof + definisi layanan lewat contoh konkret

---

### Section 4 — BUILT OUTSIDE CLIENT WORK
```
╔═══════════════════════════════════════════════╗
║  What I build outside client work             ║
║                                               ║
║  [3 kolom desktop, stack mobile]              ║
║                                               ║
║  ┌─────────────┐ ┌─────────────┐ ┌─────────┐ ║
║  │ MYARCHERY   │ │   BLAZZ     │ │OPENCODE │ ║
║  │ .id         │ │             │ │         │ ║
║  │             │ │             │ │         │ ║
║  │ 8,000+      │ │ WhatsApp    │ │ 3,952   │ ║
║  │ active      │ │ B2B SaaS    │ │installs │ ║
║  │ users       │ │ for SMEs    │ │ ★★★★★   │ ║
║  │             │ │             │ │         │ ║
║  │ [hover →    │ │ [hover →    │ │[hover → │ ║
║  │  problem]   │ │  problem]   │ │ problem]│ ║
║  └─────────────┘ └─────────────┘ └─────────┘ ║
╚═══════════════════════════════════════════════╝
```
- Background: --color-forest-bg
- Card: white, minimal border, 4px radius
- Hover state: card flips (CSS 3D flip) atau slides up revealing "The problem it solved: [1 kalimat]"
- Tidak ada screenshot, tidak ada mockup — hanya teks dan angka

**Hover content per item:**
- MyArchery: *"Indonesia had no neutral platform for archery clubs to run their own tournaments. We built one."*
- Blazz: *"Indonesian SME owners live in WhatsApp. Their business tools don't. Blazz closes that gap."*
- OpenCode: *"GitHub Copilot locks you into their model list. OpenCode lets developers bring any frontier model they want."*

---

### Section 5 — TWENTY-YEAR ARC
```
╔═══════════════════════════════════════════════╗
║  Twenty years.                                ║
║                                               ║
║  [Editorial paragraph dengan 4 tahun kunci    ║
║   di-highlight dalam --color-forest]          ║
║                                               ║
║  2009 ─── 2013 ─── 2018 ─── 2021 ─── Now     ║
║  [label singkat di bawah setiap anchor]       ║
╚═══════════════════════════════════════════════╝
```

**Editorial paragraph (copy):**
> Twenty years. Started building databases for offshore rigs in Batam — high stakes, no room for error. Taught web design. Founded an e-commerce that taught more about market fit than any MBA module. Managed products for a haj travel platform where a confusing flow wasn't just a UX problem. Co-founded a digital agency in Jakarta built around one rule: name the problem before you name the solution. Now embedded inside companies as their product executive, on call and on the org chart. Each step was a different version of the same problem: getting clarity on what actually needs to be built.

Timeline: minimal, 5 anchor tahun dengan label 1–3 kata. Bukan dots-and-circles yang generik — lebih seperti editorial infographic, menggunakan garis tipis dan tipografi saja.

---

### Section 6 — CONTACT
```
╔═══════════════════════════════════════════════╗
║                                               ║
║  "If your product decisions and business      ║
║   outcomes have quietly drifted apart —"      ║
║                                               ║
║  ltmoerdani@[domain]                          ║
║                                               ║
║  atau: [single text field + send]             ║
║                                               ║
╚═══════════════════════════════════════════════╝
```
- Kalimat CTA sengaja tidak diselesaikan (strategic incompleteness)
- Pengunjung melengkapi sendiri dalam benaknya
- Tidak ada form panjang — cukup email atau satu text field "Ceritakan situasinya"
- Footer: minimal. Nama, tahun, link LinkedIn dan GitHub. Tidak lebih.

---

## NAVIGASI

```
Sticky setelah scroll pertama
Left:  Oci (nama pendek, bukan logo)
Right: Work · Built · Twenty Years · [Start a conversation]
```

- Tidak ada mega menu
- "Start a conversation" adalah satu-satunya CTA di nav, tanpa button style — hanya teks dengan garis bawah --color-forest
- Mobile: hamburger minimal, full-screen overlay dengan item besar

---

## APA YANG TIDAK ADA

Ini sama pentingnya dengan apa yang ada.

Tidak ada foto hero diri sendiri (terlalu personal-branding-coach). Tidak ada daftar skills dengan progress bar. Tidak ada testimonial carousel. Tidak ada "Download CV." Tidak ada logo klien grid (hanya Pro Archery yang disebutkan namanya, dengan konteks). Tidak ada counter animasi yang naik dari 0. Tidak ada stock photography. Tidak ada gradient mesh background. Tidak ada glassmorphism. Tidak ada dark/light toggle (satu mode saja, konsisten).

---

## MOTION PRINCIPLES

- **Cold open:** teks muncul dengan fade-in lambat 800ms, delay 200ms — satu kali, tidak loop
- **Section reveal:** snap langsung saat scroll, tidak ada float-up animation — mengonfirmasi kesan "langsung ke substansi"
- **Card hover:** transition 200ms ease-out, cukup
- **Navigation:** fade-in setelah scroll 60px, bukan slide-down
- Respect `prefers-reduced-motion` — semua animasi disabled jika user setting aktif

---

## MOBILE TREATMENT

- Cold open: pertanyaan scale ke --text-display, masih full viewport
- Semua 2-column menjadi 1-column
- Section 4 (built): scroll horizontal atau stack vertikal
- Timeline: vertical dots, tetap editorial
- Contact: form simple, keyboard-aware

---

## TONE DAN COPY PRINCIPLES

Website ini berbicara seperti seseorang yang sudah tidak perlu membuktikan diri. Kalimat pendek. Tidak ada "passionate about," tidak ada "leveraging expertise." Angka spesifik bukan untuk pamer — untuk mempermudah pembaca menilai apakah ini relevan untuk mereka.

Bahasa: English sebagai default (audiens target mencakup regional dan klien internasional via RCD). Indonesian bisa ditawarkan sebagai toggle ringan jika diinginkan.

---

## STACK REKOMENDASI

```
Framework:  Astro (static, cepat, SEO-ready) atau Next.js jika perlu form/dynamic
Hosting:    Vercel atau Cloudflare Pages
Domain:     ltmoerdani.com (sudah ada)
Analytics:  Plausible (privacy-first, ringan)
Contact:    Resend API atau Formspree untuk form handling
```

Tidak ada CMS kecuali konten akan diupdate sering. Jika ingin tulis artikel/insight, tambahkan Markdown-based blog dengan Astro Content Collections.

---

## NEXT STEP

Dua jalur dari sini:

1. **Langsung build** — saya eksekusi prototype HTML/React dari konsep ini, dapat dilihat dan direview secara visual sebelum dikerjakan ke production
2. **Refinement dulu** — ada bagian konsep yang ingin diubah sebelum eksekusi?
