"use client";

import Image from "next/image";
import type { CatalogProduct } from "@/types/catalog";

interface ProductModalProps {
  product: CatalogProduct;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const scrollToContact = () => {
    onClose();
    setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 200);
  };

  return (
    <div
      style={{
        position:        "fixed",
        inset:           0,
        zIndex:          1000,
        background:      "rgba(2,8,20,0.85)",
        backdropFilter:  "blur(12px)",
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        padding:         "1rem",
        overflowY:       "auto",
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="glass-card"
        style={{
          borderRadius:   "24px",
          width:          "100%",
          maxWidth:       "600px",
          overflow:       "hidden",
          position:       "relative",
          border:         "1px solid rgba(34,211,238,0.2)",
          boxShadow:      "0 0 60px rgba(34,211,238,0.12)",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position:    "absolute",
            top:         "1rem",
            right:       "1rem",
            zIndex:      10,
            background:  "rgba(255,255,255,0.07)",
            border:      "1px solid rgba(255,255,255,0.1)",
            borderRadius:"50%",
            width:       "2rem",
            height:      "2rem",
            display:     "flex",
            alignItems:  "center",
            justifyContent: "center",
            cursor:      "pointer",
            color:       "var(--text-muted)",
            fontSize:    "1rem",
            lineHeight:  1,
          }}
        >
          ×
        </button>

        {/* Header visual */}
        <div
          style={{
            background:   "var(--card-grad)",
            padding:      product.image ? "6rem 2rem" : "3rem 2rem",
            textAlign:    "center",
            fontSize:     "5rem",
            position:     "relative",
            overflow:     "hidden",
          }}
        >
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 600px) 100vw, 600px"
              style={{
                objectFit: "cover",
                zIndex: 0,
              }}
            />
          ) : (
            <>
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.08), transparent 70%)" }} />
              <span style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 4px 24px rgba(34,211,238,0.3))" }}>
                {product.emoji}
              </span>
            </>
          )}

          {/* Tags */}
          <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem", display: "flex", gap: "0.35rem", flexWrap: "wrap", zIndex: 2 }}>
            {product.tags.map((tag) => (
              <span key={tag} style={{ padding: "0.12rem 0.5rem", background: "rgba(34,211,238,0.18)", border: "1px solid rgba(34,211,238,0.3)", borderRadius: "100px", fontSize: "0.6rem", fontWeight: 700, color: "var(--cyan-400)", backdropFilter: "blur(8px)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "1.75rem 2rem 2rem" }}>
          {/* Category breadcrumb */}
          <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--teal-400)", marginBottom: "0.4rem" }}>
            {product.subcategory}
          </div>

          {/* Name */}
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.4rem", color: "var(--text-primary)", marginBottom: product.species ? "0.25rem" : "0.75rem", lineHeight: 1.2 }}>
            {product.name}
          </h2>

          {product.species && (
            <div style={{ fontSize: "0.75rem", fontStyle: "italic", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
              {product.species}
            </div>
          )}

          {/* Divider */}
          <div style={{ height: "1px", background: "linear-gradient(90deg, var(--cyan-400)40, transparent)", marginBottom: "1rem" }} />

          {/* Description */}
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            {product.description}
          </p>

          {/* Details grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
            <div>
              <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                Presentation
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--cyan-400)", fontWeight: 600 }}>
                {product.presentation}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                Freeze Type
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--teal-400)", fontWeight: 600 }}>
                {product.freezeType}
              </div>
            </div>
          </div>

          {/* Sizes */}
          {product.sizes && (
            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                Available Sizes / Grades
              </div>
              <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                {product.sizes.map((s) => (
                  <span key={s} style={{ padding: "0.2rem 0.55rem", background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.15)", borderRadius: "6px", fontSize: "0.72rem", color: "var(--text-secondary)" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Export markets */}
          {product.markets && (
            <div style={{ marginBottom: "1.75rem" }}>
              <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                Export Markets
              </div>
              <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                {product.markets.map((m) => (
                  <span key={m} style={{ padding: "0.2rem 0.55rem", background: "rgba(45,212,191,0.06)", border: "1px solid rgba(45,212,191,0.18)", borderRadius: "6px", fontSize: "0.72rem", fontWeight: 600, color: "var(--teal-400)" }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button onClick={scrollToContact} className="btn-primary" style={{ flex: 1, minWidth: "140px" }}>
              Request Quote
            </button>
            <button onClick={onClose} className="btn-outline" style={{ flex: 1, minWidth: "100px" }}>
              Back to Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
