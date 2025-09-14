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

// ✅ Framer Motion Variants
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const alumniData = [
  {
    name: "Sakshi",
    batch: "B.Tech Civil, 2024",
    role: "Fail - Exam; BSP Valuation work, Maple Architect",
    img: "https://plus.unsplash.com/premium_photo-1682431850447-0318570fcdec?q=80&w=2144&auto=format&fit=crop",
    quote:
      "KEC gave me the foundation and confidence to pursue my dream career in civil engineering.",
    rating: 5,
    company: "BSP Valuation",
    location: "Raipur, India",
  },
  {
    name: "Amisha Ramteke",
    batch: "B.Tech Civil, 2023",
    role: "Raipur Ultratech",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop",
    quote:
      "The practical exposure at KEC Bhilai prepared me for real-world construction challenges.",
    rating: 4,
    company: "Ultratech Cement",
    location: "Raipur, India",
  },
  {
    name: "Arpit Kumar Mishra",
    batch: "B.Tech Civil, 2023",
    role: "Kalptaru Projects KPIL",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop",
    quote:
      "With the right mentorship, I developed strong technical and leadership skills at KEC.",
    rating: 5,
    company: "Kalptaru Projects",
    location: "Mumbai, India",
  },
  {
    name: "Aryan Dewangan",
    batch: "B.Tech Civil, 2023",
    role: "Works in PWD Adhoc",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2187&auto=format&fit=crop",
    quote:
      "The academic environment at KEC encouraged innovation and problem-solving.",
    rating: 4,
    company: "PWD",
    location: "Bhilai, India",
  },
  {
    name: "Bhavna",
    batch: "B.Tech Civil, 2023",
    role: "Sarthi Associates, Raipur",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=2186&auto=format&fit=crop",
    quote:
      "My journey at KEC shaped my professional and personal growth equally.",
    rating: 5,
    company: "Sarthi Associates",
    location: "Raipur, India",
  },
  {
    name: "Fanendra Dewangan",
    batch: "B.Tech Civil, 2023",
    role: "Site Engineer, Utopia Durg",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2187&auto=format&fit=crop",
    quote:
      "KEC provided me with industry exposure that was vital for my career.",
    rating: 4,
    company: "Utopia Construction",
    location: "Durg, India",
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
      {/* Header Animation */}
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

      {/* Swiper with motion container */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="alumni-swiper"
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            {alumniData.map((alumni, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm h-full flex flex-col transition-all duration-300 mx-auto max-w-xs"
                >
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

                  <div className="flex justify-center mb-4">
                    {renderStars(alumni.rating)}
                  </div>

                  <div className="relative mb-5">
                    <Quote className="absolute -top-2 left-0 w-5 h-5 text-blue-100" />
                    <p className="text-gray-700 text-sm italic pl-5 leading-relaxed">
                      "{alumni.quote}"
                    </p>
                  </div>

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
        </motion.div>
      </div>

      {/* Swiper Custom Styles */}
      <style jsx>{`
        .alumni-swiper {
          padding-bottom: 50px;
        }

        .swiper-slide {
          background-position: center;
          background-size: cover;
          height: auto;
          display: flex;
          justify-content: center;
        }

        .swiper-3d .swiper-slide-shadow-left,
        .swiper-3d .swiper-slide-shadow-right {
          background-image: none;
        }

        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 0.7;
          transition: transform 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #2563eb;
          opacity: 1;
          transform: scale(1.3);
        }

        @media (min-width: 1024px) {
          .swiper-slide {
            width: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default AlumniSection;
