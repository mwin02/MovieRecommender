"use client";
import MoviesLoading from "@/app/components/movie/Loading";
import MovieRecommender from "./movie_recommender";
import { useSelectedMoviesContext } from "@/app/lib/context";
import Link from "next/link";

export default function Recomender() {
  const { selectedMovies } = useSelectedMoviesContext();
  if (!selectedMovies) {
    return <MoviesLoading />;
  }
  if (selectedMovies.length === 0) {
    return (
      <main>
        <p>Select some movies to get a recomendation.</p>
      </main>
    );
  }
  return (
    <main>
      <h2>Movies Recommended: </h2>
      <MovieRecommender
        movies={selectedMovies.map((movie) => movie.movie_id)}
      />
    </main>
  );
}
