"use client";

const steps = [
  { num: "01", title: "Source Selection",      desc: "We partner with certified and trusted fishermen and aquaculture farms, ensuring only the finest raw material enters our supply chain." },
  { num: "02", title: "Hygienic Reception",    desc: "Raw seafood is received in temperature-controlled environments, immediately assessed for freshness, and logged into our traceability system." },
  { num: "03", title: "Processing & Grading",  desc: "Expert processing teams clean, peel, and grade seafood to precise specifications, ensuring uniformity and adherence to buyer requirements." },
  { num: "04", title: "Quality Testing",        desc: "Our in-house laboratory conducts microbiological, chemical, and physical testing at each production stage, meeting HACCP and USFDA standards." },
  { num: "05", title: "IQF / Block Freezing",  desc: "Products are individually quick frozen (IQF) or block frozen using modern freezing systems that lock in freshness, flavor, and texture." },
  { num: "06", title: "Export Packaging",       desc: "Final products are sealed, labeled, and packed for export with all regulatory documentation, cold-chain compliance verified before dispatch." },
];

export default function QualitySection() {
  return (
    <section id="quality" className="section-pad" style={{ background: "var(--ocean-800)", position: "relative", overflow: "hidden" }}>
      <div className="orb orb-blue" aria-hidden="true" style={{ top: "0", left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", opacity: 0.06 }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>Our Process</div>
          <h2 className="section-heading" style={{ maxWidth: "700px", margin: "0 auto 1.25rem" }}>
            Quality Control <span className="gradient-text">Excellence</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            Our 6-step quality control system ensures every product that leaves our facility
            meets the stringent demands of global buyers and regulators.
          </p>
        </div>

        {/* Steps — rg-3: 3col → 2col tablet → 1col mobile */}
        <div className="rg-3" style={{ marginBottom: "4rem" }}>
          {steps.map((step) => (
            <div
              key={step.num}
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

              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>{step.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>{step.desc}</p>

              {/* Bottom stripe */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--cyan-400), var(--teal-400), transparent)" }} />
            </div>
          ))}
        </div>

        {/* Culture statement */}
        <div style={{ textAlign: "center", padding: "2.5rem", background: "linear-gradient(135deg, rgba(34,211,238,0.06), rgba(45,212,191,0.04))", border: "1px solid rgba(34,211,238,0.12)", borderRadius: "20px" }}>
          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🔬</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
            Zero Tolerance for Compromise
          </h3>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            We believe quality is not a checkpoint — it&apos;s a culture embedded in every layer of our
            operations, from source selection to the moment products arrive at your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
}
