"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroStats from "./HeroStats";
import { globalStats } from "@/data/globalReach";
import Image from "next/image";

const scrollTo = (id: string) =>
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax for background
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      style={{ 
        position: "relative", 
        minHeight: "120vh", // Increased height for breathing room
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center", 
        overflow: "hidden", 
        background: "var(--ocean-900)",
        padding: "120px 0 100px 0"
      }}
    >
      {/* 1. Deep Background Layer */}
      <motion.div 
        style={{ 
          position: "absolute", 
          inset: "-10%", 
          backgroundImage: "url('/hero-bg.png')", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          opacity: 0.35, 
          y: bgY,
          filter: "var(--hero-bg-filter, brightness(0.4) contrast(1.2))"
        }} 
      />

      {/* 2. Deep Sea Light Rays */}
      <div className="light-rays" aria-hidden="true" />

      {/* 3. Content Container */}
      <div className="container-xl" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        
        {/* Upper Part: Title + Image Split */}
        <div className="rg-split-lg" style={{ alignItems: "center", gap: "4rem", marginBottom: "4rem" }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="label-tag" style={{ background: "rgba(89, 194, 238, 0.1)", borderColor: "rgba(89, 194, 238, 0.2)", marginBottom: "1.5rem", display: "inline-flex" }}>
              <span style={{ color: "var(--brand-light)" }}>●</span> PREMIUM SEAFOOD EXPORTS SINCE 2004
            </div>

            <h1 style={{ 
              fontFamily: "var(--font-display)", 
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)", 
              fontWeight: 900, 
              lineHeight: 1.05, 
              color: "var(--text-primary)", 
              marginBottom: "1.5rem"
            }}>
              Mastering The Art Of <br />
              <span className="gradient-text" style={{ backgroundImage: "linear-gradient(to right, var(--brand-light), var(--brand-vibrant))" }}>
                Seafood Excellence
              </span>
            </h1>

            <p style={{ 
              fontFamily: "var(--font-sans)", 
              fontSize: "clamp(1rem, 2vw, 1.2rem)", 
              color: "var(--text-secondary)", 
              maxWidth: "580px", 
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              borderLeft: "3px solid var(--brand-vibrant)",
              paddingLeft: "1.5rem"
            }}>
              From Kerala&apos;s pristine coast to global dinner tables. ABM Marine Products delivers the world&apos;s finest frozen seafood with trusted quality and sustainability.
            </p>

            <div className="hero-ctas" style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("#products")} className="btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}>
                View Collection
              </button>
              <button onClick={() => scrollTo("#contact")} className="btn-ghost" style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}>
                Get a Quote
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{ position: "relative" }}
          >
            <div style={{ position: "absolute", width: "120%", height: "120%", top: "-10%", left: "-10%", background: "radial-gradient(circle, rgba(0, 150, 214, 0.15), transparent 70%)", filter: "blur(50px)", zIndex: -1 }} />
            <motion.div
              animate={{ y: [0, -25, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "100%", maxWidth: "580px", aspectRatio: "1/1", position: "relative" }}
            >
              <Image 
                src="/hero-item.png" 
                alt="Premium Seafood" 
                fill 
                style={{ objectFit: "contain", filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.5))" }}
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Lower Part: Stats in their own clean row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ width: "100%", borderTop: "1px solid rgba(89, 194, 238, 0.1)", paddingTop: "3rem" }}
        >
          <HeroStats stats={globalStats} />
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <div className="orb orb-cyan" style={{ top: "10%", left: "-10%", width: "500px", height: "500px", opacity: 0.08 }} />
      <div className="orb orb-blue" style={{ bottom: "10%", right: "-10%", width: "600px", height: "600px", opacity: 0.06 }} />

      {/* Scroll indicator - Moved to side on desktop, center on mobile */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hero-scroll-btn"
        style={{ position: "absolute", bottom: "3rem", zIndex: 10, opacity: 0.4 }}
      >
        <div style={{ width: "22px", height: "38px", border: "1.5px solid var(--brand-light)", borderRadius: "11px", display: "flex", justifyContent: "center", padding: "5px" }}>
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: "2px", height: "6px", background: "var(--brand-light)", borderRadius: "2px" }}
          />
        </div>
      </motion.div>

      <div className="section-gradient-bottom" style={{ height: "15vh" }} aria-hidden="true" />
      
      <style>{`
        .light-rays {
          position: absolute;
          inset: 0;
          background: repeating-conic-gradient(from 0deg at 50% -10%, transparent 0deg 10deg, rgba(89, 194, 238, 0.015) 15deg 20deg);
          mask-image: radial-gradient(circle at 50% -10%, black, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at 50% -10%, black, transparent 80%);
          animation: raysRotate 100s linear infinite;
          pointer-events: none;
        }
        @keyframes raysRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .hero-scroll-btn {
          right: 4rem;
        }
        @media (max-width: 1024px) {
          #hero { min-height: auto !important; padding: 120px 0 60px 0 !important; }
          .rg-split-lg { grid-template-columns: 1fr !important; gap: 3rem !important; text-align: center !important; }
          .hero-ctas { justify-content: center !important; }
          p { margin: 0 auto 2.5rem !important; border-left: none !important; border-top: 2px solid var(--brand-vibrant) !important; padding: 1rem 0 0 0 !important; }
          .container-xl > div:last-child { border-top: none !important; }
          .hero-scroll-btn {
            right: auto !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
          }
        }
        @media (max-width: 640px) {
          .hero-scroll-btn { display: none !important; } /* Hide on small mobile to avoid blocking content */
        }
      `}</style>
    </section>
  );
}
