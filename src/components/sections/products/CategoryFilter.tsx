"use client";

import type { Product } from "@/types";
import type { ProductCategory } from "@/data/products";
import { productCategories } from "@/data/products";

interface CategoryFilterProps {
  active:   ProductCategory;
  onChange: (cat: ProductCategory) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
      {productCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`filter-chip${active === cat ? " active" : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
