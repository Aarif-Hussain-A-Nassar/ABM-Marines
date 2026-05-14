import SectionHeader from "@/components/ui/SectionHeader";
import PillarCard from "./PillarCard";
import { pillars } from "@/data/sustainability";

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="section-pad" style={{ position: "relative", overflow: "hidden", background: "var(--ocean-900)" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url('/sustainability-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", opacity: 0.18 }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(2,11,24,0.85) 0%, rgba(2,11,24,0.6) 50%, rgba(2,11,24,0.9) 100%)" }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader
          label="Our Commitment"
          heading={<>Seafood With a <span className="gradient-text">Conscience</span></>}
          sub="We believe in protecting the oceans that sustain our business. Sustainability is embedded in every decision we make — from sourcing to shipping."
        />

        {/* rg-4: 4col → 2col everywhere */}
        <div className="rg-4" style={{ marginBottom: "4rem" }}>
          {pillars.map((p) => <PillarCard key={p.title} pillar={p} />)}
        </div>

        {/* Promise banner — rg-split */}
        <div className="rg-split" style={{ padding: "3rem", background: "linear-gradient(135deg, rgba(34,211,238,0.08), rgba(45,212,191,0.05))", border: "1px solid rgba(34,211,238,0.15)", borderRadius: "24px" }}>
          <div>
            <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>Our Promise</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 2.5vw, 2rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem", lineHeight: 1.3 }}>
              Fishing Today, <span className="gradient-text">Preserving Tomorrow</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "500px" }}>
              Every shipment from ABM Marine Products is a commitment — not just to quality, but to the future of our oceans. We trace every product back to its sustainable source.
            </p>
          </div>
          <div className="sus-float-badge glass-card" style={{ padding: "2.5rem", borderRadius: "20px", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🌊</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 900, color: "var(--cyan-400)", lineHeight: 1 }}>100%</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-secondary)", marginTop: "0.5rem" }}>Traceable Sourcing</div>
          </div>
        </div>
      </div>
    </section>
  );
}
