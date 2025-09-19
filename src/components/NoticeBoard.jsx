"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Colors
const colors = {
  primary: "#1a365d",     // Deep blue (university primary)
  secondary: "#b38b59",   // Gold accent (university secondary)
  tertiary: "#2d3748",    // Dark gray
  accent: "#3182ce",      // Light blue
  light: "#e9d8a6",       // Cream/beige
};

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

const announcements = [
  {
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "Payment for Summer 2024 (Social Study)",
    date: "Aug 22, 2024 to Oct 11, 2024",
    description:
      "Payment schedule for Summer 2024 Social Study courses. Please ensure timely payment to avoid any delays.",
  },
  {
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "Orientation for New Students",
    date: "Sep 01, 2024",
    description:
      "Orientation program for new students to introduce them to college life, faculty, and campus facilities.",
  },
  {
    img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "Midterm Exams Schedule",
    date: "Oct 15, 2024 to Oct 20, 2024",
    description:
      "Midterm exams schedule for all courses. Please check your respective course exam dates.",
  },
];

const initialFeatured = announcements[0]; // Start with first card as FEATURED

export default function AcademicDatesSection() {
  const [featured, setFeatured] = useState(initialFeatured);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const dividerRef = useRef(null);
  const featuredRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animations
      gsap.fromTo(subheadingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate header letters
      const letters = headingRef.current.querySelectorAll(".letter");
      gsap.fromTo(
        letters,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Divider animation
      gsap.fromTo(dividerRef.current,
        { width: 0 },
        {
          width: "96px",
          duration: 1,
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Featured section animation
      gsap.fromTo(featuredRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      });

      // Animate card titles
      titleRefs.current.forEach((title, index) => {
        if (title) {
          const chars = title.querySelectorAll(".letter");
          gsap.fromTo(
            chars,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.03,
              duration: 0.6,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: title,
                start: "top 90%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, [featured]);

  const splitLetters = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="letter inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <div className="bg-white py-16" style={bodyFont}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p 
            ref={subheadingRef}
            className="text-blue-800 uppercase tracking-widest text-xs font-medium mb-4"
            style={{ color: colors.primary }}
          >
            Academic Dates
          </p>

          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-light text-gray-900 mb-4 flex flex-wrap justify-center"
            style={headingFont}
          >
            {splitLetters("Announcements & News")}
          </h2>

          <div 
            ref={dividerRef}
            className="w-24 h-0.5 bg-blue-800/30 mx-auto"
            style={{ backgroundColor: `${colors.primary}30` }}
          ></div>
        </div>

        {/* Featured */}
        <div
          key={featured.title}
          ref={featuredRef}
          className="mb-16 border-t-4 border-blue-800"
          style={{ borderTopColor: colors.primary }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 relative">
              <div className="absolute top-6 left-6 z-10">
                <span 
                  className="text-5xl font-bold text-white bg-blue-800 px-4 py-3"
                  style={{ backgroundColor: colors.primary }}
                >
                  01
                </span>
              </div>
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
            <div className="md:w-1/3 p-8 border-l border-r border-b border-gray-200">
              <div className="flex items-center mb-4">
                <span 
                  className="bg-blue-800 text-white text-xs px-4 py-2 tracking-widest uppercase"
                  style={{ backgroundColor: colors.primary }}
                >
                  Featured
                </span>
                <span 
                  className="ml-3 text-sm text-blue-800 font-medium"
                  style={{ color: colors.primary }}
                >
                  Active
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-medium text-gray-900 mb-4"
                style={headingFont}
                ref={(el) => (titleRefs.current[0] = el)}
              >
                {splitLetters(featured.title)}
              </h3>
              <p 
                className="text-blue-800 mb-4 text-sm tracking-wide"
                style={{ color: colors.primary }}
              >
                {featured.date}
              </p>
              <p className="text-gray-700 leading-relaxed">{featured.description}</p>
            </div>
          </div>
        </div>

        {/* Regular Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {announcements.map((item, idx) => (
            <div
              key={item.title}
              ref={el => cardsRef.current[idx] = el}
              className="border border-gray-200 relative cursor-pointer group"
              onClick={() => setFeatured(item)}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -5,
                  duration: 0.3,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  duration: 0.3,
                  boxShadow: "none"
                });
              }}
            >
              {/* Number */}
              <div className="absolute top-6 left-6 z-10">
                <span 
                  className="text-4xl font-bold text-white bg-blue-800 px-3 py-2"
                  style={{ backgroundColor: colors.primary }}
                >
                  {(idx + 2).toString().padStart(2, "0")}
                </span>
              </div>
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-800 transition-colors"
                  style={headingFont}
                  ref={(el) => (titleRefs.current[idx + 1] = el)}
                >
                  {splitLetters(item.title)}
                </h3>
                <p 
                  className="text-blue-800 text-sm tracking-wide"
                  style={{ color: colors.primary }}
                >
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}