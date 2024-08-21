import { apiFetcher } from "@/app/lib/utils";
import useSWR from "swr";
import { MovieList } from "@/app/lib/types";

export const usePopularMovies = () => {
  const { data, error, isLoading } = useSWR<MovieList, any, any>(
    `/api/movie/popular`,
    apiFetcher,
    { revalidateOnFocus: false }
  );
  return { data, error, isLoading };
};

export const useMovieId = (query: number) => {
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
