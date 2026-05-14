"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import CategoryShowcase from "./CategoryShowcase";
import ProductModal from "./ProductModal";
import { useState } from "react";
import type { CatalogProduct } from "@/types/catalog";

export default function ProductsSection() {
  // Modal still works if ProductCard is used elsewhere
  const [selected, setSelected] = useState<CatalogProduct | null>(null);

  return (
    <section
      id="products"
      className="section-pad"
      style={{ background: "var(--ocean-900)", position: "relative", overflow: "hidden" }}
    >
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 0%, rgba(34,211,238,0.04) 0%, transparent 50%)", pointerEvents: "none" }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <SectionHeader
            label="Our Products"
            heading={<>Premium Frozen <span className="gradient-text">Seafood Range</span></>}
            sub="Sourced from Kerala's pristine coastal waters and processed to international export standards. Select a category to explore our full export catalog."
          />
        </div>

        <CategoryShowcase />

        {selected && (
          <ProductModal product={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </section>
  );
}
