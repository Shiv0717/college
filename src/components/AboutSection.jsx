"use client";
import React from "react";
import { Camera, ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

const Gallery = () => {
  // Variants for columns
  const columnVariant = (direction = "up") => ({
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : -50,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    },
  });

  return (
    <section className="py-20 relative overflow-hidden bg-white" style={bodyFont}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-blue-800 uppercase tracking-widest text-xs font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Campus Gallery
          </motion.p>

          <motion.h4
            className="text-4xl md:text-5xl font-light text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={headingFont}
          >
            Explore Our Campus
          </motion.h4>

          <motion.div
            className="w-24 h-0.5 bg-blue-800/30 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={columnVariant("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="text-center mb-6">
              <motion.div
                className="w-12 h-12 mx-auto flex items-center justify-center text-blue-800 mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <BookOpen size={28} />
              </motion.div>
              <h3 className="text-lg font-medium text-gray-800 mb-2" style={headingFont}>
                Academic Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                Learning environments
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="relative group overflow-hidden"
                whileHover={{
                  scale: 1.03,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600"
                  alt="Auditorium"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">
                    Auditorium
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative group overflow-hidden"
                whileHover={{
                  scale: 1.03,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800"
                  alt="Science Lab"
                  className="w-full h-60 aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">
                    Physics Laboratory
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="p-5 text-center border-l-4 border-blue-800/30 bg-blue-50/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{
                  scale: 1.02,
                }}
              >
                <div className="text-2xl font-light text-blue-800 mb-2" style={headingFont}>
                  50K+
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">
                  Books in Library
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Middle Column */}
          <motion.div
            className="lg:col-span-8 space-y-8"
            variants={columnVariant("up")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="text-center mb-6">
              <motion.div
                className="w-12 h-12 mx-auto flex items-center justify-center text-blue-800 mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users size={28} />
              </motion.div>
              <h3 className="text-2xl font-light text-gray-800 mb-2" style={headingFont}>
                Campus Life
              </h3>
              <p className="text-gray-600">
                Where learning meets experience
              </p>
            </div>

            <motion.div
              className="relative group overflow-hidden"
              whileHover={{
                scale: 1.02,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1000"
                alt="Campus Overview"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-blue-200 text-sm mb-2">
                    Main Campus
                  </p>
                  <h4 className="text-white text-xl font-medium" style={headingFont}>
                    Aerial View
                  </h4>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600",
                  label: "Basketball",
                },
                {
                  src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
                  label: "Graduation",
                },
                {
                  src: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=600",
                  label: "Study Area",
                },
                {
                  src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600",
                  label: "Collaboration",
                },
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  className="relative group overflow-hidden"
                  whileHover={{
                    scale: 1.03,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">
                      {img.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={columnVariant("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="text-center mb-6">
              <motion.div
                className="w-12 h-12 mx-auto flex items-center justify-center text-blue-800 mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Award size={28} />
              </motion.div>
              <h3 className="text-lg font-medium text-gray-800 mb-2" style={headingFont}>
                Facilities
              </h3>
              <p className="text-gray-600 text-sm">
                Modern amenities
              </p>
            </div>

            <motion.div
              className="relative group overflow-hidden"
              whileHover={{
                scale: 1.03,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600"
                alt="Auditorium"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">
                  Auditorium
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative group overflow-hidden"
              whileHover={{
                scale: 1.03,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600"
                alt="Sports Complex"
                className="w-full h-60 aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">
                  Sports Complex
                </p>
              </div>
            </motion.div>

            <motion.div
              className="p-5 text-center border-l-4 border-blue-800/30 bg-blue-50/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
              }}
            >
              <div className="text-xl font-light text-blue-800 mb-2" style={headingFont}>
                25+
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">
                Facilities
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="px-8 py-4 bg-blue-800 text-white font-medium flex items-center justify-center mx-auto gap-3 hover:bg-blue-900 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View Full Gallery</span>
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>

      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&family=Lora:wght@400;500;600&display=swap" rel="stylesheet" />
    </section>
  );
};

export default Gallery;