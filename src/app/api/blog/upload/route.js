import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import connectDB from "../../lib/db";
import Blog from "../../models/Blog";

async function saveFileToUploads(file) {
  const bytes = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + "-" + file.name.replace(/\s/g, "-");
  const uploadDir = path.join(process.cwd(), "public/uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, {
      recursive: true,
    });
  }

  const filePath = path.join(uploadDir, filename);
  fs.writeFileSync(filePath, bytes);

  return `/uploads/${filename}`;
}

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();

    const title = formData.get("title");
    const description = formData.get("description");
    const category = formData.get("category");
    const tagsRaw = formData.get("tags") || "";
    const tags = tagsRaw
      .toString()
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    const file = formData.get("image");
    const contentBlocksRaw = formData.get("contentBlocks");
    const contentBlocks = contentBlocksRaw
      ? JSON.parse(contentBlocksRaw)
      : null;

    let imagePath = "";
    const savedContentBlocks = [];

    if (file && file.name) {
      imagePath = await saveFileToUploads(file);
    }

    if (contentBlocks && Array.isArray(contentBlocks)) {
      for (let index = 0; index < contentBlocks.length; index += 1) {
        const block = contentBlocks[index] || { text: "" };
        const blockImage = formData.get(`blockImage-${index}`);
        let blockImagePath = "";

        if (blockImage && blockImage.name) {
          blockImagePath = await saveFileToUploads(blockImage);
        }

        savedContentBlocks.push({
          text: block.text || "",
          image: blockImagePath || undefined,
        });
      }
    }

    const contentText = savedContentBlocks.length
      ? savedContentBlocks.map((block) => block.text).join("\n\n")
      : formData.get("content") || "";

    const contentImagePaths = savedContentBlocks
      .filter((block) => block.image)
      .map((block) => block.image);

    const blog = await Blog.create({
      title,
      description,
      content: contentText,
      contentBlocks: savedContentBlocks,
      category: category || "General",
      tags,
      image: imagePath,
      contentImages: contentImagePaths,
    });

    return NextResponse.json({
      success: true,
      message: "Blog created",
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