"use client";
import React from "react";
import { Camera, ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  // Variants for columns
  const columnVariant = (direction = "up") => ({
    hidden: { opacity: 0, y: direction === "up" ? 50 : -50, x: direction === "left" ? -50 : direction === "right" ? 50 : 0 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.8 } },
  });

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <Camera className="text-blue-600" size={24} />
            <div className="w-12 h-0.5 bg-blue-600 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Campus <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the vibrant life and beautiful facilities of our campus
            through these captured moments
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={columnVariant("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="text-center mb-4">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3">
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Academic Excellence
              </h3>
              <p className="text-gray-600 text-xs">Learning environments</p>
            </div>

            <div className="space-y-4">
              <motion.div className="relative group overflow-hidden rounded-xl shadow-lg" whileHover={{ scale: 1.05 }}>
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600"
                  alt="Auditorium"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs">Auditorium</p>
                </div>
              </motion.div>

              <motion.div className="relative group overflow-hidden rounded-xl shadow-lg" whileHover={{ scale: 1.05 }}>
                <img
                  src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800"
                  alt="Science Lab"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs">Physics Laboratory</p>
                </div>
              </motion.div>

              <div className="bg-white p-4 rounded-xl shadow-md text-center">
                <div className="text-2xl font-bold text-blue-600">50K+</div>
                <div className="text-xs text-gray-600 mt-1">Books in Library</div>
              </div>
            </div>
          </motion.div>

          {/* Middle Column */}
          <motion.div
            className="lg:col-span-8 space-y-6"
            variants={columnVariant("up")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="text-center mb-4">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                Campus Life
              </h3>
              <p className="text-gray-600">Where learning meets experience</p>
            </div>

            <motion.div className="relative group overflow-hidden rounded-2xl shadow-lg" whileHover={{ scale: 1.03 }}>
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1000"
                alt="Campus Overview"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-blue-300 text-sm mb-1">Main Campus</p>
                  <h4 className="text-white text-xl font-semibold">Aerial View</h4>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600", label: "Basketball" },
                { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600", label: "Graduation" },
                { src: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=600", label: "Study Area" },
                { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600", label: "Collaboration" },
              ].map((img, idx) => (
                <motion.div key={idx} className="relative group overflow-hidden rounded-xl shadow-lg" whileHover={{ scale: 1.05 }}>
                  <img src={img.src} alt={img.label} className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <p className="text-white text-xs">{img.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={columnVariant("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="text-center mb-4">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Facilities</h3>
              <p className="text-gray-600 text-xs">Modern amenities</p>
            </div>

            <motion.div className="relative group overflow-hidden rounded-xl shadow-lg" whileHover={{ scale: 1.05 }}>
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600" alt="Auditorium" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-white text-xs">Auditorium</p>
              </div>
            </motion.div>

            <motion.div className="relative group overflow-hidden rounded-xl shadow-lg" whileHover={{ scale: 1.05 }}>
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600" alt="Sports Complex" className="w-full aspect-square object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-white text-xs">Sports Complex</p>
              </div>
            </motion.div>

            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <div className="text-xl font-bold text-blue-600">25+</div>
              <div className="text-xs text-gray-600 mt-1">Facilities</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
