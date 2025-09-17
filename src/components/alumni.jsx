"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Users, Briefcase, Award, Star } from "lucide-react";

// Sample alumni data
const alumni = [
  {
    name: "Sakshi",
    branch: "B.Tech Civil 2020",
    img: "https://picsum.photos/200/200?random=5",
    quote:
      "KEC gave me the foundation and confidence to pursue my dream career in civil engineering. The professors provided personalized guidance, the labs were equipped with state-of-the-art facilities, and the curriculum prepared me to tackle real-world engineering challenges. My experience here has truly shaped me into a competent and confident professional.",
  },
  {
    name: "Rohit Kumar",
    branch: "B.Tech Mechanical 2019",
    img: "https://picsum.photos/200/200?random=6",
    quote:
      "The faculty and resources at KEC helped me excel and secure my first job with top companies. The emphasis on practical knowledge, internships, and hands-on projects made me industry-ready. I particularly valued the mentorship from senior professors, which helped me understand complex mechanical concepts and apply them effectively in real-world scenarios.",
  },
  {
    name: "Anjali Singh",
    branch: "B.Tech Computer Science 2021",
    img: "https://picsum.photos/200/200?random=7",
    quote:
      "At KEC, I learned not just technical skills but leadership and teamwork. The college fostered an environment of collaboration, innovation, and continuous learning. From coding competitions to hackathons, every opportunity helped me grow as a software developer and a leader. I am proud to be part of the KEC alumni community, which continues to inspire me every day.",
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
        delay: i * 0.03,
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
    <div ref={sectionRef} className="py-16 bg-gray-50 font-inter">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          className="text-blue-700 uppercase tracking-wider text-sm font-semibold mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Alumni Success
        </motion.p>

        <AnimatedText
          text="Alumni Success Stories"
          className="  text-3xl md:text-5xl font-bold text-gray-900 mb-4"
        />

        <motion.div
          className="w-20 h-1 bg-blue-600 mt-4 mb-8"
          initial={{ width: 0 }}
          animate={isVisible ? { width: 80 } : { width: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Quote Section (70%) */}
          <div className="lg:w-7/10 w-full bg-gradient-to-br from-blue-100 to-blue-50 p-8 md:p-10 rounded-2xl flex flex-col justify-between relative min-h-[400px] shadow-md">
            <motion.div
              key={activeAlumni.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full flex flex-col justify-between"
            >
              <div>
                <Quote className="text-blue-600 w-10 h-10 mb-4 md:mb-6" />
                <motion.p
                  className="text-lg md:text-xl text-gray-800 italic mb-4 md:mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  "{activeAlumni.quote}"
                </motion.p>
              </div>

              {/* Alumni Image + Name + Branch */}
              <div className="flex items-center gap-3 md:gap-4 border-t border-blue-200 pt-4">
                <motion.img
                  src={activeAlumni.img}
                  alt={activeAlumni.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                />
                <div>
                  <motion.h4
                    className="text-base md:text-lg font-semibold text-gray-900"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {activeAlumni.name}
                  </motion.h4>
                  <motion.p
                    className="text-xs md:text-sm text-gray-600"
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
            <div className=" hidden absolute right-4 bottom-2 transform -translate-y-1/2 lg:flex gap-2 md:gap-4">
              <motion.button
                onClick={handlePrev}
                className="bg-white/90 backdrop-blur-md rounded-full p-2 md:p-3 hover:bg-white transition shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-900" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                className="bg-white/90 backdrop-blur-md rounded-full p-2 md:p-3 hover:bg-white transition shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-900" />
              </motion.button>
            </div>

            {/* Indicator dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 md:gap-2">
              {alumni.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                    index === activeIndex ? "bg-blue-600 scale-110" : "bg-blue-300"
                  }`}
                />
              ))}
            </div>
          </div>

         


          {/* Right: Statistics Section (30%) */}
          <motion.div 
            className="md:w-3/10 relative flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 w-full flex flex-col gap-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center">
                Our Alumni Impact
              </h3>
              
              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-6">
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
                      <div className="bg-blue-500/20 p-3 rounded-full mb-3">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm opacity-90 mt-1">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* CTA Button */}
              <motion.button 
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-md mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
    </div>
  );
};

export default AlumniSuccessStories;