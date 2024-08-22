"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import SearchBar from "@/app/components/SearchBar";

export default function NavBar() {
  const pathName = usePathname();
  return (
    <nav>
      <Link className={`link ${pathName === "/" ? "active" : ""}`} href="/">
        Home
      </Link>
      <Link
        className={`link ${pathName === "/movies/popular" ? "active" : ""}`}
        href="/movies/popular"
      >
        Popular Movies
      </Link>
      <Link
        className={`link ${pathName === "/movies/random" ? "active" : ""}`}
        href="/movies/random"
      >
        Random Movie
      </Link>
      <SearchBar />
    </nav>
  );
}
