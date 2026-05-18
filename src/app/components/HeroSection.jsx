"use client";

import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "../data";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Next Slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Previous Slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full py-6 h-[85vh] sm:h-screen overflow-hidden">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100 z-20"
              : "opacity-0 scale-110 z-10"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            quality={100}
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-30 flex items-center h-full">
            <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10">

              <div className="max-w-3xl animate-fadeInUp">

                {/* Small Tag */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-5">
                  <span className="w-2 h-2 rounded-full bg-[var(--mainColor)]"></span>

                  <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                    AUTOEXPERTS SOLUTIONS
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-white font-bold leading-tight text-[34px] sm:text-[48px] md:text-[60px] lg:text-[72px]">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-gray-200 mt-5 leading-7 sm:leading-8 text-[15px] sm:text-[17px] md:text-[19px] max-w-2xl">
                  {slide.subtitle}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-8">

                  <button
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-xl"
                    style={{
                      backgroundColor: "var(--mainColor)",
                    }}
                  >
                    {slide.button}
                  </button>

                  <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white text-white hover:bg-white hover:text-[var(--secondaryColor)] transition-all duration-300 font-semibold text-sm sm:text-base">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-[var(--mainColor)] transition-all duration-300"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-[var(--mainColor)] transition-all duration-300"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-10 h-3 bg-[var(--mainColor)]"
                : "w-3 h-3 bg-white/50 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-40 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
};

export default HeroSection;