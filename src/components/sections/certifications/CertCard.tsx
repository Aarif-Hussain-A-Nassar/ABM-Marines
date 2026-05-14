import type { Certification } from "@/types";

interface CertCardProps {
  cert: Certification;
}

export default function CertCard({ cert }: CertCardProps) {
  return (
    <div className="glass-card" style={{ padding: "2rem 1.5rem", borderRadius: "20px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", top: "-30px", left: "50%", transform: "translateX(-50%)", width: "150px", height: "100px", background: `radial-gradient(ellipse, ${cert.color}20, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{cert.icon}</div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.8rem", color: cert.color, marginBottom: "0.5rem", lineHeight: 1 }}>{cert.abbr}</div>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-secondary)", letterSpacing: "0.05em", marginBottom: "0.75rem", lineHeight: 1.4 }}>{cert.name}</div>
      <div style={{ width: "40px", height: "2px", background: `linear-gradient(90deg, ${cert.color}, transparent)`, margin: "0 auto 0.75rem", borderRadius: "1px" }} />
      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{cert.desc}</p>
    </div>
  );
}
