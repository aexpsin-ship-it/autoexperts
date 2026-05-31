"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiSearch,
  FiArrowRight,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import axiosInstance from "@/app/api/lib/axiosInstance";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const BLOGS_PER_PAGE = 12;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const { data } =
        await axiosInstance.get("/api/blog", {
          params: {
            published: true,
          },
        });

      setBlogs(data?.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  /* CATEGORY */
  const categories = useMemo(() => {
    const uniqueCategories = new Set();

    blogs.forEach((blog) => {
      uniqueCategories.add(
        blog?.category?.trim() || "General"
      );
    });

    return [
      "All",
      ...Array.from(uniqueCategories).sort(),
    ];
  }, [blogs]);

  /* FILTER */
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog?.title
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        blog?.description
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All"
          ? true
          : blog?.category === selectedCategory;

      return (
        matchesSearch && matchesCategory
      );
    });
  }, [
    blogs,
    selectedCategory,
    search,
  ]);

  /* PAGINATION */
  const totalPages = Math.ceil(
    filteredBlogs.length / BLOGS_PER_PAGE
  );

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE
  );

  /* RESET PAGE */
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory]);

  /* DATE */
  const formatDate = (date) =>
    new Date(date).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );

  /* TITLE LIMIT */
  const truncateTitle = (
    text,
    words = 7
  ) => {
    if (!text) return "";

    const splitText = text.split(" ");

    return splitText.length > words
      ? splitText
          .slice(0, words)
          .join(" ") + "..."
      : text;
  };

  /* DESCRIPTION LIMIT */
  const truncateDescription = (
    text,
    words = 15
  ) => {
    if (!text) return "";

    const splitText = text.split(" ");

    return splitText.length > words
      ? splitText
          .slice(0, words)
          .join(" ") + "..."
      : text;
  };

  return (
    <section className="min-h-screen overflow-hidden bg-[var(--primary)]">
      {/* HERO BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[var(--primary)] via-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />

        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-[var(--gold-accent)]/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-slate-700 bg-[var(--primary)]/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-accent)] backdrop-blur">
              Latest Articles & Insights
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Explore Our Professional
              Blog Collection
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Discover industry insights,
              business trends, modern
              technology updates, car
              maintenance tips, travel
              guidance, and professional
              knowledge from our expert
              editorial team.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#blogs"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-slate-700 bg-[var(--primary)]/20 px-8 text-sm font-semibold text-white backdrop-blur transition hover:bg-[var(--primary)]/30"
              >
                Explore Blogs
              </Link>

              <button className="inline-flex h-14 items-center justify-center rounded-2xl border border-slate-700 bg-[var(--primary)]/20 px-8 text-sm font-semibold text-white backdrop-blur transition hover:bg-[var(--primary)]/30">
                Latest News
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div
        id="blogs"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        {/* SEARCH */}
        <div className="mb-10 rounded-[32px] border border-slate-700 bg-[var(--primary)]/20 p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-black text-white">
                Search & Filter Blogs
              </h2>

              <p className="mt-2 text-sm text-slate-300">
                Find articles by title,
                category, or keywords.
              </p>
            </div>

            <div className="relative w-full lg:max-w-lg">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

              <input
                type="text"
                placeholder="Search blogs..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="h-14 w-full rounded-2xl border border-slate-700 bg-[var(--primary)]/10 pl-14 pr-5 text-sm font-medium text-white outline-none transition focus:border-[var(--gold-accent)] focus:bg-[var(--primary)]/20 focus:ring-4 focus:ring-[var(--gold-accent)]/20"
              />
            </div>
          </div>

          {/* CATEGORY */}
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(
                    category
                  )
                }
                className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "border-[var(--gold-accent)] bg-[var(--gold-accent)] text-white shadow-lg"
                    : "border border-[var(--gold-accent)]/20 bg-[var(--primary)]/10 text-slate-200 hover:border-[var(--gold-accent)] hover:bg-[var(--gold-accent)]/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({
              length: 6,
            }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[30px] bg-[var(--primary)]/20 border border-slate-700 shadow-sm"
              >
                <div className="h-72 animate-pulse bg-slate-200" />

                <div className="p-6">
                  <div className="mb-4 h-4 w-32 animate-pulse rounded bg-slate-200" />

                  <div className="mb-4 h-7 animate-pulse rounded bg-slate-200" />

                  <div className="mb-3 h-4 animate-pulse rounded bg-slate-200" />

                  <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* NO BLOG */}
            {paginatedBlogs.length === 0 ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[32px] border border-slate-700 bg-[var(--primary)]/20 px-5 text-center shadow-sm">
                <h3 className="text-3xl font-black text-white">
                  No Blogs Found
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                  No matching blogs were
                  found for your search or
                  selected category.
                </p>
              </div>
            ) : (
              <>
                {/* BLOG GRID */}
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                  {paginatedBlogs.map(
                    (blog) => (
                      <Link
                        key={blog._id}
                        href={`/blog/${blog.slug}`}
                        className="group"
                      >
                        <article className="flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-700 bg-[var(--primary)]/20 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                          {/* IMAGE */}
                          <div className="relative h-72 overflow-hidden">
                            <Image
                              src={
                                blog.image ||
                                "/images/blog-placeholder.jpg"
                              }
                              alt={blog.title}
                              fill
                              className="object-cover transition duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/80 via-[var(--primary)]/20 to-transparent" />

                            <div className="absolute left-5 top-5">
                              <span className="rounded-full bg-[var(--primary)]/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
                                {blog.category ||
                                  "General"}
                              </span>
                            </div>
                          </div>

                          {/* CONTENT */}
                          <div className="flex flex-1 flex-col p-6">
                            {/* DATE */}
                            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-500">
                              <FiCalendar />

                              <span>
                                {formatDate(
                                  blog.createdAt
                                )}
                              </span>
                            </div>

                            {/* TITLE */}
                            <h2 className="text-xl font-black leading-snug text-white transition group-hover:text-[var(--gold-accent)]">
                              {truncateTitle(
                                blog.title,
                                7
                              )}
                            </h2>

                            {/* DESCRIPTION */}
                            <p className="mt-4 text-sm leading-8 text-white/80">
                              {truncateDescription(
                                blog.description,
                                15
                              )}
                            </p>

                            {/* BUTTON */}
                            <div className="mt-auto pt-8">
                              <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--gold-accent)]">
                                Read Full Article

                                <FiArrowRight className="transition group-hover:translate-x-1" />
                              </span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    )
                  )}
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className="mt-14 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-medium text-slate-500">
                      Showing{" "}
                      <span className="font-bold text-white">
                        {(currentPage - 1) *
                          BLOGS_PER_PAGE +
                          1}
                      </span>{" "}
                      to{" "}
                      <span className="font-bold text-white">
                        {Math.min(
                          currentPage *
                            BLOGS_PER_PAGE,
                          filteredBlogs.length
                        )}
                      </span>{" "}
                      of{" "}
                      <span className="font-bold text-white">
                        {
                          filteredBlogs.length
                        }
                      </span>{" "}
                      blogs
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      {/* PREV */}
                      <button
                        onClick={() =>
                          setCurrentPage(
                            (prev) =>
                              Math.max(
                                prev - 1,
                                1
                              )
                          )
                        }
                        disabled={
                          currentPage === 1
                        }
                        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-[var(--primary)]/15 text-slate-200 transition hover:bg-[var(--primary)]/25 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <FiChevronLeft />
                      </button>

                      {/* PAGE */}
                      {Array.from(
                        {
                          length:
                            totalPages,
                        },
                        (_, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              setCurrentPage(
                                index + 1
                              )
                            }
                            className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border text-sm font-bold transition ${
                              currentPage === index + 1
                                ? "border-[var(--gold-accent)] bg-[var(--gold-accent)] text-white"
                                : "border border-slate-700 bg-[var(--primary)]/15 text-slate-200 hover:bg-[var(--primary)]/25"
                            }`}
                          >
                            {index + 1}
                          </button>
                        )
                      )}

                      {/* NEXT */}
                      <button
                        onClick={() =>
                          setCurrentPage(
                            (prev) =>
                              Math.min(
                                prev + 1,
                                totalPages
                              )
                          )
                        }
                        disabled={
                          currentPage ===
                          totalPages
                        }
                        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-[var(--primary)]/15 text-slate-200 transition hover:bg-[var(--primary)]/25 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <FiChevronRight />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}