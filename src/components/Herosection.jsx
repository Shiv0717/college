"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Hero slides
const slides = [
  {
    title: "China’s E-Commerce Marketplaces Connect Citizens and Global Consumers",
    description:
      "With a sophisticated digital infrastructure and a tech-savvy population, Chinese e-commerce giants are setting new standards for customer experience, efficiency, and international connectivity.",
    image: "https://www.kecbhilai.com/images/slider_img2.jpg",
    author: "David Martin",
    readTime: "2 min read",
  },
  {
    title: "Innovating Education for the Future",
    description:
      "Our institution is dedicated to preparing students with skills and knowledge that power innovation and leadership in a global economy.",
    image: "https://picsum.photos/1600/800?random=1",
    author: "Jane Doe",
    readTime: "3 min read",
  },
  {
    title: "Global Partnerships Driving Research",
    description:
      "We collaborate with top universities and industries worldwide to foster impactful research and innovation.",
    image: "https://picsum.photos/1600/800?random=2",
    author: "John Smith",
    readTime: "4 min read",
  },
];

// Stagger container
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

// Fade-up child
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section className="relative w-full md:h-[600px] h-64 overflow-hidden font-satoshi">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background with left-side blur */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    filter: "blur(0px)", // Base image remains clear
                  }}
                />
                
                {/* Left-side blurred overlay */}
                <div 
                  className="absolute left-0 top-0 h-full w-1/3"
                  style={{
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)",
                  }}
                >
                  {/* Additional gradient to blend the blur effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                </div>
              </div>

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

              <div
    className="absolute right-0 top-0 h-full w-1/3"
    style={{
      backdropFilter: "blur(5px)", // slightly lighter blur
      WebkitBackdropFilter: "blur(5px)",
      maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent"></div>
  </div>

              {/* Content bottom-left */}
              <div className="relative z-10 h-full flex items-end">
                <motion.div
                  className="px-6 md:px-12 pb-10 md:pb-16 max-w-3xl"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={staggerContainer}
                  key={index}
                >
                  {/* Title */}
                  <motion.h1
                    className="text-lg sm:text-2xl md:text-4xl font-bold text-white leading-snug"
                    variants={fadeUp}
                  >
                    {slide.title}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl"
                    variants={fadeUp}
                  >
                    {slide.description}
                  </motion.p>

                  {/* Meta + Button */}
                  <motion.div
                    className="mt-6 mb-5 flex flex-wrap items-center gap-6 text-gray-300 text-sm"
                    variants={fadeUp}
                  >
                    <button className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition group">
                      Read Story{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <span>{slide.author}</span>
                    <span>• {slide.readTime}</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom pagination */}
        <div className="custom-pagination absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2"></div>

        {/* Custom navigation arrows */}
        <button className="custom-swiper-button-prev absolute bottom-6 right-20 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-300 group">
          <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
        </button>
        <button className="custom-swiper-button-next absolute bottom-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-300 group">
          <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
        </button>
      </Swiper>

      {/* Custom pagination bullets style */}
      <style jsx global>{`
        .custom-bullet {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .custom-bullet-active {
          background-color: #fff;
          width: 24px;
          border-radius: 6px;
        }

        .swiper-pagination {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          z-index: 10;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;