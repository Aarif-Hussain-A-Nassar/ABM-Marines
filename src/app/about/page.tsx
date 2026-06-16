"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/about";
import VideoSection from "@/components/sections/about/VideoSection";
import FounderSection from "@/components/sections/about/FounderSection";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main style={{ background: "var(--ocean-900)" }}>
      <Navbar />
      
      <div style={{ paddingTop: "160px", paddingBottom: "60px", textAlign: "center" }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.5rem" }}>Our Heritage</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "var(--text-primary)", marginBottom: "1rem" }}>
              20 Years of <span className="gradient-text">Seafood Excellence</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
              From a local vision in 2004 to a global seafood export leader. Discover the journey, values, and leadership that drive ABM Marine Products forward.
            </p>
          </motion.div>
        </div>
      </div>

      <AboutSection />
      <VideoSection />
      <FounderSection />
      
      <Footer />
    </main>
  );
}
