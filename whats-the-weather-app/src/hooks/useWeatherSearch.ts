import { useAtom } from "jotai";
import { weatherAtom } from "../atoms";
import { getCurrentWeather, getWeatherRange } from "../services";
import { mapToDayWeather, mapVisualCrossingDay, shiftDate } from "../utils";

const RANGE_DAYS = 3;

export function useWeatherSearch() {
  const [state, setState] = useAtom(weatherAtom);

  async function search(query: string) {
    setState({ status: "loading" });

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

      setState({ status: "success", data: { current, forecast, history } });
    } catch (error) {
      setState({
        status: "error",
        error: error instanceof Error ? error.message : "Oh no! Mission Failed",
      });
    }
  }

  return { state, search };
}
