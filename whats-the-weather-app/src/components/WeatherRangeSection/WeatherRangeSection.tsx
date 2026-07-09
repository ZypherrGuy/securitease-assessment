import type { DayWeather } from "../../types";
import { WeatherRangeCard } from "../WeatherRangeCard/WeatherRangeCard";
import styles from "./WeatherRangeSection.module.css";

interface WeatherRangeSectionProps {
  title: string;
  days: DayWeather[];
  selectedDate?: string;
  onSelectDay: (day: DayWeather) => void;
  variant?: "history" | "forecast";
}

export function WeatherRangeSection({
  title,
  days,
  selectedDate,
  onSelectDay,
  variant = "history",
}: WeatherRangeSectionProps) {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {days.map((day) => (
          <WeatherRangeCard
            key={day.date}
            data={day}
            isSelected={day.date === selectedDate}
            onSelect={() => onSelectDay(day)}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
}
