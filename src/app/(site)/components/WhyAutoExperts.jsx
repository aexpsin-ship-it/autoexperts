"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { features } from "../data";

export default function WhyAutoExperts() {
  const cards = [
    {
      title: "Trusted Workshops",
      desc: "Certified workshops with skilled mechanics and professional servicing.",
    },
    {
      title: "Genuine Products",
      desc: "100% genuine oils, spare parts, and premium automotive products.",
    },
    {
      title: "Fast & Transparent",
      desc: "Same-day support, live updates, and upfront transparent pricing.",
    },
  ];

  return (
    <section
      id="whyAutoExperts"
      className="relative w-full overflow-hidden bg-[#F9FAFB] py-4 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-10"
    >
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#111827]/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 lg:mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="ani-heading aos-init aos-animate inline-flex items-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-[#D4AF37] sm:text-xs md:text-sm">
            Why Choose Us
          </span>

          <h2
            className="main-heading ani-heading aos-init aos-animate mt-4 text-2xl font-medium leading-tight text-[#111827] sm:text-3xl md:text-4xl lg:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Why Choose AutoExperts?
          </h2>

          <p
            className="description aos-init aos-animate mt-4 max-w-3xl text-sm leading-relaxed text-[#6B7280] sm:text-base md:text-lg"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            Compare premium AutoExperts workshop services with local garages and
            experience trusted automotive care, certified mechanics, genuine
            products, and transparent service.
          </p>
        </motion.div>
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="aos-init aos-animate rounded-3xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="bg-[#111827]">
                <th className="w-[50%] px-3 sm:px-6 py-4 text-left text-xs font-semibold text-white sm:text-sm md:text-base">
                  Service Features
                </th>

                <th className="w-[25%] border-l border-white/10 px-2 sm:px-4 py-4 text-center text-xs font-semibold text-gray-300 sm:text-sm md:text-base">
                  Local Garage
                </th>

                <th className="w-[25%] border-l border-white/10 px-2 sm:px-4 py-4 text-center text-xs font-semibold text-[#D4AF37] sm:text-sm md:text-base">
                  AutoExperts
                </th>
              </tr>
            </thead>

            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={index}
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.03 }}
                  className="aos-init aos-animate border-b border-gray-100 transition-all duration-300 hover:bg-[#F9FAFB]"
                  data-aos="fade-up"
                  data-aos-duration={`${1000 + index * 100}`}
                >
                  {/* Feature */}
                  <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm md:text-base font-medium text-[#111827] break-words">
                    {feature}
                  </td>

                  {/* Local Garage */}
                  <td className="py-4">
                    <div className="flex items-center justify-center">
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-red-100 transition-transform duration-300 hover:scale-110">
                        <X className="h-4 w-4 text-red-500" />
                      </div>
                    </div>
                  </td>

                  {/* AutoExperts */}
                  <td className="py-4">
                    <div className="flex items-center justify-center">
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#D4AF37] shadow-lg transition-transform duration-300 hover:scale-110">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-12 xl:grid-cols-3">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="aos-init aos-animate group relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-duration={`${1400 + index * 200}`}
            >
              {/* Gradient Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-[#111827] sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#6B7280] sm:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
