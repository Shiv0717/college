"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight,
  CalendarDays
} from "lucide-react";

const NewsEvents = () => {
  const [activeNews, setActiveNews] = useState(0);

  const news = [
    {
      img: "https://www.kecbhilai.com/images/slider_img2.jpg", // Use image or leave empty if none
      title: "Welcome Address to B.Tech Batch of 2025–26",
      desc: "KEC Bhilai held an induction program to welcome the newest B.Tech cohort to college life.",
      date: "August 2025",
      category: "Orientation"
    },
    {
      img: "https://www.kecbhilai.com/images/slider_img2.jpg",
      title: "Visit by Dr. Prashant Mathur",
      desc: "Dr. Prashant Mathur, CEO of IIT Bhilai Innovation and Technology Park, visited KEC to foster academic collaboration.",
      date: "Late 2025",
      category: "Guest Visit"
    },
    {
      img: "https://www.kecbhilai.com/images/slider_img2.jpg",
      title: "Admissions Open for 2025 with Scholarships",
      desc: "KEC announced admissions for 2025 with 100% scholarship seats including aid up to ₹1 lakh.",
      date: "4 months ago (2025)",
      category: "Admission Notice"
    },
    {
      img: "https://www.kecbhilai.com/images/slider_img2.jpg",
      title: "Celebrating 79th Independence Day",
      desc: "KEC Bhilai celebrated India’s 79th Independence Day with patriotic fervor and campus-wide events.",
      date: "August 15, 2025",
      category: "Celebration"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Tagline pill */}
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
            <CalendarDays className="h-4 w-4 mr-2" />
            News & Events
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-blue-600">Updates</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and announcements at{" "}
            <span className="font-semibold text-blue-800">Krishna Engineering College</span>.
          </p>
        </motion.div>

        {/* News Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Latest News</h3>
            <div className="flex space-x-2">
              {news.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveNews(index)}
                  className={`w-3 h-3 rounded-full transition-all ${activeNews === index ? 'bg-blue-600 scale-110' : 'bg-gray-300'}`}
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
              className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl">
                <img
                  src={news[activeNews].img}
                  alt={news[activeNews].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Category pill */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-blue-600 bg-opacity-90 text-white text-sm font-medium rounded-full">
                    {news[activeNews].category}
                  </span>
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <p className="text-white text-sm mb-1">{news[activeNews].date}</p>
                  <h4 className="text-2xl font-bold text-white leading-tight">{news[activeNews].title}</h4>
                  <p className="text-gray-300 mt-2 line-clamp-3">{news[activeNews].desc}</p>

                  <button className="mt-4 flex items-center text-blue-400 font-medium group">
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
                  className={`p-4 rounded-xl cursor-pointer transition-all ${activeNews === index ? ' border-l-4 border-blue-600' : 'bg-white hover:bg-gray-50'}`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden mr-4">
                      {item.img ? (
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                          No Image
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{item.date}</p>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">{item.title}</h4>
                      <div className="flex items-center text-blue-600 text-xs font-medium">
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
