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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when resizing back to desktop width
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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
      <div
        className="container-wide"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}
      >
        {/* ── Logo ── */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="/logo.jpeg"
            alt="ABM Marine logo"
            width={46}
            height={46}
            style={{ objectFit: "contain", borderRadius: "6px" }}
            priority
          />
          <span style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(0.95rem, 3vw, 1.15rem)",
            color: "#f0f6ff",
            letterSpacing: "0.04em",
          }}>
            ABM <span style={{ color: "var(--blue-light)" }}>Marine</span>
          </span>
        </Link>

        {/* ── Desktop Nav (hidden ≤1024px via CSS) ── */}
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

        {/* ── Hamburger (hidden on desktop, shown ≤1024px via CSS) ── */}
        <button
          id="mobile-menu-btn"
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none", /* CSS overrides this to flex on ≤1024px */
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            width: 40,
            height: 40,
          }}
        >
          <span style={{
            display: "block", width: 24, height: 2,
            background: "var(--blue-light)", borderRadius: 2,
            transition: "transform 0.3s ease",
            transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
          }} />
          <span style={{
            display: "block", width: 24, height: 2,
            background: "var(--blue-light)", borderRadius: 2,
            transition: "opacity 0.3s ease",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block", width: 24, height: 2,
            background: "var(--blue-light)", borderRadius: 2,
            transition: "transform 0.3s ease",
            transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
          }} />
        </button>
      </div>

      {/* ── Mobile Slide-down Menu ── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          style={{
            background: "rgba(3,13,28,0.98)",
            borderTop: "1px solid var(--border)",
            padding: "0.5rem 0 1rem",
            animation: "fadeIn 0.2s ease",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.85rem 1.5rem",
                fontFamily: "var(--font-heading)",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(25,118,210,0.08)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--blue-light)";
                e.currentTarget.style.background = "rgba(25,118,210,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ padding: "1rem 1.5rem 0" }}>
            <a href="/contact" className="btn-gold" style={{ fontSize: "0.82rem", width: "100%", justifyContent: "center" }}>
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
