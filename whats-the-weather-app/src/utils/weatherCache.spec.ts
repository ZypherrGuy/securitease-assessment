import { describe, it, expect, beforeEach } from "vitest";
import { getCachedWeather, setCachedWeather } from "./weatherCache";
import type { WeatherData } from "../types";

const sampleData: WeatherData = {
  current: {
    date: "2026-07-09",
    temperature: 20,
    feelsLike: 19,
    description: "Sunny",
    iconUrl: "/icon.png",
    humidity: 50,
    windSpeed: 10,
  },
  forecast: [],
  history: [],
};

describe("weatherCache", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should return null when nothing is cached", () => {
    expect(getCachedWeather("London")).toBeNull();
  });

  it("should return the cached data when it is still fresh", () => {
    setCachedWeather("London", sampleData);
    expect(getCachedWeather("London")).toEqual(sampleData);
  });

  it("should normalize the query so casing and whitespace don't matter", () => {
    setCachedWeather("  London  ", sampleData);
    expect(getCachedWeather("london")).toEqual(sampleData);
  });

  it("should return null once the cached entry has expired", () => {
    const expiredEntry = {
      data: sampleData,
      cachedAt: Date.now() - 21 * 60 * 1000,
    };
    localStorage.setItem("london", JSON.stringify(expiredEntry));

    expect(getCachedWeather("london")).toBeNull();
  });
});
