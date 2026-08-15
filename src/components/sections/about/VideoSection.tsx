"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setHasStarted(true);
    };
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setHasStarted(false);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section 
      id="corporate-video" 
      className="section-pad" 
      style={{ 
        background: "var(--ocean-800)", 
        position: "relative", 
        overflow: "hidden",
        borderTop: "1px solid rgba(34,211,238,0.05)",
        borderBottom: "1px solid rgba(34,211,238,0.05)"
      }}
    >
      {/* Glow Orbs */}
      <div className="orb orb-cyan" aria-hidden="true" style={{ top: "20%", left: "-10%", width: "450px", height: "450px", opacity: 0.06 }} />
      <div className="orb orb-teal" aria-hidden="true" style={{ bottom: "20%", right: "-10%", width: "450px", height: "450px", opacity: 0.05 }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader
          label="Corporate Video"
          heading={<>Inside <span className="gradient-text">ABM Marine Products</span></>}
          sub="Take a visual journey through our state-of-the-art processing facility, quality inspection, and international export operations."
        />

        <div style={{ marginTop: "3.5rem", display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              width: "100%", 
              maxWidth: "1000px", 
              position: "relative" 
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Outer Glow Wrapper */}
            <div
              style={{
                position: "absolute",
                inset: "-8px",
                background: "linear-gradient(135deg, var(--cyan-400), var(--teal-400))",
                borderRadius: "32px",
                opacity: isHovered ? 0.25 : 0.12,
                filter: "blur(24px)",
                transition: "opacity 0.5s ease",
                zIndex: 0
              }}
            />

            {/* Corner Accent Ornaments */}
            <div 
              style={{
                position: "absolute",
                top: "-16px",
                left: "-16px",
                width: "40px",
                height: "40px",
                borderTop: "3px solid var(--cyan-400)",
                borderLeft: "3px solid var(--cyan-400)",
                borderTopLeftRadius: "16px",
                zIndex: 1,
                opacity: 0.7,
                transition: "transform 0.3s ease",
                transform: isHovered ? "translate(-4px, -4px)" : "translate(0, 0)"
              }}
            />
            <div 
              style={{
                position: "absolute",
                bottom: "-16px",
                right: "-16px",
                width: "40px",
                height: "40px",
                borderBottom: "3px solid var(--cyan-400)",
                borderRight: "3px solid var(--cyan-400)",
                borderBottomRightRadius: "16px",
                zIndex: 1,
                opacity: 0.7,
                transition: "transform 0.3s ease",
                transform: isHovered ? "translate(4px, 4px)" : "translate(0, 0)"
              }}
            />

            {/* Main Video Container */}
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(34, 211, 238, 0.25)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6)",
                background: "var(--ocean-900)",
                position: "relative",
                zIndex: 2,
                aspectRatio: "16/9"
              }}
            >
              <video
                ref={videoRef}
                src="https://uvnrhyvjcp4jtx2d.public.blob.vercel-storage.com/Abm%20Vedio-Website.mp4"
                preload="metadata"
                controls={hasStarted}
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />

              {/* Custom Poster Overlay / Play Overlay */}
              <AnimatePresence>
                {!hasStarted && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onClick={handlePlayToggle}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "radial-gradient(circle at center, rgba(6, 22, 41, 0.7) 0%, rgba(1, 8, 16, 0.95) 100%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      zIndex: 3,
                    }}
                  >
                    {/* Background Logo Watermark */}
                    <div 
                      style={{
                        position: "absolute",
                        width: "300px",
                        height: "300px",
                        opacity: 0.08,
                        filter: "blur(12px)",
                        backgroundImage: "url('/logo.jpeg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        pointerEvents: "none",
                        transform: "scale(1.25)",
                        zIndex: 0
                      }} 
                    />

                    {/* Logo & Play Controls Wrapper */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }} className="scale-[0.8] sm:scale-[0.9] md:scale-100 transition-transform duration-300">
                      {/* Centered Logo Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        style={{
                          marginBottom: "1.25rem",
                          padding: "0.85rem",
                          borderRadius: "20px",
                          background: "var(--glass-bg)",
                          border: "1px solid rgba(34, 211, 238, 0.25)",
                          backdropFilter: "blur(12px)",
                          boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <Image
                          src="/logo.jpeg"
                          alt="ABM Marine Logo"
                          width={75}
                          height={75}
                          style={{
                            width: "auto",
                            height: "auto",
                            maxWidth: "75px",
                            maxHeight: "75px",
                            objectFit: "contain",
                            borderRadius: "10px",
                          }}
                        />
                      </motion.div>

                      {/* Ripple play button */}
                      <div style={{ position: "relative", marginTop: "0.25rem" }}>
                        {/* Pulse rings */}
                        <motion.div
                          animate={{
                            scale: [1, 1.4, 1.6, 1],
                            opacity: [0.6, 0.3, 0, 0.6]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          style={{
                            position: "absolute",
                            inset: "-12px",
                            border: "2px solid var(--cyan-400)",
                            borderRadius: "50%",
                          }}
                        />
                        <motion.div
                          animate={{
                            scale: [1, 1.25, 1.45, 1],
                            opacity: [0.5, 0.2, 0, 0.5]
                          }}
                          transition={{
                            duration: 2.5,
                            delay: 1.25,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          style={{
                            position: "absolute",
                            inset: "-6px",
                            border: "2px solid var(--teal-400)",
                            borderRadius: "50%",
                          }}
                        />

                        {/* Main Play Icon Glass Circle */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            background: "var(--glass-bg-opaque)",
                            border: "1px solid rgba(34, 211, 238, 0.4)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
                            position: "relative",
                            zIndex: 2,
                          }}
                        >
                          {/* Play Triangle SVG */}
                          <svg
                            width="18"
                            height="22"
                            viewBox="0 0 24 28"
                            fill="none"
                            style={{
                              marginLeft: "2px",
                              color: "var(--cyan-400)",
                            }}
                          >
                            <path
                              d="M22.5 12.268C23.8333 13.0378 23.8333 14.9622 22.5 15.732L4.5 26.1244C3.16666 26.8942 1.5 25.932 1.5 24.3923L1.5 3.60769C1.5 2.06804 3.16667 1.10579 4.5 1.87559L22.5 12.268Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Action Text */}
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 0.9 }}
                        transition={{ delay: 0.2 }}
                        style={{
                          marginTop: "1rem",
                          textAlign: "center",
                        }}
                      >
                        <h4
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            margin: 0,
                            letterSpacing: "0.05em",
                          }}
                        >
                          Play Corporate Video
                        </h4>
                        <p
                          style={{
                            fontSize: "0.7rem",
                            color: "var(--cyan-400)",
                            marginTop: "0.15rem",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          Experience ABM Marine
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
