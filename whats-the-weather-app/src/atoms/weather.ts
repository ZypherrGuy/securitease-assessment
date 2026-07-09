import { atom } from "jotai";
import type { DayWeather, WeatherData } from "../types";

export type WeatherState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: WeatherData }
  | { status: "error"; error: string };

export const weatherAtom = atom<WeatherState>({ status: "idle" });

// Just want to make sure that the main display always falls back to today's weather (null)
export const selectedDayAtom = atom<DayWeather | null>(null);
