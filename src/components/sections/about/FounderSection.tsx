"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section 
      id="founder" 
      className="section-pad" 
      style={{ 
        background: "var(--ocean-900)", 
        position: "relative", 
        overflow: "hidden",
        borderTop: "1px solid rgba(34,211,238,0.05)",
        borderBottom: "1px solid rgba(34,211,238,0.05)",
        scrollMarginTop: "80px"
      }}
    >
      {/* Background glow effects */}
      <div className="orb orb-cyan" aria-hidden="true" style={{ top: "30%", left: "-10%", width: "400px", height: "400px", opacity: 0.05 }} />
      <div className="orb orb-teal" aria-hidden="true" style={{ bottom: "20%", right: "-10%", width: "450px", height: "450px", opacity: 0.06 }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        <div className="rg-split" style={{ alignItems: "center", gap: "5rem" }}>
          
          {/* Left Column: Image with premium design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: "relative" }}
          >
            {/* Background Glow */}
            <div 
              style={{
                position: "absolute",
                inset: "-10px",
                background: "linear-gradient(135deg, var(--cyan-400), var(--teal-400))",
                borderRadius: "28px",
                opacity: 0.15,
                filter: "blur(20px)",
                zIndex: 0
              }} 
            />

            {/* Decorative Frame Accents */}
            <div 
              style={{
                position: "absolute",
                top: "-12px",
                left: "-12px",
                width: "30px",
                height: "30px",
                borderTop: "3px solid var(--cyan-400)",
                borderLeft: "3px solid var(--cyan-400)",
                borderTopLeftRadius: "12px",
                zIndex: 0,
                opacity: 0.8
              }}
            />
            <div 
              style={{
                position: "absolute",
                bottom: "-12px",
                left: "-12px",
                width: "30px",
                height: "30px",
                borderBottom: "3px solid var(--cyan-400)",
                borderLeft: "3px solid var(--cyan-400)",
                borderBottomLeftRadius: "12px",
                zIndex: 0,
                opacity: 0.8
              }}
            />

            {/* Main Image Container */}
            <div 
              style={{ 
                borderRadius: "24px", 
                overflow: "hidden", 
                border: "1px solid rgba(34,211,238,0.25)", 
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)", 
                position: "relative",
                zIndex: 1,
                aspectRatio: "4/5",
                background: "var(--ocean-800)"
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  src="/Founder 9.png"
                  alt="Xavier P.A., Managing Partner of ABM Marine Products"
                  width={500}
                  height={625}
                  priority
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    objectPosition: "top",
                    display: "block" 
                  }}
                />
              </motion.div>
              {/* Subtle overlay gradient */}
              <div 
                style={{ 
                  position: "absolute", 
                  inset: 0, 
                  background: "linear-gradient(to top, rgba(2, 11, 24, 0.7) 0%, rgba(2, 11, 24, 0) 50%)",
                  pointerEvents: "none"
                }} 
              />
            </div>

            {/* Interactive Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card"
              style={{ 
                position: "absolute", 
                bottom: "-2rem", 
                right: "-1rem", 
                padding: "1rem 1.5rem", 
                borderRadius: "16px",
                border: "1px solid rgba(34,211,238,0.3)",
                zIndex: 2,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                cursor: "default"
              }}
            >
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                Xavier P.A.
              </h4>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "var(--cyan-400)", margin: "0.25rem 0 0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Managing Partner
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Founder Details / Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div>
              <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1rem" }}>
                Founder & Leadership
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.25, margin: "0 0 1rem" }}>
                Steering Our Path to <br/>
                <span className="gradient-text">Global Quality</span> Excellence
              </h3>
              <div className="divider-glow" style={{ marginBottom: "1.5rem" }} />
            </div>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem" }}>
              Since founding ABM Marine Products in 2004, Xavier P.A. has guided the enterprise with an unwavering commitment: bringing Kerala&apos;s rich, pristine seafood heritage to global markets with zero compromise on quality and sustainability.
            </p>
            
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.025rem", fontStyle: "italic", borderLeft: "3px solid var(--cyan-400)", paddingLeft: "1.25rem", margin: "0.5rem 0" }}>
              &ldquo;Our journey is built on deep-rooted trust—both with the local fishing communities who supply our raw materials and the international partners who rely on our consistency. We don&apos;t just export seafood; we export trust and marine excellence.&rdquo;
            </p>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem" }}>
              Under his visionary guidance, the company has transitioned from a local sourcing vendor to a fully certified exporter approved by{' '}
              <strong style={{ color: "var(--cyan-400)" }}>USFDA, HACCP, and BRCGS</strong>. He continues to spearhead technological advancement and cold-chain improvements to keep ABM Marine Products at the absolute forefront of the global industry.
            </p>

            {/* Quick Pillars of Leadership */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontSize: "1.75rem", color: "var(--cyan-400)" }}>⚓</span>
                <div>
                  <h5 style={{ color: "var(--text-primary)", fontSize: "0.9rem", fontWeight: 700, margin: 0 }}>Decades of Expertise</h5>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.75rem", margin: 0 }}>Deep roots in marine industry</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontSize: "1.75rem", color: "var(--teal-400)" }}>🛡️</span>
                <div>
                  <h5 style={{ color: "var(--text-primary)", fontSize: "0.9rem", fontWeight: 700, margin: 0 }}>Sourcing Network</h5>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.75rem", margin: 0 }}>Direct fisherman partnerships</p>
                </div>
              </div>
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
