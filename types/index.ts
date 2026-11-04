export interface CoursePackage {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  rawPrice: number;
  duration: string;
  sessions: string;
  description: string;
  features: string[];
  jobPlacement: boolean;
  ctaText: string;
  waMessage: string;
}

export interface OnlineProgram {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  pricePromo: string;
  priceNormal: string;
  videoCount: string;
  features: string[];
  bonusText?: string;
  ctaUrl: string;
  isExternalLink?: boolean;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'training' | 'results' | 'studio' | 'alumni';
  width: number;
  height: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  origin: string;
  quote: string;
  avatar?: string;
  rating: number;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: 'general' | 'barber' | 'facility' | 'placement';
}

export interface FacilityItem {
  iconName: string;
  title: string;
  description: string;
  highlight?: string;
}
