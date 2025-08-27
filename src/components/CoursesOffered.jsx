"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Clock, Users, Award, ChevronDown, 
  Code, Cpu, Building, Zap, ArrowLeft, ArrowRight,
  Target, Bookmark, Calendar, UserCheck
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CoursesOffered = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const engineeringDepartments = {
    cse: { 
      name: "Computer Science & Engineering", 
      icon: <Code className="w-5 h-5" />, 
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    ece: { 
      name: "Electronics & Communication Engg.", 
      icon: <Cpu className="w-5 h-5" />, 
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    },
    mech: { 
      name: "Mechanical Engineering", 
      icon: <Zap className="w-5 h-5" />, 
      color: "from-red-500 to-red-700",
      bgColor: "bg-red-50",
      textColor: "text-red-700"
    },
    civil: { 
      name: "Civil Engineering", 
      icon: <Building className="w-5 h-5" />, 
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
  };

  const courses = [
    {
      id: 1,
      title: "Advanced Algorithms",
      code: "CSE501",
      department: "cse",
      credits: 4,
      duration: "15 weeks",
      seats: 30,
      enrolled: 28,
      image: "/images/courses/algorithms.jpg",
      description: "Study of advanced algorithm design techniques and analysis. Topics include dynamic programming, greedy algorithms, graph algorithms, and NP-completeness.",
      outcomes: ["Design efficient algorithms", "Analyze algorithm complexity", "Solve complex computational problems"],
      prerequisites: ["Data Structures", "Discrete Mathematics"],
      instructor: "Dr. Sarah Johnson",
      schedule: "Mon, Wed, Fri - 10:00 AM"
    },
    {
      id: 2,
      title: "Digital Signal Processing",
      code: "ECE502",
      department: "ece",
      credits: 3,
      duration: "14 weeks",
      seats: 25,
      enrolled: 22,
      image: "/images/courses/dsp.jpg",
      description: "Theory and application of digital signal processing techniques. Covers discrete-time signals, Z-transform, filter design, and Fourier analysis.",
      outcomes: ["Design digital filters", "Analyze signal systems", "Implement DSP algorithms"],
      prerequisites: ["Signals and Systems", "Engineering Mathematics"],
      instructor: "Prof. Michael Chen",
      schedule: "Tue, Thu - 2:00 PM"
    },
    {
      id: 3,
      title: "Thermodynamics",
      code: "MECH503",
      department: "mech",
      credits: 4,
      duration: "16 weeks",
      seats: 35,
      enrolled: 32,
      image: "/images/courses/thermodynamics.jpg",
      description: "Fundamental principles of energy conversion and transfer. Study of laws of thermodynamics and their engineering applications.",
      outcomes: ["Analyze thermal systems", "Apply thermodynamic principles", "Design energy systems"],
      prerequisites: ["Physics", "Calculus"],
      instructor: "Dr. Robert Williams",
      schedule: "Mon, Wed, Fri - 1:00 PM"
    },
  ];

  const toggleCourseExpand = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text ">
            <span className="text-4xl text-gray-900">Engineering </span> Courses Offered
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive engineering programs designed to prepare students for successful careers in technology and innovation.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{ 
              clickable: true,
              el: '.custom-pagination',
              type: 'bullets',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 1.2,
                centeredSlides: true,
              },
            }}
            className="w-full pb-12"
          >
            {courses.map((course) => {
              const dept = engineeringDepartments[course.department];
              const progressPercentage = (course.enrolled / course.seats) * 100;
              
              return (
                <SwiperSlide key={course.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white mb-4 rounded-2xl shadow-xl overflow-hidden border border-gray-100 grid grid-cols-1 lg:grid-cols-2"
                  >
                    {/* Left: Image with Department Badge */}
                    <div className="relative h-72 lg:h-auto ">
                     <img src="https://www.kecbhilai.com/images/pc1.jpg" className="w-full h-full"></img>
                    </div>

                    {/* Right: Content */}
                    <div className="p-6 flex flex-col">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                            <p className="text-gray-500">{course.code}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${dept.bgColor} ${dept.textColor}`}>
                            {course.credits} Credits
                          </span>
                        </div>

                        <p className="text-gray-600 mb-5">{course.description}</p>

                        <div className="grid grid-cols-2 gap-4 mb-5">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock size={16} className="text-gray-400" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <UserCheck size={16} className="text-gray-400" />
                            <span>{course.enrolled}/{course.seats} Enrolled</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar size={16} className="text-gray-400" />
                            <span>{course.schedule}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users size={16} className="text-gray-400" />
                            <span>Taught by {course.instructor}</span>
                          </div>
                        </div>

                        {/* Enrollment Progress Bar */}
                        <div className="mb-5">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Class Capacity</span>
                            <span>{Math.round(progressPercentage)}% Full</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${dept.color}`}
                              style={{ width: `${progressPercentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Expand Button */}
                      <div>
                        <button
                          onClick={() => toggleCourseExpand(course.id)}
                          className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-900 transition-all"
                        >
                          <span>{expandedCourse === course.id ? "Hide Details" : "View Course Details"}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${expandedCourse === course.id ? "rotate-180" : ""}`}
                          />
                        </button>

                        <AnimatePresence>
                          {expandedCourse === course.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-gray-200"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <Target size={16} />
                                    Learning Outcomes
                                  </h4>
                                  <ul className="text-sm text-gray-600 space-y-1">
                                    {course.outcomes.map((outcome, i) => (
                                      <li key={i} className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        {outcome}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <Bookmark size={16} />
                                    Prerequisites
                                  </h4>
                                  <ul className="text-sm text-gray-600 space-y-1">
                                    {course.prerequisites.map((prereq, i) => (
                                      <li key={i} className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        {prereq}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <button className="w-full mt-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-800 transition-all">
                                Enroll Now
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Arrows */}
          <button className="custom-prev absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all">
            <ArrowLeft size={24}/>
          </button>
          <button className="custom-next absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all">
            <ArrowRight size={24}/>
          </button>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center gap-2 mt-6"></div>
        </div>

        {/* Empty State */}
        {courses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 bg-white rounded-2xl shadow-sm"
          >
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No courses available</h3>
            <p className="text-gray-500">Check back later for new course offerings.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CoursesOffered;