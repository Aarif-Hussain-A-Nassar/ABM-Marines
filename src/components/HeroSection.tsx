"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "2004", label: "Established",     icon: "🏆" },
  { value: "4+",   label: "Export Markets",  icon: "🌍" },
  { value: "HACCP", label: "Certified",      icon: "✅" },
  { value: "IQF",  label: "Technology",      icon: "❄️" },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--ocean-900)",
      }}
    >
      {/* Parallax Background */}
      <div
        ref={videoRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-20%",
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.45,
          transition: "transform 0.1s linear",
        }}
      />

      {/* Gradient overlays */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,rgba(2,11,24,0.7) 0%,rgba(2,11,24,0.3) 40%,rgba(2,11,24,0.6) 70%,rgba(2,11,24,0.95) 100%)",
        }}
      />

      {/* Glow Orbs */}
      <div className="orb orb-cyan" aria-hidden="true"
        style={{ top: "10%", left: "-5%", width: "400px", height: "400px", opacity: 0.25 }} />
      <div className="orb orb-teal" aria-hidden="true"
        style={{ bottom: "20%", right: "-5%", width: "350px", height: "350px", opacity: 0.2 }} />

      {/* Content */}
      <div
        className="container-xl"
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          paddingTop: "8rem",
          paddingBottom: "4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          width: "100%",
        }}
      >
        {/* Label */}
        <div className="label-tag animate-fade">
          <span style={{ color: "var(--cyan-400)" }}>●</span>
          EU Approved · HACCP · USFDA Registered · Since 2004
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 6vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.08,
            color: "#f0f9ff",
            maxWidth: "900px",
            animationDelay: "0.1s",
            wordBreak: "break-word",
          }}
        >
          Premium Seafood Exports{" "}
          <span className="gradient-text">From Kerala</span>
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 700 }}>To The World</span>
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-up"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
            color: "rgba(148,163,184,0.9)",
            maxWidth: "640px",
            lineHeight: 1.8,
            animationDelay: "0.2s",
          }}
        >
          Delivering world-class Block Frozen &amp; IQF seafood — Shrimps, Cuttlefish,
          Squid, Octopus &amp; more — with trusted quality, sustainability, and
          international compliance since 2004.
        </p>

        {/* CTAs */}
        <div
          className="hero-ctas animate-fade-up"
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            animationDelay: "0.3s",
          }}
        >
          <a
            href="#products"
            onClick={(e) => { e.preventDefault(); document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-primary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
            Explore Products
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-ghost"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16l.19.92z"/>
            </svg>
            Contact Us
          </a>
        </div>

        {/* Floating Stats — uses CSS class for responsive 4→2 cols */}
        <div
          id="hero-stats-grid"
          className="rg-stats animate-fade-up"
          style={{
            width: "100%",
            maxWidth: "800px",
            marginTop: "2rem",
            animationDelay: "0.4s",
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="stat-card animate-float"
              style={{ animationDelay: `${idx * 0.5}s` }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{stat.icon}</div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  color: "var(--cyan-400)",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.6,
          zIndex: 10,
        }}
      >
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--cyan-400)" }}>
          Scroll
        </span>
        <div style={{ width: "1px", height: "50px", background: "linear-gradient(180deg, var(--cyan-400), transparent)" }} />
      </div>

      <div className="section-gradient-bottom" aria-hidden="true" />
    </section>
  );
}
