import type { CatalogProduct } from "@/types/catalog";

/** The 3 main landing-page category tiles */
export interface HomepageCategory {
  id:     string;
  label:  string;
  icon:   string;
  image:  string;
  /** Which catalogCategory IDs map into this group */
  categoryIds: string[];
  /** Secondary filter options shown when this category is active */
  secondaryFilters: HomepageSecondaryFilter[];
}

export interface HomepageSecondaryFilter {
  label: string;
  /** null = "All" — no extra filter */
  categoryId?: string;
  subcategory?: string;
}

export const homepageCategories: HomepageCategory[] = [
  {
    id:          "shrimps",
    label:       "Crustaceans",
    icon:        "🦐",
    image:       "/cat-shrimps.png",
    categoryIds: ["shrimps", "cooked"],
    secondaryFilters: [
      { label: "All" },
      { label: "Head On",          subcategory: "Head On Shrimps" },
      { label: "Headless",         subcategory: "Headless Shrimps" },
      { label: "Peeled",           subcategory: "Peeled Shrimps" },
      { label: "Peeled & Deveined",subcategory: "Peeled & Deveined Shrimps" },
      { label: "Cooked",           subcategory: "Cooked Shrimps" },
    ],
  },
  {
    id:          "cephalopods",
    label:       "Cephalopods",
    icon:        "🦑",
    image:       "/cat-squid.png",
    categoryIds: ["squid", "cuttlefish", "octopus"],
    secondaryFilters: [
      { label: "All" },
      { label: "Squid",      categoryId: "squid" },
      { label: "Cuttlefish", categoryId: "cuttlefish" },
      { label: "Octopus",    categoryId: "octopus" },
    ],
  },
  {
    id:          "fish",
    label:       "Fish",
    icon:        "🐟",
    image:       "/cat-fish.png",
    categoryIds: ["fish"],
    secondaryFilters: [
      { label: "All" },
    ],
  },
];

/** Filter allCatalogProducts for a given homepage category + secondary filter */
export function filterProducts(
  all: CatalogProduct[],
  cat: HomepageCategory,
  secondary: HomepageSecondaryFilter | null
): CatalogProduct[] {
  // Start with products in this group's categoryIds
  let list = all.filter((p) => cat.categoryIds.includes(p.categoryId));

  if (!secondary || secondary.label === "All") return list;

  // Filter by subcategory string
  if (secondary.subcategory) {
    list = list.filter((p) => p.subcategory === secondary.subcategory);
  }
  // Filter by categoryId within the group (e.g. "Squid" within Cephalopods)
  else if (secondary.categoryId) {
    list = list.filter((p) => p.categoryId === secondary.categoryId);
  }

  return list;
}
