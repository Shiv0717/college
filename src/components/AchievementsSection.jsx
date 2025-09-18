"use client";
import React, { useEffect, useRef } from "react";
import { ChevronRight, Award, Users, BookOpen, Star, TrendingUp, Target, Globe } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

// University color palette
const colors = {
  primary: "#1a365d",     // Deep blue (university primary)
  secondary: "#b38b59",   // Gold accent (university secondary)
  tertiary: "#2d3748",    // Dark gray
  accent: "#3182ce",      // Light blue
  light: "#e9d8a6",       // Cream/beige
};

const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

const achievements = [
  {
    number: "65+",
    label: "Years Experience",
    description: "We have over 65 years of combined experience in providing world-class education.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: <Award className="w-6 h-6" />,
    color: colors.primary,
  },
  {
    number: "100+",
    label: "Research Publications",
    description: "Our faculty and students have contributed to more than 100 research publications globally.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: <BookOpen className="w-6 h-6" />,
    color: colors.secondary,
  },
  {
    number: "15+",
    label: "National Awards",
    description: "We are proud recipients of 15+ national awards recognizing excellence in academics.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: <Star className="w-6 h-6" />,
    color: colors.accent,
  },
  {
    number: "5000+",
    label: "Graduates",
    description: "Over 5000 graduates have gone on to excel in diverse industries worldwide.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: <Users className="w-6 h-6" />,
    color: colors.tertiary,
  },
  {
    number: "95%",
    label: "Placement Rate",
    description: "Our graduates enjoy a 95% placement rate in top companies worldwide.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "#2a9d8f",
  },
  {
    number: "50+",
    label: "Industry Partners",
    description: "We collaborate with 50+ industry leaders for internships and research projects.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: <Target className="w-6 h-6" />,
    color: "#e76f51",
  },
];

const AchievementsSection = () => {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    // Animate header letters
    const letters = headingRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50, rotationX: -90 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      }
    );

    // Subtitle animation
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
        },
      }
    );

    // Divider animation
    gsap.fromTo(
      dividerRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 85%",
        },
      }
    );

    // Background pattern animation
    gsap.to(".bg-pattern circle", {
      rotation: 360,
      duration: 40,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center",
    });
  }, []);

  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      style={bodyFont}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-pattern">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circles" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="5" fill={colors.primary} opacity="0.1" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circles)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p 
            className="text-[#b38b59] uppercase tracking-wider text-sm font-semibold mb-3 opacity-0"
            ref={subtitleRef}
          >
            Our Excellence
          </p>

          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={headingFont}
          >
            {"Our Achievements".split("").map((char, i) => (
              <span key={i} className="letter inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          <div 
            ref={dividerRef} 
            className="w-16 sm:w-20 h-1 bg-[#b38b59] mt-3 md:mt-4 mx-auto transform origin-left"
          ></div>
        </div>

        

        {/* Marquee Section */}
        <div className="relative w-full overflow-hidden py-6">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <Marquee gradient={false} speed={40} pauseOnHover={true}>
            {achievements.map((achieve, index) => (
              <div key={index} className="flex-shrink-0 w-[350px] mx-4">
                <AchievementCard achieve={achieve} headingFont={headingFont} />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-3  bg-gradient-to-r from-[#1a365d] to-[#2d3748] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Discover Our Success Stories
          </button>
        </div>
      </div>

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&family=Lora:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    </section>
  );
};

const AchievementCard = ({ achieve, headingFont }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div 
      ref={cardRef}
      className="relative w-full h-[500px] overflow-hidden group cursor-pointer rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
    >
      <img
        src={achieve.image}
        alt={achieve.label}
        className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
      
      <div className="relative h-full flex flex-col justify-end p-6">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="text-4xl font-bold text-white mb-2" style={headingFont}>
            {achieve.number}
          </div>
          
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <div className="text-white">{achieve.icon}</div>
          </div>
          
          <h3 className="text-white text-lg font-bold mb-2" style={headingFont}>
            {achieve.label}
          </h3>
          
          <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3">
            {achieve.description}
          </p>
          
          <div className="flex  items-center text-blue-200 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <span>Learn more</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;