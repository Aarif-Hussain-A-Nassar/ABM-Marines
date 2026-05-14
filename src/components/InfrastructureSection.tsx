"use client";

const infraItems = [
  {
    icon: "🏭",
    title: "Modern Processing Plant",
    desc: "State-of-the-art processing facility with automated conveyor systems, stainless-steel equipment, and temperature-controlled environments meeting global food safety standards.",
    stat: "HACCP Compliant",
  },
  {
    icon: "❄️",
    title: "Cold Storage Infrastructure",
    desc: "Advanced blast-freezing units and cold storage facilities maintaining optimal temperatures to preserve product freshness from processing through to shipment.",
    stat: "-40°C Capability",
  },
  {
    icon: "⚙️",
    title: "Automated Processing Lines",
    desc: "Modern automated processing lines ensure consistent quality, higher throughput, and reduced contamination risk — meeting the stringent demands of global buyers.",
    stat: "High-Volume Output",
  },
  {
    icon: "📦",
    title: "Export Packaging Lines",
    desc: "Dedicated packaging lines for vacuum-sealing, IQF packaging, and bulk export formats. Customized to meet specific buyer requirements for different global markets.",
    stat: "Custom Formats",
  },
  {
    icon: "🚛",
    title: "Refrigerated Logistics",
    desc: "Our own fleet of refrigerated vehicles branded with ABM Marine ensure cold-chain integrity from the facility to export ports, maintaining product quality in transit.",
    stat: "Full Cold Chain",
  },
  {
    icon: "🔬",
    title: "In-House Quality Lab",
    desc: "A dedicated quality control laboratory with trained food safety professionals conducting microbiological, physical, and chemical testing at every production stage.",
    stat: "Zero Compromise",
  },
];

export default function InfrastructureSection() {
  return (
    <section
      id="infrastructure"
      className="section-pad"
      style={{
        background: "var(--ocean-900)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid lines background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* Orbs */}
      <div className="orb orb-blue" aria-hidden="true"
        style={{ top: "30%", left: "-5%", width: "500px", height: "500px", opacity: 0.06 }} />
      <div className="orb orb-cyan" aria-hidden="true"
        style={{ bottom: "20%", right: "-5%", width: "400px", height: "400px", opacity: 0.05 }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>
            World-Class Facilities
          </div>
          <h2 className="section-heading" style={{ maxWidth: "700px", margin: "0 auto 1.25rem" }}>
            Our{" "}
            <span className="gradient-text">Infrastructure</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            Our processing facilities in Kochi are equipped with modern technology and infrastructure
            that enables us to consistently deliver premium quality seafood at export scale.
          </p>
        </div>

        {/* Infrastructure Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {infraItems.map((item) => (
            <div
              key={item.title}
              className="glass-card"
              style={{
                padding: "2rem 1.5rem",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {/* Icon + Stat */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div style={{ fontSize: "2.2rem" }}>{item.icon}</div>
                <span
                  style={{
                    padding: "0.25rem 0.75rem",
                    background: "rgba(34,211,238,0.08)",
                    border: "1px solid rgba(34,211,238,0.2)",
                    borderRadius: "100px",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "var(--cyan-400)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.stat}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  flex: 1,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div
          style={{
            marginTop: "4rem",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "center",
            padding: "2.5rem 3rem",
            background:
              "linear-gradient(135deg, rgba(34,211,238,0.06) 0%, rgba(45,212,191,0.04) 100%)",
            border: "1px solid rgba(34,211,238,0.12)",
            borderRadius: "20px",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              Want to Visit Our Facility?
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              We welcome potential buyers and partners to inspect our processing facilities
              and quality systems firsthand.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-primary"
            style={{ flexShrink: 0 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Schedule a Visit
          </a>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          #infrastructure .infra-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #infrastructure .cta-banner { grid-template-columns: 1fr !important; text-align: center !important; }
          #infrastructure .cta-banner .btn-primary { margin: 0 auto; }
        }
        @media (max-width: 640px) {
          #infrastructure .infra-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
