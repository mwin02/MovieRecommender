import { NextRequest } from "next/server";
import { getMovieDetails } from "@/app/api/helpers/movie_api_calls";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  let movieId = searchParams.get("query");

  if (!movieId) {
    return Response.error();
  }
  movieId = decodeURIComponent(movieId);
  const queryResults = await getMovieDetails(movieId);
  return Response.json(queryResults, {
    status: 200,
  });
}
