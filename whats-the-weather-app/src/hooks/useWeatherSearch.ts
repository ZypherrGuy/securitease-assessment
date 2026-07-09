import { useAtom } from "jotai";
import { weatherAtom } from "../atoms";
import { getCurrentWeather, getWeatherRange } from "../services";
import { mapToDayWeather, mapVisualCrossingDay, shiftDate } from "../utils";

const HISTORY_DAYS = 3;

export function useWeatherSearch() {
  const [state, setState] = useAtom(weatherAtom);

  async function search(query: string) {
    setState({ status: "loading" });

    try {
      const currentRaw = await getCurrentWeather(query);
      const current = mapToDayWeather(currentRaw);

      const historyStart = shiftDate(current.date, -HISTORY_DAYS);
      const historyEnd = shiftDate(current.date, -1);
      const historyRaw = await getWeatherRange(query, historyStart, historyEnd);
      const history = historyRaw.days.map(mapVisualCrossingDay);

      setState({ status: "success", data: { current, forecast: [], history } });
    } catch (error) {
      setState({
        status: "error",
        error: error instanceof Error ? error.message : "Oh no! Mission Failed",
      });
    }
  }

  return { state, search };
}
