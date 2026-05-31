// components/WhyChooseAutoExperts.jsx
"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  Wrench,
  CarTaxiFront,
  Award,
  Shield,
  Zap,
  Leaf,
} from "lucide-react";
import { servicesInfo } from "../data";

const features = [
  {
    icon: <BadgeCheck size={30} />,
    title: "Certified Mechanics",
    description:
      "Experienced technicians trained specifically for premium and European vehicle brands.",
    metric: "12+",
    metricLabel: "Certified Experts",
  },
  {
    icon: <Clock3 size={30} />,
    title: "Quick Turnaround",
    description:
      "Efficient repair and maintenance process with accurate diagnostics and faster delivery.",
    metric: "24hr",
    metricLabel: "Same-Day Service",
  },
  {
    icon: <Wrench size={30} />,
    title: "Dealer-Level Equipment",
    description:
      "Modern automotive tools and computerized systems for precise servicing and repair.",
    metric: "40+",
    metricLabel: "Service Bays",
  },
  {
    icon: <CarTaxiFront size={30} />,
    title: "All Luxury Car Services",
    description:
      "From detailing and maintenance to complete engine rebuilds and performance upgrades.",
    metric: "50+",
    metricLabel: "Service Types",
  },
];

export default function WhyChooseAutoExperts({
  heading = "Why Choose AutoExperts",
  description = "Trusted luxury automotive workshop delivering excellence, reliability, and premium European car care services.",
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--primary)] py-20 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 " />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-1 w-8 bg-[#c7a66b] rounded-full" />
            <span className="rounded-full border border-[#c7a66b]/30 bg-[#c7a66b]/10 px-5 py-2 text-xs uppercase tracking-[3px] text-[#c7a66b] font-semibold">
              Premium Excellence
            </span>
            <div className="h-1 w-8 bg-[#c7a66b] rounded-full" />
          </div>

          <h2 className="mb-6 text-4xl font-bold lg:text-5xl leading-tight">
            {heading}
          </h2>

          <p className="text-lg leading-8 text-gray-300">
            {description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mb-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c7a66b]/10 to-transparent rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#c7a66b]/40 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.04]">
                {/* Icon */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c7a66b]/20 to-[#c7a66b]/10 text-[#c7a66b] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="leading-6 text-gray-400 mb-6">
                  {item.description}
                </p>

                {/* Metric */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-2xl font-bold text-[#c7a66b] mb-1">
                    {item.metric}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.metricLabel}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Stats Table */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-bold mb-3 text-white">
              Our Comprehensive <span className="text-[#c7a66b]">Services Overview</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our diverse range of professional automotive services with proven metrics
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-gradient-to-r from-[#c7a66b]/10 to-transparent">
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#c7a66b] uppercase tracking-wider">
                    Service Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#c7a66b] uppercase tracking-wider">
                    Metric
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#c7a66b] uppercase tracking-wider">
                    Achievement
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#c7a66b] uppercase tracking-wider">
                    Quality
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#c7a66b] uppercase tracking-wider">
                    Experience
                  </th>
                </tr>
              </thead>
              <tbody>
                {servicesInfo.map((service, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-white/5 transition-colors duration-300 hover:bg-white/[0.05]"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-white text-sm md:text-base">
                          {service.category}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {service.company}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-[#c7a66b]">
                          {service.growth}
                        </span>
                        <span className="text-xs text-gray-400 max-w-[60px]">
                          {service.growthLabel}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-[#c7a66b]">
                          {service.bookings}
                        </span>
                        <span className="text-xs text-gray-400 max-w-[60px]">
                          {service.bookingsLabel}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-[#c7a66b]">
                          {service.roas}
                        </span>
                        <span className="text-xs text-gray-400 max-w-[70px]">
                          {service.roasLabel}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-[#c7a66b]">
                          {service.revenue}
                        </span>
                        <span className="text-xs text-gray-400 max-w-[70px]">
                          {service.revenueLabel}
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: <Award size={24} />, label: "Award Winning", value: "Industry Leaders" },
            { icon: <Shield size={24} />, label: "Certified", value: "ISO Standards" },
            { icon: <Zap size={24} />, label: "Performance", value: "99.9% Uptime" },
            { icon: <Leaf size={24} />, label: "Sustainable", value: "Eco Friendly" },
          ].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-white/10 bg-white/[0.05] p-4 text-center hover:border-[#c7a66b]/30 hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="flex justify-center mb-3 text-[#c7a66b]">
                {badge.icon}
              </div>
              <p className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                {badge.label}
              </p>
              <p className="text-[11px] text-gray-400">
                {badge.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}