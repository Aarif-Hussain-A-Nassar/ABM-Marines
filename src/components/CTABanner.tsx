// CTA / Banner Section — full-width call-to-action banner

export default function CTABanner() {
  return (
    <section
      id="cta-banner"
      aria-label="Call to action"
      style={{
        position: "relative",
        padding: "5rem 0",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0a0f1e 0%, #0d1628 100%)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* ── Background radial glow ── */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(25,118,210,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container-wide" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <p className="section-label" style={{ marginBottom: "1rem" }}>Ready to Work Together?</p>

        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 900,
          color: "#fff",
          marginBottom: "1.25rem",
          lineHeight: 1.15,
        }}>
          Let Us Handle Your{" "}
          <span className="text-gold">Marine Needs</span>
        </h2>

        <p className="section-subtitle" style={{ margin: "0 auto 2.5rem", color: "rgba(180,200,230,0.8)" }}>
          Get in touch with our expert team today for a customized quote,
          technical consultation, or to discuss your fleet requirements.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" className="btn-gold">Get a Free Quote</a>
          <a href="tel:+971XXXXXXXX" className="btn-outline">📞 Call Us Now</a>
        </div>
      </div>
    </section>
  );
}
