"use client";
import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, GraduationCap, Users, BookOpen, Award, Calendar, FileText } from "lucide-react";
import { motion } from "framer-motion";

// University color palette
const colors = {
  primary: "#1a365d",     // Deep blue (university primary)
  secondary: "#b38b59",   // Gold accent (university secondary)
  tertiary: "#2d3748",    // Dark gray
  accent: "#3182ce",      // Light blue
  light: "#e9d8a6",       // Cream/beige
};

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

const stats = [
  { label: "Students Graduated", value: 15000, icon: <GraduationCap size={20} /> },
  { label: "Placement Percentage", value: 95, icon: <Award size={20} /> },
  { label: "Faculty Members", value: 330, icon: <Users size={20} /> },
  { label: "Courses Offered", value: 24, icon: <BookOpen size={20} /> },
  { label: "Research Publications", value: 1100, icon: <FileText size={20} /> },
  { label: "Years of Excellence", value: 25, icon: <Calendar size={20} /> },
];

// Animated Counter
const AnimatedNumber = ({ value, suffix = "", inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(counter);
  }, [inView, value]);

  return (
    <span className="text-3xl md:text-4xl font-bold" style={{ ...headingFont, color: colors.primary }}>
      {count}
      {suffix}
    </span>
  );
};

// Paragraph with letter-by-letter animation
const AnimatedParagraph = ({ text, inView }) => {
  const letters = text.split("");

  return (
    <p className="text-3xl md:text-4xl font-light leading-relaxed flex flex-wrap tracking-normal" style={headingFont}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ color: colors.tertiary + "80", opacity: 0.7, y: 10 }}
          animate={inView ? { 
            color: colors.primary, 
            opacity: 1, 
            y: 0 
          } : { 
            color: colors.tertiary + "80", 
            opacity: 0.7, 
            y: 10 
          }}
          transition={{ 
            delay: i * 0.01, 
            duration: 0.5,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </p>
  );
};

const AboutUs = () => {
  const statsRef = useRef(null);
  const paragraphRef = useRef(null);
  const sectionRef = useRef(null);

  const [statsInView, setStatsInView] = useState(false);
  const [paragraphInView, setParagraphInView] = useState(false);
  const [sectionInView, setSectionInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === statsRef.current) {
            setStatsInView(entry.isIntersecting);
          }
          if (entry.target === paragraphRef.current) {
            setParagraphInView(entry.isIntersecting);
          }
          if (entry.target === sectionRef.current) {
            setSectionInView(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="max-w-7xl mx-auto px-6 py-28 bg-white relative overflow-hidden"
      style={bodyFont}
    >
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-amber-100 rounded-full opacity-20"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-16">
        {/* Left Side */}
        <div className="w-full lg:w-[35%] flex flex-col justify-end md:items-center lg:items-start text-center lg:text-left gap-6">
          <motion.h3 
            className="text-left text-sm font-medium uppercase tracking-widest"
            initial={{ opacity: 0, x: -30 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ color: colors.secondary }}
          >
            About KEC
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={sectionInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.9, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://framerusercontent.com/images/pj3yU0TmIwVcFXGpK8xYQPel7f8.jpg"
              alt="Krishna Engineering College Campus"
              className="w-full lg:w-80 h-80 object-cover mt-6 lg:mt-0 shadow-lg"
              style={{ border: `1px solid ${colors.primary}20` }}
            />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-800 opacity-10"></div>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-600 opacity-10"></div>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[65%] flex flex-col justify-center gap-14">
          {/* Animated Paragraph */}
          <div ref={paragraphRef}>
            <AnimatedParagraph
              text="Krishna Engineering College provides comprehensive technical education with industry-aligned curriculum, state-of-the-art facilities, and experienced faculty dedicated to shaping future engineers and innovators."
              inView={paragraphInView}
            />
          </div>

          {/* Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-4 p-5 bg-gradient-to-br from-white to-gray-50 border-l-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                style={{ borderLeftColor: colors.secondary }}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "#f8fafc"
                }}
              >
                <motion.div
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={statsInView ? { scale: 1, rotate: 0 } : { scale: 0.8, rotate: -10 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="p-2 rounded-full"
                  style={{ backgroundColor: `${colors.secondary}15`, color: colors.secondary }}
                >
                  {stat.icon}
                </motion.div>
                <div className="flex flex-col">
                  <AnimatedNumber
                    value={stat.value}
                    inView={statsInView}
                    suffix={
                      stat.label.includes("%")
                        ? "%"
                        : stat.value > 1000
                        ? "+"
                        : ""
                    }
                  />
                  <span className="text-gray-700 text-sm mt-1 tracking-wide" style={bodyFont}>
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div 
            className="mt-8 border-t pt-8"
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            style={{ borderColor: `${colors.primary}20` }}
          >
            <p className="text-gray-600 leading-relaxed text-lg" style={bodyFont}>
              Established in 1999, Krishna Engineering College has been at the forefront of technical education, 
              offering B.Tech programs in Computer Science, Mechanical, Electrical, Civil, and Electronics Engineering. 
              Our campus spans 25 acres with modern laboratories, a central library, and sports facilities.
            </p>
            
            <motion.button
              className="mt-6 px-6 py-3 flex items-center gap-2 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              style={{ 
                backgroundColor: colors.primary,
                color: 'white'
              }}
              whileHover={{ 
                backgroundColor: colors.secondary,
                scale: 1.05
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Discover Our Legacy</span>
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </section>
  );
};

export default AboutUs;