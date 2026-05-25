import Comment from "../../../models/Comment";
import connectDB from "../../../lib/db";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const comments = await Comment.find({
      blogId: id,
    }).sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      data: comments,
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

export async function POST(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const comment = await Comment.create({
      blogId: id,
      name: body.name,
      email: body.email,
      comment: body.comment,
    });

    return NextResponse.json({
      success: true,
      data: comment,
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