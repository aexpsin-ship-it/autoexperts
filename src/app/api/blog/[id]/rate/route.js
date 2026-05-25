import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "../../lib/db";
import Blog from "../../models/Blog";
import Rating from "../../models/Rating";

export async function POST(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid blog identifier.",
        },
        {
          status: 400,
        }
      );
    }

    const body = await req.json();
    const name = body.name?.trim() || "Guest";
    const rating = Number(body.rating);

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json(
        {
          success: false,
          message: "Rating must be a number between 1 and 5.",
        },
        {
          status: 422,
        }
      );
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found.",
        },
        {
          status: 404,
        }
      );
    }

    await Rating.create({
      blogId: id,
      name,
      rating,
    });

    const previousTotal = blog.totalRatings || 0;
    const previousAverage = blog.averageRating || 0;
    blog.totalRatings = previousTotal + 1;
    blog.averageRating = Number(
      ((previousAverage * previousTotal + rating) / blog.totalRatings).toFixed(2)
    );

    await blog.save();

    return NextResponse.json({
      success: true,
      message: "Rating submitted successfully.",
      data: {
        averageRating: blog.averageRating,
        totalRatings: blog.totalRatings,
      },
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
