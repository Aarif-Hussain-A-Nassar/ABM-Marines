import type { InfraItem } from "@/types";

interface InfraCardProps {
  item: InfraItem;
}

export default function InfraCard({ item }: InfraCardProps) {
  return (
    <div className="glass-card" style={{ padding: "2rem 1.5rem", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem" }}>
        <div style={{ fontSize: "2.2rem" }}>{item.icon}</div>
        <span style={{ padding: "0.25rem 0.75rem", background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: "100px", fontSize: "0.65rem", fontWeight: 700, color: "var(--cyan-400)", letterSpacing: "0.08em", textTransform: "uppercase", flexShrink: 0 }}>
          {item.stat}
        </span>
      </div>
      <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.3 }}>
        {item.title}
      </h3>
      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.8, flex: 1 }}>
        {item.desc}
      </p>
    </div>
  );
}
