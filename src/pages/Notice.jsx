import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Megaphone, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ExternalLink,
  Filter,
  Search,
  BookOpen,
  GraduationCap,
  Building,
  Users
} from "lucide-react";

const Notice = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const noticeCategories = [
    { id: "all", name: "All Notices", icon: <Megaphone size={16} /> },
    { id: "academic", name: "Academic", icon: <BookOpen size={16} /> },
    { id: "placement", name: "Placements", icon: <GraduationCap size={16} /> },
    { id: "event", name: "Events", icon: <Calendar size={16} /> },
    { id: "general", name: "General", icon: <Building size={16} /> },
    { id: "student", name: "Student", icon: <Users size={16} /> },
  ];

  const notices = [
    {
      id: 1,
      title: "Mid-Semester Examination Schedule Released",
      date: "August 20, 2025",
      time: "10:00 AM",
      category: "academic",
      content: "The schedule for mid-semester examinations has been published. All students are required to check their respective department notices for exact dates and timings. Examinations will commence from September 5, 2025.",
      important: true,
      link: "#",
    },
    {
      id: 2,
      title: "Placement Drive – Infosys & TCS Recruitment",
      date: "August 15, 2025",
      time: "9:30 AM",
      category: "placement",
      content: "Infosys and TCS will be conducting campus recruitment drives on September 10-12, 2025. Eligible students from CSE, IT, ECE, and EEE departments must register by August 30, 2025.",
      important: true,
      link: "#",
    },
    {
      id: 3,
      title: "Holiday Notice – Independence Day Celebration",
      date: "August 14, 2025",
      time: "11:00 AM",
      category: "general",
      content: "College will remain closed on August 15, 2025, on account of Independence Day. The celebration ceremony will be held on August 14, 2025, at the college grounds from 9:00 AM onwards.",
      important: false,
      link: "#",
    },
    {
      id: 4,
      title: "Workshop on AI & Machine Learning",
      date: "August 10, 2025",
      time: "2:00 PM",
      category: "event",
      content: "A two-day workshop on Artificial Intelligence and Machine Learning will be conducted by industry experts from TechMind Solutions on August 25-26, 2025. Limited seats available.",
      important: false,
      link: "#",
    },
    {
      id: 5,
      title: "Last Date for Scholarship Applications",
      date: "August 5, 2025",
      time: "4:00 PM",
      category: "student",
      content: "The last date for submitting scholarship applications for the academic year 2025-26 is August 20, 2025. Students are advised to submit their forms to the administration office before the deadline.",
      important: true,
      link: "#",
    },
    {
      id: 6,
      title: "Inter-College Sports Tournament",
      date: "July 28, 2025",
      time: "3:30 PM",
      category: "event",
      content: "Annual inter-college sports tournament will be held from September 15-20, 2025. Students interested in participating should register with the sports department by September 5, 2025.",
      important: false,
      link: "#",
    },
  ];

  const filteredNotices = notices.filter(notice => {
    const matchesCategory = activeFilter === "all" || notice.category === activeFilter;
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          notice.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-blue-900 flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Megaphone size={32} className="text-blue-700" />
          </motion.div>
          College Notice Board
        </h1>
        <p className="text-gray-600 mt-2">Stay updated with the latest announcements and events</p>
      </motion.div>

      {/* Filters and Search */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-4 shadow-md mb-6"
      >
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg w-full md:w-auto">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search notices..."
              className="bg-transparent outline-none w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {noticeCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Notices List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-5"
      >
        <AnimatePresence>
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <motion.div
                key={notice.id}
                variants={itemVariants}
                layout
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`bg-white rounded-xl shadow-md overflow-hidden border-l-4 ${notice.important ? 'border-red-500' : 'border-blue-500'}`}
              >
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${notice.important ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                          {noticeCategories.find(cat => cat.id === notice.category)?.name}
                        </span>
                        {notice.important && (
                          <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs font-medium">
                            Important
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {notice.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{notice.content}</p>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={notice.link}
                      className="ml-4 p-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{notice.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{notice.time}</span>
                      </div>
                    </div>
                    
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={notice.link}
                      className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
                    >
                      Read more <ArrowRight size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-white rounded-xl shadow-md"
            >
              <Megaphone size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-600">No notices found</h3>
              <p className="text-gray-500">Try changing your filters or search query</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Stats */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <div className="text-2xl font-bold text-blue-900">{notices.length}</div>
          <div className="text-sm text-gray-600">Total Notices</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <div className="text-2xl font-bold text-blue-900">{notices.filter(n => n.important).length}</div>
          <div className="text-sm text-gray-600">Important</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <div className="text-2xl font-bold text-blue-900">{notices.filter(n => n.category === 'placement').length}</div>
          <div className="text-sm text-gray-600">Placement Notices</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <div className="text-2xl font-bold text-blue-900">6</div>
          <div className="text-sm text-gray-600">Categories</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Notice;