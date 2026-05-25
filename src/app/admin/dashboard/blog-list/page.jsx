"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState("");

  const fetchBlogs = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/blog");
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to load blogs.");
      }
      setBlogs(data.data || []);
    } catch (err) {
      setError(err.message || "Failed to load blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog post?")) {
      return;
    }

    setDeleting(id);

    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to delete blog.");
      }
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (err) {
      window.alert(err.message || "Could not delete blog.");
    } finally {
      setDeleting("");
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 space-y-4 rounded-[32px] bg-white p-6 shadow-md sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.3em] text-yellow-500">
              Blog Management
            </p>
            <h1 className="mt-3 text-3xl font-black text-slate-900">Manage Blog Posts</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              View, edit, or delete blog posts from the admin dashboard.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/dashboard"
              className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Back to Dashboard
            </Link>
            <Link
              href="/admin/dashboard/blog-add"
              className="inline-flex items-center justify-center rounded-3xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Add New Blog
            </Link>
          </div>
        </div>
      </div>

      {error ? (
        <div className="mb-6 rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      {loading ? (
        <div className="rounded-[32px] bg-white p-8 text-center text-slate-600 shadow-sm">
          Loading blog posts...
        </div>
      ) : blogs.length === 0 ? (
        <div className="rounded-[32px] bg-white p-8 text-center text-slate-600 shadow-sm">
          No blog posts found. Create one using the button above.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog._id} className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              {blog.image ? (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-44 w-full object-cover"
                />
              ) : (
                <div className="flex h-44 items-center justify-center bg-slate-100 text-slate-400">
                  No image available
                </div>
              )}

              <div className="p-5">
                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[.2em] text-slate-500">
                  <span>{blog.category || "General"}</span>
                  <span>•</span>
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900">{blog.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">{blog.description}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/admin/dashboard/blogs/${blog._id}`}
                    className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(blog._id)}
                    disabled={deleting === blog._id}
                    className="inline-flex items-center justify-center rounded-3xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-slate-400"
                  >
                    {deleting === blog._id ? "Deleting…" : "Delete"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
