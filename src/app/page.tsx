import HeroSlider from '@/components/HeroSlider';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import ProjectsSection from '@/components/ProjectsSection';
import GallerySection from '@/components/GallerySection';
import CtaSection from '@/components/CtaSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Dynamic Automatic Image Slider */}
      <HeroSlider />

      {/* 2. Our Services Section (8 cards) */}
      <ServicesSection />

      {/* 3. About Us Section (Two-column layout & Core Values) */}
      <AboutSection />

      {/* 4. Why Choose Contour? (5 pillars with dark navy background) */}
      <WhyChooseSection />

      {/* 5. Manufacturing Facilities Section (4 industrial photographs) */}
      <FacilitiesSection />

      {/* 6. Our Projects Section (4 featured project cards) */}
      <ProjectsSection />

      {/* 7. Industrial Project Gallery (Site execution photographs) */}
      <GallerySection limit={8} />

      {/* 8. Contact / CTA Section (Let's Build Your Next Project Together) */}
      <CtaSection />
    </>
  );
}
