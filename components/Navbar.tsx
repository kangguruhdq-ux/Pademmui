"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Calendar,
  GraduationCap,
  Scissors,
  Sparkles,
  Video,
  Camera,
  Home,
  Star,
  Info,
  Phone,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

type DesktopSubItem = {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

type DesktopNavItem =
  | {
      type: "dropdown";
      key: string;
      name: string;
      items: DesktopSubItem[];
    }
  | {
      type: "link";
      key: string;
      name: string;
      href: string;
    };

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
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

  const handleDropdownEnter = (key: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(key);
  };

  const handleDropdownLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 130);
  };

  const desktopNavItems: DesktopNavItem[] = [
    {
      type: "dropdown",
      key: "program",
      name: "Program",
      items: [
        {
          name: "Kursus Barber",
          description: "4 paket pelatihan tatap muka dari nol",
          href: "/#program",
          icon: Scissors,
          badge: "Offline",
        },
        {
          name: "Kursus ShoesCare",
          description: "Pelatihan cuci & perawatan sepatu",
          href: "/#shoescare",
          icon: Sparkles,
          badge: "Privat",
        },
        {
          name: "Kelas Online",
          description: "Materi video & panduan mandiri",
          href: "/#online",
          icon: Video,
        },
        {
          name: "Detail Kurikulum",
          description: "Rincian modul & silabus lengkap",
          href: "/program",
          icon: GraduationCap,
        },
      ],
    },
    {
      type: "link",
      key: "galeri",
      name: "Galeri",
      href: "/gallery",
    },
    {
      type: "dropdown",
      key: "akademi",
      name: "Akademi",
      items: [
        {
          name: "Tentang Pademmui",
          description: "Profil resmi, visi & sejarah sejak 2017",
          href: "/about",
          icon: Info,
        },
        {
          name: "Fasilitas & Mess",
          description: "Asrama, model kepala asli & penyaluran",
          href: "/#fasilitas",
          icon: Home,
        },
        {
          name: "Testimoni Alumni",
          description: "Cerita sukses 1.000+ lulusan aktif",
          href: "/#testimoni",
          icon: Star,
        },
        {
          name: "Tanya Jawab (FAQ)",
          description: "Informasi jadwal, biaya & sertifikat",
          href: "/#faq",
          icon: HelpCircle,
        },
      ],
    },
    {
      type: "link",
      key: "kontak",
      name: "Kontak",
      href: "/contact",
    },
  ];

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
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
          isScrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/10 shadow-luxury"
            : "bg-gradient-to-b from-black/95 via-black/70 to-transparent"
        }`}
        style={{
          paddingTop: isScrolled
            ? "calc(env(safe-area-inset-top, 0px) + 0.875rem)"
            : "calc(env(safe-area-inset-top, 0px) + 1.125rem)",
          paddingBottom: isScrolled ? "0.875rem" : "1.125rem",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-10">
          <div className="flex items-center justify-between gap-3 xl:gap-6">
            {/* Brand Logo & Title */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg flex-shrink-0"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-black/60 rounded-xl p-1 border border-white/15 transition-transform duration-300 group-hover:scale-105 shadow-md">
                <Image
                  src="/images/logo_badge.png"
                  alt="Pademmui Barbershop & Barberschool Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 40px, 48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif text-base sm:text-xl font-bold tracking-wider text-text-ivory group-hover:text-accent-gold transition-colors duration-200 leading-tight">
                  PADEMMUI
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-accent-gold font-medium leading-tight">
                  BARBERSCHOOL • EST 2017
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links — Minimalist 4-Item Dropdown Bar */}
            <nav
              ref={desktopNavRef}
              className="hidden lg:flex flex-1 items-center justify-center gap-8 xl:gap-12"
            >
              {desktopNavItems.map((item) => {
                if (item.type === "link") {
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      onMouseEnter={() => setOpenDropdown(null)}
                      className="relative py-2 text-sm tracking-wide text-text-secondary hover:text-text-ivory font-medium transition-colors duration-200 group whitespace-nowrap"
                    >
                      <span>{item.name}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-gold transition-all duration-300 ease-out group-hover:w-full rounded-full shadow-gold-glow" />
                    </Link>
                  );
                }

                const isOpen = openDropdown === item.key;

                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.key)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown((prev) => (prev === item.key ? null : item.key))
                      }
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={`relative py-2 inline-flex items-center gap-1.5 text-sm tracking-wide font-medium transition-colors duration-200 group whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-md ${
                        isOpen
                          ? "text-accent-gold"
                          : "text-text-secondary hover:text-text-ivory"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 text-accent-gold"
                            : "text-text-muted group-hover:text-accent-gold"
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-accent-gold transition-all duration-300 ease-out rounded-full shadow-gold-glow ${
                          isOpen ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </button>

                    {/* Luxury Dark-Glass Dropdown Panel */}
                    <div
                      aria-hidden={!isOpen}
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[320px] transition-all duration-200 ease-out origin-top ${
                        isOpen
                          ? "opacity-100 translate-y-0 visible pointer-events-auto"
                          : "opacity-0 translate-y-2 invisible pointer-events-none"
                      }`}
                    >
                      <div className="bg-[#0D0D0D]/98 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-2 space-y-1">
                        {item.items.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setOpenDropdown(null)}
                              className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.06] border border-transparent hover:border-accent-gold/30 transition-all duration-200"
                            >
                              <div className="w-9 h-9 rounded-lg bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center flex-shrink-0 text-accent-gold group-hover/item:scale-105 group-hover/item:bg-accent-gold group-hover/item:text-[#0A0A0A] transition-all duration-200">
                                <SubIcon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-xs font-bold text-text-ivory group-hover/item:text-accent-gold transition-colors">
                                    {sub.name}
                                  </span>
                                  {sub.badge && (
                                    <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent-gold/15 text-accent-gold border border-accent-gold/25">
                                      {sub.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-text-muted leading-snug mt-0.5">
                                  {sub.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Desktop Right CTA: Book Appointment */}
            <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
              <Link
                href="/booking"
                className="relative group inline-flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] text-xs font-bold tracking-wide transition-all duration-300 shadow-gold-glow hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger & Quick Booking Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/booking"
                className="sm:hidden p-2.5 text-accent-gold bg-surface-elevated border border-white/10 rounded-full hover:scale-105 active:scale-95 transition-transform"
                aria-label="Book Appointment"
              >
                <Calendar className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-text-ivory hover:text-accent-gold bg-surface-elevated/90 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold transition-colors relative z-[90]"
                aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-accent-gold" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop Overlay (z-[60] so it sits under the header at z-[80]) */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-black/80 backdrop-blur-md transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Redesigned Luxury Boutique Mobile Menu Drawer (z-[70]) */}
      <div
        className={`lg:hidden fixed inset-x-0 z-[70] bg-[#0C0C0C]/98 backdrop-blur-2xl border-b border-white/15 px-5 pt-4 pb-10 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-6 opacity-0 pointer-events-none"
        }`}
        style={{
          top: "calc(env(safe-area-inset-top, 0px) + 66px)",
        }}
      >
        <div className="max-w-md mx-auto space-y-4">
          {/* Header indicator */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-[11px] uppercase tracking-widest text-text-muted font-bold">
              Menu Eksklusif
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] text-accent-gold font-semibold bg-accent-gold/10 px-2.5 py-0.5 rounded-full border border-accent-gold/25">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
              Maks. 3 Siswa
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
                  className="group flex items-center justify-between p-3 rounded-xl border bg-white/[0.03] hover:bg-white/[0.08] active:bg-white/[0.1] border-white/5 hover:border-accent-gold/40 transition-all duration-200 active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 bg-accent-gold/10 border border-accent-gold/20 text-accent-gold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold transition-colors text-text-ivory group-hover:text-accent-gold">
                      {link.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {link.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded text-accent-gold bg-accent-gold/10">
                        {link.badge}
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-accent-gold group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Primary Action CTA: Book Appointment */}
          <div className="pt-3 flex flex-col gap-2.5">
            <Link
              href="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-5 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-center text-xs tracking-wide flex items-center justify-center gap-2 shadow-gold-glow transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/booking?type=academy"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-5 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 text-text-secondary hover:text-text-ivory font-medium text-center text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <GraduationCap className="w-4 h-4 text-accent-gold" />
              <span>Konsultasi Kursus Barber (Isi Form)</span>
            </Link>
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
