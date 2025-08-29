import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, BookText, Award, MapPin, Calendar, Star } from 'lucide-react';

const About = () => (
  <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
    <div className="container mx-auto px-4 py-12 max-w-7xl">

      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-6">
          <Award className="text-blue-900 mr-2" size={28} />
          <span className="text-blue-900 font-semibold">NAAC Accredited</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
          Krishna Engineering College, Bhilai
        </h1>
        
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        
        <p className="text-lg text-blue-800 max-w-3xl mx-auto leading-relaxed">
          Established in 2008 by the Krishna Education Society, KEC Bhilai is affiliated with 
          Chhattisgarh Swami Vivekanand Technical University (CSVTU). We foster technical excellence, 
          innovation, and holistic development to prepare students for real-world challenges.
        </p>
        
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          <div className="flex items-center text-blue-800">
            <MapPin size={20} className="mr-2" />
            <span>Bhilai, Chhattisgarh</span>
          </div>
          <div className="flex items-center text-blue-800">
            <Calendar size={20} className="mr-2" />
            <span>Established 2008</span>
          </div>
          <div className="flex items-center text-blue-800">
            <Star size={20} className="mr-2" />
            <span>Affiliated to CSVTU</span>
          </div>
        </div>
      </motion.div>

      {/* Key Stats */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {[
          { icon: GraduationCap, number: "2000+", label: "Students" },
          { icon: Users, number: "150+", label: "Faculty & Staff" },
          { icon: BookText, number: "12+", label: "Programs" },
          { icon: Award, number: "15+", label: "Years of Excellence" },
        ].map((stat, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow"
            whileHover={{ y: -5 }}
          >
            <stat.icon className="mx-auto text-blue-900 mb-3" size={32} />
            <div className="text-2xl font-bold text-blue-900">{stat.number}</div>
            <div className="text-blue-700">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Campus & Facilities */}
      <motion.div
        className="bg-white p-8 md:p-12 rounded-2xl shadow-lg mb-16 border border-blue-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">Campus & Infrastructure</h2>
        <p className="text-blue-800 text-lg leading-relaxed mb-4 text-center max-w-3xl mx-auto">
          Our sprawling campus provides an ideal environment for academic excellence and personal growth with state-of-the-art facilities.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-900 border-b-2 border-yellow-500 pb-2">Academic Facilities</h3>
            <ul className="text-blue-700 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Modern classrooms with digital teaching aids
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Specialized laboratories for each department
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Central library with extensive collection
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                High-speed internet connectivity across campus
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-900 border-b-2 border-yellow-500 pb-2">Student Amenities</h3>
            <ul className="text-blue-700 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Hostel accommodation for boys and girls
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Cafeteria serving nutritious meals
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Sports facilities and playgrounds
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Medical facilities and counseling services
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Academic Excellence */}
      <motion.div
        className="bg-blue-50 p-8 md:p-12 rounded-2xl shadow-lg mb-16 border border-blue-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">Academic Programs</h2>
        <p className="text-blue-800 text-lg leading-relaxed mb-4 text-center max-w-3xl mx-auto">
          We offer a comprehensive range of programs designed to meet industry demands and foster innovation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b-2 border-yellow-500 pb-2">Undergraduate Programs</h3>
            <ul className="text-blue-700 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Computer Science & Engineering
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Information Technology
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Artificial Intelligence & Machine Learning
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Mechanical Engineering
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Civil Engineering
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Electronics & Communication Engineering
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Electrical & Electronics Engineering
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b-2 border-yellow-500 pb-2">Postgraduate Programs</h3>
            <ul className="text-blue-700 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Master of Technology in various specializations
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Master of Computer Applications (MCA)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Ph.D. programs in engineering disciplines
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-900 mb-4 mt-6 border-b-2 border-yellow-500 pb-2">Teaching Methodology</h3>
            <ul className="text-blue-700 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Industry-oriented curriculum with practical focus
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Regular workshops and expert lectures
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Project-based learning approach
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        className="bg-white p-8 md:p-12 rounded-2xl shadow-lg mb-16 border border-blue-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">Recognition & Achievements</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b-2 border-yellow-500 pb-2">Accreditations</h3>
            <ul className="text-blue-700 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                NAAC Accredited with 'A' Grade
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Approved by AICTE, New Delhi
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Permanent Affiliation with CSVTU, Bhilai
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b-2 border-yellow-500 pb-2">Notable Achievements</h3>
            <ul className="text-blue-700 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Consistent high placement records
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Research publications in reputed journals
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Awards in technical festivals and competitions
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Industry collaborations for skill development
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 md:p-12 rounded-xl shadow-lg mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Begin Your Engineering Journey With Us</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Join our community of innovators, thinkers, and problem solvers. Discover your potential at Krishna Engineering College.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Explore Admissions
          </button>
          <button className="bg-transparent hover:bg-blue-700 border-2 border-white text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Campus Tour
          </button>
        </div>
      </motion.div>

    </div>
  </div>
);

export default About;