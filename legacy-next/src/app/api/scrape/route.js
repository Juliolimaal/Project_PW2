import { NextResponse } from "next/server";
import Firecrawl from "@mendable/firecrawl-js";

const app = new Firecrawl({
  apiKey: process.env.FIRECRAWL_API_KEY,
});

export async function POST(req) {
  const { url } = await req.json();

  const result = await app.scrape(url, {
    formats: ["markdown"],
  });

  return NextResponse.json(result);
}