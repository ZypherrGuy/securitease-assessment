import { describe, it, expect } from "vitest";
import { mapVisualCrossingDay } from "./visualCrossingMapper";
import type { VisualCrossingDay } from "../../types";

const raw: VisualCrossingDay = {
  datetime: "2026-07-06",
  temp: 25.3,
  feelslike: 24.6,
  humidity: 44.9,
  windspeed: 32.1,
  conditions: "Partially cloudy",
  icon: "partly-cloudy-day",
};

describe("mapVisualCrossingDay", () => {
  it("should map raw Visual Crossing fields to the domain shape", () => {
    expect(mapVisualCrossingDay(raw)).toEqual({
      date: "2026-07-06",
      temperature: 25.3,
      feelsLike: 24.6,
      description: "Partially cloudy",
      iconUrl: "/assets/icons/weather/partly-cloudy-day.png",
      humidity: 44.9,
      windSpeed: 32.1,
    });
  });

  it("should fall back to the cloudy icon for an unrecognized condition", () => {
    const result = mapVisualCrossingDay({ ...raw, icon: "tornado-is-brewing" });
    expect(result.iconUrl).toBe("/assets/icons/weather/cloudy.png");
  });
});
