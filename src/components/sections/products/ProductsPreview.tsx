"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { products } from "@/data/products";
import Image from "next/image";

export default function ProductsPreview() {
  const featured = products.slice(0, 3);

  return (
    <section id="products" className="section-pad" style={{ background: "var(--ocean-900)" }}>
      <div className="container-xl">
        <SectionHeader
          label="Featured Selection"
          heading={<>Premium <span className="gradient-text">Seafood</span> Categories</>}
          sub="A glimpse into our world-class seafood range. We specialize in both Block Frozen and IQF processing to meet global standards."
        />

        <div className="rg-3" style={{ marginBottom: "3rem" }}>
          {featured.map((p) => (
            <div key={p.id} className="product-card glass-card">
              <div style={{ position: "relative", height: "240px", overflow: "hidden", background: "var(--ocean-800)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontSize: "5rem" }}>{p.emoji}</div>
                <div style={{ position: "absolute", top: "1rem", right: "1rem", background: "var(--glass-bg)", padding: "0.4rem 0.8rem", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 700, color: "var(--brand-light)", border: "1px solid var(--glass-border)" }}>
                  {p.category}
                </div>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ color: "var(--text-primary)", fontSize: "1.25rem", marginBottom: "0.5rem" }}>{p.name}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>{p.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {p.tags?.slice(0, 2).map(s => (
                    <span key={s} style={{ fontSize: "0.7rem", color: "var(--cyan-400)", background: "rgba(34, 211, 238, 0.1)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/products" className="btn-primary" style={{ display: "inline-flex", textDecoration: "none" }}>
            View Full Catalog
            <svg style={{ marginLeft: "0.5rem" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
