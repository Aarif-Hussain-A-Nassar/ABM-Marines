"use client";

const exportMarkets = [
  {
    region: "Europe",
    flag: "🇪🇺",
    countries: ["Netherlands", "Germany", "France", "Spain", "Italy"],
    desc: "Our largest export destination, supplying premium IQF and block frozen seafood to major distributors and retail chains across the EU.",
    color: "#3b82f6",
    icon: "🌍",
  },
  {
    region: "United States",
    flag: "🇺🇸",
    countries: ["New York", "Los Angeles", "Miami", "Seattle", "Chicago"],
    desc: "USFDA registered and compliant, we supply quality frozen seafood to importers, food service operators, and retail distributors in North America.",
    color: "#22d3ee",
    icon: "🌎",
  },
  {
    region: "Far East",
    flag: "🌏",
    countries: ["Japan", "China", "South Korea", "Vietnam", "Malaysia"],
    desc: "Catering to the discerning Asian market with premium seafood varieties meeting strict regional quality and compliance standards.",
    color: "#2dd4bf",
    icon: "🌏",
  },
  {
    region: "Australia",
    flag: "🇦🇺",
    countries: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    desc: "Supplying premium Indian Ocean seafood to Australian importers, hospitality groups, and seafood retailers with consistent quality.",
    color: "#60a5fa",
    icon: "🌏",
  },
];

const globalStats = [
  { value: "4+",   label: "Continents" },
  { value: "20+",  label: "Countries Served" },
  { value: "EU",   label: "Approved" },
  { value: "100%", label: "Compliance" },
];

export default function GlobalReachSection() {
  return (
    <section
      id="global-reach"
      className="section-pad"
      style={{
        background: "var(--ocean-800)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* World map decorative background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Ccircle cx='600' cy='300' r='280' fill='none' stroke='rgba(34,211,238,0.05)' stroke-width='1'/%3E%3Ccircle cx='600' cy='300' r='220' fill='none' stroke='rgba(34,211,238,0.04)' stroke-width='1'/%3E%3Ccircle cx='600' cy='300' r='160' fill='none' stroke='rgba(34,211,238,0.03)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
          pointerEvents: "none",
        }}
      />

      {/* Animated glows */}
      <div
        className="orb orb-blue"
        aria-hidden="true"
        style={{ top: "30%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", opacity: 0.05 }}
      />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>
            🌐 Global Presence
          </div>
          <h2 className="section-heading" style={{ maxWidth: "700px", margin: "0 auto 1.25rem" }}>
            Our{" "}
            <span className="gradient-text">Global Reach</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            From Kerala&apos;s shores to international markets, ABM continues to build
            lasting partnerships with global buyers by delivering consistency, quality, and trust.
          </p>
        </div>

        {/* Global Stats Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            marginBottom: "4rem",
            padding: "2rem",
            background: "rgba(6,22,41,0.6)",
            border: "1px solid rgba(34,211,238,0.1)",
            borderRadius: "20px",
            backdropFilter: "blur(20px)",
          }}
        >
          {globalStats.map((stat) => (
            <div key={stat.label} style={{ textAlign: "center", padding: "0.5rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "2.2rem",
                  color: "var(--cyan-400)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* World Map Visual */}
        <div
          style={{
            position: "relative",
            marginBottom: "4rem",
            padding: "3rem 2rem",
            background: "rgba(4,15,32,0.8)",
            border: "1px solid rgba(34,211,238,0.1)",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          {/* Simplified World SVG */}
          <svg
            viewBox="0 0 1000 480"
            style={{ width: "100%", height: "auto", maxHeight: "300px" }}
            aria-label="World map showing ABM Marine export regions"
          >
            {/* Ocean background */}
            <rect width="1000" height="480" fill="rgba(6,22,41,0.4)" rx="12"/>

            {/* Grid lines */}
            {[0,1,2,3].map(i => (
              <line key={`h${i}`} x1="0" y1={120*i} x2="1000" y2={120*i} stroke="rgba(34,211,238,0.05)" strokeWidth="1"/>
            ))}
            {[0,1,2,3,4].map(i => (
              <line key={`v${i}`} x1={200*i} y1="0" x2={200*i} y2="480" stroke="rgba(34,211,238,0.05)" strokeWidth="1"/>
            ))}

            {/* Continents (simplified shapes) */}
            {/* Europe */}
            <ellipse cx="500" cy="140" rx="90" ry="60" fill="rgba(34,211,238,0.15)" stroke="rgba(34,211,238,0.3)" strokeWidth="1.5"/>
            {/* North America */}
            <ellipse cx="200" cy="170" rx="110" ry="80" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.2)" strokeWidth="1"/>
            {/* Asia */}
            <ellipse cx="720" cy="160" rx="130" ry="80" fill="rgba(45,212,191,0.12)" stroke="rgba(45,212,191,0.25)" strokeWidth="1"/>
            {/* Australia */}
            <ellipse cx="780" cy="340" rx="70" ry="50" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.25)" strokeWidth="1"/>
            {/* India/South Asia */}
            <ellipse cx="650" cy="230" rx="35" ry="45" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5"/>

            {/* Export Route Lines */}
            <line x1="650" y1="230" x2="500" y2="140" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" strokeDasharray="6,4"/>
            <line x1="650" y1="230" x2="200" y2="170" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" strokeDasharray="6,4"/>
            <line x1="650" y1="230" x2="720" y2="160" stroke="rgba(45,212,191,0.4)" strokeWidth="1.5" strokeDasharray="6,4"/>
            <line x1="650" y1="230" x2="780" y2="340" stroke="rgba(96,165,250,0.4)" strokeWidth="1.5" strokeDasharray="6,4"/>

            {/* Region Labels */}
            <text x="500" y="135" textAnchor="middle" fill="rgba(34,211,238,0.9)" fontSize="11" fontWeight="bold">EUROPE</text>
            <text x="200" y="165" textAnchor="middle" fill="rgba(96,165,250,0.9)" fontSize="11" fontWeight="bold">USA</text>
            <text x="720" y="155" textAnchor="middle" fill="rgba(45,212,191,0.9)" fontSize="11" fontWeight="bold">FAR EAST</text>
            <text x="780" y="335" textAnchor="middle" fill="rgba(96,165,250,0.9)" fontSize="11" fontWeight="bold">AUSTRALIA</text>

            {/* India marker */}
            <circle cx="650" cy="230" r="8" fill="var(--cyan-400)" opacity="0.9"/>
            <circle cx="650" cy="230" r="16" fill="none" stroke="var(--cyan-400)" strokeWidth="1.5" opacity="0.4"/>
            <circle cx="650" cy="230" r="24" fill="none" stroke="var(--cyan-400)" strokeWidth="1" opacity="0.2"/>
            <text x="650" y="262" textAnchor="middle" fill="rgba(240,249,255,0.9)" fontSize="10" fontWeight="bold">KERALA, INDIA</text>

            {/* Route endpoint dots */}
            <circle cx="500" cy="140" r="5" fill="rgba(34,211,238,0.7)"/>
            <circle cx="200" cy="170" r="5" fill="rgba(96,165,250,0.7)"/>
            <circle cx="720" cy="160" r="5" fill="rgba(45,212,191,0.7)"/>
            <circle cx="780" cy="340" r="5" fill="rgba(96,165,250,0.7)"/>
          </svg>

          <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "1rem" }}>
            ABM Marine Products exports to 4 continents from Kochi, Kerala, India
          </p>
        </div>

        {/* Market Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
        >
          {exportMarkets.map((market) => (
            <div
              key={market.region}
              className="glass-card"
              style={{ padding: "1.75rem 1.25rem", borderRadius: "18px", textAlign: "center" }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{market.flag}</div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: market.color,
                  marginBottom: "0.75rem",
                }}
              >
                {market.region}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1rem" }}>
                {market.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.35rem",
                  justifyContent: "center",
                }}
              >
                {market.countries.slice(0, 3).map((c) => (
                  <span
                    key={c}
                    style={{
                      padding: "0.2rem 0.6rem",
                      background: `${market.color}15`,
                      border: `1px solid ${market.color}30`,
                      borderRadius: "100px",
                      fontSize: "0.68rem",
                      color: market.color,
                      fontWeight: 500,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          #global-reach .markets-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #global-reach .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          #global-reach .markets-grid { grid-template-columns: 1fr !important; }
          #global-reach .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
