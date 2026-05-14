"use client";

import type { ContactInfoItem } from "@/types";
import { WHATSAPP_PRESET } from "@/data/contact";


interface ContactInfoProps {
  items: ContactInfoItem[];
}

export default function ContactInfo({ items }: ContactInfoProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Info card */}
      <div className="glass-card" style={{ padding: "2rem", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)" }}>Contact Information</h3>
        {items.map((info) => (
          <div key={info.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{info.icon}</span>
            <div>
              <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--cyan-400)", marginBottom: "0.25rem" }}>{info.label}</div>
              {info.href ? (
                <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none", wordBreak: "break-word" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan-400)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                  {info.value}
                </a>
              ) : (
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", whiteSpace: "pre-line" }}>{info.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <a href={WHATSAPP_PRESET} target="_blank" rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", padding: "1.25rem", background: "linear-gradient(135deg, #128C7E, #25D366)", borderRadius: "14px", color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", transition: "all 0.3s ease" }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(37,211,102,0.4)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Chat on WhatsApp
      </a>

      {/* Map */}
      <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(34,211,238,0.15)" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4!2d76.267!3d9.927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnMzcuMiJOIDc2wrAxNicwMS4yIkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ABM Marine Products — Palluruthy, Kochi, Kerala"
        />
      </div>
    </div>
  );
}
