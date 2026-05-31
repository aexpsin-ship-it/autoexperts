"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  CarFront,
  Users,
  Award,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: CarFront,
    target: 12,
    suffix: "K+",
    label: "Luxury Cars Serviced",
  },
  {
    icon: Users,
    target: 8,
    suffix: "K+",
    label: "Happy Customers",
  },
  {
    icon: Award,
    target: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Clock3,
    target: 24,
    formatter: (value) => `${Math.round(value)}/7`,
    label: "Premium Support",
  },
];

export default function AboutStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    let frameId;
    const duration = 1200;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);

      setCounts(
        stats.map((stat) => Math.round(stat.target * progress))
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const formatValue = (stat, value) => {
    if (stat.formatter) {
      return stat.formatter(value);
    }

    return `${value}${stat.suffix || ""}`;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[var(--primary)]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

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
              className="bg-[var(--primary)]/10 border border-white/10 rounded-[32px] p-5 sm:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-[var(--gold-accent)]/10 flex items-center justify-center mx-auto mb-5">

                <item.icon
                  size={34}
                  className="text-[var(--gold-accent)]"
                />
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white">
                {formatValue(item, counts[index])}
              </h2>

              <p className="text-slate-300 mt-2 text-sm sm:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}