export default function WorldMap() {
  return (
    <div className="glass-card" style={{ borderRadius: "24px", padding: "2rem", marginBottom: "3rem", overflow: "hidden" }}>
      <svg
        viewBox="0 0 900 450"
        style={{ width: "100%", height: "auto", display: "block" }}
        aria-label="World map showing ABM Marine Products export routes"
      >
        <rect width="900" height="450" fill="url(#oceanGrad)" rx="16" />
        <defs>
          <radialGradient id="oceanGrad" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="var(--ocean-800)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--ocean-900)" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {/* Grid lines */}
        {[150, 225, 300, 375].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="900" y2={y} stroke="rgba(34,211,238,0.06)" strokeWidth="1" />
        ))}
        {[150, 300, 450, 600, 750].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="450" stroke="rgba(34,211,238,0.06)" strokeWidth="1" />
        ))}

        {/* Continents */}
        <ellipse cx="455" cy="145" rx="55" ry="50" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.25)" strokeWidth="1" />
        <ellipse cx="195" cy="178" rx="65" ry="48" fill="rgba(45,212,191,0.1)" stroke="rgba(45,212,191,0.2)" strokeWidth="1" />
        <ellipse cx="620" cy="200" rx="70" ry="55" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
        <ellipse cx="720" cy="330" rx="55" ry="42" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
        <ellipse cx="478" cy="255" rx="48" ry="68" fill="rgba(34,211,238,0.05)" stroke="rgba(34,211,238,0.1)" strokeWidth="1" />
        <ellipse cx="238" cy="300" rx="42" ry="65" fill="rgba(34,211,238,0.05)" stroke="rgba(34,211,238,0.1)" strokeWidth="1" />

        {/* Origin — Kochi */}
        <circle cx="612" cy="212" r="8" fill="var(--cyan-400)" opacity="0.9" className="map-marker" />
        <circle cx="612" cy="212" r="15" fill="rgba(34,211,238,0.2)" className="map-marker" />
        <text x="612" y="240" textAnchor="middle" fontSize="10" fill="var(--cyan-400)" fontWeight="700">ABM Marine</text>
        <text x="612" y="252" textAnchor="middle" fontSize="9" fill="rgba(148,163,184,0.8)">Kochi, India</text>

        {/* Routes */}
        <path d="M 612 212 Q 540 120 455 145" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" strokeDasharray="5,4" fill="none" />
        <circle cx="455" cy="145" r="5" fill="var(--blue-400)" opacity="0.85" />
        <text x="455" y="136" textAnchor="middle" fontSize="9" fill="var(--blue-400)" fontWeight="600">Europe 🇪🇺</text>

        <path d="M 612 212 Q 400 80 195 178" stroke="rgba(45,212,191,0.5)" strokeWidth="1.5" strokeDasharray="5,4" fill="none" />
        <circle cx="195" cy="178" r="5" fill="var(--teal-400)" opacity="0.85" />
        <text x="195" y="168" textAnchor="middle" fontSize="9" fill="var(--teal-400)" fontWeight="600">USA 🇺🇸</text>

        <path d="M 612 212 Q 680 160 730 185" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" strokeDasharray="5,4" fill="none" />
        <circle cx="730" cy="185" r="5" fill="var(--blue-400)" opacity="0.85" />
        <text x="745" y="180" textAnchor="middle" fontSize="9" fill="var(--blue-400)" fontWeight="600">Far East 🌏</text>

        <path d="M 612 212 Q 670 280 720 330" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" strokeDasharray="5,4" fill="none" />
        <circle cx="720" cy="330" r="5" fill="var(--cyan-400)" opacity="0.85" />
        <text x="720" y="352" textAnchor="middle" fontSize="9" fill="var(--cyan-400)" fontWeight="600">Australia 🇦🇺</text>
      </svg>
    </div>
  );
}
