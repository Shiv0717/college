import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  ChevronDown, 
  Filter,
  Search,
  GraduationCap,
  Code,
  Cpu,
  Building,
  Zap
} from 'lucide-react';

const CoursesOffered = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCourse, setExpandedCourse] = useState(null);

  const engineeringDepartments = [
    {
      id: 'cse',
      name: 'Computer Science & Engineering',
      icon: <Code className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'ece',
      name: 'Electronics & Communication Engineering',
      icon: <Cpu className="w-6 h-6" />,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: 'mech',
      name: 'Mechanical Engineering',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-red-100 text-red-800'
    },
    {
      id: 'civil',
      name: 'Civil Engineering',
      icon: <Building className="w-6 h-6" />,
      color: 'bg-green-100 text-green-800'
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Advanced Algorithms",
      code: "CSE501",
      department: "cse",
      credits: 4,
      duration: "15 weeks",
      seats: 30,
      description: "Study of advanced algorithm design techniques and analysis. Topics include dynamic programming, greedy algorithms, graph algorithms, and NP-completeness.",
      outcomes: ["Design efficient algorithms", "Analyze algorithm complexity", "Solve complex computational problems"],
      prerequisites: ["Data Structures", "Discrete Mathematics"]
    },
    {
      id: 2,
      title: "Digital Signal Processing",
      code: "ECE502",
      department: "ece",
      credits: 3,
      duration: "14 weeks",
      seats: 25,
      description: "Theory and application of digital signal processing techniques. Covers discrete-time signals, Z-transform, filter design, and Fourier analysis.",
      outcomes: ["Design digital filters", "Analyze signal systems", "Implement DSP algorithms"],
      prerequisites: ["Signals and Systems", "Engineering Mathematics"]
    },
    {
      id: 3,
      title: "Thermodynamics",
      code: "MECH503",
      department: "mech",
      credits: 4,
      duration: "16 weeks",
      seats: 35,
      description: "Fundamental principles of energy conversion and transfer. Study of laws of thermodynamics and their engineering applications.",
      outcomes: ["Analyze thermal systems", "Apply thermodynamic principles", "Design energy systems"],
      prerequisites: ["Physics", "Calculus"]
    },
    {
      id: 4,
      title: "Structural Analysis",
      code: "CIVIL504",
      department: "civil",
      credits: 3,
      duration: "15 weeks",
      seats: 28,
      description: "Analysis of determinate and indeterminate structures. Methods include slope-deflection, moment distribution, and matrix methods.",
      outcomes: ["Analyze structural systems", "Design structural elements", "Use analysis software"],
      prerequisites: ["Mechanics of Materials", "Statics"]
    },
    {
      id: 5,
      title: "Machine Learning",
      code: "CSE505",
      department: "cse",
      credits: 4,
      duration: "14 weeks",
      seats: 32,
      description: "Introduction to machine learning algorithms and applications. Topics include supervised learning, unsupervised learning, and neural networks.",
      outcomes: ["Implement ML algorithms", "Apply ML techniques", "Evaluate model performance"],
      prerequisites: ["Probability", "Linear Algebra", "Programming"]
    },
    {
      id: 6,
      title: "VLSI Design",
      code: "ECE506",
      department: "ece",
      credits: 3,
      duration: "15 weeks",
      seats: 24,
      description: "Design and implementation of Very Large Scale Integration circuits. Covers CMOS technology, circuit design, and layout techniques.",
      outcomes: ["Design digital circuits", "Use VLSI design tools", "Understand fabrication processes"],
      prerequisites: ["Digital Electronics", "Semiconductor Physics"]
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesDepartment = activeFilter === 'all' || course.department === activeFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const toggleCourseExpand = (courseId) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(courseId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Engineering Courses Offered
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive engineering programs designed to prepare students for successful careers in technology and innovation.
          </p>
        </motion.div>

        {/* Filters and Search */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center">
              <Filter className="w-5 h-5 text-gray-500 mr-2" />
              <span className="font-medium text-gray-700">Filter by Department:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                All Courses
              </button>
              {engineeringDepartments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveFilter(dept.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${activeFilter === dept.id ? dept.color : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  {dept.icon}
                  {dept.name}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.div> */}

        {/* Courses Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCourses.map((course) => {
              const department = engineeringDepartments.find(dept => dept.id === course.department);
              
              return (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className={`p-4 ${department.color} flex items-center justify-between`}>
                    <div className="flex items-center">
                      {department.icon}
                      <span className="ml-2 font-medium">{department.name}</span>
                    </div>
                    <span className="text-sm font-semibold">{course.code}</span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-600">{course.credits} Credits</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-600">{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-600">{course.seats} Seats</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => toggleCourseExpand(course.id)}
                      className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {expandedCourse === course.id ? 'Show Less' : 'View Details'}
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${expandedCourse === course.id ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {expandedCourse === course.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-200"
                        >
                          <h4 className="font-medium text-gray-900 mb-2">Learning Outcomes:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                            {course.outcomes.map((outcome, index) => (
                              <li key={index}>{outcome}</li>
                            ))}
                          </ul>
                          
                          <h4 className="font-medium text-gray-900 mb-2">Prerequisites:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-600">
                            {course.prerequisites.map((prereq, index) => (
                              <li key={index}>{prereq}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-700">No courses found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CoursesOffered;