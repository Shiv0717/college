"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, BookOpen, Clock, Award } from "lucide-react";
import { useInView } from "framer-motion";
import { motion, useAnimation } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Computer Science & Engineering",
    code: "CSE",
    duration: "4 Years",
    credits: 160,
    image: "https://www.kecbhilai.com/images/pc1.jpg",
    description:
      "The CSE department covers core computing topics such as software development.",
    color: "bg-orange-500 text-orange-500",
  },
  {
    id: 2,
    title: "Electrical Engineering",
    code: "EEE",
    duration: "4 Years",
    credits: 160,
    image: "https://www.kecbhilai.com/images/pc3.jpg",
    description:
      "Electrical Engineering focuses on power systems, electrical machines, renewable energy, and control systems.",
    color: "bg-yellow-500 text-yellow-500",
  },
  {
    id: 3,
    title: "Mechanical Engineering",
    code: "ME",
    duration: "4 Years",
    credits: 160,
    image: "https://www.kecbhilai.com/images/pc4.jpg",
    description:
      "Covers thermal sciences, design, manufacturing processes, and robotics with a focus on practical exposure.",
    color: "bg-green-500 text-green-500",
  },
  {
    id: 4,
    title: "Civil Engineering",
    code: "CE",
    duration: "4 Years",
    credits: 160,
    image: "https://www.kecbhilai.com/images/pc2.jpg",
    description:
      "Covers structural engineering, construction technologies, environmental design, and sustainable infrastructure.",
    color: "bg-blue-500 text-blue-500",
  },
  {
    id: 5,
    title: "Electronics & Communication",
    code: "ECE",
    duration: "4 Years",
    credits: 160,
    image:
      "https://images.unsplash.com/photo-1581094288338-231b058b38b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description:
      "Focuses on electronic circuits, communication systems, signal processing, and embedded systems.",
    color: "bg-purple-500 text-purple-500",
  },
  {
    id: 6,
    title: "Information Technology",
    code: "IT",
    duration: "4 Years",
    credits: 160,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description:
      "Emphasizes information systems, networking, cybersecurity, and data management technologies.",
    color: "bg-pink-500 text-pink-500",
  },
];

// Helper component for animating letters
const AnimatedText = ({ text, className, delay = 0 }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// New StaggeredFade component (letter fade-in one-by-one)
const StaggeredFade = ({ text, className = "" }) => {
  const letters = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-flex overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const CoursesSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 80,
      },
    },
  };

  const slideInVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.5,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 py-20 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative elements with animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-0 w-72 h-72 bg-orange-100 rounded-full -translate-x-1/2 -translate-y-1/2"
      ></motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full translate-x-1/3 translate-y-1/3"
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left Section */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="md:w-2/5"
          >
            <motion.div
              variants={itemVariants}
              className="text-4xl font-bold mb-6 leading-tight text-gray-900"
            >
              <StaggeredFade text="Explore Our " />
              <StaggeredFade text="Academic Programs" className="text-orange-500" delay={0.2} />
            </motion.div>

            {/* Added StaggeredFade here */}
            <motion.div variants={itemVariants} className="mb-6 text-lg text-gray-700">
              <StaggeredFade text="Welcome to our Engineering Programs" />
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-600 mb-8 text-lg">
              Discover opportunities for learning, research, and innovation across our diverse engineering disciplines.
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-0.5 bg-orange-500"></div>
             
              <StaggeredFade text="Scroll to explore" className="text-sm text-gray-500" delay={0.2} />
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants} className="flex space-x-4">
              <button
                ref={prevRef}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-orange-500 border border-gray-200 shadow-sm hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                ref={nextRef}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-orange-500 border border-gray-200 shadow-sm hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Swiper */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={slideInVariants}
            className="md:w-3/5 w-full"
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              spaceBetween={24}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 1 },
                1280: { slidesPerView: 1.5 },
              }}
            >
              {courses.map((course, index) => (
                <SwiperSlide key={course.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className="bg-white mb-3 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={course.image}
                        alt={course.title}
                        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                        className={`absolute top-4 left-4 ${course.color.split(" ")[0]} text-white text-xs font-bold px-3 py-1 rounded-full`}
                      >
                        {course.code}
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors"
                      >
                        {course.title}
                      </motion.h3>

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center space-x-4 mb-4"
                      >
                        <div className={`flex items-center text-sm text-gray-600`}>
                          <Clock size={16} className={`mr-1 ${course.color.split(" ")[1]}`} />
                          {course.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Award size={16} className={`mr-1 ${course.color.split(" ")[1]}`} />
                          {course.credits} Credits
                        </div>
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-gray-600 text-sm mb-5 leading-relaxed"
                      >
                        {course.description}
                      </motion.p>

                      <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className={`flex items-center font-semibold text-sm ${course.color.split(" ")[1]} hover:underline`}
                      >
                        <BookOpen size={16} className="mr-2" />
                        Program Details
                      </motion.button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSlider;
