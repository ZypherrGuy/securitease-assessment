import type { WeatherStackCurrentResponse } from "../types";

const API_KEY = import.meta.env.VITE_WEATHERSTACK_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHERSTACK_API_BASEURL;

export async function getCurrentWeather(
  query: string
): Promise<WeatherStackCurrentResponse> {
  const url = `${BASE_URL}/current?access_key=${API_KEY}&query=${encodeURIComponent(query)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`WeatherStack request failed with status ${response.status}`);
  }

  const data = await response.json();

  if (data.success === false) {
    throw new Error(data.error?.info ?? "WeatherStack request failed");
  }

  return data as WeatherStackCurrentResponse;
}
