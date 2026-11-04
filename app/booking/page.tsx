import type { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "Book Appointment — Reservasi Layanan & Konsultasi Pademmui Jogja",
  description:
    "Reservasi online layanan potong rambut, grooming pria, atau konsultasi kursus barbershop di Pademmui Yogyakarta. Cepat, nyaman, terkonfirmasi langsung via WhatsApp.",
  alternates: {
    canonical: "/booking",
  },
};

export default function BookingPage() {
  return <BookingClient />;
}
