"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, Award, Calendar, UserCheck } from "lucide-react";

const leaders = [
  {
    name: "Mr. Anand Kumar Tripathi",
    role: "Chairman & Managing Director",
    image: "https://krishnasoftwaresolutions.com/img/chairman.png",
    bio: "A visionary educationist with over 25 years of experience in academic excellence and institutional development.",
    quote: "Education is not just about degrees, but about shaping character and building futures.",
    tenure: "2011 - Present",
    achievements: [
      "Chairman – Krishna Engineering College",
      "Vice Chairman – Krishna Education Society",
      "Vice President – KPS Group"
    ]
  },
  {
    name: "Mr. M. M. Tripathi",
    role: "Chairman, Krishna Education Society",
    image: "https://www.kecbhilai.com/images/MANAGEMENT%20&%20HIGHER%20AUTHORITIES/mmtripathi.jpg",
    bio: "As the head of the governing body, leads the Krishna Education Society with strategic vision and expansion.",
    quote: "There is no purifier greater than knowledge.",
    tenure: "2005 - Present",
    achievements: [
      "Chairman – Krishna Education Society",
      "Founder visionary of KEC's managing body"
    ]
  },
  {
    name: "Mr. Pramod Kumar Tripathi",
    role: "Secretary, Krishna Education Society",
    image: "https://www.kecbhilai.com/images/MANAGEMENT%20&%20HIGHER%20AUTHORITIES/pramodtripathi.jpg",
    bio: "Handles critical administrative functions and governance decisions with dedication and expertise.",
    quote: "Dedication to service and education is the true path to progress.",
    tenure: "2010 - Present",
    achievements: [
      "Secretary – Krishna Education Society",
      "Governance and administrative leadership"
    ]
  },
];

const Leadership = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        {/* <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center text-blue-600 font-medium text-sm uppercase tracking-wide mb-4 py-2 px-4 bg-blue-100 rounded-full">
            <UserCheck size={16} className="mr-2" />
            Leadership Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Visionary Leaders</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet the exceptional leaders guiding Krishna Engineering College with wisdom, dedication, and innovation.
          </p>
        </motion.div> */}

        {/* Leaders Grid */}
        <div className="space-y-20">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center md:items-start md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } gap-8 md:gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <motion.div
                className="flex-shrink-0 w-full md:w-2/5 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-80 object-contain rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg">
                    <div className="flex items-center text-sm">
                      <Calendar size={16} className="mr-2" />
                      {leader.tenure}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="w-full md:w-3/5"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-blue-700 font-semibold mb-4">{leader.role}</p>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{leader.bio}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3 flex items-center">
                      <Award size={16} className="mr-2 text-blue-600" />
                      Key Roles & Achievements
                    </h4>
                    <ul className="space-y-2">
                      {leader.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="text-gray-600 text-sm flex items-start"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 + index * 0.3 }}
                          viewport={{ once: true }}
                        >
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  <motion.blockquote
                    className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex">
                      <Quote className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                      <p className="text-blue-800 italic">"{leader.quote}"</p>
                    </div>
                  </motion.blockquote>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Leadership;