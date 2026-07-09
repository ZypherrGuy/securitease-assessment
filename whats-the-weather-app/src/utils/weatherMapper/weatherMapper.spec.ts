import { describe, it, expect } from "vitest";
import { mapToDayWeather } from "./weatherMapper";
import type { WeatherStackCurrentResponse } from "../../types";

const raw: WeatherStackCurrentResponse = {
  location: {
    name: "New York",
    country: "United States of America",
    region: "New York",
    lat: "40.714",
    lon: "-74.006",
    timezone_id: "America/New_York",
    localtime: "2026-07-09 20:07",
    localtime_epoch: 1783541220,
    utc_offset: "-4.0",
  },
  current: {
    observation_time: "12:07 AM",
    temperature: 27,
    weather_code: 113,
    weather_icons: [
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
    ],
    weather_descriptions: ["Sunny"],
    wind_speed: 22,
    wind_degree: 181,
    wind_dir: "S",
    pressure: 1015,
    precip: 0,
    humidity: 62,
    cloudcover: 0,
    feelslike: 30,
  },
};

describe("mapToDayWeather", () => {
  it("should map raw WeatherStack fields to the domain shape", () => {
    expect(mapToDayWeather(raw)).toEqual({
      date: "2026-07-09",
      time: "20:07",
      temperature: 27,
      feelsLike: 30,
      description: "Sunny",
      iconUrl:
        "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      humidity: 62,
      windSpeed: 22,
    });
  });

  it("should split the date and time from the full localtime string", () => {
    const result = mapToDayWeather(raw);
    expect(result.date).toBe("2026-07-09");
    expect(result.time).toBe("20:07");
  });
});
