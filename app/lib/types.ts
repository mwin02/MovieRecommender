export interface MovieSearchResults {
  count: number;
  movies: BriefMovieInfo[];
}

export interface BriefMovieInfo {
  movie_id: number;
  original_title: string;
  poster_path: string;
}

export interface SelectedMoviesContextValue {
  selectedMovies: BriefMovieInfo[] | null;
  addToSelectedMovies: (newMovie: BriefMovieInfo) => void;
}
