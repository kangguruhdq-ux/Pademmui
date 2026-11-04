"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryPhotos } from "@/data/gallery";
import { Camera, Eye, X, ArrowLeft, MessageCircle } from "lucide-react";
import { GalleryPhoto } from "@/types";
import { siteConfig } from "@/data/site";

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

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-surface-elevated border border-white/10 aspect-[3/4] cursor-pointer"
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

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 rounded-3xl bg-surface-elevated border border-white/10 text-center space-y-4 max-w-2xl mx-auto">
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
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-xs shadow-gold-glow transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Konsultasi Pendaftaran Kursus</span>
          </a>
        </div>

        {/* Modal Lightbox */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 p-2 text-text-ivory hover:text-accent-gold"
                aria-label="Tutup preview"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden bg-[#121212] border border-white/10">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm font-bold text-text-ivory">{selectedPhoto.caption}</p>
                <p className="text-xs text-text-secondary mt-1">{selectedPhoto.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
