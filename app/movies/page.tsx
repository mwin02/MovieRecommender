"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useMovieId } from "@/app/lib/hooks";
import MovieDetailedDisplay from "@/app/components/movie/DetailDisplay";
import { useEffect } from "react";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<MovieDetailsFallback />}>
      <MovieDetails />
    </Suspense>
  );
}

function MovieDetailsFallback() {
  return <>Something Went Wrong. Please Refresh the Page!</>;
}

function MovieDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = parseInt(decodeURIComponent(searchParams.get("id") || ""));
  useEffect(() => {
    if (Number.isNaN(query)) {
      router.push(`/movies/popular`);
    }
  }, [query]);

  const { data, error, isLoading } = useMovieId(query);

  return (
    <main>
      <MovieDetailedDisplay
        movieInfo={data}
        error={error}
        isLoading={isLoading}
      />
    </main>
  );
}
