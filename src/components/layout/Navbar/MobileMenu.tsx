"use client";

import type { NavLinkItem } from "@/types";

interface MobileMenuProps {
  links:   NavLinkItem[];
  isOpen:  boolean;
  scrollTo:(href: string) => void;
}

export default function MobileMenu({ links, isOpen, scrollTo }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: "var(--ocean-900)", // Solid deep midnight background
        backgroundImage: "radial-gradient(circle at 50% -20%, var(--brand-deep) 0%, transparent 60%)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: "1.5rem",
        zIndex: 999,
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
        transform: isOpen ? "translateY(0)" : "translateY(-10px)",
        pointerEvents: isOpen ? "auto" : "none",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Decorative background element */}
      <div style={{ position: "absolute", bottom: "-10%", left: "50%", transform: "translateX(-50%)", width: "100%", height: "40%", background: "linear-gradient(0deg, var(--brand-deep) 0%, transparent 100%)", opacity: 0.1, pointerEvents: "none" }} />

      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
          style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, color: "#f0f9ff", textDecoration: "none", transition: "color 0.3s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan-400)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f9ff")}
        >
          {link.label}
        </a>
      ))}
      <a
        href="https://wa.me/919846079833"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        style={{ marginTop: "1rem" }}
      >
        WhatsApp Us
      </a>
    </div>
  );
}
