// Stats / Key Highlights Bar — ABM Marine real numbers

const stats = [
  { value: "2004", label: "Founded" },
  { value: "EU",   label: "Approved Factory" },
  { value: "HACCP", label: "Certified & USFDA Registered" },
  { value: "20+",  label: "Years of Experience" },
];

export default function StatsBar() {
  return (
    <section
      id="stats"
      aria-label="Key statistics"
      style={{
        background: "linear-gradient(90deg, #0a0f1e 0%, #0d1628 50%, #0a0f1e 100%)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "3rem 0",
      }}
    >
      <div className="container-wide">
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2rem",
          }}
        >
          {stats.map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "var(--blue-light)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
