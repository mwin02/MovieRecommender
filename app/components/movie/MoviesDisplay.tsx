import { MovieDisplayProp, BriefMovieInfo } from "@/app/lib/types";
import { useSelectedMoviesContext } from "@/app/lib/context";
import MoviesLoading from "@/app/components/movie/Loading";
import MoviesError from "@/app/components/movie/Error";
import MovieBriefDisplay from "./BriefDisplay";
import styles from "./MoviesDisplay.module.css";

export default function MoviesDisplay({
  movieData,
  isLoading,
  error,
  showAddButton,
  showRemoveButton,
}: MovieDisplayProp) {
  const { addToSelectedMovies, removeFromSelectedMovies } =
    useSelectedMoviesContext();

  if (isLoading) {
    return <MoviesLoading />;
  }
  if (error || movieData === undefined) {
    return <MoviesError />;
  }
  if (movieData.count === 0) {
    return "No Movies Found";
  }

  const AddButton = ({ movieInfo }: { movieInfo: BriefMovieInfo }) => {
    return (
      <button
        onClick={() => addToSelectedMovies(movieInfo)}
        className={`${styles.button} ${styles.add}`}
      >
        +
      </button>
    );
  };

  const RemoveButton = ({ movieId }: { movieId: number }) => {
    return (
      <button
        onClick={() => removeFromSelectedMovies(movieId)}
        className={`${styles.button} ${styles.remove}`}
      >
        x
      </button>
    );
  };

  const moviesList = movieData.movies.map((movieInfo: BriefMovieInfo) => {
    return (
      <li key={movieInfo.movie_id} className={styles.movie}>
        <MovieBriefDisplay movieInfo={movieInfo} styles={styles} />
        {showAddButton && <AddButton movieInfo={movieInfo} />}
        {showRemoveButton && <RemoveButton movieId={movieInfo.movie_id} />}
      </li>
    );
  });
  return <ul className={styles.container}>{moviesList}</ul>;
}
