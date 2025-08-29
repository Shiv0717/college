import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Users, 
  BookOpen, 
  GraduationCap, 
  Briefcase,
  ArrowRight,
  Search,
  Filter
} from "lucide-react";

const DepartmentsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const departments = [
    {
      name: "Computer Science & Engineering",
      description:
        "Our CSE department focuses on cutting-edge technologies such as AI, ML, Data Science, and Software Development to prepare students for the future.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80",
      students: 520,
      courses: 18,
      placement: "95%",
      established: 2008
    },
    {
      name: "Civil Engineering",
      description:
        "The Civil Engineering department builds future-ready engineers with expertise in construction, structural design, and sustainable development.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      students: 380,
      courses: 15,
      placement: "88%",
      established: 2008
    },
    {
      name: "Mechanical Engineering",
      description:
        "Our Mechanical Engineering program emphasizes robotics, thermal engineering, and manufacturing processes for real-world applications.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      students: 450,
      courses: 16,
      placement: "92%",
      established: 2008
    },
    {
      name: "Electrical Engineering",
      description:
        "The Electrical Engineering department prepares students in power systems, electronics, and renewable energy innovations.",
      image: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      students: 400,
      courses: 14,
      placement: "90%",
      established: 2008
    },
    {
      name: "Electronics & Communication",
      description:
        "The ECE department focuses on communication systems, VLSI design, embedded systems, and signal processing technologies.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      students: 420,
      courses: 16,
      placement: "93%",
      established: 2010
    },
    {
      name: "Artificial Intelligence & Data Science",
      description:
        "Our newest department specializing in AI algorithms, machine learning, big data analytics, and intelligent systems design.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      students: 300,
      courses: 12,
      placement: "97%",
      established: 2020
    }
  ];

  const departmentFilters = ["all", "engineering", "technology", "sciences"];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Academic Departments
          </h1>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto">
            Explore our diverse range of engineering departments, each offering cutting-edge programs, 
            experienced faculty, and excellent placement opportunities.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-md mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg w-full md:w-auto">
              <Search size={18} className="text-blue-900" />
              <input
                type="text"
                placeholder="Search departments..."
                className="bg-transparent outline-none w-full text-blue-900 placeholder-blue-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 text-blue-900">
                <Filter size={18} />
                <span>Filter by:</span>
              </div>
              {departmentFilters.map((filter) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeFilter === filter ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-900 hover:bg-blue-200'}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Departments Grid */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group"
              whileHover={{ y: -5 }}
            >
              {/* Department Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="text-white font-medium flex items-center">
                    View Details <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>

              {/* Department Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {dept.name}
                </h2>
                <p className="text-blue-800 mb-4">{dept.description}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <Users size={16} className="text-blue-900 mr-2" />
                    <span className="text-sm text-blue-900">{dept.students} Students</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={16} className="text-blue-900 mr-2" />
                    <span className="text-sm text-blue-900">{dept.courses} Courses</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase size={16} className="text-blue-900 mr-2" />
                    <span className="text-sm text-blue-900">{dept.placement} Placement</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap size={16} className="text-blue-900 mr-2" />
                    <span className="text-sm text-blue-900">Est. {dept.established}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center justify-center">
                  Explore Department <ChevronRight size={16} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8 rounded-2xl shadow-lg mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Choose Your Department?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our academic advisors are here to help you select the perfect department based on your interests and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule Consultation
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DepartmentsPage;