# DESIGN SYSTEM & VISUAL GUIDELINES — PADEMMUI BARBERSCHOOL

**Brand Direction:** BLACK ELEGANT — PREMIUM — MODERN — PROFESSIONAL  
**Archetype:** Dark Luxury Barber Academy  
**Philosophy:** Editorial typography, high-contrast dark surfaces, authentic photography, human-centered craftsmanship.

---

## 1. Visual Direction

Pademmui Barberschool memancarkan atmosfer akademi barbering kelas atas dengan standar pengerjaan presisi. Desain menjauhi estetika "AI slop" generik (tidak ada gradien neon ungu/cyan, tidak ada kartu melayang dengan radius berlebihan, tidak ada ikon abstrak tak bermakna).

Prinsip visual utama:
- **Tonal Depth:** Lapisan hitam obsidian dan arang gelap pekat menciptakan latar belakang yang tenang dan berwibawa.
- **Editorial Asymmetry:** Komposisi layout menggabungkan ritme editorial majalah dengan grid modern, menonjolkan foto nyata mentor dan siswa dalam aktivitas memotong rambut.
- **Muted Champagne Accents:** Sentuhan aksen emas antik/champagne hangat (#C5A880 & #B89B70) digunakan secara hemat hanya untuk elemen penunjuk status, lencana, dan penekanan hierarki.
- **Crafted Precision:** Garis pemisah ultra-tipis (1px semi-transparan), tipografi terukur, dan kontras tajam yang nyaman di mata.

---

## 2. Color System

| Token Name | Hex Code | Deskripsi & Peruntukan |
|:---|:---|:---|
| `--bg-base` | `#080808` | Background utama kanvas terdalam (Deep Obsidian Black). |
| `--bg-surface` | `#111111` | Background section sekunder dan container utama. |
| `--bg-elevated`| `#181818` | Card surface, elevated panels, modal backgrounds. |
| `--bg-highlight`| `#222222` | Hover states, pill badges, subtle active containers. |
| `--border-subtle`| `rgba(255, 255, 255, 0.08)` | Border pemisah tipis dan kontur kartu. |
| `--border-focus` | `rgba(197, 168, 128, 0.40)` | Border fokus dan penanda kartu unggulan. |
| `--text-primary`| `#F6F4F0` | Teks utama, judul, dan penanda kunci (Soft Alabaster / Ivory). |
| `--text-secondary`| `#A6A19A` | Teks paragraf, deskripsi materi, dan teks pendukung. |
| `--text-muted` | `#6E6A64` | Metadata, footnote, timestamp, dan disclaimer. |
| `--accent-gold`| `#C5A880` | Aksen brand utama: bintang, harga kunci, outline aksen. |
| `--accent-hover`| `#D6BC96` | State hover aksen interaktif. |
| `--badge-bg` | `rgba(197, 168, 128, 0.12)` | Latar belakang lencana eksklusif / penanda kuota. |
| `--whatsapp-green`| `#25D366` | Aksen warna khusus pada tombol CTA WhatsApp resmi. |

---

## 3. Typography System

Menggunakan font modern sans-serif dan display serif elegan yang berwibawa, tajam, dan mudah dibaca pada seluruh resolusi.

- **Display & Section Titles:** Syne / Cinzel / Playfair Display feel yang dipadukan dengan Plus Jakarta Sans / Inter untuk kejelasan pembacaan teknis.
- **Body & Technical Info:** Plus Jakarta Sans (clean, geometric humanist, optimal legibility).

### Hierarchy:
- **Hero Title:** `text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]`
- **Section Heading:** `text-2xl md:text-4xl font-bold tracking-tight text-[#F6F4F0]`
- **Sub-heading / Kicker:** `text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]`
- **Card Heading:** `text-lg md:text-xl font-semibold tracking-normal text-[#F6F4F0]`
- **Body Text:** `text-sm md:text-base leading-relaxed text-[#A6A19A]`
- **Caption / Meta:** `text-xs leading-normal text-[#6E6A64]`

---

## 4. Spacing & Rhythm System

- Grid berbasis 8px (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `128px`).
- Jarak antar section: `py-16 md:py-24 lg:py-32` untuk memberikan ruang bernapas yang cukup (*breathing room*).
- Container lebar konsisten: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

---

## 5. Layout Principles

1. **Anti-Template Pattern:** Menghindari pengulangan grid 3-kolom yang monoton di setiap section. Menggunakan variasi:
   - Hero split: Asymmetric editorial showcase dengan lencana badge dan statistik nyata.
   - Pricing comparison: Tier cards bertingkat dengan penanda Paket 4 sebagai paket paling komprehensif.
   - Process flow: Timeline vertikal/horizontal terstruktur menunjukkan alur 3 minggu dari nol hingga siap kerja.
   - Gallery mosaic: Komposisi masonry responsive dengan aspek rasio autentik.
2. **Authentic Visual First:** Setiap section diiringi foto asli kegiatan Pademmui, bukan ilustrasi 3D generic atau stock photo asing.

---

## 6. Component Principles

- **Buttons & CTAs:**
  - Primary CTA: Kontras tinggi, teks tegas, touch target minimal 48px pada perangkat mobile, feedback visual halus pada state `:hover` dan `:active`.
  - Secondary CTA: Outline halus 1px border emas/putih dengan latar belakang transparan gelap.
- **Cards & Surfaces:**
  - Radius sudut elegan (`rounded-xl` atau `rounded-2xl`, tidak berlebihan).
  - Background surface teratur: kontras subtle terhadap canvas utama.
  - Border tipis `border border-white/10` memberikan presisi geometris.
- **Badges & Tags:**
  - Desain minimalis tanpa efek glow yang mencolok.
  - Font ukuran kecil uppercase dengan tracking lebar (`tracking-wider text-xs`).

---

## 7. Interaction & Motion Direction

- Animasi subtil, halus, dan bertujuan (*purpose-driven*):
  - Transisi fade-in dan slide-up lembut pada elemen saat masuk viewport.
  - Durasi transisi standar: `200ms` hingga `350ms` dengan kurva `cubic-bezier(0.16, 1, 0.3, 1)`.
  - Menghormati pengaturan `prefers-reduced-motion` untuk aksesibilitas maksimal.

---

## 8. Mobile First & Responsive Behavior

- Didesain teliti mulai dari lebar viewport `320px` (iPhone SE) hingga layar desktop ultra-wide.
- **Zero Horizontal Overflow:** Semua container dibatasi overflow terkontrol, tabel/kartu memiliki scrolling horizontal mulus atau susunan vertikal adaptif pada mobile.
- **Mobile Navigation:** Slide-over drawer yang responsif, touch-friendly, dengan tombol WhatsApp floating yang mudah dijangkau satu tangan (*thumb-zone friendly*).
- **Sticky Contact Bar:** Akses cepat konsultasi via WhatsApp admin langsung di genggaman pengguna mobile.

---

## 9. Accessibility (WCAG 2.1 AA)

- Rasio kontras teks terhadap background minimal 4.5:1 untuk teks normal dan 3:1 untuk teks berukuran besar.
- Target sentuh interaktif (*touch target*) minimal 44x44 pixel di seluruh tombol dan tautan mobile.
- Semua gambar dilengkapi atribut `alt` deskriptif dalam Bahasa Indonesia.
- Navigasi keyboard penuh (`tabindex`, outline fokus terlihat jelas).
- Tag semantik HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
