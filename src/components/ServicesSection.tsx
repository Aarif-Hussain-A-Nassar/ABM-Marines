// Services / Products Section — grid of seafood product cards
// ABM Marine Products: Block Frozen & IQF seafood exporter since 2004

const products = [
  {
    id: "shrimps",
    icon: "🦐",
    title: "Shrimps",
    description: "Premium White & Tiger Shrimps — Block Frozen and IQF processed. Sourced directly from trusted suppliers for consistent size, freshness, and superior shelf life.",
  },
  {
    id: "cuttlefish",
    icon: "🦑",
    title: "Cuttlefish",
    description: "High-quality Cuttlefish processed to international export standards. Available in whole and cleaned formats, Block Frozen and IQF, for markets worldwide.",
  },
  {
    id: "squid",
    icon: "🦑",
    title: "Squid",
    description: "Fresh-caught Squid processed with stringent quality controls. Available in Block Frozen and IQF formats to meet the demand of discerning global buyers.",
  },
  {
    id: "octopus",
    icon: "🐙",
    title: "Octopus",
    description: "Premium Octopus — carefully selected, cleaned, and frozen to preserve natural taste and texture. A popular product across European and Asian export markets.",
  },
  {
    id: "reef-cod",
    icon: "🐟",
    title: "Reef Cod",
    description: "Kerala's prized Reef Cod (Hamour), frozen at peak freshness. An internationally sought-after species for its firm white flesh and excellent taste.",
  },
  {
    id: "other-fish",
    icon: "🐠",
    title: "Red & White Snapper · Ribbon Fish · Tuna",
    description: "A wide range of premium finfish including Red Snapper, White Snapper, Ribbon Fish, and Tuna — all processed to the highest EU and HACCP standards.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-pad"
      aria-label="Our products"
      style={{
        background: "linear-gradient(180deg, var(--navy-mid) 0%, var(--navy) 100%)",
      }}
    >
      <div className="container-wide">

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>What We Export</p>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Our Marine <span className="text-gold">Products</span>
          </h2>
          <div className="gold-divider" style={{ margin: "0 auto 1.5rem" }} />
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Block Frozen &amp; IQF seafood sourced directly from Kerala&apos;s rich coastal waters,
            processed in our EU-approved factory, and exported to markets worldwide.
          </p>
        </div>

        {/* ── Product Cards Grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {products.map((product) => (
            <div
              key={product.id}
              id={`product-${product.id}`}
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
                {product.icon}
              </div>

              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.75rem",
              }}>
                {product.title}
              </h3>

              <p style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}>
                {product.description}
              </p>

              <a href={`/products#${product.id}`} style={{
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
          <a href="/products" className="btn-outline">View All Products</a>
        </div>
      </div>
    </section>
  );
}
