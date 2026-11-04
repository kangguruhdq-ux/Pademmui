"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Send, ArrowUpRight, ArrowLeft, Clock, ShieldCheck, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [programChoice, setProgramChoice] = useState("Paket 2 (Siap Kerja - Rp4.750.000)");
  const [needMess, setNeedMess] = useState("Ya (Butuh fasilitas mess)");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Admin Pademmui, perkenalkan nama saya *${name || "Calon Siswa"}* dari *${city || "Luar Kota"}*.\n\nSaya ingin konsultasi pendaftaran kelas:\n- Pilihan Program: *${programChoice}*\n- Butuh Fasilitas Mess: *${needMess}*\n- Pertanyaan/Catatan: ${notes || "Mohon info jadwal dan kuota terdekat."}\n\nTerima kasih!`;
    const targetUrl = createWhatsAppUrl(siteConfig.contacts.phoneBarber, message);
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-32 pb-24 bg-[#080808] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="space-y-4 mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-accent-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-xs text-accent-gold font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Lokasi & Bantuan</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-ivory">
              Hubungi Pademmui Barberschool
            </h1>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Tim admin kami siap menjawab segala pertanyaan Anda seputar kurikulum, ketersediaan slot 3 siswa per batch, dan akomodasi mess di Yogyakarta.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-surface-elevated border border-white/10 space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-accent-gold font-bold">
                  Formulir Konsultasi Cepat
                </span>
                <h2 className="text-2xl font-bold text-text-ivory">
                  Rencanakan Pelatihan Anda
                </h2>
                <p className="text-xs text-text-secondary">
                  Data yang Anda isi akan otomatis tersambung ke WhatsApp Admin resmi tanpa proses registrasi berbelit.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-text-ivory block">
                      Nama Lengkap:
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-ivory text-xs placeholder:text-text-muted focus:outline-none focus:border-accent-gold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="city" className="text-xs font-semibold text-text-ivory block">
                      Kota / Asal Daerah:
                    </label>
                    <input
                      id="city"
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Contoh: Purworejo / Samarinda"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-ivory text-xs placeholder:text-text-muted focus:outline-none focus:border-accent-gold"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="program" className="text-xs font-semibold text-text-ivory block">
                    Pilihan Program Pelatihan:
                  </label>
                  <select
                    id="program"
                    value={programChoice}
                    onChange={(e) => setProgramChoice(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-ivory text-xs focus:outline-none focus:border-accent-gold"
                  >
                    <option value="Paket 1 (15x Pertemuan - Rp3.450.000)">
                      Paket 1: Fundamental Barber (15x Pertemuan - Rp 3.450.000)
                    </option>
                    <option value="Paket 2 (Siap Kerja - Rp4.750.000)">
                      Paket 2: Siap Kerja Penyaluran Jogja (20x Pertemuan - Rp 4.750.000)
                    </option>
                    <option value="Paket 3 (Coloring & Perming - Rp6.250.000)">
                      Paket 3: Coloring & Perming (22x Pertemuan - Rp 6.250.000)
                    </option>
                    <option value="Paket 4 (Mastery & Manajemen - Rp7.150.000)">
                      Paket 4: Mastery & Manajemen Bisnis (23x Pertemuan - Rp 7.150.000)
                    </option>
                    <option value="ShoesCare Academy (Offline Tatap Muka Jogja)">
                      ShoesCare Academy (Kursus Cuci Sepatu Offline Jogja)
                    </option>
                    <option value="Kelas Online (Barber / Manajemen / Perming)">
                      Kelas Online (Barber Online / SOP Manajemen / Perming)
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="mess" className="text-xs font-semibold text-text-ivory block">
                    Apakah Membutuhkan Fasilitas Mess Luar Kota?
                  </label>
                  <select
                    id="mess"
                    value={needMess}
                    onChange={(e) => setNeedMess(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-ivory text-xs focus:outline-none focus:border-accent-gold"
                  >
                    <option value="Ya (Butuh fasilitas mess)">
                      Ya, saya dari luar Jogja dan butuh fasilitas mess (Utilitas Rp200rb)
                    </option>
                    <option value="Tidak (Tinggal mandiri di Jogja)">
                      Tidak, saya warga Jogja / memiliki tempat tinggal sendiri
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="notes" className="text-xs font-semibold text-text-ivory block">
                    Pertanyaan / Catatan Tambahan (Opsional):
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contoh: Kapan jadwal batch terdekat dimulai? Apakah bisa mulai minggu depan?"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-ivory text-xs placeholder:text-text-muted focus:outline-none focus:border-accent-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-xs tracking-wide transition-all shadow-gold-glow flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-98"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#0A0A0A]" />
                  <span>Kirim & Mulai Konsultasi via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Address, Map, Contacts, Communities */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address & Google Maps */}
            <div className="p-7 rounded-3xl bg-surface-elevated border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-text-ivory">Studio Pademmui Jogja</h3>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    {siteConfig.location.address}
                  </p>
                </div>
              </div>

              {/* Verified Embedded Google Map */}
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video relative">
                <iframe
                  title="Peta Lokasi Pademmui Barberschool Jogja"
                  src={siteConfig.location.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              <a
                href={siteConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-surface hover:bg-surface-highlight border border-white/10 text-xs font-semibold text-accent-gold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Buka di Aplikasi Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Official Phone Contacts */}
            <div className="p-7 rounded-3xl bg-surface-elevated border border-white/10 space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-text-muted font-bold">
                Jalur Komunikasi Langsung
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-surface border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-text-muted">Admin Kursus Barber:</p>
                    <p className="font-bold text-text-ivory">{siteConfig.contacts.phoneBarberDisplay}</p>
                  </div>
                  <a
                    href={siteConfig.contacts.waBarberLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent-gold text-black hover:bg-accent-gold-light transition-transform hover:scale-110 active:scale-95"
                    aria-label="Chat WhatsApp Admin Barber"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-[#0A0A0A]" />
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-surface border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-text-muted">Admin Kursus ShoesCare:</p>
                    <p className="font-bold text-text-ivory">{siteConfig.contacts.phoneShoescareDisplay}</p>
                  </div>
                  <a
                    href={siteConfig.contacts.waShoescareLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/10 text-text-ivory hover:text-accent-gold transition-transform hover:scale-110 active:scale-95"
                    aria-label="Chat WhatsApp Admin Shoescare"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-accent-gold" />
                  </a>
                </div>
              </div>
            </div>

            {/* Community Links */}
            <div className="p-7 rounded-3xl bg-surface-elevated border border-white/10 space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-text-muted font-bold">
                Grup Komunitas Resmi
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href={siteConfig.contacts.waGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface border border-white/5 hover:border-green-500/40 text-center space-y-1 group transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-green-500 mx-auto" />
                  <p className="font-semibold text-text-ivory group-hover:text-green-400">Grup WhatsApp</p>
                  <p className="text-[10px] text-text-muted">Komunitas Barber</p>
                </a>

                <a
                  href={siteConfig.contacts.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface border border-white/5 hover:border-blue-400/40 text-center space-y-1 group transition-colors"
                >
                  <Send className="w-5 h-5 text-blue-400 mx-auto" />
                  <p className="font-semibold text-text-ivory group-hover:text-blue-300">Telegram Channel</p>
                  <p className="text-[10px] text-text-muted">Update & Sharing</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
