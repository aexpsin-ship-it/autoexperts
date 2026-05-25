"use client";

import { useState } from "react";
import { FiStar } from "react-icons/fi";

export default function BlogRating({ blogId, averageRating, totalRatings, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const stars = [1, 2, 3, 4, 5];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating) {
      setMessage("Please choose a rating between 1 and 5.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    try {
      const res = await fetch(`/api/blog/${blogId}/rate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name.trim() || "Guest", rating }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Thanks! Your rating has been recorded.");
        setRating(0);
        setName("");
        if (onRatingSubmit) {
          onRatingSubmit(data.data);
        }
      } else {
        setMessage(data.message || "Unable to submit rating.");
      }
    } catch (error) {
      setMessage("Unable to submit rating. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-[32px] border border-slate-200 p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Leave a rating</h2>
          <p className="text-sm text-slate-500 mt-1">
            Rate this article to help other readers discover the most helpful content.
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Average score</p>
          <p className="text-2xl font-bold text-slate-900">
            {averageRating ? averageRating.toFixed(1) : "—"}
          </p>
          <p className="text-sm text-slate-500">
            {totalRatings ? `${totalRatings} review${totalRatings === 1 ? "" : "s"}` : "No ratings yet"}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-3">
          {stars.map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="text-3xl transition hover:text-amber-400"
            >
              <FiStar className={star <= rating ? "text-amber-400" : "text-slate-300"} />
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 outline-none focus:border-slate-900"
        />

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-2xl bg-slate-900 px-6 py-4 text-white font-semibold transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Submit rating"}
        </button>
      </form>

      {message ? (
        <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
          {message}
        </p>
      ) : null}
    </div>
  );
}
