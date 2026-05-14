"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductsSection from "@/components/sections/products"; 
import { motion } from "framer-motion";

export default function ProductsPage() {
  return (
    <main style={{ background: "var(--ocean-900)" }}>
      <Navbar />
      
      {/* Dedicated Header for Products Page */}
      <div style={{ paddingTop: "160px", paddingBottom: "60px", background: "linear-gradient(180deg, var(--ocean-800) 0%, var(--ocean-900) 100%)", textAlign: "center" }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.5rem" }}>Global Catalog</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
              Our Premium <span className="gradient-text">Seafood Collection</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
              Explore our full range of Block Frozen and IQF products. Every item is sourced with care, processed under strict quality control, and shipped to the world&apos;s leading markets.
            </p>
          </motion.div>
        </div>
      </div>

      <ProductsSection />
      
      <Footer />
    </main>
  );
}
