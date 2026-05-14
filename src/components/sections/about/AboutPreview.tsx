"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { highlights } from "@/data/about";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section id="about" className="section-pad" style={{ background: "var(--ocean-800)", position: "relative" }}>
      <div className="container-xl">
        <div className="rg-split-lg" style={{ alignItems: "center" }}>
          <div>
            <SectionHeader
              label="Our Legacy"
              heading={<>20 Years of <span className="gradient-text">Uncompromising</span> Quality</>}
              centered={false}
            />
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "600px" }}>
              Since 2004, ABM Marine Products has been at the forefront of Kerala&apos;s seafood export industry. What started as a vision to bring local excellence to the world has grown into a global operation serving Europe, the USA, and Asia.
            </p>
            
            <div className="rg-2" style={{ marginBottom: "2.5rem" }}>
              {highlights.slice(0, 2).map((item) => (
                <div key={item.text} className="glass-card" style={{ padding: "1.5rem" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                  <h4 style={{ color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "1rem" }}>{item.text}</h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.5 }}>Global standard quality control and sourcing.</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary" style={{ display: "inline-flex", textDecoration: "none" }}>
              Our Full Story
              <svg style={{ marginLeft: "0.5rem" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div className="glass-card" style={{ padding: "1.5rem 2.5rem", textAlign: "center", border: "1px solid var(--brand-vibrant)", background: "rgba(0, 93, 163, 0.05)", borderRadius: "30px" }}>
              <h3 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--brand-light)", lineHeight: 1, marginBottom: "0.25rem" }}>20+</h3>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.15em" }}>Years of Global Heritage</p>
            </div>
            <div className="orb orb-cyan" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "200px", height: "200px", opacity: 0.15 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
