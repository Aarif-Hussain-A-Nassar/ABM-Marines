"use client";

const qualitySteps = [
  {
    num: "01",
    title: "Rigorous Quality Checks",
    desc: "Every batch of seafood is inspected at multiple stages — right from the landing centers to our modern processing facilities. Our team of trained professionals ensures only the best catch makes it to our buyers.",
    icon: "🔬",
    color: "var(--cyan-400)",
  },
  {
    num: "02",
    title: "Hygienic Processing",
    desc: "We maintain international hygiene standards across all our facilities. Automated cleaning, temperature-controlled environments, and stainless-steel equipment ensure our products remain pure and contamination-free.",
    icon: "🧪",
    color: "var(--teal-400)",
  },
  {
    num: "03",
    title: "Global Certifications",
    desc: "ABM operates under HACCP and USFDA compliance, which guarantees that our seafood meets the highest benchmarks of food safety and quality. These certifications reflect our global credibility.",
    icon: "🏅",
    color: "var(--blue-400)",
  },
  {
    num: "04",
    title: "Traceability & Transparency",
    desc: "Every product we ship carries a clear traceability record — from the fishing vessel to the processing floor to the final shipment. This builds trust and allows our clients to know exactly where their seafood comes from.",
    icon: "📍",
    color: "var(--cyan-400)",
  },
  {
    num: "05",
    title: "World-Class Packaging",
    desc: "We use vacuum-sealed packs, IQF freezing, and customized export packaging to preserve freshness during long-distance shipping. This ensures our products reach global markets in perfect condition.",
    icon: "📦",
    color: "var(--teal-400)",
  },
  {
    num: "06",
    title: "Continuous Improvement",
    desc: "Our commitment doesn't stop at meeting standards — we constantly upgrade our infrastructure, adopt new technologies, and train our workforce to stay ahead of international expectations.",
    icon: "🔄",
    color: "var(--blue-400)",
  },
];

export default function QualitySection() {
  return (
    <section
      id="quality"
      className="section-pad"
      style={{
        background: "var(--ocean-800)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Glow orbs */}
      <div
        className="orb orb-cyan"
        aria-hidden="true"
        style={{ top: "-10%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", opacity: 0.07 }}
      />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>
            Quality Assurance
          </div>
          <h2 className="section-heading" style={{ maxWidth: "700px", margin: "0 auto 1.25rem" }}>
            Commitment to{" "}
            <span className="gradient-text">Quality</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            Every product we deliver reflects our dedication to excellence. Strict quality
            checks, hygienic processing, and world-class packaging guarantee seafood that
            meets the highest global standards.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {qualitySteps.map((step) => (
            <div
              key={step.num}
              className="glass-card"
              style={{
                padding: "2rem 1.75rem",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background number */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-0.5rem",
                  right: "1rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "5rem",
                  fontWeight: 900,
                  color: `${step.color}18`,
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {step.num}
              </div>

              {/* Icon */}
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                }}
              >
                {step.icon}
              </div>

              {/* Step number badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: step.color,
                  marginBottom: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "2px",
                    background: step.color,
                    borderRadius: "1px",
                  }}
                />
                Step {step.num}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                }}
              >
                {step.desc}
              </p>

              {/* Bottom gradient bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${step.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div
          style={{
            marginTop: "4rem",
            textAlign: "center",
            padding: "3rem 2rem",
            background:
              "linear-gradient(135deg, rgba(34,211,238,0.08) 0%, rgba(45,212,191,0.05) 50%, rgba(59,130,246,0.05) 100%)",
            border: "1px solid rgba(34,211,238,0.15)",
            borderRadius: "24px",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>⚡</div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "0.75rem",
            }}
          >
            Quality is Not a Department — It&apos;s Our Culture
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            From the moment seafood leaves the ocean to the moment it reaches your table,
            every touchpoint in our supply chain is held to the highest standard of
            quality and safety.
          </p>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          #quality > div > div:nth-child(3) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          #quality > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
