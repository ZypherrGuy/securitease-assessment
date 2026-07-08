import { Header } from "./components";
import { useCurrentWeather } from "./hooks";
import styles from "./App.module.css";

function App() {
  const { state, search } = useCurrentWeather();

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <main>
        {/* TODO: this will be replaced with the real Current Weather card component */}
        {/* Just here for testing */}
        {state.status === "loading" && <p>Loading...</p>}
        {state.status === "error" && <p>{state.error}</p>}
        {state.status === "success" && (
          <pre>{JSON.stringify(state.data, null, 2)}</pre>
        )}
      </main>
      <section>{/* TODO: Forecast and history */}</section>
    </div>
  );
}

export default App;
