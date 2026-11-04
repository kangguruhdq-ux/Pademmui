import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Galeri & Dokumentasi Pelatihan",
  description: "Dokumentasi autentik aktivitas kursus potong rambut, praktek langsung model manusia, suasana studio ber-AC, dan wisuda alumni Pademmui Barberschool Jogja.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
