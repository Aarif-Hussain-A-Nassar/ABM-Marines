// Why Choose Us — ABM Marine's real competitive advantages

const features = [
  {
    number: "01",
    title: "EU Approved Factory with HACCP Standards",
    description: "Our factory in Kerala's Aroor Industrial Development Area is EU approved and fully HACCP endorsed, ensuring every product meets the strictest food safety and quality control requirements for international export.",
  },
  {
    number: "02",
    title: "Direct-Source Raw Materials — No Middleman",
    description: "ABM has long-term arrangements with suppliers to purchase raw materials directly from source. We make direct sales, eliminating the middleman — reducing cost and passing the savings on to our customers.",
  },
  {
    number: "03",
    title: "Expertise-Driven Management Since 2004",
    description: "Founded by three veterans of the Fisheries field, ABM has an expertise-driven managing team with over 20 years of experience in the seafood industry, ensuring the highest production control and packing standards.",
  },
  {
    number: "04",
    title: "USFDA Registered · MPEDA Authorized Exporter",
    description: "Registered with the United States Food and Drug Administration (USFDA), certified by FSSAI, and authorized by MPEDA — ABM Marine Products is recognized at international levels with a record of satisfied customers.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="section-pad" aria-label="Why choose ABM Marine">
      <div className="container-wide">
        <div className="grid-2col">

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
              {/* <Image src="/images/why-us.jpg" alt="ABM Marine seafood processing" fill style={{ objectFit: "cover" }} /> */}
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-heading)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
                [ FACTORY IMAGE ]
              </p>
            </div>

            {/* Floating accent card */}
            <div
              className="why-float-card"
              style={{
                position: "absolute",
                top: "2rem",
                right: "-2rem",
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "1.5rem",
                width: "180px",
              }}
            >
              <div style={{ color: "var(--blue-light)", fontSize: "1.25rem", fontFamily: "var(--font-heading)", fontWeight: 900 }}>EU</div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.75rem", fontFamily: "var(--font-heading)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Approved Factory · HACCP</div>
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
                    borderBottom: "1px solid rgba(25,118,210,0.1)",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "rgba(25,118,210,0.2)",
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
