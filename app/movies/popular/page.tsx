"use client";

import { useState } from "react";

import MoviesDisplay from "@/app/components/movie/MoviesDisplay";
import { usePopularMovies } from "@/app/lib/hooks";

export default function PopularMovies() {
  const [page, setPage] = useState<number>(1);
  const { data, error, isLoading } = usePopularMovies(page);
  return (
    <main>
      <h1>Popular Movies</h1>
      <MoviesDisplay
        movieData={data}
        error={error}
        isLoading={isLoading}
        showAddButton={true}
        showRemoveButton={false}
      />
    </main>
  );
}
