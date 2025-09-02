"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Quote, ChevronLeft, ChevronRight,GraduationCap } from "lucide-react";
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
    img: "/images/alumni1.jpg",
    quote: "KEC gave me the foundation and confidence to pursue my dream career in civil engineering.",
    linkedin: "#"
  },
  {
    name: "Amisha Ramteke",
    batch: "B.Tech Civil, 2023",
    role: "Raipur Ultratech",
    img: "/images/alumni2.jpg",
    quote: "The practical exposure at KEC Bhilai prepared me for real-world construction challenges.",
    linkedin: "#"
  },
  {
    name: "Arpit Kumar Mishra",
    batch: "B.Tech Civil, 2023",
    role: "Kalptaru Projects KPIL",
    img: "/images/alumni3.jpg",
    quote: "With the right mentorship, I developed strong technical and leadership skills at KEC.",
    linkedin: "#"
  },
  {
    name: "Aryan Dewangan",
    batch: "B.Tech Civil, 2023",
    role: "Works in PWD Adhoc",
    img: "/images/alumni4.jpg",
    quote: "The academic environment at KEC encouraged innovation and problem-solving.",
    linkedin: "#"
  },
  {
    name: "Bhavna",
    batch: "B.Tech Civil, 2023",
    role: "Sarthi Associates, Raipur",
    img: "/images/alumni5.jpg",
    quote: "My journey at KEC shaped my professional and personal growth equally.",
    linkedin: "#"
  },
  {
    name: "Fanendra Dewangan",
    batch: "B.Tech Civil, 2023",
    role: "Site Engineer, Utopia Durg",
    img: "/images/alumni6.jpg",
    quote: "KEC provided me with industry exposure that was vital for my career.",
    linkedin: "#"
  },
  {
    name: "Hitesh Kumar Chandel",
    batch: "B.Tech Civil, 2023",
    role: "Swami Constructions, Raipur",
    img: "/images/alumni7.jpg",
    quote: "The faculty support and hands-on labs made me industry ready.",
    linkedin: "#"
  },
  {
    name: "Revendra Hirwanee",
    batch: "B.Tech Civil, 2023",
    role: "Chandak & Sharda Associates, Durg",
    img: "/images/alumni8.jpg",
    quote: "KEC Bhilai laid a strong base for my technical expertise in surveying.",
    linkedin: "#"
  },
  {
    name: "Vinod Kumar Kosariya",
    batch: "B.Tech Civil, 2023",
    role: "Green Earth Solution Ltd., Raipur",
    img: "/images/alumni9.jpg",
    quote: "The environment at KEC motivated me to excel in my field.",
    linkedin: "#"
  },
  {
    name: "Dhanraj Soni",
    batch: "B.Tech Electrical, 2023",
    role: "RR Ispat, Hira Group",
    img: "/images/alumni10.jpg",
    quote: "KEC’s practical training sessions gave me confidence in handling power systems.",
    linkedin: "#"
  },
  {
    name: "Amitesh Sharma",
    batch: "B.Tech Mechanical",
    role: "Mechanical Design Engineer",
    img: "/images/alumni11.jpg",
    quote: "KEC inspired me to think innovatively and pursue design engineering.",
    linkedin: "#"
  },
  {
    name: "Rahul Kumar",
    batch: "B.Tech Mechanical",
    role: "Production Engineer",
    img: "/images/alumni12.jpg",
    quote: "The mechanical workshops at KEC played a key role in my career journey.",
    linkedin: "#"
  },
  {
    name: "Rupendra",
    batch: "B.Tech Civil",
    role: "Civil Site Engineer",
    img: "/images/alumni13.jpg",
    quote: "KEC Bhilai gave me opportunities to learn beyond textbooks.",
    linkedin: "#"
  },
  {
    name: "Yogeshraj Sahu",
    batch: "B.Tech Civil",
    role: "Infrastructure Engineer",
    img: "/images/alumni14.jpg",
    quote: "My time at KEC helped me gain both skills and confidence to succeed.",
    linkedin: "#"
  }
];



const AlumniSection = () => {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-blue-100 py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      {/* Tagline pill */}
      <div className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700 mb-4">
        <GraduationCap className="h-4 w-4 mr-2" />
        Our Alumni
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Our Proud <span className="text-blue-900">Alumni</span>
      </h2>

      {/* Subtitle */}
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
            className="pb-12 "
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
                      src={'https://plus.unsplash.com/premium_photo-1682431850447-0318570fcdec?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                      alt={alumni.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-blue-200"
                    />
                   <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
  {alumni.batch.includes(",")
    ? alumni.batch.split(",")[1].trim()
    : alumni.batch.replace("B.Tech", "").trim()}
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