"use client";

const infraItems = [
  { icon: "🏭", title: "Modern Processing Plant",  stat: "HACCP Compliant",  desc: "State-of-the-art processing facility with automated conveyor systems, stainless-steel equipment, and temperature-controlled environments meeting global food safety standards." },
  { icon: "❄️", title: "Cold Storage Infrastructure", stat: "-40°C Capability", desc: "Advanced blast-freezing units and cold storage facilities maintaining optimal temperatures to preserve product freshness from processing through to shipment." },
  { icon: "⚙️", title: "Automated Processing Lines", stat: "High-Volume Output", desc: "Modern automated processing lines ensure consistent quality, higher throughput, and reduced contamination risk — meeting the stringent demands of global buyers." },
  { icon: "📦", title: "Export Packaging Lines",   stat: "Custom Formats",    desc: "Dedicated packaging lines for vacuum-sealing, IQF packaging, and bulk export formats. Customized to meet specific buyer requirements for different global markets." },
  { icon: "🚛", title: "Refrigerated Logistics",   stat: "Full Cold Chain",   desc: "Our own fleet of refrigerated vehicles ensures cold-chain integrity from the facility to export ports, maintaining product quality in transit." },
  { icon: "🔬", title: "In-House Quality Lab",     stat: "Zero Compromise",   desc: "A dedicated quality control laboratory with trained food safety professionals conducting microbiological, physical, and chemical testing at every production stage." },
];

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="section-pad" style={{ background: "var(--ocean-900)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,211,238,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.02) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />
      <div className="orb orb-blue" aria-hidden="true" style={{ top: "30%", left: "-5%", width: "500px", height: "500px", opacity: 0.06 }} />
      <div className="orb orb-cyan" aria-hidden="true" style={{ bottom: "20%", right: "-5%", width: "400px", height: "400px", opacity: 0.05 }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>World-Class Facilities</div>
          <h2 className="section-heading" style={{ maxWidth: "700px", margin: "0 auto 1.25rem" }}>
            Our <span className="gradient-text">Infrastructure</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            Our processing facilities in Kochi are equipped with modern technology enabling us
            to consistently deliver premium quality seafood at export scale.
          </p>
        </div>

        {/* Infrastructure Grid — rg-3: 3col → 2col tablet → 1col mobile */}
        <div className="rg-3">
          {infraItems.map((item) => (
            <div key={item.title} className="glass-card" style={{ padding: "2rem 1.5rem", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem" }}>
                <div style={{ fontSize: "2.2rem" }}>{item.icon}</div>
                <span style={{ padding: "0.25rem 0.75rem", background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: "100px", fontSize: "0.65rem", fontWeight: 700, color: "var(--cyan-400)", letterSpacing: "0.08em", textTransform: "uppercase", flexShrink: 0 }}>{item.stat}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.3 }}>{item.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.8, flex: 1 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner — rg-cta: side-by-side → stacked on tablet */}
        <div
          className="rg-cta"
          style={{ marginTop: "4rem", padding: "2.5rem", background: "linear-gradient(135deg, rgba(34,211,238,0.06), rgba(45,212,191,0.04))", border: "1px solid rgba(34,211,238,0.12)", borderRadius: "20px" }}
        >
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2vw, 1.5rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>Want to Visit Our Facility?</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>We welcome potential buyers and partners to inspect our processing facilities and quality systems firsthand.</p>
          </div>
          <a href="#contact" className="btn-primary" style={{ flexShrink: 0 }} onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>Schedule a Visit</a>
        </div>
      </div>
    </section>
  );
}
