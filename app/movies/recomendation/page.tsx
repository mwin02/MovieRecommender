"use client";
import MoviesLoading from "@/app/components/loading";
import { useSelectedMoviesContext } from "@/app/lib/context";

export default function Recomender() {
  const { selectedMovies } = useSelectedMoviesContext();
  if (!selectedMovies) {
    return <MoviesLoading />;
  }
  if (selectedMovies.length == 0) {
    return <p>Select Some Movies to Get a Recomendation</p>;
  }
  return (
    <main>
      <h1>Movie Recomender</h1>
    </main>
  );
}
