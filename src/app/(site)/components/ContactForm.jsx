"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import axiosInstance from "@/app/api/lib/axiosInstance";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await axiosInstance.post("/api/contact", formData);

      if (response.data.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[var(--soft-white)]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-[var(--primary)]"
          >
            Get In
            <span className="text-[var(--gold-accent)]"> Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[var(--cool-gray)] mt-6 text-lg"
          >
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-light)] flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-[var(--gold-accent)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--primary)] mb-1">
                    Email
                  </h3>
                  <p className="text-[var(--cool-gray)]">
                    contact@autoexperts.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-light)] flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-[var(--gold-accent)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--primary)] mb-1">
                    Phone
                  </h3>
                  <p className="text-[var(--cool-gray)]">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-light)] flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-[var(--gold-accent)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--primary)] mb-1">
                    Address
                  </h3>
                  <p className="text-[var(--cool-gray)]">
                    123 Automotive Street, Tech City, TC 12345
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg"
          >
            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl">
                <p className="text-green-700 font-medium">
                  ✓ Message sent successfully! We'll get back to you soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--primary)]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[var(--gold-accent)] transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--primary)]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[var(--gold-accent)] transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--primary)]">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[var(--gold-accent)] transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--primary)]">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[var(--gold-accent)] transition"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-2 text-[var(--primary)]">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                rows={6}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[var(--gold-accent)] transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-[var(--gold-accent)] text-black px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
