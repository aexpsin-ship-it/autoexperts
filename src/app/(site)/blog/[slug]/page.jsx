
"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import {
  FiCalendar,
  FiArrowLeft,
  FiClock,
  FiEye,
  FiUser,
  FiStar,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";

import axiosInstance from "@/app/api/lib/axiosInstance";

export default function BlogDetailsPage() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);

  const [latestBlogs, setLatestBlogs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [commentForm, setCommentForm] =
    useState({
      name: "",
      email: "",
      comment: "",
      rating: 5,
    });

  const [comments, setComments] =
    useState([]);

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);

      const { data } =
        await axiosInstance.get(
          `/api/blog/${slug}`
        );

      if (data?.success) {
        setBlog(data.data);

        fetchLatestBlogs(data.data._id);

        setComments(
          data?.data?.comments || []
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLatestBlogs = async (id) => {
    try {
      const { data } =
        await axiosInstance.get(
          "/api/blog",
          {
            params: {
              published: true,
            },
          }
        );

      const filtered = data?.data
        ?.filter(
          (item) => item._id !== id
        )
        ?.sort(
          (a, b) =>
            new Date(b.createdAt) -
            new Date(a.createdAt)
        )
        ?.slice(0, 5);

      setLatestBlogs(filtered || []);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  const truncateText = (
    text,
    words = 10
  ) => {
    if (!text) return "";

    const splitText = text
      .trim()
      .split(/\s+/);

    return splitText.length > words
      ? splitText
          .slice(0, words)
          .join(" ") + " ..."
      : text;
  };

  const averageRating = useMemo(() => {
    if (!comments.length) return 5;

    const total = comments.reduce(
      (acc, item) =>
        acc + Number(item.rating || 5),
      0
    );

    return (
      total / comments.length
    ).toFixed(1);
  }, [comments]);

  const handleCommentChange = (
    event
  ) => {
    const { name, value } =
      event.target;

    setCommentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitComment = async (
    event
  ) => {
    event.preventDefault();

    const newComment = {
      ...commentForm,
      createdAt: new Date(),
    };

    setComments((prev) => [
      newComment,
      ...prev,
    ]);

    setCommentForm({
      name: "",
      email: "",
      comment: "",
      rating: 5,
    });

    alert(
      "Comment submitted successfully."
    );
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--primary)]">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-slate-700 border-t-[var(--gold-accent)]" />

          <h2 className="mt-6 text-2xl font-bold text-white">
            Loading Blog...
          </h2>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--primary)] px-4">
        <h2 className="text-center text-4xl font-black text-white">
          Blog Not Found
        </h2>

        <p className="mt-4 max-w-md text-center text-slate-300">
          The requested blog post does
          not exist or may have been
          removed.
        </p>

        <Link
          href="/blog"
          className="mt-8 inline-flex h-14 items-center justify-center rounded-2xl bg-[var(--primary)] px-8 text-sm font-semibold text-white transition hover:bg-[var(--primary)]/80"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen overflow-hidden bg-[var(--primary)] pb-20">
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[var(--primary)] via-slate-900 to-slate-800">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[var(--gold-accent)]/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-[var(--primary)]/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-[var(--primary)]/30"
          >
            <FiArrowLeft />
            Back to Blogs
          </Link>

          <div className="mt-10 max-w-4xl">
            <span className="rounded-full bg-[var(--gold-accent)] px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[var(--primary)]">
              {blog.category || "General"}
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {blog.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {blog.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <FiCalendar />
                {formatDate(
                  blog.createdAt
                )}
              </div>

              <div className="flex items-center gap-2">
                <FiUser />
                {blog.authorName ||
                  "Admin"}
              </div>

              <div className="flex items-center gap-2">
                <FiEye />
                {blog.views || 0} Views
              </div>

              <div className="flex items-center gap-2">
                <FiClock />
                {blog.readTime || 5} min
                read
              </div>

              <div className="flex items-center gap-2">
                <FiStar />
                {averageRating} Rating
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.7fr_0.7fr]">
          <div>
            <div className="relative mb-10 h-[260px] overflow-hidden rounded-[32px] shadow-2xl sm:h-[450px] lg:h-[550px]">
              <Image
                src={
                  blog.image ||
                  "/images/blog-placeholder.jpg"
                }
                alt={blog.title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>

            <div className="overflow-hidden rounded-[32px] border border-slate-700 bg-[var(--primary)]/10 shadow-sm">
              {/* <div className="border-b border-slate-200 p-6 sm:p-8">
                <h2 className="text-3xl font-black text-slate-900">
                  Blog Content
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Explore the complete
                  article details and
                  insights below.
                </p>
              </div> */}

              <div className="p-6 sm:p-10">
                {blog.contentBlocks &&
                blog.contentBlocks.length >
                  0 ? (
                  <div className="space-y-14">
                    {blog.contentBlocks.map(
                      (block, index) => (
                        <div
                          key={index}
                          className="space-y-8"
                        >
                          {block.image ? (
                            <div className="relative h-[250px] overflow-hidden rounded-[28px] sm:h-[450px]">
                              <Image
                                src={
                                  block.image
                                }
                                alt={`content-${index}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : null}

                          <div className="prose prose-lg max-w-none">
                            <div className="whitespace-pre-wrap text-base leading-8 text-slate-300 sm:text-lg sm:leading-10">
                              {
                                block.text
                              }
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <div className="prose prose-lg max-w-none">
                    <div className="whitespace-pre-wrap text-base leading-8 text-slate-300 sm:text-lg sm:leading-10">
                      {blog.content}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* SIDEBAR */}
          <aside>
            <div className="sticky top-24 space-y-8">
              <div className="overflow-hidden rounded-[32px] border border-slate-700 bg-[var(--primary)]/20 shadow-sm">
                <div className="border-b border-slate-700 p-6 sm:p-8">
                  <h3 className="text-2xl font-black text-white">
                    Latest Blogs
                  </h3>

                  <p className="mt-2 text-sm text-slate-300">
                    Explore our latest articles and updates.
                  </p>
                </div>

                <div className="p-5 space-y-4">
                  {latestBlogs.map((item, index) => (
                    <Link
                      href={`/blog/${item.slug}`}
                      key={item._id}
                      className="group flex flex-col gap-3 rounded-3xl border border-slate-700 bg-[var(--primary)]/10 p-5 transition hover:bg-[var(--primary)]/20 hover:shadow-md sm:flex-row sm:items-center"
                    >
                      <div className="min-w-0 flex-1">
                        <h4 className="line-clamp-2 text-sm font-bold leading-7 text-white transition group-hover:text-[var(--gold-accent)] sm:text-base">
                          {truncateText(item.title, 12)}
                        </h4>

                        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-300 sm:text-sm">
                          <FiCalendar />
                          {formatDate(item.createdAt)}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-slate-700 bg-[var(--primary)]/10 shadow-sm">
                <div className="border-b border-slate-700 p-2 sm:p-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-black text-white">
                        Comments & Ratings
                      </h2>

                      <p className="mt-2 text-sm text-slate-300">
                        Share your thoughts about this blog post.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-black px-5 py-3 text-center text-white sm:px-6 sm:py-4">
                      <p className="text-3xl font-black leading-none">
                        {averageRating}
                      </p>

                      <div className="mt-1 flex justify-center gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <FiStar
                            key={index}
                            className="fill-[var(--gold-accent)] text-[var(--gold-accent)]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-slate-700 p-2 sm:p-4">
                  <div className="space-y-6">
                    {comments.length > 0 ? (
                      comments.map((comment, index) => (
                        <div
                          key={index}
                          className="rounded-[28px] border border-slate-700 bg-[var(--primary)]/10 p-5 sm:p-6"
                        >
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h4 className="text-lg font-bold text-white sm:text-xl">
                                {comment.name}
                              </h4>

                              <p className="mt-1 text-xs font-medium text-slate-300 sm:text-sm">
                                {formatDate(comment.createdAt)}
                              </p>
                            </div>

                            <div className="flex gap-1">
                              {Array.from({ length: 5 }).map((_, index) => (
                                <FiStar
                                  key={index}
                                  className={`${
                                    index + 1 <= comment.rating
                                      ? "fill-[var(--gold-accent)] text-[var(--gold-accent)]"
                                      : "text-slate-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>

                          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                            {comment.comment}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="rounded-[28px] border border-dashed border-slate-700 bg-[var(--primary)]/10 px-6 py-14 text-center">
                        <FiMessageCircle className="mx-auto text-5xl text-slate-400" />

                        <h3 className="mt-5 text-2xl font-bold text-white">
                          No Comments Yet
                        </h3>

                        <p className="mt-2 text-sm text-slate-300">
                          Be the first person to leave a comment and rating.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-2 sm:p-4">
                  <form onSubmit={handleSubmitComment} className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <input
                        type="text"
                        name="name"
                        required
                        value={commentForm.name}
                        onChange={handleCommentChange}
                        placeholder="Your Name"
                        className="h-10 rounded-3xl border border-slate-700 bg-[var(--primary)]/10 px-5 text-sm font-medium text-white outline-none transition focus:border-[var(--gold-accent)] focus:bg-[var(--primary)]/20 focus:ring-4 focus:ring-[var(--gold-accent)]/20"
                      />

                      <input
                        type="email"
                        name="email"
                        required
                        value={commentForm.email}
                        onChange={handleCommentChange}
                        placeholder="Your Email"
                        className="h-10 rounded-3xl border border-slate-700 bg-[var(--primary)]/10 px-5 text-sm font-medium text-white outline-none transition focus:border-[var(--gold-accent)] focus:bg-[var(--primary)]/20 focus:ring-4 focus:ring-[var(--gold-accent)]/20"
                      />
                    </div>

                    <textarea
                      rows={2}
                      name="comment"
                      required
                      value={commentForm.comment}
                      onChange={handleCommentChange}
                      placeholder="Write your comment..."
                      className="w-full rounded-[28px] border border-slate-700 bg-[var(--primary)]/10 p-5 text-sm font-medium text-white outline-none transition focus:border-[var(--gold-accent)] focus:bg-[var(--primary)]/20 focus:ring-4 focus:ring-[var(--gold-accent)]/20"
                    />

                    <div>
                      <p className="mb-3 text-sm font-semibold text-white">
                        Give Rating
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() =>
                              setCommentForm((prev) => ({
                                ...prev,
                                rating: star,
                              }))
                            }
                            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-white/5 text-slate-300 transition hover:border-[var(--gold-accent)] hover:text-[var(--gold-accent)]"
                          >
                            <FiStar
                              size={20}
                              className={`${
                                commentForm.rating >= star
                                  ? "fill-[var(--gold-accent)] text-[var(--gold-accent)]"
                                  : "text-slate-300"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-3xl border border-[var(--gold-accent)] bg-[var(--primary)] px-8 text-sm font-semibold text-white transition hover:bg-[var(--primary)]/80"
                    >
                      <FiSend />
                      Submit Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
