"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import InfraCard from "./InfraCard";
import { infraItems } from "@/data/infrastructure";

const scrollToContact = () =>
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="section-pad" style={{ background: "var(--ocean-900)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,211,238,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.02) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />
      <div className="orb orb-blue" aria-hidden="true" style={{ top: "30%", left: "-5%", width: "500px", height: "500px", opacity: 0.06 }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader
          label="World-Class Facilities"
          heading={<>Our <span className="gradient-text">Infrastructure</span></>}
          sub="Our processing facilities in Kochi are equipped with modern technology enabling us to consistently deliver premium quality seafood at export scale."
        />

        <div className="rg-infra">
          {infraItems.map((item) => <InfraCard key={item.title} item={item} />)}
        </div>

        {/* Visit CTA — rg-cta */}
        <div
          className="rg-cta"
          style={{
            marginTop: "4rem",
            padding: "var(--mobile-cta-pad, 2rem)",
            background: "linear-gradient(135deg, rgba(34,211,238,0.06), rgba(45,212,191,0.04))",
            border: "1px solid rgba(34,211,238,0.12)",
            borderRadius: "20px"
          }}
        >
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2vw, 1.5rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>Want to Visit Our Facility?</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: "500px" }}>We welcome potential buyers and partners to inspect our processing facilities and quality systems firsthand.</p>
          </div>
          <button onClick={scrollToContact} className="btn-primary">Schedule a Visit</button>
        </div>
      </div>
    </section>
  );
}
