import type { DayWeather } from "../types";
import { WeatherStat } from "./WeatherStat";
import styles from "./WeatherRangeCard.module.css";

interface WeatherRangeCardProps {
  data: DayWeather;
}

function formatDayLabel(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const weekday = date.toLocaleDateString(undefined, { weekday: "short" });
  const monthDay = date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
  return `${weekday}, ${monthDay}`;
}

export function WeatherRangeCard({ data }: WeatherRangeCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.day}>{formatDayLabel(data.date)}</span>
      <img src={data.iconUrl} alt={data.description} className={styles.icon} />
      <span className={styles.description}>{data.description}</span>
      <span className={styles.temperature}>{Math.round(data.temperature)}°</span>
      <div className={styles.stats}>
        <WeatherStat label="Humidity" value={`${data.humidity}%`} />
        <WeatherStat label="Wind" value={`${data.windSpeed} km/h`} />
      </div>
    </article>
  );
}
