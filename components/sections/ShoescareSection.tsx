import Link from "next/link";
import { shoescareProgram } from "@/data/programs";
import { Check, ShieldCheck, ArrowRight, Sparkles, RefreshCw, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ShoescareSection() {
  return (
    <section id="shoescare" className="py-24 bg-[#0A0A0A] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-surface-elevated/70 border border-white/10 relative overflow-hidden transition-all duration-300 hover:border-accent-gold/40 hover:shadow-luxury">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-gold/10 blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-gold/15 border border-accent-gold/30 text-xs font-semibold text-accent-gold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{shoescareProgram.badge}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-ivory">
                  ShoesCare Academy: Peluang Bisnis Modal Minim, Untung Tebal
                </h2>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {shoescareProgram.description}
                </p>

                {/* Verified highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-text-secondary pt-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent-gold flex-shrink-0" />
                    <span>Kapasitas Super Privat: Maks. 2 Siswa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent-gold flex-shrink-0" />
                    <span>Praktek Langsung Berbagai Bahan Sepatu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-accent-gold flex-shrink-0" />
                    <span>Garansi Mengulang Seumur Hidup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent-gold flex-shrink-0" />
                    <span>Sertifikat & Modul Bisnis Lengkap</span>
                  </div>
                </div>

                {/* Module list */}
                <div className="pt-4 space-y-3">
                  <h3 className="text-xs uppercase tracking-wider text-text-muted font-bold">
                    Materi yang Diajarkan Tuntas:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
                    {shoescareProgram.modules.map((m) => (
                      <div key={m} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-accent-gold flex-shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA linking directly to booking form */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/booking?type=academy&service=ac-shoescare"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-xs tracking-wide transition-all duration-300 shadow-gold-glow flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Daftar / Booking ShoesCare Academy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-xs text-text-muted">
                    Lokasi: Studio Wonocatur Banguntapan, Bantul
                  </span>
                </div>
              </div>

              {/* Right Card / Inclusions with tactile hover scale */}
              <div className="lg:col-span-5">
                <div className="p-7 rounded-2xl bg-[#131313] border border-white/10 space-y-6 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:border-accent-gold/40 hover:shadow-gold-glow cursor-pointer">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-accent-gold font-medium">
                      Fasilitas Diterima Siswa
                    </span>
                    <h3 className="text-xl font-bold text-text-ivory mt-1">
                      Paket Lengkap Shoescare
                    </h3>
                  </div>

                  <div className="space-y-3 border-y border-white/10 py-5">
                    {shoescareProgram.inclusions.map((inc) => (
                      <div key={inc} className="flex items-start gap-2 text-xs text-text-secondary">
                        <Check className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-surface border border-white/5 space-y-1">
                    <p className="text-xs font-semibold text-text-ivory">Potensi Margin Usaha:</p>
                    <p className="text-[11px] text-text-secondary leading-relaxed">
                      Tarif cuci per pasang sepatu rata-rata Rp30.000 – Rp75.000. Dikerjakan dari rumah, 5 pasang per hari sudah menghasilkan jutaan rupiah per bulan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
