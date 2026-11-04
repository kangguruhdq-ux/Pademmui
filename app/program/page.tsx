import type { Metadata } from "next";
import Programs from "@/components/sections/Programs";
import Curriculum from "@/components/sections/Curriculum";
import ShoescareSection from "@/components/sections/ShoescareSection";
import OnlineCourses from "@/components/sections/OnlineCourses";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Daftar Program & Paket Kursus — Pademmui Barberschool Jogja",
  description: "Rincian paket kursus potong rambut reguler (Paket 1-4), ShoesCare Academy offline Jogja, dan kursus manajemen barbershop online.",
  alternates: {
    canonical: "/program",
  },
};

export default function ProgramPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-gold font-bold">
            Direktori Lengkap Pelatihan
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-text-ivory">
            Pilih Jalur Belajar yang Sesuai Target Anda
          </h1>
          <p className="text-sm text-text-secondary">
            Mulai dari kelas tatap muka intensif di Yogyakarta hingga modul video mandiri dari rumah.
          </p>
        </div>
      </div>

      <Programs />
      <Curriculum />
      <ShoescareSection />
      <OnlineCourses />
      <CTASection />
    </div>
  );
}
