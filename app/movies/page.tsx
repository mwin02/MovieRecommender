"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import MoviesLoading from "@/app/components/loading";
import { useMovieId } from "../lib/hooks";

export default function MovieDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = parseInt(decodeURIComponent(searchParams.get("id") || ""));
  if (Number.isNaN(query)) {
    router.push(`/movies/popular`);
  }
  const { data, error, isLoading } = useMovieId(query);
  if (isLoading) {
    return <MoviesLoading />;
  }
  if (error) {
    return error.message;
  }
  return (
    <main>
      <h1>{data["original_title"]}</h1>
      <p>{data["overview"]}</p>
      <img src={data["poster_path"]} alt="Poster" />
    </main>
  );
}
