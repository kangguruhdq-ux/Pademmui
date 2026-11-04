import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Kontak & Lokasi Studio — Pademmui Barberschool Jogja",
  description: "Hubungi admin Pademmui Barberschool dan kunjungi lokasi studio kami di Jalan Wonocatur No.15, Banguntapan, Bantul, Daerah Istimewa Yogyakarta.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
