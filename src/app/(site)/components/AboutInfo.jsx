"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const aboutInfo = [
  {
    category: "Travel Industry",
    company: "SkyLine Travels",
    image: "/images/case-study/travel.jpg",
    challenge:
      "Low direct bookings and dependency on third-party travel platforms.",
    solution:
      "Implemented SEO-driven destination pages, influencer collaborations, and Google Ads remarketing campaigns.",
    growth: "185+%",
    growthLabel: "Organic Traffic",
    growthSub: "15K → 48K/month",

    bookings: "220+%",
    bookingsLabel: "Travel Bookings",
    bookingsSub: "120 → 430/month",

    roas: "4.2x",
    roasLabel: "Ad ROAS",
    roasSub: "from 1.7x",

    revenue: "3.5x",
    revenueLabel: "Revenue Growth",
    revenueSub: "within 8 months",

    badge: "🚀 3.5× Revenue Growth from Direct Bookings",
  },

  {
    category: "E-commerce",
    company: "UrbanCart Store",
    image: "/images/case-study/ecommerce.jpg",
    challenge:
      "High cart abandonment and low repeat customer engagement.",
    solution:
      "Optimized conversion funnels, email automation, Meta ads, and personalized retargeting strategies.",
    growth: "210+%",
    growthLabel: "Website Traffic",
    growthSub: "30K → 93K/month",

    bookings: "310+%",
    bookingsLabel: "Sales Growth",
    bookingsSub: "400 → 1650/month",

    roas: "5.1x",
    roasLabel: "Ad ROAS",
    roasSub: "from 2.1x",

    revenue: "4.2x",
    revenueLabel: "Revenue Growth",
    revenueSub: "within 10 months",

    badge: "🔥 4.2× Revenue Growth from Online Sales",
  },

  {
    category: "Healthcare",
    company: "MediCare Plus",
    image: "/images/case-study/healthcare.jpg",
    challenge:
      "Low online appointment bookings and weak local search visibility.",
    solution:
      "Local SEO, doctor-focused landing pages, and Google lead campaigns for patient acquisition.",
    growth: "170+%",
    growthLabel: "Patient Traffic",
    growthSub: "8K → 28K/month",

    bookings: "250+%",
    bookingsLabel: "Appointments",
    bookingsSub: "90 → 320/month",

    roas: "3.9x",
    roasLabel: "Campaign ROAS",
    roasSub: "from 1.5x",

    revenue: "2.8x",
    revenueLabel: "Revenue Growth",
    revenueSub: "within 7 months",

    badge: "💡 2.8× Growth in Online Patient Acquisition",
  },
];

export default function CaseStudySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeData = aboutInfo[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-16 sm:py-20 lg:py-24 text-white">
      
      {/* Background Blur */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-0 top-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-blue-600/30 blur-[120px]"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-purple-600/30 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-14 text-center lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
          >
            Case Study{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base"
          >
            Real growth strategies powered by data, innovation, and performance-driven marketing solutions.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-4">

          {/* Left Categories */}
          <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible pb-2">
            {aboutInfo.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`whitespace-nowrap rounded-2xl px-5 py-3 text-left text-sm font-semibold transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl"
                    : "bg-white/10 text-slate-300 backdrop-blur-md hover:bg-white/20"
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-[28px] sm:rounded-[40px] border border-white/20 bg-white/10 p-5 sm:p-8 lg:p-12 backdrop-blur-2xl shadow-2xl"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">

              {/* Left Content */}
              <div>
                <span className="mb-5 inline-block rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 text-xs font-semibold uppercase tracking-[1px] text-black sm:px-5 sm:text-sm">
                  {activeData.company}
                </span>

                <h3 className="mb-3 text-2xl font-bold">
                  Challenge
                </h3>

                <p className="mb-8 text-sm leading-7 text-slate-300 sm:text-base">
                  {activeData.challenge}
                </p>

                <h3 className="mb-3 text-2xl font-bold">
                  Solution
                </h3>

                <p className="text-sm leading-7 text-slate-300 sm:text-base">
                  {activeData.solution}
                </p>
              </div>

              {/* Right Image */}
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

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-16 md:grid-cols-4">
              
              {/* Card */}
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
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 sm:p-6 text-center backdrop-blur-md"
                >
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                    {stat.value}
                  </div>

                  <p className="mt-3 text-xs text-slate-300 sm:text-sm">
                    {stat.label}
                  </p>

                  <span className="mt-2 block text-[11px] font-semibold text-green-400 sm:text-xs">
                    {stat.sub}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mt-12 text-center lg:mt-16"
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-6 py-4 text-sm font-bold text-black shadow-lg sm:px-10">
                {activeData.badge}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}