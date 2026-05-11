// Products Section — ABM Marine real product categories with descriptions

const products = [
  {
    id: "shrimps",
    title: "Shrimps",
    image: "/images/products/shrimps.jpg",
    description: "Premium White & Tiger Shrimps, Block Frozen and IQF. Sourced direct from Kerala's coastal waters for consistent quality and freshness.",
    tag: "IQF / Block Frozen",
  },
  {
    id: "cuttlefish",
    title: "Cuttlefish",
    image: "/images/products/cuttlefish.jpg",
    description: "Whole and cleaned Cuttlefish processed under HACCP guidelines. Available in Block Frozen and IQF formats for international export.",
    tag: "IQF / Block Frozen",
  },
  {
    id: "squid",
    title: "Squid",
    image: "/images/products/squid.jpg",
    description: "Fresh-caught Squid processed with stringent EU-standard quality controls. Available Block Frozen and IQF for global buyers.",
    tag: "IQF / Block Frozen",
  },
  {
    id: "octopus",
    title: "Octopus",
    image: "/images/products/octopus.jpg",
    description: "Premium Octopus, carefully selected and cleaned. Frozen to preserve natural taste and texture — widely exported to European and Asian markets.",
    tag: "Block Frozen",
  },
  {
    id: "reef-cod",
    title: "Reef Cod (Hamour)",
    image: "/images/products/reef-cod.jpg",
    description: "Kerala's prized Reef Cod — frozen at peak freshness. Internationally sought after for its firm white flesh and excellent flavour.",
    tag: "Block Frozen",
  },
  {
    id: "finfish",
    title: "Snapper · Ribbon Fish · Tuna",
    image: "/images/products/finfish.jpg",
    description: "Red Snapper, White Snapper, Ribbon Fish, and Tuna — all processed to EU and HACCP standards in our approved factory in Cochin, Kerala.",
    tag: "Block Frozen",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="section-pad"
      aria-label="Our products"
      style={{ background: "var(--navy-mid)" }}
    >
      <div className="container-wide">

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>What We Supply</p>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Our <span className="text-gold">Seafood Products</span>
          </h2>
          <div className="gold-divider" style={{ margin: "0 auto 1.5rem" }} />
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Sourced from Kerala&apos;s abundant coastal waters and processed in our EU-approved
            factory — delivering Block Frozen &amp; IQF seafood to global markets since 2004.
          </p>
        </div>

        {/* ── Product Grid ── */}
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
              style={{ overflow: "hidden" }}
            >
              {/* Image placeholder */}
              <div style={{
                aspectRatio: "16/9",
                background: "linear-gradient(135deg, #0e1525, #111d35)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}>
                {/* <Image src={product.image} alt={product.title} fill style={{ objectFit: "cover" }} /> */}
                <p style={{ color: "var(--text-secondary)", fontSize: "0.75rem", fontFamily: "var(--font-heading)", letterSpacing: "0.1em" }}>
                  [ {product.title.toUpperCase()} ]
                </p>

                {/* Tag */}
                <span style={{
                  position: "absolute",
                  top: "0.75rem",
                  left: "0.75rem",
                  background: "var(--blue-light)",
                  color: "#000",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "4px",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>
                  {product.tag}
                </span>
              </div>

              <div style={{ padding: "1.5rem" }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.6rem",
                }}>
                  {product.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <a href="/products" className="btn-gold">Browse All Products</a>
        </div>
      </div>
    </section>
  );
}
