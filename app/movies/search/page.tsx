"use client";
import useSWR from "swr";
import MoviesDisplay from "@/app/components/movie_display/movie_display";
import { useSearchParams } from "next/navigation";
import { BriefMovieInfo, MovieList } from "@/app/lib/types";
import { apiFetcher } from "@/app/lib/utils";

export default function MovieSearch() {
  const searchParams = useSearchParams();
  const query = decodeURIComponent(searchParams.get("query") || "");
  const { data, error, isLoading } = useSWR<MovieList, any, any>(
    `/api/movie/search?query=${encodeURIComponent(query)}`,
    apiFetcher
  );

  return (
    <main>
      <h1>Movie Results For {query}</h1>
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
