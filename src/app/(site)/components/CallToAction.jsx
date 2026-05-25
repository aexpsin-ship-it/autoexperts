"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const CallToAction = () => {
  const whatsappNumber = "919717884777";

  const whatsappMessage =
    "Hello! I am interested in learning more.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-70 "></span>

      <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 shadow-xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 ease-in-out">
        
        <FaWhatsapp className="text-white w-7 h-7 sm:w-8 sm:h-8" />
      </div>
    </a>
  );
};

export default CallToAction;