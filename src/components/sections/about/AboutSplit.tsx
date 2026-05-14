import Image from "next/image";
import type { HighlightItem } from "@/types";

interface AboutSplitProps {
  highlights: HighlightItem[];
}

export default function AboutSplit({ highlights }: AboutSplitProps) {
  return (
    /* rg-split: 2col → 1col on tablet/mobile */
    <div className="rg-split" style={{ marginBottom: "5rem" }}>

      {/* Left — Facility image */}
      <div style={{ position: "relative" }}>
        <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(34,211,238,0.2)", boxShadow: "0 30px 80px rgba(0,0,0,0.4)", position: "relative" }}>
          <Image
            src="/facility.jpg"
            alt="ABM Marine Products processing facility"
            width={640}
            height={480}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(2,11,24,0.6) 0%, transparent 50%)" }} />
        </div>

        {/* Floating badge */}
        <div
          className="glass-card about-float-badge"
          style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", padding: "1.25rem 1.5rem", borderRadius: "16px", textAlign: "center" }}
        >
          <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 900, color: "var(--cyan-400)", lineHeight: 1 }}>20+</div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-secondary)", marginTop: "0.25rem" }}>Years of Trust</div>
        </div>
      </div>

      {/* Right — Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3 }}>
          From Kochi&apos;s Harbors to{" "}<span className="gradient-text">Global Markets</span>
        </h3>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.9 }}>
          Starting with a modest setup near the fishing harbors of Kochi, ABM Marine Products quickly earned
          recognition for its commitment to quality, transparency, and customer satisfaction.
        </p>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.9 }}>
          Today, we supply premium seafood to{" "}
          <strong style={{ color: "var(--cyan-400)" }}>Europe, USA, the Far East, and Australia</strong>{" "}
          — serving distributors, retailers, and hospitality brands worldwide.
        </p>

        {/* Highlights grid — rg-2-tight: 2col → 1col mobile */}
        <div className="rg-2-tight">
          {highlights.map((h) => (
            <div
              key={h.text}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.875rem 1rem", background: "rgba(34,211,238,0.05)", border: "1px solid rgba(34,211,238,0.12)", borderRadius: "10px" }}
            >
              <span style={{ fontSize: "1.2rem" }}>{h.icon}</span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-primary)" }}>{h.text}</span>
            </div>
          ))}
        </div>

        {/* Vision & Mission — rg-vm: 2col → 1col mobile */}
        <div className="rg-vm">
          <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "12px" }}>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--cyan-400)", marginBottom: "0.5rem" }}>Our Vision</div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>India&apos;s most trusted seafood exporter, delivering excellence with sustainability.</p>
          </div>
          <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "12px" }}>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--teal-400)", marginBottom: "0.5rem" }}>Our Mission</div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>World-class seafood while safeguarding marine resources for future generations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
