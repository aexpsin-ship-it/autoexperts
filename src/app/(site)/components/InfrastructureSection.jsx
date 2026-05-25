// components/InfrastructureSection.jsx
"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  CarFront,
  ShieldCheck,
  Gauge,
  Cpu,
  Sparkles,
} from "lucide-react";

const infrastructureData = [
  {
    icon: <CarFront size={34} />,
    title: "European Car Specialists",
    description:
      "Certified experts for BMW, Mercedes-Benz, Audi, Porsche, Jaguar, Land Rover, Volvo, and other premium European vehicles with advanced diagnostics and precision servicing.",
  },
  {
    icon: <Cpu size={34} />,
    title: "Advanced Diagnostic Systems",
    description:
      "State-of-the-art computerized scanning tools and dealer-level software help us identify issues quickly and ensure accurate repairs for luxury automobiles.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Premium Quality Standards",
    description:
      "We use genuine OEM parts, premium lubricants, and globally approved repair procedures to maintain top-tier performance and reliability.",
  },
];

export default function InfrastructureSection({
  title = "World-Class Infrastructure",
  subtitle = "Modern workshop equipped with advanced automotive technology for luxury and European vehicles.",
  data = infrastructureData,
}) {
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />

      <div className="container mx-auto px-4 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[3px] text-[#c7a66b]">
            AutoExperts Garage
          </span>

          <h2 className="mb-5 text-4xl font-bold leading-tight lg:text-5xl">
            {title}
          </h2>

          <p className="text-lg leading-8 text-gray-300">{subtitle}</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#c7a66b]/40 hover:bg-white/[0.06]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c7a66b]/10 text-[#c7a66b] transition-all duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}