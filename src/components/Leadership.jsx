"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, Award, Quote, ChevronRight, Users, BookOpen, Star } from "lucide-react";

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const subheadingFont = { fontFamily: "'Cormorant Garamond', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

// Data
const leaders = [
  {
    name: "Dr. Ramesh Sharma",
    title: "Chairman & Founder",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    bio: "With a vision to revolutionize technical education, Dr. Sharma brings over 30 years of academic leadership and innovation.",
    quote: "Education is not the filling of a pail, but the lighting of a fire.",
    achievements: [
      "30+ years in academia",
      "Published 50+ research papers",
      "Recipient of National Education Award",
    ],
    social: { linkedin: "#", email: "r.sharma@example.com" },
  },
  {
    name: "Ms. Priya Verma",
    title: "Director of Academics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    bio: "A passionate educator and strategist, Ms. Verma drives our academic excellence and curriculum design with precision.",
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    achievements: [
      "Curriculum development expert",
      "15 years in educational leadership",
      "International conference speaker",
    ],
    social: { linkedin: "#", email: "p.verma@example.com" },
  },
  {
    name: "Mr. Arjun Malhotra",
    title: "Head of Administration",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    bio: "Mr. Malhotra ensures smooth operations and student success through efficient and empathetic leadership.",
    quote: "Excellence is not a skill, it's an attitude.",
    achievements: [
      "Operational efficiency specialist",
      "Student success advocate",
      "20 years in administrative leadership",
    ],
    social: { linkedin: "#", email: "a.malhotra@example.com" },
  },
];

// Stats
const stats = [
  { value: "65+", label: "Years Combined Experience", icon: <Users className="w-5 h-5" /> },
  { value: "100+", label: "Research Publications", icon: <BookOpen className="w-5 h-5" /> },
  { value: "15+", label: "National Awards", icon: <Star className="w-5 h-5" /> },
];

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" } }),
};

const cardAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.5 } }
};

const LeadershipSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Auto-rotate cards
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % leaders.length);
    }, 5000);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(interval);
    };
  }, []);

  const heading = "Our Visionary Leaders";

  return (
    <section
      id="leadership"
      className="bg-gradient-to-b from-white to-gray-50 py-24 px-4 sm:px-6 lg:px-20"
      style={bodyFont}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p 
            className="text-blue-800 uppercase tracking-widest text-xs font-medium mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Leadership Excellence
          </motion.p>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6" 
            style={headingFont}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {heading}
          </motion.h2>
          <motion.div 
            className="w-24 h-0.5 bg-blue-800/30 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          />
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Behind every successful institution is a team of dedicated individuals. Our leadership blends experience, innovation, and empathy to guide our institution toward excellence.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Stats Column */}
          <motion.div 
            className="lg:sticky h-fit self-start p-6 border-b-4 border-blue-800/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            style={{ top: '120px' }}
          >
            <h3 className="text-xl font-medium text-gray-900 mb-6" style={subheadingFont}>Our Impact</h3>
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 border-l-4 border-blue-800/30 bg-white"
                  variants={fadeUp}
                  custom={index}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 text-blue-800 mr-4">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-light text-blue-800 mb-1" style={headingFont}>{stat.value}</div>
                    <div className="text-sm text-gray-600 tracking-wide">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Cards - Animated */}
          <div className="lg:col-span-2 relative h-[1000px]  md:h-[1000px]">
            <AnimatePresence mode="wait">
              {leaders.map((leader, index) => (
                activeIndex === index && (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex flex-col gap-8"
                    variants={cardAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {/* Image Section */}
                    <div className=" overflow-hidden">
                      <motion.img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full lg:h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.7 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>

                    {/* Content Section */}
                    <div className=" px-6 flex flex-col justify-center py-6">
                      <motion.h4 
                        className="text-3xl font-medium text-gray-900 mb-2" 
                        style={subheadingFont}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {leader.name}
                      </motion.h4>
                      <motion.p 
                        className="text-blue-800 font-medium mb-6 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {leader.title}
                      </motion.p>
                      <motion.p 
                        className="text-gray-700 mb-6 leading-relaxed text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {leader.bio}
                      </motion.p>

                      {/* Quote */}
                      <motion.div 
                        className="border-l-4 border-blue-800/50 pl-5 mb-6 py-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <Quote className="w-5 h-5 text-blue-800 mb-2" />
                        <p className="text-blue-800 italic text-lg">"{leader.quote}"</p>
                      </motion.div>

                      {/* Achievements */}
                      <motion.div 
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <div className="flex items-center text-blue-800 font-medium mb-3 text-lg">
                          <Award className="w-5 h-5 mr-2" /> Key Achievements
                        </div>
                        <ul className="text-gray-700 space-y-2">
                          {leader.achievements.map((achievement, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                            >
                              <ChevronRight className="w-5 h-5 text-blue-800 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Navigation Dots */}
                      <div className="flex space-x-2 mt-6">
                        {leaders.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              i === activeIndex ? 'bg-blue-800' : 'bg-gray-300'
                            }`}
                            aria-label={`View ${leaders[i].name}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </section>
  );
};

export default LeadershipSection;