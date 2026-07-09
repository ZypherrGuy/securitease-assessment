import { useAtom } from "jotai";
import { Header, Hero, WeatherCard, WeatherRangeSection } from "./components";
import { useWeatherSearch } from "./hooks";
import { selectedDayAtom } from "./atoms";
import styles from "./App.module.css";

export function App() {
  const { state, search } = useWeatherSearch();
  const [selectedDay, setSelectedDay] = useAtom(selectedDayAtom);

  return (
    <div className={styles.app}>
      <Header />
      <Hero onSearch={search} />
      <main className={styles.main}>
        {state.status === "loading" && (
          <p className={styles.status}>Loading...</p>
        )}
        {state.status === "error" && (
          <p className={styles.status}>{state.error}</p>
        )}
        {state.status === "success" && (
          <WeatherCard
            data={selectedDay ?? state.data.current}
            location={state.data.location}
          />
        )}
      </main>
      {state.status === "success" && (
        <section className={styles.ranges}>
          <WeatherRangeSection
            title="Past 3 Days"
            variant="history"
            days={state.data.history}
            selectedDate={selectedDay?.date}
            onSelectDay={setSelectedDay}
          />
          <WeatherRangeSection
            title="3-Day Forecast"
            variant="forecast"
            days={state.data.forecast}
            selectedDate={selectedDay?.date}
            onSelectDay={setSelectedDay}
          />
        </section>
      )}
    </div>
  );
}
