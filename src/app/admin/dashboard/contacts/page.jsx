"use client";

import { useState, useEffect } from "react";
import {
  Trash2,
  Mail,
  Loader2,
  Eye,
  CalendarDays,
  Phone,
  Filter,
  RefreshCcw,
} from "lucide-react";

import axiosInstance from "@/app/api/lib/axiosInstance";

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedContact, setSelectedContact] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [updating, setUpdating] = useState(false);

  const statuses = [
    { value: "", label: "All Messages" },
    { value: "new", label: "New" },
    { value: "read", label: "Read" },
    { value: "replied", label: "Replied" },
  ];

  useEffect(() => {
    fetchContacts();
  }, [page, statusFilter]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError("");

      const params = {
        page,
        limit: 10,
      };

      if (statusFilter) {
        params.status = statusFilter;
      }

      const { data } = await axiosInstance.get(
        "/api/contact",
        { params }
      );

      setContacts(data?.data || []);
      setTotalPages(data?.pagination?.pages || 1);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Failed to fetch contacts"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (contactId) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      setDeleting(contactId);

      await axiosInstance.delete(
        `/api/contact/${contactId}`
      );

      if (selectedContact?._id === contactId) {
        setSelectedContact(null);
      }

      fetchContacts();
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Failed to delete message"
      );
    } finally {
      setDeleting(null);
    }
  };

  const handleStatusChange = async (
    contactId,
    newStatus
  ) => {
    try {
      setUpdating(true);

      const { data } = await axiosInstance.patch(
        `/api/contact/${contactId}`,
        {
          status: newStatus,
        }
      );

      setSelectedContact(data?.data);

      fetchContacts();
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Failed to update status"
      );
    } finally {
      setUpdating(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
    );
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-700 border border-blue-200";

      case "read":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";

      case "replied":
        return "bg-green-100 text-green-700 border border-green-200";

      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] p-3 sm:p-5 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* TOP HEADER */}
        <div className="bg-gradient-to-r from-black to-zinc-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-yellow-400 uppercase tracking-[3px] text-sm font-semibold mb-2">
                Auto Experts Dashboard
              </p>

              <h1 className="text-3xl sm:text-4xl font-black">
                Customer Messages
              </h1>

              <p className="text-gray-300 mt-3 max-w-2xl">
                Manage inquiries, customer support
                requests, and communication from your
                website contact form.
              </p>
            </div>

            <button
              onClick={fetchContacts}
              className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
            >
              <RefreshCcw size={18} />
              Refresh
            </button>
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mt-6">
            <p className="text-red-600 font-medium">
              {error}
            </p>
          </div>
        )}

        {/* FILTER */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-5 mt-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-black">
                Message Management
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Filter and manage customer messages
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Filter
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(
                      e.target.value
                    );
                    setPage(1);
                  }}
                  className="h-12 pl-10 pr-5 rounded-2xl border border-gray-300 bg-white outline-none focus:border-black"
                >
                  {statuses.map((status) => (
                    <option
                      key={status.value}
                      value={status.value}
                    >
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="text-center">
              <Loader2
                size={45}
                className="animate-spin mx-auto text-black"
              />

              <p className="mt-4 text-gray-600 font-medium">
                Loading customer messages...
              </p>
            </div>
          </div>
        ) : contacts.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 mt-6 text-center shadow-sm border border-gray-200">
            <Mail
              size={60}
              className="mx-auto text-gray-300"
            />

            <h3 className="mt-5 text-2xl font-bold text-black">
              No Messages Found
            </h3>

            <p className="text-gray-500 mt-2">
              Customer messages will appear here.
            </p>
          </div>
        ) : (
          <>
            {/* DETAIL VIEW */}
            {selectedContact ? (
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 mt-6">
                {/* HEADER */}
                <div className="bg-black text-white p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h2 className="text-3xl font-black">
                        {selectedContact.name}
                      </h2>

                      <p className="text-gray-300 mt-2">
                        {
                          selectedContact.email
                        }
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        setSelectedContact(null)
                      }
                      className="text-white text-3xl hover:opacity-70"
                    >
                      ×
                    </button>
                  </div>
                </div>

                {/* BODY */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-gray-50 rounded-2xl p-5">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Email Address
                      </p>

                      <p className="font-semibold text-black break-all">
                        {
                          selectedContact.email
                        }
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-5">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Phone Number
                      </p>

                      <p className="font-semibold text-black">
                        {selectedContact.phone ||
                          "Not Provided"}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-5">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Subject
                      </p>

                      <p className="font-semibold text-black">
                        {
                          selectedContact.subject
                        }
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-5">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Received On
                      </p>

                      <p className="font-semibold text-black">
                        {formatDate(
                          selectedContact.createdAt
                        )}
                      </p>
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                      Customer Message
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 text-gray-700 whitespace-pre-wrap leading-relaxed">
                      {selectedContact.message}
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex flex-col lg:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
                    <select
                      value={
                        selectedContact.status
                      }
                      onChange={(e) =>
                        handleStatusChange(
                          selectedContact._id,
                          e.target.value
                        )
                      }
                      className="h-14 px-5 rounded-2xl border border-gray-300 outline-none focus:border-black"
                    >
                      <option value="new">
                        Mark as New
                      </option>

                      <option value="read">
                        Mark as Read
                      </option>

                      <option value="replied">
                        Mark as Replied
                      </option>
                    </select>

                    <button
                      onClick={() =>
                        handleDelete(
                          selectedContact._id
                        )
                      }
                      disabled={
                        deleting ===
                        selectedContact._id
                      }
                      className="h-14 px-6 rounded-2xl bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {deleting ===
                      selectedContact._id ? (
                        <>
                          <Loader2
                            size={18}
                            className="animate-spin"
                          />
                          Deleting...
                        </>
                      ) : (
                        <>
                          <Trash2 size={18} />
                          Delete Message
                        </>
                      )}
                    </button>

                    {updating && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Loader2
                          size={16}
                          className="animate-spin"
                        />
                        Updating...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* PROFESSIONAL TABLE */
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px]">
                    <thead className="bg-black text-white">
                      <tr>
                        <th className="px-6 py-5 text-left text-sm font-semibold">
                          Customer
                        </th>

                        <th className="px-6 py-5 text-left text-sm font-semibold">
                          Subject
                        </th>

                        <th className="px-6 py-5 text-left text-sm font-semibold">
                          Contact
                        </th>

                        <th className="px-6 py-5 text-left text-sm font-semibold">
                          Date
                        </th>

                        <th className="px-6 py-5 text-left text-sm font-semibold">
                          Status
                        </th>

                        <th className="px-6 py-5 text-center text-sm font-semibold">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {contacts.map((contact) => (
                        <tr
                          key={contact._id}
                          className="border-b border-gray-100 hover:bg-gray-50 transition"
                        >
                          <td className="px-6 py-5">
                            <div>
                              <h3 className="font-bold text-black">
                                {contact.name}
                              </h3>

                              <p className="text-sm text-gray-500 mt-1">
                                {
                                  contact.email
                                }
                              </p>
                            </div>
                          </td>

                          <td className="px-6 py-5">
                            <div>
                              <p className="font-semibold text-black">
                                {
                                  contact.subject
                                }
                              </p>

                              <p className="text-sm text-gray-500 mt-1 line-clamp-1 max-w-xs">
                                {
                                  contact.message
                                }
                              </p>
                            </div>
                          </td>

                          <td className="px-6 py-5">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Phone size={15} />
                              {contact.phone ||
                                "N/A"}
                            </div>
                          </td>

                          <td className="px-6 py-5">
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                              <CalendarDays
                                size={15}
                              />

                              {formatDate(
                                contact.createdAt
                              )}
                            </div>
                          </td>

                          <td className="px-6 py-5">
                            <span
                              className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold capitalize ${getStatusStyle(
                                contact.status
                              )}`}
                            >
                              {contact.status}
                            </span>
                          </td>

                          <td className="px-6 py-5">
                            <div className="flex items-center justify-center gap-3">
                              <button
                                onClick={() =>
                                  setSelectedContact(
                                    contact
                                  )
                                }
                                className="h-11 w-11 rounded-xl bg-black text-white flex items-center justify-center hover:scale-105 transition"
                              >
                                <Eye size={18} />
                              </button>

                              <button
                                onClick={() =>
                                  handleDelete(
                                    contact._id
                                  )
                                }
                                disabled={
                                  deleting ===
                                  contact._id
                                }
                                className="h-11 w-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition"
                              >
                                {deleting ===
                                contact._id ? (
                                  <Loader2
                                    size={18}
                                    className="animate-spin"
                                  />
                                ) : (
                                  <Trash2
                                    size={18}
                                  />
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* PAGINATION */}
            {!selectedContact &&
              totalPages > 1 && (
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  <button
                    onClick={() =>
                      setPage((prev) =>
                        Math.max(prev - 1, 1)
                      )
                    }
                    disabled={page === 1}
                    className="px-5 py-3 rounded-2xl border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </button>

                  {Array.from(
                    { length: totalPages },
                    (_, i) => i + 1
                  ).map((p) => (
                    <button
                      key={p}
                      onClick={() =>
                        setPage(p)
                      }
                      className={`h-12 w-12 rounded-2xl font-semibold ${
                        page === p
                          ? "bg-black text-white"
                          : "bg-white border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {p}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setPage((prev) =>
                        Math.min(
                          prev + 1,
                          totalPages
                        )
                      )
                    }
                    disabled={
                      page === totalPages
                    }
                    className="px-5 py-3 rounded-2xl border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
          </>
        )}
      </div>
    </div>
  );
}