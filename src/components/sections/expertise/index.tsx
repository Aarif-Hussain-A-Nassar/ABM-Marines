import SectionHeader from "@/components/ui/SectionHeader";
import ExpertiseCard from "./ExpertiseCard";
import { expertiseItems } from "@/data/expertise";

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section-pad" style={{ background: "var(--ocean-900)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(34,211,238,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(45,212,191,0.04) 0%, transparent 50%)", pointerEvents: "none" }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader
          label="What We Do Best"
          heading={<>Our <span className="gradient-text">Expertise</span></>}
          sub="At ABM Marine Products, expertise is not just about handling seafood — it's about mastering every step of the journey from catch to customer."
        />

        {/* rg-3: 3col → 2col tablet → 1col mobile */}
        <div className="rg-3">
          {expertiseItems.map((item, i) => (
            <ExpertiseCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
