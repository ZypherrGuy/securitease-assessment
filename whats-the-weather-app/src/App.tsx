import { Header, WeatherCard } from "./components";
import { useCurrentWeather } from "./hooks";
import styles from "./App.module.css";

function App() {
  const { state, search } = useCurrentWeather();

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <main className={styles.main}>
        {state.status === "loading" && <p>Loading...</p>}
        {state.status === "error" && <p>{state.error}</p>}
        {state.status === "success" && <WeatherCard data={state.data} />}
      </main>
      <section>{/* TODO: Forecast and history */}</section>
    </div>
  );
}

export default App;
