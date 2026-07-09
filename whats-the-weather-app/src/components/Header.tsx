import { useState } from "react";
import { Search } from "./Search";
import styles from "./Header.module.css";

interface HeaderProps {
  onSearch: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <header className={styles.header}>
      <picture
        className={`${styles.logoWrapper} ${
          isSearchExpanded ? styles.logoHidden : ""
        }`}
      >
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
      <Search
        onSearch={onSearch}
        isExpanded={isSearchExpanded}
        onToggle={() => setIsSearchExpanded((prev) => !prev)}
      />
    </header>
  );
}
