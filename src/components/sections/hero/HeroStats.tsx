import type { GlobalStat } from "@/types";

interface HeroStatsProps {
  stats: GlobalStat[];
}

export default function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div
      id="hero-stats-grid"
      className="rg-stats animate-fade-up"
      style={{ width: "100%", maxWidth: "800px", marginTop: "2rem", animationDelay: "0.4s" }}
    >
      {stats.map((stat, idx) => (
        <div
          key={stat.label}
          className="stat-card animate-float"
          style={{ animationDelay: `${idx * 0.5}s` }}
        >
          <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{stat.icon}</div>
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "1.3rem", color: "var(--cyan-400)", lineHeight: 1, marginBottom: "0.25rem" }}>
            {stat.value}
          </div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "var(--text-secondary)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
