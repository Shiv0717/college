"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, BookOpen, Clock, Award } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Computer Science & Engineering",
    code: "CSE",
    duration: "4 Years",
    credits: 160,
    image: "https://www.kecbhilai.com/images/pc1.jpg",
    description:
      "The CSE department covers core computing topics such as software development, data structures, algorithms, and emerging areas like AI & ML.",
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
  },
  {
    id: 5,
    title: "Electronics & Communication",
    code: "ECE",
    duration: "4 Years",
    credits: 160,
    image: "https://images.unsplash.com/photo-1581094288338-231b058b38b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description:
      "Focuses on electronic circuits, communication systems, signal processing, and embedded systems.",
  },
  {
    id: 6,
    title: "Information Technology",
    code: "IT",
    duration: "4 Years",
    credits: 160,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description:
      "Emphasizes information systems, networking, cybersecurity, and data management technologies.",
  },
];

const CoursesSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-northeastern-red/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-northeastern-red/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left Section */}
          <div className="md:w-2/5">
            <h2 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
              Explore Our <span className="text-northeastern-red">Academic Programs</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Discover opportunities for learning, research, and innovation across our diverse engineering disciplines.
            </p>
            
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-0.5 bg-northeastern-red"></div>
              <span className="text-sm text-gray-500">Scroll to explore</span>
            </div>

            {/* Navigation */}
            <div className="flex space-x-4">
              <button ref={prevRef} className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-northeastern-red border border-gray-200 shadow-sm hover:bg-northeastern-red hover:text-white transition-all duration-300">
                <ChevronLeft size={24} />
              </button>
              <button ref={nextRef} className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-northeastern-red border border-gray-200 shadow-sm hover:bg-northeastern-red hover:text-white transition-all duration-300">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Right Swiper */}
          <div className="md:w-3/5 w-full">
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
                1024: { slidesPerView: 2.2 },
                1280: { slidesPerView: 2.5 },
              }}
            >
              {courses.map((course) => (
                <SwiperSlide key={course.id}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-northeastern-red text-white text-xs font-bold px-3 py-1 rounded-full">
                        {course.code}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-northeastern-red transition-colors">
                        {course.title}
                      </h3>
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock size={16} className="mr-1 text-northeastern-red" />
                          {course.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Award size={16} className="mr-1 text-northeastern-red" />
                          {course.credits} Credits
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                        {course.description}
                      </p>
                      
                      <button className="flex items-center text-northeastern-red font-semibold text-sm group-hover:underline">
                        <BookOpen size={16} className="mr-2" />
                        Program Details
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Custom CSS for Northeastern colors */}
      <style jsx>{`
        :root {
          --northeastern-red: #CC0000;
        }
        .text-northeastern-red {
          color: #CC0000;
        }
        .bg-northeastern-red {
          background-color: #CC0000;
        }
        .border-northeastern-red {
          border-color: #CC0000;
        }
      `}</style>
    </section>
  );
};

export default CoursesSlider;