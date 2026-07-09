import type { DayWeather } from "../types";
import { WeatherStat } from "./WeatherStat";
import styles from "./WeatherRangeCard.module.css";

interface WeatherRangeCardProps {
  data: DayWeather;
  isSelected: boolean;
  onSelect: () => void;
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

export function WeatherRangeCard({
  data,
  isSelected,
  onSelect,
}: WeatherRangeCardProps) {
  return (
    <article
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onSelect();
        }
      }}
    >
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
