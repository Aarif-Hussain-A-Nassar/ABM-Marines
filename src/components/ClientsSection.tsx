"use client";
// Clients / Partners Section — logo strip / testimonials

const partners = [
  "Maersk Line",
  "MSC",
  "CMA CGM",
  "Evergreen",
  "COSCO",
  "NYK Line",
  "MOL",
  "K Line",
];

const testimonials = [
  {
    id: "t1",
    quote: "ABM Marine has been our trusted chandelling partner for over 8 years. Their reliability and quality of supply is unmatched in the region.",
    name: "Capt. R. Sharma",
    role: "Fleet Manager, Pacific Shipping Co.",
  },
  {
    id: "t2",
    quote: "The technical team at ABM Marine resolved a critical engine issue within 24 hours, keeping our vessel on schedule. Truly professional.",
    name: "Mr. K. Ibrahim",
    role: "Operations Director, Gulf Marine Services",
  },
  {
    id: "t3",
    quote: "Their crew management services are outstanding — well-trained, certified seafarers delivered exactly when we need them.",
    name: "Ms. J. Chen",
    role: "HR Manager, Orient Bulk Carriers",
  },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="section-pad" aria-label="Our clients and testimonials">
      <div className="container-wide">

        {/* ── Partner Logos ── */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>Trusted By</p>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Our Global <span className="text-gold">Partners</span>
          </h2>
          <div className="gold-divider" style={{ margin: "0 auto 2.5rem" }} />

          {/* Logo strip */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}>
            {partners.map((name) => (
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

        {/* ── Testimonials ── */}
        <div>
          <p className="section-label" style={{ textAlign: "center", marginBottom: "1rem" }}>What They Say</p>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1rem" }}>
            Client <span className="text-gold">Testimonials</span>
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
                  {/* Avatar placeholder */}
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "rgba(25,118,210,0.15)",
                    border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.2rem",
                  }}>
                    👤
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
