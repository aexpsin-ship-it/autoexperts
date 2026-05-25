// components/WhyChooseAutoExperts.jsx
"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  Wrench,
  CarTaxiFront,
} from "lucide-react";

const features = [
  {
    icon: <BadgeCheck size={30} />,
    title: "Certified Mechanics",
    description:
      "Experienced technicians trained specifically for premium and European vehicle brands.",
  },
  {
    icon: <Clock3 size={30} />,
    title: "Quick Turnaround",
    description:
      "Efficient repair and maintenance process with accurate diagnostics and faster delivery.",
  },
  {
    icon: <Wrench size={30} />,
    title: "Dealer-Level Equipment",
    description:
      "Modern automotive tools and computerized systems for precise servicing and repair.",
  },
  {
    icon: <CarTaxiFront size={30} />,
    title: "All Luxury Car Services",
    description:
      "From detailing and maintenance to complete engine rebuilds and performance upgrades.",
  },
];

export default function WhyChooseAutoExperts({
  heading = "Why Choose AutoExperts",
  description = "Trusted luxury automotive workshop delivering excellence, reliability, and premium European car care services.",
}) {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#c7a66b22,transparent_30%)]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#c7a66b]/20 bg-[#c7a66b]/10 px-5 py-2 text-sm uppercase tracking-[3px] text-[#c7a66b]">
            Trusted Auto Garage
          </span>

          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
            {heading}
          </h2>

          <p className="text-lg leading-8 text-gray-300">
            {description}
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#c7a66b]/40 hover:bg-[#151515]"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c7a66b]/10 text-[#c7a66b] transition-all duration-300 group-hover:rotate-6">
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