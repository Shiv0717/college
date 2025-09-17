"use client";
import React, { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

const stats = [
  { label: "Students Graduated", value: 15000 },
  { label: "Placement Percentage", value: 95 },
  { label: "Faculty Members", value: 330 },
  { label: "Courses Offered", value: 24 },
  { label: "Research Publications", value: 1100 },
  { label: "Years of Excellence", value: 25 },
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
    <span className="text-3xl font-bold text-blue-800" style={headingFont}>
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
          initial={{ color: "#888888", opacity: 0.7 }}
          animate={inView ? { color: "#1e293b", opacity: 1 } : { color: "#888888", opacity: 0.7 }}
          transition={{ delay: i * 0.015, duration: 0.5 }}
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

  const [statsInView, setStatsInView] = useState(false);
  const [paragraphInView, setParagraphInView] = useState(false);

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
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-28 bg-white" style={bodyFont}>
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left Side */}
        <div className="w-full lg:w-[35%] flex flex-col justify-end md:items-center lg:items-start text-center lg:text-left gap-6">
          <motion.h3 
            className="text-left text-sm text-blue-800 font-medium uppercase tracking-widest"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About KEC
          </motion.h3>
          <motion.img
            src="https://framerusercontent.com/images/nIU5gNbG6rFGNvzi2v57UeWK0yA.jpg?scale-down-to=1024"
            alt="Krishna Engineering College Campus"
            className="w-full lg:w-80 h-80 object-cover mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
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
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-4 p-4 border-l-4 border-blue-800/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="text-blue-800 w-5 h-5" />
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
                  <span className="text-gray-700 text-sm mt-1 tracking-wide">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div 
            className="mt-8 border-t border-gray-200 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <p className="text-gray-600 leading-relaxed">
              Established in 1999, Krishna Engineering College has been at the forefront of technical education, 
              offering B.Tech programs in Computer Science, Mechanical, Electrical, Civil, and Electronics Engineering. 
              Our campus spans 25 acres with modern laboratories, a central library, and sports facilities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </section>
  );
};

export default AboutUs;