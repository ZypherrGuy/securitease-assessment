import { useState } from "react";
import type { SubmitEvent } from "react";
import styles from "./Search.module.css";

interface SearchProps {
  onSearch: (query: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = query.trim();
    if (trimmed) {
      onSearch(trimmed);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search a city..."
        aria-label="Search a city"
      />
      <button type="submit" className={styles.submitButton}>
        Search
      </button>
    </form>
  );
}
