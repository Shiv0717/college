"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Hero slides
const slides = [
  {
    title: "Krishna Engineering College: Excellence in Technical Education",
    description:
      "KEC Bhilai has been shaping future engineers with strong academic foundations, modern laboratories, and a focus on innovation and research.",
    image: "https://picsum.photos/1600/800?random=10",
    author: "KEC Editorial Team",
    readTime: "2 min read",
  },
  {
    title: "Student Achievements in National Level Competitions",
    description:
      "KEC students consistently excel in national hackathons, coding contests, and technical fests, bringing laurels to the institution.",
    image: "https://picsum.photos/1600/800?random=11",
    author: "Campus News",
    readTime: "3 min read",
  },
  {
    title: "Industry Partnerships Driving Placements",
    description:
      "With strong collaborations with top companies, KEC Bhilai ensures excellent placement opportunities for graduating students every year.",
    image: "https://picsum.photos/1600/800?random=12",
    author: "Placement Cell",
    readTime: "4 min read",
  },
];

const fadeImgVariants = {
  hidden: { opacity: 0, y: 30, scale: 1.03 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
  exit: { opacity: 0, y: -80, scale: 0.98, transition: { duration: 1.1, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full md:h-[600px] h-[420px] overflow-hidden font-satoshi">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
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
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background image animated with fade-up on active slide */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <motion.img
                  // key ensures framer re-runs variant when activeIndex changes
                  key={`bg-${index}-${activeIndex === index ? "active" : "idle"}`}
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial="hidden"
                  animate={activeIndex === index ? "visible" : "exit"}
                  variants={fadeImgVariants}
                  style={{ willChange: "transform, opacity" }}
                />
              </div>

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
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              </div>

              {/* Full gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

              {/* Right subtle overlay */}
              <div
                className="absolute right-0 top-0 h-full w-1/3"
                style={{
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                  maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent" />
              </div>

              {/* Content bottom-left */}
              <div className="relative z-10 h-full flex items-end">
                <motion.div
                  className="px-6 md:px-12 pb-10 md:pb-16 max-w-3xl"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  key={`text-${index}-${activeIndex === index ? "active" : "idle"}`}
                >
                  {/* Title */}
                  <motion.h1
                    className="text-lg sm:text-2xl md:text-4xl font-bold text-white leading-snug"
                    variants={fadeUp}
                    // only show full opacity when this slide is active
                    style={{ opacity: activeIndex === index ? 1 : 0.65 }}
                  >
                    {slide.title}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl"
                    variants={fadeUp}
                    style={{ opacity: activeIndex === index ? 1 : 0.55 }}
                  >
                    {slide.description}
                  </motion.p>

                  {/* Meta + Button */}
                  <motion.div
                    className="mt-6 mb-5 flex flex-wrap items-center gap-6 text-gray-300 text-sm"
                    variants={fadeUp}
                    style={{ opacity: activeIndex === index ? 1 : 0.5 }}
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
        <div className="custom-pagination absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2" />

        {/* Custom navigation arrows with loading indicator */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-4">
          {/* Loading indicator dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2  transition-all duration-300 ${
                  index === activeIndex ? "bg-blue-400 scale-125" : "bg-white/40 scale-100"
                }`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className=" hidden lg:flex items-center gap-2">
            <button className="custom-swiper-button-prev w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-300 group">
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
            </button>
            <button className="custom-swiper-button-next w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-300 group">
              <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* Progress bar indicator */}
        <div className="  hidden lg:block absolute bottom-10 right-48 z-20 w-20 h-1 bg-white/20  overflow-hidden">
          <motion.div
            className="h-full bg-blue-400 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            key={activeIndex} // restart for each slide
          />
        </div>
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
