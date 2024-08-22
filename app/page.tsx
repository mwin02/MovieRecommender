"use client";
import Link from "next/link";
import SelectedMovies from "@/app/components/home/selected_movies";

export default function Home() {
  return (
    <main>
      <h1>Find My Next Movie</h1>
      <div>
        <h2>Selected Movies</h2>
        <SelectedMovies />
      </div>
      <Link href={"/movies/recommendation"}>
        <button>Find My Next Movie</button>
      </Link>
      <div>
        <h2>Next Movie</h2>
      </div>
    </main>
  );
}
