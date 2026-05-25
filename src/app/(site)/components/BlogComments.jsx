"use client";

import { useEffect, useState } from "react";

export default function BlogComments({ blogId }) {
  const [comments, setComments] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const fetchComments = async () => {
    const res = await fetch(
      `/api/blog/${blogId}/comments`
    );

    const data = await res.json();

    setComments(data.data || []);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `/api/blog/${blogId}/comments`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (data.success) {
      setFormData({
        name: "",
        email: "",
        comment: "",
      });

      fetchComments();
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6">
        Comments
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-10"
      >
        <input
          type="text"
          placeholder="Name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          className="w-full border p-4 rounded-xl"
        />

        <textarea
          placeholder="Comment"
          required
          value={formData.comment}
          onChange={(e) =>
            setFormData({
              ...formData,
              comment: e.target.value,
            })
          }
          className="w-full border p-4 rounded-xl h-32"
        />

        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Submit Comment
        </button>
      </form>

      <div className="space-y-5">
        {comments.map((item) => (
          <div
            key={item._id}
            className="border rounded-2xl p-5"
          >
            <h3 className="font-bold">
              {item.name}
            </h3>

            <p className="text-gray-500 text-sm mb-2">
              {item.email}
            </p>

            <p>{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}