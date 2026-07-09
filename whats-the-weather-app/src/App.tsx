import { Header, WeatherCard } from "./components";
import { useWeatherSearch } from "./hooks";
import styles from "./App.module.css";

function App() {
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
      <section>
        {/* TODO: replace this with the real forecast/history grid */}
        {state.status === "success" && (
          <pre>{JSON.stringify(state.data.history, null, 2)}</pre>
        )}
      </section>
    </div>
  );
}

export default App;
