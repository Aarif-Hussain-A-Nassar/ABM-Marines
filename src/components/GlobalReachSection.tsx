"use client";

const globalStats = [
  { value: "4+",   label: "Export Markets",    icon: "🌍" },
  { value: "20+",  label: "Years of Export",   icon: "📅" },
  { value: "100%", label: "Quality Assured",   icon: "✅" },
  { value: "EU",   label: "Approval No. 763",  icon: "🏅" },
];

const markets = [
  { region: "Europe",         flag: "🇪🇺", products: "Cuttlefish, Squid, Octopus, Prawns",      color: "var(--blue-400)" },
  { region: "United States",  flag: "🇺🇸", products: "Shrimp, Reef Cod, Value-Added Products", color: "var(--cyan-400)" },
  { region: "Far East",       flag: "🌏", products: "Octopus, Cuttlefish, Tiger Prawns",        color: "var(--teal-400)" },
  { region: "Australia",      flag: "🇦🇺", products: "Prawns, Mixed Seafood Packs",             color: "var(--blue-400)" },
];

export default function GlobalReachSection() {
  return (
    <section id="global-reach" className="section-pad" style={{ background: "var(--ocean-800)", position: "relative", overflow: "hidden" }}>
      <div className="orb orb-blue" aria-hidden="true" style={{ top: "30%", left: "-5%", width: "500px", height: "500px", opacity: 0.07 }} />
      <div className="orb orb-cyan" aria-hidden="true" style={{ bottom: "20%", right: "-5%", width: "400px", height: "400px", opacity: 0.06 }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>Global Presence</div>
          <h2 className="section-heading" style={{ maxWidth: "700px", margin: "0 auto 1.25rem" }}>
            Delivering to <span className="gradient-text">4 Continents</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            From the fishing harbors of Kerala to dinner tables across the globe —
            our reach spans Europe, North America, the Far East, and Oceania.
          </p>
        </div>

        {/* Stats — rg-stats: 4col → 2col everywhere mobile */}
        <div className="rg-stats" style={{ marginBottom: "4rem" }}>
          {globalStats.map((stat) => (
            <div key={stat.label} className="glass-card" style={{ padding: "2rem", borderRadius: "20px", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{stat.icon}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 900, color: "var(--cyan-400)", lineHeight: 1, marginBottom: "0.4rem" }}>{stat.value}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-secondary)" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* SVG World Map */}
        <div
          className="glass-card"
          style={{ borderRadius: "24px", padding: "2rem", marginBottom: "3rem", overflow: "hidden" }}
        >
          <svg
            viewBox="0 0 900 450"
            style={{ width: "100%", height: "auto", display: "block" }}
            aria-label="World map showing ABM Marine Products export routes"
          >
            {/* Ocean Background */}
            <rect width="900" height="450" fill="url(#oceanGrad)" rx="16" />
            <defs>
              <radialGradient id="oceanGrad" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="rgba(10,31,58,0.4)" />
                <stop offset="100%" stopColor="rgba(2,11,24,0.2)" />
              </radialGradient>
            </defs>

            {/* Grid lines */}
            {[150, 225, 300, 375].map((y) => (
              <line key={`h${y}`} x1="0" y1={y} x2="900" y2={y} stroke="rgba(34,211,238,0.06)" strokeWidth="1" />
            ))}
            {[150, 300, 450, 600, 750].map((x) => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2="450" stroke="rgba(34,211,238,0.06)" strokeWidth="1" />
            ))}

            {/* Simplified continent shapes */}
            {/* Europe */}
            <ellipse cx="455" cy="145" rx="55" ry="50" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.25)" strokeWidth="1" />
            {/* USA */}
            <ellipse cx="195" cy="178" rx="65" ry="48" fill="rgba(45,212,191,0.1)" stroke="rgba(45,212,191,0.2)" strokeWidth="1" />
            {/* India / Far East */}
            <ellipse cx="620" cy="200" rx="70" ry="55" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
            {/* Australia */}
            <ellipse cx="720" cy="330" rx="55" ry="42" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
            {/* Africa */}
            <ellipse cx="478" cy="255" rx="48" ry="68" fill="rgba(34,211,238,0.05)" stroke="rgba(34,211,238,0.1)" strokeWidth="1" />
            {/* South America */}
            <ellipse cx="238" cy="300" rx="42" ry="65" fill="rgba(34,211,238,0.05)" stroke="rgba(34,211,238,0.1)" strokeWidth="1" />

            {/* ABM Marine — Kochi, Kerala (origin) */}
            <circle cx="612" cy="212" r="8" fill="var(--cyan-400)" opacity="0.9" className="map-marker" />
            <circle cx="612" cy="212" r="15" fill="rgba(34,211,238,0.2)" className="map-marker" />
            <text x="612" y="240" textAnchor="middle" fontSize="10" fill="var(--cyan-400)" fontWeight="700">ABM Marine</text>
            <text x="612" y="252" textAnchor="middle" fontSize="9" fill="rgba(148,163,184,0.8)">Kochi, India</text>

            {/* Export route lines */}
            {/* To Europe */}
            <path d="M 612 212 Q 540 120 455 145" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" strokeDasharray="5,4" fill="none" />
            <circle cx="455" cy="145" r="5" fill="var(--blue-400)" opacity="0.85" />
            <text x="455" y="136" textAnchor="middle" fontSize="9" fill="var(--blue-400)" fontWeight="600">Europe 🇪🇺</text>

            {/* To USA */}
            <path d="M 612 212 Q 400 80 195 178" stroke="rgba(45,212,191,0.5)" strokeWidth="1.5" strokeDasharray="5,4" fill="none" />
            <circle cx="195" cy="178" r="5" fill="var(--teal-400)" opacity="0.85" />
            <text x="195" y="168" textAnchor="middle" fontSize="9" fill="var(--teal-400)" fontWeight="600">USA 🇺🇸</text>

            {/* To Far East (Japan/China) */}
            <path d="M 612 212 Q 680 160 730 185" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" strokeDasharray="5,4" fill="none" />
            <circle cx="730" cy="185" r="5" fill="var(--blue-400)" opacity="0.85" />
            <text x="745" y="180" textAnchor="middle" fontSize="9" fill="var(--blue-400)" fontWeight="600">Far East 🌏</text>

            {/* To Australia */}
            <path d="M 612 212 Q 670 280 720 330" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" strokeDasharray="5,4" fill="none" />
            <circle cx="720" cy="330" r="5" fill="var(--cyan-400)" opacity="0.85" />
            <text x="720" y="352" textAnchor="middle" fontSize="9" fill="var(--cyan-400)" fontWeight="600">Australia 🇦🇺</text>
          </svg>
        </div>

        {/* Market Cards — rg-4: 4col → 2col tablet → 2col mobile */}
        <div className="rg-4">
          {markets.map((market) => (
            <div
              key={market.region}
              className="glass-card"
              style={{ padding: "1.75rem 1.25rem", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "0.75rem" }}
            >
              <div style={{ fontSize: "2rem" }}>{market.flag}</div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem", color: market.color }}>{market.region}</h3>
              <div style={{ width: "30px", height: "2px", background: market.color, opacity: 0.6, borderRadius: "1px" }} />
              <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{market.products}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
