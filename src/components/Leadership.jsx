import React, { useState } from "react";
import { Shield, Users, Building2, Award, Quote, ChevronLeft, ChevronRight, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Leadership = () => {
  const [activeProfile, setActiveProfile] = useState(0);
  
  const leadershipData = [
    {
      name: "Mr. Anand Kumar Tripathi",
      role: "Chairman & Managing Director",
      image: "https://krishnasoftwaresolutions.com/img/chairman.png",
      achievements: [
        "Chairman – Krishna Engineering College",
        "Vice Chairman – Krishna Society",
        "Vice President – KPS Group"
      ],
      bio: "A visionary educationist and leader with over 25 years of experience in academic excellence and institutional development. Mr. Tripathi has been instrumental in establishing 12 educational institutions across Northern India and has received the 'EduVisionary Award 2022' for outstanding contributions to technical education.",
      quote: "Education is not just about degrees, but about shaping character and building futures.",
      linkedin: "#",
      email: "anand.tripathi@example.com"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Director of Academics",
      image: "/images/priya-sharma.jpg",
      achievements: [
        "PhD in Educational Leadership",
        "Former Dean - IIT Delhi",
        "Author of 5 books on pedagogy"
      ],
      bio: "With a distinguished career spanning two decades, Dr. Sharma brings innovative teaching methodologies and curriculum development expertise. She has pioneered industry-academia collaboration programs that have placed over 2000 students in top tech companies.",
      quote: "The future of education lies in adaptable learning systems that evolve with technological advancements.",
      linkedin: "#",
      email: "priya.sharma@example.com"
    },
    {
      name: "Mr. Rajesh Verma",
      role: "Chief Operations Officer",
      image: "/images/rajesh-verma.jpg",
      achievements: [
        "Operations Management Expert",
        "Infrastructure Development Specialist",
        "20+ years in educational administration"
      ],
      bio: "Mr. Verma oversees the seamless operation of all campus facilities and student services. His strategic planning has been crucial in expanding campus infrastructure by 40% while maintaining sustainable practices and eco-friendly initiatives.",
      quote: "Efficiency in operations creates the foundation upon which academic excellence can thrive.",
      linkedin: "#",
      email: "rajesh.verma@example.com"
    }
  ];

  const nextProfile = () => {
    setActiveProfile((prev) => (prev === leadershipData.length - 1 ? 0 : prev + 1));
  };

  const prevProfile = () => {
    setActiveProfile((prev) => (prev === 0 ? leadershipData.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
            <Users className="h-4 w-4 mr-2" />
            Our Leaders
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-900">Leadership</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guided by visionaries who are committed to excellence in education 
            and institutional growth.
          </p>
        </motion.div>

        {/* Navigation Dots for Mobile */}
        <div className="flex justify-center md:hidden mb-8">
          {leadershipData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${index === activeProfile ? 'bg-blue-900' : 'bg-gray-300'}`}
              onClick={() => setActiveProfile(index)}
              aria-label={`View profile ${index + 1}`}
            />
          ))}
        </div>

        {/* Leadership Profiles */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevProfile}
            className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition-all z-10"
            aria-label="Previous profile"
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </button>
          
          <button 
            onClick={nextProfile}
            className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition-all z-10"
            aria-label="Next profile"
          >
            <ChevronRight className="w-6 h-6 text-blue-900" />
          </button>

          {/* Profile Card with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProfile}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white shadow rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
            >
              {/* Left Side – Image & Basic Info */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative bg-gradient-to-br from-blue-50 to-gray-100 p-10 flex flex-col items-center justify-center"
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-transparent opacity-20 rounded-full transform -rotate-6 scale-105"></div>
                  <img
                    src={leadershipData[activeProfile].image}
                    alt={leadershipData[activeProfile].name}
                    className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl relative z-10"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">
                  {leadershipData[activeProfile].name}
                </h3>
                <p className="text-blue-800 font-medium text-lg mb-6">
                  {leadershipData[activeProfile].role}
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href={leadershipData[activeProfile].linkedin} 
                    className="bg-blue-100 text-blue-900 p-3 rounded-full hover:bg-blue-200 transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={`mailto:${leadershipData[activeProfile].email}`}
                    className="bg-blue-100 text-blue-900 p-3 rounded-full hover:bg-blue-200 transition-colors"
                    aria-label="Send email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>

              {/* Right Side – Detailed Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="p-10 flex flex-col justify-center"
              >
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 text-blue-900 mr-2" />
                    Key Roles & Achievements
                  </h4>
                  <ul className="space-y-3">
                    {leadershipData[activeProfile].achievements.map((achievement, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                        className="flex items-start"
                      >
                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                          <div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-900 mb-4">Profile</h4>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-gray-700 leading-relaxed"
                  >
                    {leadershipData[activeProfile].bio}
                  </motion.p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-900"
                >
                  <div className="flex items-start">
                    <Quote className="w-5 h-5 text-blue-800 mr-2 mt-1 transform rotate-180" />
                    <p className="text-gray-700 italic">
                      "{leadershipData[activeProfile].quote}"
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
