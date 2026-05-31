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
    <section className="relative overflow-hidden bg-[var(--primary)] py-16 sm:py-20 lg:py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[var(--gold-accent)] opacity-10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--gold-accent)] opacity-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side Form */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl p-5 sm:p-8 lg:p-10 h-full flex">
            <div className="relative z-10 flex-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold-accent)]/30 bg-[var(--accent-light)] px-5 py-2 text-sm font-semibold text-[var(--gold-accent)]">
                Contact Us
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-white">
                Let’s Connect
                <span className="text-[var(--gold-accent)]"> With Us</span>
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-300">
                Fill out the form and our expert team will contact you shortly
                with the best solutions for your business and digital growth.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-5 overflow-auto">
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
                    className="h-14 w-full rounded-2xl border border-white/20 bg-white/5 pl-12 pr-4 text-white placeholder:text-white/70 outline-none transition-all duration-300 focus:border-[var(--gold-accent)] focus:ring-4 focus:ring-[var(--accent-light)]"
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
                    className="h-14 w-full rounded-2xl border border-white/20 bg-white/5 pl-12 pr-4 text-white placeholder:text-white/70 outline-none transition-all duration-300 focus:border-[var(--gold-accent)] focus:ring-4 focus:ring-[var(--accent-light)]"
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
                    className="h-14 w-full rounded-2xl border border-white/20 bg-white/5 pl-12 pr-4 text-white placeholder:text-white/70 outline-none transition-all duration-300 focus:border-[var(--gold-accent)] focus:ring-4 focus:ring-[var(--accent-light)]"
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
                    className="h-14 w-full rounded-2xl border border-white/20 bg-white/5 pl-12 pr-4 text-white placeholder:text-white/70 outline-none transition-all duration-300 focus:border-[var(--gold-accent)] focus:ring-4 focus:ring-[var(--accent-light)]"
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
                    className="w-full resize-none rounded-2xl border border-white/20 bg-white/5 p-4 text-white placeholder:text-white/70 outline-none transition-all duration-300 focus:border-[var(--gold-accent)] focus:ring-4 focus:ring-[var(--accent-light)]"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-[var(--gold-accent)] px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-white"
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
          <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-2xl bg-white/5 h-64 sm:h-80 md:h-[520px] lg:h-full">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.659540780507!2d77.19921155806023!3d28.701969666845984!2m3!1f0!2f0!3f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d017fbbfc6e7d%3A0x7f21dd7b64e26c26!2sDG%20Royals%20Best%20Digital%20Marketing%20Graphic%20Designing%20%26%20Web%20Design%20Development%20Institute%20in%20Delhi!5e0!3m2!1sen!2sin!4v1719120341663!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}