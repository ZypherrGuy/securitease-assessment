import { useAtom, useSetAtom } from "jotai";
import { weatherAtom, selectedDayAtom } from "../atoms";
import { getCurrentWeather, getWeatherRange } from "../services";
import {
  mapToDayWeather,
  mapVisualCrossingDay,
  shiftDate,
  getCachedWeather,
  setCachedWeather,
  getWeatherErrorMessage,
} from "../utils";

const RANGE_DAYS = 3;

export function useWeatherSearch() {
  const [state, setState] = useAtom(weatherAtom);
  const setSelectedDay = useSetAtom(selectedDayAtom);

  async function search(query: string) {
    setState({ status: "loading" });
    setSelectedDay(null);

    const cached = getCachedWeather(query);
    if (cached) {
      setState({ status: "success", data: cached });
      return;
    }

    try {
      const currentRaw = await getCurrentWeather(query);
      const current = mapToDayWeather(currentRaw);

      const rangeStart = shiftDate(current.date, -RANGE_DAYS);
      const rangeEnd = shiftDate(current.date, RANGE_DAYS);
      const rangeRaw = await getWeatherRange(query, rangeStart, rangeEnd);

      const history = rangeRaw.days
        .filter((day) => day.datetime < current.date)
        .map(mapVisualCrossingDay);

      const forecast = rangeRaw.days
        .filter((day) => day.datetime > current.date)
        .map(mapVisualCrossingDay);

      const data = {
        location: currentRaw.location.name,
        current,
        forecast,
        history,
      };
      setCachedWeather(query, data);
      setState({ status: "success", data });
    } catch (error) {
      setState({
        status: "error",
        error: getWeatherErrorMessage(error),
      });
    }
  }

  return { state, search };
}
