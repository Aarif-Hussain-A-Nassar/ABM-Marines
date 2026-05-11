// Hero Section — Full-screen background with headline + CTA

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

      {/* ── Blue corner accent ── */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, left: 0,
        width: "400px", height: "400px",
        background: "radial-gradient(circle at 0% 0%, rgba(25,118,210,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── Content ── */}
      <div
        className="container-wide"
        style={{ position: "relative", zIndex: 10, textAlign: "center", paddingTop: "6rem", paddingBottom: "2rem" }}
      >
        <p className="section-label animate-fade" style={{ marginBottom: "1.25rem" }}>
          EU Approved · HACCP Endorsed · USFDA Registered
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
          Premium Frozen{" "}
          <span style={{ color: "var(--blue-light)" }}>Seafood Export</span>
          {" "}Worldwide
        </h1>

        <p
          className="section-subtitle animate-fade-up"
          style={{ margin: "0 auto 2.5rem", color: "rgba(200,210,230,0.85)", animationDelay: "0.3s" }}
        >
          ABM Marine Products has been delivering world-class Block Frozen &amp; IQF seafood —
          Shrimps, Cuttlefish, Squid, Octopus, Reef Cod and more — with sustained quality
          standards and competitive pricing since 2004.
        </p>

        <div
          className="animate-fade-up"
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", animationDelay: "0.45s" }}
        >
          <a href="/products" className="btn-gold">Explore Products</a>
          <a href="/contact" className="btn-outline">Enquiry &amp; Order Online</a>
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
          <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--blue-light)", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div style={{
            width: 1, height: 50,
            background: "linear-gradient(180deg, var(--blue-light), transparent)",
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
