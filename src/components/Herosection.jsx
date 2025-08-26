"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { Play, GraduationCap, ArrowRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  
  const slides = [
    {
      id: 1,
      img: "https://www.kecbhilai.com/images/slider_img2.jpg",
      heading: "Welcome to Krishna Engineering College",
      subText: "Shaping Future Leaders with Knowledge & Innovation",
      ctaText: "Explore Programs",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      heading: "Empowering Students for Tomorrow",
      subText: "Learn, Grow, and Build a Successful Career",
      ctaText: "Student Life",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      heading: "World-Class Infrastructure",
      subText: "State-of-the-Art Facilities for Holistic Learning",
      ctaText: "Campus Tour",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1569848771194-2dbfe01f4e96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      heading: "Industry-Ready Education",
      subText: "Connecting Academia with Real-World Applications",
      ctaText: "Placements",
    },
  ];

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(234, 179, 8, 0.3)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={isPlaying ? { 
          delay: 5000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        } : false}
        pagination={{ 
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !mx-1",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-yellow-400 !w-8 !rounded-full"
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image with parallax effect */}
              <div 
                className="swiper-parallax absolute inset-0 w-full h-full"
                data-swiper-parallax="-23%"
              >
                <img
                  src={slide.img}
                  alt={slide.heading}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/30 flex items-center">
                <div className="container mx-auto px-6">
                  <div className="max-w-2xl">
                    <motion.h2 
                      className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight"
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {slide.heading}
                    </motion.h2>
                    <motion.p 
                      className="text-blue-100 text-xl md:text-2xl mb-8 font-light"
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.2 }}
                    >
                      {slide.subText}
                    </motion.p>
                    <motion.div
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.4 }}
                    >
                      <motion.button 
                        className="bg-yellow-400 text-blue-900 font-semibold px-8 py-4 rounded-lg shadow-lg flex items-center space-x-2 group"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <span>{slide.ctaText}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev !text-yellow-400 !left-6 after:!text-2xl"></div>
        <div className="swiper-button-next !text-yellow-400 !right-6 after:!text-2xl"></div>
        
        {/* Play/Pause Button */}
        <div className="absolute bottom-6 right-6 z-10">
          <button 
            onClick={toggleAutoplay}
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <Play className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
        
        {/* Quick Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-blue-900/80 backdrop-blur-sm py-3 px-6 z-10">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-4 text-white/90">
                <GraduationCap className="w-5 h-5 text-yellow-400" />
                <span>NAAC Accredited</span>
              </div>
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <span className="text-white/80">📅 Admissions Open 2024</span>
                <span className="text-white/80">🏆 Ranked Among Top 100 Engineering Colleges</span>
                <span className="text-white/80">💼 95% Placement Record</span>
              </div>
            </div>
          </div>
        </div>
      </Swiper>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;