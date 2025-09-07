


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { GraduationCap, Star } from "lucide-react";
import {
  Linkedin,
  Quote,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  MapPin,
} from "lucide-react";
// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const alumniData = [
  {
    name: "Sakshi",
    batch: "B.Tech Civil, 2024",
    role: "Fail - Exam; BSP Valuation work, Maple Architect",
    img: "https://plus.unsplash.com/premium_photo-1682431850447-0318570fcdec?q=80&w=2144&auto=format&fit=crop",
    quote:
      "KEC gave me the foundation and confidence to pursue my dream career in civil engineering.",
    rating: 5,
  },
  {
    name: "Amisha Ramteke",
    batch: "B.Tech Civil, 2023",
    role: "Raipur Ultratech",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop",
    quote:
      "The practical exposure at KEC Bhilai prepared me for real-world construction challenges.",
    rating: 4,
  },
  {
    name: "Arpit Kumar Mishra",
    batch: "B.Tech Civil, 2023",
    role: "Kalptaru Projects KPIL",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop",
    quote:
      "With the right mentorship, I developed strong technical and leadership skills at KEC.",
    rating: 5,
  },
  {
    name: "Aryan Dewangan",
    batch: "B.Tech Civil, 2023",
    role: "Works in PWD Adhoc",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2187&auto=format&fit=crop",
    quote:
      "The academic environment at KEC encouraged innovation and problem-solving.",
    rating: 4,
  },
  {
    name: "Bhavna",
    batch: "B.Tech Civil, 2023",
    role: "Sarthi Associates, Raipur",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=2186&auto=format&fit=crop",
    quote:
      "My journey at KEC shaped my professional and personal growth equally.",
    rating: 5,
  },
  {
    name: "Fanendra Dewangan",
    batch: "B.Tech Civil, 2023",
    role: "Site Engineer, Utopia Durg",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2187&auto=format&fit=crop",
    quote:
      "KEC provided me with industry exposure that was vital for my career.",
    rating: 4,
  },
];

const AlumniSection = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
          <GraduationCap className="h-4 w-4 mr-2" />
          Alumni Success Stories
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Where Our <span className="text-blue-600">Graduates</span> Shine
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Hear from our accomplished alumni about their journey at Krishna
          Engineering College and how it paved the way for their successful
          careers.
        </p>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-4">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          
          spaceBetween={50}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="alumni-swiper"
        >
          {alumniData.map((alumni, index) => (
            <SwiperSlide
              key={index}
              className="!w-[260px] sm:!w-[300px] md:!w-[340px]"
            >
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm h-full flex flex-col transition-all duration-300"
              >
                {/* Profile section with image and basic info */}
                <div className="flex flex-col items-center text-center mb-5">
                  <div className="relative mb-4">
                    <img
                      src={alumni.img}
                      alt={alumni.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-blue-50 shadow-md"
                    />
                    
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {alumni.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mt-1">
                    {alumni.batch}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 bg-gray-50 px-3 py-1 rounded-full">
                    {alumni.role}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {renderStars(alumni.rating)}
                </div>

                {/* Quote with decorative elements */}
                <div className="relative mb-5">
                  <Quote className="absolute -top-2 left-0 w-5 h-5 text-blue-100" />
                  <p className="text-gray-700 text-sm italic pl-5 leading-relaxed">
                    "{alumni.quote}"
                  </p>
                </div>

                {/* Additional info */}
                <div className="mt-auto pt-4 border-t border-gray-100 text-xs text-gray-500 flex justify-between">
                  <span className="flex items-center">
                    <Briefcase className="w-3 h-3 mr-1" />
                    {alumni.company}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {alumni.location}
                  </span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .alumni-swiper {
          padding-bottom: 50px;
        }

        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 300px;
        }

        .swiper-3d .swiper-slide-shadow-left,
        .swiper-3d .swiper-slide-shadow-right {
          background-image: none;
        }

        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          background: #2563eb;
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};

export default AlumniSection;
