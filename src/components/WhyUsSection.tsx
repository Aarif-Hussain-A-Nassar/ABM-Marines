// Why Choose Us / Features Section — alternating highlight points

const features = [
  {
    number: "01",
    title: "Global Reach, Local Expertise",
    description: "With a presence in 50+ countries and partnerships at every major port, we combine worldwide coverage with deep local knowledge to serve your vessels wherever they sail.",
  },
  {
    number: "02",
    title: "Quality You Can Count On",
    description: "Our ISO-certified processes and rigorous quality control ensure that every supply, service, and crew member meets the highest international maritime standards.",
  },
  {
    number: "03",
    title: "24/7 Dedicated Support",
    description: "Marine operations never stop, and neither do we. Our global team is available around the clock to handle emergencies, special requests, and time-sensitive operations.",
  },
  {
    number: "04",
    title: "Competitive & Transparent Pricing",
    description: "We believe in straightforward pricing with no hidden fees. Our cost-effective solutions help vessel operators maximize efficiency without compromising on quality.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="section-pad" aria-label="Why choose ABM Marine">
      <div className="container-wide">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "5rem",
          alignItems: "center",
        }}>

          {/* ── Left: Image / Visual ── */}
          <div style={{ position: "relative" }}>
            {/* Main image placeholder */}
            <div style={{
              borderRadius: "8px",
              overflow: "hidden",
              aspectRatio: "3/4",
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {/* <Image src="/images/why-us.jpg" alt="Marine vessel at sea" fill style={{ objectFit: "cover" }} /> */}
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-heading)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
                [ WHY US IMAGE ]
              </p>
            </div>

            {/* Floating accent card */}
            <div style={{
              position: "absolute",
              top: "2rem",
              right: "-2rem",
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1.5rem",
              width: "180px",
            }}>
              <div style={{ color: "var(--gold)", fontSize: "1.75rem", fontFamily: "var(--font-heading)", fontWeight: 900 }}>ISO</div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.75rem", fontFamily: "var(--font-heading)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Certified Operations</div>
            </div>
          </div>

          {/* ── Right: Features ── */}
          <div>
            <p className="section-label" style={{ marginBottom: "1rem" }}>Why Choose Us</p>
            <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
              The ABM Marine{" "}
              <span className="text-gold">Advantage</span>
            </h2>
            <div className="gold-divider" style={{ marginBottom: "2.5rem" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {features.map((feature) => (
                <div
                  key={feature.number}
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                    paddingBottom: "2rem",
                    borderBottom: "1px solid rgba(197,160,90,0.1)",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "rgba(197,160,90,0.2)",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}>
                    {feature.number}
                  </span>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.5rem",
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
