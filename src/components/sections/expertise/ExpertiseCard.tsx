import type { ExpertiseItem } from "@/types";
import ExpertiseIcon from "@/components/ui/ExpertiseIcon";

interface ExpertiseCardProps {
  item:  ExpertiseItem;
  index: number;
}

export default function ExpertiseCard({ item, index }: ExpertiseCardProps) {
  return (
    <div
      className="glass-card"
      style={{ padding: "2rem", borderRadius: "20px", position: "relative" }}
    >
      <ExpertiseIcon name={item.iconKey} color={item.color} />

      {/* Background number */}
      <div
        aria-hidden="true"
        style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 900, color: `${item.color}18`, lineHeight: 1, position: "absolute", top: "1rem", right: "1.5rem", userSelect: "none" }}
      >
        0{index + 1}
      </div>

      <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "0.75rem", lineHeight: 1.3 }}>
        {item.title}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
        {item.desc}
      </p>

      <div style={{ marginTop: "1.5rem", height: "2px", background: `linear-gradient(90deg, ${item.color}, transparent)`, borderRadius: "1px", opacity: 0.5 }} />
    </div>
  );
}
