"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  BookOpen,
  GraduationCap,
  MapPin,
  Info,
  TrendingUp,
  CheckCircle,
  Book,
  Target,
  Heart,
  Clock,
  BarChart3,
  Shield,
  Star,
  Calendar,
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
  const highlights = [
    {
      icon: <CheckCircle size={20} className="text-blue-600" />,
      text: "AICTE-approved & CSVTU-affiliated institution",
    },
    {
      icon: <Book size={20} className="text-blue-600" />,
      text: "B.Tech programs in CSE, Civil, Mechanical & Electrical",
    },
    {
      icon: <TrendingUp size={20} className="text-blue-600" />,
      text: "Average package ₹6 LPA, highest ₹10 LPA",
    },
    {
      icon: <Users size={20} className="text-blue-600" />,
      text: "Placement rate between 80% – 99%",
    },
  ];

  const stats = [
    { icon: <GraduationCap size={24} />, value: "1000+", label: "Students" },
    { icon: <BookOpen size={24} />, value: "15+", label: "Programs" },
    { icon: <Award size={24} />, value: "50+", label: "Awards" },
    { icon: <Users size={24} />, value: "100+", label: "Faculty" },
  ];

  const values = [
    {
      icon: <Target size={20} />,
      title: "Excellence",
      description: "Commitment to academic and professional excellence",
    },
    {
      icon: <Heart size={20} />,
      title: "Integrity",
      description: "Upholding ethical standards in all endeavors",
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Innovation",
      description: "Fostering creativity and innovative thinking",
    },
    {
      icon: <Shield size={20} />,
      title: "Inclusion",
      description: "Creating an inclusive learning environment",
    },
  ];

  return (
    <section
      id="about"
      className="py-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
            <Info className="h-4 w-4 mr-2" />
            About Us
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to{" "}
            <span className="text-blue-600">Krishna Engineering College</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering students with knowledge, innovation, and values since
            2011. Shaping the next generation of engineers and leaders.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-6 items-center">
          {/* Left Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative rounded-2xl overflow-hidden shadow-xl group"
          >
            <img
              src="https://www.kecbhilai.com/images/slider_img2.jpg"
              alt="Krishna College Campus"
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <div className="flex items-center mb-2">
                  <MapPin size={18} className="mr-2" />
                  <span>Bhilai, Chhattisgarh</span>
                </div>
                <h3 className="text-xl font-semibold">
                  25+ Years of Educational Excellence
                </h3>
              </div>
            </div>

            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-lg rounded-lg shadow-md py-2 px-4 flex items-center">
              <Award size={20} className="text-yellow-500 mr-2" />
              <span className="text-sm font-medium text-gray-800">
                Approved by AICTE
              </span>
            </div>

            {/* Floating stats */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-lg rounded-lg shadow-md py-2 px-4">
              <div className="flex items-center">
                <Calendar size={16} className="text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-800">
                  Est. 2011
                </span>
              </div>
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
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Krishna Engineering College (KEC), established in 2011, is a
                premier institution offering top-notch engineering education.
                Approved by AICTE and affiliated with CSVTU, we emphasize
                academic rigor and industry-aligned skills to prepare students
                for successful careers.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Our state-of-the-art infrastructure, experienced faculty, and
                industry partnerships create an environment where students can
                thrive academically and personally.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-8"
            >
              <h3 className="font-semibold text-gray-800 mb-4 text-lg">
                Key Highlights:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-center bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors"
                  >
                    <div className="bg-white p-2 rounded-lg shadow-sm mr-3">
                      {highlight.icon}
                    </div>
                    <span className="text-sm text-gray-700">
                      {highlight.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gradient-to-b from-white via-blue-50 to-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-100"
            >
              <div className="text-blue-600 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-sm">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-extrabold text-gray-800 mb-1 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
