"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <>
      <style>{`
        @keyframes ping {
          0% {
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(212, 175, 55, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
          }
        }
        .animate-ping-small {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
      <header className="fixed top-0 left-0 w-full z-50 bg-[var(--primary)]/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto h-[80px] sm:h-[88px] flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/assets/mainLogo3.png"
              alt="AutoExperts Logo"
              width={340}
              height={120}
              priority
              quality={95}
              className="w-[160px] sm:w-[220px] lg:w-[330px] h-auto object-contain"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/5">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#D4AF37]" />
            </div>

            <a
              href="tel:9717884777"
              className="text-white hover:text-[#D4AF37] font-bold text-lg tracking-[3px] uppercase transition-all duration-300"
              style={{
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              9717884777
            </a>
          </div>

          <a
            href="tel:9717884777"
            className="lg:hidden flex items-center gap-2 px-4 py-2  hover:bg-[#D4AF37]/20 transition-all duration-300"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div className="absolute inset-0 rounded-full "></div>
            </div>
            <span className="text-[#D4AF37] font-semibold text-sm hidden sm:inline">Call Us</span>
          </a>
        </div>
      </header>
      <div className="h-[80px] sm:h-[88px]" />
    </>
  );
};

export default Header;
