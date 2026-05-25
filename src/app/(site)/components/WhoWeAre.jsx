"use client";

import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Sparkles,
  CarFront,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    desc: "Delivering precision automotive solutions with reliability and excellence.",
  },
  {
    icon: CarFront,
    title: "Premium Automotive",
    desc: "Luxury automotive innovation crafted for modern driving experiences.",
  },
  {
    icon: Sparkles,
    title: "Luxury Finish",
    desc: "Attention to every detail with premium aesthetics and performance.",
  },
];

export default function WhoWeAre() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-100px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* Smooth Scroll Animation */
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.7, 1],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [100, 0, -100]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--primary)] py-10 sm:py-12 lg:py-12"
    >
      <div className="absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-[var(--accent-light)] blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[var(--accent-light)] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            style={{ opacity, y }}
            className="order-1"
          >
            <div
              className="section-badge ani-heading aos-init aos-animate mb-3 inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.25)] bg-[rgba(212,175,55,0.08)] px-5 py-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--gold-accent)]" />

              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[var(--gold-accent)] sm:text-xs">
                Who We Are
              </span>
            </div>
            <h2
              className="main-heading ani-heading aos-init aos-animate max-w-[700px] text-2xl font-bold leading-[1.15] text-[var(--soft-white)] sm:text-4xl md:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Building Premium

              <span className="mt-2 block text-[var(--gold-accent)]">
                Automotive Experiences
              </span>
            </h2>
            <div className="mt-7 space-y-5">
              <p
                className="description aos-init aos-animate text-sm leading-7 text-[var(--cool-gray)] sm:text-base sm:leading-8 md:text-lg"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Founded with a vision to redefine automotive excellence,
                AutoExperts delivers luxury-driven automotive services,
                sourcing expertise, and infrastructure solutions for
                modern industries.
              </p>

              <p
                className="description aos-init aos-animate text-sm leading-7 text-[var(--cool-gray)] sm:text-base sm:leading-8 md:text-lg"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                Through innovation, craftsmanship, and precision engineering,
                we create seamless automotive experiences that combine
                performance, reliability, and sophistication.
              </p>

              <p
                className="description aos-init aos-animate text-sm leading-7 text-[var(--cool-gray)] sm:text-base sm:leading-8 md:text-lg"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                Our commitment to quality and customer excellence helps us
                deliver world-class automotive solutions tailored for the
                future of mobility.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="aos-init aos-animate group rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(212,175,55,0.4)] hover:bg-white/[0.06]"
                  data-aos="fade-up"
                  data-aos-duration={`${1000 + index * 200}`}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(212,175,55,0.1)] text-[var(--gold-accent)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--gold-accent)] group-hover:text-black">
                    <item.icon size={28} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--cool-gray)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="mt-10 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <button className="group inline-flex items-center gap-3 rounded-full border border-[rgba(212,175,55,0.25)] bg-[var(--gold-accent)] px-6 py-4 text-xs font-semibold uppercase tracking-[2px] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] sm:px-7 sm:text-sm">
                Explore More

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            style={{ scale: imageScale }}
            className="relative order-2"
          >
            <div
              className="relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[35px] aos-init aos-animate"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <Image
                src="/assets/car1.jpg"
                alt="Luxury Car"
                width={1200}
                height={1400}
                priority
                className="h-[320px] w-full object-cover sm:h-[500px] md:h-[620px] lg:h-[760px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,24,39,0.96)] via-[rgba(17,24,39,0.2)] to-transparent" />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/10 bg-[rgba(17,24,39,0.65)] p-5 backdrop-blur-2xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[280px] sm:p-6"
              >
                <p className="text-[10px] uppercase tracking-[3px] text-[var(--gold-accent)] sm:text-xs">
                  Since 2018
                </p>

                <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                  Driving Innovation
                </h3>

                <p className="mt-3 text-xs leading-6 text-gray-300 sm:text-sm sm:leading-7">
                  Creating premium automotive experiences with innovation,
                  precision, and excellence.
                </p>
              </motion.div>
            </div>

            {/* Border */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[28px] border border-[rgba(212,175,55,0.35)] sm:rounded-[35px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}