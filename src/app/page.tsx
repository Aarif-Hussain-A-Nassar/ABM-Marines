"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/hero";
import AboutPreview from "@/components/sections/about/AboutPreview";
import ExpertiseSection from "@/components/sections/expertise";
import QualitySection from "@/components/sections/quality";
import SustainabilityPreview from "@/components/sections/sustainability/SustainabilityPreview";
import GlobalReachSection from "@/components/sections/global-reach";
import CertificationsSection from "@/components/sections/certifications";
import ProductsPreview from "@/components/sections/products/ProductsPreview";
import InfrastructureSection from "@/components/sections/infrastructure";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <main style={{ background: "var(--ocean-900)" }}>
      <Navbar />
      
      <HeroSection />
      
      <AboutPreview />
      
      <div className="section-divider" />
      <ExpertiseSection />
      
      <div className="section-divider" />
      <ProductsPreview />
      
      <div className="section-divider" />
      <QualitySection />
      
      <div className="section-divider" />
      <SustainabilityPreview />
      
      <div className="section-divider" />
      <InfrastructureSection />
      
      <div className="section-divider" />
      <GlobalReachSection />
      
      <div className="section-divider" />
      <CertificationsSection />
      
      <div className="section-divider" />
      <ContactSection />
      
      <Footer />
    </main>
  );
}
