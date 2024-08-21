import { NextRequest } from "next/server";
import { getMovieDetails } from "@/app/api/helpers/movie_api_calls";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const movieId = parseInt(decodeURIComponent(searchParams.get("id") || ""));
  if (Number.isNaN(movieId) || movieId <= 0) {
    return Response.json(
      { success: false, message: "Bad Request : Invalid argument" },
      { status: 400 }
    );
  }
  const queryResults = await getMovieDetails(movieId);

  if (!queryResults) {
    return Response.json(
      { success: false, message: "Movie Not Found" },
      {
        status: 404,
      }
    );
  }
  return Response.json(queryResults, {
    status: 200,
  });
}
