"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Reservasi Online & Konsultasi"
      className="fixed bottom-6 right-6 z-30 group"
      id="floating-whatsapp-widget"
    >
      <Link
        href="/booking"
        aria-label="Book Appointment & Konsultasi Online Pademmui"
        className="flex items-center gap-3 bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-gold/40 border border-white/20 shadow-gold-glow"
      >
        <div className="flex items-center justify-center">
          <Calendar className="w-5 h-5 text-[#0A0A0A]" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-xs font-bold tracking-wide leading-tight text-[#0A0A0A]">
            Book Appointment
          </span>
          <span className="text-[10px] text-[#0A0A0A]/80 leading-tight">
            Online • Semua Layanan
          </span>
        </div>
      </Link>
    </aside>
  );
}
