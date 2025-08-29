"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, BookOpen, Search, Filter, Mail, Award, Calendar, ArrowRight } from "lucide-react";

const facultyMembers = [
  {
    name: "Dr. Anand Kumar Tripathi",
    role: "Chairman & Managing Director",
    dept: "Management",
    qualification: "Ph.D., MBA",
    experience: "22 years",
    specialization: "Strategic Management, Leadership",
    image: "https://www.shutterstock.com/image-photo/happy-young-indian-arabic-businessman-260nw-2187607295.jpg",
  },
  {
    name: "Prof. Ramesh Kumar",
    role: "Head of Department",
    dept: "Computer Science",
    qualification: "Ph.D., M.Tech",
    experience: "18 years",
    specialization: "Artificial Intelligence, Machine Learning",
    image: "https://source.unsplash.com/200x200/?professor,man",
  },
  {
    name: "Prof. Sneha Verma",
    role: "Associate Professor",
    dept: "Electronics",
    qualification: "M.Tech, B.Tech",
    experience: "12 years",
    specialization: "VLSI Design, Embedded Systems",
    image: "https://source.unsplash.com/200x200/?professor,woman",
  },
  {
    name: "Prof. Arjun Mehta",
    role: "Assistant Professor",
    dept: "Mechanical",
    qualification: "M.E., B.Tech",
    experience: "8 years",
    specialization: "Thermodynamics, Fluid Mechanics",
    image: "https://source.unsplash.com/200x200/?teacher,man",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Professor",
    dept: "Computer Science",
    qualification: "Ph.D., M.Tech",
    experience: "15 years",
    specialization: "Data Science, Big Data Analytics",
    image: "https://source.unsplash.com/200x200/?professor,woman,indian",
  },
  {
    name: "Prof. Vikram Singh",
    role: "Associate Professor",
    dept: "Civil Engineering",
    qualification: "M.Tech, B.Tech",
    experience: "14 years",
    specialization: "Structural Engineering, Concrete Technology",
    image: "https://source.unsplash.com/200x200/?professor,man,indian",
  },
  {
    name: "Dr. Meera Patel",
    role: "Professor",
    dept: "Electrical",
    qualification: "Ph.D., M.Tech",
    experience: "20 years",
    specialization: "Power Systems, Renewable Energy",
    image: "https://source.unsplash.com/200x200/?professor,woman,indian",
  },
  {
    name: "Prof. Rajesh Khanna",
    role: "Assistant Professor",
    dept: "Information Technology",
    qualification: "M.Tech, B.Tech",
    experience: "6 years",
    specialization: "Cyber Security, Network Protocols",
    image: "https://source.unsplash.com/200x200/?teacher,man,indian",
  },
  {
    name: "Dr. Anjali Deshpande",
    role: "Professor",
    dept: "Mathematics",
    qualification: "Ph.D., M.Sc",
    experience: "16 years",
    specialization: "Numerical Methods, Calculus",
    image: "https://source.unsplash.com/200x200/?professor,woman,indian",
  },
  {
    name: "Prof. Sanjay Malhotra",
    role: "Associate Professor",
    dept: "Physics",
    qualification: "M.Sc, B.Ed",
    experience: "13 years",
    specialization: "Quantum Mechanics, Solid State Physics",
    image: "https://source.unsplash.com/200x200/?professor,man,indian",
  },
  {
    name: "Dr. Neeta Joshi",
    role: "Professor",
    dept: "Chemistry",
    qualification: "Ph.D., M.Sc",
    experience: "17 years",
    specialization: "Organic Chemistry, Polymer Science",
    image: "https://source.unsplash.com/200x200/?professor,woman,indian",
  },
  {
    name: "Prof. Alok Mishra",
    role: "Assistant Professor",
    dept: "Computer Science",
    qualification: "M.Tech, B.Tech",
    experience: "7 years",
    specialization: "Cloud Computing, Distributed Systems",
    image: "https://source.unsplash.com/200x200/?teacher,man,indian",
  },
];

const departments = [...new Set(facultyMembers.map(member => member.dept))];

const FacultyPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredFaculty = facultyMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All" || member.dept === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <motion.div 
          className="flex items-center justify-center mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="p-3 bg-blue-100 rounded-full">
            <GraduationCap size={36} className="text-blue-800" />
          </div>
        </motion.div>
        <h1 className="text-4xl font-bold text-blue-800 mb-3">Our Distinguished Faculty</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At <span className="font-semibold text-blue-700">Krishna Engineering College</span>, our dedicated and experienced faculty members 
          are committed to nurturing innovation, knowledge, and excellence among students.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-10 bg-white rounded-xl p-6 shadow-md max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 ">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or specialization..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-600" />
            <select 
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
            >
              <option value="All">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          <span 
            className={`px-3 py-1 rounded-full text-sm cursor-pointer ${selectedDept === "All" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setSelectedDept("All")}
          >
            All
          </span>
          {departments.map(dept => (
            <span 
              key={dept}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer ${selectedDept === dept ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => setSelectedDept(dept)}
            >
              {dept}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Faculty Grid */}
      <motion.div 
        className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <AnimatePresence>
          {filteredFaculty.map((faculty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              layout
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-5 text-center border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedMember(faculty)}
            >
              <div className="relative mb-4">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-blue-100"
                />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {faculty.dept}
                </div>
              </div>
              
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{faculty.name}</h2>
              <p className="text-blue-700 font-medium text-sm mb-1">{faculty.role}</p>
              
              <div className="flex items-center justify-center gap-1 text-gray-600 text-xs mb-2">
                <BookOpen size={12} /> {faculty.qualification}
              </div>
              
              <div className="flex items-center justify-center gap-1 text-gray-500 text-xs">
                <Award size={12} /> {faculty.experience} experience
              </div>
              
              <button className="mt-4 text-blue-600 text-sm flex items-center justify-center gap-1 mx-auto">
                View Profile <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredFaculty.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-gray-400 mb-4">No faculty members found matching your criteria</div>
          <button 
            className="text-blue-600 hover:text-blue-800 font-medium"
            onClick={() => {
              setSearchTerm("");
              setSelectedDept("All");
            }}
          >
            Clear filters
          </button>
        </motion.div>
      )}

      {/* Faculty Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 mx-auto md:mx-0"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedMember.name}</h2>
                    <p className="text-blue-700 font-medium mb-1">{selectedMember.role}</p>
                    <div className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full inline-block mb-4">
                      {selectedMember.dept} Department
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} className="text-blue-600" />
                        <span className="text-gray-700">{selectedMember.qualification}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-blue-600" />
                        <span className="text-gray-700">{selectedMember.experience} of experience</span>
                      </div>
                      
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <GraduationCap size={16} className="text-blue-600" />
                        <span className="text-gray-700">Specializes in {selectedMember.specialization}</span>
                      </div>
                    </div>
                    
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                      <Mail size={16} />
                      Contact Professor
                    </button>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Professional Background</h3>
                  <p className="text-gray-600">
                    Professor {selectedMember.name.split(' ').slice(1).join(' ')} has extensive experience in {selectedMember.specialization.toLowerCase()} 
                    and has published numerous research papers in reputed international journals. 
                    {selectedMember.role.includes('Professor') && ' They are dedicated to mentoring students and fostering academic excellence.'}
                  </p>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-blue-700 font-semibold">15+</div>
                      <div className="text-gray-600 text-sm">Publications</div>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-blue-700 font-semibold">5+</div>
                      <div className="text-gray-600 text-sm">Research Projects</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-6 py-4 rounded-b-xl flex justify-end">
                <button 
                  className="text-gray-600 hover:text-gray-800"
                  onClick={() => setSelectedMember(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FacultyPage;