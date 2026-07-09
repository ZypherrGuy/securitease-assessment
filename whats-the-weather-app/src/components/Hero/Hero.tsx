import { Search } from "../Search/Search";
import styles from "./Hero.module.css";

interface HeroProps {
  onSearch: (query: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`${styles.decor} ${styles.decorOne}`} />
      <div className={`${styles.decor} ${styles.decorTwo}`} />
      <div className={`${styles.decor} ${styles.decorThree}`} />
      <div className={styles.content}>
        <h1 className={styles.heading}>Know the sky before you step outside</h1>
        <p className={styles.subtext}>
          Search any city for current conditions, recent history, and the
          3-day outlook.
        </p>
        <Search onSearch={onSearch} />
      </div>
    </section>
  );
}
