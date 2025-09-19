"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight,
  X,
  CheckCircle,
  Drone,
  Cpu,
  Code,
  Zap
} from "lucide-react";

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

// Color Palette
const colors = {
  primary: "#1a365d",     // Deep blue
  secondary: "#b38b59",   // Gold accent
  tertiary: "#2d3748",    // Dark gray
  accent: "#3182ce",      // Light blue
  light: "#e9d8a6",       // Cream/beige
};

const SkillDevelopmentSection = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const programs = [
    {
      id: 1,
      title: "Drone Technology",
      icon: <Drone size={32} color={colors.primary} />,
      description: "Master the fundamentals of drone technology, from assembly to flight programming.",
      duration: "4 Weeks",
      level: "Beginner to Intermediate",
      features: [
        "Hands-on drone assembly workshop",
        "Flight simulation training",
        "Aerial photography & videography",
        "Drone programming with Python",
        "Regulations & safety certification"
      ],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1000&q=80",
      price: "₹12,999",
      originalPrice: "₹16,999",
      discount: "23% off"
    },
    {
      id: 2,
      title: "EV Manufacturing & Embedded Systems",
      icon: <Cpu size={32} color={colors.primary} />,
      description: "Comprehensive training in electric vehicle technology and embedded systems design.",
      duration: "4 Weeks",
      level: "Intermediate to Advanced",
      features: [
        "EV architecture & components",
        "Battery management systems",
        "Embedded C programming",
        "PCB design & fabrication",
        "Real-world project building"
      ],
      image: "https://images.unsplash.com/photo-1593941707882-a5bba53377fe?auto=format&fit=crop&w=1000&q=80",
      price: "₹14,999",
      originalPrice: "₹19,999",
      discount: "25% off"
    },
    {
      id: 3,
      title: "Advanced Coding Program",
      icon: <Code size={32} color={colors.primary} />,
      description: "Intensive coding bootcamp focusing on advanced algorithms and modern development practices.",
      duration: "4 Weeks",
      level: "Intermediate to Advanced",
      features: [
        "Data structures & algorithms",
        "Web & mobile app development",
        "Cloud deployment & DevOps",
        "AI & machine learning basics",
        "Team project & code reviews"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      price: "₹11,999",
      originalPrice: "₹15,999",
      discount: "25% off"
    }
  ];

  const stats = [
    { value: "100+", label: "Hours of Training" },
    { value: "5+", label: "Industry Projects" },
    { value: "1:10", label: "Mentor Ratio" },
    { value: "Certificate", label: "Upon Completion" }
  ];

  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted for:", selectedProgram.title);
    setShowModal(false);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" style={bodyFont}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 mb-6 border-b-2"
            style={{ color: colors.primary, borderColor: colors.primary }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap size={18} className="mr-2" />
            <span className="text-sm font-medium tracking-wide">Summer Skill Development Programs</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={headingFont}
          >
            Transform Your Summer
            <span className="block mt-2" style={{ color: colors.primary }}>Build In-Demand Skills</span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join our intensive 4-week summer programs designed to give you hands-on experience 
            with cutting-edge technologies. Limited seats available for each specialized track.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4"
                style={{  borderLeft: `4px solid ${colors.primary}` }}
              >
                <div className="text-2xl font-light mb-1" style={{ color: colors.primary, ...headingFont }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              className="bg-white border border-gray-200 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: program.id * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="p-6" style={{ borderTop: `4px solid ${colors.primary}` }}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-medium text-gray-900" style={headingFont}>
                    {program.title}
                  </h3>
                  <span className="text-sm font-medium tracking-wide" style={{ color: colors.primary }}>
                    {program.duration}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>

                <div className="mb-4">
                  <span className="text-sm text-gray-500 tracking-wide">Level: </span>
                  <span className="text-sm font-medium" style={{ color: colors.primary }}>
                    {program.level}
                  </span>
                </div>

                <div className="mb-6 border-t border-gray-200 pt-4">
                  <div className="flex items-center mb-1">
                    <span className="text-2xl font-light text-gray-900" style={headingFont}>
                      {program.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-3">{program.originalPrice}</span>
                    <span className="text-sm font-medium ml-3" style={{ color: "green" }}>
                      {program.discount}
                    </span>
                  </div>
                </div>

                <motion.button
                  onClick={() => handleProgramSelect(program)}
                  className="w-full text-white font-medium py-3 px-4 flex items-center justify-center group/btn"
                  style={{ backgroundColor: colors.primary, borderBottom: `4px solid ${colors.tertiary}` }}
                  whileHover={{ backgroundColor: colors.accent }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Enroll Now</span>
                  <ChevronRight size={20} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div 
          className="text-center p-10"
          style={{ backgroundColor: colors.tertiary, color: "white" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-light mb-4" style={headingFont}>Limited Seats Available</h3>
          <p className="mb-6 max-w-2xl mx-auto text-lg" style={{ color: colors.light }}>
            Our summer programs are limited to small batches to ensure personalized attention. 
            Secure your spot today and get ready for an immersive learning experience.
          </p>
          <motion.button
            onClick={() => handleProgramSelect(programs[0])}
            className="font-medium py-3 px-8"
            style={{ backgroundColor: "white", color: colors.primary, borderBottom: `4px solid ${colors.light}` }}
            whileHover={{ backgroundColor: colors.light }}
            whileTap={{ scale: 0.98 }}
          >
            Register Your Interest
          </motion.button>
        </motion.div>
      </div>

      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&family=Lora:wght@400;500;600&display=swap" rel="stylesheet" />
    </section>
  );
};

export default SkillDevelopmentSection;
