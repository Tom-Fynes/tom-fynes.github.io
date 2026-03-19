import React from "react";
import styles from "./StatCard.module.css";

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}

export default function StatCard({ icon, value, label }: StatCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
