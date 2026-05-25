"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "../data";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Next Slide
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-black h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-screen"
      role="region"
      aria-label="Hero Slider"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            index === currentSlide
              ? "opacity-100 translate-x-0 z-20"
              : index < currentSlide
              ? "opacity-0 -translate-x-10 z-10"
              : "opacity-0 translate-x-10 z-10"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            quality={75}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0  z-10" />

          {/* Gradient */}
          <div className="absolute inset-0  via-black/60 to-transparent z-10" />
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-5 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-[#D4AF37] backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-500 group"
        aria-label="Previous Slide"
      >
        <ChevronLeft
          size={16}
          className="text-white group-hover:text-black transition-all duration-300"
        />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-5 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-[#D4AF37] backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-500 group"
        aria-label="Next Slide"
      >
        <ChevronRight
          size={16}
          className="text-white group-hover:text-black transition-all duration-300"
        />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-500 ${
              currentSlide === index
                ? "w-6 sm:w-8 md:w-10 h-2 bg-[#D4AF37]"
                : "w-2 h-2 bg-white/40 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}