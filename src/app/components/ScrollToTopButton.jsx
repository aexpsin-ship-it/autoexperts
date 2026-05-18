"use client"

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 bg-[var(--mainColor)] text-white p-2.5 sm:p-3 md:p-4 rounded-full shadow-lg hover:shadow-2xl hover:bg-[var(--secondaryColor)] transition-all duration-300 transform hover:scale-110 group"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-base sm:text-lg md:text-xl" />
      <span className="absolute opacity-0 group-hover:opacity-100 text-xs sm:text-sm bg-black text-white px-2 sm:px-3 py-1 rounded top-[-40px] sm:top-[-45px] right-0 transition whitespace-nowrap">
        Top
      </span>
    </button>
  );
};


export default ScrollToTopButton;
