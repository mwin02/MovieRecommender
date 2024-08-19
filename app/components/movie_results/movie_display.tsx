import useSWR from "swr";
import { BriefMovieInfo, MovieSearchResults } from "@/app/lib/types";
import { useSelectedMoviesContext } from "@/app/lib/context";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MoviesDisplay({ movieName }: { movieName: string }) {
  const { data, error, isLoading } = useSWR<MovieSearchResults, any, any>(
    `/api/movie/search?query=${encodeURIComponent(movieName)}`,
    fetcher
  );

  const { addToSelectedMovies } = useSelectedMoviesContext();

  if (error || data === undefined) {
    return "An error has occurred.";
  }
  if (isLoading) {
    return "Loading...";
  }
  if (data.count === 0) {
    return "No Movies Found";
  }

  const moviesList = data.movies.map((movieInfo: BriefMovieInfo) => {
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
        <button onClick={() => addToSelectedMovies(movieInfo)}>
          Find Movies Like This
        </button>
      </div>
    );
  });
  return <div>{moviesList}</div>;
}
