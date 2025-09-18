"use client";
import React, { useState, useRef, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Users, Briefcase, Award, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
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

// Sample alumni data
const alumni = [
  {
    name: "Sakshi",
    branch: "B.Tech Civil 2020",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    quote:
      "KEC gave me the foundation and confidence to pursue my dream career in civil engineering. The professors provided personalized guidance, the labs were equipped with state-of-the-art facilities, and the curriculum prepared me to tackle real-world engineering challenges.",
  },
  {
    name: "Rohit Kumar",
    branch: "B.Tech Mechanical 2019",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    quote:
      "The faculty and resources at KEC helped me excel and secure my first job with top companies. The emphasis on practical knowledge, internships, and hands-on projects made me industry-ready.",
  },
  {
    name: "Anjali Singh",
    branch: "B.Tech Computer Science 2021",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    quote:
      "At KEC, I learned not just technical skills but leadership and teamwork. The college fostered an environment of collaboration, innovation, and continuous learning that shaped my career.",
  },
];

// Statistics data
const stats = [
  { icon: Users, value: "5,000+", label: "Alumni Network" },
  { icon: Briefcase, value: "92%", label: "Placement Rate" },
  { icon: Award, value: "200+", label: "Companies Recruit" },
  { icon: Star, value: "4.8/5", label: "Satisfaction Rating" },
];

const AlumniSuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const dividerRef = useRef(null);
  const quoteSectionRef = useRef(null);
  const statsSectionRef = useRef(null);
  const activeAlumni = alumni[activeIndex];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animations
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

      // Animate heading letter by letter
      const headingText = headingRef.current;
      if (headingText) {
        const letters = headingText.querySelectorAll('span');
        gsap.fromTo(letters,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.03,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }

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

      // Quote section animation
      gsap.fromTo(quoteSectionRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: quoteSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Stats section animation
      gsap.fromTo(statsSectionRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: statsSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate content when alumni changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the quote content
      gsap.fromTo(".alumni-content",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      );

      // Animate the alumni image
      gsap.fromTo(".alumni-image",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7 }
      );

      // Animate the alumni info
      gsap.fromTo(".alumni-info",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.3 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? alumni.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === alumni.length - 1 ? 0 : prev + 1));
  };

  // Split text into letters for animation
  const AnimatedHeading = ({ text, className }) => {
    return (
      <h2 ref={headingRef} className={className} style={headingFont}>
        {text.split("").map((letter, index) => (
          <span key={index} className="inline-block">
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h2>
    );
  };

  return (
    <div ref={sectionRef} className="py-20 bg-white" style={bodyFont}>
      <div className="max-w-7xl mx-auto px-6">
        <p 
          ref={subheadingRef}
          className="text-blue-800 uppercase tracking-widest text-xs font-medium mb-4"
          style={{ color: colors.primary }}
        >
          Alumni Success
        </p>

        <AnimatedHeading
          text="Alumni Success Stories"
          className="text-3xl md:text-5xl font-light text-gray-900 mb-6"
        />

        <div 
          ref={dividerRef}
          className="w-24 h-0.5 bg-blue-800/30 mb-12"
          style={{ backgroundColor: `${colors.primary}30` }}
        />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Quote Section (70%) */}
          <div 
            ref={quoteSectionRef}
            className="lg:w-7/10 w-full bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-12 flex flex-col justify-between relative min-h-[450px] border-l-4 border-blue-800"
            style={{ 
              borderLeftColor: colors.primary,
              background: `linear-gradient(135deg, ${colors.accent}10, ${colors.primary}10)`
            }}
          >
            <div className="alumni-content h-full flex flex-col justify-between">
              <div>
                <Quote className="text-blue-800 w-8 h-8 mb-6" style={{ color: colors.primary }} />
                <p className="text-xl text-gray-800 leading-relaxed mb-8" style={bodyFont}>
                  "{activeAlumni.quote}"
                </p>
              </div>

              {/* Alumni Image + Name + Branch */}
              <div className="flex items-center gap-6 border-t border-blue-200 pt-6">
                <img
                  src={activeAlumni.img}
                  alt={activeAlumni.name}
                  className="alumni-image w-16 h-16 rounded-full object-cover"
                />
                <div className="alumni-info">
                  <h4 className="text-lg font-medium text-gray-900" style={headingFont}>
                    {activeAlumni.name}
                  </h4>
                  <p className="text-sm text-blue-800" style={{ color: colors.primary }}>
                    {activeAlumni.branch}
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow Buttons on Right Side */}
            <div className="absolute right-6 bottom-6 flex gap-3">
              <button
                onClick={handlePrev}
                className="bg-white p-3 hover:bg-blue-800 hover:text-white transition-colors"
                style={{ 
                  backgroundColor: 'white',
                  color: colors.primary 
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.target, { 
                    backgroundColor: colors.primary, 
                    color: 'white',
                    duration: 0.3 
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, { 
                    backgroundColor: 'white', 
                    color: colors.primary,
                    duration: 0.3 
                  });
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="bg-white p-3 hover:bg-blue-800 hover:text-white transition-colors"
                style={{ 
                  backgroundColor: 'white',
                  color: colors.primary 
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.target, { 
                    backgroundColor: colors.primary, 
                    color: 'white',
                    duration: 0.3 
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, { 
                    backgroundColor: 'white', 
                    color: colors.primary,
                    duration: 0.3 
                  });
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicator dots */}
            <div className="absolute bottom-6 left-6 flex gap-2">
              {alumni.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? "scale-125" : ""
                  }`}
                  style={{ 
                    backgroundColor: index === activeIndex ? colors.primary : `${colors.primary}50` 
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Statistics Section (30%) */}
          <div 
            ref={statsSectionRef}
            className="lg:w-3/10 relative flex flex-col justify-center"
          >
            <div 
              className="bg-blue-900 text-white p-8 w-full flex flex-col gap-10"
              style={{ backgroundColor: colors.primary }}
            >
              <h3 className="text-2xl font-light text-center" style={headingFont}>
                Our Alumni Impact
              </h3>
              
              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="text-blue-200 mb-4" style={{ color: colors.light }}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-light mb-2" style={headingFont}>{stat.value}</div>
                      <div className="text-sm text-blue-200 tracking-wide" style={{ color: colors.light }}>{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              
              {/* CTA Button */}
              <button 
                className="bg-white text-blue-900 px-6 py-3 font-medium hover:bg-blue-50 transition-colors mt-4"
                style={{ 
                  backgroundColor: 'white',
                  color: colors.primary
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.target, { 
                    y: -2,
                    duration: 0.2
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, { 
                    y: 0,
                    duration: 0.2
                  });
                }}
                onMouseDown={(e) => {
                  gsap.to(e.target, { 
                    scale: 0.98,
                    duration: 0.1
                  });
                }}
                onMouseUp={(e) => {
                  gsap.to(e.target, { 
                    scale: 1,
                    duration: 0.1
                  });
                }}
              >
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&family=Lora:wght@400;500;600&display=swap" rel="stylesheet" />
    </div>
  );
};

export default AlumniSuccessStories;