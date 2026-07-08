import type { DayWeather } from "../types";
import WeatherStat from "./WeatherStat";
import styles from "./WeatherCard.module.css";

interface WeatherCardProps {
  data: DayWeather;
}

function formatDisplayDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function WeatherCard({ data }: WeatherCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.primary}>
        <img
          src={data.iconUrl}
          alt={data.description}
          className={styles.icon}
        />
        <p className={styles.temperature}>{Math.round(data.temperature)}°</p>
      </div>

      <div className={styles.info}>
        <p className={styles.date}>{formatDisplayDate(data.date)}</p>
        {data.time && <p className={styles.time}>{data.time}</p>}
        <p className={styles.description}>{data.description}</p>
      </div>

      <div className={styles.stats}>
        <WeatherStat label="Feels like" value={`${Math.round(data.feelsLike)}°`} />
        <WeatherStat label="Humidity" percentage={data.humidity} />
        <WeatherStat label="Wind" value={`${data.windSpeed} km/h`} />
      </div>
    </article>
  );
}

export default WeatherCard;
