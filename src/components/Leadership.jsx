import React, { useState } from "react";
import { 
  Shield, 
  Users, 
  Building2, 
  Award, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Linkedin, 
  Mail,
  GraduationCap,
  Briefcase,
  Star,
  BookOpen
} from "lucide-react";
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
        "Vice Chairman – Krishna Education Society",
        "Vice President – KPS Group"
      ],
      bio: "A visionary educationist and leader with over 25 years of experience in academic excellence and institutional development. Mr. Tripathi has been instrumental in establishing 12 educational institutions across Northern India and has received the 'EduVisionary Award 2022' for outstanding contributions to technical education.",
      quote: "Education is not just about degrees, but about shaping character and building futures.",
      linkedin: "#",
      email: "anand.tripathi@example.com",
      experience: "25+ years",
      education: "M.Tech, MBA"
    },
    {
      name: "Mr. M. M. Tripathi",
      role: "Chairman, Krishna Education Society",
      image: "https://www.kecbhilai.com/images/MANAGEMENT%20&%20HIGHER%20AUTHORITIES/mmtripathi.jpg",
      achievements: [
        "Chairman – Krishna Education Society",
        "Founder visionary of KEC's managing body",
        "Pioneer in educational reforms"
      ],
      bio: "As the head of the governing body, Mr. M. M. Tripathi leads the Krishna Education Society, overseeing the strategic vision and expansion of its educational institutions, including Krishna Engineering College. His leadership has been instrumental in establishing high standards of academic excellence.",
      quote: "There is no purifier greater than knowledge.",
      linkedin: "#",
      email: "mm.tripathi@example.com",
      experience: "30+ years",
      education: "Ph.D, M.Ed"
    },
    {
      name: "Mr. Pramod Kumar Tripathi",
      role: "Secretary, Krishna Education Society",
      image: "https://www.kecbhilai.com/images/MANAGEMENT%20&%20HIGHER%20AUTHORITIES/pramodtripathi.jpg",
      achievements: [
        "Secretary – Krishna Education Society",
        "Governance and administrative leadership",
        "Strategic planning expert"
      ],
      bio: "In his role as Secretary, Mr. Pramod Kumar Tripathi handles critical administrative functions and governance decisions for the Krishna Education Society, enabling seamless institutional operations. His expertise in strategic planning has significantly contributed to the growth of the institution.",
      quote: "Dedication to service and education is the true path to progress.",
      linkedin: "#",
      email: "pramod.tripathi@example.com",
      experience: "22+ years",
      education: "MBA, LLB"
    },
  ];

  const nextProfile = () => {
    setActiveProfile((prev) => (prev === leadershipData.length - 1 ? 0 : prev + 1));
  };

  const prevProfile = () => {
    setActiveProfile((prev) => (prev === 0 ? leadershipData.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4 shadow-sm">
            <Users className="h-4 w-4 mr-2" />
            Visionary Leadership
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Guiding <span className="text-blue-900">Visionaries</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the exceptional leaders who shape the future of education at Krishna Engineering College
          </p>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center mb-8">
          {leadershipData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 transition-all ${index === activeProfile ? 'bg-blue-900 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
              onClick={() => setActiveProfile(index)}
              aria-label={`View ${leadershipData[index].name}'s profile`}
            />
          ))}
        </div>

        {/* Leadership Profiles */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevProfile}
            className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-4 shadow-lg hover:bg-blue-50 transition-all z-10 border border-gray-100"
            aria-label="Previous profile"
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </button>
          
          <button 
            onClick={nextProfile}
            className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-4 shadow-lg hover:bg-blue-50 transition-all z-10 border border-gray-100"
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
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-xl border border-gray-100"
            >
              {/* Left Side – Image & Basic Info */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative bg-blue-50 p-8 flex flex-col items-center justify-center"
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-20 rounded-full transform -rotate-6 scale-105"></div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-50 blur-sm"></div>
                  <img
                    src={leadershipData[activeProfile].image}
                    alt={leadershipData[activeProfile].name}
                    className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-2xl relative z-10"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {leadershipData[activeProfile].name}
                </h3>
                <p className="text-blue-800 font-medium text-lg mb-4">
                  {leadershipData[activeProfile].role}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                    <Briefcase className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-700">{leadershipData[activeProfile].experience}</span>
                  </div>
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                    <GraduationCap className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-700">{leadershipData[activeProfile].education}</span>
                  </div>
                </div>
                
               
               
              </motion.div>

              {/* Right Side – Detailed Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="p-8 flex flex-col justify-center"
              >
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 text-blue-600 mr-2" />
                    Key Roles & Achievements
                  </h4>
                  <ul className="space-y-3">
                    {leadershipData[activeProfile].achievements.map((achievement, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                        className="flex items-start bg-blue-50 p-3 rounded-lg"
                      >
                        <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                          <Star className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                    Leadership Profile
                  </h4>
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
                  className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-5 border-l-4 border-blue-600"
                >
                  <div className="flex items-start">
                    <Quote className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-800 italic font-medium">
                      "{leadershipData[activeProfile].quote}"
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex justify-center mt-8 md:hidden">
          <button 
            onClick={prevProfile}
            className="bg-white rounded-full p-3 shadow-md mx-2 hover:bg-blue-50 transition-colors border border-gray-200"
            aria-label="Previous profile"
          >
            <ChevronLeft className="w-5 h-5 text-blue-900" />
          </button>
          <button 
            onClick={nextProfile}
            className="bg-white rounded-full p-3 shadow-md mx-2 hover:bg-blue-50 transition-colors border border-gray-200"
            aria-label="Next profile"
          >
            <ChevronRight className="w-5 h-5 text-blue-900" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Leadership;