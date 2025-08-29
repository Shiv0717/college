"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Award, BookOpen, Mail, Linkedin, X, ChevronLeft, ChevronRight } from "lucide-react";

const governanceMembers = [
  {
    name: "Dr. Anand Kumar Tripathi",
    role: "Chairman & Managing Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    dept: "Board of Governors",
    bio: "Visionary educationist with 50 years of experience, guiding the institution towards excellence.",
    qualifications: "Ph.D. in Management, MBA from IIM Ahmedabad",
    achievements: ["50+ years in education sector", "Founded 5 educational institutions", "Awarded 'Education Visionary' by Govt. of India"],
    email: "chairman@krishnaengineering.edu.in",
    linkedin: "#"
  },
  {
    name: "Prof. Ramesh Verma",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    dept: "Administration",
    bio: "Committed to academic excellence and student development across all departments.",
    qualifications: "Ph.D. in Computer Science, M.Tech from IIT Delhi",
    achievements: ["25+ research publications", "15 years of academic leadership", "Patent holder in AI technologies"],
    email: "principal@krishnaengineering.edu.in",
    linkedin: "#"
  },
  {
    name: "Ms. Sita Sharma",
    role: "Director of Administration",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    dept: "Operations",
    bio: "Oversees operational efficiency and institutional governance, ensuring smooth functioning.",
    qualifications: "MBA in Operations, Certified Administrative Professional",
    achievements: ["Streamlined operational processes", "20% cost reduction initiatives", "ISO certification lead"],
    email: "admin@krishnaengineering.edu.in",
    linkedin: "#"
  },
  {
    name: "Dr. Vikram Singh",
    role: "Dean of Academics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    dept: "Academic Affairs",
    bio: "Ensures curriculum excellence and maintains high academic standards across all programs.",
    qualifications: "Ph.D. in Education, M.Ed from University of Delhi",
    achievements: ["Curriculum development expert", "NAAC accreditation coordinator", "20+ years in academic administration"],
    email: "dean@krishnaengineering.edu.in",
    linkedin: "#"
  }
];

const Governance = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextMember = () => {
    setActiveIndex((prev) => (prev + 1) % governanceMembers.length);
  };

  const prevMember = () => {
    setActiveIndex((prev) => (prev - 1 + governanceMembers.length) % governanceMembers.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-2xl mb-6"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <Users className="w-10 h-10 text-blue-700" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Institutional <span className="text-indigo-600">Governance</span>
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Our leadership team ensures strategic planning, academic excellence, and smooth administration for holistic development.
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {governanceMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                onClick={() => setSelectedMember(member)}
                className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 cursor-pointer transition-all overflow-hidden group"
              >
                <div className="flex items-start gap-6">
                  {/* Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {member.dept}
                    </span>
                    <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                    <p className="text-indigo-700 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm line-clamp-2">{member.bio}</p>
                    
                    <div className="flex items-center gap-3 mt-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        View Profile
                      </motion.button>
                      
                      <div className="flex items-center gap-2">
                        <a href={`mailto:${member.email}`} className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors">
                          <Mail className="w-4 h-4 text-gray-600" />
                        </a>
                        <a href={member.linkedin} className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors">
                          <Linkedin className="w-4 h-4 text-gray-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedMember(governanceMembers[activeIndex])}
              className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 cursor-pointer"
            >
              <div className="text-center">
                {/* Image */}
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-md mx-auto">
                    <img
                      src={governanceMembers[activeIndex].image}
                      alt={governanceMembers[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {governanceMembers[activeIndex].dept}
                </span>
                <h3 className="text-xl font-bold text-blue-900 mb-1">{governanceMembers[activeIndex].name}</h3>
                <p className="text-indigo-700 font-medium mb-3">{governanceMembers[activeIndex].role}</p>
                <p className="text-gray-600 text-sm mb-6">{governanceMembers[activeIndex].bio}</p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Profile
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <button 
            onClick={prevMember}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button 
            onClick={nextMember}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {governanceMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Leadership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
        >
          <div className="text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-1">150+</h3>
            <p className="text-gray-600 text-sm">Years Combined Experience</p>
          </div>
          
          <div className="text-center">
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-1">75+</h3>
            <p className="text-gray-600 text-sm">Research Publications</p>
          </div>
          
          <div className="text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-1">20+</h3>
            <p className="text-gray-600 text-sm">National Awards</p>
          </div>
          
          <div className="text-center">
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-1">100%</h3>
            <p className="text-gray-600 text-sm">Student Satisfaction</p>
          </div>
        </motion.div>
      </div>

      {/* Member Detail Modal */}
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
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {selectedMember.dept}
                    </span>
                    <h3 className="text-2xl font-bold text-blue-900">{selectedMember.name}</h3>
                    <p className="text-indigo-700 font-medium">{selectedMember.role}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedMember(null)}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex justify-center gap-3 mt-4">
                      <a href={`mailto:${selectedMember.email}`} className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                        <Mail className="w-5 h-5 text-blue-700" />
                      </a>
                      <a href={selectedMember.linkedin} className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                        <Linkedin className="w-5 h-5 text-blue-700" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Qualifications</h4>
                      <p className="text-gray-700">{selectedMember.qualifications}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Bio</h4>
                      <p className="text-gray-700">{selectedMember.bio}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Key Achievements</h4>
                      <ul className="space-y-2">
                        {selectedMember.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                            </div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Governance;