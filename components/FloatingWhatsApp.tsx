"use client";

import WhatsAppIcon from "@/components/WhatsAppIcon";
import { siteConfig } from "@/data/site";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Bantuan WhatsApp"
      className="fixed bottom-6 right-6 z-30 group"
      id="floating-whatsapp-widget"
    >
      <a
        href={siteConfig.contacts.waBarberLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi langsung via WhatsApp dengan Admin Pademmui"
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <div className="relative flex items-center justify-center">
          <WhatsAppIcon className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent-gold rounded-full ring-2 ring-[#080808] animate-pulse" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-xs font-bold tracking-wide leading-tight text-white">
            Konsultasi Admin
          </span>
          <span className="text-[10px] text-white/90 leading-tight">
            Online • Respon Cepat
          </span>
        </div>
      </a>
    </aside>
  );
}
