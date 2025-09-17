"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const announcements = [
  {
    img: "https://picsum.photos/300/200?random=1",
    title: "Payment for Summer 2024 (Social Study)",
    date: "Aug 22, 2024 to Oct 11, 2024",
    description:
      "Payment schedule for Summer 2024 Social Study courses. Please ensure timely payment to avoid any delays.",
  },
  {
    img: "https://picsum.photos/300/200?random=2",
    title: "Orientation for New Students",
    date: "Sep 01, 2024",
    description:
      "Orientation program for new students to introduce them to college life, faculty, and campus facilities.",
  },
  {
    img: "https://picsum.photos/300/200?random=3",
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

export default function AcademicDatesSection() {
  const [featured, setFeatured] = useState(initialFeatured);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-blue-700 uppercase tracking-wider text-sm font-semibold mb-3"
          >
            Academic Dates
          </motion.p>

          <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Announcements & news feeds
          </motion.h2>

          <div className="w-20 h-1 bg-blue-600 mt-4"></div>
        </motion.div>

        {/* Featured */}
        <AnimatePresence>
          <motion.div
            key={featured.title}
            className="mb-12 border-t-4 border-blue-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 relative">
                {/* Number */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-4xl font-bold text-white bg-blue-600 bg-opacity-90 px-4 py-2 rounded-lg">
                    01
                  </span>
                </div>
                <img
                  src={featured.img}
                  alt={featured.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <motion.div
                className="md:w-1/3 p-6 border-l border-r border-b border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center mb-3">
                  <span className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full font-bold">
                    FEATURED
                  </span>
                  <span className="ml-3 text-sm text-blue-600 font-medium">
                    Active
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  {featured.title}
                </h3>
                <p className="text-gray-600 mb-4">{featured.date}</p>
                <p className="text-gray-700">{featured.description}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Regular Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {announcements.map((item, idx) => (
            <motion.div
              key={item.title}
              className="border border-gray-200 relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              onClick={() => setFeatured(item)}
            >
              {/* Number */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-4xl font-bold text-white bg-blue-600 bg-opacity-90 px-3 py-1 rounded-lg">
                  {(idx + 2).toString().padStart(2, "0")}
                </span>
              </div>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
