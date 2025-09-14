"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Globe,
  ChevronRight,
  ZoomIn,
  X,
  Cpu,
  Sparkles,
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);

  const splitText = (text) => {
    return text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {char}
      </motion.span>
    ));
  };

  const stats = [
    {
      id: 1,
      value: 25,
      suffix: "+",
      label: "Years of Excellence",
      icon: Award,
      color: "text-blue-500",
      delay: 0.1,
    },
    {
      id: 2,
      value: 8000,
      suffix: "+",
      label: "Alumni Network",
      icon: Users,
      color: "text-green-500",
      delay: 0.2,
    },
    {
      id: 3,
      value: 350,
      suffix: "+",
      label: "Expert Faculty",
      icon: GraduationCap,
      color: "text-amber-500",
      delay: 0.3,
    },
    {
      id: 4,
      value: 50,
      suffix: "+",
      label: "Programs Offered",
      icon: BookOpen,
      color: "text-purple-500",
      delay: 0.4,
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=800&q=80",
      alt: "KRIHSAN Engineering College Campus",
      title: "Tech-Enabled Campus",
      description: "Our campus features cutting-edge technology infrastructure",
    },
    {
      src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      alt: "Engineering Laboratory",
      title: "Advanced Research Lab",
      description: "Cutting-edge research facilities for engineering innovation",
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      alt: "Robotics Lab",
      title: "Robotics & AI Lab",
      description: "Students working on next-generation robotics projects",
    },
    
  ];

  const features = [
    {
      icon: Cpu,
      title: "Advanced Computing",
      description: "High-performance labs and cloud-based platforms.",
      color: "text-blue-500",
    },
    {
      icon: Cpu,
      title: "Electronics Lab",
      description: "Modern embedded systems and IoT lab.",
      color: "text-green-500",
    },
    {
      icon: Cpu,
      title: "Innovation Center",
      description: "Student-run innovation and incubation hub.",
      color: "text-amber-500",
    },
    {
      icon: Cpu,
      title: "AI Research",
      description: "ML-powered solutions and AI research projects.",
      color: "text-purple-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background animations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5 pattern-grid-lg pattern-blue-500 pattern-size-8 pattern-opacity-100 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <div className="inline-flex items-center justify-center text-blue-400 font-medium text-sm uppercase tracking-wide mb-6 py-2 px-5 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-700/30">
            <Sparkles size={16} className="mr-2" />
            Engineering Excellence Since 1999
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {splitText("KRISHNA")}
            </span>{" "}
            <span className="text-white">{splitText("Engineering College")}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Shaping the next generation of engineers and innovators through cutting-edge education, research, and industry collaboration.
          </p>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="flex flex-col lg:flex-row gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column */}
          <div className="lg:w-1/2">
            {/* About */}
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-3xl font-bold text-white mb-6">About Our College</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
  Established in 1999, KRISHNA Engineering College has been a hub for innovation and excellence in technical education. With project-based learning, global partnerships, and real-world engineering challenges, we prepare future tech leaders.
  
  Beyond academics, we focus on holistic development — encouraging leadership, entrepreneurship, and social responsibility. With a strong alumni network and strategic industry alliances.
</p>

            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-6">Our Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all group"
                    whileHover={{ y: -5 }}
                    variants={itemVariants}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center mb-4 ${feature.color}`}>
                      <feature.icon size={24} />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            
          </div>

          {/* Right Column - Gallery */}
          <div className="lg:w-1/2">
  {/* Featured Image */}
  <motion.div
    className="relative rounded-2xl overflow-hidden mb-8 group cursor-pointer"
    variants={itemVariants}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
    onClick={() => setSelectedImage(galleryImages[0])}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 transition-opacity" />
    
    {/* Image */}
    <img
      src={galleryImages[0].src}
      alt={galleryImages[0].alt}
      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
    />
    
    {/* Text Overlay */}
    <div className="absolute bottom-0 left-0 z-20 p-6 text-white">
      <h3 className="text-2xl font-bold mb-1">{galleryImages[0].title}</h3>
      <p className="text-blue-200 text-sm">{galleryImages[0].description}</p>
    </div>

    {/* Zoom Icon */}
    <div className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-30">
      <ZoomIn size={20} />
    </div>
  </motion.div>

  {/* Gallery Grid */}
  <div className="grid grid-cols-2 gap-5">
    {galleryImages.slice(1).map((img, idx) => (
      <motion.div
        key={idx}
        className="relative rounded-xl overflow-hidden group cursor-pointer h-56"
        variants={itemVariants}
        whileHover={{ scale: 1.05, y: -3 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setSelectedImage(img)}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-sm rounded-xl" />

        {/* Image */}
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Text */}
        <div className="absolute bottom-0 left-0 z-20 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-semibold text-sm">{img.title}</h3>
        </div>

        {/* Zoom Icon */}
        <div className="absolute top-3 right-3 bg-black/60 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-30">
          <ZoomIn size={16} />
        </div>
      </motion.div>
    ))}
  </div>

  {/* CTA */}
  <motion.div
    className="mt-10 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-2xl p-6 text-white border border-blue-500/30 backdrop-blur-md shadow-xl"
    variants={itemVariants}
    whileHover={{ scale: 1.015 }}
    transition={{ type: "spring", stiffness: 180, damping: 20 }}
  >
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
          <Globe size={24} className="text-blue-300" />
        </div>
        <div>
          <div className="font-bold text-lg">15+ Industry Partnerships</div>
          <div className="text-blue-200 text-sm">With top tech companies worldwide</div>
        </div>
      </div>

      <button className="bg-blue-500 text-white font-medium py-3 px-6 rounded-xl flex items-center group hover:bg-blue-600 transition-colors duration-300">
        Explore Campus
        <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
      </button>
    </div>
  </motion.div>
</div>

        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <button
                className="absolute -top-12 right-0 text-white p-2 z-10 hover:text-blue-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={30} />
              </button>
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-300">{selectedImage.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Styles */}
      <style jsx>{`
        .pattern-grid-lg {
          background-image: linear-gradient(to right, #3b82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3b82f6 1px, transparent 1px);
          background-size: 40px 40px;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        .animate-pulse {
          animation: pulse 4s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
