"use client";
import { useSelectedMoviesContext } from "@/app/lib/context";
import { MovieList } from "@/app/lib/types";
import MoviesDisplay from "@/app/components/movie_display/movie_display";
import MoviesLoading from "@/app/components/movie/Loading";

export default function SelectedMovies(): JSX.Element {
  const { selectedMovies } = useSelectedMoviesContext();
  if (!selectedMovies) {
    return <MoviesLoading />;
  }
  if (selectedMovies.length == 0) {
    return <p>No Movies Selected</p>;
  }
  const movieData: MovieList = {
    count: selectedMovies.length,
    movies: selectedMovies,
  };
  return (
    <main>
      <MoviesDisplay
        movieData={movieData}
        error={null}
        isLoading={!selectedMovies}
        showAddButton={false}
        showRemoveButton={true}
      />
    </main>
  );
}
