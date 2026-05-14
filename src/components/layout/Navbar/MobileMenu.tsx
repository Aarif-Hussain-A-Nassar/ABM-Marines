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
      onClick={() => scrollTo("")} 
      style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "#010810", 
        backdropFilter: "blur(30px)", 
        WebkitBackdropFilter: "blur(30px)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: "2.5rem",
        zIndex: 9999, 
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
        transform: isOpen ? "scale(1)" : "scale(1.05)", 
        pointerEvents: isOpen ? "auto" : "none",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Dedicated Close Button */}
      <button
        onClick={(e) => { e.stopPropagation(); scrollTo(""); }}
        style={{
          position: "absolute", top: "2rem", right: "2rem",
          background: "none", border: "none", color: "#fff", cursor: "pointer",
          padding: "1rem"
        }}
        aria-label="Close menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div 
        onClick={(e) => e.stopPropagation()} 
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", width: "100%" }}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            style={{ 
              fontFamily: "var(--font-display)", 
              fontSize: "2rem", 
              fontWeight: 800, 
              color: "#fff", 
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "transform 0.3s ease"
            }}
          >
            {link.label}
          </a>
        ))}
        
        <a
          href="https://wa.me/919846079833"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ marginTop: "1rem", padding: "1rem 2.5rem" }}
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}
