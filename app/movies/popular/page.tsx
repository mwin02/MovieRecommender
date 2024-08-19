"use client";
import useSWR from "swr";
import { useState } from "react";
import { MovieList } from "@/app/lib/types";
import MoviesDisplay from "@/app/components/movie_display/movie_display";
import { apiFetcher } from "@/app/lib/utils";

export default function PopularMovies() {
  const [page, setPage] = useState<number>(1);
  const { data, error, isLoading } = useSWR<MovieList, any, any>(
    `/api/movie/popular`,
    apiFetcher
  );
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
