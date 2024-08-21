"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useMovieId } from "@/app/lib/hooks";
import MovieDetailedDisplay from "../components/movie_display/detail_display";
import { useEffect } from "react";

export default function MovieDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = parseInt(decodeURIComponent(searchParams.get("id") || ""));
  useEffect(() => {
    if (Number.isNaN(query)) {
      router.push(`/movies/popular`);
    }
  }, [query]);

  const { data, error, isLoading } = useMovieId(query);

  return (
    <main>
      <MovieDetailedDisplay
        movieInfo={data}
        error={error}
        isLoading={isLoading}
      />
    </main>
  );
}
