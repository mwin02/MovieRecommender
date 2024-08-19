"use client";

import { useState } from "react";
import { SelectedMoviesContext } from "@/app/lib/context";
import { BriefMovieInfo } from "@/app/lib/types";

const sampleMovie = {
  movie_id: 12312,
  original_title: "Deadpool",
  poster_path: "",
};

export function Providers({ children }: any) {
  const [selectedMovies, setSelectedMovies] = useState<BriefMovieInfo[] | null>(
    [sampleMovie]
  );

  const addToSelectedMovies = (newMovie: BriefMovieInfo) => {
    const newMovies = selectedMovies || [];
    setSelectedMovies([...newMovies, newMovie]);
  };

  return (
    <SelectedMoviesContext.Provider
      value={{
        selectedMovies,
        addToSelectedMovies,
      }}
    >
      {children}
    </SelectedMoviesContext.Provider>
  );
}
