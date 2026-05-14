"use client";

import { useState } from "react";

export type Product = {
  id: string;
  name: string;
  category: string;
  type: "IQF" | "Block Frozen" | "Both";
  description: string;
  sizes?: string[];
  emoji: string;
  tags?: string[];
};

const products: Product[] = [
  { id: "tiger-prawn",   name: "Tiger Prawns",       category: "Shrimps & Prawns", type: "Both",         description: "Premium wild-caught tiger prawns from the Kerala coast, available in HOSO, HLSO, PUD and other cuts.", sizes: ["16/20","21/25","26/30","31/40"], emoji: "🦐", tags: ["Best Seller","EU Approved"] },
  { id: "vannamei",      name: "Vannamei Shrimp",    category: "Shrimps & Prawns", type: "IQF",          description: "Farm-raised white leg shrimp processed under HACCP standards. Available in multiple value-added formats.", sizes: ["26/30","31/40","41/50","51/60"], emoji: "🦐", tags: ["Popular","IQF"] },
  { id: "cuttlefish",    name: "Cuttlefish",          category: "Cephalopods",      type: "Both",         description: "High-quality whole & cleaned cuttlefish. Excellent texture and flavor, perfect for European and Asian markets.", sizes: ["100-200g","200-300g","300-500g","500g+"], emoji: "🦑", tags: ["Premium"] },
  { id: "squid",         name: "Squid",               category: "Cephalopods",      type: "Both",         description: "Fresh-from-ocean squid, cleaned and frozen at peak freshness. Available as whole, tubes & rings.", sizes: ["U3","3-5","5-8","8-12"], emoji: "🦑", tags: ["High Demand"] },
  { id: "octopus",       name: "Octopus",             category: "Cephalopods",      type: "Both",         description: "Premium whole cleaned octopus — prized in Mediterranean and Asian cuisines. Consistent quality guaranteed.", sizes: ["1-2kg","2-3kg","3-5kg","5kg+"], emoji: "🐙", tags: ["Premium","Far East"] },
  { id: "reef-cod",      name: "Reef Cod (Grouper)",  category: "Fish",             type: "Both",         description: "Wild-caught reef cod from the Arabian Sea. Premium white-flesh fish with excellent taste and texture.", sizes: ["500g-1kg","1-2kg","2-4kg"], emoji: "🐟", tags: ["Premium","Best Seller"] },
];

const categories = ["All", "Shrimps & Prawns", "Cephalopods", "Fish"];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="section-pad" style={{ background: "var(--ocean-800)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 0%, rgba(34,211,238,0.05) 0%, transparent 40%)", pointerEvents: "none" }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>Our Products</div>
          <h2 className="section-heading" style={{ maxWidth: "700px", margin: "0 auto 1.25rem" }}>
            Premium Frozen <span className="gradient-text">Seafood Range</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto 2rem" }}>
            Specializing in Block Frozen and IQF seafood products, sourced from Kerala&apos;s
            pristine waters and processed to global export standards.
          </p>

          {/* Filter chips */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`filter-chip${activeCategory === cat ? " active" : ""}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid — rg-3: 3col → 2col tablet → 1col mobile */}
        <div className="rg-3" style={{ marginBottom: "3rem" }}>
          {filtered.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="glass-card"
              style={{ borderRadius: "20px", overflow: "hidden", cursor: "pointer", transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(34,211,238,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.boxShadow = ""; }}
              role="button" tabIndex={0} aria-label={`View ${product.name} details`}
              onKeyDown={(e) => e.key === "Enter" && setSelectedProduct(product)}
            >
              {/* Image area */}
              <div style={{ aspectRatio: "4/3", background: "linear-gradient(135deg, rgba(6,22,41,0.9), rgba(10,31,58,0.7))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4.5rem", position: "relative", overflow: "hidden" }}>
                <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.08), transparent 70%)" }} />
                <span style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 4px 20px rgba(34,211,238,0.3))" }}>{product.emoji}</span>
                <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                  {product.tags?.map(tag => (
                    <span key={tag} style={{ padding: "0.15rem 0.5rem", background: "rgba(34,211,238,0.2)", border: "1px solid rgba(34,211,238,0.3)", borderRadius: "100px", fontSize: "0.6rem", fontWeight: 700, color: "var(--cyan-400)", backdropFilter: "blur(8px)" }}>{tag}</span>
                  ))}
                </div>
                <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", padding: "0.15rem 0.5rem", background: "rgba(45,212,191,0.15)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", fontSize: "0.6rem", fontWeight: 700, color: "var(--teal-400)" }}>{product.type}</div>
              </div>

              {/* Card body */}
              <div style={{ padding: "1.5rem" }}>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--teal-400)", marginBottom: "0.35rem" }}>{product.category}</div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>{product.name}</h3>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{product.description}</p>
                {product.sizes && (
                  <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                    {product.sizes.slice(0, 3).map(s => (
                      <span key={s} style={{ padding: "0.15rem 0.5rem", background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.15)", borderRadius: "4px", fontSize: "0.7rem", color: "var(--text-secondary)" }}>{s}</span>
                    ))}
                    {product.sizes.length > 3 && <span style={{ padding: "0.15rem 0.5rem", fontSize: "0.7rem", color: "var(--cyan-400)" }}>+{product.sizes.length - 3} more</span>}
                  </div>
                )}
                <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--cyan-400)", fontSize: "0.8rem", fontWeight: 600 }}>
                  View Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct && (
          <div
            style={{ position: "fixed", inset: 0, background: "rgba(2,11,24,0.92)", backdropFilter: "blur(20px)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
            onClick={() => setSelectedProduct(null)}
          >
            <div
              style={{ background: "var(--ocean-700)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: "24px", padding: "2.5rem", maxWidth: "540px", width: "100%", position: "relative", maxHeight: "90vh", overflowY: "auto" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedProduct(null)} style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", color: "var(--cyan-400)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }} aria-label="Close">×</button>
              <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{selectedProduct.emoji}</div>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--teal-400)", marginBottom: "0.5rem" }}>{selectedProduct.category}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{selectedProduct.name}</h3>
                <span style={{ padding: "0.25rem 0.75rem", background: "rgba(45,212,191,0.15)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", fontSize: "0.75rem", color: "var(--teal-400)", fontWeight: 600 }}>{selectedProduct.type}</span>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem", textAlign: "center" }}>{selectedProduct.description}</p>
              {selectedProduct.sizes && (
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--cyan-400)", marginBottom: "0.75rem", textAlign: "center" }}>Available Sizes</div>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
                    {selectedProduct.sizes.map(s => (
                      <span key={s} style={{ padding: "0.3rem 0.9rem", background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: "8px", fontSize: "0.82rem", color: "var(--text-primary)", fontWeight: 600 }}>{s}</span>
                    ))}
                  </div>
                </div>
              )}
              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="#contact" onClick={(e) => { e.preventDefault(); setSelectedProduct(null); setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 100); }} className="btn-primary">Request Quote</a>
                <a href="https://wa.me/919846079833" target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Us</a>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>More products added regularly. Contact us for the full catalog.</p>
          <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>Request Full Catalog</a>
        </div>
      </div>
    </section>
  );
}
