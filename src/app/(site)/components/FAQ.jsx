"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does AutoExperts provide?",
    answer:
      "AutoExperts provides premium automotive services including vehicle diagnostics, luxury car maintenance, detailing, repairs, part sourcing, and performance upgrades.",
  },
  {
    question: "Do you service luxury and European vehicles?",
    answer:
      "Yes, we specialize in premium European and luxury automotive brands including BMW, Mercedes-Benz, Audi, Porsche, Range Rover, Ferrari, Lamborghini, and more.",
  },
  {
    question: "Do you use genuine spare parts?",
    answer:
      "Yes, we only use genuine and high-quality OEM spare parts to ensure maximum performance, durability, and reliability for your vehicle.",
  },
  {
    question: "Can I book a car inspection online?",
    answer:
      "Absolutely. You can easily schedule your inspection or service appointment through our website or by contacting our support team directly.",
  },
  {
    question: "Do you provide insurance claim support?",
    answer:
      "Yes, our team assists customers with insurance claim processes and supports hassle-free documentation and repair coordination.",
  },
  {
    question: "How long does a regular service take?",
    answer:
      "Service time depends on the vehicle condition and required work, but most regular maintenance services are completed within the same day.",
  },
  {
    question: "Do you offer pickup and drop services?",
    answer:
      "Yes, AutoExperts offers convenient pickup and drop-off services for selected locations to provide a seamless customer experience.",
  },
  {
    question: "Why choose AutoExperts?",
    answer:
      "AutoExperts combines advanced automotive technology, certified professionals, premium infrastructure, and transparent customer service to deliver world-class automotive solutions.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const leftFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  const renderFaqs = (items, startIndex) =>
    items.map((faq, index) => {
      const actualIndex = startIndex + index;
      const isOpen = activeIndex === actualIndex;

      return (
        <motion.article
          key={actualIndex}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: actualIndex * 0.08,
          }}
          viewport={{ once: true }}
          className="group relative mt-4 rounded-2xl bg-gradient-to-r from-[var(--gold-accent)]/20 to-[var(--secondaryColor)]/10 p-[1px] transition-all duration-500 hover:from-[var(--gold-accent)] hover:to-[var(--secondaryColor)]"
          data-aos="fade-up"
          data-aos-duration={`${1000 + actualIndex * 100}`}
        >
          <div
            className={`overflow-hidden rounded-2xl border bg-white/90 backdrop-blur-xl transition-all duration-500 ${
              isOpen
                ? "border-[var(--gold-accent)]/30 shadow-2xl"
                : "border-black/5 shadow-sm hover:shadow-xl"
            }`}
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(actualIndex)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
            >
              <h3 className="pr-4 text-sm font-semibold leading-7 text-[var(--primary)] transition-all duration-300 group-hover:text-[var(--gold-accent)] sm:text-base">
                {faq.question}
              </h3>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "bg-[var(--gold-accent)] text-black shadow-lg"
                    : "bg-[var(--accent-light)] text-[var(--gold-accent)]"
                }`}
              >
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </motion.div>
            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                >
                  <div className="border-t border-black/5 px-5 pb-6 pt-4 sm:px-6">
                    <p className="text-sm leading-8 text-[var(--cool-gray)] sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.article>
      );
    });

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[var(--soft-white)] py-14 sm:py-16 lg:py-24"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--gold-accent)]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--gold-accent)]/20 bg-[var(--accent-light)] px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[var(--gold-accent)] sm:text-sm">
            FAQ
          </span>

          <h2 className="mt-5 text-2xl font-bold leading-tight text-[var(--primary)] sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--cool-gray)] sm:text-base">
            Find answers to the most common questions about our premium
            automotive services, luxury vehicle care, and workshop solutions.
          </p>
        </motion.div>
        <div
          className="grid grid-cols-1 gap-x-6 md:grid-cols-2"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <div>{renderFaqs(leftFaqs, 0)}</div>

          <div>
            {renderFaqs(
              rightFaqs,
              Math.ceil(faqs.length / 2)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}