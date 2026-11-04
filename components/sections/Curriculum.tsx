import { Scissors, Sparkles, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Curriculum() {
  const steps = [
    {
      week: "Minggu 1",
      title: "Fundamental & Adaptasi Alat",
      focus: "Membangun rasa percaya diri memegang alat dan memahami anatomi kepala.",
      topics: [
        "Pengenalan clipper, trimmer, shaver, scissor, razor, & attachment guard",
        "Cara perawatan mesin cukur, blade alignment, & kebersihan higienis",
        "Teknik Parting rambut atas (U Section, Horseshoe) & sectioning",
        "Gerakan dasar Clipper Overcomb & Scissor Overcomb",
        "Praktek pertama pada model manusia dengan arahan langsung mentor",
      ],
      icon: Scissors,
    },
    {
      week: "Minggu 2",
      title: "Gaya Rambut Populer & Fading Mastery",
      focus: "Menguasai transisi gradasi halus dan gaya rambut kekinian.",
      topics: [
        "Teknik Low Fade, Mid Fade, High Fade, & Taper Fade presisi",
        "Gaya rambut modern: French Crop, Two Block, Mullet, Comma Hair, & Classic Sidepart",
        "Teknik Shape Up, detailing garis tepi (outline) menggunakan razor & trimmer",
        "Prosedur cuci rambut standar barbershop & teknik pijat kepala relaksasi",
        "Praktek berulang pada model manusia untuk mengasah konsistensi",
      ],
      icon: TrendingUp,
    },
    {
      week: "Minggu 3",
      title: "Finishing, Kecepatan, & Uji Kelulusan",
      focus: "Mencapai standar kerja profesional, kecepatan efisien, dan etika barber.",
      topics: [
        "Teknik hairstyling menggunakan pomade, clay, powder, & hairspray",
        "Time management: mencukur rapi dan bersih dalam durasi standar industri (30-45 menit)",
        "Etika komunikasi melayani pelanggan agar menjadi langganan setia",
        "Uji evaluasi akhir kelulusan dan penyerahan Sertifikat Resmi Barberman",
        "Persiapan penempatan kerja di barbershop rekanan (bagi Paket 2, 3, & 4)",
      ],
      icon: AwardBadgeIcon,
    },
    {
      week: "Lanjutan (Paket 3 & 4)",
      title: "Chemical Mastery & Manajemen Bisnis",
      focus: "Keahlian lanjutan bernilai tinggi dan fondasi wirausaha mandiri.",
      topics: [
        "Materi & praktek Hair Coloring (Bleaching, toning, trend highlight)",
        "Materi & praktek Hair Perming (Korean wave, down perm, spiral)",
        "Perawatan relaksasi wajah pria (Black Mask Treatment)",
        "Manajemen Barbershop: Perhitungan modal, SOP operasional, & 4 sistem gaji barberman",
        "Strategi promosi online/offline untuk menarik ratusan pelanggan pertama",
      ],
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 bg-surface/30 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-accent-gold font-semibold">
              Kurikulum Terstruktur
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-ivory">
              Alur Belajar dari Nol Hingga Siap Bekerja
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Metode pembelajaran Pademmui didesain sistematis dan teruji pada 1.000+ alumni. Tanpa teori bertele-tele, langsung fokus pada praktek nyata.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <ScrollReveal
                key={step.week}
                direction="up"
                delay={idx * 120}
                className="h-full"
              >
                <div className="h-full relative p-6 sm:p-7 rounded-2xl bg-surface-elevated border border-white/10 flex flex-col justify-between hover:border-accent-gold/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:shadow-gold-glow cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-accent-gold px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20">
                        {step.week}
                      </span>
                      <span className="text-[11px] text-text-muted">Fase 0{idx + 1}</span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-text-ivory mt-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-text-muted mt-1 leading-normal">
                        {step.focus}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5 space-y-2.5">
                      {step.topics.map((t) => (
                        <div key={t} className="flex items-start gap-2 text-xs text-text-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold flex-shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-text-muted">
                    <ShieldCheck className="w-4 h-4 text-accent-gold" />
                    <span>Didampingi Mentor Langsung</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AwardBadgeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      {...props}
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
