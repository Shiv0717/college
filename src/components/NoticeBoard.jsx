"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CalendarDays, Clock } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
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
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const NewsEvents = () => {
  const [activeNews, setActiveNews] = useState(0);

  const news = [
    {
      img: "https://www.kecbhilai.com/images/slider_img2.jpg",
      title: "Welcome Address to B.Tech Batch of 2025–26",
      desc: "KEC Bhilai held an induction program to welcome the newest B.Tech cohort to college life with orientation sessions and campus tours.",
      date: "August 2025",
      category: "Orientation",
    },
    {
      img: "https://www.kecbhilai.com/images/slider_img2.jpg",
      title: "Visit by Dr. Prashant Mathur",
      desc: "Dr. Prashant Mathur, CEO of IIT Bhilai Innovation and Technology Park, visited KEC to foster academic collaboration and research partnerships.",
      date: "Late 2025",
      category: "Guest Visit",
    },
    {
      img: "https://www.kecbhilai.com/images/slider_img2.jpg",
      title: "Admissions Open for 2025 with Scholarships",
      desc: "KEC announced admissions for 2025 with 100% scholarship seats including aid up to ₹1 lakh for deserving students.",
      date: "4 months ago (2025)",
      category: "Admission Notice",
    },
    {
      img: "https://www.kecbhilai.com/images/slider_img2.jpg",
      title: "Celebrating 79th Independence Day",
      desc: "KEC Bhilai celebrated India's 79th Independence Day with patriotic fervor and campus-wide events including flag hoisting and cultural programs.",
      date: "August 15, 2025",
      category: "Celebration",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div className="md:w-2/5">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-4 leading-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Explore Our{" "}
              <span className="text-blue-600">Latest Updates</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 text-base sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Stay updated with the latest happenings, achievements, and
              announcements at Krishna Engineering College.
            </motion.p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center sm:justify-start items-center mb-6 space-x-2">
          {news.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveNews(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeNews === index
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`View news ${index + 1}`}
            />
          ))}
        </div>

        {/* News Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured News */}
            <motion.div
              key={activeNews}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer relative group w-full"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <img
                  src={news[activeNews].img}
                  alt={news[activeNews].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-full shadow-md">
                    {news[activeNews].category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20 flex items-center text-white/90 text-xs sm:text-sm">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  {news[activeNews].date}
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20"
                  variants={textContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h4
                    className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-2"
                    variants={textItemVariants}
                  >
                    {news[activeNews].title}
                  </motion.h4>
                  <motion.p
                    className="text-sm sm:text-base text-gray-200 mb-3 line-clamp-2"
                    variants={textItemVariants}
                  >
                    {news[activeNews].desc}
                  </motion.p>
                  <motion.button
                    className="inline-flex items-center text-white font-medium group-hover:text-blue-300 transition-colors text-sm sm:text-base"
                    variants={textItemVariants}
                  >
                    Read full story
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* News List */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {news.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onClick={() => setActiveNews(index)}
                  className={`p-4 sm:p-5 rounded-xl cursor-pointer transition-all ${
                    activeNews === index
                      ? "bg-blue-50 border-l-4 border-blue-600 shadow-sm"
                      : "bg-white hover:bg-gray-50 shadow-sm"
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden mr-4 shadow-sm">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <Clock className="w-3 h-3 mr-1" />
                        {item.date}
                      </div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">
                        {item.title}
                      </h4>
                      <div className="flex items-center text-blue-600 text-xs font-medium mt-2">
                        Read more <ChevronRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsEvents;
