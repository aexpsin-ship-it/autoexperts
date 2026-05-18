"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      className="pt-14 pb-8 px-5 sm:px-8 lg:px-16 text-white"
      style={{ backgroundColor: "var(--secondaryColor)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/">
              <Image
                src="/assets/sitelogo.png"
                alt="AutoExperts Logo"
                width={320}
                height={200}
                priority
                className="w-[220px] md:w-[280px] lg:w-[320px] h-auto object-cover"
              />
            </Link>

            <p className="text-sm text-gray-300 leading-7 mt-5">
              AutoExperts delivers high-quality automotive solutions,
              infrastructure support, sourcing expertise, and industry-leading
              services with innovation and sustainability.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 text-white opacity-90 hover:opacity-100 hover:bg-[var(--mainColor)] hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 text-white opacity-90 hover:opacity-100 hover:bg-red-600 hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <FiYoutube size={18} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 text-white opacity-90 hover:opacity-100 hover:bg-pink-600 hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 text-white opacity-90 hover:opacity-100 hover:bg-green-500 hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-[22px] font-semibold mb-6">Who We Are</h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link
                  href="/about-hs"
                  className="block hover:opacity-75  transition-all duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/our-people"
                  className="block hover:opacity-75  transition-all duration-300"
                >
                  Our People
                </Link>
              </li>

              <li>
                <Link
                  href="/infrastructure"
                  className="block hover:opacity-75  transition-all duration-300"
                >
                  Infrastructure
                </Link>
              </li>

              <li>
                <Link
                  href="/sustainability"
                  className="block hover:opacity-75  transition-all duration-300"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Experts */}
          <div>
            <h3 className="text-[22px] font-semibold mb-6">Experts</h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link
                  href="/why-us"
                  className="block hover:opacity-75  transition-all duration-300"
                >
                  Why Us
                </Link>
              </li>

              <li>
                <Link
                  href="/what-we-do"
                  className="block hover:opacity-75  transition-all duration-300"
                >
                  What We Do
                </Link>
              </li>

              <li>
                <Link
                  href="/part-sourcing"
                  className="block hover:opacity-75  transition-all duration-300"
                >
                  Part Sourcing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[22px] font-semibold mb-6">Contact Us</h3>

            <div className="space-y-5 text-gray-300">
              <p className="leading-7">
                AutoExperts delivers premium automotive services and sourcing
                solutions with trusted industry experience.
              </p>

              <a
                href="tel:9717884777"
                className="block hover:opacity-75  transition-all duration-300"
              >
                +91 9717884777
              </a>

              <a
                href="mailto:info@autoexperts.com"
                className="block hover:opacity-75  transition-all duration-300"
              >
                info@autoexperts.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 text-white mt-12 pt-6 text-center text-md text-white">
          © {new Date().getFullYear()} AUTOEXPERTS. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
