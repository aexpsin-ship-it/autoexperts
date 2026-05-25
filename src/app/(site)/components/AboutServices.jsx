"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  CarFront,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Premium Diagnostics",
    desc: "Advanced diagnostics and intelligent automotive solutions for BMW, Audi, Mercedes & luxury vehicles.",
  },
  {
    icon: Wrench,
    title: "Expert Maintenance",
    desc: "Professional maintenance services using genuine parts and certified automotive expertise.",
  },
  {
    icon: CarFront,
    title: "Luxury Car Solutions",
    desc: "Complete premium automotive infrastructure, detailing, and performance enhancement.",
  },
];

export default function AboutServices() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[var(--soft-white)]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-black text-[var(--primary)]"
          >
            Why Choose
            <span className="text-[var(--gold-accent)]">
              {" "}
              AutoExperts
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[var(--cool-gray)] mt-6 text-lg"
          >
            Delivering innovation, precision, and unmatched
            luxury automotive experiences.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-white rounded-[36px] border border-gray-200 p-8 hover:bg-[var(--primary)] hover:-translate-y-3 transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              <div className="w-20 h-20 rounded-3xl bg-[var(--accent-light)] flex items-center justify-center mb-7 group-hover:bg-[var(--gold-accent)] transition-all duration-500">

                <service.icon
                  size={40}
                  className="text-[var(--gold-accent)] group-hover:text-black"
                />
              </div>

              <h3 className="text-2xl font-bold text-[var(--primary)] group-hover:text-white transition-all duration-300">
                {service.title}
              </h3>

              <p className="text-[var(--cool-gray)] mt-4 leading-relaxed group-hover:text-gray-300 transition-all duration-300">
                {service.desc}
              </p>

              <button className="mt-8 flex items-center gap-2 text-[var(--gold-accent)] font-semibold">
                Learn More
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}