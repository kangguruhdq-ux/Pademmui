import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, Send, ArrowUpRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-text-secondary text-sm">
      {/* Top Value Banner */}
      <div className="border-b border-white/5 py-8 bg-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted">Maksimal Kelas</p>
                <p className="text-sm font-semibold text-text-ivory">3 Siswa per Batch</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted">Model Praktek</p>
                <p className="text-sm font-semibold text-text-ivory">100% Manusia Asli</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted">Fasilitas Lengkap</p>
                <p className="text-sm font-semibold text-text-ivory">Mess, AC, & Alat Disediakan</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted">Penyaluran Kerja</p>
                <p className="text-sm font-semibold text-text-ivory">Barbershop di Jogja</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12 bg-black/60 rounded-xl p-1 border border-white/10">
                <Image
                  src="/images/logo_badge.png"
                  alt="Pademmui Barberschool Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-text-ivory block">
                  PADEMMUI
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-accent-gold font-medium">
                  BARBERSHOP & BARBERSCHOOL
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-text-secondary max-w-sm">
              Akademi pelatihan potong rambut intensif dan manajemen bisnis barbershop berpusat di Yogyakarta. Berdiri sejak tahun 2017, berdedikasi mencetak praktisi terampil dan wirausahawan mandiri.
            </p>
            <div className="pt-2 text-xs text-text-muted">
              <p className="font-medium text-text-ivory">PT PADEMMUI INDONESIA</p>
              <p>Badan Hukum & Manajemen Resmi</p>
            </div>
          </div>

          {/* Program Kursus */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-text-ivory font-bold mb-4">
              Program Pelatihan
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/#program" className="hover:text-accent-gold transition-colors">
                  Paket 1: Fundamental Barber
                </Link>
              </li>
              <li>
                <Link href="/#program" className="hover:text-accent-gold transition-colors">
                  Paket 2: Siap Kerja (Penyaluran)
                </Link>
              </li>
              <li>
                <Link href="/#program" className="hover:text-accent-gold transition-colors">
                  Paket 3: Coloring & Perming
                </Link>
              </li>
              <li>
                <Link href="/#program" className="hover:text-accent-gold transition-colors">
                  Paket 4: Mastery & Manajemen
                </Link>
              </li>
              <li>
                <Link href="/#shoescare" className="hover:text-accent-gold transition-colors">
                  ShoesCare Academy (Offline)
                </Link>
              </li>
              <li>
                <Link href="/#online" className="hover:text-accent-gold transition-colors">
                  Barber Online (40+ Video)
                </Link>
              </li>
              <li>
                <Link href="/#online" className="hover:text-accent-gold transition-colors">
                  Manajemen Barbershop SOP
                </Link>
              </li>
            </ul>
          </div>

          {/* Komunitas & Edukasi */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-text-ivory font-bold mb-4">
              Komunitas & Edukasi
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={siteConfig.contacts.waGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-accent-gold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-green-500" />
                  <span>Grup WhatsApp Resmi</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contacts.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-accent-gold transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-blue-400" />
                  <span>Komunitas Telegram</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <Link href="/#materi-gratis" className="hover:text-accent-gold transition-colors">
                  Materi Video Cukur Gratis
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent-gold transition-colors">
                  Dokumentasi & Galeri Siswa
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-gold transition-colors">
                  Filosofi & Profil Pademmui
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak & Lokasi Studio */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-text-ivory font-bold mb-4">
              Studio & Lokasi
            </h3>
            <address className="not-italic space-y-3 text-xs text-text-secondary">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.location.address}</p>
                  <a
                    href={siteConfig.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-accent-gold hover:underline mt-1"
                  >
                    <span>Buka Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-accent-gold flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-text-muted">Admin Barber:</p>
                  <a
                    href={siteConfig.contacts.waBarberLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors font-medium text-text-ivory"
                  >
                    {siteConfig.contacts.phoneBarberDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent-gold flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-text-muted">Admin Shoescare:</p>
                  <a
                    href={siteConfig.contacts.waShoescareLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors font-medium text-text-ivory"
                  >
                    {siteConfig.contacts.phoneShoescareDisplay}
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {currentYear} Pademmui Barbershop & Barberschool. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px]">Banguntapan, Bantul, D.I. Yogyakarta</span>
            <span className="text-accent-gold">•</span>
            <span className="text-[11px]">Est. 2017</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
