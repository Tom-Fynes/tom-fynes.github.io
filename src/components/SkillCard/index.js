import React, { useRef, useState, useCallback } from "react";
import styles from "./SkillCard.module.css";

const TILT_RESET_DURATION_MS = 300;

export default function SkillCard({ title, img, description }) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -20;
    const rotY = ((x - cx) / cx) * 20;

    el.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;

    if (glareRef.current) {
      const pctX = (x / rect.width) * 100;
      const pctY = (y / rect.height) * 100;
      glareRef.current.style.setProperty("--mx", `${pctX}%`);
      glareRef.current.style.setProperty("--my", `${pctY}%`);
    }
  }, []);

  const handleMouseEnter = useCallback(() => setHovered(true), []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    const el = cardRef.current;
    if (el) {
      el.style.transition = `transform ${TILT_RESET_DURATION_MS}ms ease-in-out`;
      el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
      setTimeout(() => {
        if (el) el.style.transition = "";
      }, TILT_RESET_DURATION_MS);
    }
  }, []);

  const cardClass = `${styles.card}${hovered ? " " + styles.hovered : ""}`;

  return (
    <div
      className={styles.container}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={cardRef} className={cardClass}>
        {/* Glare overlay (tracks mouse) */}
        <div ref={glareRef} className={styles.glare} />

        {/* Animated scan line */}
        <div className={styles.scanLine} />

        {/* Horizontal cyber lines */}
        <div className={styles.cyberLines}>
          <span /><span /><span /><span />
        </div>

        {/* Corner bracket decorations */}
        <div className={styles.corners}>
          <span /><span /><span /><span />
        </div>

        {/* Radial glow blobs */}
        <div className={styles.glows}>
          <div className={`${styles.glow} ${styles.glow1}`} />
          <div className={`${styles.glow} ${styles.glow2}`} />
          <div className={`${styles.glow} ${styles.glow3}`} />
        </div>

        {/* Floating particles */}
        <div className={styles.particles}>
          <span className={styles.particle} />
          <span className={styles.particle} />
          <span className={styles.particle} />
          <span className={styles.particle} />
          <span className={styles.particle} />
          <span className={styles.particle} />
        </div>

        {/* Skill icon */}
        <div className={styles.iconWrap}>
          <img src={img} alt={title} className={styles.icon} />
        </div>

        {/* Skill title */}
        <div className={styles.title}>{title}</div>

        {/* Description — revealed on hover */}
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
