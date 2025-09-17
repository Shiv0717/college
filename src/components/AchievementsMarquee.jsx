"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Inter', sans-serif" };

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
    <div className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-700 uppercase tracking-wider text-sm font-semibold mb-2">
            Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900" style={headingFont}>
            <Typewriter 
              text="Visionary Foundation" 
              delay={100} 
              className="inline-block"
            />
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mt-3 md:mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - images */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[500px]">
            <motion.div
              className="absolute left-0 top-0 w-4/5 h-4/5 rounded-2xl shadow-xl overflow-hidden z-20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://picsum.photos/500/350?random=1"
                alt="KEC Founder"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              className="absolute right-0 bottom-0 w-3/5 h-3/5 rounded-xl shadow-lg overflow-hidden z-10 bg-blue-100"
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img
                src="https://picsum.photos/500/350?random=2"
                alt="Founder mentoring students"
                className="w-full h-full object-cover opacity-90 mix-blend-multiply"
              />
            </motion.div>

            <div className="absolute -top-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-blue-200 rounded-full opacity-30 z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-blue-300 rounded-full opacity-40 z-0"></div>
          </div>

          {/* Right side content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:pl-4"
          >
            <p className="uppercase text-xs sm:text-sm tracking-widest text-blue-700 font-semibold mb-2">
              Since 1990
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-snug" style={headingFont}>
              <AnimatedLetters 
                text="Message from the " 
                delayPerLetter={0.03}
              />
              <span className="text-blue-700">
                <AnimatedLetters 
                  text="Founder" 
                  delayPerLetter={0.05}
                />
              </span>
            </h2>

            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={bodyFont}>
              At Krishna Engineering College, we are dedicated to shaping bright
              futures by providing world-class technical education, nurturing
              innovation, and empowering students to become leaders of tomorrow.
            </p>

            <motion.div 
              className="border-l-4 border-blue-700 pl-4 sm:pl-5 italic font-medium text-gray-800 mb-6 sm:mb-8 py-2 bg-blue-50/50 rounded-r-lg" 
              style={bodyFont}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Since its inception in 2001, Krishna Engineering College has become
              one of the most reputed educational institutions in the region.
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 sm:mb-8">
              <motion.div 
                className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-xl sm:text-2xl font-bold text-blue-700">
                  <Counter from={0} to={30} duration={2} />
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Years</div>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-xl sm:text-2xl font-bold text-blue-700">
                  <Counter from={0} to={7} duration={2} />K+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Graduates</div>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-xl sm:text-2xl font-bold text-blue-700">
                  <Counter from={0} to={50} duration={2} />+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Programs</div>
              </motion.div>
            </div>

            {/* Founder info */}
            

            {/* CTA Button */}
            <motion.button 
              className=" px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Full Message
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
