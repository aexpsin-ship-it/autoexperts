"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

const teamMembers = [
  {
    name: "Michael Carter",
    role: "Founder & Automotive Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    desc: "Luxury automotive specialist with 15+ years of expertise in premium vehicle engineering and diagnostics.",
  },

  {
    name: "Sophia Williams",
    role: "Senior Service Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    desc: "Leading advanced servicing operations with precision quality standards and customer-first excellence.",
  },

  {
    name: "Daniel Smith",
    role: "Performance Engineer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    desc: "Specialized in luxury car performance upgrades, ECU tuning, and premium automotive technologies.",
  },

  {
    name: "Emma Johnson",
    role: "Customer Experience Lead",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    desc: "Ensuring exceptional client relationships and delivering world-class automotive experiences.",
  },
];

export default function OurPeople() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary)] py-24 px-4 sm:px-6 lg:px-12">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] bg-[var(--gold-accent)] opacity-10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-[var(--gold-accent)] opacity-10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--gold-accent)] bg-[var(--primary)]/10 px-5 py-2 text-sm text-[var(--gold-accent)]"
          >
            Our Team
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-2xl font-black text-white sm:text-3xl lg:text-4xl"
          >
            Meet Our{" "}
            <span className="text-[var(--gold-accent)]">
              Automotive Experts
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-relaxed text-slate-300"
          >
            A passionate team of automotive professionals delivering
            innovation, luxury vehicle expertise, and premium customer
            experiences.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-[var(--primary)]/10 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={700}
                  height={900}
                  className="h-[420px] w-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

                {/* Social Icons */}
                <div className="absolute top-5 right-5 flex translate-x-10 flex-col gap-3 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                  <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[var(--primary)]/10 text-white backdrop-blur-xl transition-all duration-300 hover:bg-[var(--gold-accent)] hover:text-black">
                    <Globe size={18} />
                  </button>

                  <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[var(--primary)]/10 text-white backdrop-blur-xl transition-all duration-300 hover:bg-[var(--gold-accent)] hover:text-black">
                    <Mail size={18} />
                  </button>

                  <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[var(--primary)]/10 text-white backdrop-blur-xl transition-all duration-300 hover:bg-[var(--gold-accent)] hover:text-black">
                    <Phone size={18} />
                  </button>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--gold-accent)] px-4 py-2 text-xs font-semibold text-black">
                    Premium Expert
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {member.name}
                  </h3>

                  <p className="mt-1 font-medium text-[var(--gold-accent)]">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="leading-relaxed text-slate-300">
                  {member.desc}
                </p>

                <button className="group/btn mt-6 flex items-center gap-2 font-semibold text-[var(--gold-accent)]">
                  View Profile

                  <ArrowRight
                    size={18}
                    className="transition-all duration-300 group-hover/btn:translate-x-1"
                  />
                </button>
              </div>

              {/* Hover Border */}
              <div className="pointer-events-none absolute inset-0 rounded-[36px] border-2 border-transparent transition-all duration-500 group-hover:border-[var(--gold-accent)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}