import { useAtom } from "jotai";
import { currentWeatherAtom } from "../atoms";
import { getCurrentWeather } from "../services";
import { mapToDayWeather } from "../utils";

export function useCurrentWeather() {
  const [state, setState] = useAtom(currentWeatherAtom);

  async function search(query: string) {
    setState({ status: "loading" });

    try {
      const raw = await getCurrentWeather(query);
      const data = mapToDayWeather(raw);
      setState({ status: "success", data });
    } catch (error) {
      setState({
        status: "error",
        error: error instanceof Error ? error.message : "Oh no! Mission Failed",
      });
    }
  }

  return { state, search };
}
