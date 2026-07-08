import type { DayWeather, WeatherStackCurrentResponse } from "../types";

export function mapToDayWeather(raw: WeatherStackCurrentResponse): DayWeather {
  const { location, current } = raw;

  return {
    date: location.localtime.split(" ")[0], // I seperated the Date from the full date/time reponse
    time: location.localtime.split(" ")[1], // As per above
    temperature: current.temperature,
    feelsLike: current.feelslike,
    description: current.weather_descriptions[0],
    iconUrl: current.weather_icons[0],
    humidity: current.humidity,
    windSpeed: current.wind_speed,
  };
}
