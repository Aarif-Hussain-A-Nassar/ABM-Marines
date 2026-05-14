import type { ExportMarket } from "@/types";

interface MarketCardProps {
  market: ExportMarket;
}

export default function MarketCard({ market }: MarketCardProps) {
  return (
    <div
      className="glass-card"
      style={{ padding: "1.75rem 1.25rem", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "0.75rem" }}
    >
      {/* Flag icon */}
      <span
        className={`fi fi-${market.flagCode}`}
        title={market.region}
        style={{
          display: "inline-block",
          width: "2.5rem",
          height: "1.875rem",
          borderRadius: "4px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.35)",
          flexShrink: 0,
        }}
      />

      <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem", color: market.color }}>
        {market.region}
      </h3>
      <div style={{ width: "30px", height: "2px", background: market.color, opacity: 0.6, borderRadius: "1px" }} />
      <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
        {market.products}
      </p>
    </div>
  );
}
