"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { GraduationCap, Users, Award, Building2, BookOpen, Globe, ChevronRight, ZoomIn, X } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);

  const stats = [
    { 
      id: 1, 
      value: 50, 
      suffix: "+", 
      label: "Years of Excellence", 
      icon: Award,
      color: "text-blue-600"
    },
    { 
      id: 2, 
      value: 15000, 
      suffix: "+", 
      label: "Alumni Network", 
      icon: Users,
      color: "text-green-600"
    },
    { 
      id: 3, 
      value: 200, 
      suffix: "+", 
      label: "Expert Faculty", 
      icon: GraduationCap,
      color: "text-amber-600"
    },
    { 
      id: 4, 
      value: 100, 
      suffix: "+", 
      label: "Programs Offered", 
      icon: BookOpen,
      color: "text-purple-600"
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "University Campus Overview",
      title: "Main Campus",
      description: "Our beautiful 50-acre campus with state-of-the-art facilities"
    },
    {
      src: "https://www.kecbhilai.com/images/pc2.jpg",
      alt: "University Library",
      title: "Central Library",
      description: "Home to over 100,000 books and digital resources"
    },
    
    {
      src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Sports Complex",
      title: "Athletics Center",
      description: "Modern sports facilities for holistic development"
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column - Enhanced Gallery */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Main featured image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl mb-6 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(galleryImages[0])}
            >
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">{galleryImages[0].title}</h3>
                  <p className="text-blue-200 text-sm">{galleryImages[0].description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={20} />
              </div>
            </motion.div>

            {/* Gallery grid */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(1).map((image, idx) => (
                <motion.div
                  key={idx}
                  className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer h-40"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <h3 className="text-sm font-semibold">{image.title}</h3>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={16} />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl mt-3 mb-6 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(galleryImages[0])}
            >
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">{galleryImages[0].title}</h3>
                  <p className="text-blue-200 text-sm">{galleryImages[0].description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={20} />
              </div>
            </motion.div>

            {/* Gallery stats and CTA */}
            <motion.div
              className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-5 text-white flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Globe size={24} />
                </div>
                <div>
                  <div className="font-bold text-xl">25+ Global Partnerships</div>
                  <div className="text-blue-100 text-sm">Collaborating with top institutions worldwide</div>
                </div>
              </div>
              <button className="bg-white text-blue-600 font-medium py-2 px-4 rounded-lg flex items-center text-sm group hover:bg-blue-50 transition-colors">
                Virtual Tour
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-6">
              <div className="inline-flex items-center text-blue-600 font-medium text-sm uppercase tracking-wide mb-4 py-1 px-4 bg-blue-100 rounded-full">
                <Building2 size={16} className="mr-2" />
                About Our University
              </div>
              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
  <span className="text-blue-600">Krishna</span> Engineering College
</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Founded with a vision to transform education and empower future leaders, 
                our university has been at the forefront of academic excellence for over five decades. 
                We provide a vibrant learning environment that fosters innovation, critical thinking, 
                and global perspectives.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                      <stat.icon size={24} />
                    </div>
                  </div>
                  <h3 className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {isInView && (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
            >
              <h4 className="font-semibold text-gray-800 mb-2">Our Mission</h4>
              <p className="text-gray-600 text-sm">
                To provide quality education that prepares students for global challenges, 
                foster research and innovation, and contribute to societal development through 
                ethical practices and inclusive values.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button 
              className="absolute -top-12 right-0 text-white p-2 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold text-gray-900">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;