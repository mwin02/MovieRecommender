"use client";
import MoviesError from "@/app/components/Error";
import MoviesLoading from "@/app/components/movie/Loading";
import MoviesDisplay from "@/app/components/movie_display/movie_display";
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
