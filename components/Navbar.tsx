"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-luxury py-3"
          : "bg-gradient-to-b from-black/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Title */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg p-1"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 bg-black/40 rounded-lg p-0.5 border border-white/10 transition-transform duration-300 group-hover:scale-105">
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
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-text-ivory group-hover:text-accent-gold transition-colors">
                PADEMMUI
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-accent-gold font-medium">
                BARBERSCHOOL • EST 2017
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-wider text-text-secondary hover:text-accent-gold font-medium transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={siteConfig.contacts.waBarberLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] text-xs font-semibold tracking-wide transition-all duration-200 shadow-gold-glow hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi WA</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={siteConfig.contacts.waBarberLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 text-accent-gold bg-surface-elevated border border-white/10 rounded-full"
              aria-label="Konsultasi WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-text-ivory hover:text-accent-gold bg-surface-elevated border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0E0E0E] border-b border-white/10 px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-[11px] uppercase tracking-widest text-text-muted">
                Navigasi Menu
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-accent-gold font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
                Slot 3 Siswa / Batch
              </span>
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-text-ivory hover:text-accent-gold py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </Link>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={siteConfig.contacts.waBarberLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-accent-gold text-[#0A0A0A] font-semibold text-center text-sm flex items-center justify-center gap-2 shadow-gold-glow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi Kursus Barber</span>
              </a>
              <a
                href={siteConfig.contacts.waShoescareLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-surface-elevated border border-white/10 text-text-ivory font-medium text-center text-xs flex items-center justify-center gap-2"
              >
                <span>Info Kursus Cuci Sepatu</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
