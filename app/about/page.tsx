import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, HeartHandshake, MapPin, ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import { siteConfig } from "@/data/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Tentang Pademmui Barberschool — Profil & Filosofi",
  description: "Mengenal Pademmui Barbershop & Barberschool yang berdiri sejak 2017 di Yogyakarta. Akademi bimbingan potong rambut intensif berorientasi kerja nyata.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-[#080808] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-xs text-accent-gold font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Profil & Sejarah</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-ivory leading-tight">
            Membangun Kepercayaan & Keahlian Sejak 2017 di Yogyakarta.
          </h1>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Pademmui lahir dari keyakinan sederhana: keahlian potong rambut bukan sekadar memendekkan rambut, melainkan seni presisi, pelayanan profesional, dan sarana membuka jalan kemandirian ekonomi.
          </p>
        </div>

        {/* Story Grid with Badge & Studio Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6 text-sm text-text-secondary leading-relaxed">
            <h2 className="text-2xl font-bold text-text-ivory">
              Dari Studio Kecil Hingga Dipercaya 1.000+ Alumni Nusantara
            </h2>
            <p>
              Didirikan pada tahun 2017 di Yogyakarta, Pademmui berawal dari sebuah barbershop yang mengedepankan kualitas pelayanan dan kepuasan pelanggan pria. Seiring berkembangnya industri dan tingginya permintaan tenaga barberman profesional, kami mendirikan <strong className="text-text-ivory">Pademmui Barberschool</strong>.
            </p>
            <p>
              Banyak kursus potong rambut di luar sana yang mengajarkan belasan siswa sekaligus dalam satu ruangan menggunakan boneka manekin. Akibatnya, saat siswa lulus dan berhadapan dengan kepala manusia yang sesungguhnya, mereka gugup, kaku, dan kesulitan mendapatkan pelanggan tetap.
            </p>
            <p>
              Pademmui memutus pola tersebut. Sejak awal, kami menetapkan prinsip tegas: <strong className="text-accent-gold">hanya maksimal 3 siswa per sesi</strong> dan <strong className="text-accent-gold">100% menggunakan model kepala manusia asli</strong>.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="w-1.5 h-12 bg-accent-gold rounded-full" />
              <p className="text-xs italic text-text-ivory font-serif">
                &ldquo;Kami fokus bukan untuk memberikan yang termurah, melainkan menjamin goal Anda agar benar-benar bisa memotong rambut dan siap berkarir.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-surface-elevated border border-white/10 shadow-2xl aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src="/images/gallery/115_1779190356984-photo_6082141941815513294_y.webp"
                alt="Dokumentasi interaksi bimbingan privat di Pademmui Barberschool Jogja"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0E0E0E]/90 backdrop-blur-md border border-white/10 flex items-center gap-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/images/logo_badge.png"
                    alt="Logo Pademmui"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-ivory">PT PADEMMUI INDONESIA</p>
                  <p className="text-[11px] text-accent-gold">Yogyakarta • Est. 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Values */}
        <div className="border-t border-white/10 pt-16 mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
              Prinsip Kerja Kami
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-text-ivory">
              Tiga Nilai yang Selalu Kami Pegang Teguh
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-surface-elevated border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text-ivory">Integritas Bimbingan</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Kami tidak menjanjikan hal manis tanpa usaha nyata. Mentor mengoreksi setiap sudut pemotongan dengan jujur, sabar, dan teliti demi pembentukan standar kualitas terbaik.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-surface-elevated border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text-ivory">Dukungan Komunitas Seumur Hidup</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Hubungan kami dengan alumni tidak terputus setelah penyerahan sertifikat. Grup komunitas WhatsApp aktif setiap hari untuk bertukar ilmu, saran operasional, dan info kerja.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-surface-elevated border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text-ivory">Orientasi Hasil Nyata</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Tolak ukur keberhasilan kami adalah ketika siswa mampu mencukur rapi secara mandiri, langsung bekerja di barbershop profesional, atau sukses mendirikan barbershop sendiri.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to Consultation */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111111] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-text-ivory">
              Tertarik Bergabung dengan Angkatan Baru Pademmui?
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary">
              Konsultasikan kebutuhan kelas Anda, baik kelas offline di Jogja maupun e-course online.
            </p>
          </div>
          <Link
            href="/booking"
            className="flex-shrink-0 px-8 py-3.5 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-xs tracking-wide shadow-gold-glow flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment & Konsultasi</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
