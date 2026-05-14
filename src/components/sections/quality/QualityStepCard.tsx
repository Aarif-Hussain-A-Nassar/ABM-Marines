import type { QualityStep } from "@/types";

interface QualityStepCardProps {
  step: QualityStep;
}

export default function QualityStepCard({ step }: QualityStepCardProps) {
  return (
    <div
      className="glass-card"
      style={{ padding: "2rem 1.5rem", borderRadius: "20px", position: "relative", overflow: "hidden" }}
    >
      {/* Background step number */}
      <div
        aria-hidden="true"
        className="process-step-number"
        style={{ position: "absolute", top: "-0.5rem", right: "0.5rem", opacity: 0.15 }}
      >
        {step.num}
      </div>

      {/* Step badge */}
      <div style={{ marginBottom: "1.25rem" }}>
        <span style={{ display: "inline-block", padding: "0.25rem 0.75rem", background: "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(45,212,191,0.15))", border: "1px solid rgba(34,211,238,0.25)", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 700, color: "var(--cyan-400)", letterSpacing: "0.1em" }}>
          Step {step.num}
        </span>
      </div>

      <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
        {step.title}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
        {step.desc}
      </p>

      {/* Bottom stripe */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--cyan-400), var(--teal-400), transparent)" }} />
    </div>
  );
}
