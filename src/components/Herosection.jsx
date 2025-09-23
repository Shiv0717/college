"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
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
    image: "https://plus.unsplash.com/premium_photo-1682974407026-581fe0e550ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "KEC Editorial Team",
    readTime: "2 min read",
  },
  {
    title: "Student Achievements in National Level Competitions",
    description:
      "KEC students consistently excel in national hackathons, coding contests, and technical fests, bringing laurels to the institution.",
    image: "https://plus.unsplash.com/premium_photo-1691849271949-cb30187a80c3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Campus News",
    readTime: "3 min read",
  },
  {
    title: "Industry Partnerships Driving Placements",
    description:
      "With strong collaborations with top companies, KEC Bhilai ensures excellent placement opportunities for graduating students every year.",
    image: "https://images.unsplash.com/photo-1623754420540-b9c18380fad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  const [isPlaying, setIsPlaying] = useState(true);
  const headingFont = { fontFamily: "'Playfair Display', serif" };
  const bodyFont = { fontFamily: "'Lora', serif" };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

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
        autoplay={isPlaying ? { delay: 5000, disableOnInteraction: false } : false}
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

              {/* Enhanced gradient overlay system */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Left accent gradient */}
              <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-blue-600/10 to-transparent" />
              
              {/* Right subtle gradient */}
              <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-purple-600/5 to-transparent" />

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
                    className="text-lg sm:text-2xl md:text-4xl font-bold text-white leading-snug mb-3 sm:mb-4"
                    variants={fadeUp}
                    style={{ 
                      ...headingFont, 
                      opacity: activeIndex === index ? 1 : 0.65,
                      textShadow: '0 2px 8px rgba(0,0,0,0.6)'
                    }}
                  >
                    {slide.title}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl leading-relaxed mb-4 sm:mb-6"
                    variants={fadeUp}
                    style={{ 
                      ...bodyFont, 
                      opacity: activeIndex === index ? 1 : 0.55,
                      textShadow: '0 1px 4px rgba(0,0,0,0.5)'
                    }}
                  >
                    {slide.description}
                  </motion.p>

                  {/* Meta + Button */}
                  <motion.div
                    className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-300 text-sm"
                    variants={fadeUp}
                    style={{ opacity: activeIndex === index ? 1 : 0.5 }}
                  >
                    <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium border border-white/30 hover:bg-white/30 transition-all duration-300 group">
                      Read Story
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center gap-4">
                      <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">{slide.author}</span>
                      <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                      <span>{slide.readTime}</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Slide number indicator */}
              <div className="absolute top-6 left-6 z-20">
                <div className="text-white text-sm font-medium bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  <span className="text-lg font-bold mr-1">{activeIndex + 1}</span>
                  <span className="text-gray-300">/ {slides.length}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Enhanced pagination */}
       

        {/* Enhanced controls container */}
        <div className="absolute hidden bottom-6 right-6 z-20 md:flex items-center gap-4 backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full border border-white/20">
          {/* Play/Pause button */}
          <button 
            onClick={toggleAutoplay}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-white" />
            ) : (
              <Play className="w-4 h-4 text-white" />
            )}
          </button>

          {/* Navigation arrows */}
          <div className="flex items-center gap-2">
            <button className="custom-swiper-button-prev w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button className="custom-swiper-button-next w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Progress bar indicator */}
        <div className="absolute bottom-4 left-6 right-6 z-20 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-400 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 5,
              ease: "linear",
            }}
            key={activeIndex}
          />
        </div>
      </Swiper>

      {/* Custom pagination bullets style */}
      <style jsx global>{`
        .custom-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.4);
          margin: 0 3px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .custom-bullet::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          transition: left 0.6s ease;
        }

        .custom-bullet:hover::before {
          left: 100%;
        }

        .custom-bullet-active {
          background-color: #ffffff;
          width: 24px;
          transform: scale(1.1);
          box-shadow: 0 0 10px rgba(255,255,255,0.3);
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

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .custom-bullet {
            width: 6px;
            height: 6px;
            margin: 0 2px;
          }
          
          .custom-bullet-active {
            width: 20px;
          }
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&family=Lora:wght@400;500;600&display=swap" rel="stylesheet" />
    </section>
  );
};

export default HeroSection;