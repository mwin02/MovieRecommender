"use client";
import { useSelectedMoviesContext } from "@/app/lib/context";
import { MovieList } from "@/app/lib/types";
import MoviesDisplay from "@/app/components/movie/MoviesDisplay";
import MoviesLoading from "@/app/components/movie/Loading";
import SearchBar from "../SearchBar";
import styles from "./SelectedMovies.module.css";

export default function SelectedMovies(): JSX.Element {
  const { selectedMovies } = useSelectedMoviesContext();
  if (!selectedMovies) {
    return <MoviesLoading />;
  }
  if (selectedMovies.length == 0) {
    return (
      <div className={styles.container}>
        <p className={styles.text}>
          No Movies Selected. Select one or more movies to get recomendations
          based on the movies you have select. To select a movie search for
          movies through the search bar or browse through popular movies and add
          them using the plus button.
        </p>
      </div>
    );
  }
  const movieData: MovieList = {
    count: selectedMovies.length,
    movies: selectedMovies,
  };
  return (
    <>
      <MoviesDisplay
        movieData={movieData}
        error={null}
        isLoading={!selectedMovies}
        showAddButton={false}
        showRemoveButton={true}
      />
    </>
  );
}
