"use client";

import Image from "next/image";
import React from "react";
import { carBrands } from "../data";

const EuropeanCarSpecialist = () => {
  return (
    <section className="bg-[var(--primary)]/80 py-3">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="hidden h-[45px] w-full items-center rounded-lg  px-2  md:flex lg:w-[250px] lg:flex-shrink-0">
          <div>
            <h2 className="text-xl font-medium text-[var(--gold-accent)] sm:text-xl whitespace-nowrap">
              European Car Specialist
            </h2>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between gap-3 overflow-x-auto rounded-2xl border border-black/5 px-4 py-3 scrollbar-hide">
          {carBrands.map((brand, index) => (
            <div
              key={index}
              className="group flex min-w-[100px] flex-col items-center justify-center rounded-xl border border-transparent px-3 py-2 transition-all duration-300 hover:border-[rgba(212,175,55,0.25)] hover:bg-[rgba(212,175,55,0.04)]"
            >
              <div className="relative h-[40px] w-[60px] sm:h-[45px] sm:w-[80px]">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  unoptimized
                  className="object-contain grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>

              {/* <p className="mt-2 whitespace-nowrap text-center text-xs font-bold text-gray-700">
                {brand.name}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EuropeanCarSpecialist;