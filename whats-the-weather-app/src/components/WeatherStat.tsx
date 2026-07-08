import styles from "./WeatherStat.module.css";

interface WeatherStatProps {
  label: string;
  value?: string;
  percentage?: number;
}

function WeatherStat({ label, value, percentage }: WeatherStatProps) {
  return (
    <div className={styles.stat}>
      <span className={styles.label}>{label}</span>
      {value && <span className={styles.value}>{value}</span>}
      {percentage !== undefined && (
        <div className={styles.track}>
          <div className={styles.fill} style={{ width: `${percentage}%` }} />
        </div>
      )}
    </div>
  );
}

export default WeatherStat;
