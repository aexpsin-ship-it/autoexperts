"use client";

import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ravi Meheta",
    location: "Sector 5",
    image:
      "https://automanicmotocare.com/wp-content/uploads/2025/06/autonomic-moto-care-reviews-1.png",
    review:
      "Automanic Moto Care has completely changed the way I look at car servicing. From the front desk to the technicians, everyone was courteous and well-informed.",
    rating: 5,
  },
  {
    name: "Ananya Roy",
    location: "Salt Lake",
    image:
      "https://automanicmotocare.com/wp-content/uploads/2025/06/reviews-of-automanic-motocare-2.png",
    review:
      "The staff took time to diagnose the problem, offered honest suggestions, and didn’t push for unnecessary repairs.",
    rating: 5,
  },
  {
    name: "Sourav Dutta",
    location: "NewTown",
    image:
      "https://automanicmotocare.com/wp-content/uploads/2025/06/reviews-of-automanic-motocare-3.png",
    review:
      "They identified issues other garages missed and fixed everything perfectly. Truly a five-star experience!",
    rating: 4,
  },
  {
    name: "Priya Sen",
    location: "Behala",
    image:
      "https://automanicmotocare.com/wp-content/uploads/2025/06/reviews-of-automanic-motocare-9.png",
    review:
      "Their honesty, efficiency, and skilled technicians have earned my trust. I won’t go anywhere else now.",
    rating: 4,
  },
];

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute -left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white lg:flex"
    >
      <ChevronLeft size={20} />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute -right-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white lg:flex"
    >
      <ChevronRight size={20} />
    </button>
  );
}

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative overflow-hidden bg-[#f8f9fb] py-14 sm:py-16 lg:py-20">
      
      {/* Background Blur */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-[#D4AF37]/10 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-[-120px] right-[-120px] h-[260px] w-[260px] rounded-full bg-black/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 text-center sm:mb-14">

          <motion.span
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-[#D4AF37] sm:text-xs"
          >
            Testimonials
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="mt-5 text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
          >
            Our Customers Feedback
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg"
          >
            Let See what our Satisfied Customers are saying about us
          </motion.p>
        </div>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-2 py-4 sm:px-3">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group h-full min-h-[320px] rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-500 hover:border-[#D4AF37]/30 hover:shadow-2xl"
              >
                                <div className="mb-5 flex items-center gap-4">

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#D4AF37]/20"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </motion.div>

                  <div>
                    <h3 className="text-lg font-semibold text-black transition-colors duration-300 group-hover:text-[#D4AF37]">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: i * 0.08,
                      }}
                      viewport={{ once: true }}
                    >
                      <Star
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  {item.review}
                </p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;