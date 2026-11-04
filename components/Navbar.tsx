"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, MessageCircle, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/site";

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Program Offline", href: "/#program" },
    { name: "ShoesCare", href: "/#shoescare" },
    { name: "Kelas Online", href: "/#online" },
    { name: "Galeri", href: "/gallery" },
    { name: "Fasilitas", href: "/#fasilitas" },
    { name: "Testimoni", href: "/#testimoni" },
    { name: "Tentang", href: "/about" },
    { name: "Kontak", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in ${
          isScrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/10 shadow-luxury py-3"
            : "bg-gradient-to-b from-black/95 via-black/60 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Title */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg p-1"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 bg-black/50 rounded-xl p-0.5 border border-white/10 transition-transform duration-300 group-hover:scale-105 shadow-md">
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
                <span className="text-[10px] uppercase tracking-[0.24em] text-accent-gold font-medium">
                  BARBERSCHOOL • EST 2017
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Animated Gold Underline */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative py-1 text-xs uppercase tracking-wider text-text-secondary hover:text-text-ivory font-medium transition-colors duration-200 group"
                >
                  <span>{link.name}</span>
                  {/* Animated Gold Line on Hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-gold transition-all duration-300 ease-out group-hover:w-full rounded-full shadow-gold-glow" />
                </Link>
              ))}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={siteConfig.contacts.waBarberLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] text-xs font-bold tracking-wide transition-all duration-300 shadow-gold-glow hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi WA</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={siteConfig.contacts.waBarberLink}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden p-2 text-accent-gold bg-surface-elevated border border-white/10 rounded-full hover:scale-105 transition-transform"
                aria-label="Konsultasi WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
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
        className={`lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Redesigned Mobile Menu Drawer with Smooth Slide Transition */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] z-40 bg-[#0C0C0C]/98 backdrop-blur-2xl border-b border-white/15 px-6 pt-5 pb-8 shadow-2xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-6 opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-lg mx-auto space-y-5">
          {/* Header indicator */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-[11px] uppercase tracking-widest text-text-muted font-bold">
              Menu Navigasi
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-accent-gold font-semibold bg-accent-gold/10 px-3 py-1 rounded-full border border-accent-gold/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
              Maks. 3 Siswa / Kelas
            </span>
          </div>

          {/* Links list */}
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between py-3 px-3 rounded-xl text-text-ivory hover:text-accent-gold hover:bg-white/[0.04] transition-all text-sm font-semibold border-b border-white/5 last:border-0"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-accent-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={siteConfig.contacts.waBarberLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-5 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-center text-xs tracking-wide flex items-center justify-center gap-2 shadow-gold-glow transition-transform active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi Kursus Barber via WA</span>
            </a>

            <a
              href={siteConfig.contacts.waShoescareLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-5 rounded-xl bg-surface-elevated hover:bg-surface-highlight border border-white/10 text-text-ivory font-medium text-center text-xs flex items-center justify-center gap-2 transition-colors"
            >
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
