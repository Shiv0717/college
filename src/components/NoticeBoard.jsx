"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

const announcements = [
  {
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "Payment for Summer 2024 (Social Study)",
    date: "Aug 22, 2024 to Oct 11, 2024",
    description:
      "Payment schedule for Summer 2024 Social Study courses. Please ensure timely payment to avoid any delays.",
  },
  {
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "Orientation for New Students",
    date: "Sep 01, 2024",
    description:
      "Orientation program for new students to introduce them to college life, faculty, and campus facilities.",
  },
  {
    img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "Midterm Exams Schedule",
    date: "Oct 15, 2024 to Oct 20, 2024",
    description:
      "Midterm exams schedule for all courses. Please check your respective course exam dates.",
  },
];

const initialFeatured = announcements[0]; // Start with first card as FEATURED

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function AcademicDatesSection() {
  const [featured, setFeatured] = useState(initialFeatured);

  return (
    <div className="bg-white py-16" style={bodyFont}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.p
            className="text-blue-800 uppercase tracking-widest text-xs font-medium mb-4"
            variants={fadeInUp}
          >
            Academic Dates
          </motion.p>

          <motion.h2 
            className="text-4xl md:text-5xl font-light text-gray-900 mb-4" 
            style={headingFont}
            variants={fadeInUp}
          >
            Announcements & News
          </motion.h2>

          <motion.div 
            className="w-24 h-0.5 bg-blue-800/30 mx-auto"
            variants={fadeInUp}
          />
        </motion.div>

        {/* Featured */}
       
          <motion.div
            key={featured.title}
            className="mb-16 border-t-4 border-blue-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 relative">
                {/* Number */}
                <motion.div 
                  className="absolute top-6 left-6 z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-5xl font-bold text-white bg-blue-800 px-4 py-3">
                    01
                  </span>
                </motion.div>
                <motion.img
                  src={featured.img}
                  alt={featured.title}
                  className="w-full h-64 md:h-96 object-cover"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>
              <motion.div
                className="md:w-1/3 p-8 border-l border-r border-b border-gray-200"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <span className="bg-blue-800 text-white text-xs px-4 py-2 tracking-widest uppercase">
                    Featured
                  </span>
                  <span className="ml-3 text-sm text-blue-800 font-medium">
                    Active
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4" style={headingFont}>
                  {featured.title}
                </h3>
                <p className="text-blue-800 mb-4 text-sm tracking-wide">{featured.date}</p>
                <p className="text-gray-700 leading-relaxed">{featured.description}</p>
              </motion.div>
            </div>
          </motion.div>
        

        {/* Regular Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {announcements.map((item, idx) => (
            <div
              key={item.title}
              className="border border-gray-200 relative cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => setFeatured(item)}
            >
              {/* Number */}
              <div 
                className="absolute top-6 left-6 z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-4xl font-bold text-white bg-blue-800 px-3 py-2">
                  {(idx + 2).toString().padStart(2, "0")}
                </span>
              </div>
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-800 transition-colors" style={headingFont}>
                  {item.title}
                </h3>
                <p className="text-blue-800 text-sm tracking-wide">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </div>
  );
}