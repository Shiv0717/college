"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const colors = {
  primary: "#1a365d", // Deep blue (university primary)
  secondary: "#b38b59", // Gold accent (university secondary)
  tertiary: "#2d3748", // Dark gray
  accent: "#3182ce", // Light blue
  light: "#e9d8a6", // Cream/beige
};

const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

const announcements = [
  {
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80",
    title: "Payment for Summer 2024 (Social Study)",
    date: "Aug 22, 2024 to Oct 11, 2024",
    description:
      "Payment schedule for Summer 2024 Social Study courses. Please ensure timely payment to avoid any delays.",
  },
  {
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=80",
    title: "Orientation for New Students",
    date: "Sep 01, 2024",
    description:
      "Orientation program for new students to introduce them to college life, faculty, and campus facilities.",
  },
  {
    img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1000&q=80",
    title: "Midterm Exams Schedule",
    date: "Oct 15, 2024 to Oct 20, 2024",
    description:
      "Midterm exams schedule for all courses. Please check your respective course exam dates.",
  },
];

const initialFeatured = announcements[0];

export default function AcademicDatesSection() {
  const [featured, setFeatured] = useState(initialFeatured);
  const headingRef = useRef(null);
  const titleRefs = useRef([]);

  useEffect(() => {
    // Animate header letters
    const letters = headingRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50, scale: 0.8, color: colors.secondary },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate card titles
    titleRefs.current.forEach((title) => {
      const chars = title.querySelectorAll(".letter");
      gsap.fromTo(
        chars,
        { opacity: 0, y: 30, color: colors.secondary },
        {
          opacity: 1,
          y: 0,
          color: colors.primary,
          stagger: 0.03,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
          },
        }
      );
    });
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
            className="uppercase tracking-widest text-xs font-medium mb-4"
            style={{ color: colors.primary }}
          >
            Academic Dates
          </p>

          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-light mb-4 flex flex-wrap text-[#2d3748] justify-center"
            style={{ ...headingFont }}
          >
            {splitLetters("Announcements & News")}
          </h2>

          <div
            className="w-24 h-0.5 mx-auto"
            style={{ backgroundColor: colors.secondary }}
          ></div>
        </div>

        {/* Featured */}
        <motion.div
          key={featured.title}
          className="mb-16"
          style={{ borderTop: `4px solid ${colors.primary}` }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 relative">
              <motion.div
                className="absolute top-6 left-6 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span
                  className="text-5xl font-bold px-4 py-3"
                  style={{ color: "#fff", backgroundColor: colors.primary }}
                >
                  01
                </span>
              </motion.div>
              <motion.img
                src={featured.img}
                alt={featured.title}
                className="w-full h-64 md:h-96 object-cover"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
            <div
              className="md:w-1/3 p-8 border-l border-r border-b"
              style={{ borderColor: "#e5e7eb" }}
            >
              <div className="flex items-center mb-4">
                <span
                  className="text-xs px-4 py-2 tracking-widest uppercase"
                  style={{
                    backgroundColor: colors.primary,
                    color: "#fff",
                  }}
                >
                  Featured
                </span>
                <span
                  className="ml-3 text-sm font-medium"
                  style={{ color: colors.secondary }}
                >
                  Active
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-medium mb-4"
                style={{ ...headingFont, color: colors.tertiary }}
                ref={(el) => (titleRefs.current[0] = el)}
              >
                {splitLetters(featured.title)}
              </h3>
              <p
                className="mb-4 text-sm tracking-wide"
                style={{ color: colors.accent }}
              >
                {featured.date}
              </p>
              <p style={{ color: colors.tertiary }}>{featured.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Regular Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {announcements.map((item, idx) => (
            <div
              key={item.title}
              className="relative cursor-pointer group border"
              style={{ borderColor: "#e5e7eb" }}
              onClick={() => setFeatured(item)}
            >
              {/* Number */}
              <div className="absolute top-6 left-6 z-10">
                <span
                  className="text-4xl font-bold px-3 py-2"
                  style={{ color: "#fff", backgroundColor: colors.secondary }}
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
                  className="text-xl font-medium mb-3 transition-colors"
                  style={{ ...headingFont, color: colors.tertiary }}
                  ref={(el) => (titleRefs.current[idx + 1] = el)}
                >
                  {splitLetters(item.title)}
                </h3>
                <p
                  className="text-sm tracking-wide"
                  style={{ color: colors.accent }}
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
