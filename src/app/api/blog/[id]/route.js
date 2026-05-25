import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import slugify from "slugify";
import mongoose from "mongoose";
import connectDB from "../../lib/db";
import Blog from "../../models/Blog";

function deleteLocalFile(filePath) {
  try {
    if (!filePath) return;
    const absolutePath = path.join(process.cwd(), "public", filePath.replace(/^\//, ""));
    if (fs.existsSync(absolutePath)) {
      fs.unlinkSync(absolutePath);
    }
  } catch (error) {
    console.error("Failed to delete file:", error);
  }
}

async function saveFileToUploads(file) {
  const bytes = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + "-" + file.name.replace(/\s/g, "-");
  const uploadDir = path.join(process.cwd(), "public/uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filePath = path.join(uploadDir, filename);
  fs.writeFileSync(filePath, bytes);

  return `/uploads/${filename}`;
}

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    let blog = null;

    if (mongoose.isValidObjectId(id)) {
      blog = await Blog.findById(id);
    }

    if (!blog) {
      blog = await Blog.findOne({ slug: id });
    }

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: blog,
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

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    const contentType = req.headers.get("content-type") || "";
    let title = "";
    let description = "";
    let content = "";
    let category = "";
    let tags = "";
    let file;
    let formData;
    let contentBlocks = null;
    let existingContentImages = null;
    let newContentImageFiles = [];

    if (contentType.includes("multipart/form-data")) {
      formData = await req.formData();
      title = formData.get("title");
      description = formData.get("description");
      content = formData.get("content");
      category = formData.get("category");
      tags = formData.get("tags") || "";
      file = formData.get("image");
      const contentBlocksRaw = formData.get("contentBlocks");

      if (contentBlocksRaw) {
        try {
          contentBlocks = JSON.parse(contentBlocksRaw);
        } catch (error) {
          contentBlocks = null;
        }
      }

      const contentImages = formData.getAll("contentImages");
      newContentImageFiles = Array.isArray(contentImages) ? contentImages : [];
      const existingContentImagesRaw = formData.get("existingContentImages");

      if (existingContentImagesRaw) {
        try {
          existingContentImages = JSON.parse(existingContentImagesRaw);
        } catch (error) {
          existingContentImages = [];
        }
      }
    } else {
      const body = await req.json();
      title = body.title;
      description = body.description;
      content = body.content;
      contentBlocks = body.contentBlocks ?? null;
      category = body.category;
      tags = body.tags || "";
      existingContentImages = body.existingContentImages ?? null;
    }

    if (title) {
      blog.title = title;
      blog.slug = slugify(title, { lower: true, strict: true });
    }

    if (description) {
      blog.description = description;
    }

    if (contentBlocks && Array.isArray(contentBlocks)) {
      const savedContentBlocks = [];
      for (let index = 0; index < contentBlocks.length; index += 1) {
        const block = contentBlocks[index] || { text: "" };
        let blockImagePath = block.image || "";

        if (formData) {
          const blockImage = formData.get(`blockImage-${index}`);
          if (blockImage && blockImage.name) {
            blockImagePath = await saveFileToUploads(blockImage);
          }
        }

        savedContentBlocks.push({
          text: block.text || "",
          image: blockImagePath || undefined,
        });
      }

      blog.contentBlocks = savedContentBlocks;
      blog.content = savedContentBlocks.map((block) => block.text).join("\n\n");
      blog.contentImages = savedContentBlocks
        .filter((block) => block.image)
        .map((block) => block.image);
    } else if (content) {
      blog.content = content;
    }

    if (category) {
      blog.category = category;
    }

    if (typeof tags === "string") {
      blog.tags = tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);
    }

    const previousContentImages = Array.isArray(blog.contentImages)
      ? [...blog.contentImages]
      : [];

    if (existingContentImages !== null) {
      blog.contentImages = Array.isArray(existingContentImages)
        ? existingContentImages
        : [];
    }

    if (Array.isArray(newContentImageFiles) && newContentImageFiles.length > 0) {
      const uploadedPaths = [];
      for (const contentImage of newContentImageFiles) {
        if (contentImage?.name) {
          const contentImagePath = await saveFileToUploads(contentImage);
          uploadedPaths.push(contentImagePath);
        }
      }

      blog.contentImages = [
        ...(Array.isArray(blog.contentImages) ? blog.contentImages : []),
        ...uploadedPaths,
      ];
    }

    const removedContentImages = previousContentImages.filter(
      (imagePath) => !blog.contentImages.includes(imagePath)
    );

    removedContentImages.forEach(deleteLocalFile);

    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = Date.now() + "-" + file.name.replace(/\s/g, "-");
      const uploadDir = path.join(process.cwd(), "public/uploads");

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const filePath = path.join(uploadDir, filename);
      fs.writeFileSync(filePath, buffer);
      const imagePath = `/uploads/${filename}`;

      if (blog.image) {
        deleteLocalFile(blog.image);
      }

      blog.image = imagePath;
    }

    await blog.save();

    return NextResponse.json({
      success: true,
      message: "Blog updated",
      data: blog,
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

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    if (blog.image) {
      deleteLocalFile(blog.image);
    }

    if (Array.isArray(blog.contentImages)) {
      blog.contentImages.forEach(deleteLocalFile);
    }

    await Blog.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Blog deleted",
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