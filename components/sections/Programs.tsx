import Link from "next/link";
import { barberOfflinePackages } from "@/data/programs";
import { Check, Star, Briefcase, ArrowRight, ShieldCheck, Sparkles, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Programs() {
  return (
    <section id="program" className="py-24 bg-[#080808] relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-xs text-accent-gold font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pilihan Paket Resmi</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-ivory">
              Barber Course — Reguler Class
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Daftar paket bimbingan tatap muka di Pademmui Barberschool Jogja. Transparan, terstruktur, dan disesuaikan dengan tujuan karir atau wirausaha Anda.
            </p>

            <div className="inline-block p-2.5 px-4 rounded-xl bg-surface-elevated border border-white/10 text-xs transition-transform duration-300 hover:scale-105">
              <span className="text-text-muted">Kebijakan Penyaluran: </span>
              <span className="text-accent-gold font-bold">
                Program Penyaluran Kerja Barbershop Berlaku Mulai Paket 2
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {barberOfflinePackages.map((pkg, idx) => {
            const isRec = pkg.isPopular;
            const serviceId =
              pkg.id === "paket-1"
                ? "ac-paket-1"
                : pkg.id === "paket-2"
                ? "ac-paket-2"
                : pkg.id === "paket-3"
                ? "ac-paket-3"
                : "ac-paket-4";

            return (
              <ScrollReveal
                key={pkg.id}
                direction="up"
                delay={idx * 120}
                className="h-full flex flex-col"
              >
                <div
                  className={`group relative rounded-2xl flex-1 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                    isRec
                      ? "bg-[#161616] border-2 border-accent-gold shadow-gold-glow hover:border-accent-gold-light"
                      : "bg-[#111111] border border-white/10 hover:border-accent-gold/40 hover:shadow-luxury"
                  }`}
                >
                  {/* Recommended Badge */}
                  {isRec && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent-gold text-[#0A0A0A] text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 z-10">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Paket Terlengkap</span>
                    </div>
                  )}

                  <div className="p-6 sm:p-7 space-y-6 flex-1">
                    {/* Package Header */}
                    <div>
                      <span className="text-xs uppercase tracking-wider text-accent-gold font-semibold">
                        {pkg.badge}
                      </span>
                      <h3 className="text-2xl font-bold text-text-ivory mt-1 group-hover:text-accent-gold transition-colors">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-text-muted mt-1 font-mono">
                        {pkg.sessions} ({pkg.duration})
                      </p>
                    </div>

                    {/* Price Block */}
                    <div className="pt-2 pb-4 border-y border-white/10">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-extrabold text-text-ivory tracking-tight">
                          {pkg.price}
                        </span>
                      </div>
                      <p className="text-[11px] text-text-muted mt-1">
                        Investasi all-in (Model, Alat, Snack, Sertifikat)
                      </p>
                    </div>

                    {/* Job placement badge */}
                    {pkg.jobPlacement ? (
                      <div className="p-2.5 rounded-lg bg-green-950/40 border border-green-500/20 flex items-center gap-2 text-xs text-green-300 font-medium">
                        <Briefcase className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>Termasuk Penyaluran Kerja Jogja</span>
                      </div>
                    ) : (
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs text-text-muted flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 opacity-50 flex-shrink-0" />
                        <span>Fokus Penguasaan Skill Dasar</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs leading-relaxed text-text-secondary">
                      {pkg.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 pt-2">
                      <p className="text-[11px] uppercase tracking-wider text-text-muted font-bold">
                        Materi & Fasilitas:
                      </p>
                      <ul className="space-y-2 text-xs text-text-secondary">
                        {pkg.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-accent-gold flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Package Footer & Direct Link to Booking Form */}
                  <div className="p-6 sm:p-7 pt-0 mt-auto">
                    <Link
                      href={`/booking?type=academy&service=${serviceId}`}
                      className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 ${
                        isRec
                          ? "bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] shadow-gold-glow hover:scale-105"
                          : "bg-surface-elevated hover:bg-surface-highlight border border-white/10 text-text-ivory hover:text-accent-gold hover:border-accent-gold/40 hover:scale-105"
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Daftar & Booking {pkg.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Pricing Inclusions Summary */}
        <ScrollReveal direction="up" delay={200} className="mt-14">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-elevated border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-text-secondary transition-all duration-300 hover:border-accent-gold/30">
            <div className="space-y-1.5 p-3 rounded-xl hover:bg-white/[0.02] transition-colors">
              <h4 className="font-bold text-text-ivory text-sm">Sudah Termasuk Model Orang</h4>
              <p>
                Tidak perlu mencari atau membayar model sendiri. Semua model kepala manusia disediakan langsung oleh Pademmui.
              </p>
            </div>
            <div className="space-y-1.5 p-3 rounded-xl hover:bg-white/[0.02] transition-colors">
              <h4 className="font-bold text-text-ivory text-sm">Fasilitas Mess Peserta</h4>
              <p>
                Khusus peserta dari luar Jogja, mess siap dihuni hanya dengan kontribusi utilitas Rp200.000 sampai lulus.
              </p>
            </div>
            <div className="space-y-1.5 p-3 rounded-xl hover:bg-white/[0.02] transition-colors">
              <h4 className="font-bold text-text-ivory text-sm">Garansi Bimbingan Sampai Bisa</h4>
              <p>
                Jika ada teknik yang belum dikuasai, mentor membimbing dengan sabar dan konsultasi tetap aktif seumur hidup.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
