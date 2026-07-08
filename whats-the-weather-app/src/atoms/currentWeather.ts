import { atom } from "jotai";
import type { DayWeather } from "../types";

export type WeatherState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: DayWeather }
  | { status: "error"; error: string };

export const currentWeatherAtom = atom<WeatherState>({ status: "idle" });
