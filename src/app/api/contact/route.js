import { NextResponse } from "next/server";
import connectDB from "../lib/db";
import Contact from "../models/Contact";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const status = searchParams.get("status");

    const skip = (page - 1) * limit;

    const filter = {};

    if (status) {
      filter.status = status;
    }

    const total = await Contact.countDocuments(filter);

    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return NextResponse.json(
      {
        success: true,
        data: contacts,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch contacts",
      },
      { status: 500 }
    );
  }
}

// ================= CREATE CONTACT =================
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All required fields are missing",
        },
        { status: 400 }
      );
    }

    const newContact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
      status: "new",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        data: newContact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save contact",
      },
      { status: 500 }
    );
  }
}