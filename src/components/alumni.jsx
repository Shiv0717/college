"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Users, Briefcase, Award, Star } from "lucide-react";

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

// Sample alumni data
const alumni = [
  {
    name: "Sakshi",
    branch: "B.Tech Civil 2020",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    quote:
      "KEC gave me the foundation and confidence to pursue my dream career in civil engineering. The professors provided personalized guidance, the labs were equipped with state-of-the-art facilities, and the curriculum prepared me to tackle real-world engineering challenges.",
  },
  {
    name: "Rohit Kumar",
    branch: "B.Tech Mechanical 2019",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    quote:
      "The faculty and resources at KEC helped me excel and secure my first job with top companies. The emphasis on practical knowledge, internships, and hands-on projects made me industry-ready.",
  },
  {
    name: "Anjali Singh",
    branch: "B.Tech Computer Science 2021",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    quote:
      "At KEC, I learned not just technical skills but leadership and teamwork. The college fostered an environment of collaboration, innovation, and continuous learning that shaped my career.",
  },
];

// Statistics data
const stats = [
  { icon: Users, value: "5,000+", label: "Alumni Network" },
  { icon: Briefcase, value: "92%", label: "Placement Rate" },
  { icon: Award, value: "200+", label: "Companies Recruit" },
  { icon: Star, value: "4.8/5", label: "Satisfaction Rating" },
];

const AlumniSuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const activeAlumni = alumni[activeIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? alumni.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === alumni.length - 1 ? 0 : prev + 1));
  };

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.02,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Split text into letters for animation
  const AnimatedText = ({ text, className }) => {
    return (
      <div className={className}>
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div ref={sectionRef} className="py-20 bg-white" style={bodyFont}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          className="text-blue-800 uppercase tracking-widest text-xs font-medium mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Alumni Success
        </motion.p>

        <AnimatedText
          text="Alumni Success Stories"
          className="text-3xl md:text-5xl font-light text-gray-900 mb-6"
          style={headingFont}
        />

        <motion.div
          className="w-24 h-0.5 bg-blue-800/30 mb-12"
          initial={{ width: 0 }}
          animate={isVisible ? { width: 96 } : { width: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Quote Section (70%) */}
          <div className="lg:w-7/10 w-full bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-12 flex flex-col justify-between relative min-h-[450px] border-l-4 border-blue-800">
            <motion.div
              key={activeAlumni.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full flex flex-col justify-between"
            >
              <div>
                <Quote className="text-blue-800 w-8 h-8 mb-6" />
                <motion.p
                  className="text-xl text-gray-800 leading-relaxed mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  style={bodyFont}
                >
                  "{activeAlumni.quote}"
                </motion.p>
              </div>

              {/* Alumni Image + Name + Branch */}
              <div className="flex items-center gap-6 border-t border-blue-200 pt-6">
                <motion.img
                  src={activeAlumni.img}
                  alt={activeAlumni.name}
                  className="w-16 h-16 rounded-full object-cover"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                />
                <div>
                  <motion.h4
                    className="text-lg font-medium text-gray-900"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    style={headingFont}
                  >
                    {activeAlumni.name}
                  </motion.h4>
                  <motion.p
                    className="text-sm text-blue-800"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    {activeAlumni.branch}
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Arrow Buttons on Right Side */}
            <div className="absolute right-6 bottom-6 flex gap-3">
              <motion.button
                onClick={handlePrev}
                className="bg-white p-3 hover:bg-blue-800 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                className="bg-white p-3 hover:bg-blue-800 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Indicator dots */}
            <div className="absolute bottom-6 left-6 flex gap-2">
              {alumni.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? "bg-blue-800 scale-125" : "bg-blue-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Statistics Section (30%) */}
          <motion.div 
            className="lg:w-3/10 relative flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="bg-blue-900 text-white p-8 w-full flex flex-col gap-10">
              <h3 className="text-2xl font-light text-center" style={headingFont}>
                Our Alumni Impact
              </h3>
              
              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                    >
                      <div className="text-blue-200 mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-light mb-2" style={headingFont}>{stat.value}</div>
                      <div className="text-sm text-blue-200 tracking-wide">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* CTA Button */}
              <motion.button 
                className="bg-white text-blue-900 px-6 py-3 font-medium hover:bg-blue-50 transition-colors mt-4"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                Share Your Story
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&family=Lora:wght@400;500;600&display=swap" rel="stylesheet" />
    </div>
  );
};

export default AlumniSuccessStories;