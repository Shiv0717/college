"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Clock, Users, Award, ChevronDown, 
  Code, Cpu, Building, Zap, ArrowLeft, ArrowRight,
  Target, Bookmark, Calendar, UserCheck, GraduationCap,
  Mail, Phone, ExternalLink
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
      title: "Computer Science & Engineering",
      code: "CSE",
      department: "cse",
      credits: 160,
      duration: "4 Years",
      seats: 120,
      enrolled: 118,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "The Department of Computer Science & Engineering offers cutting-edge programs in software development, artificial intelligence, data science, and cybersecurity. Our curriculum is designed to prepare students for the rapidly evolving tech industry.",
      outcomes: ["Software Development", "AI & Machine Learning", "Data Science", "Cybersecurity", "Cloud Computing"],
      prerequisites: ["12th with PCM", "JEE Main/State Entrance", "Minimum 75% aggregate"],
      instructor: "Dr. Rajesh Kumar",
      schedule: "Full-time Program",
      popularity: "98%",
      programs: ["B.Tech CSE", "M.Tech CSE", "B.Tech AI & ML"]
    },
    {
      id: 2,
      title: "Electronics & Communication Engineering",
      code: "ECE",
      department: "ece",
      credits: 160,
      duration: "4 Years",
      seats: 90,
      enrolled: 88,
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "The ECE department focuses on electronics, communication systems, signal processing, and embedded systems. We provide hands-on experience with state-of-the-art equipment and industry collaborations.",
      outcomes: ["VLSI Design", "Communication Systems", "Embedded Systems", "Signal Processing", "IoT Technologies"],
      prerequisites: ["12th with PCM", "JEE Main/State Entrance", "Minimum 70% aggregate"],
      instructor: "Dr. Priya Sharma",
      schedule: "Full-time Program",
      popularity: "95%",
      programs: ["B.Tech ECE", "M.Tech VLSI", "M.Tech Communication Systems"]
    },
    {
      id: 3,
      title: "Mechanical Engineering",
      code: "ME",
      department: "mech",
      credits: 160,
      duration: "4 Years",
      seats: 120,
      enrolled: 115,
      image: "https://plus.unsplash.com/premium_photo-1664297997167-88170c57bc35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Our Mechanical Engineering department offers comprehensive programs in thermal sciences, design engineering, manufacturing, and robotics. We emphasize practical learning and industry exposure.",
      outcomes: ["Thermal Engineering", "Design Engineering", "Manufacturing", "Robotics", "Automotive Systems"],
      prerequisites: ["12th with PCM", "JEE Main/State Entrance", "Minimum 70% aggregate"],
      instructor: "Dr. Amit Patel",
      schedule: "Full-time Program", 
      popularity: "96%",
      programs: ["B.Tech Mechanical", "M.Tech Thermal", "M.Tech Production"]
    },
    {
      id: 4,
      title: "Civil Engineering",
      code: "CE",
      department: "civil",
      credits: 160,
      duration: "4 Years",
      seats: 90,
      enrolled: 85,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "The Civil Engineering department focuses on structural engineering, construction technology, environmental engineering, and transportation systems. We build the foundations of modern infrastructure.",
      outcomes: ["Structural Engineering", "Construction Technology", "Environmental Engineering", "Transportation Systems", "Geotechnical Engineering"],
      prerequisites: ["12th with PCM", "JEE Main/State Entrance", "Minimum 70% aggregate"],
      instructor: "Dr. Sanjay Verma",
      schedule: "Full-time Program",
      popularity: "94%",
      programs: ["B.Tech Civil", "M.Tech Structural", "M.Tech Environmental"]
    },
  ];

  const toggleCourseExpand = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Tagline pill */}
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
            <GraduationCap className="h-4 w-4 mr-2" />
            Engineering Programs
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-900">Engineering Departments</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive engineering programs designed to prepare students 
            for successful careers in technology and innovation.
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
                    <div className="relative h-72 lg:h-auto">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-900">{course.enrolled}/{course.seats}</div>
                            <div className="text-xs text-gray-600">Seats Filled</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-900">{course.popularity}</div>
                            <div className="text-xs text-gray-600">Placement</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="p-6 flex flex-col">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                            <p className="text-gray-500">{course.code} Department</p>
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
                            <span>HOD: {course.instructor}</span>
                          </div>
                        </div>

                        {/* Programs Offered */}
                        <div className="mb-5">
                          <h4 className="font-semibold text-gray-900 mb-2">Programs Offered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {course.programs.map((program, i) => (
                              <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                {program}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Enrollment Progress Bar */}
                        <div className="mb-5">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Seat Availability</span>
                            <span>{Math.round(progressPercentage)}% Filled</span>
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
                          <span>{expandedCourse === course.id ? "Hide Details" : "View Department Details"}</span>
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
                                    Career Outcomes
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
                                    Eligibility
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
                              <button className={`w-full mt-4 py-2 bg-gradient-to-r ${dept.color} text-white rounded-lg font-medium hover:opacity-90 transition-all`}>
                                Apply Now
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
            <h3 className="text-xl font-medium text-gray-700 mb-2">No departments available</h3>
            <p className="text-gray-500">Check back later for department information.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CoursesOffered;