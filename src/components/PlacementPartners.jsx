import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PlacementPartners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  // Placement partners data with vibrant colors
  const placementPartners = [
    {
      name: "TCS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png",
      category: "IT Services",
      color: "#3D5B96",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png",
      category: "IT Services",
      color: "#007CC3",
      bgColor: "from-cyan-50 to-cyan-100"
    },
    {
      name: "Wipro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png",
      category: "IT Services",
      color: "#00599A",
      bgColor: "from-indigo-50 to-indigo-100"
    },
    {
      name: "Tech Mahindra",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tech_Mahindra_Logo.svg/1200px-Tech_Mahindra_Logo.svg.png",
      category: "IT Services",
      color: "#C20000",
      bgColor: "from-red-50 to-red-100"
    },
    {
      name: "L&T",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Larsen_%26_Toubro_Logo.svg/1200px-Larsen_%26_Toubro_Logo.svg.png",
      category: "Core Engineering",
      color: "#1E5B8C",
      bgColor: "from-blue-50 to-green-100"
    },
    {
      name: "Bosch",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bosch-Logo.svg/1200px-Bosch-Logo.svg.png",
      category: "Automotive",
      color: "#EA0016",
      bgColor: "from-red-50 to-orange-100"
    },
    {
      name: "Capgemini",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Capgemini_Logo.svg/1200px-Capgemini_Logo.svg.png",
      category: "IT Consulting",
      color: "#0076AB",
      bgColor: "from-blue-50 to-cyan-100"
    },
    {
      name: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png",
      category: "IT Services",
      color: "#A100FF",
      bgColor: "from-purple-50 to-pink-100"
    },
    {
      name: "HCL Technologies",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/HCL_Technologies_logo.svg/1200px-HCL_Technologies_logo.svg.png",
      category: "IT Services",
      color: "#34A853",
      bgColor: "from-green-50 to-emerald-100"
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
      category: "IT Services",
      color: "#054ADA",
      bgColor: "from-blue-50 to-indigo-100"
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      category: "Software",
      color: "#737373",
      bgColor: "from-gray-50 to-blue-100"
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
      category: "E-commerce",
      color: "#FF9900",
      bgColor: "from-orange-50 to-yellow-100"
    }
  ];

  // Statistics data with vibrant colors
  const placementStats = [
    { number: "200+", label: "Recruiting Companies", color: "text-blue-600", bg: "bg-blue-500" },
    { number: "95%", label: "Placement Rate", color: "text-green-600", bg: "bg-green-500" },
    { number: "₹12 LPA", label: "Highest Package", color: "text-red-600", bg: "bg-red-500" },
    { number: "₹6.5 LPA", label: "Average Package", color: "text-orange-600", bg: "bg-orange-500" }
  ];

  const slidesToShow = 4;
  const totalSlides = Math.ceil(placementPartners.length / slidesToShow);

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cards animation
    gsap.fromTo(cardsRef.current,
      { y: 30, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".partners-section",
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentPartners = placementPartners.slice(
    currentSlide * slidesToShow,
    (currentSlide + 1) * slidesToShow
  );

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden partners-section">
      

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" ref={titleRef}>
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Industry Partnerships
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Recruitment Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building bridges between academia and industry for successful career launches
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
  {placementStats.map((stat, index) => (
    <div 
      key={index}
      className="bg-white rounded-2xl p-6  border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            {index === 0 && <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>}
            {index === 1 && <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>}
            {index === 2 && <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267zM10 18a8 8 0 100-16 8 8 0 000 16zm0-5a3 3 0 110-6 3 3 0 010 6z"/>}
            {index === 3 && <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"/>}
          </svg>
        </div>
        <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
      </div>
      <div className="text-gray-600 font-medium text-sm uppercase tracking-wider">
        {stat.label}
      </div>
      <div className={`w-full h-1 ${stat.bg} rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
    </div>
  ))}
</div>

        {/* Slider Section */}
        <div className="relative mb-12">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Partners Slider */}
          <div 
  ref={sliderRef}
  className="grid grid-cols-2 md:grid-cols-4 gap-8 transition-transform duration-500"
>
  {currentPartners.map((partner, index) => (
    <div 
      key={index}
      ref={el => cardsRef.current[index] = el}
      className="group cursor-pointer relative"
    >
      <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            background: `linear-gradient(135deg, ${partner.color}20, transparent 70%)`
          }}
        ></div>
        
        {/* Logo Container with Glow Effect */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-6 flex items-center justify-center p-4 bg-white rounded-2xl group-hover:shadow-3xl transition-all duration-500">
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="max-w-full max-h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          {/* Company Name with Gradient Text */}
          <h3 
            className="font-bold text-2xl mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
            style={{ 
              backgroundImage: `linear-gradient(135deg, ${partner.color}, ${partner.color}CC)`
            }}
          >
            {partner.name}
          </h3>
          
          {/* Category Badge */}
          <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-600 group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
            {partner.category}
          </span>

          {/* Hover Indicator */}
          <div className="w-0 group-hover:w-20 h-1 rounded-full mt-4 transition-all duration-500" 
               style={{ backgroundColor: partner.color }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"
             style={{ backgroundColor: partner.color }}></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"
             style={{ backgroundColor: partner.color }}></div>
      </div>
    </div>
  ))}
</div>

          {/* Slider Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-orange-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>



        
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default PlacementPartners;