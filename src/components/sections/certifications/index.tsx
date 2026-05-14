"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import CertCard from "./CertCard";
import { certifications } from "@/data/certifications";

const scrollToContact = () =>
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-pad" style={{ background: "var(--ocean-900)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 30% 70%, rgba(34,211,238,0.04) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(45,212,191,0.04) 0%, transparent 50%)", pointerEvents: "none" }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader
          label="✅ Verified Quality"
          heading={<>International <span className="gradient-text">Certifications</span></>}
          sub="Our facilities and operations are certified by the world's most respected food safety and quality regulatory bodies — giving our global buyers complete confidence."
        />

        {/* rg-3: 3col → 2col → 1col */}
        <div className="rg-3" style={{ marginBottom: "3rem" }}>
          {certifications.map((cert) => <CertCard key={cert.abbr} cert={cert} />)}
        </div>

        {/* Trust statement */}
        <div className="cert-trust-row" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", padding: "2rem", background: "linear-gradient(135deg, rgba(34,211,238,0.06), rgba(45,212,191,0.04))", border: "1px solid rgba(34,211,238,0.12)", borderRadius: "20px", flexWrap: "wrap" }}>
          <div style={{ fontSize: "2rem", flexShrink: 0 }}>🔒</div>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: "0.4rem" }}>Full Regulatory Compliance</h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Our multi-certification framework ensures compliance in <strong style={{ color: "var(--cyan-400)" }}>all our export markets</strong>, giving buyers the assurance they need to confidently partner with us.</p>
          </div>
          <button onClick={scrollToContact} className="btn-primary" style={{ flexShrink: 0 }}>Request Cert Docs</button>
        </div>
      </div>
    </section>
  );
}
