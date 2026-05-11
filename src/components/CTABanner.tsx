// CTA / Banner Section — ABM Marine real call-to-action

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
        <p className="section-label" style={{ marginBottom: "1rem" }}>Ready to Place an Order?</p>

        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 900,
          color: "#fff",
          marginBottom: "1.25rem",
          lineHeight: 1.15,
        }}>
          Explore the Marine{" "}
          <span className="text-gold">Treasures of Kerala</span>
        </h2>

        <p className="section-subtitle" style={{ margin: "0 auto 2.5rem", color: "rgba(180,200,230,0.8)" }}>
          Enquire online or get in touch with our team for competitive pricing on
          Block Frozen &amp; IQF seafood — Shrimps, Cuttlefish, Squid, Octopus, Reef Cod &amp; more.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" className="btn-gold">Enquiry &amp; Order Online</a>
          <a href="tel:+919846079833" className="btn-outline">📞 +91 98460 79833</a>
        </div>
      </div>
    </section>
  );
}
