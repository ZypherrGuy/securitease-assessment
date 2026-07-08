import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <picture className={styles.logoWrapper}>
        <source
          media="(max-width: 768px)"
          srcSet="/assets/logo/weather-logo-mobile.png"
        />
        <img
          src="/assets/logo/weather_logo_desktop.png"
          alt="What's the Weather"
          className={styles.logo}
        />
      </picture>
      {/* TODO: add the search input here when I am  ready  */}
    </header>
  );
}

export default Header;
