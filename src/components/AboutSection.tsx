// About Section — two-column layout: text left, image right

export default function AboutSection() {
  return (
    <section id="about" className="section-pad" aria-label="About ABM Marine">
      <div className="container-wide">
        <div className="grid-2col">

          {/* ── Left: Text Content ── */}
          <div>
            <p className="section-label" style={{ marginBottom: "1rem" }}>Who We Are</p>
            <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
              A Brand Name for Quality in{" "}
              <span className="text-gold">Frozen Marine Products</span>
            </h2>
            <div className="gold-divider" style={{ marginBottom: "1.75rem" }} />
            <p className="section-subtitle" style={{ marginBottom: "1.5rem" }}>
              ABM Marine Products, commonly known as ABM, has been into the Seafood industry
              with sustained quality standards and competitive pricing since its launch in 2004.
              Our resourceful backup of skilled personnel and advanced infrastructure ensure
              quality products with superior production control and packing.
            </p>
            <p className="section-subtitle" style={{ marginBottom: "2.5rem", fontSize: "0.95rem" }}>
              Founded by three veterans of the Fisheries field, ABM has the advantage of an
              expertise-driven managing team. We make direct sales eliminating the middleman,
              reducing cost and passing the savings on to the customer. ABM is a brand of
              Indo French Shellfish Co. Private Limited.
            </p>

            {/* ── Feature bullets ── */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2.5rem" }}>
              {[
                "EU Approved Factory",
                "HACCP Endorsed · USFDA Registered",
                "Block Frozen & IQF Seafood Processing",
                "Direct-source raw materials — no middleman",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  <span style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: "var(--blue-light)", flexShrink: 0,
                  }} />
                  {item}
                </li>
              ))}
            </ul>

            <a href="/about" className="btn-gold">Learn More About Us</a>
          </div>

          {/* ── Right: Image ── */}
          <div style={{ position: "relative" }}>
            {/* Blue border accent */}
            <div aria-hidden="true" style={{
              position: "absolute",
              top: "-16px",
              right: "-16px",
              width: "100%",
              height: "100%",
              border: "2px solid rgba(25,118,210,0.3)",
              borderRadius: "8px",
              pointerEvents: "none",
              zIndex: 0,
            }} />

            {/* Image placeholder */}
            <div style={{
              position: "relative",
              zIndex: 1,
              borderRadius: "8px",
              overflow: "hidden",
              aspectRatio: "4/3",
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {/* <Image src="/images/about-team.jpg" alt="ABM Marine team at work" fill style={{ objectFit: "cover" }} /> */}
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-heading)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
                [ ABOUT IMAGE ]
              </p>
            </div>

            {/* Experience badge */}
            <div
              className="about-badge"
              style={{
                position: "absolute",
                bottom: "-24px",
                left: "-24px",
                zIndex: 2,
                background: "linear-gradient(135deg, var(--blue-dark), var(--blue-light))",
                color: "#fff",
                padding: "1.25rem 1.75rem",
                borderRadius: "8px",
                fontFamily: "var(--font-heading)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: 1 }}>20+</div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Years<br/>Experience</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
