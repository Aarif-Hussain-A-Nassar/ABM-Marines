"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPreview() {
  return (
    <section id="contact" className="section-pad" style={{ background: "var(--ocean-800)", position: "relative", overflow: "hidden" }}>
      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        <div className="glass-card" style={{ padding: "4rem 2rem", textAlign: "center", borderRadius: "30px", border: "1px solid var(--glass-border)" }}>
          <SectionHeader
            label="Get In Touch"
            heading={<>Ready to Start Your <span style={{ color: "var(--brand-vibrant)" }}>Export Partnership?</span></>}
            sub="Connect with Kerala's premier seafood exporter for high-quality frozen seafood tailored to your market."
          />
          
          <motion.div 
            style={{ marginTop: "2.5rem" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/contact" 
              className="btn-primary" 
              style={{ 
                padding: "1.25rem 3rem", 
                fontSize: "1.1rem", 
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                boxShadow: "0 20px 40px rgba(0, 150, 214, 0.3)"
              }}
            >
              Contact Us Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </motion.div>
          
          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              <span style={{ color: "var(--brand-vibrant)" }}>✓</span> Quick Response (24h)
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              <span style={{ color: "var(--brand-vibrant)" }}>✓</span> Global Shipping Support
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              <span style={{ color: "var(--brand-vibrant)" }}>✓</span> Tailored Product Specs
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Orbs */}
      <div className="orb orb-cyan theme-only-dark" aria-hidden="true" style={{ top: "-10%", right: "-5%", width: "400px", height: "400px", opacity: 0.05 }} />
      <div className="orb orb-teal theme-only-dark" aria-hidden="true" style={{ bottom: "-10%", left: "-5%", width: "300px", height: "300px", opacity: 0.04 }} />
    </section>
  );
}
