"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      className="pt-12 pb-8 px-2 sm:px-8 lg:px-10 border-t font-playfair border-[var(--gold-accent)] border-opacity-20"
      style={{ backgroundColor: "var(--primary)" }}
    >
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-6 py-3 sm:py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/">
              <Image
                src="/assets/mainLogo3.png"
                alt="AutoExperts Logo"
                width={320}
                height={200}
                priority
                className="w-[220px] md:w-[280px] lg:w-[320px] h-auto object-cover"
              />
            </Link>

            <p className="text-xs sm:text-base text-[var(--cool-gray)] leading-7 mt-5 font-medium">
              AutoExperts delivers high-quality automotive solutions,
              infrastructure support, sourcing expertise, and industry-leading
              services with innovation and sustainability.
            </p>
            <div className="flex items-center gap-3 sm:gap-4 mt-6">
              <a
                href="#"
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-full flex items-center justify-center bg-[var(--gold-accent)] bg-opacity-20 text-white hover:bg-opacity-30 hover:scale-110 transition-all duration-300 ease-out border border-[var(--gold-accent)] border-opacity-50 shadow-md hover:shadow-lg"
                title="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-full flex items-center justify-center bg-[var(--gold-accent)] bg-opacity-20 text-white hover:bg-opacity-30 hover:scale-110 transition-all duration-300 ease-out border border-[var(--gold-accent)] border-opacity-50 shadow-md hover:shadow-lg"
                title="YouTube"
              >
                <FiYoutube size={18} />
              </a>
              <a
                href="#"
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-full flex items-center justify-center bg-[var(--gold-accent)] bg-opacity-20 text-white hover:bg-opacity-30 hover:scale-110 transition-all duration-300 ease-out border border-[var(--gold-accent)] border-opacity-50 shadow-md hover:shadow-lg"
                title="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-full flex items-center justify-center bg-[var(--gold-accent)] bg-opacity-20 text-white hover:bg-opacity-30 hover:scale-110 transition-all duration-300 ease-out border border-[var(--gold-accent)] border-opacity-50 shadow-md hover:shadow-lg"
                title="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm sm:text-base md:text-base lg:text-base font-bold mb-6 text-[var(--soft-white)] tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>Who We Are</h3>

            <ul className="space-y-3 sm:space-y-4 text-[var(--cool-gray)]">
              <li>
                <Link
                  href="/about-us"
                  className="block text-xs sm:text-base hover:text-[var(--gold-accent)] transition-all duration-300 font-medium"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/our-people"
                  className="block text-xs sm:text-base hover:text-[var(--gold-accent)] transition-all duration-300 font-medium"
                >
                  Our People
                </Link>
              </li>

              <li>
                <Link
                  href="/infrastructure"
                  className="block text-xs sm:text-base hover:text-[var(--gold-accent)] transition-all duration-300 font-medium"
                >
                  Infrastructure
                </Link>
              </li>

              <li>
                <Link
                  href="/sustainability"
                  className="block text-xs sm:text-base hover:text-[var(--gold-accent)] transition-all duration-300 font-medium"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Experts */}
          <div>
            <h3 className="text-sm sm:text-base md:text-base lg:text-base font-bold mb-6 text-[var(--soft-white)] tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>Expertise</h3>

            <ul className="space-y-3 sm:space-y-4 text-[var(--cool-gray)]">
              <li>
                <Link
                  href="/why-us"
                  className="block text-xs sm:text-base hover:text-[var(--gold-accent)] transition-all duration-300 font-medium"
                >
                  Why Us
                </Link>
              </li>

              <li>
                <Link
                  href="/what-we-do"
                  className="block text-xs sm:text-base hover:text-[var(--gold-accent)] transition-all duration-300 font-medium"
                >
                  What We Do
                </Link>
              </li>

              <li>
                <Link
                  href="/part-sourcing"
                  className="block text-xs sm:text-base hover:text-[var(--gold-accent)] transition-all duration-300 font-medium"
                >
                  Part Sourcing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm sm:text-base md:text-base lg:text-base font-bold mb-6 text-[var(--soft-white)] tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h3>

            <div className="space-y-4 sm:space-y-5 text-[var(--cool-gray)]">
              {/* <p className="leading-7">
                AutoExperts delivers premium automotive services and sourcing
                solutions with trusted industry experience.
              </p> */}

              <a
                href="tel:9717884777"
                className="block text-xs sm:text-base hover:text-[var(--gold-accent)] transition-all duration-300 font-medium"
              >
                +91 9717884777
              </a>

              <a
                href="mailto:info@autoexperts.com"
                className="block text-xs sm:text-base hover:text-[var(--gold-accent)] transition-all duration-300 font-medium"
              >
                info@autoexperts.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--gold-accent)] border-opacity-20 text-[var(--cool-gray)] mt-12 pt-6 text-center text-xs sm:text-base font-medium">
          © {new Date().getFullYear()} AUTOEXPERTS. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
