import { NextRequest } from "next/server";
import { searchMovie } from "@/app/api/helpers/movie_api_calls";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  let movieName = searchParams.get("query");

  if (!movieName) {
    return Response.error();
  }
  movieName = decodeURIComponent(movieName);
  const queryResults = await searchMovie(movieName);
  return Response.json(queryResults, {
    status: 200,
  });
}
