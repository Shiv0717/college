"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Users, BookOpen } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const textContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Slide animations
const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const DepartmentsSection = () => {
  const [activeDept, setActiveDept] = useState(0);

  const departments = [
    {
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      title: "Computer Science & Engineering",
      desc: "Our CSE department offers cutting-edge programs in AI, Machine Learning, and Software Development with state-of-the-art laboratories and industry collaborations.",
      students: "480",
      courses: "12",
      iconImg: "https://cdn-icons-png.flaticon.com/512/2103/2103793.png",
      category: "Technology",
    },
    {
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      title: "Mechanical Engineering",
      desc: "The ME department focuses on robotics, automotive systems, and advanced manufacturing with hands-on training in our fully-equipped workshops.",
      students: "420",
      courses: "10",
      iconImg: "https://cdn-icons-png.flaticon.com/512/427/427735.png",
      category: "Innovation",
    },
    {
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      title: "Civil Engineering",
      desc: "Our Civil Engineering program emphasizes sustainable infrastructure, structural design, and urban planning with modern surveying equipment and software.",
      students: "380",
      courses: "9",
      iconImg: "https://cdn-icons-png.flaticon.com/512/684/684809.png",
      category: "Infrastructure",
    },
    {
      img: "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      title: "Electrical Engineering",
      desc: "The EE department offers specializations in power systems, electronics, and renewable energy with advanced laboratories and research opportunities.",
      students: "350",
      courses: "11",
      iconImg: "https://cdn-icons-png.flaticon.com/512/3565/3565418.png",
      category: "Energy",
    },
  ];

  const heading = "Explore Our Engineering Departments";

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-emerald-50 py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="lg:w-2/5">

          <motion.h3
      className="text-emerald-600 font-semibold uppercase tracking-wide text-sm mb-4"
      variants={textItemVariants}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      Excellence in Engineering Education
    </motion.h3>

    <motion.h2
      className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight text-gray-900"
      variants={textItemVariants}
      style={{ fontFamily: "'Dancing Script', cursive" }}
    >
      {heading}
    </motion.h2>

    {/* Subheading Added */}
   

    <motion.p
      className="mt-2 text-gray-600 text-base sm:text-lg"
      variants={textItemVariants}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      Discover our comprehensive engineering programs designed to shape
      the innovators and leaders of tomorrow.
    </motion.p>
  </div>
          {/* Navigation Dots - Mobile only */}
          <motion.div
            className="flex lg:hidden justify-center items-center space-x-2 mt-4"
            variants={textItemVariants}
          >
            {departments.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveDept(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeDept === index
                    ? "bg-emerald-700 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View department ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Departments Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Department */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideFromLeft}
            className="lg:col-span-2"
          >
            <motion.div
              key={activeDept}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer relative group w-full"
            >
              <div className="relative aspect-video md:aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src={departments[activeDept].img}
                  alt={departments[activeDept].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                {/* Category Tag */}
                <div className="absolute top-4 left-4 z-20 flex items-center">
                  <span className="px-3 py-1 bg-emerald-700 text-white text-xs sm:text-sm font-medium rounded-full shadow-md flex items-center">
                    <img
                      src={departments[activeDept].iconImg}
                      alt={departments[activeDept].category}
                      className="w-4 h-4 mr-2 object-contain"
                    />
                    <span style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {departments[activeDept].category}
                    </span>
                  </span>
                </div>

                {/* Student Count */}
                <div className="absolute top-4 right-4 z-20 flex items-center text-white/90 text-xs sm:text-sm bg-emerald-800/80 px-3 py-1 rounded-full">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {departments[activeDept].students} Students
                </div>

                {/* Text */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20"
                  variants={textContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h3
                    className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-2"
                    variants={textItemVariants}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {departments[activeDept].title}
                  </motion.h3>
                  <motion.p
                    className="text-sm sm:text-base text-gray-200 mb-4 line-clamp-2"
                    variants={textItemVariants}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {departments[activeDept].desc}
                  </motion.p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <motion.span
                      className="inline-flex items-center text-emerald-300 text-sm font-medium bg-emerald-900/30 px-3 py-1 rounded-full"
                      variants={textItemVariants}
                    >
                      <BookOpen className="w-4 h-4 mr-1" />
                      {departments[activeDept].courses} Courses
                    </motion.span>
                    <motion.button
                      className="inline-flex items-center text-white font-medium group-hover:text-emerald-300 transition-colors text-sm sm:text-base"
                      variants={textItemVariants}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Explore department
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Departments List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideFromRight}
            className="space-y-4"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onClick={() => setActiveDept(index)}
                  className={`p-4 sm:p-5 rounded-xl cursor-pointer transition-all ${
                    activeDept === index
                      ? "bg-emerald-50 border-l-4 border-emerald-700 shadow-sm"
                      : "bg-white hover:bg-gray-50 shadow-sm"
                  }`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden mr-3 sm:mr-4 shadow-sm flex items-center justify-center bg-white p-2">
                      <img
                        src={dept.iconImg}
                        alt={dept.category}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="flex items-center text-xs text-emerald-700 font-medium mb-1"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {dept.category}
                      </div>
                      <h4
                        className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {dept.title}
                      </h4>
                      <div
                        className="flex items-center text-emerald-700 text-xs font-medium mt-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        View details <ChevronRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
};

export default DepartmentsSection;
