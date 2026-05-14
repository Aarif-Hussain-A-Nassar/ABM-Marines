import type { TimelineItem } from "@/types";

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div style={{ marginBottom: "4rem" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
          Our Journey
        </h3>
      </div>

      {/* rg-timeline: 4col → 2col tablet → 1col mobile */}
      <div className="rg-timeline">
        {items.map((item) => (
          <div
            key={item.year}
            className="glass-card"
            style={{ padding: "1.75rem 1.25rem", borderRadius: "16px", textAlign: "center" }}
          >
            <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "linear-gradient(135deg, var(--cyan-400), var(--teal-400))", margin: "0 auto 1rem", boxShadow: "0 0 12px rgba(34,211,238,0.5)" }} />
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 900, color: "var(--cyan-400)", marginBottom: "0.5rem" }}>
              {item.year}
            </div>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.9rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
              {item.title}
            </div>
            <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
