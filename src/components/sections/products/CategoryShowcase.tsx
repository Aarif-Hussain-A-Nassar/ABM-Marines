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
            className="cat-btn"
            aria-label={`Browse ${cat.label}`}
          >
            {/* Circular plate */}
            <div className="cat-plate">
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 500px) 110px, (max-width: 768px) 160px, 260px"
                className="cat-plate-img"
              />

              {/* Dark vignette — always */}
              <div className="cat-vignette" />

              {/* "Tap / Click" CTA — hidden on desktop (shown on hover), always visible on touch */}
              <div className="cat-plate-cta">
                <span className="cat-cta-text">Explore →</span>
              </div>
            </div>

            {/* Label — looks like a button on all screens */}
            <div className="cat-label">
              <span className="cat-label-text">{cat.label}</span>
              <svg className="cat-label-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </button>
        ))}
      </div>

      <style>{`
        /* ── Grid → Flex (equal 3 columns regardless of text) ── */
        .cat-grid {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          width: 100%;
          max-width: 780px;
          margin: 0 auto;
        }

        /* ── Button wrapper ───────────────────────────────────── */
        .cat-btn {
          flex: 1;
          min-width: 0;           /* prevents text from inflating column */
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          -webkit-tap-highlight-color: transparent;
        }

        /* ── Circular plate ───────────────────────────────────── */
        .cat-plate {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          border: 3px solid rgba(255,255,255,0.08);
          box-shadow: 0 8px 40px rgba(0,0,0,0.55);
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .cat-plate-img { transition: transform 0.5s ease; }

        /* Vignette edge */
        .cat-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 35%, rgba(0,0,0,0.42) 100%);
          pointer-events: none;
        }

        /* CTA overlay */
        .cat-plate-cta {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(5,15,30,0.52);
          backdrop-filter: blur(3px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .cat-cta-text {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--cyan-400);
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        /* ── Label bar ────────────────────────────────────────── */
        .cat-label {
          width: 100%;
          padding: 0.6rem 0.75rem;
          border: 1px solid rgba(34,211,238,0.25);
          border-radius: 8px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background: rgba(34,211,238,0.06);
          transition: all 0.3s ease;
        }
        .cat-label-text {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-sans);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cat-label-arrow {
          color: var(--cyan-400);
          flex-shrink: 0;
          opacity: 0.7;
        }

        /* ── Desktop hover ────────────────────────────────────── */
        @media (hover: hover) {
          .cat-plate:hover {
            border-color: rgba(34,211,238,0.4) !important;
            box-shadow: 0 20px 60px rgba(0,0,0,0.65), 0 0 40px rgba(34,211,238,0.12) !important;
            transform: translateY(-6px) scale(1.02);
          }
          .cat-plate:hover .cat-plate-img  { transform: scale(1.06); }
          .cat-plate:hover .cat-plate-cta  { opacity: 1; }
          .cat-btn:hover .cat-label {
            border-color: rgba(34,211,238,0.5) !important;
            background: rgba(34,211,238,0.12) !important;
          }
          .cat-btn:hover .cat-label-text { color: var(--cyan-400) !important; }
          .cat-btn:hover .cat-label-arrow { opacity: 1; }
        }

        /* ── Touch: press feedback only ─────────────────────── */
        @media (hover: none) {
          .cat-btn:active .cat-plate {
            transform: scale(0.97);
            border-color: rgba(34,211,238,0.4);
          }
          .cat-btn:active .cat-label {
            background: rgba(34,211,238,0.18) !important;
          }
        }

        /* ── Tablet ───────────────────────────────────────────── */
        @media (max-width: 768px) {
          .cat-grid { gap: 1rem; }
          .cat-label-text { font-size: 0.75rem; }
        }

        /* ── Mobile: tighter gaps, smaller labels ─────────────── */
        @media (max-width: 480px) {
          .cat-grid { gap: 0.6rem; }
          .cat-label {
            padding: 0.4rem 0.3rem;
            gap: 0.2rem;
            border-radius: 6px;
          }
          .cat-label-text { font-size: 0.62rem; }
          .cat-label-arrow { width: 10px; height: 10px; }
          .cat-cta-text { font-size: 0.56rem; letter-spacing: 0.08em; }
        }
      `}</style>
    </div>
  );
}
