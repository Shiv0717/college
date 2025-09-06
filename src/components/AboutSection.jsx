"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  BookOpen,
  GraduationCap,
  MapPin,
  Clock,
  Star,
  Target,
  Heart,
  Calendar,
  Info,
  TrendingUp,
  CheckCircle,
  Book
} from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const AboutSection = () => {
  const stats = [
    { icon: <GraduationCap size={28} />, value: "5000+", label: "Graduates" },
    { icon: <Users size={28} />, value: "200+", label: "Faculty Members" },
    { icon: <BookOpen size={28} />, value: "50+", label: "Programs" },
    { icon: <Award size={28} />, value: "25+", label: "Years of Excellence" },
  ];

  const highlights = [
    {
      icon: <CheckCircle size={20} className="text-blue-600" />,
      text: "AICTE-approved engineering institution"
    },
    {
      icon: <Book size={20} className="text-blue-600" />,
      text: "4 BE programs (CSE, Civil, Mechanical, Electrical) with ~240 seats"
    },
    {
      icon: <TrendingUp size={20} className="text-blue-600" />,
      text: "Average package ₹6 LPA, highest up to ₹10 LPA"
    },
    {
      icon: <Users size={20} className="text-blue-600" />,
      text: "Placement rate ranging from 80% to ~99%"
    }
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full -translate-x-36 -translate-y-36 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-80 lg:h-96 bg-blue-100 rounded-full translate-x-48 translate-y-48 opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      {/* Tagline pill */}
      <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
        <Info className="h-4 w-4 mr-2" />
        About Us
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to <span className="text-blue-900">Krishna Engineering College</span>
      </h2>

      {/* Subtitle */}
      
    </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <img
              src="https://www.kecbhilai.com/images/slider_img2.jpg"
              alt="Krishna College Campus"
              className="w-full h-110 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <div className="flex items-center mb-2">
                  <MapPin size={18} className="mr-2" />
                  <span>Bhilai, India</span>
                </div>
                <h3 className="text-xl font-semibold">25+ Years of Educational Excellence</h3>
              </div>
            </div>
            
            {/* Accreditation badge */}
            <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg py-2 px-4 flex items-center">
              <Award size={20} className="text-yellow-500 mr-2" />
              <span className="text-sm font-medium">NAAC Accredited</span>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            
            <p className="text-gray-600 mb-4 leading-relaxed">
            Krishna Engineering College (KEC), Bhilai, established in 2011, is AICTE-approved and CSVTU-affiliated, offering modern technical education with strong focus on academic excellence and practical skills.
</p>
<p className="text-gray-600 mb-4 leading-relaxed">
Established in 2011, Krishna Engineering College (KEC), Bhilai, AICTE-approved and CSVTU-affiliated, offers B.Tech programs in CSE, Civil, Mechanical, and Electrical, with admissions via 10+2 PCM and JEE Main/CG PET
</p>


            {/* Highlights List */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="font-semibold text-gray-800 mb-4">Key Highlights:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center bg-blue-50 rounded-lg p-3"
                  >
                    {highlight.icon}
                    <span className="text-sm text-gray-700 ml-2">{highlight.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

       
        
      </div>
    </section>
  );
};

export default AboutSection;