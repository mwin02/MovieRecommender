"use client";

import MoviesDisplay from "@/app/components/movie_results/movie_display";
import { useSearchParams } from "next/navigation";

export default function Movies() {
  const searchParams = useSearchParams();
  const query = decodeURIComponent(searchParams.get("query") || "");
  return (
    <main>
      <h1>Movie Results For {query}</h1>
      <MoviesDisplay movieName={query} />
    </main>
  );
}
