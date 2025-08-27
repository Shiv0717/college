"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper/modules";
import { motion } from "framer-motion";
import { Play, Pause, GraduationCap, ArrowRight, ChevronDown, Phone, Mail, MapPin } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

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
      img: "https://www.kecbhilai.com/images/slider_img3.jpg",
      heading: "Empowering Students for Tomorrow",
      subText: "Learn, Grow, and Build a Successful Career",
      ctaText: "Student Life",
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
    <div className="w-full h-50 lg:h-160 relative overflow-hidden">
      {/* Top info bar */}
      

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
        autoplay={isPlaying ? { 
          delay: 5000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        } : false}
        pagination={{ 
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !w-2 !h-2 md:!w-3 md:!h-3 !mx-1",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-yellow-400 !w-6 md:!w-8 !rounded-full"
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop={true}
        parallax={true}
        className="h-full"
      >
        {/* Parallax background */}
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={slide.img}
                  alt={slide.heading}
                  className="w-full h-full object-cover"
                  data-swiper-parallax="-23%"
                />
                <div className="absolute inset-0 "></div>
              </div>
              
              {/* Content */}
            
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev !text-yellow-400 !left-2 md:!left-6 after:!text-xl md:after:!text-2xl !w-10 !h-10 md:!w-12 md:!h-12 !bg-black/20 !rounded-full flex items-center justify-center"></div>
        <div className="swiper-button-next !text-yellow-400 !right-2 md:!right-6 after:!text-xl md:after:!text-2xl !w-10 !h-10 md:!w-12 md:!h-12 !bg-black/20 !rounded-full flex items-center justify-center"></div>
        
        {/* Play/Pause Button */}
        <div className=" hidden lg:block absolute bottom-20 md:bottom-6 right-4 md:right-6 z-10">
          <button 
            onClick={toggleAutoplay}
            className="bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full hover:bg-white/30 transition-colors"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 md:w-6 md:h-6 text-white" />
            ) : (
              <Play className="w-4 h-4 md:w-6 md:h-6 text-white" />
            )}
          </button>
        </div>
        
      </Swiper>
      
     
     

      

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-blue-900/10 pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;