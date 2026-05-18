"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileWhoOpen, setMobileWhoOpen] = useState(false);
  const [mobileExpertOpen, setMobileExpertOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 py-4">
                <Link href="/">
          <Image
            src="/assets/sitelogo.png"
            alt="Site Logo"
            width={320}
            height={200}
            priority
            className="w-[250px] md:w-[320px] lg:w-[320px] h-auto object-cover"
          />
        </Link>
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-8 lg:gap-12">
            <li className="relative group">
              <button className="flex items-center gap-1 text-[16px] lg:text-[19px] font-medium hover:text-yellow-400 transition-all duration-300">
                Who We Are
                <ChevronDown
                  size={18}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </button>
              <div className="absolute left-0 top-[180%] w-64 bg-white text-black rounded-xl shadow-2xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out overflow-hidden">
                
                <Link
                  href="/about-us"
                  className="block px-5  py-4 hover:bg-gray-100 transition-all duration-300"
                >
                  About Us
                </Link>

                <Link
                  href="/our-people"
                  className="block px-5 border-t border-gray-700 py-4 hover:bg-gray-100 transition-all duration-300"
                >
                  Our People
                </Link>

                <Link
                  href="/infrastructure"
                  className="block px-5 border-t border-gray-700 py-4 hover:bg-gray-100 transition-all duration-300"
                >
                  Infrastructure
                </Link>

                <Link
                  href="/sustainability"
                  className="block px-5 border-t border-gray-700 py-4 hover:bg-gray-100 transition-all duration-300"
                >
                  Sustainability
                </Link>
              </div>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 text-[16px] lg:text-[19px] font-medium hover:text-yellow-400 transition-all duration-300">
                Expertise
                <ChevronDown
                  size={18}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </button>
              <div className="absolute left-0 top-[180%] w-64 bg-white text-black rounded-xl shadow-2xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out overflow-hidden">
                
                <Link
                  href="/why-us"
                  className="block px-5  py-4 hover:bg-gray-100 transition-all duration-300"
                >
                  Why Us
                </Link>

                <Link
                  href="/what-we-do"
                  className="block px-5 border-t border-gray-700 py-4 hover:bg-gray-100 transition-all duration-300"
                >
                  What We Do
                </Link>

                <Link
                  href="/part-sourcing"
                  className="block px-5 border-t border-gray-700 py-4 hover:bg-gray-100 transition-all duration-300"
                >
                  Part Sourcing
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex flex-row text-right">
          <span className="text-[15px] lg:text-[18px] font-medium text-gray-300">
            <Phone className="p-2 rounded-full w-10 h-10" />
          </span>

          <a
            href="tel:9717884777"
            className="text-[17px] lg:text-[21px] font-semibold hover:text-[--secondaryColor] transition-all duration-300"
          >
            9717884777
          </a>
        </div>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-gray-800 ${
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="px-4">
          <ul className="flex flex-col gap-4">
            <li>
              <button
                onClick={() => setMobileWhoOpen(!mobileWhoOpen)}
                className="w-full flex items-center justify-between text-[18px] font-medium py-2"
              >
                Who We Are
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    mobileWhoOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  mobileWhoOpen ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-3 text-gray-300">
                  <Link href="/about-us">About Us</Link>
                  <Link href="/our-people">Our People</Link>
                  <Link href="/infrastructure">Infrastructure</Link>
                  <Link href="/sustainability">Sustainability</Link>
                </div>
              </div>
            </li>
            <li>
              <button
                onClick={() => setMobileExpertOpen(!mobileExpertOpen)}
                className="w-full flex items-center justify-between text-[18px] font-medium py-2"
              >
                Expertise
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    mobileExpertOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out  ${
                  mobileExpertOpen ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-3  text-gray-300">
                  <Link href="/why-us">Why Us</Link>
                  <Link href="/what-we-do">What We Do</Link>
                  <Link href="/part-sourcing">Part Sourcing</Link>
                </div>
              </div>
            </li>
            <li className="pt-4 flex flex-row items-center align-middle border-t border-gray-700">
              <Phone className="p-2 rounded-full w-10 h-10" />

              <a
                href="tel:9717884777"
                className="block mt-2 text-[18px] hover:text-[--secondaryColor] transition-all duration-300"
              >
                9717884777
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;