import { NextRequest } from "next/server";
import { getMovieRecomendation } from "@/app/api/helpers/movie_api_calls";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const queryResults = await getMovieRecomendation(data["movies"], 8);
  return Response.json(queryResults, {
    status: 200,
  });
}
