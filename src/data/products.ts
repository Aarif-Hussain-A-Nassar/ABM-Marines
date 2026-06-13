import type { Product } from "@/types";

export const products: Product[] = [
  {
    id:          "tiger-prawn",
    name:        "Tiger Prawns",
    category:    "Crustaceans",
    type:        "Both",
    description: "Premium wild-caught tiger prawns from the Kerala coast, available in HOSO, HLSO, PUD and other cuts.",
    sizes:       ["16/20", "21/25", "26/30", "31/40"],
    emoji:       "🦐",
    tags:        ["Best Seller", "EU Approved"],
  },
  {
    id:          "vannamei",
    name:        "Vannamei Shrimp",
    category:    "Crustaceans",
    type:        "IQF",
    description: "Farm-raised white leg shrimp processed under HACCP standards. Available in multiple value-added formats.",
    sizes:       ["26/30", "31/40", "41/50", "51/60"],
    emoji:       "🦐",
    tags:        ["Popular", "IQF"],
  },
  {
    id:          "cuttlefish",
    name:        "Cuttlefish",
    category:    "Cephalopods",
    type:        "Both",
    description: "High-quality whole & cleaned cuttlefish. Excellent texture and flavor, perfect for European and Asian markets.",
    sizes:       ["100-200g", "200-300g", "300-500g", "500g+"],
    emoji:       "🦑",
    tags:        ["Premium"],
  },
  {
    id:          "squid",
    name:        "Squid",
    category:    "Cephalopods",
    type:        "Both",
    description: "Fresh-from-ocean squid, cleaned and frozen at peak freshness. Available as whole, tubes & rings.",
    sizes:       ["U3", "3-5", "5-8", "8-12"],
    emoji:       "🦑",
    tags:        ["High Demand"],
  },
  {
    id:          "octopus",
    name:        "Octopus",
    category:    "Cephalopods",
    type:        "Both",
    description: "Premium whole cleaned octopus — prized in Mediterranean and Asian cuisines. Consistent quality guaranteed.",
    sizes:       ["1-2kg", "2-3kg", "3-5kg", "5kg+"],
    emoji:       "🐙",
    tags:        ["Premium", "Far East"],
  },
  {
    id:          "reef-cod",
    name:        "Reef Cod (Grouper)",
    category:    "Fish",
    type:        "Both",
    description: "Wild-caught reef cod from the Arabian Sea. Premium white-flesh fish with excellent taste and texture.",
    sizes:       ["500g-1kg", "1-2kg", "2-4kg"],
    emoji:       "🐟",
    tags:        ["Premium", "Best Seller"],
  },
];

export const productCategories = ["All", "Crustaceans", "Cephalopods", "Fish"] as const;
export type ProductCategory = (typeof productCategories)[number];

export const productOptions = [
  "Tiger Prawns",
  "Vannamei Shrimp",
  "Cuttlefish",
  "Squid",
  "Octopus",
  "Reef Cod (Grouper)",
  "Full Catalog Request",
  "Other",
] as const;
