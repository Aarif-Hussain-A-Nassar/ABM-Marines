import type { SustainabilityPillar } from "@/types";

interface PillarCardProps {
  pillar: SustainabilityPillar;
}

export default function PillarCard({ pillar }: PillarCardProps) {
  return (
    <div
      className="glass-card"
      style={{ padding: "2rem 1.5rem", borderRadius: "20px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}
    >
      <div style={{ fontSize: "2.5rem" }}>{pillar.icon}</div>
      <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>
        {pillar.title}
      </h3>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
        {pillar.desc}
      </p>
    </div>
  );
}
