import Image from "next/image";
import type { Certification } from "@/types";

interface CertCardProps {
  cert: Certification;
}

export default function CertCard({ cert }: CertCardProps) {
  return (
    <div
      className="glass-card"
      style={{
        padding: "2rem 1.5rem",
        borderRadius: "20px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      {/* Soft glow behind logo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "160px",
          height: "120px",
          background: `radial-gradient(ellipse, ${cert.color}18, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Logo or icon fallback */}
      {cert.logo ? (
        <div
          style={{
            width: "100%",
            maxWidth: "160px",
            height: "72px",
            background: cert.logoBg ?? "rgba(255,255,255,0.92)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 16px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
            flexShrink: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Image
            src={cert.logo}
            alt={`${cert.abbr} certification logo`}
            fill
            style={{ objectFit: "contain", padding: "10px 16px" }}
            sizes="160px"
          />
        </div>
      ) : (
        <div style={{ fontSize: "2.5rem", position: "relative", zIndex: 1 }}>
          {cert.icon}
        </div>
      )}

      {/* Abbr / name */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "1.3rem",
            color: cert.color,
            lineHeight: 1.1,
            marginBottom: "0.3rem",
          }}
        >
          {cert.abbr}
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.72rem",
            fontWeight: 600,
            color: "var(--text-secondary)",
            letterSpacing: "0.04em",
            lineHeight: 1.4,
          }}
        >
          {cert.name}
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "40px",
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)`,
          borderRadius: "1px",
          flexShrink: 0,
        }}
      />

      {/* Description */}
      <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
        {cert.desc}
      </p>

      {/* Bottom accent stripe */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: `linear-gradient(90deg, ${cert.color}, transparent)`,
        }}
      />
    </div>
  );
}
