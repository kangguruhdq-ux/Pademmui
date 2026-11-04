export interface BookingService {
  id: string;
  name: string;
  category: "barbershop" | "academy";
  badge?: string;
  duration?: string;
  price?: string;
  description: string;
}

export const bookingTypes = [
  {
    id: "barbershop" as const,
    title: "Barbershop Appointment",
    subtitle: "Layanan Grooming & Cukur Rambut di Studio Pademmui",
    description: "Nikmati pengalaman potong rambut premium, hot towel shaving, chemical hair styling, dan facial treatment langsung di studio kami.",
  },
  {
    id: "academy" as const,
    title: "Barberschool Consultation",
    subtitle: "Konsultasi Kursus Barber & ShoesCare Academy",
    description: "Konsultasi jadwal kelas tatap muka, fasilitas mess luar kota, program penyaluran kerja, dan pemilihan paket belajar dari nol.",
  },
];

export const bookingServices: BookingService[] = [
  // Barbershop Services (Verified from Studio Services)
  {
    id: "bs-haircut",
    name: "Gentleman Haircut",
    category: "barbershop",
    badge: "Terpopuler",
    duration: "45 Menit",
    price: "Rp45.000",
    description: "Konsultasi bentuk wajah, potong rambut presisi, cuci rambut relaksasi, hot towel, dan styling pomade/clay.",
  },
  {
    id: "bs-shave",
    name: "Premium Haircut & Traditional Shave",
    category: "barbershop",
    badge: "Signature",
    duration: "60 Menit",
    price: "Rp75.000",
    description: "Potong rambut lengkap ditambah cukur kumis/jenggot menggunakan razor pisau tradisional, foam hangat, dan aftershave.",
  },
  {
    id: "bs-coloring",
    name: "Hair Coloring Treatment",
    category: "barbershop",
    badge: "Chemical",
    duration: "90 - 120 Menit",
    price: "Mulai Rp150.000",
    description: "Pewarnaan rambut tren modern, bleaching bertingkat, highlight fashion, atau penutup uban natural.",
  },
  {
    id: "bs-perming",
    name: "Hair Perming Treatment",
    category: "barbershop",
    badge: "Chemical",
    duration: "90 - 120 Menit",
    price: "Mulai Rp180.000",
    description: "Teknik pengeritingan rambut gaya Korea (Korean Wave Perm, Down Perm, atau Texture Perm) bervolume tahan lama.",
  },
  {
    id: "bs-facial",
    name: "Black Mask Facial Treatment",
    category: "barbershop",
    badge: "Grooming",
    duration: "30 Menit",
    price: "Rp40.000",
    description: "Perawatan deep cleansing pembersih komedo dan pori-pori wajah dengan black mask khusus pria.",
  },
  {
    id: "bs-shoescare",
    name: "ShoesCare Cleaning (Cuci Sepatu)",
    category: "barbershop",
    badge: "ShoesCare",
    duration: "2 - 3 Hari Kerja",
    price: "Rp35.000 - Rp75.000",
    description: "Pembersihan mendalam sepatu sneakers, canvas, suede, atau leather menggunakan cairan pembersih standar premium.",
  },

  // Academy Consultation Services (Verified from 4 Packages & ShoesCare Academy)
  {
    id: "ac-paket-1",
    name: "Paket 1: Kursus Dasar (12 Pertemuan)",
    category: "academy",
    badge: "Pemula",
    duration: "12 Hari (12 Sesi)",
    price: "Rp3.450.000",
    description: "Pelatihan dasar pengenalan alat, parting, teknik fading, clipper overcomb, dan praktek langsung model manusia.",
  },
  {
    id: "ac-paket-2",
    name: "Paket 2: Kursus Siap Kerja + Penyaluran",
    category: "academy",
    badge: "Paling Diminati",
    duration: "16 Hari (16 Sesi)",
    price: "Rp4.750.000",
    description: "Materi lengkap pemula hingga mahir, teknik fade modern, uji kecepatan, dan disalurkan kerja ke barbershop Jogja.",
  },
  {
    id: "ac-paket-3",
    name: "Paket 3: Kursus Komplit + Chemical",
    category: "academy",
    badge: "Skill Lengkap",
    duration: "20 Hari (20 Sesi)",
    price: "Rp6.250.000",
    description: "Semua materi Paket 2 ditambah materi Hair Coloring (Bleaching/Highlight) dan Hair Perming serta penyaluran kerja.",
  },
  {
    id: "ac-paket-4",
    name: "Paket 4: Kursus Master + Manajemen Bisnis",
    category: "academy",
    badge: "Rekomendasi Wirausaha",
    duration: "24 Hari (24 Sesi)",
    price: "Rp7.150.000",
    description: "Paket tertinggi: seluruh materi potong rambut, chemical coloring/perming, dan modul manajemen wirausaha barbershop.",
  },
  {
    id: "ac-shoescare",
    name: "ShoesCare Academy (Privat Cuci Sepatu)",
    category: "academy",
    badge: "Bisnis Rumahan",
    duration: "2 Hari Intensif",
    price: "Rp2.500.000",
    description: "Pelatihan privat maks 2 siswa: teknik cuci deep clean, unyellowing, treatment suede & leather, garansi mengulang.",
  },
  {
    id: "ac-general",
    name: "Konsultasi Umum Akademi & Fasilitas Mess",
    category: "academy",
    badge: "Tanya Jawab",
    duration: "Fleksibel",
    price: "Gratis",
    description: "Tanya jawab jadwal angkatan baru, fasilitas mess luar kota Rp200rb, kuota 3 siswa/kelas, dan persiapan karir.",
  },
];

export const preferredTimeSlots = [
  "10:00 WIB",
  "11:30 WIB",
  "13:00 WIB",
  "14:30 WIB",
  "16:00 WIB",
  "17:30 WIB",
  "19:00 WIB",
  "20:00 WIB",
];
