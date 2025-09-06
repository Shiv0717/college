"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Quote, ChevronLeft, ChevronRight, GraduationCap, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const alumniData = [
  {
    name: "Sakshi",
    batch: "B.Tech Civil, 2024",
    role: "Fail - Exam; BSP Valuation work, Maple Architect",
    img: "https://plus.unsplash.com/premium_photo-1682431850447-0318570fcdec?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "KEC gave me the foundation and confidence to pursue my dream career in civil engineering.",
    linkedin: "#",
    rating: 5
  },
  {
    name: "Amisha Ramteke",
    batch: "B.Tech Civil, 2023",
    role: "Raipur Ultratech",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "The practical exposure at KEC Bhilai prepared me for real-world construction challenges.",
    linkedin: "#",
    rating: 4
  },
  {
    name: "Arpit Kumar Mishra",
    batch: "B.Tech Civil, 2023",
    role: "Kalptaru Projects KPIL",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "With the right mentorship, I developed strong technical and leadership skills at KEC.",
    linkedin: "#",
    rating: 5
  },
  {
    name: "Aryan Dewangan",
    batch: "B.Tech Civil, 2023",
    role: "Works in PWD Adhoc",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "The academic environment at KEC encouraged innovation and problem-solving.",
    linkedin: "#",
    rating: 4
  },
  {
    name: "Bhavna",
    batch: "B.Tech Civil, 2023",
    role: "Sarthi Associates, Raipur",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=2186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "My journey at KEC shaped my professional and personal growth equally.",
    linkedin: "#",
    rating: 5
  },
  {
    name: "Fanendra Dewangan",
    batch: "B.Tech Civil, 2023",
    role: "Site Engineer, Utopia Durg",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "KEC provided me with industry exposure that was vital for my career.",
    linkedin: "#",
    rating: 4
  }
];

const AlumniSection = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={14}
        className={index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
            <GraduationCap className="h-4 w-4 mr-2" />
            Alumni Success Stories
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Alumni <span className="text-blue-600">Speak</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates about their experiences at Krishna Engineering College 
            and how it shaped their successful careers.
          </p>
        </motion.div>

        {/* Swiper Container */}
        <div className="relative ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".alumni-swiper-button-next",
              prevEl: ".alumni-swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".alumni-pagination",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="pb-12 "
          >
            {alumniData.map((alumni, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-6 rounded-xl  shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col"
                >
                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {renderStars(alumni.rating)}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6 flex-grow">
                    <Quote className="absolute -top-3 left-0 w-6 h-6 text-blue-200" />
                    <p className="text-gray-700 text-sm italic pl-6">
                      "{alumni.quote}"
                    </p>
                  </div>

                  {/* Alumni Info */}
                  <div className="flex items-center border-t border-gray-100 pt-4">
                    <img
                      src={alumni.img}
                      alt={alumni.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">{alumni.name}</h3>
                      <p className="text-sm text-blue-600">{alumni.batch.split(',')[0]}</p>
                      <p className="text-xs text-gray-500 mt-1">{alumni.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="alumni-swiper-button-prev absolute top-1/2 -left-4 z-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors hidden md:block">
            <ChevronLeft className="w-5 h-5 text-blue-600" />
          </button>
          <button className="alumni-swiper-button-next absolute top-1/2 -right-4 z-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors hidden md:block">
            <ChevronRight className="w-5 h-5 text-blue-600" />
          </button>

          {/* Custom Pagination */}
          <div className="alumni-pagination flex justify-center space-x-2 mt-6" />
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md">
            View All Alumni Stories
          </button>
        </div>
      </div>

      <style jsx global>{`
        .alumni-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 0.7;
        }
        .alumni-pagination .swiper-pagination-bullet-active {
          background: #2563eb;
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
        .swiper-slide {
          height: auto;
        }
        .swiper-wrapper {
         margin-bottom: 10px;
      `}</style>
    </section>
  );
};

export default AlumniSection;