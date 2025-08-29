import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  Target
} from "lucide-react";

const DepartmentDetails = () => {
  const { id } = useParams();
  const [expandedSection, setExpandedSection] = useState("mission");
  
  // Sample data - in a real app this would come from your data.js file
  const departments = [
    {
      id: "cse",
      name: "Computer Science & Engineering",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80",
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
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
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
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
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
      image: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
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
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="text-center p-10 bg-white rounded-2xl shadow-lg max-w-md">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Department Not Found</h2>
          <Link to="/departments" className="text-blue-600 hover:underline flex items-center justify-center">
            <ArrowLeft size={16} className="mr-2" /> Back to Departments
          </Link>
        </div>
      </div>
    );
  }

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Navigation */}
     

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={department.image} 
              alt={department.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-8">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{department.name}</h1>
                <p className="text-blue-100 text-lg max-w-3xl">{department.description}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-blue-100">
            <Users className="mx-auto text-blue-900 mb-3" size={32} />
            <div className="text-2xl font-bold text-blue-900">{department.students}+</div>
            <div className="text-blue-700">Students</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-blue-100">
            <GraduationCap className="mx-auto text-blue-900 mb-3" size={32} />
            <div className="text-2xl font-bold text-blue-900">{department.established}</div>
            <div className="text-blue-700">Established</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-blue-100">
            <Briefcase className="mx-auto text-blue-900 mb-3" size={32} />
            <div className="text-2xl font-bold text-blue-900">{department.placement}</div>
            <div className="text-blue-700">Placement Rate</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-blue-100">
            <BookOpen className="mx-auto text-blue-900 mb-3" size={32} />
            <div className="text-2xl font-bold text-blue-900">{department.programs.length}</div>
            <div className="text-blue-700">Programs</div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Vision Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-blue-100"
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                <Award className="mr-3 text-blue-700" size={24} /> Vision
              </h2>
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
                <h2 className="text-2xl font-bold text-blue-900 flex items-center">
                  <Target className="mr-3 text-blue-700" size={24} /> Mission
                </h2>
                {expandedSection === "mission" ? <ChevronUp /> : <ChevronDown />}
              </div>
              
              {expandedSection === "mission" && (
                <motion.ul 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 space-y-2 text-blue-800"
                >
                  {department.mission.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </motion.div>

            {/* Programs Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-blue-100"
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                <BookOpen className="mr-3 text-blue-700" size={24} /> Academic Programs
              </h2>
              <div className="grid gap-4">
                {department.programs.map((program, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900">{program.name}</h3>
                    <div className="flex justify-between text-sm text-blue-700 mt-2">
                      <span>{program.duration}</span>
                      <span>{program.seats} Seats</span>
                    </div>
                  </div>
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
                  <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                    <Building className="mr-3 text-blue-700" size={24} /> Facilities
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {department.facilities.map((facility, index) => (
                      <div key={index} className="bg-blue-50 px-3 py-2 rounded-lg text-blue-800">
                        {facility}
                      </div>
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
                  <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                    <Award className="mr-3 text-blue-700" size={24} /> Achievements
                  </h2>
                  <ul className="space-y-2 text-blue-800">
                    {department.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
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
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Faculty</h3>
              {department.faculty ? (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Total Faculty:</span>
                    <span className="font-semibold text-blue-900">{department.faculty.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">PhD Holders:</span>
                    <span className="font-semibold text-blue-900">{department.faculty.phd}</span>
                  </div>
                  <div className="flex justify-between">
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
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone size={18} className="text-blue-700 mr-3" />
                  <span className="text-blue-800">{department.contact?.phone || "+91-XXXXX-XXXXX"}</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="text-blue-700 mr-3" />
                  <span className="text-blue-800">{department.contact?.email || "department@college.edu"}</span>
                </div>
                <div className="flex items-center">
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
              className="text-center"
            >
              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                Apply Now <ExternalLink size={18} className="ml-2" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetails;