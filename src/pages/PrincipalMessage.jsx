"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, Award, GraduationCap, BookOpen, Mail, Calendar, ArrowRight } from "lucide-react";

const PrincipalMessage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const controls = useAnimation();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
            <Quote className="w-8 h-8 text-blue-700" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
          >
            Message from the Principal
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-blue-700 max-w-3xl mx-auto"
          >
            Words of wisdom and guidance from our esteemed Principal
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Principal Image */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className="relative flex-shrink-0 w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl mx-auto lg:mx-0"
          >
            <img
              src="https://media.istockphoto.com/id/1364388476/photo/headshot-of-multiracial-male-educator-standing-outdoors.jpg?s=612x612&w=0&k=20&c=B8EIA7VqGbbk1trLIkzeL6M6jfZ_ZwuqYip7Gj_tml4="
              alt="Dr. Anand Kumar Tripathi, Principal"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-sm font-medium">Dr. Anand Kumar Tripathi</span>
            </div>
            
            {/* Decorative badge */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-4">
                <Quote className="w-5 h-5 text-blue-700 mr-2" />
                <span className="text-blue-700 font-medium">Principal's Message</span>
              </div>
              
              <p className={`text-gray-800 text-lg leading-relaxed mb-4 ${isExpanded ? '' : 'line-clamp-5'}`}>
                "At Krishna Engineering College, our mission is to foster innovation,
                excellence, and ethical leadership in our students. We are committed
                to providing world-class education and nurturing future-ready engineers
                who will make a positive impact on society. Our institution stands as a 
                beacon of knowledge, where we blend traditional values with modern 
                technological advancements to create a holistic learning environment."
              </p>
              
              {!isExpanded && (
                <button 
                  onClick={() => setIsExpanded(true)}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center justify-center lg:justify-start mx-auto lg:mx-0"
                >
                  Read more <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              )}
              
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-gray-800 text-lg leading-relaxed mb-4">
                    "Our dedicated faculty, state-of-the-art infrastructure, and industry 
                    partnerships ensure that our students receive not just education, but an 
                    experience that shapes their character and professional capabilities. 
                    We take pride in seeing our graduates excel in diverse fields across the globe, 
                    carrying forward the legacy of excellence that defines Krishna Engineering College."
                  </p>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    "I invite you to join our vibrant academic community and embark on a 
                    journey of discovery, innovation, and personal growth."
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Name & Designation */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-1">Dr. Anand Kumar Tripathi</h3>
              <p className="text-blue-800 font-medium mb-2">Principal, Krishna Engineering College</p>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="flex items-center text-sm text-blue-700">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  <span>Ph.D. in Electrical Engineering</span>
                </div>
                <div className="flex items-center text-sm text-blue-700">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>15+ Years of Experience</span>
                </div>
              </div>
            </motion.div>

            {/* Signature and CTA */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            
              
              <motion.a
                href="mailto:principal@krishnaengineering.edu.in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-5 py-2.5 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Principal
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Principal's Achievements */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-md border border-blue-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-blue-700" />
            </div>
            <h4 className="font-semibold text-blue-900 mb-2">25+ Publications</h4>
            <p className="text-gray-600 text-sm">In international journals and conferences</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-md border border-blue-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-blue-700" />
            </div>
            <h4 className="font-semibold text-blue-900 mb-2">10 Awards</h4>
            <p className="text-gray-600 text-sm">For excellence in education and research</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-md border border-blue-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-blue-700" />
            </div>
            <h4 className="font-semibold text-blue-900 mb-2">5 Patents</h4>
            <p className="text-gray-600 text-sm">In innovative engineering solutions</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrincipalMessage;