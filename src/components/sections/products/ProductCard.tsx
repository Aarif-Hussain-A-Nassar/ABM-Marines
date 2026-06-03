"use client";

import Image from "next/image";
import type { CatalogProduct } from "@/types/catalog";

const PRESENTATION_COLORS: Record<string, string> = {
  Raw:       "var(--blue-400)",
  Cooked:    "#f97316",
  Blanched:  "var(--teal-400)",
  Processed: "var(--cyan-400)",
};

interface ProductCardProps {
  product:  CatalogProduct;
  onClick?: (p: CatalogProduct) => void; // optional — omit for display-only cards
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const presColor = PRESENTATION_COLORS[product.presentation] ?? "var(--cyan-400)";

  return (
    <div
      onClick={() => onClick?.(product)}
      className="glass-card"
      style={{
        borderRadius: "20px",
        overflow:     "hidden",
        cursor:       onClick ? "pointer" : "default",
        transition:   "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        display:      "flex",
        flexDirection:"column",
      }}
      onMouseEnter={onClick ? (e) => {
        e.currentTarget.style.transform   = "translateY(-8px)";
        e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)";
        e.currentTarget.style.boxShadow   = "0 0 40px rgba(34,211,238,0.15)";
      } : undefined}
      onMouseLeave={onClick ? (e) => {
        e.currentTarget.style.transform   = "";
        e.currentTarget.style.borderColor = "var(--glass-border)";
        e.currentTarget.style.boxShadow   = "";
      } : undefined}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? `View ${product.name} details` : undefined}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick(product) : undefined}
    >
      {/* Visual area */}
      <div
        style={{
          aspectRatio: "4/3",
          background:  "var(--card-grad)",
          display:     "flex",
          alignItems:  "center",
          justifyContent: "center",
          fontSize:    "4rem",
          position:    "relative",
          overflow:    "hidden",
        }}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              zIndex: 0,
            }}
          />
        ) : (
          <>
            <div
              aria-hidden="true"
              style={{
                position:   "absolute",
                inset:      0,
                background: "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.07), transparent 70%)",
              }}
            />
            <span style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 4px 16px rgba(34,211,238,0.25))" }}>
              {product.emoji}
            </span>
          </>
        )}

        {/* Tags */}
        <div style={{ position: "absolute", top: "0.65rem", left: "0.65rem", display: "flex", gap: "0.3rem", flexWrap: "wrap", zIndex: 2 }}>
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              style={{
                padding:       "0.12rem 0.45rem",
                background:    "rgba(34,211,238,0.18)",
                border:        "1px solid rgba(34,211,238,0.28)",
                borderRadius:  "100px",
                fontSize:      "0.58rem",
                fontWeight:    700,
                color:         "var(--cyan-400)",
                backdropFilter:"blur(8px)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Presentation badge */}
        <div
          style={{
            position:      "absolute",
            top:           "0.65rem",
            right:         "0.65rem",
            padding:       "0.12rem 0.5rem",
            background:    `${presColor}20`,
            border:        `1px solid ${presColor}40`,
            borderRadius:  "100px",
            fontSize:      "0.58rem",
            fontWeight:    700,
            color:         presColor,
            backdropFilter:"blur(8px)",
            zIndex:        2,
          }}
        >
          {product.presentation}
        </div>

        {/* Freeze type strip */}
        <div
          style={{
            position:   "absolute",
            bottom:     0,
            left:       0,
            right:      0,
            padding:    "0.35rem 0.75rem",
            background: "linear-gradient(0deg, rgba(5,15,30,0.8), transparent)",
            fontSize:   "0.6rem",
            fontWeight: 700,
            color:      "var(--text-muted)",
            letterSpacing: "0.1em",
            textTransform:  "uppercase",
            zIndex:     2,
          }}
        >
          {product.freezeType} · {product.subcategory}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "1.25rem 1.25rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        {product.species && (
          <div style={{ fontSize: "0.6rem", fontStyle: "italic", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
            {product.species}
          </div>
        )}
        <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.5rem", lineHeight: 1.35 }}>
          {product.name}
        </h3>
        <p
          style={{
            fontSize:       "0.78rem",
            color:          "var(--text-secondary)",
            lineHeight:     1.65,
            marginBottom:   "1rem",
            flex:           1,
            display:        "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow:       "hidden",
            textOverflow:   "ellipsis",
          }}
        >
          {product.shortDesc}
        </p>

        {/* Sizes */}
        {product.sizes && (
          <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            {product.sizes.slice(0, 4).map((s) => (
              <span
                key={s}
                style={{
                  padding:      "0.1rem 0.4rem",
                  background:   "rgba(34,211,238,0.05)",
                  border:       "1px solid rgba(34,211,238,0.12)",
                  borderRadius: "4px",
                  fontSize:     "0.65rem",
                  color:        "var(--text-muted)",
                }}
              >
                {s}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span style={{ fontSize: "0.65rem", color: "var(--cyan-400)", padding: "0.1rem 0.25rem" }}>
                +{product.sizes.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Markets */}
        {product.markets && (
          <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
            {product.markets.map((m) => (
              <span
                key={m}
                style={{
                  padding:      "0.1rem 0.4rem",
                  background:   "rgba(45,212,191,0.06)",
                  border:       "1px solid rgba(45,212,191,0.15)",
                  borderRadius: "4px",
                  fontSize:     "0.6rem",
                  fontWeight:   600,
                  color:        "var(--teal-400)",
                }}
              >
                {m}
              </span>
            ))}
          </div>
        )}

        {onClick && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--cyan-400)", fontSize: "0.78rem", fontWeight: 600 }}>
            View Details
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
