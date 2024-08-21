"use client";
import MoviesLoading from "@/app/components/loading";
import MovieRecommender from "./movie_recommender";
import { useSelectedMoviesContext } from "@/app/lib/context";

export default function Recomender() {
  const { selectedMovies } = useSelectedMoviesContext();
  if (!selectedMovies) {
    return <MoviesLoading />;
  }
  if (selectedMovies.length === 0) {
    return <p>Select Some Movies to Get a Recomendation</p>;
  }
  return (
    <div>
      <h2>Movies Recommended: </h2>
      <MovieRecommender
        movies={selectedMovies.map((movie) => movie.movie_id)}
      />
    </div>
  );
}
