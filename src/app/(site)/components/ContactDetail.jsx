"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

const contactDetails = [
  {
    id: 1,
    title: "Visit Us",
    icon: MapPin,
    description: [
      "3rd Floor Rana Nagar Colony",
      "Chhitupur Sigra Varanasi,",
      "Uttar Pradesh 221010",
    ],
  },
  {
    id: 2,
    title: "Call Us",
    icon: Phone,
    description: ["+91 9161276060"],
  },
  {
    id: 3,
    title: "Email Us",
    icon: Mail,
    description: ["info@banarasdigitalsolution.com"],
  },
  {
    id: 4,
    title: "Working Hours",
    icon: Clock3,
    description: [
      "Monday - Sunday",
      "10:00 AM - 7:00 PM",
    ],
  },
];

export default function ContactDetail() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary)] py-14 sm:py-16 lg:py-20">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[var(--gold-accent)] opacity-10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--gold-accent)] opacity-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] border border-white/10 bg-white p-6 sm:p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-[var(--soft-white)] p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[var(--gold-accent)] hover:shadow-xl"
                >
                  {/* Glow */}
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-[var(--gold-accent)] opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20" />

                  {/* Icon */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent-light)] text-[var(--gold-accent)] transition-all duration-500 group-hover:bg-[var(--gold-accent)] group-hover:text-black">
                    <Icon size={30} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold text-[var(--primary)]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <div className="mt-4 space-y-1">
                    {item.description.map((line, index) => (
                      <p
                        key={index}
                        className="text-sm sm:text-base leading-relaxed text-[var(--cool-gray)] break-words"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Hover Border */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 group-hover:border-[var(--gold-accent)]/40" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}