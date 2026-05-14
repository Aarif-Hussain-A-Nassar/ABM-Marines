"use client";

import Image from "next/image";

const sustainabilityPillars = [
  {
    icon: "🌱",
    title: "Eco-Friendly Sourcing",
    desc: "We practice responsible procurement with eco-friendly sourcing and reduced by-catch methods, minimizing environmental impact.",
  },
  {
    icon: "🌊",
    title: "Marine Conservation",
    desc: "Active participation in marine conservation initiatives to protect Kerala's rich marine biodiversity for future generations.",
  },
  {
    icon: "👨‍🎣",
    title: "Fishermen Support",
    desc: "Supporting local fishing communities through fair pricing, training, and long-term partnership programs that uplift livelihoods.",
  },
  {
    icon: "🔍",
    title: "Transparent Supply Chain",
    desc: "Full traceability from fishing vessel to final export — every product carries a transparent record ensuring our customers' confidence.",
  },
];

const promises = [
  "Eco-friendly sourcing & reduced by-catch practices",
  "Supporting fishermen communities",
  "Marine conservation initiatives",
  "Transparent supply chain & traceability",
];

export default function SustainabilitySection() {
  return (
    <section
      id="sustainability"
      className="section-pad"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--ocean-900)",
      }}
    >
      {/* Full-section background image */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/sustainability.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundAttachment: "fixed",
          opacity: 0.12,
        }}
      />

      {/* Gradient overlays */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(2,11,24,0.95) 0%, rgba(4,15,32,0.8) 50%, rgba(2,11,24,0.95) 100%)",
        }}
      />

      {/* Animated orbs */}
      <div
        className="orb orb-teal"
        aria-hidden="true"
        style={{ top: "20%", left: "5%", width: "400px", height: "400px", opacity: 0.12, animation: "float 8s ease-in-out infinite" }}
      />
      <div
        className="orb orb-cyan"
        aria-hidden="true"
        style={{ bottom: "10%", right: "5%", width: "350px", height: "350px", opacity: 0.1, animation: "float 10s ease-in-out infinite reverse" }}
      />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>
            🌊 Our Promise to the Ocean
          </div>
          <h2 className="section-heading" style={{ maxWidth: "700px", margin: "0 auto 1.25rem" }}>
            Sustainability &{" "}
            <span className="gradient-text">Responsibility</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            At ABM, we are committed to responsible sourcing and sustainable practices,
            ensuring the future of marine resources while serving customer needs.
          </p>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            marginBottom: "4rem",
          }}
        >
          {/* Left — Visual */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(45, 212, 191, 0.2)",
                position: "relative",
              }}
            >
              <Image
                src="/sustainability.jpg"
                alt="Kerala sustainable fishing and ocean conservation"
                width={600}
                height={420}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              {/* Overlay gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(2,11,24,0.7) 0%, transparent 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  Kerala&apos;s Pristine Waters
                </h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(148,163,184,0.9)" }}>
                  Our sourcing roots lie in the rich coastal ecosystems of Kerala
                </p>
              </div>
            </div>

            {/* Floating stat */}
            <div
              className="glass-card animate-float"
              style={{
                position: "absolute",
                top: "-1.5rem",
                right: "-1.5rem",
                padding: "1rem 1.25rem",
                borderRadius: "14px",
                textAlign: "center",
                borderColor: "rgba(45,212,191,0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "var(--teal-400)",
                  lineHeight: 1,
                }}
              >
                100%
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  marginTop: "0.25rem",
                  fontWeight: 600,
                }}
              >
                Traceable
              </div>
            </div>
          </div>

          {/* Right — Pillars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
                lineHeight: 1.3,
              }}
            >
              Our Promise to{" "}
              <span style={{ color: "var(--teal-400)" }}>Future Generations</span>
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              From Kerala&apos;s shores to international markets, ABM continues to build
              lasting partnerships with global buyers by delivering consistency, quality,
              and trust — while protecting the ocean that sustains us all.
            </p>

            {sustainabilityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glass-card"
                style={{
                  padding: "1.25rem 1.5rem",
                  borderRadius: "14px",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  borderColor: "rgba(45,212,191,0.1)",
                }}
              >
                <span style={{ fontSize: "1.5rem", flexShrink: 0, marginTop: "0.1rem" }}>
                  {pillar.icon}
                </span>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "var(--teal-400)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {pillar.title}
                  </h4>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom — Promise Banner */}
        <div
          style={{
            padding: "3rem 2rem",
            background:
              "linear-gradient(135deg, rgba(45,212,191,0.08) 0%, rgba(34,211,238,0.05) 50%, rgba(45,212,191,0.08) 100%)",
            border: "1px solid rgba(45,212,191,0.15)",
            borderRadius: "24px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🌍</div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            Every Export is a Promise to the Planet
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
            }}
          >
            {promises.map((p) => (
              <span
                key={p}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  background: "rgba(45,212,191,0.08)",
                  border: "1px solid rgba(45,212,191,0.2)",
                  borderRadius: "100px",
                  fontSize: "0.82rem",
                  color: "var(--text-secondary)",
                }}
              >
                <span style={{ color: "var(--teal-400)" }}>✓</span>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          #sustainability .main-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
