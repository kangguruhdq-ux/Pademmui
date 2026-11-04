import { onlinePrograms, freeResources } from "@/data/programs";
import { Video, Check, ArrowRight, Download, Gift, ExternalLink, Play } from "lucide-react";

export default function OnlineCourses() {
  return (
    <section id="online" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-xs text-accent-gold font-semibold tracking-wider uppercase">
            <Video className="w-3.5 h-3.5" />
            <span>Digital E-Course & SOP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-ivory">
            Belajar Mandiri Kapan Saja & Dimana Saja
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Tidak sempat datang ke Jogja? Akses materi pembelajaran online terstruktur, video resolusi tinggi, modul PDF, dan garansi akses seumur hidup.
          </p>
        </div>

        {/* Online Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {onlinePrograms.slice(0, 3).map((prog) => (
            <div
              key={prog.id}
              className="p-7 rounded-2xl bg-surface-elevated border border-white/10 hover:border-accent-gold/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-accent-gold px-2.5 py-1 rounded-md bg-accent-gold/10">
                    {prog.videoCount}
                  </span>
                  <span className="text-[11px] text-text-muted">Akses Selamanya</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-text-ivory">{prog.title}</h3>
                  <p className="text-xs text-text-muted mt-1">{prog.subtitle}</p>
                </div>

                {/* Price block */}
                <div className="py-3 border-y border-white/10 flex items-baseline gap-2">
                  <span className="text-2xl font-black text-text-ivory">
                    {prog.pricePromo}
                  </span>
                  <span className="text-xs text-text-muted line-through">
                    {prog.priceNormal}
                  </span>
                  <span className="ml-auto text-[10px] uppercase font-bold text-green-400 bg-green-950/60 px-2 py-0.5 rounded border border-green-500/20">
                    Hemat Promo
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 text-xs text-text-secondary">
                  {prog.features.slice(0, 5).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-accent-gold flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {prog.bonusText && (
                  <div className="p-3 rounded-lg bg-surface border border-accent-gold/20 text-[11px] text-accent-gold flex items-center gap-2">
                    <Gift className="w-4 h-4 flex-shrink-0" />
                    <span>{prog.bonusText}</span>
                  </div>
                )}
              </div>

              <div className="pt-6">
                <a
                  href={prog.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-surface hover:bg-surface-highlight border border-white/15 text-text-ivory hover:text-accent-gold text-xs font-bold tracking-wide transition-colors flex items-center justify-center gap-2"
                >
                  <span>Dapatkan Akses Kelas</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Free Educational Starter Resources Section */}
        <div id="materi-gratis" className="mt-20 pt-16 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs uppercase tracking-widest text-accent-gold font-semibold">
              Materi Edukasi Permulaan
            </span>
            <h3 className="text-2xl font-bold text-text-ivory">
              Modul & Video Starter Kit (100% GRATIS)
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary">
              Pelajari teknik dasar dan gabung bersama komunitas kami sebelum memutuskan mengambil program berbayar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {freeResources.map((res) => (
              <div
                key={res.title}
                className="p-6 rounded-2xl bg-surface/60 border border-white/5 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-accent-gold bg-accent-gold/10 px-2 py-1 rounded inline-block">
                    {res.badge}
                  </span>
                  <h4 className="text-base font-bold text-text-ivory">{res.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {res.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-accent-gold hover:text-accent-gold-light"
                  >
                    <span>{res.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
