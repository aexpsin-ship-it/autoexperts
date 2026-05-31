// components/WorkshopExperience.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Wrench,
  Gauge,
  Sparkles,
  Settings2,
} from "lucide-react";

const services = [
  {
    icon: <Wrench size={26} />,
    title: "Engine Repair",
  },
  {
    icon: <Gauge size={26} />,
    title: "Performance Tuning",
  },
  {
    icon: <Sparkles size={26} />,
    title: "Luxury Detailing",
  },
  {
    icon: <Settings2 size={26} />,
    title: "Transmission Service",
  },
];

export default function WorkshopExperience({
  image = "/images/workshop.jpg",
}) {
  return (
    <section className="relative bg-[var(--primary)] py-20 text-white">
      <div className="container mx-auto grid items-center gap-14 px-4 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[35px] border border-white/10">
            <Image
              src={image}
              alt="Workshop"
              width={700}
              height={700}
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 right-6 rounded-3xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-xl">
            <h4 className="text-4xl font-bold text-[var(--gold-accent)]">15+</h4>
            <p className="mt-1 text-gray-300">
              Years European Car Experience
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 inline-block rounded-full border border-[var(--gold-accent)]/30 bg-[var(--gold-accent)]/10 px-5 py-2 text-sm uppercase tracking-[3px] text-[var(--gold-accent)]">
            Premium Workshop
          </span>

          <h2 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
            Complete Care For Luxury European Cars
          </h2>

          <p className="mb-10 text-lg leading-8 text-gray-300">
            Our modern automotive workshop combines highly trained mechanics,
            advanced repair technology, and premium-grade equipment to deliver
            exceptional servicing for luxury vehicles.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-[var(--gold-accent)]/40"
              >
                  <div className="text-[var(--gold-accent)]">{service.icon}</div>

                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}