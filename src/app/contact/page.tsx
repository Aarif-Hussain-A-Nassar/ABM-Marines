"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/contact";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main style={{ background: "var(--ocean-900)" }}>
      <div style={{ paddingTop: "160px", paddingBottom: "40px", textAlign: "center" }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.5rem" }}>Contact Us</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "var(--text-primary)", marginBottom: "1rem" }}>
              Let&apos;s Build a <span style={{ color: "var(--brand-vibrant)" }}>Global Partnership</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
              Ready to source premium Indian seafood? Our team is here to assist with quotes, product specifications, and shipping logistics.
            </p>
          </motion.div>
        </div>
      </div>

      <ContactSection />
    </main>
  );
}
