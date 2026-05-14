"use client";

import type { Product } from "@/types";

interface ProductCardProps {
  product:  Product;
  onClick:  (p: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={() => onClick(product)}
      className="glass-card"
      style={{ borderRadius: "20px", overflow: "hidden", cursor: "pointer", transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(34,211,238,0.2)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.boxShadow = ""; }}
      role="button"
      tabIndex={0}
      aria-label={`View ${product.name} details`}
      onKeyDown={(e) => e.key === "Enter" && onClick(product)}
    >
      {/* Image area */}
      <div style={{ aspectRatio: "4/3", background: "var(--card-grad)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4.5rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.08), transparent 70%)" }} />
        <span style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 4px 20px rgba(34,211,238,0.3))" }}>{product.emoji}</span>

        <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
          {product.tags?.map((tag) => (
            <span key={tag} style={{ padding: "0.15rem 0.5rem", background: "rgba(34,211,238,0.2)", border: "1px solid rgba(34,211,238,0.3)", borderRadius: "100px", fontSize: "0.6rem", fontWeight: 700, color: "var(--cyan-400)", backdropFilter: "blur(8px)" }}>{tag}</span>
          ))}
        </div>
        <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", padding: "0.15rem 0.5rem", background: "rgba(45,212,191,0.15)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", fontSize: "0.6rem", fontWeight: 700, color: "var(--teal-400)" }}>{product.type}</div>
      </div>

      {/* Body */}
      <div style={{ padding: "1.5rem" }}>
        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--teal-400)", marginBottom: "0.35rem" }}>{product.category}</div>
        <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>{product.name}</h3>
        <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{product.description}</p>

        {product.sizes && (
          <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
            {product.sizes.slice(0, 3).map((s) => (
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
  );
}
