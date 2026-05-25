"use client";

import { useState } from "react";
import {
  ImagePlus,
  Loader2,
  Plus,
  X,
  FileText,
} from "lucide-react";

export default function BlogForm({
  initialData,
  onSubmit,
  loading,
  buttonText,
}) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    description: initialData?.description || "",
    content: initialData?.content || "",
    authorName: initialData?.authorName || "",
    category: initialData?.category || "Other",
    image: initialData?.image || "",
    tags: initialData?.tags || [],
    published: initialData?.published || false,
    featured: initialData?.featured || false,
  });

  const [tagInput, setTagInput] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "title") {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_]+/g, "-")
        .replace(/^-+|-+$/g, "");

      setFormData((prev) => ({
        ...prev,
        title: value,
        slug: generatedSlug,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addTag = () => {
    if (
      tagInput.trim() &&
      !formData.tags.includes(tagInput.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));

      setTagInput("");
    }
  };

  const removeTag = (tag) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-3 sm:p-5 lg:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-black text-white p-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
            <FileText size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {buttonText}
            </h1>

            <p className="text-gray-300 mt-1">
              Manage blog details
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-6"
        >
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Blog Title"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="Slug"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            placeholder="Author Name"
            className="w-full border rounded-xl px-4 py-3"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          >
            <option>Car Hire</option>
            <option>Travel Tips</option>
            <option>News</option>
            <option>Events</option>
            <option>Maintenance</option>
            <option>Guides</option>
            <option>Other</option>
          </select>

          <div className="relative">
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full border rounded-xl px-4 py-3 pl-12"
            />

            <ImagePlus
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
          </div>

          <textarea
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            rows={10}
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Content"
            className="w-full border rounded-xl px-4 py-3"
          />

          {/* Tags */}
          <div>
            <div className="flex gap-3">
              <input
                type="text"
                value={tagInput}
                onChange={(e) =>
                  setTagInput(e.target.value)
                }
                placeholder="Add Tag"
                className="flex-1 border rounded-xl px-4 py-3"
              />

              <button
                type="button"
                onClick={addTag}
                className="bg-black text-white px-5 rounded-xl flex items-center gap-2"
              >
                <Plus size={18} />
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              {formData.tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2"
                >
                  {tag}

                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleChange}
              />
              Published
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
              />
              Featured
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3"
          >
            {loading ? (
              <>
                <Loader2
                  size={20}
                  className="animate-spin"
                />
                Loading...
              </>
            ) : (
              buttonText
            )}
          </button>
        </form>
      </div>
    </div>
  );
}