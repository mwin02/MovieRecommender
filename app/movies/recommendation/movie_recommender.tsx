"use client";
import MoviesDisplay from "@/app/components/movie/MoviesDisplay";
import { useMovieRecomender } from "@/app/lib/hooks";

export default function MovieRecommender({ movies }: { movies: number[] }) {
  const { data, error, isLoading } = useMovieRecomender(movies);
  return (
    <MoviesDisplay
      movieData={data}
      isLoading={isLoading}
      error={error}
      showAddButton={false}
      showRemoveButton={false}
    />
  );
}
