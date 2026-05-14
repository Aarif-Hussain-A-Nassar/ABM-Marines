import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import QualitySection from "@/components/QualitySection";
import SustainabilitySection from "@/components/SustainabilitySection";
import GlobalReachSection from "@/components/GlobalReachSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProductsSection from "@/components/ProductsSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Full-screen cinematic hero */}
      <HeroSection />

      {/* 2. About — Kerala story & timeline */}
      <AboutSection />

      {/* 3. Expertise — 6 animated cards */}
      <ExpertiseSection />

      {/* 4. Quality Control — 6-step process */}
      <QualitySection />

      {/* 5. Sustainability — ocean-themed */}
      <SustainabilitySection />

      {/* 6. Global Reach — world map */}
      <GlobalReachSection />

      {/* 7. Certifications — cert showcase */}
      <CertificationsSection />

      {/* 8. Products — filterable grid (modular) */}
      <ProductsSection />

      {/* 9. Infrastructure — facility cards */}
      <InfrastructureSection />

      {/* 10. Contact — form + map + WhatsApp */}
      <ContactSection />
    </>
  );
}
