import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, MapPin, Users, Award } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#080808]">
      {/* Subtle luxury ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-gold/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-white/[0.02] blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Propositions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Batch Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-elevated border border-white/10 text-xs">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-ping" />
              <span className="text-text-secondary font-medium">Bimbingan Eksklusif:</span>
              <span className="text-accent-gold font-semibold">Maksimal 3 Siswa / Kelas</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-ivory leading-[1.12]">
              Belajar Potong Rambut <span className="text-gold-gradient">Dari Nol</span> Sampai Siap Berkarir Mandiri.
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Kursus barber intensif di Yogyakarta dengan praktik langsung 100% menggunakan model kepala manusia asli (bukan boneka). Dibimbing praktisi berpengalaman dan dibantu program penyaluran kerja langsung setelah lulus.
            </p>

            {/* Value checklist bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-text-secondary text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <span>Tanpa pengalaman (90% mulai dari nol)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <span>Praktek kepala orang, bukan manekin</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <span>Fasilitas mess luar kota (Rp 200rb sampai lulus)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <span>Penyaluran kerja ke barbershop di Jogja</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={siteConfig.contacts.waBarberLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-sm tracking-wide transition-all duration-200 shadow-gold-glow flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Daftar Konsultasi Slot</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/#program"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-surface-elevated hover:bg-surface-highlight border border-white/10 text-text-ivory font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Lihat 4 Paket Kursus</span>
              </Link>
            </div>

            {/* Verified Meta Info */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-gold" />
                <span>Banguntapan, Bantul, DIY</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-accent-gold" />
                <span>Sertifikat Resmi Barberman</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame with Real Studio Imagery & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative borders */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-b from-accent-gold/20 via-white/5 to-transparent blur-sm pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden bg-surface-elevated border border-white/10 shadow-2xl aspect-[4/5] sm:aspect-[3/4]">
                <Image
                  src="/images/gallery/11_1741658627387-IMG_0624.webp"
                  alt="Instruktur Pademmui membimbing siswa praktek mencukur langsung kepala model"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 bg-[#0A0A0A]/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 flex items-center gap-2.5">
                  <div className="relative w-7 h-7 flex-shrink-0">
                    <Image
                      src="/images/logo_badge.png"
                      alt="Pademmui Emblem"
                      fill
                      sizes="28px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-wider text-accent-gold uppercase font-bold">
                      Pademmui Academy
                    </p>
                    <p className="text-[11px] text-text-ivory font-medium">Est. 2017 • Yogyakarta</p>
                  </div>
                </div>

                {/* Bottom Stats Card Overlay */}
                <div className="absolute bottom-4 inset-x-4 bg-[#0E0E0E]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-muted">Metode Pelatihan</span>
                    <span className="text-accent-gold font-semibold">100% Tatap Muka</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-muted">Kapasitas Sesi</span>
                    <span className="text-text-ivory font-medium">Maksimal 3 Orang</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-muted">Penyaluran Kerja</span>
                    <span className="text-green-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Tersedia (Paket 2+)
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Verified Student Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-[#161616] p-3 rounded-xl border border-white/15 shadow-2xl">
                <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold text-xs">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-ivory">1.000+ Alumni</p>
                  <p className="text-[10px] text-text-muted">Dari Seluruh Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
