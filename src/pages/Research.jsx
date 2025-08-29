import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 

  Microscope, 
  BookOpen, 
  Users, 
  Award,
  Calendar,
  BarChart3,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  Filter
} from 'lucide-react';

const Research = () => {
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Animation variants
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

  // Research data
  const researchAreas = [
    {
      id: 1,
      title: "Artificial Intelligence & Machine Learning",
      description: "Advanced research in neural networks, deep learning, and AI applications",
      icon: <BarChart3 size={32} />,
      projects: 12,
      publications: 45
    },
    {
      id: 2,
      title: "Renewable Energy Systems",
      description: "Developing sustainable energy solutions and storage technologies",
      icon: <BarChart3 size={32} />,
      projects: 8,
      publications: 32
    },
    {
      id: 3,
      title: "Biotechnology & Genetic Engineering",
      description: "Cutting-edge research in genomics, proteomics and medical biotechnology",
      icon: <Microscope size={32} />,
      projects: 10,
      publications: 38
    },
    {
      id: 4,
      title: "Nanotechnology & Materials Science",
      description: "Design and synthesis of novel nanomaterials for various applications",
      icon: <Award size={32} />,
      projects: 7,
      publications: 29
    },
    {
      id: 5,
      title: "Data Science & Big Data Analytics",
      description: "Research on data mining, pattern recognition, and predictive analytics",
      icon: <BookOpen size={32} />,
      projects: 9,
      publications: 41
    },
    {
      id: 6,
      title: "Internet of Things & Cyber-Physical Systems",
      description: "Developing smart connected systems for industrial and domestic use",
      icon: <Users size={32} />,
      projects: 11,
      publications: 36
    }
  ];

  const researchProjects = [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnostics",
      department: "Computer Science",
      funding: "₹42,00,000",
      duration: "2023-2025",
      status: "Ongoing",
      description: "Developing machine learning algorithms for early detection of diseases from medical imaging data.",
      team: ["Dr. Rajesh Kumar", "Dr. Priya Sharma", "5 Research Scholars"],
      outcomes: "3 Publications, 1 Patent Filed"
    },
    {
      id: 2,
      title: "Solar Energy Harvesting using Nanomaterials",
      department: "Physics",
      funding: "₹35,00,000",
      duration: "2022-2024",
      status: "Ongoing",
      description: "Designing and testing novel nanomaterials for improved efficiency in solar energy conversion.",
      team: ["Dr. S. Mehta", "Dr. A. Singh", "4 Research Scholars"],
      outcomes: "2 Publications, Prototype Developed"
    },
    {
      id: 3,
      title: "Waste Water Treatment using Microbial Fuel Cells",
      department: "Biotechnology",
      funding: "₹28,00,000",
      duration: "2021-2023",
      status: "Completed",
      description: "Developing cost-effective microbial fuel cells for simultaneous wastewater treatment and energy generation.",
      team: ["Dr. N. Patel", "Dr. K. Reddy", "6 Research Scholars"],
      outcomes: "5 Publications, Technology Transferred to Industry"
    },
    {
      id: 4,
      title: "Blockchain-based Secure Voting System",
      department: "Computer Science",
      funding: "₹19,00,000",
      duration: "2023-2024",
      status: "Ongoing",
      description: "Creating a transparent, secure, and tamper-proof digital voting system using blockchain technology.",
      team: ["Dr. M. Gupta", "3 Research Scholars"],
      outcomes: "2 Publications, Prototype Developed"
    },
    {
      id: 5,
      title: "Development of Biodegradable Polymers",
      department: "Chemistry",
      funding: "₹31,00,000",
      duration: "2022-2024",
      status: "Ongoing",
      description: "Synthesizing environmentally friendly biodegradable polymers to replace conventional plastics.",
      team: ["Dr. R. Malhotra", "Dr. P. Chaturvedi", "4 Research Scholars"],
      outcomes: "3 Publications, 2 Patents Filed"
    },
    {
      id: 6,
      title: "IoT-based Smart Agriculture System",
      department: "Electronics",
      funding: "₹24,00,000",
      duration: "2020-2023",
      status: "Completed",
      description: "Developing an integrated system for precision agriculture using IoT sensors and data analytics.",
      team: ["Dr. V. Sharma", "Dr. S. Joshi", "5 Research Scholars"],
      outcomes: "4 Publications, Commercial Product Launched"
    }
  ];

  const departments = ["all", "Computer Science", "Physics", "Biotechnology", "Chemistry", "Electronics"];

  const filteredProjects = researchProjects.filter(project => {
    const matchesDepartment = activeDepartment === 'all' || project.department === activeDepartment;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Research & Innovation at Krishna College
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Advancing knowledge through cutting-edge research, innovation, and collaboration
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition-colors"
          >
            Explore Research Opportunities
          </motion.button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-900"
          >
            Research Excellence
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-blue-50 rounded-xl shadow-md"
            >
              <div className="text-4xl font-bold text-blue-900 mb-2">56+</div>
              <div className="text-gray-700">Ongoing Research Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-blue-50 rounded-xl shadow-md"
            >
              <div className="text-4xl font-bold text-blue-900 mb-2">₹1Cr+</div>
              <div className="text-gray-700">Research Funding</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 bg-blue-50 rounded-xl shadow-md"
            >
              <div className="text-4xl font-bold text-blue-900 mb-2">225+</div>
              <div className="text-gray-700">Research Publications</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 bg-blue-50 rounded-xl shadow-md"
            >
              <div className="text-4xl font-bold text-blue-900 mb-2">18</div>
              <div className="text-gray-700">Patents Filed</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-900"
          >
            Key Research Areas
          </motion.h2>
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.id}
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-blue-100"
              >
                <div className="text-blue-900 mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{area.projects} Projects</span>
                  <span>{area.publications} Publications</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8 text-blue-900"
          >
            Featured Research Projects
          </motion.h2>
          
          {/* Filters and Search */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-4 mb-8 shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 w-full md:w-auto">
                <Search size={18} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="bg-transparent outline-none w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <Filter size={18} />
                  <span>Filter by Department:</span>
                </div>
                {departments.map((dept) => (
                  <motion.button
                    key={dept}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeDepartment === dept ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    onClick={() => setActiveDepartment(dept)}
                  >
                    {dept === 'all' ? 'All Departments' : dept}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects List */}
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-500"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                          {project.department}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      
                      {expandedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 text-sm text-gray-700 space-y-2"
                        >
                          <p><span className="font-medium">Funding:</span> {project.funding}</p>
                          <p><span className="font-medium">Duration:</span> {project.duration}</p>
                          <p><span className="font-medium">Research Team:</span> {project.team.join(', ')}</p>
                          <p><span className="font-medium">Outcomes:</span> {project.outcomes}</p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-gray-500">
                      Funding: {project.funding} • {project.duration}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-600 font-medium flex items-center gap-1"
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      >
                        {expandedProject === project.id ? (
                          <>
                            Show Less <ChevronUp size={16} />
                          </>
                        ) : (
                          <>
                            View Details <ChevronDown size={16} />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Research Facilities & Centers
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Advanced Computing Lab",
                description: "Equipped with high-performance computing clusters for complex simulations"
              },
              {
                name: "Nano Research Center",
                description: "State-of-the-art facilities for nanomaterials synthesis and characterization"
              },
              {
                name: "Biotechnology Research Center",
                description: "Modern labs for genetic engineering and bioprocessing research"
              },
              {
                name: "Renewable Energy Lab",
                description: "Testing facilities for solar, wind and other renewable energy systems"
              },
              {
                name: "Data Science Center",
                description: "Advanced tools for big data analytics and machine learning research"
              },
              {
                name: "Electronics Prototyping Lab",
                description: "Facilities for IoT and embedded systems development"
              }
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-3">{facility.name}</h3>
                <p className="text-blue-100">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-blue-900"
          >
            Join Our Research Community
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Explore research opportunities, collaborate with our faculty, and contribute to cutting-edge innovation
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-800 transition-colors"
            >
              Apply for Research Programs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-lg border border-blue-900 hover:bg-blue-50 transition-colors"
            >
              View Research Publications
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;