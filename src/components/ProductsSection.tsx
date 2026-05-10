// Products Section — grid of product category cards

const products = [
  {
    id: "provisions",
    title: "Provisions & Bonded Stores",
    image: "/images/products/provisions.jpg",
    description: "Quality food provisions, beverages, and bonded stores for all vessel types.",
    tag: "Chandelling",
  },
  {
    id: "deck-stores",
    title: "Deck & Engine Stores",
    image: "/images/products/deck-stores.jpg",
    description: "Complete range of deck hardware, engine spares, consumables, and lubricants.",
    tag: "Technical",
  },
  {
    id: "safety-equipment",
    title: "Safety Equipment",
    image: "/images/products/safety.jpg",
    description: "SOLAS-compliant life-saving appliances, fire-fighting equipment, and PPE.",
    tag: "Safety",
  },
  {
    id: "medical-stores",
    title: "Medical & Medicines",
    image: "/images/products/medical.jpg",
    description: "Approved ship medicine chests, medical equipment, and onboard pharmacy needs.",
    tag: "Medical",
  },
  {
    id: "electronics",
    title: "Marine Electronics",
    image: "/images/products/electronics.jpg",
    description: "Navigation instruments, communication systems, and electrical equipment.",
    tag: "Electronics",
  },
  {
    id: "uniforms",
    title: "Uniforms & Workwear",
    image: "/images/products/uniforms.jpg",
    description: "Professional maritime uniforms, protective workwear, and personal gear.",
    tag: "Apparel",
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
            Our <span className="text-gold">Products</span>
          </h2>
          <div className="gold-divider" style={{ margin: "0 auto 1.5rem" }} />
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Sourced globally, delivered promptly — we supply an extensive range of
            marine products to keep your fleet operational and compliant.
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
                  [ {product.title.toUpperCase()} IMAGE ]
                </p>

                {/* Tag */}
                <span style={{
                  position: "absolute",
                  top: "0.75rem",
                  left: "0.75rem",
                  background: "var(--gold)",
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
