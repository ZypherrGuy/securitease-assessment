import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.mark} />
        <span className={styles.wordmark}>What's The Weather?</span>
      </div>
      <p className={styles.tagline}>Live weather, wherever you are</p>
    </header>
  );
}
