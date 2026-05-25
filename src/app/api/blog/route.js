import { NextResponse } from "next/server";
import connectDB from "../lib/db";
import Blog from "../models/Blog";

export async function GET(req) {
  try {
    await connectDB();

    const url = new URL(req.url);
    const searchParams = url.searchParams;
    const filter = {};

    if (searchParams.has("published")) {
      filter.published = searchParams.get("published") === "true";
    }

    if (searchParams.has("category") && searchParams.get("category")) {
      filter.category = searchParams.get("category");
    }

    if (searchParams.has("slug") && searchParams.get("slug")) {
      filter.slug = searchParams.get("slug");
    }

    if (searchParams.has("tag") && searchParams.get("tag")) {
      filter.tags = searchParams.get("tag");
    }

    if (searchParams.has("search") && searchParams.get("search")) {
      const term = searchParams.get("search");
      filter.$or = [
        { title: { $regex: term, $options: "i" } },
        { description: { $regex: term, $options: "i" } },
      ];
    }

    const limit = parseInt(searchParams.get("limit") || "0", 10);

    const query = Blog.find(filter).sort({ createdAt: -1 });
    if (limit > 0) {
      query.limit(limit);
    }

    const blogs = await query;

    return NextResponse.json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}