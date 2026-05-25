"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function Office() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    toast.success("Message Sent Successfully");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    toast.error(error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="bg-[var(--background)] py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left Side Form */}
          <div className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-2xl p-5 sm:p-8 lg:p-10">
            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-[var(--gold-accent)] opacity-10 blur-3xl" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold-accent)]/30 bg-[var(--accent-light)] px-5 py-2 text-sm font-semibold text-[var(--gold-accent)]">
                Contact Us
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[var(--primary)]">
                Let’s Connect
                <span className="text-[var(--gold-accent)]">
                  {" "}
                  With Us
                </span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[var(--cool-gray)]">
                Fill out the form and our expert team will contact you shortly
                with the best solutions for your business and digital growth.
              </p>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                {/* Name */}
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--gold-accent)]"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="h-14 w-full rounded-2xl border border-gray-300 bg-[var(--soft-white)] pl-12 pr-4 text-[var(--foreground)] outline-none transition-all duration-300 focus:border-[var(--gold-accent)] focus:ring-4 focus:ring-[var(--accent-light)]"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--gold-accent)]"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="h-14 w-full rounded-2xl border border-gray-300 bg-[var(--soft-white)] pl-12 pr-4 text-[var(--foreground)] outline-none transition-all duration-300 focus:border-[var(--gold-accent)] focus:ring-4 focus:ring-[var(--accent-light)]"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--gold-accent)]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="h-14 w-full rounded-2xl border border-gray-300 bg-[var(--soft-white)] pl-12 pr-4 text-[var(--foreground)] outline-none transition-all duration-300 focus:border-[var(--gold-accent)] focus:ring-4 focus:ring-[var(--accent-light)]"
                  />
                </div>

                {/* Subject */}
                <div className="relative">
                  <MessageSquare
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--gold-accent)]"
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="h-14 w-full rounded-2xl border border-gray-300 bg-[var(--soft-white)] pl-12 pr-4 text-[var(--foreground)] outline-none transition-all duration-300 focus:border-[var(--gold-accent)] focus:ring-4 focus:ring-[var(--accent-light)]"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows="5"
                    required
                    className="w-full resize-none rounded-2xl border border-gray-300 bg-[var(--soft-white)] p-4 text-[var(--foreground)] outline-none transition-all duration-300 focus:border-[var(--gold-accent)] focus:ring-4 focus:ring-[var(--accent-light)]"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-[var(--gold-accent)] px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
                >
                  {loading ? "Sending..." : "Send Message"}

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>

          {/* Right Side Map */}
          <div className="overflow-hidden rounded-[32px] border border-gray-200 shadow-2xl min-h-[400px] lg:min-h-full">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.659540780507!2d77.19921155806023!3d28.701969666845984!2m3!1f0!2f0!3f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d017fbbfc6e7d%3A0x7f21dd7b64e26c26!2sDG%20Royals%20Best%20Digital%20Marketing%20Graphic%20Designing%20%26%20Web%20Design%20Development%20Institute%20in%20Delhi!5e0!3m2!1sen!2sin!4v1719120341663!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="h-full min-h-[400px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}