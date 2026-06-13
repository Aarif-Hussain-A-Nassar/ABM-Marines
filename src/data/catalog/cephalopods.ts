import type { CatalogProduct, Presentation } from "@/types/catalog";

export const cuttlefishProducts: CatalogProduct[] = [
  {
    "id": "cuttlefish-whole-cleaned",
    "slug": "cuttlefish-whole-cleaned",
    "name": "Cuttlefish Whole Cleaned",
    "categoryId": "cuttlefish",
    "subcategory": "Cuttlefish",
    "species": "Sepia pharaonis",
    "presentation": "Raw" as Presentation,
    "shortDesc": "Premium whole cleaned cuttlefish — ink-sac removed, IQF frozen.",
    "description": "Wild-caught Sepia pharaonis from the Arabian Sea. Hand-cleaned, ink-sac removed, and individually quick frozen (IQF) to lock in peak marine freshness and delicate texture.",
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
    "image": "/products/Cephalopods/Cuttle fish/1. Cuttlefish Whole Cleaned.jpeg"
  },
  {
    "id": "baby-cuttlefish-whole-cleaned",
    "slug": "baby-cuttlefish-whole-cleaned",
    "name": "Baby Cuttlefish Whole Cleaned",
    "categoryId": "cuttlefish",
    "subcategory": "Cuttlefish",
    "species": "Sepia pharaonis",
    "presentation": "Raw" as Presentation,
    "shortDesc": "Tender baby cuttlefish, fully cleaned.",
    "description": "Wild-caught baby cuttlefish, cleaned and gutted. Ready for gourmet culinary preparations. Exported to Spain, Italy, and Japan.",
    "sizes": [
      "10-20g",
      "20-40g",
      "40-60g"
    ],
    "markets": [
      "EU",
      "Far East",
      "US"
    ],
    "tags": [
      "Baby Cuttlefish",
      "Premium",
      "IQF"
    ],
    "emoji": "🦑",
    "image": "/products/Cephalopods/Cuttle fish/2  Baby Cuttlefish Whole Cleaned.jpeg"
  }
];

export const octopusProducts: CatalogProduct[] = [
  {
    "id": "octopus-whole-cleaned-cep",
    "slug": "octopus-whole-cleaned-cep",
    "name": "Octopus Whole Cleaned",
    "categoryId": "octopus",
    "subcategory": "Octopus",
    "species": "Cistopus indicus",
    "presentation": "Raw" as Presentation,
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
    "image": "/products/Cephalopods/Octupus/1 Octopus Whole Cleaned.jpeg"
  }
];
