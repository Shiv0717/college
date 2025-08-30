import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Users, 
  BookOpen, 
  Briefcase, 
  GraduationCap,
  Calendar,
  Award,
  BarChart3,
  Building,
  Phone,
  Mail,
  Globe,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Target,
  Star,
  Clock,
  Bookmark,
  MapPin,
  Heart
} from "lucide-react";

const DepartmentDetails = () => {
  const { id } = useParams();
  const [expandedSection, setExpandedSection] = useState("mission");
  
  // Sample data - in a real app this would come from your data.js file
  const departments = [
    {
      id: "cse",
      name: "Computer Science & Engineering",
      shortName: "CSE",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      description: "The Department of Computer Science & Engineering offers programs with a strong foundation in algorithms, programming, AI, data science, and modern software development.",
      vision: "To be a center of excellence in computing and research, producing globally competent professionals who can innovate and lead in the ever-evolving field of technology.",
      mission: [
        "Provide quality education in computer science with industry-relevant curriculum",
        "Promote research and innovation in emerging technologies like AI, ML, and IoT",
        "Prepare students for global IT challenges through industry collaborations",
        "Foster ethical practices and lifelong learning among students"
      ],
      programs: [
        { name: "B.Tech in CSE", duration: "4 Years", seats: 120 },
        { name: "M.Tech in CSE", duration: "2 Years", seats: 30 },
        { name: "B.Tech in AI & ML", duration: "4 Years", seats: 60 },
        { name: "Ph.D in Computer Science", duration: "3-5 Years", seats: 15 }
      ],
      facilities: [
        "Advanced Computing Lab",
        "AI & Robotics Lab",
        "Data Science Center",
        "IoT Innovation Lab",
        "High-Performance Computing Cluster"
      ],
      achievements: [
        "100% placement for last 3 years",
        "₹42 LPA highest package (Microsoft)",
        "15+ research papers published in 2023",
        "Winners of National Hackathon 2023"
      ],
      faculty: {
        total: 25,
        phd: 18,
        experience: "12+ years average"
      },
      contact: {
        email: "cse@krishnacollege.edu",
        phone: "+91-1234567890",
        website: "cse.krishnacollege.edu"
      },
      established: 2008,
      students: 450,
      placement: "98%"
    },
    {
      id: "civil",
      name: "Civil Engineering",
      shortName: "CE",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      description: "Civil Engineering focuses on infrastructure development, sustainable design, and construction technologies.",
      vision: "To produce skilled civil engineers for modern infrastructure development with sustainable practices.",
      mission: [
        "Develop sustainable and eco-friendly solutions",
        "Encourage practical knowledge with industry exposure",
        "Foster innovation in construction techniques"
      ],
      programs: [
        { name: "B.Tech in Civil Engineering", duration: "4 Years", seats: 90 },
        { name: "M.Tech in Structural Engineering", duration: "2 Years", seats: 25 }
      ],
      established: 2008,
      students: 280,
      placement: "92%"
    },
    {
      id: "mech",
      name: "Mechanical Engineering",
      shortName: "ME",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      description: "Mechanical Engineering covers thermal sciences, robotics, design, and manufacturing technologies.",
      vision: "To create leaders in mechanical and industrial design.",
      mission: [
        "Deliver strong fundamentals in design and automation",
        "Collaborate with industries for real-world projects",
        "Encourage innovation in renewable energy systems"
      ],
      programs: [
        { name: "B.Tech in Mechanical Engineering", duration: "4 Years", seats: 120 },
        { name: "M.Tech in Thermal Engineering", duration: "2 Years", seats: 20 }
      ],
      established: 2008,
      students: 380,
      placement: "94%"
    },
    {
      id: "eee",
      name: "Electrical Engineering",
      shortName: "EEE",
      image: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      description: "Electrical Engineering emphasizes power systems, electronics, renewable energy, and automation.",
      vision: "To contribute to innovations in energy and automation.",
      mission: [
        "Provide strong knowledge in electronics & power systems",
        "Promote renewable energy research",
        "Equip students with industrial automation skills"
      ],
      programs: [
        { name: "B.Tech in Electrical Engineering", duration: "4 Years", seats: 90 },
        { name: "M.Tech in Power Systems", duration: "2 Years", seats: 18 }
      ],
      established: 2008,
      students: 320,
      placement: "91%"
    }
  ];

  const department = departments.find((dept) => dept.id === id);

  if (!department) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-10 bg-white rounded-2xl shadow-lg max-w-md border border-blue-100"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Department Not Found</h2>
          <Link 
            to="/departments" 
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Departments
          </Link>
        </motion.div>
      </div>
    );
  }

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Navigation */}
      

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src={department.image} 
              alt={department.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6 md:p-8">
              <div>
                <motion.h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {department.name}
                </motion.h1>
                <motion.p 
                  className="text-blue-100 text-lg max-w-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {department.description}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {[
            { icon: Users, value: `${department.students}+`, label: "Students", color: "from-blue-500 to-blue-600" },
            { icon: GraduationCap, value: department.established, label: "Established", color: "from-green-500 to-green-600" },
            { icon: Briefcase, value: department.placement, label: "Placement Rate", color: "from-purple-500 to-purple-600" },
            { icon: BookOpen, value: department.programs.length, label: "Programs", color: "from-orange-500 to-orange-600" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-4 md:p-6 rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-3 shadow-md`}>
                <stat.icon size={24} />
              </div>
              <div className="text-xl md:text-2xl font-bold text-blue-900">{stat.value}</div>
              <div className="text-blue-700 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Vision Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-blue-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <Award className="text-blue-700" size={24} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-blue-900">Vision</h2>
              </div>
              <p className="text-blue-800 leading-relaxed">{department.vision}</p>
            </motion.div>

            {/* Mission Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-blue-100"
            >
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("mission")}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <Target className="text-blue-700" size={24} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-blue-900">Mission</h2>
                </div>
                {expandedSection === "mission" ? <ChevronUp className="text-blue-700" /> : <ChevronDown className="text-blue-700" />}
              </div>
              
              <AnimatePresence>
                {expandedSection === "mission" && (
                  <motion.ul 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-3 text-blue-800 overflow-hidden"
                  >
                    {department.mission.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start bg-blue-50 p-3 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Programs Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-blue-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <BookOpen className="text-blue-700" size={24} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-blue-900">Academic Programs</h2>
              </div>
              <div className="grid gap-4">
                {department.programs.map((program, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <h3 className="font-semibold text-blue-900">{program.name}</h3>
                    <div className="flex justify-between text-sm text-blue-700 mt-2">
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" /> {program.duration}
                      </span>
                      <span className="flex items-center">
                        <Users size={14} className="mr-1" /> {program.seats} Seats
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional sections for CSE department */}
            {department.id === "cse" && (
              <>
                {/* Facilities Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white p-6 rounded-2xl shadow-md border border-blue-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <Building className="text-blue-700" size={24} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-blue-900">Facilities</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {department.facilities.map((facility, index) => (
                      <motion.div 
                        key={index} 
                        className="bg-blue-50 px-4 py-3 rounded-lg text-blue-800 hover:bg-blue-100 transition-colors flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        <Star size={14} className="text-blue-600 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">{facility}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Achievements Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white p-6 rounded-2xl shadow-md border border-blue-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <Award className="text-blue-700" size={24} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-blue-900">Achievements</h2>
                  </div>
                  <ul className="space-y-3">
                    {department.achievements.map((achievement, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start bg-blue-50 p-3 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Faculty Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-blue-100"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <Users className="mr-2 text-blue-700" size={20} /> Faculty
              </h3>
              {department.faculty ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-700">Total Faculty:</span>
                    <span className="font-semibold text-blue-900">{department.faculty.total}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-700">PhD Holders:</span>
                    <span className="font-semibold text-blue-900">{department.faculty.phd}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-700">Average Experience:</span>
                    <span className="font-semibold text-blue-900">{department.faculty.experience}</span>
                  </div>
                </div>
              ) : (
                <p className="text-blue-700">Faculty information coming soon</p>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-blue-100"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <MapPin className="mr-2 text-blue-700" size={20} /> Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <Phone size={18} className="text-blue-700 mr-3" />
                  <span className="text-blue-800">{department.contact?.phone || "+91-XXXXX-XXXXX"}</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <Mail size={18} className="text-blue-700 mr-3" />
                  <span className="text-blue-800">{department.contact?.email || "department@college.edu"}</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <Globe size={18} className="text-blue-700 mr-3" />
                  <span className="text-blue-800">{department.contact?.website || "department.college.edu"}</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Now <ExternalLink size={18} className="ml-2" />
              </motion.button>
              
              <motion.button 
                className="w-full mt-4 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Heart size={18} className="mr-2" /> Save Department
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetails;