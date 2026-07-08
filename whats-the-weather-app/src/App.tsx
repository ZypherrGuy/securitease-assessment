import { Header } from "./components";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>{/* TODO: Current weather and selected weather display */}</main>
      <section>{/* TODO: Forecast and history */}</section>
    </div>
  );
}

export default App;
