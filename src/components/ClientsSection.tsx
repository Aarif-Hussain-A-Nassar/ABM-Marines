"use client";
// Clients / Certifications Section — ABM Marine real certifications + testimonial

const certifications = [
  "EU Approved Factory",
  "HACCP Endorsed",
  "USFDA Registered",
  "FSSAI Certified",
  "MPEDA Authorized Exporter",
  "ISO Certified",
  "EIA Approved",
  "BIS Certified",
];

const testimonials = [
  {
    id: "t1",
    quote: "Ours is a brand name for quality in the field of production and exports of Frozen Marine Products. With a rich range of marine products that include Shrimps, Cuttlefish, Squid, Octopus, Reef Cod etc., ABM serves the industry with a record of satisfied customers.",
    name: "Managing Director",
    role: "ABM Marine Products",
  },
  {
    id: "t2",
    quote: "ABM Marine Products has been into the Seafood industry with sustained quality standards and competitive pricing since its launch in 2004. Our resourceful backup of skilled personnel and advanced infrastructure ensure quality products with superior production control and packing.",
    name: "Founding Team",
    role: "ABM Marine Products — Since 2004",
  },
  {
    id: "t3",
    quote: "We make direct sales eliminating the middleman, thereby reducing our cost and passing the savings on to the customer. Long-term arrangements with suppliers ensure a steady flow of raw materials directly from source.",
    name: "Operations Team",
    role: "ABM Marine Products, Cochin, Kerala",
  },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="section-pad" aria-label="Our certifications and company statements">
      <div className="container-wide">

        {/* ── Certifications ── */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>Internationally Recognized</p>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Our <span className="text-gold">Certifications</span>
          </h2>
          <div className="gold-divider" style={{ margin: "0 auto 2.5rem" }} />

          {/* Certification strip */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}>
            {certifications.map((name) => (
              <div
                key={name}
                style={{
                  padding: "1rem 2rem",
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--text-secondary)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "border-color 0.3s ease, color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(25,118,210,0.6)";
                  (e.currentTarget as HTMLElement).style.color = "var(--blue-light)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* ── Company Statements ── */}
        <div>
          <p className="section-label" style={{ textAlign: "center", marginBottom: "1rem" }}>What We Stand For</p>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1rem" }}>
            From the <span className="text-gold">ABM Team</span>
          </h2>
          <div className="gold-divider" style={{ margin: "0 auto 3rem" }} />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {testimonials.map((t) => (
              <div key={t.id} className="card-dark" style={{ padding: "2rem" }}>
                {/* Quote mark */}
                <div style={{
                  fontSize: "4rem",
                  color: "var(--blue-light)",
                  fontFamily: "Georgia, serif",
                  lineHeight: 0.8,
                  marginBottom: "1.25rem",
                  opacity: 0.5,
                }}>
                  &ldquo;
                </div>

                <p style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}>
                  {t.quote}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "rgba(25,118,210,0.15)",
                    border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.2rem",
                  }}>
                    🐟
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--blue-light)", fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
