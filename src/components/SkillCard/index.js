import React from "react";
import styles from "./SkillCard.module.css";

export default function SkillCard({ title, img, description, gradient }) {
  return (
    <div className={styles.card}>
      <div className={styles.background} style={{ background: gradient }} />

      <div className={styles.logo}>
        <img src={img} alt={title} className={styles.logoImg} />
      </div>

      <div className={`${styles.box} ${styles.box1}`}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={`${styles.box} ${styles.box2}`} />
      <div className={`${styles.box} ${styles.box3}`} />
      <div className={`${styles.box} ${styles.box4}`} />
    </div>
  );
}
