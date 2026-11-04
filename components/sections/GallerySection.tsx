"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryPhotos } from "@/data/gallery";
import { Camera, ArrowRight, Eye, X } from "lucide-react";
import { GalleryPhoto } from "@/types";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: "all", label: "Semua Foto" },
    { id: "training", label: "Praktek Siswa" },
    { id: "results", label: "Hasil Potongan" },
    { id: "studio", label: "Studio & Suasana" },
    { id: "alumni", label: "Alumni & Kelulusan" },
  ];

  const filteredPhotos =
    activeFilter === "all"
      ? galleryPhotos.slice(0, 8)
      : galleryPhotos.filter((p) => p.category === activeFilter);

  return (
    <section id="galeri" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-xs text-accent-gold font-semibold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>Dokumentasi Otentik</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-ivory">
              Aktivitas Nyata di Studio Pademmui
            </h2>
            <p className="text-sm text-text-secondary">
              Bukan foto ilustrasi asing. Semua foto diambil langsung dari proses belajar mengajar, praktek model manusia, dan wisuda alumni kami di Yogyakarta.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-gold hover:text-accent-gold-light py-2"
          >
            <span>Buka Seluruh Galeri ({galleryPhotos.length}+)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                activeFilter === cat.id
                  ? "bg-accent-gold text-[#0A0A0A]"
                  : "bg-surface-elevated text-text-secondary hover:text-text-ivory border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-surface-elevated border border-white/10 aspect-[3/4] cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Hover overlay caption */}
              <div className="absolute inset-x-3 bottom-3 text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-accent-gold block">
                  {photo.category}
                </span>
                <p className="text-xs font-semibold text-text-ivory truncate mt-0.5">
                  {photo.caption}
                </p>
              </div>

              {/* Zoom hint */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-text-ivory opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
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
    </section>
  );
}
