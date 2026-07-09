import { Header, WeatherCard, WeatherRangeSection } from "./components";
import { useWeatherSearch } from "./hooks";
import styles from "./App.module.css";

export function App() {
  const { state, search } = useWeatherSearch();

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <main className={styles.main}>
        {state.status === "loading" && <p>Loading...</p>}
        {state.status === "error" && <p>{state.error}</p>}
        {state.status === "success" && (
          <WeatherCard data={state.data.current} />
        )}
      </main>
      <section className={styles.ranges}>
        {state.status === "success" && (
          <>
            <WeatherRangeSection title="Next 3 Days" days={state.data.forecast} />
            <WeatherRangeSection title="Past 3 Days" days={state.data.history} />
          </>
        )}
      </section>
    </div>
  );
}
