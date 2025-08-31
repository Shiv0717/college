"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, BookOpen, Search, Filter, Mail, Award, Calendar, ArrowRight, X, Users, Bookmark, Star, ChevronDown } from "lucide-react";

const facultyMembers = [
  {
    name: "Dr. Anand Kumar Tripathi",
    role: "Chairman & Managing Director",
    dept: "Management",
    qualification: "Ph.D., MBA",
    experience: "22 years",
    specialization: "Strategic Management, Leadership",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    publications: 27,
    projects: 12,
    rating: 4.8,
  },
  {
    name: "Prof. Ramesh Kumar",
    role: "Head of Department",
    dept: "Computer Science",
    qualification: "Ph.D., M.Tech",
    experience: "18 years",
    specialization: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    publications: 34,
    projects: 9,
    rating: 4.7,
  },
  {
    name: "Prof. Sneha Verma",
    role: "Associate Professor",
    dept: "Electronics",
    qualification: "M.Tech, B.Tech",
    experience: "12 years",
    specialization: "VLSI Design, Embedded Systems",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    publications: 19,
    projects: 7,
    rating: 4.6,
  },
  // ... (other faculty members with similar enhancements)
];

const departments = [...new Set(facultyMembers.map(member => member.dept))];

const FacultyPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedMember, setSelectedMember] = useState(null);
  const [sortBy, setSortBy] = useState("name");
  const [expandedFilters, setExpandedFilters] = useState(false);

  const filteredFaculty = facultyMembers
    .filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.specialization.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept = selectedDept === "All" || member.dept === selectedDept;
      return matchesSearch && matchesDept;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "experience") return parseInt(b.experience) - parseInt(a.experience);
      if (sortBy === "publications") return b.publications - a.publications;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-8 md:px-8 md:py-12">
      {/* Header */}
      <section className="py-16 md:py-20 px-4 sm:px-6 text-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Tagline pill */}
        <motion.div 
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GraduationCap className="w-4 h-4 mr-2" />
          Our Distinguished Faculty
        </motion.div>
        
        {/* Heading */}
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Mentors of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Excellence</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          At <span className="font-semibold text-blue-700">Krishna Engineering College</span>, 
          our dedicated and experienced faculty members are committed to nurturing 
          innovation, knowledge, and excellence among students.
        </motion.p>
        
        {/* Underline animation */}
        <motion.div 
          className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        />
      </div>
    </section>

      {/* Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-10 bg-white rounded-2xl p-6 shadow-lg max-w-7xl mx-auto border border-slate-200"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or specialization..."
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-slate-600" />
              <select 
                className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                <option value="All">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <Bookmark size={20} className="text-slate-600" />
              <select 
                className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="experience">Sort by Experience</option>
                <option value="publications">Sort by Publications</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-2">
          <span 
            className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-all ${selectedDept === "All" ? "bg-blue-600 text-white shadow-md" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            onClick={() => setSelectedDept("All")}
          >
            All Departments
          </span>
          {departments.map(dept => (
            <span 
              key={dept}
              className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-all ${selectedDept === dept ? "bg-blue-600 text-white shadow-md" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
              onClick={() => setSelectedDept(dept)}
            >
              {dept}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto mb-6 px-2">
        <p className="text-slate-600">
          Showing <span className="font-semibold">{filteredFaculty.length}</span> of <span className="font-semibold">{facultyMembers.length}</span> faculty members
        </p>
      </div>

      {/* Faculty Grid */}
      <motion.div 
  className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 max-w-7xl mx-auto px-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
  <AnimatePresence>
    {filteredFaculty.map((faculty, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        layout
        whileHover={{ 
          y: -8, 
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeOut" } 
        }}
        className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
        onClick={() => setSelectedMember(faculty)}
      >
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs px-3 py-1 rounded-full z-10 flex items-center gap-1 shadow-md">
          <Star size={12} fill="currentColor" /> {faculty.rating}
        </div>
        
        {/* Image Container */}
        <div className="relative mb-5">
          <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl group-hover:border-blue-100 transition-colors duration-300 ring-2 ring-blue-50">
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          {/* Department Badge */}
          <motion.div 
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-4 py-1.5 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            {faculty.dept}
          </motion.div>
        </div>
        
        {/* Name and Role */}
        <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-800 transition-colors">
          {faculty.name}
        </h2>
        <p className="text-blue-700 font-semibold text-sm mb-3 bg-blue-50 px-3 py-1 rounded-full inline-block">
          {faculty.role}
        </p>
        
        {/* Qualification */}
        <div className="flex items-center justify-center gap-2 text-gray-600 text-xs mb-3">
          <BookOpen size={14} className="text-blue-500" />
          <span className="line-clamp-1">{faculty.qualification}</span>
        </div>
        
        {/* Experience */}
        <div className="flex items-center justify-center gap-2 text-gray-600 text-xs mb-4">
          <Award size={14} className="text-amber-500" />
          <span>{faculty.experience} years experience</span>
        </div>
        
        {/* Specialization */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 mb-4 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all">
          <p className="text-gray-700 text-xs font-medium line-clamp-2 leading-relaxed">
            {faculty.specialization}
          </p>
        </div>
        
        {/* Action Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mx-auto"
        >
          View Profile 
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>

        {/* Hover Effect Indicator */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </motion.div>
    ))}
  </AnimatePresence>
</motion.div>

      {/* Empty State */}
      {filteredFaculty.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <Users size={48} className="text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No faculty members found</h3>
            <p className="text-slate-500 mb-6">Try adjusting your search or filter criteria</p>
            <button 
              className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors"
              onClick={() => {
                setSearchTerm("");
                setSelectedDept("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        </motion.div>
      )}

      {/* Faculty Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-10"
                onClick={() => setSelectedMember(null)}
              >
                <X size={20} className="text-slate-600" />
              </button>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto md:mx-0">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex items-center justify-center mt-4 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < Math.floor(selectedMember.rating) ? "text-yellow-400 fill-current" : "text-slate-300"} 
                        />
                      ))}
                      <span className="text-slate-600 ml-1 text-sm">{selectedMember.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">{selectedMember.name}</h2>
                    <p className="text-blue-700 font-medium text-lg mb-3">{selectedMember.role}</p>
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm px-4 py-2 rounded-full inline-block mb-6">
                      {selectedMember.dept} Department
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <BookOpen size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="text-slate-600 text-sm">Qualification</div>
                          <div className="text-slate-800 font-medium">{selectedMember.qualification}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Award size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="text-slate-600 text-sm">Experience</div>
                          <div className="text-slate-800 font-medium">{selectedMember.experience}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl sm:col-span-2">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <GraduationCap size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="text-slate-600 text-sm">Specialization</div>
                          <div className="text-slate-800 font-medium">{selectedMember.specialization}</div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-colors font-medium w-full justify-center">
                      <Mail size={18} />
                      Contact Professor
                    </button>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-800 mb-6">Professional Background</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Professor {selectedMember.name.split(' ').slice(1).join(' ')} has extensive experience in {selectedMember.specialization.toLowerCase()} 
                    and has published numerous research papers in reputed international journals. 
                    {selectedMember.role.includes('Professor') && ' They are dedicated to mentoring students and fostering academic excellence.'}
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 p-4 rounded-xl text-center">
                      <div className="text-blue-700 font-bold text-2xl">{selectedMember.publications}+</div>
                      <div className="text-slate-600 text-sm">Publications</div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-xl text-center">
                      <div className="text-blue-700 font-bold text-2xl">{selectedMember.projects}+</div>
                      <div className="text-slate-600 text-sm">Research Projects</div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-xl text-center">
                      <div className="text-blue-700 font-bold text-2xl">100+</div>
                      <div className="text-slate-600 text-sm">Students Guided</div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-xl text-center">
                      <div className="text-blue-700 font-bold text-2xl">5+</div>
                      <div className="text-slate-600 text-sm">Awards</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FacultyPage;