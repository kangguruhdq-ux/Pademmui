"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryPhotos } from "@/data/gallery";
import { Camera, Eye, ArrowLeft } from "lucide-react";
import { GalleryPhoto } from "@/types";
import { siteConfig } from "@/data/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ImageLightbox from "@/components/ImageLightbox";

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: "all", label: "Semua Dokumentasi" },
    { id: "training", label: "Praktek Model Manusia" },
    { id: "results", label: "Karya Potongan Siswa" },
    { id: "studio", label: "Studio & Suasana" },
    { id: "alumni", label: "Kelulusan & Alumni" },
  ];

  const filtered =
    activeCategory === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeCategory);

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filtered.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filtered.length;
    setSelectedPhoto(filtered[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filtered.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filtered.length) % filtered.length;
    setSelectedPhoto(filtered[prevIndex]);
  };

  return (
    <div className="pt-32 pb-24 bg-[#080808] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="space-y-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-accent-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-xs text-accent-gold font-semibold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>Arsip Visual Otentik</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-ivory">
              Galeri Dokumentasi Pademmui
            </h1>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Melihat langsung dedikasi, ketelitian teknik, dan keakraban bimbingan di studio Pademmui Barberschool Banguntapan, Bantul, Yogyakarta.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/5 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                activeCategory === c.id
                  ? "bg-accent-gold text-[#0A0A0A]"
                  : "bg-surface-elevated text-text-secondary hover:text-text-ivory border border-white/5"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Photo Grid with tactile touch & hover feedback */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-surface-elevated border border-white/10 hover:border-accent-gold/50 aspect-[3/4] cursor-pointer transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-gold-glow"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute inset-x-3 bottom-3 text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-accent-gold block">
                  {photo.category}
                </span>
                <p className="text-xs font-semibold text-text-ivory truncate mt-0.5">
                  {photo.caption}
                </p>
              </div>

              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-text-ivory opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card with tactile scale & WhatsApp Icon */}
        <div className="mt-16 p-8 rounded-3xl bg-surface-elevated border border-white/10 text-center space-y-4 max-w-2xl mx-auto transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:border-accent-gold/40 hover:shadow-gold-glow">
          <h3 className="text-xl font-bold text-text-ivory">
            Ingin Mengalami Langsung Proses Belajar Ini?
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary">
            Bimbingan hanya untuk 3 siswa per sesi dengan fasilitas mess dan model manusia asli disediakan.
          </p>
          <a
            href={siteConfig.contacts.waBarberLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-xs shadow-gold-glow transition-all hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 fill-[#0A0A0A]" />
            <span>Konsultasi Pendaftaran Kursus</span>
          </a>
        </div>

        {/* Portal-based Image Lightbox (Directly centered in viewport without scrolling) */}
        <ImageLightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onNext={handleNextPhoto}
          onPrev={handlePrevPhoto}
        />
      </div>
    </div>
  );
}
