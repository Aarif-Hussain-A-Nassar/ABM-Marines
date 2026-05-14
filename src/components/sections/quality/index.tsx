import SectionHeader from "@/components/ui/SectionHeader";
import QualityStepCard from "./QualityStepCard";
import { qualitySteps } from "@/data/quality";

export default function QualitySection() {
  return (
    <section id="quality" className="section-pad" style={{ background: "var(--ocean-800)", position: "relative", overflow: "hidden" }}>
      <div className="orb orb-blue" aria-hidden="true" style={{ top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", opacity: 0.06 }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader
          label="Our Process"
          heading={<>Quality Control <span className="gradient-text">Excellence</span></>}
          sub="Our 6-step quality control system ensures every product that leaves our facility meets the stringent demands of global buyers and regulators."
        />

        {/* Desktop / tablet: 3-col glass cards */}
        <div className="rg-3 quality-steps-desktop" style={{ marginBottom: "4rem" }}>
          {qualitySteps.map((step) => (
            <QualityStepCard key={step.num} step={step} cardOnly />
          ))}
        </div>

        {/* Mobile: vertical timeline list */}
        <div className="quality-steps-mobile-list" style={{ marginBottom: "2.5rem" }}>
          {qualitySteps.map((step, idx) => (
            <QualityStepCard key={step.num} step={step} mobileOnly isLast={idx === qualitySteps.length - 1} />
          ))}
        </div>


        {/* Culture statement */}
        <div style={{ textAlign: "center", padding: "2.5rem", background: "linear-gradient(135deg, rgba(34,211,238,0.06), rgba(45,212,191,0.04))", border: "1px solid rgba(34,211,238,0.12)", borderRadius: "20px" }}>
          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🔬</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>Zero Tolerance for Compromise</h3>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            We believe quality is not a checkpoint — it&apos;s a culture embedded in every layer of our operations, from source selection to the moment products arrive at your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
}
