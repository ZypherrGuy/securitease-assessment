import { describe, it, expect } from "vitest";
import { getWeatherErrorMessage } from "./weatherError";

describe("getWeatherErrorMessage", () => {
  it("should explain a too-short address error", () => {
    const error = new Error(
      "Bad API Request:Address is too short to be uniquely identified",
    );
    expect(getWeatherErrorMessage(error)).toBe(
      'That location isn\'t specific enough. Try adding a region or country, e.g. "Paris, France".',
    );
  });

  it("should explain a generic HTTP failure status", () => {
    const error = new Error("WeatherStack request failed with status 400");
    expect(getWeatherErrorMessage(error)).toBe(
      "We couldn't find that location. Check the spelling or add a country.",
    );
  });

  it("should explain a not-found error", () => {
    const error = new Error("Location does not exist");
    expect(getWeatherErrorMessage(error)).toBe(
      "We couldn't find that location. Check the spelling and try again.",
    );
  });

  it("should fall back to a generic message for anything else", () => {
    expect(getWeatherErrorMessage(new Error("network offline"))).toBe(
      "Something went wrong fetching the weather. Please try again.",
    );
    expect(getWeatherErrorMessage("not an Error instance")).toBe(
      "Something went wrong fetching the weather. Please try again.",
    );
  });
});
