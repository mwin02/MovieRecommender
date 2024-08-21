export interface MovieDetail {
  movie_id: number;
  original_title: string;
  poster_path: string;
  genres: { id: number; name: string }[];
  overview: string;
  release_date: Date;
  runtime: number;
}

export interface MovieList {
  count: number;
  movies: BriefMovieInfo[];
}

export interface BriefMovieInfo {
  movie_id: number;
  original_title: string;
  poster_path: string;
}

export interface MovieDisplayProp {
  movieData: MovieList | undefined;
  isLoading: boolean;
  error: any;
  showAddButton: boolean;
  showRemoveButton: boolean;
}

export interface SelectedMoviesContextValue {
  selectedMovies: BriefMovieInfo[] | null;
  addToSelectedMovies: (newMovie: BriefMovieInfo) => void;
}
