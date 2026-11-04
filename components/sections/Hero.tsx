import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] md:min-h-[96vh] flex items-center justify-center overflow-hidden bg-[#080808] pt-28 pb-20">
      {/* Full-bleed Authentic Background Photo with Luxury Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/11_1741658627387-IMG_0624.webp"
          alt="Pademmui Barberschool Jogja Atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.38] contrast-[1.12] scale-[1.03] transition-transform duration-1000"
        />
        {/* Multi-stage dark gradient overlays for maximum text clarity & luxury contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/90 via-[#080808]/75 to-[#080808]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#080808]/50 to-[#080808]" />
      </div>

      {/* Hero Content: Ultra Clean, Spacious, & Centered */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-9">
        <ScrollReveal delay={150} direction="up">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-ivory leading-[1.14] max-w-4xl mx-auto">
            Belajar Potong Rambut <span className="text-gold-gradient">Dari Nol</span> Sampai Siap Berkarir Mandiri.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300} direction="up">
          {/* Subheadline: Clear, Dignified, & Clean */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto font-normal">
            Kursus barber intensif di Yogyakarta dengan praktik langsung 100% menggunakan model kepala manusia asli dan bimbingan privat maksimal 3 siswa per kelas.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={450} direction="up">
          {/* Clean Dual Action CTAs linking to /booking and /#program */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/booking"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-sm tracking-wide transition-all duration-300 shadow-gold-glow flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#program"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black/55 hover:bg-black/80 backdrop-blur-md border border-white/20 hover:border-accent-gold text-text-ivory font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              <span>Lihat 4 Paket Kursus</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Subtle Scroll Down Prompt */}
        <ScrollReveal delay={600} direction="none" className="pt-10">
          <Link
            href="/#highlights"
            className="inline-flex flex-col items-center gap-1.5 text-text-muted hover:text-accent-gold transition-colors text-[11px] uppercase tracking-widest"
          >
            <span>Eksplorasi Kurikulum & Fasilitas</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-accent-gold" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
