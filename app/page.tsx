import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Programs from "@/components/sections/Programs";
import Curriculum from "@/components/sections/Curriculum";
import ShoescareSection from "@/components/sections/ShoescareSection";
import OnlineCourses from "@/components/sections/OnlineCourses";
import Facilities from "@/components/sections/Facilities";
import GallerySection from "@/components/sections/GallerySection";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <Programs />
      <Curriculum />
      <ShoescareSection />
      <OnlineCourses />
      <Facilities />
      <GallerySection />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
