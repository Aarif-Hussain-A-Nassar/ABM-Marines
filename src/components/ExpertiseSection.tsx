"use client";

const expertiseItems = [
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
    title: "Commitment to Quality",
    desc: "Every product undergoes stringent quality checks, hygienic handling, and world-class packaging. From catch to buyer, we ensure freshness, safety, and global compliance.",
    color: "var(--cyan-400)",
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
    title: "Wide Product Range",
    desc: "We specialize in both Block Frozen and IQF (Individually Quick Frozen) seafood, catering to diverse buyer needs across global markets.",
    color: "var(--teal-400)",
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="15" x2="12" y2="15"/></svg>),
    title: "Compliance & Certifications",
    desc: "Certified under HACCP and USFDA, reflecting our commitment to the highest international food safety standards, assuring consistent reliability and trust.",
    color: "var(--blue-400)",
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
    title: "Strong Supplier Partnerships",
    desc: "Long-standing partnerships with local fishermen and suppliers ensure a steady raw material flow and ability to meet large-scale demands without compromising quality.",
    color: "var(--cyan-400)",
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>),
    title: "Advanced Infrastructure",
    desc: "Equipped with modern freezing units, cold storage facilities, and automated processing lines delivering products that meet stringent global buyer requirements.",
    color: "var(--teal-400)",
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>),
    title: "Customized Solutions",
    desc: "From bulk containers for distributors to vacuum-packed retail-ready products, we provide tailored packaging solutions for different markets and customer preferences.",
    color: "var(--blue-400)",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section-pad" style={{ background: "var(--ocean-900)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(34,211,238,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(45,212,191,0.04) 0%, transparent 50%)", pointerEvents: "none" }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>What We Do Best</div>
          <h2 className="section-heading" style={{ maxWidth: "700px", margin: "0 auto 1.25rem" }}>
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            At ABM Marine Products, expertise is not just about handling seafood —
            it&apos;s about mastering every step of the journey from catch to customer.
          </p>
        </div>

        {/* Cards — rg-3: 3col → 2col tablet → 1col mobile */}
        <div className="rg-3">
          {expertiseItems.map((item, i) => (
            <div
              key={item.title}
              className="glass-card"
              style={{ padding: "2rem", borderRadius: "20px", position: "relative" }}
            >
              {/* Icon box */}
              <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: `linear-gradient(135deg, ${item.color}22, ${item.color}11)`, border: `1px solid ${item.color}33`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", color: item.color }}>
                {item.icon}
              </div>

              {/* Background number */}
              <div aria-hidden="true" style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 900, color: `${item.color}18`, lineHeight: 1, position: "absolute", top: "1rem", right: "1.5rem", userSelect: "none" }}>
                0{i + 1}
              </div>

              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "0.75rem", lineHeight: 1.3 }}>{item.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>{item.desc}</p>

              {/* Bottom accent */}
              <div style={{ marginTop: "1.5rem", height: "2px", background: `linear-gradient(90deg, ${item.color}, transparent)`, borderRadius: "1px", opacity: 0.5 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
