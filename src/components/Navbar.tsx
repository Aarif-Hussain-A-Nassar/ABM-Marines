"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Products",   href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

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
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        background: scrolled
          ? "rgba(3,13,28,0.97)"
          : "linear-gradient(180deg, rgba(3,13,28,0.85) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow:      scrolled ? "0 2px 30px rgba(0,0,0,0.6)" : "none",
        borderBottom:   scrolled ? "1px solid rgba(25,118,210,0.18)" : "none",
      }}
    >
      <div className="container-wide" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>

        {/* ── Logo ── */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <Image
            src="/logo.jpeg"
            alt="ABM Marine logo"
            width={52}
            height={52}
            style={{ objectFit: "contain", borderRadius: "6px" }}
            priority
          />
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.15rem", color: "#f0f6ff", letterSpacing: "0.04em" }}>
            ABM <span style={{ color: "var(--blue-light)" }}>Marine</span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav id="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "0.15rem" }} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                padding: "0.5rem 0.9rem",
                borderRadius: 4,
                textDecoration: "none",
                transition: "color 0.25s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/contact"
            className="btn-gold"
            style={{ marginLeft: "1rem", padding: "0.65rem 1.5rem", fontSize: "0.75rem" }}
          >
            Get a Quote
          </a>
        </nav>

        {/* ── Mobile Hamburger ── */}
        <button
          id="mobile-menu-btn"
          aria-label="Toggle mobile menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: menuOpen ? "flex" : "none",   /* shown via CSS media query override */
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
              background: "var(--blue-light)", borderRadius: "2px",
              transition: "all 0.3s ease",
            }} />
          ))}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div id="mobile-menu" style={{
          background: "rgba(3,13,28,0.98)",
          borderTop: "1px solid var(--border)",
          padding: "1rem 0",
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.85rem 2rem",
                fontFamily: "var(--font-heading)",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(25,118,210,0.08)",
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
