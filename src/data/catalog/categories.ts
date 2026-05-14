import type { CatalogCategory } from "@/types/catalog";

/** All top-level product categories for the ABM Marine export catalog. */
export const catalogCategories: CatalogCategory[] = [
  {
    id:          "shrimps",
    slug:        "shrimps-prawns",
    label:       "Shrimps & Prawns",
    icon:        "🦐",
    color:       "var(--cyan-400)",
    image:       "/cat-shrimps.png",
    description: "Premium wild-caught and farm-raised shrimps from Kerala's coastal waters — available in every international export presentation.",
    subcategories: [
      "Head On Shrimps",
      "Headless Shrimps",
      "Peeled Shrimps",
      "Peeled & Deveined Shrimps",
      "Cooked Shrimps",
    ],
  },
  {
    id:          "squid",
    slug:        "squid-products",
    label:       "Squid Products",
    icon:        "🦑",
    color:       "var(--teal-400)",
    image:       "/cat-squid.png",
    description: "Ocean-fresh squid processed at peak quality — whole, cleaned, rings, and blanched formats for global distribution.",
    subcategories: [
      "Squid Whole",
      "Squid Whole Cleaned",
      "Raw Squid Rings",
      "Blanched Squid Rings",
    ],
  },
  {
    id:          "cuttlefish",
    slug:        "cuttlefish-products",
    label:       "Cuttlefish Products",
    icon:        "🦑",
    color:       "var(--blue-400)",
    image:       "/cat-cuttlefish.png",
    description: "Premium cuttlefish sourced from Indian coastal waters — popular in European and Far East seafood markets.",
    subcategories: [
      "Whole Cleaned Cuttlefish",
      "Baby Cuttlefish",
    ],
  },
  {
    id:          "octopus",
    slug:        "octopus-products",
    label:       "Octopus Products",
    icon:        "🐙",
    color:       "var(--teal-400)",
    image:       "/cat-octopus.png",
    description: "Wild-caught Indian octopus, cleaned and frozen to meet Mediterranean and Asian market demands.",
    subcategories: [
      "Whole Cleaned Octopus",
    ],
  },
  {
    id:          "cooked",
    slug:        "cooked-value-added",
    label:       "Cooked & Value-Added",
    icon:        "✨",
    color:       "var(--cyan-400)",
    image:       "/cat-cooked.png",
    description: "Ready-to-use cooked and blanched seafood for retail, food service, and value-added import buyers worldwide.",
    subcategories: [
      "Cooked Shrimps",
      "Blanched Seafood",
    ],
  },
];

/** Flat list of all subcategory labels for filter UI */
export const allSubcategories = [
  "All",
  ...catalogCategories.flatMap((c) => c.subcategories),
] as const;

export type SubcategoryLabel = (typeof allSubcategories)[number];
