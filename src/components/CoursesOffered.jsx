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
  Cpu,
  Building,
  Cog,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

// University color palette
const colors = {
  primary: "#1a365d",     // Deep blue (university primary)
  secondary: "#b38b59",   // Gold accent (university secondary)
  tertiary: "#2d3748",    // Dark gray
  accent: "#3182ce",      // Light blue
  light: "#e9d8a6",       // Cream/beige
};

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: "01",
    title: "Mechanical Engineering",
    description:
      "Learn the principles of mechanics, thermodynamics, and materials to design and innovate machinery, automotive systems, and industrial solutions.",
    link: "#",
    icon: <Cog size={24} className="text-white" />,
    image:
      "https://framerusercontent.com/images/eOfJnRyU501ZVOEYqq4UqF5D6Y.jpg?scale-down-to=1024",
    featured: true,
    longDescription:
      "The Department of Mechanical Engineering equips students with strong fundamentals in design, manufacturing, and automation. With access to advanced laboratories and industry collaborations, students develop expertise in areas like robotics, CAD/CAM, renewable energy systems, and advanced manufacturing processes.",
    stats: [
      { value: "50+", label: "Programs Offered" },
      { value: "200+", label: "Faculty Members" },
      { value: "95%", label: "Employment Rate" },
    ]
  },
  {
    id: "02",
    title: "Electronics & Communication Engineering",
    description:
      "Focus on communication systems, embedded technologies, and signal processing for the digital era.",
    link: "#",
    icon: <Cpu size={24} className="text-white" />,
    image:
      "https://framerusercontent.com/images/I4K58qReYpli82TuZMgRVS7ZwUw.jpg",
    featured: false,
  },
  {
    id: "03",
    title: "Computer Science & Engineering",
    description:
      "Master programming, AI, cloud, and data-driven technologies that power the digital future.",
    link: "#",
    icon: <Award size={24} className="text-white" />,
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
    icon: <Building size={24} className="text-white" />,
    image:
      "https://framerusercontent.com/images/I4K58qReYpli82TuZMgRVS7ZwUw.jpg",
    featured: false,
  },
];

const CoursesOffered = () => {
  const featuredItem = sections.find((item) => item.featured);
  const regularItems = sections.filter((item) => !item.featured);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    // Header animations
    gsap.fromTo(
      headerRef.current.querySelectorAll(".animate-header-part"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Title letter animation
    const titleText = titleRef.current.textContent;
    titleRef.current.textContent = "";
    const titleLetters = [];
    
    for (let i = 0; i < titleText.length; i++) {
      const letter = document.createElement("span");
      letter.textContent = titleText[i];
      letter.className = "inline-block opacity-0";
      titleRef.current.appendChild(letter);
      titleLetters.push(letter);
    }
    
    gsap.to(titleLetters, {
      opacity: 1,
      duration: 0.6,
      stagger: 0.03,
      delay: 0.3,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      }
    });

    // Divider animation
    gsap.fromTo(
      dividerRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Featured section animation
    gsap.fromTo(
      ".animate-featured",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".animate-featured-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Card animations
    const cards = containerRef.current.querySelectorAll(".animate-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, rotationY: 15 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          duration: 0.7,
          delay: index * 0.1,
          ease: "back.out(1.2)",
        }
      );
    });

    // CTA animations
    const ctas = containerRef.current.querySelectorAll(".animate-cta");
    ctas.forEach((cta) => {
      gsap.fromTo(
        cta,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: cta,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          duration: 0.6,
          ease: "elastic.out(1, 0.8)",
        }
      );
    });

    // Stats counter animation
    const statValues = document.querySelectorAll(".stat-value");
    statValues.forEach((stat) => {
      const target = parseInt(stat.textContent);
      let count = 0;
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          stat.textContent = target + "+";
          clearInterval(timer);
        } else {
          stat.textContent = Math.floor(count) + "+";
        }
      }, 16);
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden" style={bodyFont} ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20" ref={headerRef}>
          <p 
            className="text-[#b38b59] uppercase tracking-widest text-xs font-medium mb-4 animate-header-part"
            style={{ letterSpacing: '0.2em' }}
          >
            Academic Programs
          </p>
          <h2 
            className="text-4xl md:text-5xl font-light text-[#1a365d] mb-6 animate-header-part" 
            style={headingFont}
            ref={titleRef}
          >
            Explore Our Offerings
          </h2>
          <div 
            className="w-24 h-1 bg-[#b38b59] mx-auto mb-6 animate-header-part origin-left" 
            ref={dividerRef}
          />
          <p 
            className="text-gray-700 mt-6 max-w-2xl mx-auto text-lg leading-relaxed animate-header-part"
            ref={subtitleRef}
          >
            Discover our comprehensive academic programs designed to foster innovation, critical thinking, and real-world skills.
          </p>
        </div>

        {/* Featured Program */}
        <div className="flex flex-col lg:flex-row mb-16 rounded-2xl overflow-hidden  animate-featured-container">
          <div className="lg:w-1/2 h-[500px] overflow-hidden relative group">
            <div
              className="h-full w-full bg-cover bg-center transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${featuredItem.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/80 to-transparent"></div>
            <div className="absolute top-8 left-8 bg-[#b38b59] p-3 rounded-full  animate-featured">
              {featuredItem.icon}
            </div>
            <div className="absolute top-8 right-8">
              <span className="text-6xl font-bold text-white/20" style={headingFont}>
                {featuredItem.id}
              </span>
            </div>
            <div className="absolute bottom-8 left-8">
              <span className="text-white text-sm font-medium bg-[#b38b59] px-3 py-1 rounded-full">
                Featured Program
              </span>
            </div>
          </div>
          <div className="lg:w-1/2 p-10 flex flex-col justify-center bg-white">
            <h3 className="text-3xl md:text-4xl font-light text-[#1a365d] mb-6 animate-featured" style={headingFont}>
              {featuredItem.title}
            </h3>
            
            <div className="flex gap-8 mb-8 animate-featured">
              {featuredItem.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-light text-[#1a365d] mb-2 stat-value" style={headingFont}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed animate-featured">{featuredItem.longDescription}</p>
            
            <a
              href={featuredItem.link}
              className="inline-flex items-center text-[#1a365d] font-medium group/btn self-start border-b-2 border-[#b38b59] pb-1 animate-featured hover:text-[#b38b59] transition-colors duration-300"
            >
              <span>Explore Department</span>
              <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Regular Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {regularItems.map((item) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden group h-full flex flex-col animate-card shadow transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-72 overflow-hidden relative">
                <div
                  className="h-full w-full bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/70 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-[#b38b59] p-2 rounded-full shadow-md">
                  {item.icon}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-4xl font-bold text-white/20" style={headingFont}>
                    {item.id}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col bg-white">
                <h3 className="text-xl font-medium text-[#1a365d] mb-3" style={headingFont}>{item.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{item.description}</p>
                <a 
                  href={item.link} 
                  className="inline-flex items-center text-[#1a365d] font-medium mt-auto animate-cta hover:text-[#b38b59] transition-colors duration-300 group-hover:underline"
                >
                  <span>Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-[#b38b59] w-0 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1a365d] to-[#2d3748] text-white font-medium group animate-cta rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Explore All Programs</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="text-gray-600 mt-6 text-sm animate-cta">
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