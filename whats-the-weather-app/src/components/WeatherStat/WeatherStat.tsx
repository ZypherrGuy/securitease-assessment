import styles from "./WeatherStat.module.css";

interface WeatherStatProps {
  label: string;
  value: string;
}

export function WeatherStat({ label, value }: WeatherStatProps) {
  return (
    <div className={styles.stat}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}
