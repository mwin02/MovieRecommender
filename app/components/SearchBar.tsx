"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function SearchBar({
  styles,
}: {
  styles: { [key: string]: string };
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  function onTextChange(term: string) {
    setSearchTerm(term);
  }

  function onSearchButtonClick() {
    console.log(searchTerm);
    router.push(`/movies/search?query=${encodeURIComponent(searchTerm)}`);
  }

  return (
    <div className={styles.search}>
      <form action="/movies/search" className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Search For a Movie
        </label>
        <input
          className={styles.input}
          type="text"
          name="query"
          onChange={(e) => {
            onTextChange(e.target.value);
          }}
        />
        <button type="submit" className={styles.button}>
          <img src="/search.svg" alt="Search" />
        </button>
      </form>
    </div>
  );
}
