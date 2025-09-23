"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Colors from your brand palette
const colors = {
  green: "#00BA59",
  red: "#FF6463",
  yellow: "#FECF54",
  blue: "#1D78FD",
  dark: "#1a202c",
  light: "#f7fafc"
};

// Fonts
const headingFont = { fontFamily: "'Merriweather', serif" };
const bodyFont = { fontFamily: "'Lato', sans-serif" };

const announcements = [
  {
    img: "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Payment for Summer 2024 (Social Study)",
    date: "Aug 22, 2024 to Oct 11, 2024",
    description: "Payment schedule for Summer 2024 Social Study courses. Please ensure timely payment to avoid any delays.",
    color: colors.green
  },
  {
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "Orientation for New Students",
    date: "Sep 01, 2024",
    description: "Orientation program for new students to introduce them to college life, faculty, and campus facilities.",
    color: colors.blue
  },
  {
    img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "Midterm Exams Schedule",
    date: "Oct 15, 2024 to Oct 20, 2024",
    description: "Midterm exams schedule for all courses. Please check your respective course exam dates.",
    color: colors.red
  },
  
];

const initialFeatured = announcements[0];

export default function AcademicDatesSection() {
  const [featured, setFeatured] = useState(initialFeatured);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const dividerRef = useRef(null);
  const featuredRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Subheading animation
      gsap.fromTo(subheadingRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Heading letters animation
      const letters = headingRef.current?.querySelectorAll(".letter");
      if (letters) {
        gsap.fromTo(letters,
          { opacity: 0, y: 60, rotationY: -30 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 1,
            stagger: 0.03,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Divider animation
      gsap.fromTo(dividerRef.current,
        { width: 0, opacity: 0 },
        {
          width: "120px",
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Featured section animation
      gsap.fromTo(featuredRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards animation with stagger
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 60, rotationX: 15 },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 0.8,
              delay: index * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Card titles animation
      titleRefs.current.forEach((title, index) => {
        if (title) {
          const chars = title.querySelectorAll(".char");
          gsap.fromTo(chars,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.02,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: title,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [featured]);

  const splitLetters = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  const handleCardHover = (e, item) => {
    gsap.to(e.currentTarget, {
      y: -10,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto"
    });
    
    const image = e.currentTarget.querySelector('img');
    gsap.to(image, {
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleCardLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });
    
    const image = e.currentTarget.querySelector('img');
    gsap.to(image, {
      scale: 1,
      duration: 0.4
    });
  };

  const handleFeaturedClick = (item) => {
    // Animate out current featured
    gsap.to(featuredRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setFeatured(item);
        // Animate in new featured
        setTimeout(() => {
          gsap.fromTo(featuredRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out"
            }
          );
        }, 50);
      }
    });
  };


  return (
    <div ref={sectionRef}  className="bg-gradient-to-br from-gray-50 to-blue-50/20 py-24" style={bodyFont}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <p 
            ref={subheadingRef}
            className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4"
            style={{ color: colors.blue }}
          >
            Academic Calendar
          </p>

          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={headingFont}
          >
            <span className="bg-black bg-clip-text text-transparent">
              {splitLetters("Announcements & News")}
            </span>
          </h2>

          <div 
            ref={dividerRef}
            className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"
            style={{ 
              background: `linear-gradient(45deg, ${colors.green}, ${colors.blue})` 
            }}
          ></div>
        </div>

        {/* Featured Section */}
        <div
          key={featured.title}
          ref={featuredRef}
          className="mb-20 rounded-3xl overflow-hidden  transform perspective-1000"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-2/3 relative group">
              <div className="absolute top-8 left-8 z-20">
                <span 
                  className="text-6xl font-bold text-white px-6 py-4 rounded-2xl "
                  style={{ 
                    backgroundColor: featured.color,
                    fontFamily: "'Merriweather', serif"
                  }}
                >
                  01
                </span>
              </div>
              
              <div className="absolute top-8 right-8 z-20">
                <span 
                  className="text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase"
                  style={bodyFont}
                >
                  Featured
                </span>
              </div>
              
              <img
                src={'https://plus.unsplash.com/premium_photo-1682787494881-8ea045470faa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                alt={featured.title}
                className="w-full h-80 lg:h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center mb-3">
                  <div 
                    className="w-3 h-3 rounded-full mr-3 animate-pulse"
                    style={{ backgroundColor: featured.color }}
                  ></div>
                  <span className="text-sm font-semibold tracking-wider">Active Announcement</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/3 bg-white p-8 lg:p-12 border-l-0 lg:border-l border-gray-200">
              <div className="h-full flex flex-col justify-center">
                <div className="mb-6">
                  <span 
                    className="text-sm font-semibold tracking-wider uppercase px-3 py-1 rounded-full border"
                    style={{ 
                      color: featured.color,
                      borderColor: `${featured.color}30`,
                      backgroundColor: `${featured.color}10`
                    }}
                  >
                    Important Update
                  </span>
                </div>
                
                <h3
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                  style={headingFont}
                  ref={(el) => (titleRefs.current[0] = el)}
                >
                  {splitLetters(featured.title)}
                </h3>
                
                <div className="flex items-center mb-6 text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium" style={{ color: featured.color }}>
                    {featured.date}
                  </span>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {featured.description}
                </p>
                
                <button 
                  className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: featured.color }}
                >
                  Read Full Announcement
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((item, idx) => (
            <div
              key={item.title}
              ref={el => cardsRef.current[idx] = el}
              className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer transform perspective-1000  border border-gray-200/50"
              onClick={() => handleFeaturedClick(item)}
              onMouseEnter={(e) => handleCardHover(e, item)}
              onMouseLeave={handleCardLeave}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <div 
                  className="absolute top-4 left-4 z-20 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg card-number transition-transform"
                  style={{ backgroundColor: item.color }}
                >
                  {(idx + 1).toString().padStart(2, "0")}
                </div>
                
                {/* Urgency Badge */}
                {/* <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm">
                  {getUrgencyIcon(item.urgency)}
                </div> */}
                
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(45deg, ${item.color}30, transparent)` 
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 relative">
              
                
                <h3
                  className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300"
                  style={headingFont}
                >
                  {item.title}
                </h3>
                
                <div className="flex items-center text-gray-600 text-sm mb-4 bg-gray-50/50 p-2 rounded-lg">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span style={{ color: item.color }} className="font-medium">
                    {item.date}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <button 
                  className="w-full text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 group-hover:gap-3 py-2 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-600"
                >
                  View Full Announcement
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Hover Border */}
              <div 
                className="absolute inset-0 border-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ borderColor: item.color }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Lato:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}