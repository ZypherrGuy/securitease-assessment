import type { VisualCrossingTimelineResponse } from "../types";

const API_KEY = import.meta.env.VITE_VISUALCROSSING_API_KEY;
const BASE_URL = import.meta.env.VITE_VISUALCROSSING_API_BASE_URL;

export async function getWeatherRange(
  query: string,
  startDate: string,
  endDate: string,
): Promise<VisualCrossingTimelineResponse> {
  const url =
    `${BASE_URL}/${encodeURIComponent(query)}/${startDate}/${endDate}` +
    `?key=${API_KEY}&unitGroup=metric&include=days&elements=datetime,temp,feelslike,humidity,windspeed,conditions,icon`;

  const response = await fetch(url);

  if (!response.ok) {
    const message = await response.text();
    throw new Error(
      message ||
        `Visual Crossing request failed with status ${response.status}`,
    );
  }

  return response.json();
}
