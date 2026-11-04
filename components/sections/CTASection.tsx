import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#080808] to-[#040404] relative overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-gold/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <ScrollReveal direction="down">
          {/* Emblem badge */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-black/60 rounded-2xl p-2 border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/logo_badge.png"
              alt="Pademmui Barbershop Emblem"
              fill
              sizes="80px"
              className="object-contain"
            />
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal direction="up" delay={150}>
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-gold font-bold">
              Pendaftaran Angkatan Baru Dibuka
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-ivory leading-tight">
              Siap Menguasai Skill Potong Rambut Standar Profesional?
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Hanya 3 siswa tercepat setiap angkatannya agar kualitas bimbingan tetap terjaga. Konsultasikan jadwal dan amankan kuota Anda sekarang sebelum penuh.
            </p>
          </div>
        </ScrollReveal>

        {/* Verified assurances */}
        <ScrollReveal direction="up" delay={250}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-text-muted">
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-surface/50 border border-white/5 transition-transform duration-300 hover:scale-105">
              <ShieldCheck className="w-4 h-4 text-accent-gold" />
              <span>Maksimal 3 Siswa / Batch</span>
            </div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-surface/50 border border-white/5 transition-transform duration-300 hover:scale-105">
              <ShieldCheck className="w-4 h-4 text-accent-gold" />
              <span>Praktek Kepala Orang Asli</span>
            </div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-surface/50 border border-white/5 transition-transform duration-300 hover:scale-105">
              <ShieldCheck className="w-4 h-4 text-accent-gold" />
              <span>Mess Khusus Luar Kota Tersedia</span>
            </div>
          </div>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal direction="up" delay={350}>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.contacts.waBarberLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-sm tracking-wide transition-all duration-300 shadow-gold-glow flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#0A0A0A]" />
              <span>Konsultasi & Booking Slot via WA</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-surface-elevated hover:bg-surface-highlight border border-white/10 text-text-ivory font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              <MapPin className="w-4 h-4 text-accent-gold" />
              <span>Alamat & Lokasi Studio</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
