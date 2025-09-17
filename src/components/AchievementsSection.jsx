"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Award, Users, BookOpen, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Achievements data with descriptions
const achievements = [
  {
    number: "65+",
    label: "Years Experience",
    description: "We have over 65 years of combined experience in providing world-class education.",
    image: "https://picsum.photos/500/600?random=1",
    icon: <Award className="w-6 h-6" />,
  },
  {
    number: "100+",
    label: "Research Publications",
    description: "Our faculty and students have contributed to more than 100 research publications globally.",
    image: "https://picsum.photos/500/600?random=2",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    number: "15+",
    label: "National Awards",
    description: "We are proud recipients of 15+ national awards recognizing excellence in academics.",
    image: "https://picsum.photos/500/600?random=3",
    icon: <Star className="w-6 h-6" />,
  },
  {
    number: "5000+",
    label: "Graduates",
    description: "Over 5000 graduates have gone on to excel in diverse industries worldwide.",
    image: "https://picsum.photos/500/600?random=4",
    icon: <Users className="w-6 h-6" />,
  },
  {
    number: "5000+",
    label: "Graduates",
    description: "Over 5000 graduates have gone on to excel in diverse industries worldwide.",
    image: "https://picsum.photos/500/600?random=4",
    icon: <Users className="w-6 h-6" />,
  },
];

const AchievementsSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 font-inter relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjgiLz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-blue-700 uppercase tracking-wider text-sm font-semibold mb-3">
              Our Excellence
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
             Our Achievements
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-600  mt-3 md:mt-4"></div>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <button className="swiper-button-prev-custom p-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg hover:bg-white transition-colors border border-white/20">
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button className="swiper-button-next-custom p-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg hover:bg-white transition-colors border border-white/20">
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
            renderBullet: (index, className) => {
              return `<span class="${className} bg-blue-600 opacity-30 hover:opacity-100 transition-opacity"></span>`;
            },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="pb-16"
        >
          {achievements.map((achieve, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[500px]  overflow-hidden group cursor-pointer">
                {/* Background Image */}
                <img
                  src={achieve.image}
                  alt={achieve.label}
                  className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Dark overlay for better readability */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Glassmorphism Card Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
                    {/* Icon badge */}
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <div className="text-white">
                        {achieve.icon}
                      </div>
                    </div>

                    {/* Number with outline effect */}
                 

                    {/* Description */}
                    <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3">
                      {achieve.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="flex items-center text-blue-200 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn more</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-blue-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom flex justify-center space-x-2 mt-8" />
      </div>

      <style jsx>{`
        .swiper-pagination-custom span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-custom span.swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 6px;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default AchievementsSection;