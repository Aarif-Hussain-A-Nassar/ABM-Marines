"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { products } from "@/data/products";
import type { Product } from "@/types";
import type { ProductCategory } from "@/data/products";

const scrollToContact = () =>
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("All");
  const [selected, setSelected]             = useState<Product | null>(null);

  const filtered =
    activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="section-pad" style={{ background: "var(--ocean-800)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 0%, rgba(34,211,238,0.05) 0%, transparent 40%)", pointerEvents: "none" }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <SectionHeader
            label="Our Products"
            heading={<>Premium Frozen <span className="gradient-text">Seafood Range</span></>}
            sub="Specializing in Block Frozen and IQF seafood products, sourced from Kerala's pristine waters and processed to global export standards."
          />
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* rg-3: 3col → 2col → 1col */}
        <div className="rg-3" style={{ marginBottom: "3rem" }}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onClick={setSelected} />
          ))}
        </div>

        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}

        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>More products added regularly. Contact us for the full catalog.</p>
          <button onClick={scrollToContact} className="btn-primary">Request Full Catalog</button>
        </div>
      </div>
    </section>
  );
}
