"use client";
import MoviesDisplay from "@/app/components/movie/MoviesDisplay";
import { useSearchParams } from "next/navigation";
import { useMovieSearch } from "@/app/lib/hooks";

export default function MovieSearch() {
  const searchParams = useSearchParams();
  const query = decodeURIComponent(searchParams.get("query") || "");
  const { data, error, isLoading } = useMovieSearch(query);
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
