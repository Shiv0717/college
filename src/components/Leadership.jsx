"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Mail,
  Award,
  Quote,
  ChevronRight,
  Users,
  BookOpen,
  Star,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Colors
const colors = {
  primary: "#1a365d", // Deep blue (main)
  secondary: "#b38b59", // Gold accent
  tertiary: "#2d3748", // Dark gray
  accent: "#3182ce", // Light blue
  light: "#e9d8a6", // Beige
};

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const subheadingFont = { fontFamily: "'Cormorant Garamond', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

// Data
const leaders = [
  {
    name: "Dr. Ramesh Sharma",
    title: "Chairman & Founder",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
    bio: "With a vision to revolutionize technical education, Dr. Sharma brings over 30 years of academic leadership and innovation.",
    quote: "Education is not the filling of a pail, but the lighting of a fire.",
    achievements: [
      "30+ years in academia",
      "Published 50+ research papers",
      "Recipient of National Education Award",
    ],
    social: { linkedin: "#", email: "r.sharma@example.com" },
  },
  {
    name: "Ms. Priya Verma",
    title: "Director of Academics",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "A passionate educator and strategist, Ms. Verma drives our academic excellence and curriculum design with precision.",
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    achievements: [
      "Curriculum development expert",
      "15 years in educational leadership",
      "International conference speaker",
    ],
    social: { linkedin: "#", email: "p.verma@example.com" },
  },
  {
    name: "Mr. Arjun Malhotra",
    title: "Head of Administration",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Mr. Malhotra ensures smooth operations and student success through efficient and empathetic leadership.",
    quote: "Excellence is not a skill, it's an attitude.",
    achievements: [
      "Operational efficiency specialist",
      "Student success advocate",
      "20 years in administrative leadership",
    ],
    social: { linkedin: "#", email: "a.malhotra@example.com" },
  },
];

// Stats
const stats = [
  {
    value: "65+",
    label: "Years Combined Experience",
    icon: <Users className="w-5 h-5" />,
  },
  {
    value: "100+",
    label: "Research Publications",
    icon: <BookOpen className="w-5 h-5" />,
  },
  { value: "15+", label: "National Awards", icon: <Star className="w-5 h-5" /> },
];

const LeadershipSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const dividerRef = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef([]);
  const imageRefs = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: { trigger: subheadingRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        dividerRef.current,
        { width: 0 },
        {
          width: "96px",
          duration: 1,
          delay: 0.6,
          scrollTrigger: { trigger: dividerRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.9,
          scrollTrigger: { trigger: descriptionRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        statsRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % leaders.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (cardsRef.current[activeIndex]) {
      const image = imageRefs.current[activeIndex];
      const content = contentRefs.current[activeIndex];
      gsap.fromTo(image, { scale: 1.1, opacity: 0.8 }, { scale: 1, opacity: 1, duration: 0.7 });
      gsap.fromTo(
        content.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }
      );
    }
  }, [activeIndex]);

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-gray-50 py-24 px-4 sm:px-6 lg:px-20"
      style={bodyFont}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            ref={subheadingRef}
            className="uppercase tracking-widest text-xs font-medium mb-4"
            style={{ color: colors.secondary }}
          >
            Leadership Excellence
          </p>
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-light mb-6"
            style={{ ...headingFont, color: colors.primary }}
          >
            Our Visionary Leaders
          </h2>
          <div
            ref={dividerRef}
            className="w-24 h-0.5 mx-auto mb-6"
            style={{ backgroundColor: colors.secondary }}
          />
          <p
            ref={descriptionRef}
            className="max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ color: colors.tertiary }}
          >
            Behind every successful institution is a team of dedicated
            individuals. Our leadership blends experience, innovation, and
            empathy to guide our institution toward excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Stats */}
          <div
            ref={statsRef}
            className="lg:sticky h-fit self-start p-6 border-b-4"
            style={{ top: "120px", borderBottomColor: colors.secondary }}
          >
            <h3
              className="text-xl font-medium mb-6"
              style={{ ...subheadingFont, color: colors.primary }}
            >
              Our Impact
            </h3>
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-item flex items-center p-4 border-l-4 rounded-lg"
                  style={{
                    borderLeftColor: colors.accent,
                   
                  }}
                >
                  <div
                    className="flex items-center justify-center w-12 h-12 mr-4"
                    style={{ color: colors.accent }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <div
                      className="text-2xl font-light mb-1"
                      style={{ ...headingFont, color: colors.primary }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-sm tracking-wide"
                      style={{ color: colors.tertiary }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-2 relative h-[1000px]">
            <AnimatePresence mode="wait">
              {leaders.map(
                (leader, index) =>
                  activeIndex === index && (
                    <div
                      key={index}
                      ref={(el) => (cardsRef.current[index] = el)}
                      className="absolute inset-0 flex flex-col gap-8"
                    >
                      <div className="overflow-hidden">
                        <img
                          ref={(el) => (imageRefs.current[index] = el)}
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                      </div>

                      <div
                        ref={(el) => (contentRefs.current[index] = el)}
                        className="px-6 flex flex-col justify-center py-6"
                      >
                        <h4
                          className="text-3xl font-medium mb-2"
                          style={{ ...subheadingFont, color: colors.primary }}
                        >
                          {leader.name}
                        </h4>
                        <p
                          className="font-medium mb-6 text-lg"
                          style={{ color: colors.secondary }}
                        >
                          {leader.title}
                        </p>
                        <p
                          className="mb-6 leading-relaxed text-lg"
                          style={{ color: colors.tertiary }}
                        >
                          {leader.bio}
                        </p>

                        {/* Quote */}
                        <div
                          className="border-l-4 pl-5 mb-6 py-2"
                          style={{ borderLeftColor: colors.secondary }}
                        >
                          <Quote
                            className="w-5 h-5 mb-2"
                            style={{ color: colors.secondary }}
                          />
                          <p
                            className="italic text-lg"
                            style={{ color: colors.primary }}
                          >
                            "{leader.quote}"
                          </p>
                        </div>

                        {/* Achievements */}
                        <div className="mb-8">
                          <div
                            className="flex items-center font-medium mb-3 text-lg"
                            style={{ color: colors.secondary }}
                          >
                            <Award className="w-5 h-5 mr-2" /> Key Achievements
                          </div>
                          <ul className="space-y-2">
                            {leader.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <ChevronRight
                                  className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                                  style={{ color: colors.accent }}
                                />
                                <span style={{ color: colors.tertiary }}>
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Dots */}
                        <div className="flex space-x-2 mt-6">
                          {leaders.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveIndex(i)}
                              className="w-3 h-3 rounded-full transition-all duration-300"
                              style={{
                                backgroundColor:
                                  i === activeIndex
                                    ? colors.primary
                                    : colors.secondary,
                              }}
                              aria-label={`View ${leaders[i].name}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&family=Lora:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
};

export default LeadershipSection;
