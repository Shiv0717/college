"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const alumniData = [
  {
    name: "Rohit Sharma",
    batch: "B.Tech CSE, 2012",
    role: "Senior Software Engineer at Microsoft",
    img: "/images/alumni1.jpg",
    quote:
      "Krishna Engineering College shaped my career by providing strong fundamentals and exposure to real-world projects. The faculty guidance was invaluable.",
    linkedin: "https://linkedin.com/in/rohitsharma",
  },
  {
    name: "Priya Verma",
    batch: "B.Tech ECE, 2015",
    role: "Product Manager at Google",
    img: "/images/alumni2.jpg",
    quote:
      "The vibrant campus life and academic excellence at KEC helped me grow not only as an engineer but also as a leader.",
    linkedin: "https://linkedin.com/in/priyaverma",
  },
  {
    name: "Amit Desai",
    batch: "B.Tech ME, 2010",
    role: "Founder & CEO, TechNova Solutions",
    img: "/images/alumni3.jpg",
    quote:
      "The entrepreneurial spirit I developed at KEC gave me the confidence to start my own company and scale it globally.",
    linkedin: "https://linkedin.com/in/amitdesai",
  },
  {
    name: "Neha Gupta",
    batch: "B.Tech CSE, 2017",
    role: "Data Scientist at Amazon",
    img: "/images/alumni4.jpg",
    quote:
      "The industry-relevant curriculum and hands-on projects at KEC prepared me perfectly for a career in data science.",
    linkedin: "https://linkedin.com/in/nehagupta",
  },
  {
    name: "Vikram Singh",
    batch: "B.Tech EEE, 2013",
    role: "Technical Lead at NVIDIA",
    img: "/images/alumni5.jpg",
    quote:
      "The technical clubs and workshops at KEC helped me discover my passion for hardware design and embedded systems.",
    linkedin: "https://linkedin.com/in/vikramsingh",
  },
];

const AlumniSection = () => {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-blue-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
            Our Proud Alumni
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3"></div>
          <p className="text-lg text-blue-800 mt-4 max-w-2xl mx-auto">
            Alumni of Krishna Engineering College have made their mark across
            the globe in diverse industries, from technology to entrepreneurship.
          </p>
        </motion.div>

        {/* Swiper Container */}
        <div className="relative ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
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
            className="pb-12 mt-5"
          >
            {alumniData.map((alumni, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-6  rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 relative h-full flex flex-col"
                >
                  {/* Alumni Image */}
                  <div className="relative mb-4">
                    <img
                      src={alumni.img}
                      alt={alumni.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-blue-200"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {alumni.batch.split(",")[1].trim()}
                    </div>
                  </div>

                  {/* Alumni Info */}
                  <h3 className="text-xl font-semibold text-blue-900 text-center mb-1">
                    {alumni.name}
                  </h3>
                  <p className="text-sm text-blue-700 text-center mb-2">
                    {alumni.batch}
                  </p>
                  <p className="text-sm text-gray-600 text-center mb-4 border-b border-blue-100 pb-4">
                    {alumni.role}
                  </p>

                  {/* Quote */}
                  <div className="bg-blue-50 p-4 rounded-lg text-gray-700 text-sm italic relative mb-4 flex-grow">
                    <Quote className="absolute -top-2 -left-2 w-5 h-5 text-blue-400 bg-white rounded-full p-1" />
                    {alumni.quote}
                  </div>

                  {/* LinkedIn */}
                  <div className="flex justify-center mt-auto">
                    <a
                      href={alumni.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      <Linkedin size={16} /> Connect on LinkedIn
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="alumni-swiper-button-prev absolute top-1/2 -left-4 z-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors hidden md:block">
            <ChevronLeft className="w-5 h-5 text-blue-900" />
          </button>
          <button className="alumni-swiper-button-next absolute top-1/2 -right-4 z-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors hidden md:block">
            <ChevronRight className="w-5 h-5 text-blue-900" />
          </button>

          {/* Custom Pagination */}
          <div className="alumni-pagination flex justify-center space-x-2 mt-6" />
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="bg-blue-900 text-white hover:bg-blue-800 px-6 py-3 rounded-full font-medium transition-colors shadow-md hover:shadow-lg">
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
          background: #1e40af;
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
        .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default AlumniSection;