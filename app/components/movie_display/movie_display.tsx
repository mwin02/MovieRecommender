import { MovieDisplayProp, BriefMovieInfo } from "@/app/lib/types";
import { useSelectedMoviesContext } from "@/app/lib/context";
import MoviesLoading from "@/app/components/loading";

export default function MoviesDisplay({
  movieData,
  isLoading,
  error,
  showAddButton,
  showRemoveButton,
}: MovieDisplayProp) {
  const { addToSelectedMovies } = useSelectedMoviesContext();

  if (isLoading) {
    return <MoviesLoading />;
  }
  if (error || movieData === undefined) {
    return "An error has occurred.";
  }
  if (movieData.count === 0) {
    return "No Movies Found";
  }

  const moviesList = movieData.movies.map((movieInfo: BriefMovieInfo) => {
    return (
      <div key={movieInfo.movie_id}>
        <p>{movieInfo.original_title}</p>
        {!movieInfo.poster_path.endsWith("null") ? (
          <img
            src={movieInfo.poster_path}
            alt={`Poster for ${movieInfo.original_title}`}
          />
        ) : (
          <img src={movieInfo.poster_path} alt={`No Poster Found`} />
        )}
        {showAddButton && (
          <button onClick={() => addToSelectedMovies(movieInfo)}>
            Find Movies Like This
          </button>
        )}
      </div>
    );
  });
  return <div>{moviesList}</div>;
}
