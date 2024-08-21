import { MovieDetail, MovieList } from "@/app/lib/types";

const auth_key =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2M5MDJkYTA4YmNhZmU0ZTFkODdmZmMzOTEwNjJhYiIsIm5iZiI6MTcyMzQ0ODUzMy4xOTgwNjYsInN1YiI6IjY2YjliYzIwYWFlOTM5ZGNiNWE5MTQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MVN9QRhgOSgk3gLelIY9Zp55NDQ4S2r2_JaeHuieA64";

const getRequestOption = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: auth_key,
  },
};

async function queryMovie(name: string) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`;
  try {
    const res = await fetch(url, getRequestOption);
    console.log("fetch called");
    const json = await res.json();
    return json;
  } catch (err) {
    console.error("error:" + err);
  }
}

const moviesToShow = 60;

async function queryPopularMovies(page: number) {
  const numCalls = moviesToShow / 20;
  let startPage = page * numCalls;
  try {
    let accumQuery: any | null = null;
    for (let i = startPage; i < startPage + numCalls; i++) {
      const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
      console.log("fetch called");
      const res = await fetch(url, getRequestOption);
      const json = await res.json();

      if (!accumQuery) {
        accumQuery = json;
      } else {
        const newResults = [...accumQuery["results"], ...json["results"]];
        accumQuery["results_showing"] = newResults.length;
        accumQuery["results"] = newResults;
      }

      if (
        i >= accumQuery["total_page"] ||
        accumQuery["results_showing"] > accumQuery["total_results"]
      ) {
        break;
      }
    }
    return accumQuery;
  } catch (err) {
    console.error("error:" + err);
  }
}

async function queryMovieDetails(movieId: number) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  try {
    const res = await fetch(url, getRequestOption);
    console.log("fetch called");
    if (res.status != 200) {
      return undefined;
    }
    const json = await res.json();
    return json;
  } catch (err) {
    console.error("error:" + err);
  }
}

function getPosterURL(poster_path: string) {
  const baseUrl = "http://image.tmdb.org/t/p/w185";
  return `${baseUrl}${poster_path}`;
}

function summarizeMovieQuery(queryResult: any): MovieList {
  if (queryResult["total_results"] == 0) {
    return { movies: [], count: 0 };
  }

  const releasedMovies = queryResult["results"].filter(
    (movie: any) => movie.release_date != ""
  );
  const foundMovies = releasedMovies.map((movie: any) => {
    return {
      movie_id: movie["id"],
      original_title: movie["original_title"],
      poster_path: getPosterURL(movie["poster_path"]),
    };
  });
  return { movies: foundMovies, count: foundMovies.length };
}

// async function getMovieRecomendation(movies, numMovies) {}

export async function searchMovie(name: string): Promise<MovieList> {
  if (name == "") {
    return { movies: [], count: 0 };
  }
  const queryResult = await queryMovie(name);
  return summarizeMovieQuery(queryResult);
}

export async function findPopularMovies(page: number) {
  if (page <= 0) {
    return { movies: [], count: 0 };
  }
  const queryResult = await queryPopularMovies(page);
  return summarizeMovieQuery(queryResult);
}

export async function getMovieDetails(
  movieId: number
): Promise<MovieDetail | undefined> {
  const queryResult = await queryMovieDetails(movieId);
  if (!queryResult) {
    return undefined;
  }
  const movieDetails: MovieDetail = {
    movie_id: movieId,
    original_title: queryResult["original_title"],
    poster_path: getPosterURL(queryResult["poster_path"]),
    genres: queryResult["genres"],
    overview: queryResult["overview"],
    release_date: queryResult["release_date"],
    runtime: queryResult["runtime"],
  };
  return movieDetails;
}
