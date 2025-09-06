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
      name: "TCS",
      industry: "IT Services & Consulting",
      location: "India",
      logo: "https://brandeps.com/logo-download/T/TATA-Consultancy-Services-logo-01.png",
     
    },
    {
      id: 2,
      name: "Infosys",
      industry: "IT & Software",
      location: "India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
      
    },
    {
      id: 3,
      name: "Wipro",
      industry: "Technology & Services",
      location: "India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Wipro_new_logo.svg/250px-Wipro_new_logo.svg.png",
      
    },
    {
      id: 4,
      name: "Capgemini",
      industry: "Consulting & Technology",
      location: "Global",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
     
    },
    {
      id: 5,
      name: "Tech Mahindra",
      industry: "IT & Telecom",
      location: "India",
      logo: "https://appexchange.salesforce.com/partners/servlet/servlet.FileDownload?file=00P4V000015GC4CUAW",
      image: "https://1000logos.net/wp-content/uploads/2021/05/Tech-Mahindra-logo.png"
    },
    {
      id: 6,
      name: "HCL ",
      industry: "IT Services",
      location: "India",
      logo: "https://logos-world.net/wp-content/uploads/2022/07/HCL-Logo.png",
      image: "https://1000logos.net/wp-content/uploads/2021/05/HCL-Technologies-logo.png"
    },
    {
      id: 7,
      name: "Cognizant",
      industry: "Consulting & IT Services",
      location: "Global",
      logo: "https://www.opentext.com/assets/images/partners/cognizant-logo-416x274.png",
      image: "https://1000logos.net/wp-content/uploads/2021/05/Cognizant-logo.png"
    }
    
    
    
  ];

  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "80%",
      label: "Placement Rate"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: "₹8 LPA",
      label: "Highest Package"
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "₹4.5 LPA",
      label: "Average Package"
    }
  ];
  

  return (
    <section className="relative py-8 overflow-hidden">
     
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 mb-4">
            <Building2 className="h-4 w-4 mr-2" />
            Industry Connections
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Our <span className="text-blue-600">Placement Partners</span>
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