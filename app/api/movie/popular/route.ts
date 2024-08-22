import { NextRequest } from "next/server";
import { findPopularMovies } from "@/app/api/helpers/movie_api_calls";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  let page = parseInt(searchParams.get("page") || "1");
  if (Number.isNaN(page)) {
    return Response.json(
      { success: false, message: "invalid page query" },
      { status: 400 }
    );
  }
  const queryResults = await findPopularMovies(page);
  return Response.json(queryResults, {
    status: 200,
  });
}
