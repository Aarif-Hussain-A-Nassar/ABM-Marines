"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { pillars } from "@/data/sustainability";

export default function SustainabilityPreview() {
  return (
    <section id="sustainability" className="section-pad" style={{ position: "relative", overflow: "hidden" }}>
      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        <div className="rg-split" style={{ alignItems: "center" }}>
          <div>
            <SectionHeader
              label="Our Commitment"
              heading={<>Seafood With a <span style={{ color: "var(--brand-vibrant)" }}>Conscience</span></>}
              sub="Sustainability isn&apos;t a choice — it&apos;s our responsibility. We trace every shipment back to its sustainable source."
              centered={false}
            />

            <div className="rg-2" style={{ marginBottom: "2.5rem" }}>
              {pillars.slice(0, 2).map((p) => (
                <div key={p.title} style={{ padding: "1.5rem", background: "var(--ocean-800)", border: "1px solid var(--glass-border)", borderRadius: "16px" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                  <h4 style={{ color: "var(--text-primary)", marginBottom: "0.25rem" }}>{p.title}</h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{p.desc}</p>
                </div>
              ))}
            </div>

            <Link href="/sustainability" className="btn-ghost" style={{ display: "inline-flex", textDecoration: "none", color: "var(--teal-400)", borderColor: "var(--teal-400)" }}>
              Environmental Policy
              <svg style={{ marginLeft: "0.5rem" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div className="glass-card" style={{ padding: "2rem", textAlign: "center", border: "1px solid var(--glass-border)", borderRadius: "30px", background: "var(--ocean-800)" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌱</div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.2 }}>100% Traceable</h3>
              <p style={{ fontSize: "0.75rem", color: "var(--teal-400)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.25rem" }}>From Catch to Delivery</p>
            </div>
            <div className="orb orb-teal" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "180px", height: "180px", opacity: 0.1 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
