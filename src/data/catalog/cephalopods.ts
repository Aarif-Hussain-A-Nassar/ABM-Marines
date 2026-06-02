import type { CatalogProduct, Presentation, FreezeType } from "@/types/catalog";

export const cuttlefishProducts: CatalogProduct[] = [
  {
    "id": "whole-cuttlefish-cleaned",
    "slug": "whole-cuttlefish-cleaned",
    "name": "Whole Cuttlefish — Cleaned",
    "categoryId": "cuttlefish",
    "subcategory": "Whole Cleaned Cuttlefish",
    "species": "Sepia pharaonis",
    "presentation": "Raw" as Presentation,
    "freezeType": "IQF" as FreezeType,
    "shortDesc": "Premium whole cleaned cuttlefish — ink-sac removed, IQF frozen.",
    "description": "Wild-caught Sepia pharaonis from the Arabian Sea. Hand-cleaned, ink-sac removed, and individually quick frozen (IQF) to lock in peak marine freshness and delicate texture. Exported to Spain, Italy, and Japan.",
    "sizes": [
      "100-200g",
      "200-300g",
      "300-500g",
      "500g+"
    ],
    "markets": [
      "EU",
      "Far East",
      "US"
    ],
    "tags": [
      "Premium",
      "IQF",
      "Wild Caught"
    ],
    "emoji": "🦑",
    "image": "/products/01_Cuttlefish_Whole_Cleaned.jpg"
  }
];

export const octopusProducts: CatalogProduct[] = [
  {
    "id": "baby-octopus-cleaned",
    "slug": "baby-octopus-cleaned",
    "name": "Baby Octopus — Cleaned",
    "categoryId": "octopus",
    "subcategory": "Whole Cleaned Octopus",
    "species": "Cistopus indicus",
    "presentation": "Raw" as Presentation,
    "freezeType": "IQF" as FreezeType,
    "shortDesc": "Wild-caught baby octopus — beak and ink-sac removed, IQF frozen.",
    "description": "Wild-caught baby octopus from the Indian Ocean, fully cleaned (beak and ink-sac removed) and frozen individually. Sweet ocean flavor and tender, firm texture, popular in Mediterranean cuisine and Japanese restaurants.",
    "sizes": [
      "20-40g",
      "40-60g",
      "60-80g"
    ],
    "markets": [
      "EU",
      "Far East",
      "US"
    ],
    "tags": [
      "Premium",
      "IQF",
      "Wild Caught"
    ],
    "emoji": "🐙",
    "image": "/products/08_Baby_Octopus_Cleaned.jpg"
  }
];
