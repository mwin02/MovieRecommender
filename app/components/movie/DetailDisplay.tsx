import { MovieDetailDisplayProp } from "@/app/lib/types";
import MoviesLoading from "@/app/components/movie/Loading";
import MoviesError from "@/app/components/movie/Error";
import styles from "./DetailDisplay.module.css";

export default function MovieDetailedDisplay({
  movieInfo,
  error,
  isLoading,
}: MovieDetailDisplayProp): JSX.Element {
  if (isLoading) {
    return <MoviesLoading />;
  }
  if (error) {
    return <MoviesError />;
  }
  return (
    <div className={styles.container}>
      <img
        src={movieInfo["poster_path"]}
        alt="Poster"
        className={styles.poster}
      />
      <div className={styles.description}>
        <h2>{movieInfo["original_title"]}</h2>
        <p>{movieInfo["overview"]}</p>
        <div className={styles.genres}>
          Genres:
          <ul>
            {movieInfo.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
