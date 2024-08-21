import { apiFetcher, postFetcher } from "@/app/lib/utils";
import useSWR from "swr";
import { MovieList, MovieDetail } from "@/app/lib/types";

export const usePopularMovies = () => {
  const { data, error, isLoading } = useSWR<MovieList, any, any>(
    `/api/movie/popular`,
    apiFetcher,
    { revalidateOnFocus: false }
  );
  return { data, error, isLoading };
};

export const useMovieId = (
  query: number
): { data: MovieDetail; error: any; isLoading: boolean } => {
  const { data, error, isLoading } = useSWR(
    `/api/movie?id=${query}`,
    apiFetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Never retry on 404 or 400.
        if (error.status === 404 || error.status === 400) return;
      },
      revalidateOnFocus: false,
    }
  );
  return { data, error, isLoading };
};

export const useMovieSearch = (query: string) => {
  const { data, error, isLoading } = useSWR<MovieList, any, any>(
    `/api/movie/search?query=${encodeURIComponent(query)}`,
    apiFetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Never retry on 404 or 400.
        if (error.status === 404 || error.status === 400) return;
      },
      revalidateOnFocus: false,
    }
  );
  return { data, error, isLoading };
};

export const useMovieRecomender = (
  query: number[] | null
): { data: any; error: any; isLoading: boolean } => {
  console.log(query);
  const { data, error, isLoading } = useSWR<MovieList, any, any>(
    ["/api/movie/recommender", { movies: query }],
    ([url, body]: [string, any]) => postFetcher(url, body),
    {
      revalidateOnFocus: false,
    }
  );
  return { data, error, isLoading };
};
