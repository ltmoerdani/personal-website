/**
 * Blog data layer.
 *
 * Posts are authored as typed objects in `allPosts` below. Each post carries
 * bilingual front matter (EN/ID) plus an HTML body. Posts cross-published on
 * dev.to set `canonicalUrl` so search engines understand the dev.to version is
 * the original — this keeps us safe from duplicate-content penalties while
 * still letting the blog capture long-tail SEO traffic on the personal domain.
 *
 * Adding a new post:
 *   1. Append an object to `allPosts`.
 *   2. The listing page, detail page, and sitemap pick it up automatically.
 */

export type Bilingual = { en: string; id: string };

export type BlogPost = {
  /** URL slug, e.g. `30-ai-models-github-copilot-chat-free`. */
  slug: string;
  /** ISO date string (publish date). */
  date: string;
  title: Bilingual;
  description: Bilingual;
  /** Short label shown on cards, e.g. "AI tooling", "Open source". */
  category: Bilingual;
  /** Estimated read time in minutes (EN body). */
  readingTime: number;
  /** OG / cover image URL (absolute or /public path). */
  coverImage?: string;
  /** Tags for SEO + filtering. */
  tags: string[];
  /**
   * If the post was first published elsewhere (e.g. dev.to), set this so the
   * canonical link points to the original. Leave `undefined` for original
   * content published here first.
   */
  canonicalUrl?: string;
  /** Original platform label for the "Originally published on" badge. */
  syndicatedFrom?: string;
  /** HTML body — EN version. */
  bodyEn: string;
  /** HTML body — ID version. Falls back to EN if not yet translated. */
  bodyId: string;
};

export const allPosts: BlogPost[] = [
  {
    slug: '30-ai-models-github-copilot-chat-free',
    date: '2026-07-04',
    title: {
      en: 'How to Use 30+ AI Models in GitHub Copilot Chat for Free',
      id: 'Cara Pakai 30+ Model AI di GitHub Copilot Chat Gratis',
    },
    description: {
      en: 'Copilot Pro+ is $39/mo and the free tier caps you at 2,000 completions. Here\u2019s how to plug 30+ frontier models \u2014 DeepSeek, Kimi, GLM, Qwen, Claude, GPT \u2014 into the native Copilot Chat UI, no Pro+ required.',
      id: 'Copilot Pro+ $39/bulan dan free tier membatasi 2.000 completion. Begini cara menyatukan 30+ model frontier \u2014 DeepSeek, Kimi, GLM, Qwen, Claude, GPT \u2014 ke UI Copilot Chat, tanpa Pro+.',
    },
    category: { en: 'AI tooling', id: 'Tooling AI' },
    readingTime: 7,
    coverImage:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Figtpb31upactr0yi1y1x.png',
    tags: ['AI', 'VS Code', 'Open source', 'GitHub Copilot', 'Tutorial'],
    canonicalUrl:
      'https://dev.to/ltmoerdani/how-to-use-30-ai-models-in-github-copilot-chat-for-free-4ifd',
    syndicatedFrom: 'dev.to',
    bodyEn: `<p>Copilot Pro+ is $39 a month. The free tier caps you at 2,000 completions and two models. Want DeepSeek V4, Kimi K2.6, GLM 5.1, Qwen3.7 Max? Not in the default catalog.</p>
<p>There's a VS Code API that lets extensions register custom providers into the native model picker. I built one that plugs in 30+ models. No Copilot subscription required. Same Chat UI, same Agent Mode, just more models to pick from.</p>

<h2>Why bother adding more models?</h2>
<p>A few reasons I kept running into:</p>
<ul>
<li><strong>The free tier is thin.</strong> Two models, 2,000 completions. Fine for a weekend. Falls apart on a real project.</li>
<li><strong>Pro+ locks the interesting models behind $39.</strong> Claude Opus, GPT-5.5 premium, Gemini 3.5 Pro. You pay the full monthly even if you only need them occasionally.</li>
<li><strong>Open-weight models got good.</strong> DeepSeek V4, Kimi K2.6, GLM 5.2, Qwen3.7 can hold their own against frontier models for most coding tasks. They're cheap or free, but wiring each one into VS Code manually is a chore.</li>
<li><strong>Different tasks want different models.</strong> Quick refactor vs. deep debugging vs. large-context review. One model doesn't fit all.</li>
</ul>
<p>The extension sits in between. Free models when the task is simple. Pay-per-use when you need Claude Opus for one tricky prompt. Flat subscription when you're grinding through a refactor.</p>

<h2>A few things to know before you start</h2>
<ul>
<li>You need GitHub Copilot Chat installed. The free version works. You don't need Pro, Pro+, or Max.</li>
<li>You need a VS Code account or local install. VS Code 1.100 or newer.</li>
<li>API keys are stored in VS Code SecretStorage. They don't leave your machine.</li>
<li>Free models rotate. Big Pickle is always free. DeepSeek V4 Flash Free, MiMo V2.5 Free, and Nemotron rotate in and out. The paid models stay put.</li>
<li>The extension is MIT, independent. Not affiliated with GitHub, OpenCode, or any model provider.</li>
</ul>

<h2>Which plan fits your use case?</h2>
<p>Three options, same extension. Pick based on how much you code.</p>
<p><strong>Just testing, or light use.</strong> OpenCode Zen free models. $0. DeepSeek V4 Flash works at $0 balance. No card needed. Rate limits are low without balance, but enough to try the extension.</p>
<p><strong>Daily coding.</strong> OpenCode Go subscription. $10 a month, $5 the first month. DeepSeek V4 Pro, Kimi K2.6, GLM 5.1, Qwen3.7 Max, MiMo V2.5 Pro, MiniMax M3. Generous limits across 5-hour, weekly, and monthly windows.</p>
<p><strong>Need Claude, GPT, or Gemini occasionally.</strong> Zen pay-per-use. Add $20 balance. Claude Opus 4.7 ($5/$25 per 1M tokens), GPT-5.5 ($5/$30), Gemini 3.5 Flash ($0.50/$3). You pay only for what you use. Adding balance also improves rate limits on the free models.</p>
<p>My honest take: start with the free tier. If you hit the rate limit more than twice a week, upgrade to Go. Add Zen balance only when you specifically need Claude or GPT for a task.</p>

<h2>How to set it up</h2>
<p>Takes about 60 seconds.</p>
<h3>1. Install GitHub Copilot Chat</h3>
<p>If you don't have it already:</p>
<pre><code>code --install-extension GitHub.copilot-chat</code></pre>
<p>Sign in with any GitHub account. The free tier works.</p>
<h3>2. Install OpenCode for Copilot Chat</h3>
<p>From the marketplace: <a href="https://marketplace.visualstudio.com/items?itemName=ltmoerdani.opencode-copilot-chat" target="_blank" rel="noopener noreferrer">OpenCode for Copilot Chat</a></p>
<p>Or via command line:</p>
<pre><code>code --install-extension ltmoerdani.opencode-copilot-chat</code></pre>
<h3>3. Get an OpenCode API key</h3>
<p>Go to <a href="https://opencode.ai/auth" target="_blank" rel="noopener noreferrer">opencode.ai/auth</a>, sign up, and copy your API key.</p>
<p>You don't need to add a payment method to start. The free models work at $0 balance.</p>
<h3>4. Add the provider to Copilot Chat</h3>
<p>Open Copilot Chat in VS Code (<code>Cmd+Shift+I</code> or <code>Ctrl+Shift+I</code>). Click the model name in the picker.</p>
<pre><code>Model picker \u2192 "Add Models..." \u2192 OpenCode Zen \u2192 paste API key</code></pre>
<p>Press Enter to accept the default group name. The models appear in the picker.</p>
<h3>5. Pick a model and start chatting</h3>
<p>Pick any OpenCode model from the dropdown. Start with <code>DeepSeek V4 Flash Free</code> if you want to test without paying anything.</p>
<p>That's it. Tool-calling, Agent Mode, file edits, terminal commands. All work natively because the extension forwards tool-call format correctly per endpoint.</p>

<h2>What you actually get</h2>
<table>
<thead><tr><th></th><th>Copilot Free</th><th>Copilot Pro+</th><th>+ OpenCode</th></tr></thead>
<tbody>
<tr><td>Models</td><td>2</td><td>Premium only</td><td>30+</td></tr>
<tr><td>Free model</td><td>No</td><td>No</td><td>DeepSeek V4 Flash</td></tr>
<tr><td>Reasoning controls</td><td>None</td><td>GitHub decides</td><td>You set per model</td></tr>
<tr><td>Agent Mode</td><td>No</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Vision, PDF, Audio</td><td>Limited</td><td>Limited</td><td>Per-model</td></tr>
<tr><td>Provider</td><td>GitHub</td><td>GitHub</td><td>OpenCode Zen or Go</td></tr>
</tbody>
</table>

<h2>The models</h2>
<p><strong>Free (no payment needed):</strong></p>
<ul>
<li>Big Pickle (always free, 200K context)</li>
<li>DeepSeek V4 Flash Free (200K context)</li>
<li>MiMo V2.5 Free (rotating)</li>
<li>Nemotron 3 Super Free (rotating)</li>
</ul>
<p><strong>Go subscription, $10/mo ($5 first month):</strong></p>
<ul>
<li>DeepSeek V4 Pro (1M context, 384K output, reasoning off to max)</li>
<li>Kimi K2.6 (262K context, reasoning on/off)</li>
<li>GLM 5.1 (202K context)</li>
<li>Qwen3.7 Max (1M context, thinking budget 4K to 82K)</li>
<li>MiMo V2.5 Pro (1M context)</li>
<li>MiniMax M3 (512K context)</li>
</ul>
<p><strong>Zen pay-per-use (add balance):</strong></p>
<ul>
<li>Claude Opus 4.7 ($5/$25 per 1M tokens)</li>
<li>Claude Sonnet 4.6 ($3/$15)</li>
<li>GPT-5.5 ($5/$30)</li>
<li>GPT-5.4 ($0.75 to $30 depending on variant)</li>
<li>Gemini 3.5 Flash ($0.50/$3)</li>
<li>Grok 4 (256K context)</li>
<li>Mistral Large, Llama 4 Maverick, Sonar Pro, Command R+</li>
</ul>

<h2>Thinking controls per model family</h2>
<p>Each family has its own reasoning knob. You set it from the model picker, no config file.</p>
<ul>
<li><strong>DeepSeek:</strong> off / low / medium / high / max</li>
<li><strong>Qwen:</strong> <code>thinking_budget</code> from 4,096 to 81,920 tokens</li>
<li><strong>MiMo:</strong> low / medium / high</li>
<li><strong>MiniMax:</strong> on / off</li>
<li><strong>GLM and Kimi:</strong> on / off</li>
</ul>
<p>I usually keep DeepSeek on <code>high</code> for debugging, <code>medium</code> for refactors, <code>off</code> for quick questions. Qwen's <code>thinking_budget</code> is handy when you want reasoning but need to cap token cost on a long session.</p>

<h2>How the routing actually works</h2>
<p>Different model families speak different protocols. The extension routes each one to its native endpoint.</p>
<pre><code>GPT models        \u2192 OpenAI /responses
Gemini            \u2192 Google :streamGenerateContent?alt=sse
Claude, MiniMax   \u2192 Anthropic /messages
DeepSeek, Qwen,
  Kimi, GLM, MiMo \u2192 /chat/completions</code></pre>
<p>Tool-call format gets translated per endpoint. OpenAI uses <code>tool_calls</code>, Anthropic uses <code>tool_use</code> content blocks. Agent Mode (read files, edit, run terminal) keeps working because the translation happens in the streaming layer.</p>
<p>There's also a retry layer. If the upstream API rejects a parameter because <code>models.dev</code> metadata is stale, the extension parses the error, patches the request body, and retries once. This handles thinking config mismatches and temperature rejections without requiring a code release.</p>

<h2>Honest limitations</h2>
<p>Worth being upfront about these:</p>
<ul>
<li><strong>Session cost doesn't show in VS Code's native session popover.</strong> VS Code 1.126 doesn't convert BYOK usage data parts into <code>IChatUsage</code> progress events yet. The extension tracks cost in its own status bar. When VS Code fixes this, the data will flow through automatically.</li>
<li><strong>Free models have low rate limits without balance.</strong> Adding $20 to Zen improves this, but if you want truly free, expect to wait during peak hours.</li>
<li><strong>Some models need specific configurations.</strong> Kimi K2.7 Code rejects <code>temperature</code> and forces thinking on. GLM only accepts <code>off</code>, <code>high</code>, or <code>max</code>. The extension handles these per-model quirks, but if a new model drops with a new quirk, it might 400 until metadata catches up.</li>
<li><strong>Vision support varies.</strong> GLM, MiniMax, and a few others don't support image input. The extension filters this based on <code>models.dev</code> metadata.</li>
</ul>

<h2>Conclusion</h2>
<p>If you're on Copilot Free and keep hitting the limit, or you're on Pro+ and keep wishing for a model that isn't in the catalog, this is a way out. The free tier is enough to test. The Go subscription is the cheapest way to get daily access to the open-weight catalog. Zen pay-per-use covers the Claude/GPT/Gemini cases without a $39 commitment.</p>
<p>Same Chat UI you already use. More models. Lower bill most months.</p>
<p>Repo is <a href="https://github.com/ltmoerdani/opencode-copilot-chat" target="_blank" rel="noopener noreferrer">MIT on GitHub</a>. Contributions welcome. Four external contributors have already shipped features, bug fixes, and docs.</p>

<h2>Links</h2>
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=ltmoerdani.opencode-copilot-chat" target="_blank" rel="noopener noreferrer">Marketplace listing</a></li>
<li><a href="https://github.com/ltmoerdani/opencode-copilot-chat" target="_blank" rel="noopener noreferrer">GitHub repo</a> (MIT, contributions welcome)</li>
<li><a href="https://opencode.ai/docs" target="_blank" rel="noopener noreferrer">OpenCode docs</a> (API key setup, pricing details)</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=ltmoerdani.cline-copilot-chat" target="_blank" rel="noopener noreferrer">Cline Copilot Chat</a> (sister extension for ClinePass models)</li>
</ul>`,
    bodyId: `<p>Copilot Pro+ seharga $39 per bulan. Free tier membatasi 2.000 completion dan dua model. Mau DeepSeek V4, Kimi K2.6, GLM 5.1, Qwen3.7 Max? Tidak ada di katalog default.</p>
<p>Ada API VS Code yang memungkinkan ekstensi mendaftarkan provider custom ke model picker native. Saya membuat satu ekstensi yang memasukkan 30+ model. Tanpa subscription Copilot. UI Chat yang sama, Agent Mode yang sama, cuma lebih banyak model untuk dipilih.</p>

<h2>Kenapa repot-repot tambah model?</h2>
<p>Beberapa alasan yang terus saya temui:</p>
<ul>
<li><strong>Free tier tipis.</strong> Dua model, 2.000 completion. Cukup untuk akhir pekan. Berantakan di proyek nyata.</li>
<li><strong>Pro+ mengunci model menarik di $39.</strong> Claude Opus, GPT-5.5 premium, Gemini 3.5 Pro. Anda bayar penuh setiap bulan meski cuma butuh sesekali.</li>
<li><strong>Model open-weight makin bagus.</strong> DeepSeek V4, Kimi K2.6, GLM 5.2, Qwen3.7 sanggup bersaing dengan model frontier untuk kebanyakan tugas coding. Harganya murah atau gratis, tapi memasang masing-masing ke VS Code manual itu ribet.</li>
<li><strong>Tugas berbeda butuh model berbeda.</strong> Refactor cepat vs. debugging dalam vs. review konteks panjang. Satu model tidak cocok untuk semua.</li>
</ul>
<p>Ekstensi ini berada di tengah. Model gratis saat tugasnya sederhana. Pay-per-use saat butuh Claude Opus untuk satu prompt sulit. Langganan tetap saat sedang merampok refactor.</p>

<h2>Beberapa hal yang perlu diketahui sebelum mulai</h2>
<ul>
<li>Anda butuh GitHub Copilot Chat terpasang. Versi free cukup. Tidak perlu Pro, Pro+, atau Max.</li>
<li>Anda butuh akun VS Code atau instalasi lokal. VS Code 1.100 atau lebih baru.</li>
<li>API key disimpan di VS Code SecretStorage. Tidak meninggalkan mesin Anda.</li>
<li>Model gratis bergiliran. Big Pickle selalu gratis. DeepSeek V4 Flash Free, MiMo V2.5 Free, dan Nemotron bergiliran. Model berbayar tetap.</li>
<li>Ekstensi ini MIT, independen. Tidak berafiliasi dengan GitHub, OpenCode, atau provider model apa pun.</li>
</ul>

<h2>Paket mana yang cocok?</h2>
<p>Tiga opsi, ekstensi yang sama. Pilih berdasarkan seberapa sering Anda coding.</p>
<p><strong>Cuma mencoba, atau pemakaian ringan.</strong> Model gratis OpenCode Zen. $0. DeepSeek V4 Flash bekerja di saldo $0. Tanpa kartu. Rate limit rendah tanpa saldo, tapi cukup untuk mencoba ekstensi.</p>
<p><strong>Coding harian.</strong> Langganan OpenCode Go. $10 per bulan, $5 bulan pertama. DeepSeek V4 Pro, Kimi K2.6, GLM 5.1, Qwen3.7 Max, MiMo V2.5 Pro, MiniMax M3. Limit generous dalam window 5 jam, mingguan, dan bulanan.</p>
<p><strong>Butuh Claude, GPT, atau Gemini sesekali.</strong> Zen pay-per-use. Tambah $20 saldo. Claude Opus 4.7 ($5/$25 per 1 juta token), GPT-5.5 ($5/$30), Gemini 3.5 Flash ($0,50/$3). Anda hanya bayar yang dipakai. Menambah saldo juga meningkatkan rate limit model gratis.</p>
<p>Saran jujur saya: mulai dari free tier. Kalau Anda kena rate limit lebih dari dua kali seminggu, upgrade ke Go. Tambah saldo Zen hanya saat Anda spesifik butuh Claude atau GPT untuk suatu tugas.</p>

<h2>Cara setting</h2>
<p>Butuh sekitar 60 detik.</p>
<h3>1. Pasang GitHub Copilot Chat</h3>
<p>Kalau belum punya:</p>
<pre><code>code --install-extension GitHub.copilot-chat</code></pre>
<p>Masuk dengan akun GitHub apa saja. Free tier cukup.</p>
<h3>2. Pasang OpenCode for Copilot Chat</h3>
<p>Dari marketplace: <a href="https://marketplace.visualstudio.com/items?itemName=ltmoerdani.opencode-copilot-chat" target="_blank" rel="noopener noreferrer">OpenCode for Copilot Chat</a></p>
<p>Atau via command line:</p>
<pre><code>code --install-extension ltmoerdani.opencode-copilot-chat</code></pre>
<h3>3. Dapatkan API key OpenCode</h3>
<p>Buka <a href="https://opencode.ai/auth" target="_blank" rel="noopener noreferrer">opencode.ai/auth</a>, daftar, dan salin API key Anda.</p>
<p>Tidak perlu menambahkan metode pembayaran untuk mulai. Model gratis bekerja di saldo $0.</p>
<h3>4. Tambahkan provider ke Copilot Chat</h3>
<p>Buka Copilot Chat di VS Code (<code>Cmd+Shift+I</code> atau <code>Ctrl+Shift+I</code>). Klik nama model di picker.</p>
<pre><code>Model picker \u2192 "Add Models..." \u2192 OpenCode Zen \u2192 tempel API key</code></pre>
<p>Tekan Enter untuk menerima nama grup default. Model muncul di picker.</p>
<h3>5. Pilih model dan mulai chat</h3>
<p>Pilih model OpenCode apa saja dari dropdown. Mulai dari <code>DeepSeek V4 Flash Free</code> kalau mau tes tanpa bayar.</p>
<p>Selesai. Tool-calling, Agent Mode, edit file, perintah terminal. Semua bekerja native karena ekstensi meneruskan format tool-call dengan benar per endpoint.</p>

<h2>Apa yang sebenarnya Anda dapat</h2>
<table>
<thead><tr><th></th><th>Copilot Free</th><th>Copilot Pro+</th><th>+ OpenCode</th></tr></thead>
<tbody>
<tr><td>Model</td><td>2</td><td>Premium saja</td><td>30+</td></tr>
<tr><td>Model gratis</td><td>Tidak</td><td>Tidak</td><td>DeepSeek V4 Flash</td></tr>
<tr><td>Kontrol reasoning</td><td>Tidak ada</td><td>GitHub yang putuskan</td><td>Anda atur per model</td></tr>
<tr><td>Agent Mode</td><td>Tidak</td><td>Ya</td><td>Ya</td></tr>
<tr><td>Vision, PDF, Audio</td><td>Terbatas</td><td>Terbatas</td><td>Per model</td></tr>
<tr><td>Provider</td><td>GitHub</td><td>GitHub</td><td>OpenCode Zen atau Go</td></tr>
</tbody>
</table>

<h2>Model-modelnya</h2>
<p><strong>Gratis (tanpa pembayaran):</strong></p>
<ul>
<li>Big Pickle (selalu gratis, konteks 200K)</li>
<li>DeepSeek V4 Flash Free (konteks 200K)</li>
<li>MiMo V2.5 Free (bergiliran)</li>
<li>Nemotron 3 Super Free (bergiliran)</li>
</ul>
<p><strong>Langganan Go, $10/bulan ($5 bulan pertama):</strong></p>
<ul>
<li>DeepSeek V4 Pro (konteks 1M, output 384K, reasoning off sampai max)</li>
<li>Kimi K2.6 (konteks 262K, reasoning on/off)</li>
<li>GLM 5.1 (konteks 202K)</li>
<li>Qwen3.7 Max (konteks 1M, thinking budget 4K sampai 82K)</li>
<li>MiMo V2.5 Pro (konteks 1M)</li>
<li>MiniMax M3 (konteks 512K)</li>
</ul>
<p><strong>Zen pay-per-use (tambah saldo):</strong></p>
<ul>
<li>Claude Opus 4.7 ($5/$25 per 1 juta token)</li>
<li>Claude Sonnet 4.6 ($3/$15)</li>
<li>GPT-5.5 ($5/$30)</li>
<li>GPT-5.4 ($0,75 sampai $30 tergantung varian)</li>
<li>Gemini 3.5 Flash ($0,50/$3)</li>
<li>Grok 4 (konteks 256K)</li>
<li>Mistral Large, Llama 4 Maverick, Sonar Pro, Command R+</li>
</ul>

<h2>Kontrol thinking per keluarga model</h2>
<p>Tiap keluarga punya tombol reasoning sendiri. Anda atur dari model picker, tanpa file config.</p>
<ul>
<li><strong>DeepSeek:</strong> off / low / medium / high / max</li>
<li><strong>Qwen:</strong> <code>thinking_budget</code> dari 4.096 sampai 81.920 token</li>
<li><strong>MiMo:</strong> low / medium / high</li>
<li><strong>MiniMax:</strong> on / off</li>
<li><strong>GLM dan Kimi:</strong> on / off</li>
</ul>
<p>Saya biasanya pakai DeepSeek <code>high</code> untuk debugging, <code>medium</code> untuk refactor, <code>off</code> untuk pertanyaan cepat. <code>thinking_budget</code> Qwen berguna saat Anda butuh reasoning tapi harus membatasi biaya token di sesi panjang.</p>

<h2>Bagaimana routing sebenarnya bekerja</h2>
<p>Keluarga model berbeda berbicara protokol berbeda. Ekstensi merutekan masing-masing ke endpoint nativenya.</p>
<pre><code>Model GPT         \u2192 OpenAI /responses
Gemini            \u2192 Google :streamGenerateContent?alt=sse
Claude, MiniMax   \u2192 Anthropic /messages
DeepSeek, Qwen,
  Kimi, GLM, MiMo \u2192 /chat/completions</code></pre>
<p>Format tool-call diterjemahkan per endpoint. OpenAI pakai <code>tool_calls</code>, Anthropic pakai blok konten <code>tool_use</code>. Agent Mode (baca file, edit, jalankan terminal) tetap bekerja karena terjemahan terjadi di layer streaming.</p>
<p>Ada juga layer retry. Kalau API upstream menolak parameter karena metadata <code>models.dev</code> kedaluwarsa, ekstensi mengurai error, menambal body request, dan retry sekali. Ini menangani ketidaksesuaian config thinking dan penolakan temperature tanpa perlu rilis kode.</p>

<h2>Keterbatasan yang jujur</h2>
<p>Sebaiknya diakui sejak awal:</p>
<ul>
<li><strong>Biaya sesi tidak tampil di popover sesi native VS Code.</strong> VS Code 1.126 belum mengkonversi bagian data usage BYOK menjadi event progres <code>IChatUsage</code>. Ekstensi melacak biaya di status barnya sendiri. Saat VS Code memperbaiki ini, data akan mengalir otomatis.</li>
<li><strong>Model gratis punya rate limit rendah tanpa saldo.</strong> Menambah $20 ke Zen memperbaikinya, tapi kalau Anda mau benar-benar gratis, bersiaplah menunggu di jam sibuk.</li>
<li><strong>Beberapa model butuh konfigurasi spesifik.</strong> Kimi K2.7 Code menolak <code>temperature</code> dan memaksa thinking on. GLM hanya menerima <code>off</code>, <code>high</code>, atau <code>max</code>. Ekstensi menangani keanehan per model ini, tapi kalau model baru muncul dengan keanehan baru, mungkin 400 sampai metadata menyusul.</li>
<li><strong>Dukungan vision bervariasi.</strong> GLM, MiniMax, dan beberapa lainnya tidak mendukung input gambar. Ekstensi memfilter ini berdasarkan metadata <code>models.dev</code>.</li>
</ul>

<h2>Kesimpulan</h2>
<p>Kalau Anda di Copilot Free dan terus kena limit, atau di Pro+ dan terus berharap model yang tidak ada di katalog, ini jalan keluarnya. Free tier cukup untuk mencoba. Langganan Go adalah cara termurah untuk akses harian ke katalog open-weight. Zen pay-per-use mencakup kasus Claude/GPT/Gemini tanpa komitmen $39.</p>
<p>UI Chat yang sama yang sudah Anda pakai. Lebih banyak model. Tagihan lebih murah kebanyakan bulan.</p>
<p>Repo <a href="https://github.com/ltmoerdani/opencode-copilot-chat" target="_blank" rel="noopener noreferrer">MIT di GitHub</a>. Kontribusi disambut. Empat kontributor eksternal sudah mengirim fitur, perbaikan bug, dan dokumentasi.</p>

<h2>Link</h2>
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=ltmoerdani.opencode-copilot-chat" target="_blank" rel="noopener noreferrer">Listing marketplace</a></li>
<li><a href="https://github.com/ltmoerdani/opencode-copilot-chat" target="_blank" rel="noopener noreferrer">Repo GitHub</a> (MIT, kontribusi disambut)</li>
<li><a href="https://opencode.ai/docs" target="_blank" rel="noopener noreferrer">Dokumentasi OpenCode</a> (setup API key, detail harga)</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=ltmoerdani.cline-copilot-chat" target="_blank" rel="noopener noreferrer">Cline Copilot Chat</a> (ekstensi saudari untuk model ClinePass)</li>
</ul>`,
  },
];

/** Posts sorted newest-first. */
export function getSortedPosts(): BlogPost[] {
  return [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/** Look up a single post by slug. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

/** Slugs for `generateStaticParams`. */
export function getAllSlugs(): string[] {
  return allPosts.map((p) => p.slug);
}

/** Format an ISO date as a human-readable string per locale. */
export function formatDate(iso: string, locale: 'en' | 'id'): string {
  const d = new Date(iso);
  if (locale === 'id') {
    return d.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
  return d.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
