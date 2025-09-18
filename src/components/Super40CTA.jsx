"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Award,
  Users,
  BookOpen,
  Star,
  ChevronRight,
  X,
  CheckCircle,
} from "lucide-react";

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

// Custom colors
const colors = {
  primary: "#1a365d", // deep blue bg
  accentBlue: "#4094F4",
  gold: "#FFC906",
  green: "#5CCA7A",
  red: "#FF3E6B",
};

const Super40CTASection = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const features = [
    { icon: <Award size={24} />, text: "Specialized Test Preparation" },
    { icon: <Users size={24} />, text: "Limited to 40 Students Only" },
    { icon: <BookOpen size={24} />, text: "Comprehensive Study Material" },
    { icon: <Star size={24} />, text: "Expert Faculty Guidance" },
  ];

  const stats = [
    { value: "95%", label: "Success Rate" },
    { value: "40", label: "Seats Only" },
    { value: "30", label: "Days Preparation" },
    { value: "1000+", label: "Students Trained" },
  ];

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowModal(false);
    setFormData({ name: "", email: "", phone: "", course: "" });
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden"
      style={bodyFont}
    >
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"
          animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl"
          animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Registration Info */}
            <motion.div
              className="inline-flex items-center bg-blue-700 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Calendar size={18} className="mr-2 text-yellow-300" />
              <span className="text-sm font-medium">
                Registration Open Until: March 30, 2024
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={headingFont}
            >
              Super 40 Entrance Exam
              <span
                className="block mt-2"
                style={{ color: colors.accentBlue }}
              >
                Secure Your Seat Now!
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-blue-100 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join the elite group of 40 students who will receive intensive
              coaching from our expert faculty. Limited seats available for our
              premier entrance preparation program.
            </motion.p>

            {/* Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-center bg-blue-800/50 p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-yellow-400 mr-3">{feature.icon}</div>
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: colors.gold }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-2" style={headingFont}>
                Secure Your Spot
              </h3>
              <p className="text-gray-600 mb-6">
                Only 40 seats available for this exclusive program
              </p>

              <div className="space-y-4 mb-6">
                {[
                  "Comprehensive study materials",
                  "Expert faculty guidance",
                  "Regular mock tests",
                  "Personalized attention",
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-green-600">
                    <CheckCircle size={20} className="mr-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Program Fee</div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: colors.accentBlue }}
                    >
                      ₹15,000
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">
                      ₹20,000
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: colors.green }}
                    >
                      25% Off
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                onClick={() => setShowModal(true)}
                className="w-full font-bold py-4 px-6 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: colors.gold, color: colors.primary }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Register Now</span>
                <ChevronRight size={20} className="ml-2" />
              </motion.button>

              <p className="text-center text-sm text-gray-500 mt-4">
                <Clock size={14} className="inline mr-1 text-red-500" />
                Limited time offer
              </p>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full font-bold text-sm"
              style={{ backgroundColor: colors.red, color: "#fff" }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ⚡ Only 12 Seats Left!
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-md relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                onClick={() => setShowModal(false)}
              >
                <X size={24} />
              </button>
              <h3
                className="text-2xl font-bold text-center mb-6"
                style={headingFont}
              >
                Super 40 Registration
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {["name", "email", "phone"].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field === "name"
                        ? "Full Name"
                        : field === "email"
                        ? "Email Address"
                        : "Phone Number"}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interested Course
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  >
                    <option value="">Select a course</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Medical">Medical</option>
                    <option value="Foundation">Foundation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <motion.button
                  type="submit"
                  className="w-full font-bold py-3 px-6 rounded-lg"
                  style={{ backgroundColor: colors.accentBlue, color: "#fff" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Registration
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    </section>
  );
};

export default Super40CTASection;
