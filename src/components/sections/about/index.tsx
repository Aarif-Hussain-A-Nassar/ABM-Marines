import SectionHeader from "@/components/ui/SectionHeader";
import AboutSplit from "./AboutSplit";
import Timeline from "./Timeline";
import { timelineItems, highlights, coreValues } from "@/data/about";

export default function AboutSection() {
  return (
    <section id="about" className="section-pad" style={{ background: "var(--ocean-800)", position: "relative", overflow: "hidden" }}>
      <div className="orb orb-cyan" aria-hidden="true" style={{ top: "10%", right: "-10%", width: "500px", height: "500px", opacity: 0.08 }} />
      <div className="orb orb-teal" aria-hidden="true" style={{ bottom: "10%", left: "-10%", width: "400px", height: "400px", opacity: 0.06 }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader
          label="Our Story"
          heading={<>Two Decades of <span className="gradient-text">Kerala Seafood</span> Excellence</>}
          sub="ABM Marine Products (Approval No. 763) began its journey in 2004, founded with a clear vision — to take the rich seafood heritage of Kerala to the global stage."
        />

        <AboutSplit highlights={highlights} />
        <Timeline items={timelineItems} />

        {/* Core Values */}
        <div style={{ textAlign: "center", padding: "2rem", background: "linear-gradient(135deg, rgba(34,211,238,0.05), rgba(45,212,191,0.03))", border: "1px solid rgba(34,211,238,0.1)", borderRadius: "20px" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--cyan-400)", marginBottom: "1rem" }}>Core Values</p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 0 }}>
            {coreValues.map((val, i) => (
              <span key={val} style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 2.5vw, 1.6rem)", fontWeight: 700, color: "var(--text-primary)", padding: "0 1rem" }}>{val}</span>
                {i < coreValues.length - 1 && <span style={{ color: "var(--cyan-400)", opacity: 0.5, fontSize: "1.2rem" }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
