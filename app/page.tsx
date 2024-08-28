"use client";
import Link from "next/link";
import SelectedMovies from "@/app/components/home/SelectedMovies";

export default function Home() {
  return (
    <main>
      <Link href={"/movies/recommendation"}>
        <button className="big-button">Find My Next Movie &gt;</button>
      </Link>
      {/* <h2>Selected Movies</h2> */}
      <SelectedMovies />
    </main>
  );
}
