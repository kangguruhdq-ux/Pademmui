import { Wind, Users, Home, Wrench, Coffee, LifeBuoy, MapPin } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function Facilities() {
  const facilities = [
    {
      icon: Wind,
      title: "Studio Belajar Full AC",
      description: "Ruang praktek tertutup yang sejuk, bersih, dan harum. Suasana nyaman mendukung konsentrasi tinggi saat belajar memotong rambut secara mendalam.",
    },
    {
      icon: Users,
      title: "Model Kepala Manusia Asli",
      description: "Kami sediakan seluruh model praktek kepala manusia langsung. Siswa terbiasa menghadapi berbagai jenis tekstur rambut dan bentuk kepala nyata.",
    },
    {
      icon: Home,
      title: "Mess Peserta Luar Kota",
      description: "Fasilitas tempat tinggal aman dan nyaman bagi siswa dari luar kota/luar pulau. Cukup iuran utilitas Rp200.000 sampai masa pelatihan selesai.",
    },
    {
      icon: Wrench,
      title: "Peralatan Praktek Lengkap",
      description: "Tidak perlu membeli alat sebelum kursus. Mesin clipper premium, trimmer, shaver, scissor set, dan produk styling disediakan selama bimbingan.",
    },
    {
      icon: Coffee,
      title: "Gratis Snack Harian",
      description: "Tersedia snack dan minuman pada setiap pertemuan kelas agar stamina belajar tetap terjaga tanpa harus repot mencari konsumsi di luar.",
    },
    {
      icon: LifeBuoy,
      title: "Konsultasi Seumur Hidup",
      description: "Dukungan mentor tidak berakhir saat wisuda. Anda tetap dapat berkonsultasi seputar kendala di tempat kerja atau rencana pembukaan barbershop baru.",
    },
  ];

  return (
    <section id="fasilitas" className="py-24 bg-surface/50 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Facilities Grid */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal direction="up">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.2em] text-accent-gold font-semibold">
                  Fasilitas & Lingkungan Belajar
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-ivory">
                  Dirancang untuk Kenyamanan Maksimal Anda
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Kami memastikan seluruh sarana dan prasarana siap pakai agar Anda dapat fokus 100% pada penguasaan keterampilan potong rambut tanpa beban teknis.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {facilities.map((fac, idx) => {
                const Icon = fac.icon;
                return (
                  <ScrollReveal
                    key={fac.title}
                    direction="up"
                    delay={idx * 100}
                  >
                    <div className="p-5 rounded-2xl bg-surface-elevated/70 border border-white/5 space-y-2.5 hover:border-accent-gold/30 transition-colors h-full">
                      <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-text-ivory">{fac.title}</h3>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {fac.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Showcase of Studio */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={200}>
              <div className="relative rounded-2xl overflow-hidden bg-surface-elevated border border-white/10 shadow-2xl aspect-[4/5]">
                <Image
                  src="/images/gallery/26_1741658837982-IMG_0821.webp"
                  alt="Suasana studio kursus potong rambut Pademmui Barberschool Jogja"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-6 inset-x-6 bg-[#0E0E0E]/90 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-semibold text-accent-gold">
                    <MapPin className="w-4 h-4" />
                    <span>Lokasi Studio Resmi:</span>
                  </div>
                  <p className="text-xs text-text-ivory mt-1">
                    Jalan Wonocatur No.15, Banguntapan, Bantul, Yogyakarta
                  </p>
                  <p className="text-[11px] text-text-muted mt-0.5">
                    Dekat pusat kota Jogja, sarana ibadah, dan wisata kuliner.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
