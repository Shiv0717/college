"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Clock, Users, Award, ChevronDown, 
  Code, Cpu, Building, Zap, ArrowLeft, ArrowRight,
  Target, Bookmark, Calendar, UserCheck, GraduationCap,
  Mail, Phone, ExternalLink, Star, BarChart3
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
      textColor: "text-blue-700",
      borderColor: "border-blue-200"
    },
    eee: { 
      name: "Electrical Engineering", 
      icon: <Zap className="w-5 h-5" />, 
      color: "from-yellow-500 to-yellow-700",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      borderColor: "border-yellow-200"
    },
    mech: { 
      name: "Mechanical Engineering", 
      icon: <Cpu className="w-5 h-5" />, 
      color: "from-red-500 to-red-700",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      borderColor: "border-red-200"
    },
    civil: { 
      name: "Civil Engineering", 
      icon: <Building className="w-5 h-5" />, 
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      borderColor: "border-green-200"
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
      image: "https://www.kecbhilai.com/images/pc1.jpg",
      description: "The CSE department covers core computing topics such as software development, data structures, algorithms, and emerging areas like AI & ML.",
      outcomes: ["Software Development", "Data Analysis", "AI & ML", "Cybersecurity"],
      prerequisites: ["12th with PCM", "JEE Main / CG PET"],
      instructor: "Dr. Rajesh Kumar",
      schedule: "Full-time Program",
      placement: "95%",
      programs: ["B.E. CSE", "M.Tech CSE"],
      highlights: ["Industry Collaborations", "Research Opportunities", "Hackathons"]
    },
    {
      id: 2,
      title: "Electrical Engineering",
      code: "EEE",
      department: "eee",
      credits: 160,
      duration: "4 Years",
      seats: 60,
      enrolled: 48,
      image: "https://www.kecbhilai.com/images/pc3.jpg",
      description: "Electrical Engineering focuses on power systems, electrical machines, renewable energy, and control systems.",
      outcomes: ["Power Systems", "Electrical Machines", "Control Systems", "Renewable Energy"],
      prerequisites: ["12th with PCM", "JEE Main / CG PET"],
      instructor: "Dr. Sunil Verma",
      schedule: "Full-time Program",
      placement: "88%",
      programs: ["B.E. EEE"],
      highlights: ["Modern Labs", "Industry Projects", "Power Systems Simulation"]
    },
    {
      id: 3,
      title: "Mechanical Engineering",
      code: "ME",
      department: "mech",
      credits: 160,
      duration: "4 Years",
      seats: 30,
      enrolled: 30,
      image: "https://www.kecbhilai.com/images/pc4.jpg",
      description: "Covers thermal sciences, design, manufacturing processes, and robotics with a focus on practical exposure.",
      outcomes: ["Design Engineering", "Manufacturing", "Robotics", "Thermal Systems"],
      prerequisites: ["12th with PCM", "JEE Main / CG PET"],
      instructor: "Dr. Anil Sharma",
      schedule: "Full-time Program",
      placement: "92%",
      programs: ["B.E. Mechanical"],
      highlights: ["CAD/CAM Labs", "Automotive Research", "Industry Partnerships"]
    },
    {
      id: 4,
      title: "Civil Engineering",
      code: "CE",
      department: "civil",
      credits: 160,
      duration: "4 Years",
      seats: 60,
      enrolled: 55,
      image: "https://www.kecbhilai.com/images/pc2.jpg",
      description: "Covers structural engineering, construction technologies, environmental design, and sustainable infrastructure.",
      outcomes: ["Structural Design", "Construction Tech", "Environmental Engineering", "Transportation Systems"],
      prerequisites: ["12th with PCM", "JEE Main / CG PET"],
      instructor: "Dr. Priya Singh",
      schedule: "Full-time Program",
      placement: "85%",
      programs: ["B.E. Civil"],
      highlights: ["Structural Testing", "Concrete Technology", "GIS Applications"]
    },
  ];

  const toggleCourseExpand = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4 shadow-sm"
          >
            <GraduationCap className="h-4 w-4 mr-2" />
            Premier Engineering Programs
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-blue-600">Engineering Departments</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive engineering programs designed to shape future innovators 
            and leaders through cutting-edge curriculum, industry exposure, and hands-on learning.
          </p>
        </motion.div>

        {/* Stats Overview */}
        

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
              bulletClass: 'swiper-pagination-bullet bg-gray-300 opacity-60',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600 !opacity-100'
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.1,
              },
              1024: {
                slidesPerView: 1.2,
                centeredSlides: true,
              },
              1280: {
                slidesPerView: 1.3,
                centeredSlides: true,
              },
            }}
            className="w-full pb-16"
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
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden border ${dept.borderColor} grid grid-cols-1 lg:grid-cols-2`}
                  >
                    {/* Left: Image with Department Badge */}
                    <div className="relative h-72 lg:h-auto">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-900">{course.enrolled}/{course.seats}</div>
                            <div className="text-xs text-gray-600">Seats Filled</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-900">{course.placement}</div>
                            <div className="text-xs text-gray-600">Placement</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${dept.bgColor} ${dept.textColor}`}>
                          {course.credits} Credits
                        </span>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="p-6 flex flex-col">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                            <p className="text-gray-500 flex items-center gap-1 mt-1">
                              {dept.icon}
                              <span>{course.code} Department</span>
                            </p>
                          </div>
                          <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-xs font-medium ml-1">4.8</span>
                          </div>
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
                              <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200">
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
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full bg-gradient-to-r ${dept.color}`}
                              style={{ width: `${progressPercentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Expand Button */}
                      <div>
                        <button
                          onClick={() => toggleCourseExpand(course.id)}
                          className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800 transition-all shadow-md"
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
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <Target size={16} className="text-blue-600" />
                                    Career Outcomes
                                  </h4>
                                  <ul className="text-sm text-gray-600 space-y-2">
                                    {course.outcomes.map((outcome, i) => (
                                      <li key={i} className="flex items-start">
                                        <span className="text-green-500 mr-2 mt-1">•</span>
                                        {outcome}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <Bookmark size={16} className="text-blue-600" />
                                    Eligibility
                                  </h4>
                                  <ul className="text-sm text-gray-600 space-y-2">
                                    {course.prerequisites.map((prereq, i) => (
                                      <li key={i} className="flex items-start">
                                        <span className="text-blue-500 mr-2 mt-1">•</span>
                                        {prereq}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              
                              {/* Program Highlights */}
                              <div className="mt-4">
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <Award size={16} className="text-blue-600" />
                                  Program Highlights
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {course.highlights.map((highlight, i) => (
                                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100">
                                      {highlight}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="flex gap-3 mt-6">
                                <button className={`flex-1 py-3 bg-gradient-to-r ${dept.color} text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-md`}>
                                  Apply Now
                                </button>
                                <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all border border-gray-200">
                                  <ExternalLink size={16} />
                                </button>
                              </div>
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
          <button className="custom-prev absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all border border-gray-200">
            <ArrowLeft size={20}/>
          </button>
          <button className="custom-next absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all border border-gray-200">
            <ArrowRight size={20}/>
          </button>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center gap-2 mt-6"></div>
        </div>

        {/* CTA Section */}
        
      </div>
    </div>
  );
};

export default CoursesOffered;