// Stats / Key Highlights Bar — quick-glance numbers row

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Vessels Served" },
  { value: "50+", label: "Countries Covered" },
  { value: "24/7", label: "Global Support" },
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
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "var(--gold)",
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
