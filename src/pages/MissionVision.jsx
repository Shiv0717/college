"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, BookOpen, Users, Globe, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const MissionVision = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const items = [
    {
      id: 1,
      title: "Our Mission",
      desc: "To provide world-class technical education, foster innovation, and nurture ethical engineers who contribute to society with excellence, responsibility, and leadership.",
      icon: <Target className="w-10 h-10 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "Deliver industry-relevant curriculum with hands-on learning",
        "Foster research and innovation through state-of-the-art labs",
        "Develop ethical professionals with strong leadership qualities",
        "Create industry partnerships for real-world experience"
      ]
    },
    {
      id: 2,
      title: "Our Vision",
      desc: "To be a premier institution of engineering and technology, recognized globally for academic excellence, cutting-edge research, and transformative learning that empowers future leaders.",
      icon: <Eye className="w-10 h-10 text-pink-600" />,
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "Achieve top rankings among engineering institutions nationally",
        "Establish centers of excellence in emerging technologies",
        "Foster global collaborations with leading universities",
        "Produce graduates who become industry leaders and innovators"
      ]
    },
    {
      id: 3,
      title: "Our Values",
      desc: "We are committed to excellence, integrity, innovation, and inclusivity in everything we do, creating an environment where both students and faculty can thrive.",
      icon: <Star className="w-10 h-10 text-amber-600" />,
      image: "https://images.unsplash.com/photo-1524178232400-38d816f003ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "Excellence in teaching, research, and innovation",
        "Integrity and ethical conduct in all endeavors",
        "Inclusivity and diversity in our community",
        "Collaboration across disciplines and industries"
      ]
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-indigo-600">Guiding Principles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the core values that drive Krishna Engineering College towards excellence in education and innovation
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.3, duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-16 mb-28 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div 
                className="w-full h-96 relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-sm">Explore {item.title.toLowerCase()}</span>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <motion.div 
                  className="flex items-center mb-6"
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="p-3 bg-indigo-100 rounded-xl shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 ml-4">
                    {item.title}
                  </h3>
                </motion.div>
                
                <motion.p 
                  className="text-gray-700 text-lg mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  {item.desc}
                </motion.p>
                
                <motion.ul 
                  className="mb-8 space-y-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                >
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                      </div>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </motion.ul>
                
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 w-max bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition-colors flex items-center group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-xl p-6 mb-8"
            >
              <div className="w-full h-64 relative rounded-2xl overflow-hidden mb-6">
                <img
                  src={items[activeIndex].image}
                  alt={items[activeIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  {items[activeIndex].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">
                  {items[activeIndex].title}
                </h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                {items[activeIndex].desc}
              </p>
              
              <ul className="mb-6 space-y-2">
                {items[activeIndex].details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                    </div>
                    <span className="text-gray-600 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
              
              <button className="px-5 py-2.5 w-full bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors flex items-center justify-center group">
                Learn More 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex justify-between items-center">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <div className="flex space-x-2">
              {items.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${activeIndex === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white rounded-3xl shadow-lg p-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">5000+</h3>
            <p className="text-gray-600">Successful Alumni</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
            <p className="text-gray-600">Programs Offered</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
            <p className="text-gray-600">Global Partnerships</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;