"use client";
import { useContext } from "react";
import { useSelectedMoviesContext } from "@/app/lib/context";
import { BriefMovieInfo } from "@/app/lib/types";

export default function Movies() {
  const { selectedMovies } = useSelectedMoviesContext();
  if (!selectedMovies || selectedMovies.length === 0) {
    return "No Movies Selected";
  }
  return (
    <main>
      {selectedMovies.map((movie: BriefMovieInfo) => movie.original_title)}
    </main>
  );
}
