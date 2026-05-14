import SectionHeader from "@/components/ui/SectionHeader";
import WorldMap from "./WorldMap";
import MarketCard from "./MarketCard";
import { globalStats, exportMarkets } from "@/data/globalReach";

export default function GlobalReachSection() {
  return (
    <section id="global-reach" className="section-pad" style={{ background: "var(--ocean-800)", position: "relative", overflow: "hidden" }}>
      <div className="orb orb-blue" aria-hidden="true" style={{ top: "30%", left: "-5%", width: "500px", height: "500px", opacity: 0.07 }} />
      <div className="orb orb-cyan" aria-hidden="true" style={{ bottom: "20%", right: "-5%", width: "400px", height: "400px", opacity: 0.06 }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader
          label="Global Presence"
          heading={<>Delivering to <span className="gradient-text">4 Continents</span></>}
          sub="From the fishing harbors of Kerala to dinner tables across the globe — our reach spans Europe, North America, the Far East, and Oceania."
        />

        {/* Stats row — rg-stats: 4col → 2col */}
        <div className="rg-stats" style={{ marginBottom: "4rem" }}>
          {globalStats.map((stat) => (
            <div key={stat.label} className="glass-card" style={{ padding: "2rem", borderRadius: "20px", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{stat.icon}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 900, color: "var(--cyan-400)", lineHeight: 1, marginBottom: "0.4rem" }}>{stat.value}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-secondary)" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <WorldMap />

        {/* Market cards — rg-4 */}
        <div className="rg-4">
          {exportMarkets.map((market) => <MarketCard key={market.region} market={market} />)}
        </div>
      </div>
    </section>
  );
}
