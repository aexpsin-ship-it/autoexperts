"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Award,
  Users,
  Zap,
  Globe,
  TrendingUp,
  Heart,
  Shield,
  Lightbulb,
} from "lucide-react";

const animateValue = (start, end, duration, onUpdate) => {
  const startTime = performance.now();

  const step = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    onUpdate(value);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const WhyUsPage = () => {
  const reasons = [
    {
      icon: Award,
      title: "Industry Expertise",
      description:
        "Over 15+ years of proven automotive experience with European car specialization",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "200+ verified suppliers across Europe, Asia, and Americas for worldwide coverage",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description:
        "3-10 day lead times on most parts with express options available",
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description:
        "Best-in-class pricing through bulk partnerships and direct supplier relationships",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "100% OEM-certified components with comprehensive warranty coverage",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "24/7 multilingual customer support with dedicated account managers",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Cutting-edge technology and sustainable solutions for modern vehicles",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your success is our priority with personalized solutions for every need",
    },
  ];

  const metrics = [
    { number: "15+", label: "Years Industry Experience" },
    { number: "200+", label: "Global Suppliers" },
    { number: "50K+", label: "Parts Inventory" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "10K+", label: "Happy Clients" },
    { number: "24/7", label: "Customer Support" },
  ];

  const [displayMetrics, setDisplayMetrics] = useState(metrics.map((metric) => metric.number));
  const metricsRef = useRef(null);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    const node = metricsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);

          metrics.forEach((metric, index) => {
            const match = metric.number.match(/^(\d+)([A-Za-z%\/\+\-]*)$/);
            if (!match) {
              return;
            }

            const [, rawNumber, suffix] = match;
            const target = parseInt(rawNumber, 10);

            animateValue(0, target, 1200, (value) => {
              setDisplayMetrics((prev) =>
                prev.map((item, i) =>
                  i === index ? `${value}${suffix}` : item
                )
              );
            });
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasCounted, metrics]);

  const advantages = [
    {
      title: "European Specialist",
      description:
        "Deep expertise in German, Italian, French, and British automotive brands with certified technicians",
      icon: "🇪🇺",
    },
    {
      title: "Global Reach",
      description:
        "Sourcing capabilities across 50+ countries with local partnerships for fast delivery",
      icon: "🌍",
    },
    {
      title: "OEM Quality",
      description:
        "All parts verified against original equipment manufacturer specifications",
      icon: "✅",
    },
    {
      title: "Cost Effective",
      description:
        "Bulk purchasing power translates to significant savings without compromising quality",
      icon: "💰",
    },
    {
      title: "Certification",
      description:
        "ISO 9001 certified processes ensuring consistent quality and reliability",
      icon: "📋",
    },
    {
      title: "Sustainability",
      description:
        "Eco-friendly practices and recycling initiatives for responsible sourcing",
      icon: "♻️",
    },
  ];
  const brands = [
    "German Engineering (BMW, Mercedes, Audi, VW)",
    "Italian Luxury (Ferrari, Lamborghini, Alfa Romeo)",
    "French Elegance (Peugeot, Renault, Citroën)",
    "British Heritage (Jaguar, Land Rover, Bentley)",
    "Swedish Innovation (Volvo, Koenigsegg)",
    "Swiss Precision (Rimac)",
  ];
  const trustIndicators = [
    {
      title: "ISO 9001 Certified",
      description: "International quality management standards compliance",
    },
    {
      title: "OEM Partnerships",
      description: "Direct relationships with major automotive manufacturers",
    },
    {
      title: "Industry Recognition",
      description: "Award-winning service and customer satisfaction records",
    },
  ];
  return (
    <main className="w-full overflow-hidden bg-[var(--primary)]">
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--gold-accent)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[var(--gold-accent)] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose
            <span className="block text-[var(--gold-accent)]">
              AutoExperts?
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Leading European car specialist with global reach, proven expertise,
            and unwavering commitment to excellence
          </p>
        </div>
      </section>

      <section ref={metricsRef} className="bg-slate-800 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {displayMetrics.map((displayNumber, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[var(--gold-accent)] mb-2">
                  {displayNumber}
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">
                  {metrics[idx].label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            Our Core Advantages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:shadow-lg hover:border-[var(--gold-accent)]/50 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-800 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            What Sets Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-700 border border-slate-600 rounded-xl p-6 hover:shadow-lg hover:border-[var(--gold-accent)]/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-[var(--gold-accent)]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--gold-accent)]/30 transition">
                    <Icon className="w-7 h-7 text-[var(--gold-accent)]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            European Car Expertise
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Specialized Knowledge
              </h3>
              <div className="space-y-4">
                {brands.map((brand, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--gold-accent)]"></div>
                    <span className="text-gray-300 font-medium">{brand}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why We Excel
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[var(--gold-accent)] font-bold text-lg">
                    ✓
                  </span>
                  <span className="text-gray-300">
                    <strong>Direct Supplier Relationships</strong> with European
                    OEMs
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--gold-accent)] font-bold text-lg">
                    ✓
                  </span>
                  <span className="text-gray-300">
                    <strong>Technical Expertise</strong> from certified
                    mechanics
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--gold-accent)] font-bold text-lg">
                    ✓
                  </span>
                  <span className="text-gray-300">
                    <strong>Priority Access</strong> to rare and hard-to-find
                    parts
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--gold-accent)] font-bold text-lg">
                    ✓
                  </span>
                  <span className="text-gray-300">
                    <strong>Local Expertise</strong> with global reach
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-800 py-12 sm:py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Trusted By Industry Leaders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustIndicators.map((trust, idx) => (
              <div
                key={idx}
                className="bg-slate-700/50 border border-slate-600 rounded-xl p-6 text-center hover:border-[var(--gold-accent)]/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2 text-[var(--gold-accent)]">
                  {trust.title}
                </h3>
                <p className="text-gray-300">{trust.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Experience AutoExperts Difference
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers worldwide who trust
            AutoExperts for their automotive needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--gold-accent)] hover:bg-[var(--gold-accent)]/90 text-black font-semibold py-3 px-8 rounded-full transition">
              Get Started Today
            </button>
            <button className="border-2 border-[var(--gold-accent)] hover:bg-[var(--gold-accent)]/10 text-white font-semibold py-3 px-8 rounded-full transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyUsPage;
