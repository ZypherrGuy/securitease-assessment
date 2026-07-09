import type { WeatherData } from "../../types";

const CACHE_TTL_MS = 20 * 60 * 1000;

export function getCachedWeather(query: string): WeatherData | null {
  const rawData = localStorage.getItem(query.trim().toLowerCase());
  if (!rawData) return null;

  const { data, cachedAt } = JSON.parse(rawData);
  return Date.now() - cachedAt > CACHE_TTL_MS ? null : data;
}

export function setCachedWeather(query: string, data: WeatherData): void {
  localStorage.setItem(
    query.trim().toLowerCase(),
    JSON.stringify({ data, cachedAt: Date.now() }),
  );
}
