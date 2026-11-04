"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
  Scissors,
  Sparkles,
  Video,
  Camera,
  Home,
  Star,
  Info,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and toggle mobile-menu-open class to hide floating WhatsApp widget
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Program", href: "/#program", icon: Scissors, badge: "Offline" },
    { name: "ShoesCare", href: "/#shoescare", icon: Sparkles, badge: "Privat" },
    { name: "Kelas Online", href: "/#online", icon: Video },
    { name: "Galeri", href: "/gallery", icon: Camera },
    { name: "Fasilitas", href: "/#fasilitas", icon: Home },
    { name: "Testimoni", href: "/#testimoni", icon: Star },
    { name: "Tentang", href: "/about", icon: Info },
    { name: "Kontak", href: "/contact", icon: Phone },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/10 shadow-luxury py-3"
            : "bg-gradient-to-b from-black/95 via-black/70 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Title */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg py-1 flex-shrink-0"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 bg-black/60 rounded-xl p-1 border border-white/15 transition-transform duration-300 group-hover:scale-105 shadow-md">
                <Image
                  src="/images/logo_badge.png"
                  alt="Pademmui Barbershop & Barberschool Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 44px, 48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-text-ivory group-hover:text-accent-gold transition-colors duration-200">
                  PADEMMUI
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-accent-gold font-medium">
                  BARBERSCHOOL • EST 2017
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links — Spacious, Relaxed, with Gold Hover Line */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative py-2 text-[13px] tracking-wide text-text-secondary hover:text-text-ivory font-medium transition-colors duration-200 group"
                >
                  <span>{link.name}</span>
                  {/* Animated Gold Line on Hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-gold transition-all duration-300 ease-out group-hover:w-full rounded-full shadow-gold-glow" />
                </Link>
              ))}
            </nav>

            {/* Desktop Right CTA with Official WhatsApp Icon */}
            <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
              <a
                href={siteConfig.contacts.waBarberLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] text-xs font-bold tracking-wide transition-all duration-300 shadow-gold-glow hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#0A0A0A]" />
                <span>Konsultasi WA</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger & Quick WA Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={siteConfig.contacts.waBarberLink}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden p-2.5 text-accent-gold bg-surface-elevated border border-white/10 rounded-full hover:scale-105 active:scale-95 transition-transform"
                aria-label="Konsultasi WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-accent-gold" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-text-ivory hover:text-accent-gold bg-surface-elevated/90 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold transition-colors"
                aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-accent-gold" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop Overlay with Smooth Fade */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Redesigned Luxury Boutique Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[68px] z-50 bg-[#0C0C0C]/98 backdrop-blur-2xl border-b border-white/15 px-5 pt-4 pb-10 shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-6 opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-md mx-auto space-y-4">
          {/* Header indicator */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-[11px] uppercase tracking-widest text-text-muted font-bold">
              Menu Eksklusif Pademmui
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-accent-gold font-semibold bg-accent-gold/10 px-3 py-1 rounded-full border border-accent-gold/25">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
              Maks. 3 Siswa / Kelas
            </span>
          </div>

          {/* Interactive Navigation Cards Grid */}
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] active:bg-white/[0.1] border border-white/5 hover:border-accent-gold/40 transition-all duration-200 active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-text-ivory group-hover:text-accent-gold transition-colors">
                      {link.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {link.badge && (
                      <span className="text-[10px] font-mono text-accent-gold bg-accent-gold/10 px-2 py-0.5 rounded">
                        {link.badge}
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-accent-gold group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs with Official WhatsApp Icons */}
          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href={siteConfig.contacts.waBarberLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-5 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-center text-xs tracking-wide flex items-center justify-center gap-2 shadow-gold-glow transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#0A0A0A]" />
              <span>Konsultasi Kursus Barber via WA</span>
            </a>

            <a
              href={siteConfig.contacts.waShoescareLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-5 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-accent-gold/25 hover:border-accent-gold text-accent-gold font-bold text-center text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-accent-gold" />
              <span>Info Kursus Cuci Sepatu (ShoesCare)</span>
            </a>
          </div>

          {/* Studio address snippet */}
          <div className="pt-2 text-center text-[11px] text-text-muted">
            <p>Jalan Wonocatur No.15, Banguntapan, Bantul, Yogyakarta</p>
          </div>
        </div>
      </div>
    </>
  );
}
