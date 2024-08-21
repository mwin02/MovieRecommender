"use client";

import { useState, useEffect } from "react";
import { SelectedMoviesContext } from "@/app/lib/context";
import { BriefMovieInfo } from "@/app/lib/types";

const sampleMovie = {
  movie_id: 12312,
  original_title: "Deadpool",
  poster_path: "",
};

export function Providers({ children }: any) {
  const [selectedMovies, setSelectedMovies] = useState<BriefMovieInfo[] | null>(
    null
  );

  useEffect(() => {
    const storedValue = localStorage.getItem("selectedMovies");
    if (!storedValue) {
      setSelectedMovies([]);
      return;
    }
    const movies = JSON.parse(storedValue);
    setSelectedMovies(movies);
  }, []);

  const addToSelectedMovies = (newMovie: BriefMovieInfo) => {
    let newMovies = selectedMovies || [];
    if (
      newMovies.find(
        (movie: BriefMovieInfo) => movie.movie_id === newMovie.movie_id
      )
    ) {
      return;
    }
    newMovies.push(newMovie);
    setSelectedMovies(newMovies);
    localStorage.setItem("selectedMovies", JSON.stringify(newMovies));
  };

  const removeFromSelectedMovies = (movieId: number) => {
    if (!selectedMovies) {
      return;
    }
    const newMovies = selectedMovies.filter(
      (movieInfo: BriefMovieInfo) => movieInfo.movie_id !== movieId
    );
    setSelectedMovies(newMovies);
    localStorage.setItem("selectedMovies", JSON.stringify(newMovies));
  };

  return (
    <SelectedMoviesContext.Provider
      value={{
        selectedMovies,
        addToSelectedMovies,
        removeFromSelectedMovies,
      }}
    >
      {children}
    </SelectedMoviesContext.Provider>
  );
}
