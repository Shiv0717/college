"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Award, Quote, ChevronRight, Users, BookOpen, Star } from "lucide-react";

// Fonts
const headingFont = { fontFamily: "'Dancing Script', cursive" };
const bodyFont = { fontFamily: "'Inter', sans-serif" };

// Data
const leaders = [
  {
    name: "Dr. Ramesh Sharma",
    title: "Chairman & Founder",
    image: "https://plus.unsplash.com/premium_photo-1661331801637-790d837bbaed?q=80&w=2070&auto=format&fit=crop",
    bio: "With a vision to revolutionize technical education, Dr. Sharma brings over 30 years of academic leadership and innovation.",
    quote: "Education is not the filling of a pail, but the lighting of a fire.",
    achievements: [
      "30+ years in academia",
      "Published 50+ research papers",
      "Recipient of National Education Award",
    ],
    social: { linkedin: "#", email: "r.sharma@example.com" },
  },
  {
    name: "Ms. Priya Verma",
    title: "Director of Academics",
    image: "https://plus.unsplash.com/premium_photo-1661755549658-8ac0cf1c6285?q=80&w=2832&auto=format&fit=crop",
    bio: "A passionate educator and strategist, Ms. Verma drives our academic excellence and curriculum design with precision.",
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    achievements: [
      "Curriculum development expert",
      "15 years in educational leadership",
      "International conference speaker",
    ],
    social: { linkedin: "#", email: "p.verma@example.com" },
  },
  {
    name: "Mr. Arjun Malhotra",
    title: "Head of Administration",
    image: "https://plus.unsplash.com/premium_photo-1661389874769-f5fd0b5b4754?q=80&w=2832&auto=format&fit=crop",
    bio: "Mr. Malhotra ensures smooth operations and student success through efficient and empathetic leadership.",
    quote: "Excellence is not a skill, it's an attitude.",
    achievements: [
      "Operational efficiency specialist",
      "Student success advocate",
      "20 years in administrative leadership",
    ],
    social: { linkedin: "#", email: "a.malhotra@example.com" },
  },
];

// Stats
const stats = [
  { value: "65+", label: "Years Combined Experience", icon: <Users className="w-5 h-5" /> },
  { value: "100+", label: "Research Publications", icon: <BookOpen className="w-5 h-5" /> },
  { value: "15+", label: "National Awards", icon: <Star className="w-5 h-5" /> },
];

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" } }),
};

const letterAnimationHeading = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.05, delay: i * 0.03 } }),
};

const LeadershipSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const heading = "Our Visionary Leaders";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="leadership"
      className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-20"
      style={bodyFont}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Sticky Left Column */}
        <motion.div
          className={`lg:sticky h-fit self-start p-6 bg-white rounded-2xl shadow-lg ${isMobile ? "" : "top-52"}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <motion.h2
            className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-4"
            variants={fadeUp}
          >
            Leadership Excellence
          </motion.h2>

          {/* Letter staggered heading */}
          <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight" style={headingFont}>
            {heading.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterAnimationHeading}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <motion.p className="text-gray-600 text-base leading-relaxed mb-6" variants={fadeUp}>
            Behind every successful institution is a team of dedicated individuals. Our leadership blends experience, innovation, and empathy to guide our institution toward excellence.
          </motion.p>

          {/* Stats */}
          <motion.div className="space-y-4 py-4 border-t border-gray-100" variants={fadeUp}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Impact</h3>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center p-3 bg-blue-50 rounded-lg"
                variants={fadeUp}
                custom={index}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full mr-3">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-700">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Leadership Cards */}
        <div className="lg:col-span-2 space-y-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              id={`leader-${index}`}
              className="flex flex-col lg:flex-row gap-8 group scroll-mt-24"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              {/* Image Left */}
              <motion.div
                className="lg:w-2/5 overflow-hidden rounded-2xl shadow-lg sticky top-28 self-start"
                variants={fadeUp}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Content Right */}
              <motion.div className="lg:w-3/5 flex flex-col justify-center" variants={fadeUp}>
                <motion.h4 className="text-2xl font-bold text-gray-800 mb-2" variants={fadeUp}>
                  {leader.name}
                </motion.h4>
                <motion.p className="text-blue-600 font-medium mb-4" variants={fadeUp}>
                  {leader.title}
                </motion.p>
                <motion.p className="text-gray-600 mb-4 leading-relaxed" variants={fadeUp}>
                  {leader.bio}
                </motion.p>

                {/* Quote */}
                <motion.div className="bg-blue-50 rounded-lg p-4 mb-4 border-l-4 border-blue-500" variants={fadeUp}>
                  <Quote className="w-4 h-4 text-blue-600 mb-1" />
                  <p className="text-sm text-blue-700 italic">"{leader.quote}"</p>
                </motion.div>

                {/* Achievements */}
                <motion.div className="space-y-2" variants={fadeUp}>
                  <div className="flex items-center text-sm text-blue-700 font-medium">
                    <Award className="w-4 h-4 mr-2" /> Key Achievements
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {leader.achievements.map((achievement, i) => (
                      <motion.li key={i} className="flex items-start" whileHover={{ x: 5 }} variants={fadeUp} custom={i}>
                        <ChevronRight className="w-4 h-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </section>
  );
};

export default LeadershipSection;
