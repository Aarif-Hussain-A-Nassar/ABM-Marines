"use client";

import { useEffect, useRef } from "react";
import HeroStats from "./HeroStats";
import { globalStats } from "@/data/globalReach";

const scrollTo = (id: string) =>
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" aria-label="Hero" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "var(--ocean-900)" }}>

      {/* Parallax background */}
      <div ref={bgRef} aria-hidden="true" style={{ position: "absolute", inset: "-20%", backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center 30%", opacity: 0.45, transition: "transform 0.1s linear" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(2,11,24,0.7) 0%,rgba(2,11,24,0.3) 40%,rgba(2,11,24,0.6) 70%,rgba(2,11,24,0.95) 100%)" }} />
      <div className="orb orb-cyan" aria-hidden="true" style={{ top: "10%", left: "-5%", width: "400px", height: "400px", opacity: 0.25 }} />
      <div className="orb orb-teal" aria-hidden="true" style={{ bottom: "20%", right: "-5%", width: "350px", height: "350px", opacity: 0.2 }} />

      {/* Content */}
      <div className="container-xl" style={{ position: "relative", zIndex: 10, textAlign: "center", paddingTop: "8rem", paddingBottom: "4rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", width: "100%" }}>

        <div className="label-tag animate-fade">
          <span style={{ color: "var(--cyan-400)" }}>●</span> EU Approved · HACCP · USFDA Registered · Since 2004
        </div>

        <h1 className="animate-fade-up" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 6vw, 5.5rem)", fontWeight: 900, lineHeight: 1.08, color: "#f0f9ff", maxWidth: "900px", animationDelay: "0.1s", wordBreak: "break-word" }}>
          Premium Seafood Exports{" "}
          <span className="gradient-text">From Kerala</span>
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 700 }}>To The World</span>
        </h1>

        <p className="animate-fade-up" style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(0.9rem, 2vw, 1.15rem)", color: "rgba(148,163,184,0.9)", maxWidth: "640px", lineHeight: 1.8, animationDelay: "0.2s" }}>
          Delivering world-class Block Frozen &amp; IQF seafood — Shrimps, Cuttlefish, Squid, Octopus &amp; more — with trusted quality, sustainability, and international compliance since 2004.
        </p>

        <div className="hero-ctas animate-fade-up" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", animationDelay: "0.3s" }}>
          <button onClick={() => scrollTo("#products")} className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            Explore Products
          </button>
          <button onClick={() => scrollTo("#contact")} className="btn-ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16l.19.92z"/></svg>
            Contact Us
          </button>
        </div>

        <HeroStats stats={globalStats} />
      </div>

      {/* Scroll indicator */}
      <div aria-hidden="true" style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", opacity: 0.6, zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--cyan-400)" }}>Scroll</span>
        <div style={{ width: "1px", height: "50px", background: "linear-gradient(180deg, var(--cyan-400), transparent)" }} />
      </div>

      <div className="section-gradient-bottom" aria-hidden="true" />
    </section>
  );
}
