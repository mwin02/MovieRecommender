"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function SearchBar() {
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
    <div>
      <label htmlFor="name">Search For a Movie</label>
      <input
        type="text"
        name="movieName"
        onChange={(e) => {
          onTextChange(e.target.value);
        }}
      />
      <button onClick={onSearchButtonClick}>Search</button>
    </div>
  );
}
