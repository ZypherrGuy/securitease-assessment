import { describe, it, expect } from "vitest";
import { getWeatherIconUrl } from "./weatherIcons";

describe("getWeatherIconUrl", () => {
  it("should return the matching icon for a known condition", () => {
    expect(getWeatherIconUrl("rain")).toBe("/assets/icons/weather/rain.png");
  });

  it("should map conditions to their closest fallback asset", () => {
    expect(getWeatherIconUrl("sleet")).toBe(
      "/assets/icons/weather/rain-snow.png",
    );
    expect(getWeatherIconUrl("showers-day")).toBe(
      "/assets/icons/weather/rain.png",
    );
  });

  it("should fall back to the cloudy icon for an unknown value", () => {
    expect(getWeatherIconUrl("tornado")).toBe(
      "/assets/icons/weather/cloudy.png",
    );
  });
});
