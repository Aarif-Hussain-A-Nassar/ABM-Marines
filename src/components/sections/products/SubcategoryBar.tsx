"use client";


interface SubcategoryBarProps {
  subcategories: string[];
  active:        string; // "all" | subcategory label
  onChange:      (s: string) => void;
}

export default function SubcategoryBar({ subcategories, active, onChange }: SubcategoryBarProps) {
  if (subcategories.length === 0) return null;
  return (
    <div
      style={{
        display:        "flex",
        justifyContent: "center",
        gap:            "0.4rem",
        flexWrap:       "wrap",
        marginBottom:   "2.5rem",
        paddingBottom:  "1rem",
        borderBottom:   "1px solid rgba(34,211,238,0.08)",
      }}
    >
      <button
        onClick={() => onChange("all")}
        style={{
          padding:      "0.25rem 0.75rem",
          borderRadius: "100px",
          border:       `1px solid ${active === "all" ? "rgba(34,211,238,0.5)" : "rgba(255,255,255,0.08)"}`,
          background:   active === "all" ? "rgba(34,211,238,0.12)" : "transparent",
          color:        active === "all" ? "var(--cyan-400)" : "var(--text-muted)",
          fontSize:     "0.72rem",
          fontWeight:   600,
          cursor:       "pointer",
          transition:   "all 0.25s ease",
        }}
      >
        All
      </button>

      {subcategories.map((sub) => (
        <button
          key={sub}
          onClick={() => onChange(sub)}
          style={{
            padding:      "0.25rem 0.75rem",
            borderRadius: "100px",
            border:       `1px solid ${active === sub ? "rgba(34,211,238,0.5)" : "rgba(255,255,255,0.08)"}`,
            background:   active === sub ? "rgba(34,211,238,0.12)" : "transparent",
            color:        active === sub ? "var(--cyan-400)" : "var(--text-muted)",
            fontSize:     "0.72rem",
            fontWeight:   600,
            cursor:       "pointer",
            transition:   "all 0.25s ease",
            whiteSpace:   "nowrap",
          }}
        >
          {sub}
        </button>
      ))}
    </div>
  );
}
