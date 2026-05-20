"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "../data";



export default function ServicesGrid() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--background)] py-10 sm:py-14 lg:py-20"
      id="services"
    >
      <div className="absolute left-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-[var(--accent-light)] blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[260px] w-[260px] rounded-full bg-[var(--accent-light)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
        >
          {/* <span className="inline-flex items-center rounded-full border border-[var(--gold-accent)]/20 bg-[var(--accent-light)] px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[var(--gold-accent)] sm:text-sm">
            Our Services
          </span> */}

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[var(--primary)] sm:text-4xl lg:text-5xl">
            Premium Auto Care Solutions
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--cool-gray)] sm:text-base">
            Explore our complete range of premium automotive services designed
            for luxury performance, comfort, safety, and reliability.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className={`group relative overflow-hidden rounded-[24px] border border-black/5 bg-white p-5 shadow-sm transition-all duration-500 hover:border-[var(--gold-accent)]/30 hover:shadow-xl ${
                index === 0 || index === 7
                  ? "col-span-2 md:col-span-1 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-light)] to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col  items-center justify-center text-center">                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent-light)] transition-all duration-500 group-hover:scale-110">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain text-[var(--primary)]"
                    unoptimized
                  />
                </div>
                <h3 className="text-sm font-semibold leading-6 text-[var(--primary)] sm:text-base">
                  {service.title}
                </h3>
                {service.packages && (
                  <span className="mt-3 inline-block rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-medium text-[var(--gold-accent)]">
                    {service.packages}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}