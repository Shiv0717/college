import React, { useState } from "react";
import { Shield, Users, Building2, Award, Quote, ChevronLeft, ChevronRight, Linkedin, Mail, Calendar, BookOpen, Target } from "lucide-react";
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
      tenure: "2011 - Present",
      expertise: ["Educational Leadership", "Institutional Development", "Strategic Planning"]
    },
    {
      name: "Mr. M. M. Tripathi",
      role: "Chairman, Krishna Education Society",
      image: "https://www.kecbhilai.com/images/MANAGEMENT%20&%20HIGHER%20AUTHORITIES/mmtripathi.jpg",
      achievements: [
        "Chairman – Krishna Education Society",
        "Founder visionary of KEC's managing body"
      ],
      bio: "As the head of the governing body, Mr. M. M. Tripathi leads the Krishna Education Society, overseeing the strategic vision and expansion of its educational institutions, including Krishna Engineering College.",
      quote: "There is no purifier greater than knowledge.",
      linkedin: "#",
      email: "mm.tripathi@example.com",
      tenure: "2005 - Present",
      expertise: ["Governance", "Educational Policy", "Community Development"]
    },
    {
      name: "Mr. Pramod Kumar Tripathi",
      role: "Secretary, Krishna Education Society",
      image: "https://www.kecbhilai.com/images/MANAGEMENT%20&%20HIGHER%20AUTHORITIES/pramodtripathi.jpg",
      achievements: [
        "Secretary – Krishna Education Society",
        "Governance and administrative leadership"
      ],
      bio: "In his role as Secretary, Mr. Pramod Kumar Tripathi handles critical administrative functions and governance decisions for the Krishna Education Society, enabling seamless institutional operations.",
      quote: "Dedication to service and education is the true path to progress.",
      linkedin: "#",
      email: "pramod.tripathi@example.com",
      tenure: "2010 - Present",
      expertise: ["Administration", "Operations Management", "Strategic Planning"]
    },
  ];

  const nextProfile = () => {
    setActiveProfile((prev) => (prev === leadershipData.length - 1 ? 0 : prev + 1));
  };

  const prevProfile = () => {
    setActiveProfile((prev) => (prev === 0 ? leadershipData.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full bg-blue-50 mb-6 px-4 py-2  text-sm font-medium text-blue-700 ">
            <Shield className="h-4 w-4 mr-2 " />
            Leadership Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Guiding <span className="text-blue-600">Visionaries</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the exceptional leaders who shape our institution's future with 
            wisdom, dedication, and innovative thinking.
          </p>
        </motion.div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {leadershipData.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg ${
                activeProfile === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveProfile(index)}
            >
              <div className="relative">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-48 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{leader.name}</h3>
                  <p className="text-blue-200 text-sm">{leader.role}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{leader.tenure}</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{leader.bio}</p>
                <button className="mt-4 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                  View Profile →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Profile View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProfile}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 shadow-inner"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Leader Image & Basic Info */}
              <div className="lg:col-span-1 flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-4 bg-blue-200 rounded-full opacity-30"></div>
                  <img
                    src={leadershipData[activeProfile].image}
                    alt={leadershipData[activeProfile].name}
                    className="relative w-48 h-48 object-cover rounded-full border-4 border-white shadow-xl"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {leadershipData[activeProfile].name}
                </h3>
                <p className="text-blue-700 font-medium text-lg mb-4 text-center">
                  {leadershipData[activeProfile].role}
                </p>
                
                <div className="flex items-center text-sm text-gray-600 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{leadershipData[activeProfile].tenure}</span>
                </div>
                
              
              </div>

              {/* Leader Details */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 text-blue-600 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {leadershipData[activeProfile].achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Areas of Expertise */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Target className="w-5 h-5 text-blue-600 mr-2" />
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {leadershipData[activeProfile].expertise.map((expertise, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full"
                        >
                          {expertise}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                    Profile
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {leadershipData[activeProfile].bio}
                  </p>
                </div>

                {/* Quote */}
                <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border-l-4 border-blue-500">
                  <div className="flex">
                    <Quote className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 italic text-lg">
                      "{leadershipData[activeProfile].quote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          {leadershipData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 transition-all ${
                index === activeProfile ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setActiveProfile(index)}
              aria-label={`View ${leadershipData[index].name}'s profile`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;