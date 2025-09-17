"use client";
import React from "react";
import { Camera, ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const Gallery = () => {
  // Variants for columns
  const columnVariant = (direction = "up") => ({
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : -50,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.8 } },
  });

  return (
    <section className="py-20 relative overflow-hidden font-inter">
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
            className="text-blue-700 uppercase tracking-wider text-sm font-semibold mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Alumni Success
          </motion.p>

          <motion.h4
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Alumni Success Stories
          </motion.h4>

          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto mt-4 mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
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
              <motion.div
                className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 mb-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <BookOpen size={24} />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Academic Excellence
              </h3>
              <p className="text-gray-600 text-xs">
                Learning environments
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                className="relative group overflow-hidden  shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600"
                  alt="Auditorium"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs">
                    Auditorium
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative group overflow-hidden shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800"
                  alt="Science Lab"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs">
                    Physics Laboratory
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-xl shadow-md text-center border border-cyan-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.3)",
                }}
              >
                <div className="text-2xl font-bold text-cyan-600">
                  50K+
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Books in Library
                </div>
              </motion.div>
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
              <motion.div
                className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 mb-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users size={24} />
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                Campus Life
              </h3>
              <p className="text-gray-600">
                Where learning meets experience
              </p>
            </div>

            <motion.div
              className="relative group overflow-hidden  shadow-lg"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 15px 30px -5px rgba(6, 182, 212, 0.5)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1000"
                alt="Campus Overview"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-cyan-300 text-sm mb-1">
                    Main Campus
                  </p>
                  <h4 className="text-white text-xl font-semibold">
                    Aerial View
                  </h4>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
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
                  className="relative group overflow-hidden  shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <p className="text-white text-xs">
                      {img.label}
                    </p>
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
              <motion.div
                className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 mb-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Award size={24} />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Facilities
              </h3>
              <p className="text-gray-600 text-xs">
                Modern amenities
              </p>
            </div>

            <motion.div
              className="relative group overflow-hidden  shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600"
                alt="Auditorium"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-white text-xs">
                  Auditorium
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative group overflow-hidden shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600"
                alt="Sports Complex"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-white text-xs">
                  Sports Complex
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-xl shadow-md text-center border border-cyan-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.3)",
              }}
            >
              <div className="text-xl font-bold text-cyan-600">
                25+
              </div>
              <div className="text-xs text-gray-600 mt-1">
                Facilities
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium flex items-center justify-center mx-auto gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Gallery
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;