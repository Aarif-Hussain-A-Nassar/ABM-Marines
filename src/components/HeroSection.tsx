// Hero Section — Full-screen background with headline + CTA
// Replace the background image with an actual high-res marine/vessel photo

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #050c1a 0%, #0a1428 50%, #060d1c 100%)",
      }}
    >
      {/* ── Background image placeholder ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.35,
        }}
      />

      {/* ── Dark gradient overlay ── */}
      <div className="overlay-dark" aria-hidden="true" />

      {/* ── Gold corner accent ── */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, left: 0,
        width: "400px", height: "400px",
        background: "radial-gradient(circle at 0% 0%, rgba(197,160,90,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── Content ── */}
      <div
        className="container-wide"
        style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 2rem" }}
      >
        <p className="section-label animate-fade" style={{ marginBottom: "1.25rem" }}>
          Your Trusted Marine Partner
        </p>

        <h1
          className="animate-fade-up"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            color: "#fff",
            marginBottom: "1.5rem",
            animationDelay: "0.15s",
          }}
        >
          Premier Marine Services{" "}
          <span style={{ color: "var(--gold)" }}>Delivered Worldwide</span>
        </h1>

        <p
          className="section-subtitle animate-fade-up"
          style={{ margin: "0 auto 2.5rem", color: "rgba(200,210,230,0.85)", animationDelay: "0.3s" }}
        >
          ABM Marine provides world-class marine solutions — from vessel supply and
          ship chandelling to crewing and technical services — with decades of
          expertise across global waters.
        </p>

        <div
          className="animate-fade-up"
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", animationDelay: "0.45s" }}
        >
          <a href="/services" className="btn-gold">Explore Services</a>
          <a href="/contact" className="btn-outline">Contact Us</a>
        </div>

        {/* ── Scroll indicator ── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.6,
          }}
        >
          <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div style={{
            width: 1, height: 50,
            background: "linear-gradient(180deg, var(--gold), transparent)",
          }} />
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div aria-hidden="true" style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "200px",
        background: "linear-gradient(to top, var(--navy) 0%, transparent 100%)",
      }} />
    </section>
  );
}
