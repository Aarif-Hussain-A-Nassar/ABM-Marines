import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProductsSection from "@/components/ProductsSection";
import ClientsSection from "@/components/ClientsSection";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      {/* 1. Full-screen hero with headline + CTA */}
      <HeroSection />

      {/* 2. Key stats bar */}
      <StatsBar />

      {/* 3. About ABM Marine — two-column with image */}
      <AboutSection />

      {/* 4. Core Services — 6-card grid */}
      <ServicesSection />

      {/* 5. Why Choose Us — numbered features + image */}
      <WhyUsSection />

      {/* 6. Products — 6-card grid with image thumbs */}
      <ProductsSection />

      {/* 7. Clients + Testimonials */}
      <ClientsSection />

      {/* 8. Full-width CTA Banner */}
      <CTABanner />
    </>
  );
}
