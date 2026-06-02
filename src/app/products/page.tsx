import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductsCatalog from "@/components/sections/products/ProductsCatalog";

export const metadata = {
  title: "Products | ABM Marine",
  description: "Browse ABM Marine's full frozen seafood export catalog — Shrimps & Prawns, Cephalopods (Squid, Cuttlefish, Octopus) and more. IQF & Block Frozen, USFDA & BRCGS certified.",
};

export default function ProductsPage() {
  return (
    <main style={{ background: "var(--ocean-900)" }}>
      <Navbar />

      {/* Page header */}
      <div
        style={{
          paddingTop:    "140px",
          paddingBottom: "50px",
          textAlign:     "center",
          background:    "linear-gradient(180deg, rgba(34,211,238,0.04) 0%, transparent 100%)",
          borderBottom:  "1px solid rgba(34,211,238,0.07)",
        }}
      >
        <div className="container-xl">
          <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>
            Global Export Catalog
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize:   "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color:      "var(--text-primary)",
              marginBottom:"0.75rem",
            }}
          >
            Our Premium <span className="gradient-text">Seafood Collection</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.8, fontSize: "0.925rem" }}>
            Block Frozen &amp; IQF products sourced from Kerala&apos;s pristine waters, processed under BRCGS, USFDA, HACCP, and BAP-certified standards.
          </p>
        </div>
      </div>

      {/* Catalog with filter tabs */}
      <section className="section-pad" style={{ paddingTop: "3rem" }}>
        <div className="container-xl">
          <Suspense fallback={<div style={{ textAlign: "center", padding: "4rem", color: "var(--text-muted)" }}>Loading catalog…</div>}>
            <ProductsCatalog />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
}
