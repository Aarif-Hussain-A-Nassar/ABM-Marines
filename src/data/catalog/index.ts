// Central export for the entire ABM Marine product catalog
export { catalogCategories, allSubcategories } from "./categories";
export type { SubcategoryLabel } from "./categories";
export { homepageCategories, filterProducts } from "./homepage";
export type { HomepageCategory, HomepageSecondaryFilter } from "./homepage";
export { shrimpProducts }    from "./shrimps";
export { squidProducts }     from "./squid";
export { cuttlefishProducts, octopusProducts } from "./cephalopods";
export { cookedProducts }    from "./cooked";

import { shrimpProducts }    from "./shrimps";
import { squidProducts }     from "./squid";
import { cuttlefishProducts, octopusProducts } from "./cephalopods";
import { cookedProducts }    from "./cooked";
import type { CatalogProduct } from "@/types/catalog";

/** All products flattened — use for search / "All" filter */
export const allCatalogProducts: CatalogProduct[] = [
  ...shrimpProducts,
  ...squidProducts,
  ...cuttlefishProducts,
  ...octopusProducts,
  ...cookedProducts,
];
