"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

const bannerData = {
  badge: "European Auto Care",
  title: "Premium European Car Repair & Maintenance Services",
  description:
    "From BMW and Mercedes-Benz to Audi, Porsche, Jaguar, and Volkswagen — our certified mechanics provide precision diagnostics, advanced repairs, engine tuning, brake servicing, suspension work, and complete luxury vehicle maintenance with dealership-level expertise.",
  buttonText: "Book Your Service",
};

export default function ContactBanner({
  data = bannerData,
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--primary)] py-16 sm:py-20 lg:py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[var(--gold-accent)] opacity-10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--gold-accent)] opacity-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-[var(--gold-accent)]/30 bg-[var(--accent-light)] px-5 py-2 text-sm font-semibold text-[var(--gold-accent)]">
              {data.badge}
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
              {data.title}
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-300">
              {data.description}
            </p>

            {/* CTA Button */}
            <button className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-[var(--gold-accent)] px-7 py-4 font-semibold text-black transition-all duration-300 hover:bg-white">
              {data.buttonText}

              <Wrench
                size={18}
                className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              />
            </button>
          </motion.div>

          {/* Right Side Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Circle */}
            <div className="relative flex h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
              {/* Border */}
              <div className="absolute inset-0 rounded-full border border-[var(--gold-accent)]/20" />

              {/* Icon */}
              <Wrench
                className="text-[var(--gold-accent)]"
                size={120}
                strokeWidth={1.5}
              />

              {/* Glow */}
              <div className="absolute -z-10 h-full w-full rounded-full bg-[var(--gold-accent)] opacity-20 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}