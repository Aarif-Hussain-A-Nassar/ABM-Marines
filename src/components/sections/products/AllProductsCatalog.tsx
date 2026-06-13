"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import ProductModal from "@/components/sections/products/ProductModal";
import { allProducts } from "@/data/catalog/all-products";
import type { CatalogProduct } from "@/types/catalog";

const CATEGORIES = [
  {
    id: "cephalopods",
    name: "Squid & Cuttlefish",
    emoji: "🦑",
    description: "Ocean-fresh squid and cuttlefish — whole, cleaned tubes, strips, blanched rings, and premium export cuts.",
    gradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
    border: "border-cyan-500/20",
    badge: "bg-cyan-950/50 text-cyan-300 border-cyan-400/25",
    divider: "from-cyan-400 via-blue-500 to-transparent",
  },
  {
    id: "octopus",
    name: "Octopus",
    emoji: "🐙",
    description: "Wild-caught Indian Ocean baby octopus, cleaned and frozen to meet Mediterranean and global restaurant standards.",
    gradient: "from-teal-500/15 via-emerald-500/10 to-transparent",
    border: "border-teal-500/20",
    badge: "bg-teal-950/50 text-teal-300 border-teal-400/25",
    divider: "from-teal-400 via-emerald-500 to-transparent",
  },
  {
    id: "shrimps",
    name: "Crustaceans",
    emoji: "🦐",
    description: "Farm-raised and wild-caught shrimps in all international export presentations — head-on, headless, peeled, cooked, and more.",
    gradient: "from-blue-500/15 via-indigo-500/10 to-transparent",
    border: "border-blue-500/20",
    badge: "bg-blue-950/50 text-blue-300 border-blue-400/25",
    divider: "from-blue-400 via-indigo-500 to-transparent",
  },
  {
    id: "value-added",
    name: "Value Added Products",
    emoji: "✨",
    description: "Ready-to-cook and ready-to-serve breaded, crumb-coated, and pre-fried seafood specialties for retail and foodservice.",
    gradient: "from-indigo-500/15 via-violet-500/10 to-transparent",
    border: "border-indigo-500/20",
    badge: "bg-indigo-950/50 text-indigo-300 border-indigo-400/25",
    divider: "from-indigo-400 via-violet-500 to-transparent",
  },
];

const PRESENTATION_COLORS: Record<string, string> = {
  Raw:       "#60a5fa",
  Cooked:    "#f97316",
  Blanched:  "#2dd4bf",
  Processed: "#a78bfa",
};

function ProductCard({ product, onClick }: { product: CatalogProduct; onClick: () => void }) {
  const presColor = PRESENTATION_COLORS[product.presentation] ?? "#60a5fa";

  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-900/80">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

        {/* Tags */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1 z-10">
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-[0.58rem] font-bold backdrop-blur-md bg-black/40 border border-white/15 text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Presentation badge */}
        <span
          className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-full text-[0.58rem] font-bold backdrop-blur-md border"
          style={{ color: presColor, borderColor: `${presColor}40`, background: `${presColor}18` }}
        >
          {product.presentation}
        </span>

      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {product.species && (
          <p className="text-[0.6rem] italic text-slate-500">{product.species}</p>
        )}
        <h3 className="text-sm font-bold text-white leading-snug">{product.name}</h3>
        <p className="text-[0.75rem] text-slate-400 leading-relaxed line-clamp-2 flex-1">
          {product.shortDesc}
        </p>

        {/* Sizes */}
        {product.sizes && (
          <div className="flex flex-wrap gap-1 mt-1">
            {product.sizes.slice(0, 3).map((s) => (
              <span key={s} className="px-1.5 py-0.5 rounded text-[0.6rem] text-slate-400 border border-white/8 bg-white/3">
                {s}
              </span>
            ))}
            {product.sizes.length > 3 && (
              <span className="text-[0.6rem] text-cyan-400 px-1">+{product.sizes.length - 3}</span>
            )}
          </div>
        )}

        {/* Markets */}
        {product.markets && (
          <div className="flex flex-wrap gap-1">
            {product.markets.map((m) => (
              <span key={m} className="px-1.5 py-0.5 rounded text-[0.6rem] font-semibold text-teal-400 border border-teal-400/15 bg-teal-950/20">
                {m}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-cyan-400 text-[0.75rem] font-semibold mt-1 group-hover:gap-2.5 transition-all">
          View Details
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function AllProductsCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);

  const grouped = useMemo(() => {
    const map: Record<string, CatalogProduct[]> = {};
    CATEGORIES.forEach((c) => { map[c.id] = []; });
    allProducts.forEach((p) => {
      if (map[p.categoryId]) map[p.categoryId].push(p);
    });
    return map;
  }, []);

  return (
    <div className="w-full space-y-20">
      {CATEGORIES.map((cat) => {
        const products = grouped[cat.id] ?? [];
        if (products.length === 0) return null;

        return (
          <section key={cat.id} id={cat.id} className="scroll-mt-28">
            {/* Category header */}
            <div className={`relative overflow-hidden rounded-3xl border ${cat.border} bg-gradient-to-br ${cat.gradient} p-8 md:p-10 mb-8 backdrop-blur-sm`}>
              <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[0.7rem] font-bold uppercase tracking-widest mb-4 ${cat.badge}`}>
                    <span className="text-base">{cat.emoji}</span>
                    {cat.name}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3 leading-tight">
                    {cat.name}
                  </h2>
                  {/* Gradient divider */}
                  <div className={`h-0.5 w-16 rounded-full bg-gradient-to-r ${cat.divider} mb-4`} />
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
                    {cat.description}
                  </p>
                </div>
                <div className="shrink-0 px-5 py-2.5 rounded-2xl border border-white/10 bg-white/5 text-center">
                  <div className="text-2xl font-black text-white">{products.length}</div>
                  <div className="text-[0.65rem] text-slate-400 font-semibold uppercase tracking-wider">Products</div>
                </div>
              </div>
              {/* Decorative large emoji */}
              <div className="absolute -right-4 -bottom-4 text-[10rem] opacity-[0.025] select-none pointer-events-none leading-none">
                {cat.emoji}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} onClick={() => setSelectedProduct(p)} />
              ))}
            </div>
          </section>
        );
      })}

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
