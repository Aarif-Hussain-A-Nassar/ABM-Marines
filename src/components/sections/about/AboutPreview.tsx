"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import Image from "next/image";
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

          <div style={{ position: "relative", width: "100%" }}>
            <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(34,211,238,0.2)", boxShadow: "0 30px 80px rgba(0,0,0,0.4)", position: "relative" }}>
              <Image
                src="/facility_exterior.png"
                alt="ABM Marine Products facility headquarters"
                width={640}
                height={480}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "var(--fade-grad)" }} />
            </div>

            {/* Overlapping legacy badge */}
            <div
              className="glass-card"
              style={{ 
                position: "absolute", 
                bottom: "-1.5rem", 
                right: "-1rem", 
                padding: "1.25rem 1.5rem", 
                borderRadius: "16px", 
                textAlign: "center",
                border: "1px solid rgba(34,211,238,0.3)",
                zIndex: 2,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 900, color: "var(--cyan-400)", lineHeight: 1 }}>20+</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-secondary)", marginTop: "0.25rem" }}>Years of Legacy</div>
            </div>
            
            <div className="orb orb-cyan" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "300px", height: "300px", opacity: 0.1 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
