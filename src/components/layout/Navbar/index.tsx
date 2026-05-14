"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/data/nav";

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeSection, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Active-section tracker
  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`); }),
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const scrollTo = useCallback((href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header
        id="navbar"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(2, 11, 24, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(34, 211, 238, 0.1)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div
          className="container-xl"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: scrolled ? "68px" : "80px", transition: "height 0.4s ease" }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <div style={{ width: scrolled ? "44px" : "52px", height: scrolled ? "44px" : "52px", borderRadius: "12px", overflow: "hidden", border: "1.5px solid rgba(34,211,238,0.3)", transition: "all 0.4s ease", flexShrink: 0, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image src="/logo.jpeg" alt="ABM Marine Products" width={52} height={52} style={{ objectFit: "contain", width: "100%", height: "100%" }} priority />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: scrolled ? "1rem" : "1.1rem", color: "#f0f9ff", lineHeight: 1.2, letterSpacing: "-0.01em", transition: "font-size 0.4s ease" }}>ABM Marine</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 500, color: "var(--cyan-400)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Products</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav id="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }} aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`nav-link${activeSection === link.href ? " active" : ""}`}
                style={{ fontSize: "0.82rem", letterSpacing: "0.03em" }}
              >
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/919846079833" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.6rem 1.5rem", fontSize: "0.78rem" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </nav>

          {/* Hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
            style={{ display: "none", flexDirection: "column", gap: "5px", padding: "0.5rem", background: "none", border: "none", cursor: "pointer", zIndex: 1100 }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: "block", width: "24px", height: "2px", background: menuOpen && i === 1 ? "transparent" : "var(--cyan-400)", borderRadius: "2px", transition: "all 0.3s ease", transform: menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" : menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
            ))}
          </button>
        </div>

        <MobileMenu links={navLinks} isOpen={menuOpen} scrollTo={scrollTo} />
      </header>

      <style>{`
        @media (min-width: 1025px) {
          #mobile-menu { display: none !important; }
        }
        @media (max-width: 1024px) {
          #desktop-nav     { display: none !important; }
          #mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
