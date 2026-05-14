// ─────────────────────────────────────────────────────────────────────────────
// ABM Marine Products — Export Catalog Type System
// ─────────────────────────────────────────────────────────────────────────────

/** Top-level product category */
export interface CatalogCategory {
  id:            string;
  slug:          string;
  label:         string;
  icon:          string;
  color:         string;
  image:         string;   // /public path for circular plate image
  description:   string;
  subcategories: string[];
}

/** Single export catalog product */
export interface CatalogProduct {
  id:           string;           // "tiger-shrimp-hoso"
  slug:         string;           // URL-ready
  name:         string;           // "Tiger Shrimps — Head On Shell On"
  categoryId:   string;           // "shrimps"
  subcategory:  string;           // "Head On Shrimps"
  species?:     string;           // "Penaeus monodon"
  presentation: Presentation;     // "Raw" | "Cooked" | "Blanched"
  freezeType:   FreezeType;       // "IQF" | "Block Frozen" | "Both"
  description:  string;           // export-grade description
  shortDesc:    string;           // 1-liner for cards
  sizes?:       string[];         // ["16/20", "21/25", …]
  markets?:     string[];         // ["EU", "US", "Japan"]
  tags:         string[];         // ["Best Seller", "Premium", …]
  emoji:        string;
}

export type Presentation = "Raw" | "Cooked" | "Blanched" | "Processed";
export type FreezeType   = "IQF" | "Block Frozen" | "Both";
