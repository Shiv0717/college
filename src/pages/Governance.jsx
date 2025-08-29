"use client";
import React from "react";
import { motion } from "framer-motion";

const governanceMembers = [
  {
    name: "Dr. Anand Kumar Tripathi",
    role: "Chairman",
    image: "/images/chairman.jpg",
    dept: "Board of Governors",
    bio: "Visionary educationist with 50 years of experience, guiding the institution towards excellence.",
  },
  {
    name: "Prof. Ramesh Verma",
    role: "Principal",
    image: "/images/principal.jpg",
    dept: "Administration",
    bio: "Committed to academic excellence and student development across all departments.",
  },
  {
    name: "Ms. Sita Sharma",
    role: "Director of Administration",
    image: "/images/director.jpg",
    dept: "Operations",
    bio: "Oversees operational efficiency and institutional governance, ensuring smooth functioning.",
  },
];

const Governance = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4"
        >
          Governance
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-blue-900 max-w-3xl mx-auto mb-16"
        >
          Our governance team ensures strategic planning, academic excellence, and smooth administration for the holistic development of students and faculty.
        </motion.p>

        {/* Members Grid */}
        <div className="grid gap-16">
          {governanceMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              className={`relative bg-white rounded-3xl shadow-lg p-6 md:flex md:items-center md:gap-10 border border-gray-100 cursor-pointer transition-all ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="absolute md:relative -top-16 left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="mt-20 md:mt-0 text-center md:text-left md:flex-1">
                <span className="inline-block bg-gradient-to-r from-blue-700 to-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 shadow-md">
                  {member.dept}
                </span>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{member.name}</h3>
                <p className="text-blue-900 font-medium mb-4">{member.role}</p>
                <p className="text-blue-900">{member.bio}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-full shadow-lg hover:opacity-90 transition-all"
                >
                  View Profile
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Governance;
