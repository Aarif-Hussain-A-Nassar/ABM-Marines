"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Products",   href: "/products" },
  { label: "Careers",    href: "/careers" },
  { label: "Blogs",      href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        background: scrolled
          ? "rgba(10,15,30,0.97)"
          : "linear-gradient(180deg, rgba(10,15,30,0.8) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.5)" : "none",
        borderBottom: scrolled ? "1px solid rgba(197,160,90,0.15)" : "none",
      }}
    >
      <div className="container-wide" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>

        {/* ── Logo ── */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          {/* Replace src with actual logo */}
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "linear-gradient(135deg, #C5A05A, #A07C3A)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.1rem", color: "#000",
          }}>
            ABM
          </div>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.2rem", color: "#f5f5f5", letterSpacing: "0.05em" }}>
            ABM <span style={{ color: "var(--gold)" }}>Marine</span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav id="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              padding: "0.5rem 0.85rem",
              borderRadius: 4,
              textDecoration: "none",
              transition: "color 0.25s ease",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </Link>
          ))}
          <a href="/contact" className="btn-gold" style={{ marginLeft: "1rem", padding: "0.65rem 1.5rem", fontSize: "0.75rem" }}>
            Get a Quote
          </a>
        </nav>

        {/* ── Mobile Hamburger ── */}
        <button
          id="mobile-menu-btn"
          aria-label="Toggle mobile menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: "24px", height: "2px",
              background: "var(--gold)", borderRadius: "2px",
              transition: "all 0.3s ease",
            }} />
          ))}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div id="mobile-menu" style={{
          background: "rgba(10,15,30,0.98)",
          borderTop: "1px solid var(--border)",
          padding: "1rem 0",
        }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.85rem 2rem",
                fontFamily: "var(--font-heading)",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(197,160,90,0.08)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
