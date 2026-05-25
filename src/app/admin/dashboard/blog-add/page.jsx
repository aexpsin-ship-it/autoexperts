"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const categories = [
  "All",
  "Car Hire",
  "Travel Tips",
  "News",
  "Events",
  "Maintenance",
  "Guides",
];

const emptyBlog = {
  title: "",
  description: "",
  content: "",
  category: "General",
  tags: "",
};

export default function BlogAddPage() {
  const router = useRouter();
  const [blog, setBlog] = useState(emptyBlog);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [contentBlocks, setContentBlocks] = useState([
    { text: "", image: null, imagePreview: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0] || null;
    setImage(file);

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview("");
    }
  };

  const handleBlockTextChange = (index, event) => {
    const value = event.target.value;
    setContentBlocks((prev) =>
      prev.map((block, blockIndex) =>
        blockIndex === index ? { ...block, text: value } : block
      )
    );
  };

  const handleBlockImageChange = (index, event) => {
    const file = event.target.files?.[0] || null;

    setContentBlocks((prev) =>
      prev.map((block, blockIndex) =>
        blockIndex === index
          ? {
              ...block,
              image: file,
              imagePreview: file ? URL.createObjectURL(file) : "",
            }
          : block
      )
    );
  };

  const addContentBlock = () => {
    setContentBlocks((prev) => [
      ...prev,
      { text: "", image: null, imagePreview: "" },
    ]);
  };

  const removeContentBlock = (index) => {
    setContentBlocks((prev) => prev.filter((_, blockIndex) => blockIndex !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", blog.title.trim());
      formData.append("description", blog.description.trim());
      formData.append("category", blog.category.trim() || "General");
      formData.append("tags", blog.tags.trim());

      if (image) {
        formData.append("image", image);
      }

      const contentBlocksPayload = contentBlocks.map((block) => ({
        text: block.text.trim(),
      }));

      formData.append("contentBlocks", JSON.stringify(contentBlocksPayload));
      formData.append(
        "content",
        contentBlocksPayload.map((block) => block.text).join("\n\n")
      );

      contentBlocks.forEach((block, index) => {
        if (block.image?.name) {
          formData.append(`blockImage-${index}`, block.image);
        }
      });

      const response = await fetch("/api/blog/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to create blog.");
      }

      setSuccess("Blog created successfully.");
      setBlog(emptyBlog);
      setImage(null);
      setImagePreview("");
      setContentBlocks([{ text: "", image: null, imagePreview: "" }]);
      router.push("/admin/dashboard/blog-list");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-[32px] bg-white p-6 shadow-md sm:p-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[.3em] text-yellow-500">
            Blog Management
          </p>
          <h1 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
            Add a New Blog Post
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
            Create a blog entry with an image, category, and full content. The new post will appear in the blog list.
          </p>
        </div>

        {error ? (
          <div className="mb-6 rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        {success ? (
          <div className="mb-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-700">
            {success}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Title</span>
              <input
                name="title"
                value={blog.title}
                onChange={handleChange}
                required
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
                placeholder="Enter blog title"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Category</span>
              <select
                name="category"
                value={blog.category}
                onChange={handleChange}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
              >
                {categories.filter((category) => category !== "All").map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Tags</span>
            <input
              name="tags"
              value={blog.tags}
              onChange={handleChange}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
              placeholder="e.g. maintenance, travel"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Description</span>
            <textarea
              name="description"
              value={blog.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
              placeholder="Write a short description of the blog"
            />
          </label>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-700">Content Blocks</p>
                <p className="text-sm text-slate-500">
                  Add text and image blocks to build the post content.
                </p>
              </div>

              <button
                type="button"
                onClick={addContentBlock}
                className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-100"
              >
                Add Block
              </button>
            </div>

            {contentBlocks.map((block, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 space-y-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-700">Block {index + 1}</span>
                  {contentBlocks.length > 1 ? (
                    <button
                      type="button"
                      onClick={() => removeContentBlock(index)}
                      className="text-sm font-semibold text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  ) : null}
                </div>

                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-700">Block Text</span>
                  <textarea
                    value={block.text}
                    onChange={(event) => handleBlockTextChange(index, event)}
                    rows={5}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
                    placeholder="Write the content for this block"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-700">Block Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => handleBlockImageChange(index, event)}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none file:mr-4 file:rounded-full file:border-0 file:bg-black file:px-3 file:py-2 file:text-sm file:text-white"
                  />
                </label>

                {block.imagePreview ? (
                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                    <img
                      src={block.imagePreview}
                      alt={`Block ${index + 1} preview`}
                      className="h-40 w-full object-cover"
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Cover Image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none file:mr-4 file:rounded-full file:border-0 file:bg-black file:px-3 file:py-2 file:text-sm file:text-white"
              />
            </label>

            <div className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Cover Preview</span>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Selected preview"
                    className="h-48 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-48 items-center justify-center px-4 text-sm text-slate-500">
                    Select an image to preview it here.
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/admin/dashboard/blog-list"
              className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-100"
            >
              Back to Blog List
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-3xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {loading ? "Saving..." : "Create Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
