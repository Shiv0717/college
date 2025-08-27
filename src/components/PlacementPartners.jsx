"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { Building2, ArrowRight, Award, Users, TrendingUp } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const PlacementPartners = () => {
  const partners = [
    { 
      id: 1, 
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      hires: "85+ Students"
    },
    { 
      id: 2, 
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_logo.svg",
      hires: "45+ Students"
    },
    { 
      id: 3, 
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      hires: "30+ Students"
    },
    { 
      id: 4, 
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      hires: "25+ Students"
    },
    { 
      id: 5, 
      name: "Tata",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Tata_logo.svg",
      hires: "120+ Students"
    },
    { 
      id: 6, 
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Infosys_logo.svg",
      hires: "200+ Students"
    },
    { 
      id: 7, 
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/IBM_logo.svg",
      hires: "95+ Students"
    },
    { 
      id: 8, 
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      hires: "65+ Students"
    },
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "95%", label: "Placement Rate" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "₹18 LPA", label: "Highest Package" },
    { icon: <Award className="h-6 w-6" />, value: "₹9.5 LPA", label: "Average Package" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
            <Building2 className="h-4 w-4 mr-2" />
            Industry Connections
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-900">Placement Partners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with leading companies to provide exceptional career opportunities for our students
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Partners Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            breakpoints={{
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            navigation={{
              nextEl: ".partner-next",
              prevEl: ".partner-prev",
            }}
            className="pb-12"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="bg-white mb-2 rounded-xl p-6 h-48 flex flex-col items-center justify-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group">
                  <div className="h-16 w-full flex items-center justify-center mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-auto object-contain max-w-full transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{partner.name}</h3>
                  <p className="text-sm text-blue-600 font-medium">{partner.hires}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="partner-prev absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all">
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>
          <button className="partner-next absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all">
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>

        
      </div>
    </section>
  );
};

export default PlacementPartners;