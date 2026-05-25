"use client";

import { motion } from "framer-motion";
import {
  CarFront,
  Users,
  Award,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: CarFront,
    value: "12K+",
    label: "Luxury Cars Serviced",
  },
  {
    icon: Users,
    value: "8K+",
    label: "Happy Customers",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Premium Support",
  },
];

export default function AboutStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white">

      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-[var(--soft-white)] border border-gray-200 rounded-[32px] p-5 sm:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-[var(--accent-light)] flex items-center justify-center mx-auto mb-5">

                <item.icon
                  size={34}
                  className="text-[var(--gold-accent)]"
                />
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[var(--primary)]">
                {item.value}
              </h2>

              <p className="text-[var(--cool-gray)] mt-2 text-sm sm:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}