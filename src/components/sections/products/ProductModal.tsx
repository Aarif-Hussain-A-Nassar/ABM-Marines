"use client";

import type { Product } from "@/types";
import { WHATSAPP_URL } from "@/data/contact";

interface ProductModalProps {
  product:  Product;
  onClose:  () => void;
}

const scrollToContact = (onClose: () => void) => {
  onClose();
  setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 100);
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div
      style={{ position: "fixed", inset: 0, background: "var(--modal-overlay)", backdropFilter: "blur(20px)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
      onClick={onClose}
    >
      <div
        style={{ background: "var(--ocean-700)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: "24px", padding: "2.5rem", maxWidth: "540px", width: "100%", position: "relative", maxHeight: "90vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", color: "var(--cyan-400)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}
          aria-label="Close"
        >×</button>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{product.emoji}</div>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--teal-400)", marginBottom: "0.5rem" }}>{product.category}</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{product.name}</h3>
          <span style={{ padding: "0.25rem 0.75rem", background: "rgba(45,212,191,0.15)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", fontSize: "0.75rem", color: "var(--teal-400)", fontWeight: 600 }}>{product.type}</span>
        </div>

        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem", textAlign: "center" }}>{product.description}</p>

        {/* Sizes */}
        {product.sizes && (
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--cyan-400)", marginBottom: "0.75rem", textAlign: "center" }}>Available Sizes</div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
              {product.sizes.map((s) => (
                <span key={s} style={{ padding: "0.3rem 0.9rem", background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: "8px", fontSize: "0.82rem", color: "var(--text-primary)", fontWeight: 600 }}>{s}</span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(onClose); }} className="btn-primary">Request Quote</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Us</a>
        </div>
      </div>
    </div>
  );
}
