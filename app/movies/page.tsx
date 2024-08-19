"use client";
import { useSearchParams } from "next/navigation";

export default function MovieDetails() {
  const searchParams = useSearchParams();
  const query = decodeURIComponent(searchParams.get("id") || "");
  return (
    <main>
      <h1>Popular Movies</h1>
    </main>
  );
}
