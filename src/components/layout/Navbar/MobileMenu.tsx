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
        background: "rgba(2, 11, 24, 0.97)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: "1.5rem",
        zIndex: 999,
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "auto" : "none",
        transition: "opacity 0.3s ease",
      }}
    >
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
