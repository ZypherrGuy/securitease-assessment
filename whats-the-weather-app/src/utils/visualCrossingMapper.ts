import type { DayWeather, VisualCrossingDay } from "../types";
import { getWeatherIconUrl } from "./weatherIcons";

export function mapVisualCrossingDay(day: VisualCrossingDay): DayWeather {
  return {
    date: day.datetime,
    temperature: day.temp,
    feelsLike: day.feelslike,
    description: day.conditions,
    iconUrl: getWeatherIconUrl(day.icon),
    humidity: day.humidity,
    windSpeed: day.windspeed,
  };
}
