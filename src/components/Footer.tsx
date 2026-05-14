"use client";

import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "#about",          label: "About Us" },
  { href: "#expertise",      label: "Our Expertise" },
  { href: "#quality",        label: "Quality Control" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#global-reach",  label: "Global Reach" },
  { href: "#products",       label: "Products" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#contact",        label: "Contact" },
];

const products = [
  "Tiger Prawns",
  "Vannamei Shrimp",
  "Cuttlefish",
  "Squid",
  "Octopus",
  "Reef Cod (Grouper)",
];

const certifications = ["HACCP", "USFDA", "BRCGS", "FSSAI", "EU Approved", "BAP"];

const markets = [
  { region: "Europe", flag: "🇪🇺" },
  { region: "United States", flag: "🇺🇸" },
  { region: "Far East", flag: "🌏" },
  { region: "Australia", flag: "🇦🇺" },
];

const scrollTo = (href: string) => {
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ocean-900)",
        borderTop: "1px solid rgba(34,211,238,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background: "radial-gradient(ellipse, rgba(34,211,238,0.05), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main Footer Content */}
      <div
        className="container-xl"
        style={{
          paddingTop: "5rem",
          paddingBottom: "3rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Top Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  border: "1.5px solid rgba(34,211,238,0.25)",
                  overflow: "hidden",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/logo.jpeg"
                  alt="ABM Marine Products"
                  width={48}
                  height={48}
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "#f0f9ff",
                    lineHeight: 1.2,
                  }}
                >
                  ABM Marine
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    color: "var(--cyan-400)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Products
                </div>
              </div>
            </Link>

            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: "340px",
              }}
            >
              Kerala&apos;s premier frozen seafood exporter since 2004. Delivering premium IQF and
              Block Frozen seafood to global markets with uncompromising quality and sustainability.
            </p>

            {/* Core Values Chips */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["Quality", "Trust", "Sustainability", "Innovation"].map((val) => (
                <span
                  key={val}
                  style={{
                    padding: "0.2rem 0.65rem",
                    background: "rgba(34,211,238,0.07)",
                    border: "1px solid rgba(34,211,238,0.15)",
                    borderRadius: "100px",
                    fontSize: "0.7rem",
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  {val}
                </span>
              ))}
            </div>

            {/* Contact quick info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a
                href="tel:+919846079833"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  display: "flex",
                  gap: "0.5rem",
                  transition: "color 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan-400)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                📞 +91 98460 79833
              </a>
              <a
                href="mailto:abmmarineproducts@gmail.com"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  display: "flex",
                  gap: "0.5rem",
                  transition: "color 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan-400)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                ✉️ abmmarineproducts@gmail.com
              </a>
              <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", gap: "0.5rem" }}>
                📍 Palluruthy, Kochi - 682006, Kerala
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--cyan-400)",
                marginBottom: "1.5rem",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "var(--cyan-400)";
                      e.currentTarget.style.paddingLeft = "0.25rem";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--cyan-400)", opacity: 0.5, flexShrink: 0 }}>
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Markets */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--teal-400)",
                marginBottom: "1.5rem",
              }}
            >
              Products
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "2rem" }}>
              {products.map((p) => (
                <li key={p}>
                  <a
                    href="#products"
                    onClick={(e) => { e.preventDefault(); scrollTo("#products"); }}
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--teal-400)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>

            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--blue-400)",
                marginBottom: "1rem",
              }}
            >
              Markets
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {markets.map((m) => (
                <li key={m.region} style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  {m.flag} {m.region}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--blue-400)",
                marginBottom: "1.5rem",
              }}
            >
              Certifications
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
              {certifications.map((cert) => (
                <div
                  key={cert}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span style={{ color: "var(--cyan-400)", fontWeight: 700 }}>✓</span>
                  {cert}
                </div>
              ))}
            </div>

            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--cyan-400)",
                marginBottom: "1rem",
              }}
            >
              Follow Us
            </h4>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {/* WhatsApp */}
              <a
                href="https://wa.me/919846079833"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#25D366",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(37,211,102,0.2)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(37,211,102,0.12)";
                  e.currentTarget.style.transform = "";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(10,102,194,0.12)",
                  border: "1px solid rgba(10,102,194,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0a66c2",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(10,102,194,0.2)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(10,102,194,0.12)";
                  e.currentTarget.style.transform = "";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:abmmarineproducts@gmail.com"
                aria-label="Email"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(34,211,238,0.08)",
                  border: "1px solid rgba(34,211,238,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--cyan-400)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(34,211,238,0.15)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(34,211,238,0.08)";
                  e.currentTarget.style.transform = "";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.15), transparent)",
            marginBottom: "2rem",
          }}
        />

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
            }}
          >
            © {new Date().getFullYear()} ABM Marine Products. Approval No. 763. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              Palluruthy, Kochi, Kerala 682006, India
            </span>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Exporting to:</span>
            <span style={{ fontSize: "1rem" }}>🇪🇺 🇺🇸 🌏 🇦🇺</span>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          footer .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          footer .footer-grid { grid-template-columns: 1fr !important; }
          footer .bottom-bar { flex-direction: column !important; text-align: center !important; }
        }
      `}</style>
    </footer>
  );
}
