import { MovieDisplayProp, BriefMovieInfo } from "@/app/lib/types";
import { useSelectedMoviesContext } from "@/app/lib/context";
import MoviesLoading from "@/app/components/movie/Loading";
import MoviesError from "@/app/components/movie/Error";
import MovieBriefDisplay from "./BriefDisplay";

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

  const moviesList = movieData.movies.map((movieInfo: BriefMovieInfo) => {
    return (
      <li key={movieInfo.movie_id}>
        <MovieBriefDisplay movieInfo={movieInfo} />
        {showAddButton && (
          <button onClick={() => addToSelectedMovies(movieInfo)}>
            Find Movies Like This
          </button>
        )}
        {showRemoveButton && (
          <button onClick={() => removeFromSelectedMovies(movieInfo.movie_id)}>
            Remove Movie
          </button>
        )}
      </li>
    );
  });
  return <ul>{moviesList}</ul>;
}
