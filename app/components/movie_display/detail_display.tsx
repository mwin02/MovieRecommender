import { MovieDetailDisplayProp } from "@/app/lib/types";
import MoviesLoading from "@/app/components/loading";
import MoviesError from "@/app/components//error";
// TODO::
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
    <div>
      <h1>{movieInfo["original_title"]}</h1>
      <p>{movieInfo["overview"]}</p>
      <img src={movieInfo["poster_path"]} alt="Poster" />
    </div>
  );
}
