"use client";

import FooterBrand from "./FooterBrand";
import { quickLinks, footerProducts, footerMarkets, footerCerts } from "@/data/footer";


const scrollTo = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Footer() {
  return (
    <footer style={{ background: "var(--ocean-900)", borderTop: "1px solid rgba(34,211,238,0.08)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "200px", background: "radial-gradient(ellipse, rgba(34,211,238,0.05), transparent 70%)", pointerEvents: "none" }} />

      <div className="container-xl" style={{ paddingTop: "5rem", paddingBottom: "3rem", position: "relative", zIndex: 2 }}>

        {/* rg-footer: 4col → 2col tablet → 1col mobile */}
        <div className="rg-footer" style={{ marginBottom: "4rem" }}>

          <FooterBrand quickLinks={quickLinks} />

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cyan-400)", marginBottom: "1.5rem" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", transition: "all 0.3s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--cyan-400)"; e.currentTarget.style.paddingLeft = "0.25rem"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.paddingLeft = "0"; }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-400)" strokeWidth="2.5" style={{ opacity: 0.5, flexShrink: 0 }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products + Markets */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--teal-400)", marginBottom: "1.5rem" }}>Products</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "2rem" }}>
              {footerProducts.map((p) => (
                <li key={p.label}>
                  <a href={p.href} onClick={(e) => { e.preventDefault(); scrollTo(p.href); }}
                    style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal-400)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--blue-400)", marginBottom: "1rem" }}>Markets</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {footerMarkets.map((m) => (
                <li key={m.region} style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{m.flag} {m.region}</li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--blue-400)", marginBottom: "1.5rem" }}>Certifications</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {footerCerts.map((cert) => (
                <div key={cert} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--cyan-400)", fontWeight: 700 }}>✓</span>{cert}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.15), transparent)", marginBottom: "2rem" }} />

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>© {new Date().getFullYear()} ABM Marine Products. Approval No. 763. All rights reserved.</p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
              <span>Website by</span>
              <a href="https://two-dots-two.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--cyan-400)", textDecoration: "none", fontWeight: 700, letterSpacing: "0.02em" }}>Two Dots</a>
              <span style={{ opacity: 0.3 }}>|</span>
              <a href="https://www.instagram.com/twodots.dev" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--cyan-400)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span>Follow us</span>
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Palluruthy, Kochi, Kerala 682006, India</span>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Exporting to:</span>
              <span style={{ fontSize: "1rem" }}>🇪🇺 🇺🇸 🌏 🇦🇺</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
