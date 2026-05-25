import { NextResponse } from "next/server";
import connectDB from "../../lib/db";
import User from "../../models/User";


export async function POST(req) {
  try {
    await connectDB();

    const { name, email, password, confirmPassword, user_type } =
      await req.json();
    if (!name || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { success: false, message: "Passwords do not match" },
        { status: 400 }
      );
    }
    const exists = await User.findOne({ email });
    if (exists) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }
    await User.create({
      name,
      email,
      password,
      user_type: user_type || "user",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
