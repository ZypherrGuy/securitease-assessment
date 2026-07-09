import { useAtom } from "jotai";
import { Header, WeatherCard, WeatherRangeSection } from "./components";
import { useWeatherSearch } from "./hooks";
import { selectedDayAtom } from "./atoms";
import styles from "./App.module.css";

export function App() {
  const { state, search } = useWeatherSearch();
  const [selectedDay, setSelectedDay] = useAtom(selectedDayAtom);

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <main className={styles.main}>
        {state.status === "loading" && <p>Loading...</p>}
        {state.status === "error" && <p>{state.error}</p>}
        {state.status === "success" && (
          <WeatherCard data={selectedDay ?? state.data.current} />
        )}
      </main>
      <section className={styles.ranges}>
        {state.status === "success" && (
          <>
            <WeatherRangeSection
              title="Next 3 Days"
              days={state.data.forecast}
              selectedDate={selectedDay?.date}
              onSelectDay={setSelectedDay}
            />
            <WeatherRangeSection
              title="Past 3 Days"
              days={state.data.history}
              selectedDate={selectedDay?.date}
              onSelectDay={setSelectedDay}
            />
          </>
        )}
      </section>
    </div>
  );
}
