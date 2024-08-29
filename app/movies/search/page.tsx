"use client";
import MoviesDisplay from "@/app/components/movie/MoviesDisplay";
import { useSearchParams } from "next/navigation";
import { useMovieSearch } from "@/app/lib/hooks";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<MovieSearchFallback />}>
      <MovieSearch />
    </Suspense>
  );
}

function MovieSearchFallback() {
  return <>Something Went Wrong. Please Refresh the Page!</>;
}

function MovieSearch() {
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
