"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { servicesInfo } from "../data";



export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeData = servicesInfo[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[var(--primary)] py-16 text-[var(--foreground)] sm:py-20 lg:py-24">
      <div className="absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-[var(--accent-light)] blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[var(--accent-light)] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-14 text-center lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold leading-tight text-[var(--soft-white)] sm:text-4xl md:text-5xl"
          >
            Premium{" "}
            <span className="bg-gradient-to-r from-[var(--gold-accent)] to-yellow-500 bg-clip-text text-transparent">
              Automotive Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--soft-white)] sm:text-base"
          >
            Experience world-class automotive solutions with certified
            technicians, advanced technology, and premium vehicle care services.
          </motion.p>
        </div>
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
            {servicesInfo.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`whitespace-nowrap rounded-2xl px-5 py-3 text-left text-sm font-semibold transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-[var(--gold-accent)] to-yellow-500 text-black shadow-xl"
                    : "bg-white text-[var(--cool-gray)] shadow-sm hover:bg-[var(--accent-light)]"
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[28px] border border-black/5 bg-white p-5 shadow-xl sm:rounded-[40px] sm:p-8 lg:col-span-3 lg:p-12"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">

              <div>
                <span className="mb-5 inline-block rounded-full bg-gradient-to-r from-[var(--gold-accent)] to-yellow-500 px-4 py-2 text-xs font-semibold uppercase tracking-[1px] text-black sm:px-5 sm:text-sm">
                  {activeData.company}
                </span>

                <h3 className="mb-3 text-2xl font-bold text-[var(--soft-white)]">
                  Challenge
                </h3>

                <p className="mb-8 text-sm leading-7 text-[var(--cool-gray)] sm:text-base">
                  {activeData.challenge}
                </p>

                <h3 className="mb-3 text-2xl font-bold text-[var(--soft-white)]">
                  Solution
                </h3>

                <p className="text-sm leading-7 text-[var(--cool-gray)] sm:text-base">
                  {activeData.solution}
                </p>
              </div>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative"
              >
                <Image
                  src={activeData.image}
                  alt={activeData.category}
                  width={600}
                  height={450}
                  className="w-full rounded-3xl object-cover shadow-2xl"
                />
              </motion.div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 lg:mt-16">
              {[
                {
                  value: activeData.growth,
                  label: activeData.growthLabel,
                  sub: activeData.growthSub,
                },
                {
                  value: activeData.bookings,
                  label: activeData.bookingsLabel,
                  sub: activeData.bookingsSub,
                },
                {
                  value: activeData.roas,
                  label: activeData.roasLabel,
                  sub: activeData.roasSub,
                },
                {
                  value: activeData.revenue,
                  label: activeData.revenueLabel,
                  sub: activeData.revenueSub,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-2xl border border-black/5 bg-[var(--primary)] p-4 text-center shadow-sm transition-all duration-300 hover:shadow-xl sm:p-6"
                >
                  <div className="bg-gradient-to-r from-[var(--gold-accent)] to-yellow-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                    {stat.value}
                  </div>

                  <p className="mt-3 text-xs text-[var(--soft-white)] sm:text-sm">
                    {stat.label}
                  </p>

                  <span className="mt-2 block text-[11px] font-semibold text-slate-400 sm:text-xs">
                    {stat.sub}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mt-12 text-center lg:mt-16"
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-[var(--gold-accent)] to-yellow-500 px-6 py-4 text-sm font-bold text-black shadow-lg sm:px-10">
                {activeData.badge}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}