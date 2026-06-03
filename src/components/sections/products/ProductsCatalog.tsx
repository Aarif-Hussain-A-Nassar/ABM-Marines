"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import ProductCard from "@/components/sections/products/ProductCard";
import ProductModal from "@/components/sections/products/ProductModal";
import {
  allCatalogProducts,
  homepageCategories,
  filterProducts,
} from "@/data/catalog";
import type { HomepageCategory, HomepageSecondaryFilter } from "@/data/catalog";
import type { CatalogProduct } from "@/types/catalog";

const scrollToContact = () =>
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

export default function ProductsCatalog() {
  const searchParams  = useSearchParams();
  const urlCat        = searchParams.get("cat"); // "shrimps" | "cephalopods" | "fish" | null

  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);

  // Active top-level tab: null = "All"
  const [activeCat,       setActiveCat]       = useState<HomepageCategory | null>(() => {
    if (urlCat) {
      return homepageCategories.find((c) => c.id === urlCat) ?? null;
    }
    return null;
  });
  const [activeSecondary, setActiveSecondary] = useState<HomepageSecondaryFilter>({ label: "All" });

  const handleTabChange = (cat: HomepageCategory | null) => {
    setActiveCat(cat);
    setActiveSecondary({ label: "All" });
    // Update URL without full navigation
    const url = cat ? `?cat=${cat.id}` : "?";
    window.history.replaceState(null, "", `/products${url}`);
  };

  const filtered = useMemo(() => {
    if (!activeCat) return allCatalogProducts; // "All"
    return filterProducts(allCatalogProducts, activeCat, activeSecondary);
  }, [activeCat, activeSecondary]);

  const isEmpty = activeCat && filtered.length === 0;

  return (
    <div>
      {/* ── Top-Level Category Tabs: All + 3 categories ─────────────────── */}
      <div style={{ marginBottom: "2rem" }}>
        <div
          style={{
            display:        "flex",
            justifyContent: "center",
            gap:            "0.75rem",
            flexWrap:       "wrap",
          }}
        >
          {/* All button */}
          <button
            onClick={() => handleTabChange(null)}
            style={{
              display:      "flex",
              alignItems:   "center",
              gap:          "0.5rem",
              padding:      "0.55rem 1.25rem",
              borderRadius: "100px",
              border:       `1.5px solid ${!activeCat ? "rgba(34,211,238,0.6)" : "rgba(255,255,255,0.1)"}`,
              background:   !activeCat ? "rgba(34,211,238,0.12)" : "transparent",
              color:        !activeCat ? "var(--cyan-400)" : "var(--text-muted)",
              fontSize:     "0.82rem",
              fontWeight:   700,
              cursor:       "pointer",
              transition:   "all 0.25s ease",
              letterSpacing:"0.05em",
            }}
          >
            🌊 All Products
          </button>

          {homepageCategories.map((cat) => {
            const isActive = activeCat?.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat)}
                style={{
                  display:      "flex",
                  alignItems:   "center",
                  gap:          "0.6rem",
                  padding:      "0.45rem 1rem 0.45rem 0.5rem",
                  borderRadius: "100px",
                  border:       `1.5px solid ${isActive ? "rgba(34,211,238,0.6)" : "rgba(255,255,255,0.1)"}`,
                  background:   isActive ? "rgba(34,211,238,0.1)" : "transparent",
                  color:        isActive ? "var(--cyan-400)" : "var(--text-muted)",
                  fontSize:     "0.82rem",
                  fontWeight:   700,
                  cursor:       "pointer",
                  transition:   "all 0.25s ease",
                  overflow:     "hidden",
                }}
              >
                {/* Mini circular photo */}
                <div
                  style={{
                    width:        "2rem",
                    height:       "2rem",
                    borderRadius: "50%",
                    overflow:     "hidden",
                    position:     "relative",
                    flexShrink:   0,
                    border:       `1px solid ${isActive ? "rgba(34,211,238,0.4)" : "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="32px"
                  />
                </div>
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Secondary filter pills (only when a category is active) ──────── */}
      {activeCat && activeCat.secondaryFilters.length > 1 && (
        <div
          style={{
            display:       "flex",
            gap:           "0.5rem",
            flexWrap:      "wrap",
            justifyContent:"center",
            marginBottom:  "1.75rem",
            paddingBottom: "1.5rem",
            borderBottom:  "1px solid rgba(34,211,238,0.07)",
          }}
        >
          {activeCat.secondaryFilters.map((sf) => {
            const isActive = sf.label === activeSecondary.label;
            return (
              <button
                key={sf.label}
                onClick={() => setActiveSecondary(sf)}
                style={{
                  padding:      "0.28rem 0.8rem",
                  borderRadius: "100px",
                  border:       `1px solid ${isActive ? "rgba(34,211,238,0.5)" : "rgba(255,255,255,0.08)"}`,
                  background:   isActive ? "rgba(34,211,238,0.1)" : "transparent",
                  color:        isActive ? "var(--cyan-400)" : "var(--text-muted)",
                  fontSize:     "0.74rem",
                  fontWeight:   600,
                  cursor:       "pointer",
                  transition:   "all 0.2s ease",
                  whiteSpace:   "nowrap",
                }}
              >
                {sf.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Product count */}
      <div style={{ textAlign: "right", marginBottom: "1.5rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
        Showing <span style={{ color: "var(--cyan-400)", fontWeight: 700 }}>{filtered.length}</span> product{filtered.length !== 1 ? "s" : ""}
        {activeSecondary.label !== "All" && activeCat && (
          <> · <span style={{ color: "var(--teal-400)" }}>{activeSecondary.label}</span></>
        )}
      </div>

      {/* Empty / Coming Soon */}
      {isEmpty ? (
        <div style={{ textAlign: "center", padding: "5rem 2rem" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🐟</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
            Coming Soon
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", maxWidth: "420px", margin: "0 auto 1.5rem" }}>
            Our fish product range is being added. Contact us for current availability and specifications.
          </p>
          <button onClick={scrollToContact} className="btn-primary">Enquire Now</button>
        </div>
      ) : (
        <div className="rg-3 product-grid" style={{ marginBottom: "3rem" }}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onClick={setSelectedProduct} />
          ))}
        </div>
      )}

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
