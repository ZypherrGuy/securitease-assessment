import { atom } from "jotai";
import type { WeatherData } from "../types";

export type WeatherState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: WeatherData }
  | { status: "error"; error: string };

export const weatherAtom = atom<WeatherState>({ status: "idle" });
