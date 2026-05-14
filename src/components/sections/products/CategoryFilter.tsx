"use client";

import { catalogCategories } from "@/data/catalog";
import type { CatalogCategory } from "@/types/catalog";

interface CategoryTabsProps {
  active:   string; // "all" | category id
  onChange: (id: string) => void;
}

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div
      style={{
        display:        "flex",
        justifyContent: "center",
        gap:            "0.5rem",
        flexWrap:       "wrap",
        marginBottom:   "1.5rem",
      }}
    >
      {/* All tab */}
      <button
        onClick={() => onChange("all")}
        className={`filter-chip${active === "all" ? " active" : ""}`}
        style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}
      >
        <span>🌊</span> All Products
      </button>

      {catalogCategories.map((cat: CatalogCategory) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`filter-chip${active === cat.id ? " active" : ""}`}
          style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}
        >
          <span>{cat.icon}</span> {cat.label}
        </button>
      ))}
    </div>
  );
}
