"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  ArrowRight,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen  flex items-center overflow-hidden px-4 sm:px-6 lg:px-12 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondaryColor)] via-black to-[var(--primary)]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--gold-accent)] blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[var(--gold-accent)] blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center  px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[var(--gold-accent)] text-[var(--gold-accent)] text-sm bg-white/5 backdrop-blur-xl mb-6">
            <Award size={16} />
            Premium Automotive Experts
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black text-white leading-tight">
            Driving
            <span className="text-[var(--gold-accent)]">
              {" "}
              Excellence{" "}
            </span>
            In Every Journey
          </h1>

          <p className="text-gray-300 mt-7 text-base sm:text-lg leading-relaxed max-w-2xl">
            AutoExperts delivers premium automotive solutions,
            diagnostics, detailing, and performance upgrades
            with precision engineering and luxury service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button className="bg-[var(--gold-accent)] text-black px-7 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300">
              Explore Services
              <ArrowRight size={20} />
            </button>

            <button className="border border-white/20 bg-white/5 backdrop-blur-xl text-white px-7 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300">
              Contact Experts
            </button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[var(--gold-accent)] blur-[120px] opacity-20 rounded-full" />

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury Car"
              width={1400}
              height={1000}
              priority
              className="w-full h-[400px] sm:h-[500px] lg:h-[650px] object-cover hover:scale-105 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}