"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryPhoto } from "@/types";

interface ImageLightboxProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function ImageLightbox({ photo, onClose, onNext, onPrev }: ImageLightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!photo) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Handle escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [photo, onClose, onNext, onPrev]);

  if (!mounted || !photo) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[92vh] w-full flex flex-col items-center animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute -top-12 right-0 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-text-ivory hover:text-accent-gold transition-colors focus:outline-none"
          aria-label="Tutup foto detail"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        {onPrev && (
          <button
            onClick={onPrev}
            type="button"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-text-ivory hover:text-accent-gold border border-white/10 transition-colors"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Next Button */}
        {onNext && (
          <button
            onClick={onNext}
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-text-ivory hover:text-accent-gold border border-white/10 transition-colors"
            aria-label="Foto selanjutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Image Box */}
        <div className="relative w-full h-[62vh] sm:h-[72vh] rounded-2xl overflow-hidden bg-[#111111] border border-white/15 shadow-2xl">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="95vw"
            priority
            className="object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-3.5 text-center px-4 max-w-xl">
          <span className="text-[10px] uppercase font-bold tracking-widest text-accent-gold bg-accent-gold/10 px-2.5 py-0.5 rounded">
            {photo.category}
          </span>
          <p className="text-sm font-bold text-text-ivory mt-1">{photo.caption}</p>
          <p className="text-xs text-text-secondary mt-0.5 line-clamp-2">{photo.alt}</p>
        </div>
      </div>
    </div>,
    document.body
  );
}
