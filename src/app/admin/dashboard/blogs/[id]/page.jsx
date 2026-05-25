"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const categories = [
  "Car Hire",
  "Travel Tips",
  "News",
  "Events",
  "Maintenance",
  "Guides",
  "General",
];

export default function BlogEditPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    content: "",
    category: "General",
    tags: "",
  });
  const [existingContentImages, setExistingContentImages] = useState([]);
  const [contentImages, setContentImages] = useState([]);
  const [contentImagePreviews, setContentImagePreviews] = useState([]);
  const [contentBlocks, setContentBlocks] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!id) return;

    const loadBlog = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`/api/blog/${id}`);
        const data = await response.json();
        if (!response.ok || !data.success) {
          throw new Error(data.message || "Unable to fetch blog.");
        }

        setBlog({
          title: data.data.title || "",
          description: data.data.description || "",
          content: data.data.content || "",
          category: data.data.category || "General",
          tags: (data.data.tags || []).join(", "),
        });
        setImagePreview(data.data.image || "");
        setExistingContentImages(data.data.contentImages || []);
        setContentBlocks(
          (data.data.contentBlocks || []).map((block) => ({
            text: block.text || "",
            image: block.image || "",
            imagePreview: block.image || "",
            newImageFile: null,
          }))
        );
      } catch (err) {
        setError(err.message || "Failed to load blog.");
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0] || null;
    setImageFile(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAddContentBlock = () => {
    setContentBlocks((prev) => [
      ...prev,
      {
        text: "",
        image: "",
        imagePreview: "",
        newImageFile: null,
      },
    ]);
  };

  const handleRemoveContentBlock = (index) => {
    setContentBlocks((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleContentBlockChange = (index, value) => {
    setContentBlocks((prev) =>
      prev.map((block, idx) =>
        idx === index ? { ...block, text: value } : block
      )
    );
  };

  const handleContentBlockImageChange = (index, event) => {
    const file = event.target.files?.[0] || null;
    setContentBlocks((prev) =>
      prev.map((block, idx) => {
        if (idx !== index) return block;
        return {
          ...block,
          newImageFile: file,
          imagePreview: file ? URL.createObjectURL(file) : block.imagePreview,
          image: block.image || "",
        };
      })
    );
  };

  const handleContentImagesChange = (event) => {
    const files = Array.from(event.target.files || []);
    setContentImages(files);
    setContentImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleRemoveExistingContentImage = (src) => {
    setExistingContentImages((prev) => prev.filter((image) => image !== src));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    try {
      const formData = new FormData();
      formData.append("title", blog.title.trim());
      formData.append("description", blog.description.trim());
      formData.append("content", blog.content.trim());
      formData.append("category", blog.category.trim() || "General");
      formData.append("tags", blog.tags.trim());
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const blocksToSave = contentBlocks
        .map((block) => ({
          text: block.text.trim(),
          image: typeof block.image === "string" ? block.image : "",
          newImageFile: block.newImageFile,
        }))
        .filter((block) => block.text || block.image || block.newImageFile);

      if (blocksToSave.length > 0) {
        formData.append(
          "contentBlocks",
          JSON.stringify(
            blocksToSave.map(({ text, image }) => ({ text, image }))
          )
        );

        blocksToSave.forEach((block, index) => {
          if (block.newImageFile) {
            formData.append(`blockImage-${index}`, block.newImageFile);
          }
        });
      }

      formData.append(
        "existingContentImages",
        JSON.stringify(existingContentImages)
      );

      contentImages.forEach((file) => {
        if (file?.name) {
          formData.append("contentImages", file);
        }
      });

      const response = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to update blog.");
      }

      setSuccess("Blog updated successfully.");
      setTimeout(() => {
        router.push("/admin/dashboard/blog-list");
      }, 800);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this blog post permanently?")) {
      return;
    }

    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to delete blog.");
      }
      router.push("/admin/dashboard/blog-list");
    } catch (err) {
      setError(err.message || "Failed to delete blog.");
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
            Edit Blog Post
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
            Update the blog content, category, or cover image. You can also delete this post below.
          </p>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center text-slate-600">
            Loading blog details...
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/admin/dashboard/blog-list"
                className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Back to Blog List
              </Link>
              <p className="text-sm text-slate-500">
                Edit the blog post or remove it entirely if it’s no longer needed.
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
                    {categories.map((category) => (
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

              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Content Blocks</h2>
                    <p className="text-sm text-slate-500">
                      Organize the article into text and image sections for a cleaner editing experience.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddContentBlock}
                    className="inline-flex items-center justify-center rounded-3xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Add Section
                  </button>
                </div>

                <div className="space-y-4">
                  {contentBlocks.length > 0 ? (
                    contentBlocks.map((block, index) => (
                      <div
                        key={index}
                        className="rounded-3xl border border-slate-200 bg-white p-5"
                      >
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold text-slate-700">Section {index + 1}</p>
                            <p className="text-sm text-slate-500">
                              Add text and an optional image for this section.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveContentBlock(index)}
                            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                          >
                            Remove
                          </button>
                        </div>

                        <label className="space-y-2">
                          <span className="text-sm font-semibold text-slate-700">Section Text</span>
                          <textarea
                            value={block.text}
                            onChange={(e) => handleContentBlockChange(index, e.target.value)}
                            rows={4}
                            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
                            placeholder="Add text for this section"
                          />
                        </label>

                        <label className="space-y-2">
                          <span className="text-sm font-semibold text-slate-700">Section Image</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleContentBlockImageChange(index, e)}
                            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none file:mr-4 file:rounded-full file:border-0 file:bg-black file:px-3 file:py-2 file:text-sm file:text-white"
                          />
                        </label>

                        {block.imagePreview ? (
                          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                            <img
                              src={block.imagePreview}
                              alt={`Section ${index + 1} image`}
                              className="h-56 w-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
                            No section image selected.
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
                      No structured content sections added yet.
                    </div>
                  )}
                </div>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Description</span>
                <textarea
                  name="description"
                  value={blog.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
                  placeholder="Update the short description"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Content</span>
                <textarea
                  name="content"
                  value={blog.content}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
                  placeholder="Update the full blog content"
                />
              </label>

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
                  <span className="text-sm font-semibold text-slate-700">Current Image</span>
                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Blog preview"
                        className="h-48 w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-48 items-center justify-center text-sm text-slate-500">
                        No image selected
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Existing Content Images</span>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {existingContentImages.length > 0 ? (
                    existingContentImages.map((src) => (
                      <div key={src} className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                        <img
                          src={src}
                          alt="Existing content"
                          className="h-40 w-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveExistingContentImage(src)}
                          className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-2 text-xs font-semibold text-white transition hover:bg-black"
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
                      No content images added yet.
                    </div>
                  )}
                </div>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Add Content Images</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleContentImagesChange}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none file:mr-4 file:rounded-full file:border-0 file:bg-black file:px-3 file:py-2 file:text-sm file:text-white"
                />
              </label>

              {contentImagePreviews.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {contentImagePreviews.map((preview, index) => (
                    <div key={index} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                      <img
                        src={preview}
                        alt={`New content preview ${index + 1}`}
                        className="h-40 w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="inline-flex items-center justify-center rounded-3xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
                  >
                    Delete Post
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center justify-center rounded-3xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
