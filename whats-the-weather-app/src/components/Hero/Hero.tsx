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
        <h1 className={styles.heading}>Do you know what the weather is?</h1>
        <p className={styles.subtext}>Search for the location below</p>
        <Search onSearch={onSearch} />
      </div>
    </section>
  );
}
