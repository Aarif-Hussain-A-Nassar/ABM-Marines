"use client";

import Image from "next/image";
import Link from "next/link";
import type { FooterLink } from "@/types";
import { brandValues } from "@/data/footer";
import { WHATSAPP_URL } from "@/data/contact";

interface FooterBrandProps {
  quickLinks: FooterLink[];
}

const scrollTo = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function FooterBrand({ quickLinks }: FooterBrandProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {/* Logo */}
      <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
        <div style={{ width: "48px", height: "48px", borderRadius: "12px", border: "1.5px solid rgba(34,211,238,0.25)", overflow: "hidden", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Image src="/logo.jpeg" alt="ABM Marine Products" width={48} height={48} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "1.1rem", color: "#f0f9ff", lineHeight: 1.2 }}>ABM Marine</div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 600, color: "var(--cyan-400)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Products</div>
        </div>
      </Link>

      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "320px" }}>
        Kerala&apos;s premier frozen seafood exporter since 2004. Delivering premium IQF and Block Frozen seafood to global markets with uncompromising quality and sustainability.
      </p>

      {/* Value tags */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {brandValues.map((val) => (
          <span key={val} style={{ padding: "0.2rem 0.65rem", background: "rgba(34,211,238,0.07)", border: "1px solid rgba(34,211,238,0.15)", borderRadius: "100px", fontSize: "0.7rem", color: "var(--text-secondary)", fontWeight: 500 }}>{val}</span>
        ))}
      </div>

      {/* Contact lines */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <a href="tel:+919846079833" style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan-400)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>📞 +91 98460 79833</a>
        <a href="mailto:abmmarineproducts@gmail.com" style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textDecoration: "none", wordBreak: "break-word" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan-400)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>✉️ abmmarineproducts@gmail.com</a>
        <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>📍 Palluruthy, Kochi - 682006, Kerala</span>
      </div>

      {/* Social icons */}
      <div style={{ display: "flex", gap: "0.75rem" }}>
        {[
          { href: WHATSAPP_URL, label: "WhatsApp", bg: "rgba(37,211,102,0.15)", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
          { href: "https://linkedin.com", label: "LinkedIn", bg: "rgba(10,102,194,0.15)", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="#0a66c2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
          { href: "mailto:abmmarineproducts@gmail.com", label: "Email", bg: "rgba(34,211,238,0.1)", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-400)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
        ].map(({ href, label, bg, icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            style={{ width: "36px", height: "36px", borderRadius: "8px", background: bg, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all 0.3s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.filter = "brightness(1.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.filter = ""; }}>
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
