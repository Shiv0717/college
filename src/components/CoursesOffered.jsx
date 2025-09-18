"use client";
import React, { useRef, useEffect } from "react";
import {
  ArrowRight,
  ChevronRight,
  BookOpen,
  Users,
  Award,
  Briefcase,
  Star,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: "01",
    title: "Mechanical Engineering",
    description:
      "Learn the principles of mechanics, thermodynamics, and materials to design and innovate machinery, automotive systems, and industrial solutions.",
    link: "#",
    icon: <Briefcase size={24} />, // you can change to a gear icon
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    longDescription:
      "The Department of Mechanical Engineering equips students with strong fundamentals in design, manufacturing, and automation. With access to advanced laboratories and industry collaborations, students develop expertise in areas like robotics, CAD/CAM, renewable energy systems, and advanced manufacturing processes.",
  },
  {
    id: "02",
    title: "Electronics & Communication Engineering",
    description:
      "Focus on communication systems, embedded technologies, and signal processing for the digital era.",
    link: "#",
    icon: <Users size={24} />, // can replace with circuit icon
    image:
      "https://images.unsplash.com/photo-1581091012184-5c8af9e8f7a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "03",
    title: "Computer Science & Engineering",
    description:
      "Master programming, AI, cloud, and data-driven technologies that power the digital future.",
    link: "#",
    icon: <Award size={24} />, // can replace with code icon
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "04",
    title: "Civil Engineering",
    description:
      "Design and build sustainable infrastructure including bridges, roads, and smart cities.",
    link: "#",
    icon: <BookOpen size={24} />, // can replace with building icon
    image:
      "https://images.unsplash.com/photo-1503389152951-9f343605f61e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
];


const CoursesOffered = () => {
  const featuredItem = sections.find((item) => item.featured);
  const regularItems = sections.filter((item) => !item.featured);
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".animate-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
          duration: 0.6,
          ease: "power3.out",
        }
      );
    });

    const ctas = containerRef.current.querySelectorAll(".animate-cta");
    ctas.forEach((cta) => {
      gsap.fromTo(
        cta,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: cta,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          duration: 0.6,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <div className="bg-white py-24 overflow-hidden" style={bodyFont} ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 animate-card">
          <p className="text-blue-800 uppercase tracking-widest text-xs font-medium mb-4 animate-card">
            Academic Programs
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 animate-card" style={headingFont}>
            Explore Our Offerings
          </h2>
          <div className="w-24 h-0.5 bg-blue-800/30 mx-auto mb-6 animate-card" />
          <p className="text-gray-700 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover our comprehensive academic programs designed to foster innovation, critical thinking, and real-world skills.
          </p>
        </div>

        {/* Featured Program */}
        <div className="flex flex-col md:flex-row mb-12 border-b-4 border-blue-800/20 animate-card">
          <div className="md:w-1/2 h-[500px] overflow-hidden relative">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${featuredItem.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent"></div>
            <div className="absolute top-8 left-8 text-blue-800 p-2">{featuredItem.icon}</div>
            <div className="absolute top-8 right-8">
              <span className="text-6xl font-bold text-white/20" style={headingFont}>
                {featuredItem.id}
              </span>
            </div>
          </div>
          <div className="md:w-1/2 p-10 flex flex-col justify-center bg-white">
            <p className="text-blue-800 uppercase tracking-widest text-xs font-medium mb-4">
              Featured Program
            </p>
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={headingFont}>
              {featuredItem.title}
            </h3>
            <div className="flex gap-8 mb-8">
              <div>
                <p className="text-2xl font-light text-blue-800 mb-2" style={headingFont}>50+</p>
                <p className="text-sm text-gray-600 tracking-wide">Programs Offered</p>
              </div>
              <div>
                <p className="text-2xl font-light text-blue-800 mb-2" style={headingFont}>200+</p>
                <p className="text-sm text-gray-600 tracking-wide">Faculty Members</p>
              </div>
              <div>
                <p className="text-2xl font-light text-blue-800 mb-2" style={headingFont}>95%</p>
                <p className="text-sm text-gray-600 tracking-wide">Employment Rate</p>
              </div>
            </div>
            <p className="text-gray-700 mb-8 leading-relaxed">{featuredItem.longDescription}</p>
            <a
              href={featuredItem.link}
              className="inline-flex items-center text-blue-800 font-medium group/btn self-start border-b-2 border-blue-800 pb-1 animate-cta"
            >
              <span>Explore Department</span>
              <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Regular Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regularItems.map((item) => (
            <div key={item.id} className="relative overflow-hidden group h-full flex flex-col animate-card">
              <div className="h-72 overflow-hidden relative">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 p-2 text-white">{item.icon}</div>
                <div className="absolute top-4 right-4">
                  <span className="text-4xl font-bold text-white/20" style={headingFont}>
                    {item.id}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col bg-white">
                <h3 className="text-xl font-medium text-gray-900 mb-3" style={headingFont}>{item.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{item.description}</p>
                <a href={item.link} className="inline-flex items-center text-blue-800 font-medium mt-auto animate-cta">
                  <span>Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 bg-blue-800 w-0 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-card">
          <a href="#" className="inline-flex items-center px-8 py-4 bg-blue-800 text-white font-medium group animate-cta">
            <span>Explore All Programs</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="text-gray-600 mt-6 text-sm">
            Join over 10,000 students who have transformed their careers with our programs
          </p>
        </div>

      </div>

      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&family=Lora:wght@400;500;600&display=swap" rel="stylesheet" />
    </div>
  );
};

export default CoursesOffered;
