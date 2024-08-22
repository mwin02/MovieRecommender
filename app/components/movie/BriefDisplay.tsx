import { BriefMovieInfo } from "@/app/lib/types";
import Link from "next/link";

export default function MovieDetailedDisplay({
  movieInfo,
}: {
  movieInfo: BriefMovieInfo;
}): JSX.Element {
  return (
    <>
      <p>{movieInfo.original_title}</p>
      <Link href={`/movies?id=${movieInfo.movie_id}`}>
        {!movieInfo.poster_path.endsWith("null") ? (
          <img
            src={movieInfo.poster_path}
            alt={`Poster for ${movieInfo.original_title}`}
          />
        ) : (
          <img src={movieInfo.poster_path} alt={`No Poster Found`} />
        )}
      </Link>
    </>
  );
}
