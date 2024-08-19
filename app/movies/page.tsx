"use client";
import { useSearchParams } from "next/navigation";

export default function Movies() {
  const searchParams = useSearchParams();
  const query = decodeURIComponent(searchParams.get("query") || "");
  return (
    <main>
      <h1>Popular Movies</h1>
    </main>
  );
}
