import React, { useRef } from "react";
import {
  ArrowRight,
  ChevronRight,
  BookOpen,
  Users,
  Award,
  Briefcase,
  Star,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

const sections = [
  {
    id: "01",
    title: "Departments",
    description:
      "Explore our academic departments that shape innovation and research. Our departments offer cutting-edge programs taught by industry experts and renowned scholars.",
    link: "#",
    icon: <BookOpen size={24} />,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    longDescription:
      "Our academic departments are the foundation of the university's educational mission. Each department is dedicated to excellence in teaching, research, and service, providing students with the knowledge and skills needed to succeed in their chosen fields.",
  },
  {
    id: "02",
    title: "Academies",
    description:
      "Specialized academies that nurture practical skills and global exposure.",
    link: "#",
    icon: <Users size={24} />,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: "03",
    title: "Expertise",
    description:
      "Areas of expertise where our faculty and students excel worldwide.",
    link: "#",
    icon: <Award size={24} />,
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: "04",
    title: "Placements",
    description:
      "Career opportunities with top recruiters and industry leaders.",
    link: "#",
    icon: <Briefcase size={24} />,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

// Animation wrapper component
const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

const CoursesOffered = () => {
  const featuredItem = sections.find((item) => item.featured);
  const regularItems = sections.filter((item) => !item.featured);

  return (
    <div className="bg-white py-24 overflow-hidden" style={bodyFont}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.p
              className="text-blue-800 uppercase tracking-widest text-xs font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Academic Programs
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-light text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={headingFont}
            >
              Explore Our Offerings
            </motion.h2>
            <motion.div
              className="w-24 h-0.5 bg-blue-800/30 mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.p
              className="text-gray-700 mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Discover our comprehensive academic programs designed to foster
              innovation, critical thinking, and real-world skills.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Full-width featured card */}
        <div className="flex flex-col md:flex-row mb-12 border-b-4 border-blue-800/20">
          {/* Image section */}
          <div className="md:w-1/2 h-[500px] overflow-hidden relative">
            <motion.div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${featuredItem.image})` }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent"></div>

            {/* Icon badge */}
            <div className="absolute top-8 left-8">
              <div className="text-blue-800 p-2">
                {featuredItem.icon}
              </div>
            </div>

            {/* Number badge */}
            <div className="absolute top-8 right-8">
              <span className="text-6xl font-bold text-white/20" style={headingFont}>
                {featuredItem.id}
              </span>
            </div>
          </div>

          {/* Content section */}
          <div className="md:w-1/2 p-10 flex flex-col justify-center bg-white">
            {/* Subheading */}
            <p className="text-blue-800 uppercase tracking-widest text-xs font-medium mb-4">
              Featured Program
            </p>

            {/* Main heading */}
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={headingFont}>
              {featuredItem.title}
            </h3>

            {/* Stats section */}
            <motion.div 
              className="flex gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <p className="text-2xl font-light text-blue-800 mb-2" style={headingFont}>50+</p>
                <p className="text-sm text-gray-600 tracking-wide">Programs Offered</p>
              </div>
              <div>
                <p className="text-2xl font-light text-blue-800 mb-2" style={headingFont}>200+</p>
                <p className="text-sm text-gray-600 tracking-wide">Faculty Members</p>
              </div>
              <div>
                <p className="text-2xl font-light text-blue-800 mb-2" style={headingFont}>95%</p>
                <p className="text-sm text-gray-600 tracking-wide">Employment Rate</p>
              </div>
            </motion.div>

            {/* Extended description */}
            <p className="text-gray-700 mb-8 leading-relaxed">{featuredItem.longDescription}</p>

            {/* CTA button */}
            <motion.a
              href={featuredItem.link}
              className="inline-flex items-center text-blue-800 font-medium group/btn self-start border-b-2 border-blue-800 pb-1"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Explore Department</span>
              <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </motion.a>
          </div>
        </div>

        {/* Regular cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regularItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 0.1 + 0.3}>
              <motion.div
                className="relative overflow-hidden group h-full flex flex-col transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Image with overlay */}
                <div className="h-72 overflow-hidden relative">
                  <motion.div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 p-2">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-4xl font-bold text-white/20" style={headingFont}>
                      {item.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col bg-white">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-800 transition-colors" style={headingFont}>
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-4 flex-grow">
                    {item.description}
                  </p>

                  <motion.a
                    href={item.link}
                    className="inline-flex items-center text-blue-800 font-medium mt-auto group/btn"
                    whileHover={{ x: 3 }}
                  >
                    <span>Learn more</span>
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </motion.a>
                </div>

                {/* Hover effect line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-800"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Enhanced CTA at the bottom */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mt-16">
            <motion.a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-blue-800 text-white font-medium group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore All Programs</span>
              <motion.div
                animate={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </motion.a>

            <motion.p
              className="text-gray-600 mt-6 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Join over 10,000 students who have transformed their careers with
              our programs
            </motion.p>
          </div>
        </AnimatedSection>
      </div>

      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&family=Lora:wght@400;500;600&display=swap" rel="stylesheet" />
    </div>
  );
};

export default CoursesOffered;