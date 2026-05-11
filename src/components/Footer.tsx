"use client";
import Image from "next/image";

const footerLinks = {
  "Quick Links": [
    { label: "Home",       href: "/" },
    { label: "About Us",   href: "/about" },
    { label: "Services",   href: "/services" },
    { label: "Products",   href: "/products" },
    { label: "Contact Us", href: "/contact" },
  ],
  "Our Services": [
    { label: "Ship Chandelling",    href: "/services/ship-chandelling" },
    { label: "Crew Management",     href: "/services/crew-management" },
    { label: "Technical Services",  href: "/services/technical-services" },
    { label: "Ship Agency",         href: "/services/ship-agency" },
    { label: "Marine Insurance",    href: "/services/marine-insurance" },
    { label: "Logistics",           href: "/services/logistics" },
  ],
};

const contactInfo = [
  { icon: "📍", label: "Head Office", value: "123 Marine Road, Dubai, UAE" },
  { icon: "📞", label: "Phone",       value: "+971 XX XXX XXXX" },
  { icon: "✉️", label: "Email",       value: "info@abmmarine.com" },
  { icon: "🕐", label: "Hours",       value: "Mon–Sat: 8:00 AM – 6:00 PM" },
];

const socials = [
  { id: "social-linkedin",  icon: "in", href: "https://linkedin.com" },
  { id: "social-facebook",  icon: "f",  href: "https://facebook.com" },
  { id: "social-instagram", icon: "ig", href: "https://instagram.com" },
  { id: "social-twitter",   icon: "𝕏",  href: "https://twitter.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      aria-label="Site footer"
      style={{ background: "#020a17", borderTop: "1px solid var(--border)", paddingTop: "4rem" }}
    >
      <div className="container-wide">
        <div
          className="grid-footer"
          style={{
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(25,118,210,0.12)",
          }}
        >

          {/* ── Column 1: Brand ── */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <Image
                src="/logo.jpeg"
                alt="ABM Marine logo"
                width={48}
                height={48}
                style={{ objectFit: "contain", borderRadius: "6px" }}
              />
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.1rem", color: "var(--text-primary)" }}>
                ABM <span style={{ color: "var(--blue-light)" }}>Marine</span>
              </span>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1.75rem", maxWidth: "280px" }}>
              Your trusted partner for comprehensive marine services, delivering
              excellence across global waters for over two decades.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socials.map((s) => (
                <a
                  key={s.id}
                  id={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "var(--card-bg)",
                    border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background   = "var(--blue)";
                    el.style.color        = "#fff";
                    el.style.borderColor  = "var(--blue)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background   = "var(--card-bg)";
                    el.style.color        = "var(--text-secondary)";
                    el.style.borderColor  = "var(--border)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Columns 2 & 3: Links ── */}
          {Object.entries(footerLinks).map(([groupTitle, links]) => (
            <div key={groupTitle}>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--blue-light)",
                marginBottom: "1.25rem",
              }}>
                {groupTitle}
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      style={{ color: "var(--text-secondary)", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.25s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-light)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Column 4: Contact ── */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--blue-light)",
              marginBottom: "1.25rem",
            }}>
              Contact Us
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {contactInfo.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "0.1rem" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--blue-light)", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                      {item.label}
                    </div>
                    <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                      {item.value}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div style={{
          padding: "1.5rem 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>
            © {year} ABM Marine. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ color: "var(--text-secondary)", fontSize: "0.8rem", textDecoration: "none", transition: "color 0.25s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
