import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img
          src="/assets/icons/sun-icon.png"
          alt=""
          className={styles.mark}
        />
        <span className={styles.wordmark}>What's The Weather?</span>
      </div>
    </header>
  );
}
