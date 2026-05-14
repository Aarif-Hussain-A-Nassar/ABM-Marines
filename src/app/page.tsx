import HeroSection          from "@/components/sections/hero";
import AboutSection         from "@/components/sections/about";
import ExpertiseSection     from "@/components/sections/expertise";
import QualitySection       from "@/components/sections/quality";
import SustainabilitySection from "@/components/sections/sustainability";
import GlobalReachSection   from "@/components/sections/global-reach";
import CertificationsSection from "@/components/sections/certifications";
import ProductsSection      from "@/components/sections/products";
import InfrastructureSection from "@/components/sections/infrastructure";
import ContactSection       from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <QualitySection />
      <SustainabilitySection />
      <GlobalReachSection />
      <CertificationsSection />
      <ProductsSection />
      <InfrastructureSection />
      <ContactSection />
    </main>
  );
}
