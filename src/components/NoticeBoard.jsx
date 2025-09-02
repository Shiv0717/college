"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Megaphone, 
  Award, 
  Calendar, 
  ArrowRight, 
  ChevronRight,
  Trophy,
  Star,
  ExternalLink,
  CalendarDays
} from "lucide-react";

const NewsEvents = () => {
  const [activeNews, setActiveNews] = useState(0);
  const [showAllAnnouncements, setShowAllAnnouncements] = useState(false);

  const news = [
    {
      img: "", // Recommended: use a visual from the Facebook post or college gallery
      title: "Welcome Address to B.Tech Batch of 2025–26",
      desc: "KEC Bhilai held an induction program to welcome the newest B.Tech cohort to college life.",
      date: "August 2025",
      category: "Orientation"
    },
    {
      img: "",
      title: "Visit by Dr. Prashant Mathur",
      desc: "Dr. Prashant Mathur, CEO of IIT Bhilai Innovation and Technology Park, visited KEC to foster academic collaboration.",
      date: "Late 2025",
      category: "Guest Visit"
    },
    {
      img: "",
      title: "Admissions Open for 2025 with Scholarships",
      desc: "KEC announced admissions for 2025 with 100% scholarship seats including aid up to ₹1 lakh.",
      date: "4 months ago (2025)",
      category: "Admission Notice"
    },
    {
      img: "https://scontent.fidr4-1.fna.fbcdn.net/v/t39.30808-6/533448186_1160483716099153_594768434130928822_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VpF2Xj8B4p0Q7kNvwFuRX79&_nc_oc=AdnGSnN9LUb96smq8z0l06vg6lcYn8gnXejyWPq46bxOxuvSl7VDoHCJMS4LwZGmPJczA7wYx_KGdpisqjMcyADO&_nc_zt=23&_nc_ht=scontent.fidr4-1.fna&_nc_gid=TXvd0vCF5qcc5qMP1f_VeQ&oh=00_AfW5DKCL7LQmpH0NLBreWkjUuNOCTHBo4LxNzjpwPObNYw&oe=68BC255E",
      title: "Celebrating 79th Independence Day",
      desc: "KEC Bhilai celebrated India’s 79th Independence Day with patriotic fervor and campus-wide events.",
      date: "August 15, 2025",
      category: "Celebration"
    }
  ];

  const announcements = [
    { text: "KCEET 2025 Phase I Results Declared", date: "Jun 10, 2025", important: true },
    { text: "KCEET 2025 Phase II Results Declared", date: "Jun 20, 2025", important: true },
    { text: "Admissions open for B.Tech 2025 batch", date: "May 1, 2025", important: true },
    { text: "Placement Drive – Infosys, Wipro, TCS, Capgemini", date: "Apr 15, 2025", important: true },
    { text: "Last date for scholarship applications", date: "Jun 5, 2025", important: false },
    { text: "Industrial visit to Bharat Electronics Limited", date: "Jun 12, 2025", important: false },
    { text: "Hostel fee payment deadline", date: "Jun 25, 2025", important: false },
    { text: "Summer vacation begins", date: "May 5, 2025", important: false },
  ];

  const awards = [
    "Best Engineering Institution in NCR for Innovation in Education (2024)",
    "Excellence in Placements Award by AICTE (2024)",
    "Top Engineering College for Industry Interface (2023)",
    "Green Campus Initiative Award (2023)",
  ];

  const displayedAnnouncements = showAllAnnouncements ? announcements : announcements.slice(0, 4);

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
        Latest <span className="text-blue-900">Updates</span>
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
            {/* Featured News */}
            <motion.div 
              key={activeNews}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={news[activeNews].img}
                  alt={news[activeNews].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {news[activeNews].category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-sm mb-2">{news[activeNews].date}</p>
                  <h4 className="text-xl font-bold text-white">{news[activeNews].title}</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{news[activeNews].desc}</p>
                <button className="flex items-center text-blue-600 font-medium group">
                  Read full story
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
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
                  className={`p-4 rounded-xl cursor-pointer transition-all ${activeNews === index ? 'bg-blue-50 border-l-4 border-blue-600' : 'bg-white hover:bg-gray-50'}`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden mr-4">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
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

        {/* Announcements & Awards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Announcements */}
          <div className="bg-blue-900 text-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-blue-700 p-3 rounded-xl mr-4">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Announcements</h3>
            </div>
            
            <ul className="space-y-4">
              <AnimatePresence>
                {displayedAnnouncements.map((announcement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-3 rounded-lg bg-blue-800/50 hover:bg-blue-800 transition-colors"
                  >
                    <div className="flex items-start">
                      <Calendar className="w-4 h-4 text-yellow-300 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">{announcement.text}</p>
                        <p className="text-xs text-blue-200 mt-1">{announcement.date}</p>
                      </div>
                      {announcement.important && (
                        <span className="ml-auto bg-yellow-500 text-blue-900 text-xs px-2 py-1 rounded-full font-bold">
                          Important
                        </span>
                      )}
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
            
            {announcements.length > 4 && (
              <button 
                onClick={() => setShowAllAnnouncements(!showAllAnnouncements)}
                className="mt-4 text-blue-200 hover:text-white text-sm font-medium flex items-center"
              >
                {showAllAnnouncements ? 'Show less' : `View all ${announcements.length} announcements`}
                <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${showAllAnnouncements ? 'rotate-90' : ''}`} />
              </button>
            )}
          </div>

          {/* Awards & Rankings */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-100 p-3 rounded-xl mr-4">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Awards & Rankings</h3>
            </div>
            
            <div className="mb-6 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
              <p className="text-sm text-gray-700">
                Krishna Engineering College awarded <span className="font-semibold">"Best Engineering Institution"</span> in 
                NCR for Innovation in Education (2024). Recognized for excellence in placements, industry tie-ups, and research contributions.
              </p>
            </div>
            
            <ul className="space-y-3">
              {awards.map((award, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start text-gray-700"
                >
                  <Trophy className="w-4 h-4 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm">{award}</span>
                </motion.li>
              ))}
            </ul>
            
            <button className="mt-6 flex items-center text-blue-600 text-sm font-medium group">
              View all achievements
              <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsEvents;