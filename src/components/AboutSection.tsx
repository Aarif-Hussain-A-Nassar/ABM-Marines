"use client";

import Image from "next/image";

const timelineItems = [
  { year: "2004", title: "Founded in Kochi", desc: "Established by Mr. P.A. Xavier and three industry veterans near the fishing harbors of Kochi, Kerala." },
  { year: "2008", title: "First Global Export", desc: "Expanded operations to international markets, building early partnerships in Europe and the Far East." },
  { year: "2015", title: "HACCP & USFDA Certified", desc: "Achieved critical international certifications, unlocking access to North American and global premium markets." },
  { year: "2024", title: "Global Export Network", desc: "Today, supplying premium frozen seafood to Europe, USA, Far East, and Australia with trusted consistency." },
];

const highlights = [
  { icon: "🌊", text: "Kerala Seafood Heritage" },
  { icon: "🏭", text: "Modern Processing Facility" },
  { icon: "🚢", text: "Global Export Network" },
  { icon: "🤝", text: "Direct Fishermen Partnerships" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-pad" style={{ background: "var(--ocean-800)", position: "relative", overflow: "hidden" }}>
      {/* Orbs */}
      <div className="orb orb-cyan" aria-hidden="true"
        style={{ top: "10%", right: "-10%", width: "500px", height: "500px", opacity: 0.08 }} />
      <div className="orb orb-teal" aria-hidden="true"
        style={{ bottom: "10%", left: "-10%", width: "400px", height: "400px", opacity: 0.06 }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>
            Our Story
          </div>
          <h2 className="section-heading" style={{ maxWidth: "700px", margin: "0 auto 1.25rem" }}>
            Two Decades of{" "}
            <span className="gradient-text">Kerala Seafood</span>{" "}
            Excellence
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            ABM Marine Products (Approval No. 763) began its journey in 2004, founded with a
            clear vision — to take the rich seafood heritage of Kerala to the global stage.
          </p>
        </div>

        {/* Main Split Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            marginBottom: "5rem",
          }}
        >
          {/* Left — Image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(34, 211, 238, 0.2)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
                position: "relative",
              }}
            >
              <Image
                src="/facility.jpg"
                alt="ABM Marine Products processing facility"
                width={640}
                height={480}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(2,11,24,0.6) 0%, transparent 50%)",
                }}
              />
            </div>
            {/* Floating badge */}
            <div
              className="glass-card"
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                right: "-1.5rem",
                padding: "1.25rem 1.5rem",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: "var(--cyan-400)",
                  lineHeight: 1,
                }}
              >
                20+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  marginTop: "0.25rem",
                }}
              >
                Years of Trust
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: 1.3,
              }}
            >
              From Kochi&apos;s Harbors to{" "}
              <span className="gradient-text">Global Markets</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9 }}>
              Starting with a modest setup near the fishing harbors of Kochi, ABM Marine Products
              quickly earned recognition for its commitment to quality, transparency, and customer
              satisfaction. Over the years, our dedication transformed us from a small exporter
              into a trusted international brand.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9 }}>
              Today, we supply premium seafood to markets across <strong style={{ color: "var(--cyan-400)" }}>Europe, USA, the Far East,
              and Australia</strong> — serving distributors, retailers, and hospitality brands worldwide.
            </p>

            {/* Highlight grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0.75rem",
                marginTop: "0.5rem",
              }}
            >
              {highlights.map((h) => (
                <div
                  key={h.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.875rem 1rem",
                    background: "rgba(34, 211, 238, 0.05)",
                    border: "1px solid rgba(34, 211, 238, 0.12)",
                    borderRadius: "10px",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>{h.icon}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    {h.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Vision & Mission */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginTop: "0.5rem",
              }}
            >
              <div
                className="glass-card"
                style={{ padding: "1.25rem", borderRadius: "12px" }}
              >
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--cyan-400)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Our Vision
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  India&apos;s most trusted seafood exporter, delivering excellence with sustainability.
                </p>
              </div>
              <div
                className="glass-card"
                style={{ padding: "1.25rem", borderRadius: "12px" }}
              >
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--teal-400)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Our Mission
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  World-class seafood while safeguarding marine resources for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              Our Journey
            </h3>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
              position: "relative",
            }}
          >
            {/* Connecting line */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "28px",
                left: "12.5%",
                right: "12.5%",
                height: "2px",
                background: "linear-gradient(90deg, var(--cyan-400), var(--teal-400), var(--blue-400), var(--cyan-400))",
                opacity: 0.3,
              }}
            />
            {timelineItems.map((item, i) => (
              <div
                key={item.year}
                className="glass-card"
                style={{ padding: "1.75rem 1.25rem", borderRadius: "16px", textAlign: "center", position: "relative" }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, var(--cyan-400), var(--teal-400))`,
                    margin: "0 auto 1rem",
                    boxShadow: "0 0 12px rgba(34,211,238,0.5)",
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: "var(--cyan-400)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </div>
                <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            background: "linear-gradient(135deg, rgba(34,211,238,0.05), rgba(45,212,191,0.03))",
            border: "1px solid rgba(34, 211, 238, 0.1)",
            borderRadius: "20px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--cyan-400)",
              marginBottom: "1rem",
            }}
          >
            Core Values
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0",
              flexWrap: "wrap",
            }}
          >
            {["Quality", "Trust", "Sustainability", "Innovation"].map((val, i, arr) => (
              <span key={val} style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    padding: "0 1rem",
                  }}
                >
                  {val}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: "var(--cyan-400)", opacity: 0.5, fontSize: "1.2rem" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          #about .split-grid { grid-template-columns: 1fr !important; }
          #about .timeline-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #about .highlights-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          #about .timeline-grid { grid-template-columns: 1fr !important; }
          #about .vm-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
