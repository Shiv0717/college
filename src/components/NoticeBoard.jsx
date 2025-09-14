"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CalendarDays, Clock } from "lucide-react";

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
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="md:w-2/5 mb-8 md:mb-0">
            <motion.h2
              className="text-4xl font-bold mb-6 leading-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Explore Our <span className="text-blue-600">Latest Updates</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-8 text-lg"
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

        {/* News Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured News with overlay text */}
            <motion.div
              key={activeNews}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer relative group"
            >
              <div className="relative h-full overflow-hidden rounded-2xl">
                <img
                  src={news[activeNews].img}
                  alt={news[activeNews].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>

                {/* Category pill */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full shadow-md">
                    {news[activeNews].category}
                  </span>
                </div>

                {/* Date */}
                <div className="absolute top-4 right-4 z-20 flex items-center text-white/90 text-sm">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  {news[activeNews].date}
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h4 className="text-2xl font-bold text-white leading-tight mb-2">
                    {news[activeNews].title}
                  </h4>
                  <p className="text-gray-200 mb-4 line-clamp-2">
                    {news[activeNews].desc}
                  </p>

                  <button className="inline-flex items-center text-white font-medium group-hover:text-blue-300 transition-colors">
                    Read full story
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* News List */}
            <div className="space-y-6">
              {news.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveNews(index)}
                  className={`p-5 rounded-xl cursor-pointer transition-all ${
                    activeNews === index
                      ? "bg-blue-50 border-l-4 border-blue-600 shadow-sm"
                      : "bg-white hover:bg-gray-50 shadow-sm"
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden mr-4 shadow-sm">
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsEvents;
