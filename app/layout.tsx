import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/data/site";

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Pademmui Barberschool — Kursus Potong Rambut Profesional Jogja",
    template: "%s | Pademmui Barberschool Jogja",
  },
  description: siteConfig.description,
  keywords: [
    "kursus potong rambut jogja",
    "barberschool yogyakarta",
    "sekolah barber jogja",
    "kursus barber jogja",
    "pademmui barberschool",
    "pademmui barbershop",
    "kursus cuci sepatu jogja",
    "pelatihan barber profesional",
    "kursus barber bergaransi",
    "penyaluran kerja barber",
  ],
  authors: [{ name: "Pademmui Barberschool" }],
  creator: "Pademmui Barberschool",
  publisher: "PT Pademmui",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.domain,
    title: "Pademmui Barberschool — Kursus Potong Rambut Profesional Jogja",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/logo_badge.png",
        width: 1024,
        height: 1024,
        alt: "Pademmui Barbershop & Barberschool EST 2017",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pademmui Barberschool — Kursus Potong Rambut Profesional Jogja",
    description: siteConfig.description,
    images: ["/images/logo_badge.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo_badge.png",
    shortcut: "/images/logo_badge.png",
    apple: "/images/logo_badge.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    alternateName: "Pademmui Barbershop & Barberschool",
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/images/logo_badge.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jalan Wonocatur No.15",
      addressLocality: "Banguntapan, Bantul",
      addressRegion: "Daerah Istimewa Yogyakarta",
      postalCode: "55198",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-7.798939",
      longitude: "110.404286",
    },
    telephone: siteConfig.contacts.phoneBarber,
    priceRange: "Rp 3.450.000 - Rp 7.150.000",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
  };

  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text-ivory min-h-screen flex flex-col selection:bg-accent-gold selection:text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
