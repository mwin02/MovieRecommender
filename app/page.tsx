"use client";

import { createContext, useState, useContext } from "react";
import { SelectedMoviesContext } from "@/app/lib/context";
import { BriefMovieInfo } from "@/app/lib/types";
import SelectedMovies from "@/app/components/home/selected_movies";

export default function Home() {
  return (
    <main>
      <h1>Find My Next Movie</h1>
      <div>
        <h2>Selected Movies</h2>
        <SelectedMovies />
      </div>
      <button>Find My Next Movie</button>
      <div>
        <h2>Next Movie</h2>
      </div>
    </main>
  );
}
