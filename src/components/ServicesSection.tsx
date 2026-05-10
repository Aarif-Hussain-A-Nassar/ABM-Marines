// Services Section — grid of service cards with icons

const services = [
  {
    id: "ship-chandelling",
    icon: "⚓",
    title: "Ship Chandelling",
    description: "Complete supply of provisions, deck and engine stores, safety equipment, and consumables for vessels at all major ports.",
  },
  {
    id: "crew-management",
    icon: "👥",
    title: "Crew Management",
    description: "End-to-end crew recruitment, training, documentation, and welfare services for officers and ratings worldwide.",
  },
  {
    id: "technical-services",
    icon: "🔧",
    title: "Technical Services",
    description: "Comprehensive technical support including repairs, maintenance, dry-docking, and class survey assistance.",
  },
  {
    id: "ship-agency",
    icon: "🏢",
    title: "Ship Agency",
    description: "Port agency services covering husbandry, cargo operations, documentation, and customs clearance at major ports.",
  },
  {
    id: "marine-insurance",
    icon: "🛡️",
    title: "Marine Insurance",
    description: "Tailored marine insurance solutions covering hull & machinery, P&I, cargo, and liability for vessel operators.",
  },
  {
    id: "logistics",
    icon: "🚢",
    title: "Logistics & Forwarding",
    description: "Specialized freight forwarding and logistics solutions for marine spare parts and equipment globally.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-pad"
      aria-label="Our services"
      style={{
        background: "linear-gradient(180deg, var(--navy-mid) 0%, var(--navy) 100%)",
      }}
    >
      <div className="container-wide">

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>What We Do</p>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Our Core <span className="text-gold">Services</span>
          </h2>
          <div className="gold-divider" style={{ margin: "0 auto 1.5rem" }} />
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A comprehensive suite of marine services tailored to meet the evolving
            demands of the global shipping industry.
          </p>
        </div>

        {/* ── Service Cards Grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="card-dark"
              style={{ padding: "2rem" }}
            >
              <div style={{
                width: 56, height: 56,
                borderRadius: "12px",
                background: "rgba(25,118,210,0.1)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.75rem",
                marginBottom: "1.25rem",
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.75rem",
              }}>
                {service.title}
              </h3>

              <p style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}>
                {service.description}
              </p>

              <a href={`/services/${service.id}`} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--blue-light)",
                fontFamily: "var(--font-heading)",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "gap 0.25s ease",
              }}>
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <a href="/services" className="btn-outline">View All Services</a>
        </div>
      </div>
    </section>
  );
}
