import { Users, UserCheck, Home, Briefcase, Award, ShieldAlert } from "lucide-react";

export default function Highlights() {
  const pillars = [
    {
      icon: Users,
      title: "Maksimal 3 Siswa / Kelas",
      tagline: "Eksklusif & Fokus",
      description: "Kami tidak mengampu belasan siswa dalam satu ruangan. Dengan membatasi 3 orang, mentor memantau setiap lekukan tangan Anda dan memberikan evaluasi harian mendalam.",
    },
    {
      icon: UserCheck,
      title: "Praktek Model Manusia Asli",
      tagline: "Bukan Boneka / Manekin",
      description: "Seluruh model praktek disediakan oleh Pademmui. Anda langsung berhadapan dengan kontur kepala, jenis rambut asli, dan karakter pelanggan nyata sejak hari pertama latihan.",
    },
    {
      icon: Home,
      title: "Fasilitas Mess Luar Kota",
      tagline: "Hanya Utilitas Rp200rb",
      description: "Peserta dari luar daerah atau luar pulau tidak perlu pusing mencari kos di Jogja. Mess telah disediakan, cukup bayar biaya utilitas (air, listrik, sampah) Rp200.000 sampai lulus.",
    },
    {
      icon: Briefcase,
      title: "Penyaluran Kerja Barbershop",
      tagline: "Langsung di Jogja",
      description: "Tersedia program penyaluran kerja langsung ke barbershop rekanan di Yogyakarta bagi siswa Paket 2 ke atas (syarat usia maks 35 tahun dan diutamakan belum berkeluarga).",
    },
  ];

  return (
    <section className="py-20 bg-surface/50 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent-gold font-semibold">
            Standar Bimbingan Pademmui
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-text-ivory">
            Kenapa 1.000+ Peserta Memilih Belajar di Pademmui?
          </h2>
          <p className="text-sm text-text-secondary">
            Bukan sekadar kursus potong rambut biasa. Kami membangun fondasi mental, keterampilan teknis presisi, dan peluang karir nyata.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative p-6 sm:p-7 rounded-2xl bg-surface-elevated/80 border border-white/10 hover:border-accent-gold/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-accent-gold font-medium block">
                      {pillar.tagline}
                    </span>
                    <h3 className="text-lg font-bold text-text-ivory mt-1">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-text-secondary">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-text-muted">
                  <span>Pilar #{idx + 1}</span>
                  <span className="text-accent-gold font-mono">100% Terbukti</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Realistic Honesty Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#141414] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-ivory">
                Perhatian: Slot Terbatas Hanya 3 Orang per Sesi
              </h4>
              <p className="text-xs text-text-secondary">
                Jika admin mengonfirmasi ketersediaan via WA, seat masih terbuka. Jika kuota penuh, calon siswa masuk daftar tunggu (*waiting list*).
              </p>
            </div>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=6282134060584&text=Halo+admin+Pademmui%2C+saya+ingin+cek+ketersediaan+slot+kursus+barber+untuk+bulan+ini."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex-shrink-0 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-text-ivory text-xs font-semibold tracking-wide border border-white/10 transition-colors text-center"
          >
            Cek Ketersediaan Slot Bulan Ini
          </a>
        </div>
      </div>
    </section>
  );
}
