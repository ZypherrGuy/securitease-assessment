import { useEffect, useRef, useState } from "react";
import type { SubmitEvent } from "react";
import styles from "./Search.module.css";

interface SearchProps {
  onSearch: (query: string) => void;
  isExpanded: boolean;
  onToggle: () => void;
}

function Search({ onSearch, isExpanded, onToggle }: SearchProps) {
  const [query, setQuery] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onToggle();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded, onToggle]);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = query.trim();
    if (trimmed) {
      onSearch(trimmed);
    }
  }

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${isExpanded ? styles.expanded : ""}`}
    >
      <button
        type="button"
        className={styles.trigger}
        onClick={onToggle}
        aria-label="Open search"
      >
        <img
          src="/assets/icons/search_white.svg"
          alt=""
          className={styles.triggerIcon}
        />
      </button>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search location..."
          aria-label="Search location"
        />
        <button type="submit" className={styles.submitButton} aria-label="Search">
          <img
            src="/assets/icons/search_black.svg"
            alt=""
            className={styles.submitIcon}
          />
        </button>
      </form>
    </div>
  );
}

export default Search;
