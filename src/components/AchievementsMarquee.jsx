"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Fonts
const headingFont = { fontFamily: "'Cormorant Garamond', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

// Typewriter component
const Typewriter = ({ text, delay, className }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span className={className}>{currentText}</span>;
};

// Animated letters component
const AnimatedLetters = ({ text, delayPerLetter = 0.05, className }) => {
  const letters = text.split("");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: delayPerLetter }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.span
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Counter component
const Counter = ({ from = 0, to, duration = 2, className }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animateCount);
        }
      };

      animationFrame = requestAnimationFrame(animateCount);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref} className={className}>{count}+</span>;
};

const FounderSection = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-800 uppercase tracking-widest text-xs font-medium mb-3">
          About Us
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-4" style={headingFont}>
            <Typewriter 
              text="Excellence in Education " 
              delay={100} 
              className="inline-block"
            />
          </h2>
          <div className="w-24 h-0.5 bg-blue-800/30 mx-auto mt-5"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - images */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
            <motion.div
              className="absolute left-0 top-0 w-4/5 h-4/5 overflow-hidden z-20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="KEC Founder"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </motion.div>

            <motion.div
              className="absolute right-0 bottom-0 w-3/5 h-3/5 overflow-hidden z-10"
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Founder mentoring students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
            </motion.div>

            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-blue-800/10 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 border-2 border-blue-800/10 z-0"></div>
          </div>

          {/* Right side content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:pl-8"
          >
            <p className="uppercase text-xs tracking-[0.2em] text-blue-800 font-medium mb-4">
              Since 1990
            </p>

            <h2 className="text-4xl sm:text-5xl font-light mb-6 leading-tight" style={headingFont}>
              <span className="block mb-2">Learn more about</span>
              <span className="text-blue-800 font-medium">
              Krishna Engineering College
              </span>
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed text-lg" style={bodyFont}>
              At Krishna Engineering College, we are dedicated to shaping bright
              futures by providing world-class technical education, nurturing
              innovation, and empowering students to become leaders of tomorrow.
            </p>

            <motion.div 
              className="border-l-4 border-blue-800/30 pl-5 italic text-gray-800 mb-8 py-2" 
              style={bodyFont}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              "Since its inception in 2001, Krishna Engineering College has become
              one of the most reputed educational institutions in the region."
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <motion.div 
                className="text-center p-4 border-b-4 border-blue-800/20"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-3xl font-light text-blue-800 mb-1" style={headingFont}>
                  <Counter from={0} to={30} duration={2} />
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-600">Years</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 border-b-4 border-blue-800/20"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-3xl font-light text-blue-800 mb-1" style={headingFont}>
                  <Counter from={0} to={7} duration={2} />K+
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-600">Graduates</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 border-b-4 border-blue-800/20"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-3xl font-light text-blue-800 mb-1" style={headingFont}>
                  <Counter from={0} to={50} duration={2} />+
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-600">Programs</div>
              </motion.div>
            </div>

            {/* Founder info */}
            <div className="mb-8">
              <p className="text-gray-900 font-medium text-lg">Mr. Rajesh Kumar</p>
              <p className="text-gray-600 text-sm">Founder & Chairman</p>
            </div>

            {/* CTA Button */}
            <motion.button 
              className="px-8 py-4 bg-blue-800 text-white font-medium transition-all duration-300 hover:bg-blue-900 transform hover:-translate-y-1 inline-flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Read Full Message</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;