import { NextResponse } from "next/server";
import connectDB from "../../lib/db";
import Contact from "../../models/Contact";

// ================= GET SINGLE CONTACT =================
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const contact = await Contact.findById(id);

    if (!contact) {
      return NextResponse.json(
        {
          success: false,
          message: "Contact not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: contact,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("GET CONTACT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to fetch contact",
      },
      { status: 500 }
    );
  }
}

// ================= UPDATE CONTACT =================
export async function PATCH(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const {
      name,
      email,
      phone,
      subject,
      message,
      status,
    } = body;

    // CHECK STATUS
    if (
      status &&
      !["new", "read", "replied"].includes(status)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid status",
        },
        { status: 400 }
      );
    }

    // UPDATE CONTACT
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
        subject,
        message,
        status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedContact) {
      return NextResponse.json(
        {
          success: false,
          message: "Contact not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact updated successfully",
        data: updatedContact,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("PATCH CONTACT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to update contact",
      },
      { status: 500 }
    );
  }
}

// ================= DELETE CONTACT =================
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return NextResponse.json(
        {
          success: false,
          message: "Contact not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("DELETE CONTACT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to delete contact",
      },
      { status: 500 }
    );
  }
}