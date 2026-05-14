import type { QualityStep } from "@/types";

interface QualityStepCardProps {
  step: QualityStep;
  cardOnly?: boolean;   // only render the desktop glass card
  mobileOnly?: boolean; // only render the mobile timeline row
  isLast?: boolean;     // last item → no connector line
}

export default function QualityStepCard({
  step,
  cardOnly,
  mobileOnly,
  isLast,
}: QualityStepCardProps) {
  /* ── Desktop glass card ─────────────────────────────────────────────────── */
  if (cardOnly) {
    return (
      <div
        className="glass-card"
        style={{ padding: "2rem 1.5rem", borderRadius: "20px", position: "relative", overflow: "hidden" }}
      >
        <div
          aria-hidden="true"
          className="process-step-number"
          style={{ position: "absolute", top: "-0.5rem", right: "0.5rem", opacity: 0.15 }}
        >
          {step.num}
        </div>

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

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--cyan-400), var(--teal-400), transparent)" }} />
      </div>
    );
  }

  /* ── Mobile timeline row ────────────────────────────────────────────────── */
  if (mobileOnly) {
    return (
      <div className={`quality-step-mobile${isLast ? " quality-step-mobile--last" : ""}`}>
        <div className="quality-step-mobile__pill">
          <span>{step.num}</span>
        </div>
        <div className="quality-step-mobile__body">
          <h3 className="quality-step-mobile__title">{step.title}</h3>
          <p className="quality-step-mobile__desc">{step.desc}</p>
        </div>
      </div>
    );
  }

  return null;
}
