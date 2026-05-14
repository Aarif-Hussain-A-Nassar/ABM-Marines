"use client";

const certifications = [
  {
    abbr: "HACCP",
    name: "Hazard Analysis Critical Control Points",
    desc: "International standard for food safety management — ensuring risks are identified and controlled throughout the supply chain.",
    color: "var(--cyan-400)",
    icon: "🛡️",
  },
  {
    abbr: "USFDA",
    name: "US Food & Drug Administration",
    desc: "Registered with the USFDA, allowing us to export premium seafood products directly to the United States market.",
    color: "var(--blue-400)",
    icon: "🇺🇸",
  },
  {
    abbr: "BRCGS",
    name: "Brand Reputation Compliance Global Standards",
    desc: "One of the most recognized global food safety standards, reflecting our commitment to product safety, quality, and operational criteria.",
    color: "var(--teal-400)",
    icon: "🏆",
  },
  {
    abbr: "FSSAI",
    name: "Food Safety & Standards Authority of India",
    desc: "India's apex food safety regulator approval ensures we meet all domestic food safety standards before export.",
    color: "var(--cyan-400)",
    icon: "🇮🇳",
  },
  {
    abbr: "EU Approved",
    name: "European Union Approval No. 763",
    desc: "EU market approval enabling us to supply seafood products to all member states of the European Union.",
    color: "var(--blue-400)",
    icon: "🇪🇺",
  },
  {
    abbr: "BAP",
    name: "Best Aquaculture Practices",
    desc: "Certification affirming our commitment to responsible aquaculture including environmental, social, food safety, and animal welfare standards.",
    color: "var(--teal-400)",
    icon: "🌿",
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="section-pad"
      style={{
        background: "var(--ocean-900)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse at 30% 70%, rgba(34,211,238,0.04) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(45,212,191,0.04) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>
            ✅ Verified Quality
          </div>
          <h2 className="section-heading" style={{ maxWidth: "700px", margin: "0 auto 1.25rem" }}>
            International{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            Our facilities and operations are certified by the world&apos;s most respected
            food safety and quality regulatory bodies — giving our global buyers complete confidence.
          </p>
        </div>

        {/* Cert Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.abbr}
              className="glass-card"
              style={{
                padding: "2rem 1.5rem",
                borderRadius: "20px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow background */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "150px",
                  height: "100px",
                  background: `radial-gradient(ellipse, ${cert.color}20, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Icon */}
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{cert.icon}</div>

              {/* Abbreviation */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "1.8rem",
                  color: cert.color,
                  marginBottom: "0.5rem",
                  lineHeight: 1,
                }}
              >
                {cert.abbr}
              </div>

              {/* Full name */}
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  letterSpacing: "0.05em",
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                {cert.name}
              </div>

              {/* Divider */}
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                  margin: "0 auto 0.75rem",
                  borderRadius: "1px",
                }}
              />

              {/* Description */}
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                {cert.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            padding: "2rem 3rem",
            background: "linear-gradient(135deg, rgba(34,211,238,0.06), rgba(45,212,191,0.04))",
            border: "1px solid rgba(34,211,238,0.12)",
            borderRadius: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: "2rem" }}>🔒</div>
          <div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "var(--text-primary)",
                marginBottom: "0.4rem",
              }}
            >
              Full Regulatory Compliance
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              Our multi-certification framework ensures compliance with regulations in{" "}
              <strong style={{ color: "var(--cyan-400)" }}>all our export markets</strong>,
              giving buyers the assurance they need to confidently partner with us.
            </p>
          </div>
          <a href="#contact" className="btn-primary" style={{ flexShrink: 0, padding: "0.75rem 1.75rem", fontSize: "0.82rem" }}
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            Request Cert Docs
          </a>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          #certifications .certs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          #certifications .certs-grid { grid-template-columns: 1fr !important; }
          #certifications .trust-bar { flex-direction: column !important; text-align: center !important; }
        }
      `}</style>
    </section>
  );
}
