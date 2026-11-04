import { testimonials } from "@/data/testimonials";
import { Star, Quote, MapPin, CheckCircle, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-surface/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-xs text-accent-gold font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Kisah Sukses Peserta</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-ivory">
              Cerita Jujur 100% dari Alumni Pademmui
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Peserta kami datang dari pelosok pulau Jawa hingga luar pulau Indonesia. 90% memulai tanpa pengalaman mencukur sama sekali.
            </p>

            {/* Google Review Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface-elevated border border-white/10 text-xs">
              <div className="flex items-center text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-text-ivory font-bold">Ratusan Ulasan Bintang 5</span>
              <span className="text-text-muted">di Google Review</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={idx * 100}
              className="h-full flex flex-col"
            >
              <div className="h-full p-7 rounded-2xl bg-surface-elevated border border-white/10 flex flex-col justify-between space-y-6 hover:border-accent-gold/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:shadow-gold-glow cursor-pointer">
                <div className="space-y-4">
                  {/* Rating stars & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-400 gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-accent-gold/20" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-text-ivory flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-accent-gold" />
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] text-text-muted mt-0.5">
                      <MapPin className="w-3 h-3 text-accent-gold" />
                      <span>{item.origin}</span>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-bold text-accent-gold bg-accent-gold/10 px-2 py-1 rounded">
                    {item.role.includes("Kerja") ? "Disalurkan" : "Wirausaha"}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
