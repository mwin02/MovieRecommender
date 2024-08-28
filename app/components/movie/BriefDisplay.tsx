import { BriefMovieInfo } from "@/app/lib/types";
import Link from "next/link";

export default function MovieDetailedDisplay({
  movieInfo,
  styles,
}: {
  movieInfo: BriefMovieInfo;
  styles: { [key: string]: string };
}): JSX.Element {
  return (
    <>
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
      <div className={styles.title}>
        <p>{movieInfo.original_title}</p>
      </div>
    </>
  );
}
