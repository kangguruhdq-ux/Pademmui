import { Suspense } from "react";
import type { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "Book Appointment — Reservasi Layanan & Kursus Pademmui Jogja",
  description:
    "Reservasi online seluruh layanan potong rambut, grooming pria, dan pendaftaran kursus barberschool di Pademmui Yogyakarta. Cepat, transparan, terkonfirmasi langsung via WhatsApp.",
  alternates: {
    canonical: "/booking",
  },
};

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#080808] pt-36 text-center text-text-muted flex items-center justify-center">
          <div className="space-y-3">
            <div className="w-8 h-8 border-2 border-accent-gold border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs uppercase tracking-widest text-accent-gold">
              Memuat Sistem Reservasi Pademmui...
            </p>
          </div>
        </div>
      }
    >
      <BookingClient />
    </Suspense>
  );
}
