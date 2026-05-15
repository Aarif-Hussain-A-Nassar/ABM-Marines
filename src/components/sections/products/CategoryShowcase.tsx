"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { homepageCategories } from "@/data/catalog";

export default function CategoryShowcase() {
  const router = useRouter();

  return (
    <div>
      <div className="cat-grid">
        {homepageCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => router.push(`/products?cat=${cat.id}`)}
            style={{
              background:    "transparent",
              border:        "none",
              cursor:        "pointer",
              padding:       0,
              display:       "flex",
              flexDirection: "column",
              alignItems:    "center",
              gap:           "1rem",
            }}
            aria-label={`Browse ${cat.label}`}
          >
            {/* Circular plate */}
            <div
              className="cat-plate"
              style={{
                width:        "100%",
                aspectRatio:  "1 / 1",
                borderRadius: "50%",
                overflow:     "hidden",
                position:     "relative",
                border:       "3px solid rgba(255,255,255,0.08)",
                boxShadow:    "0 8px 40px rgba(0,0,0,0.55), inset 0 0 30px rgba(0,0,0,0.2)",
                transition:   "all 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                sizes="(max-width: 768px) 220px, 280px"
                className="cat-plate-img"
              />
              {/* Subtle dark vignette always present */}
              <div
                style={{
                  position:   "absolute",
                  inset:      0,
                  background: "radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.35) 100%)",
                  pointerEvents: "none",
                }}
              />
              {/* Hover CTA */}
              <div
                className="cat-plate-cta"
                style={{
                  position:       "absolute",
                  inset:          0,
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  opacity:        0,
                  transition:     "opacity 0.3s ease",
                  background:     "rgba(5,15,30,0.52)",
                  backdropFilter: "blur(3px)",
                  flexDirection:  "column",
                  gap:            "0.4rem",
                }}
              >
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--cyan-400)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                  View Products →
                </span>
              </div>
            </div>

            {/* Label */}
            <div
              className="cat-label"
              style={{
                width:        "100%",
                padding:      "0.65rem 1rem",
                border:       "1px solid rgba(255,255,255,0.12)",
                borderRadius: "8px",
                textAlign:    "center",
                fontSize:     "0.9rem",
                fontWeight:   600,
                color:        "var(--text-primary)",
                fontFamily:   "var(--font-sans)",
                transition:   "all 0.3s ease",
                background:   "rgba(255,255,255,0.03)",
              }}
            >
              {cat.label}
            </div>
          </button>
        ))}
      </div>

      <style>{`
        /* Grid layout */
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          max-width: 780px;
          margin: 0 auto;
        }

        /* Tablet: tighten up */
        @media (max-width: 768px) {
          .cat-grid {
            gap: 1.5rem;
            max-width: 560px;
          }
          .cat-label { font-size: 0.78rem !important; padding: 0.5rem 0.5rem !important; }
        }

        /* Mobile: stack vertically */
        @media (max-width: 500px) {
          .cat-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            max-width: 240px;
          }
        }

        /* Hover (desktop only) */
        @media (hover: hover) {
          .cat-plate:hover {
            border-color: rgba(34,211,238,0.4) !important;
            box-shadow: 0 20px 60px rgba(0,0,0,0.65), 0 0 40px rgba(34,211,238,0.12) !important;
            transform: translateY(-8px) scale(1.02);
          }
          .cat-plate:hover .cat-plate-img  { transform: scale(1.06); }
          .cat-plate:hover .cat-plate-cta  { opacity: 1 !important; }
          button:hover .cat-label {
            border-color: rgba(34,211,238,0.4) !important;
            color: var(--cyan-400) !important;
            background: rgba(34,211,238,0.07) !important;
          }
        }
      `}</style>
    </div>
  );
}
