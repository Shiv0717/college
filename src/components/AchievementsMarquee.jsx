"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fonts
const headingFont = { fontFamily: "'Cormorant Garamond', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

// Animated letters with GSAP
const AnimatedLettersGSAP = ({ text, className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <span ref={containerRef} className={className}>
      {text.split("").map((letter, idx) => (
        <span key={idx}>{letter === " " ? "\u00A0" : letter}</span>
      ))}
    </span>
  );
};

// Paragraph animation
const ParagraphGSAP = ({ children, className }) => {
  const paraRef = useRef(null);

  useEffect(() => {
    if (!paraRef.current) return;

    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <p ref={paraRef} className={className}>
      {children}
    </p>
  );
};

const FounderSectionGSAP = () => {
  const statsRef = useRef([]);
  const ctaRef = useRef(null);
  statsRef.current = [];

  const addStatRef = (el) => {
    if (el && !statsRef.current.includes(el)) statsRef.current.push(el);
  };

  useEffect(() => {
    // Stats animation
    if (statsRef.current.length > 0) {
      gsap.from(statsRef.current, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current[0],
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // CTA button animation
    if (ctaRef.current) {
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-800 uppercase tracking-widest text-xs font-medium mb-3">
            About Us
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-4" style={headingFont}>
            <AnimatedLettersGSAP text="Excellence in Education" className="inline-block" />
          </h2>
          <div className="w-24 h-0.5 bg-blue-800/30 mx-auto mt-5"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - images */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="KEC Founder"
              className="absolute left-0 top-0 w-4/5 h-4/5 object-cover transition-transform duration-700 hover:scale-105 z-20"
            />
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Founder mentoring students"
              className="absolute right-0 bottom-0 w-3/5 h-3/5 object-cover z-10"
            />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-blue-800/10 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 border-2 border-blue-800/10 z-0"></div>
          </div>

          {/* Right side content */}
          <div className="lg:pl-8">
            <ParagraphGSAP className="uppercase text-xs tracking-[0.2em] text-blue-800 font-medium mb-4">
              Since 1990
            </ParagraphGSAP>

            <h2 className="text-4xl sm:text-5xl font-light mb-6 leading-tight" style={headingFont}>
              <ParagraphGSAP className="block mb-2">Learn more about</ParagraphGSAP>
              <ParagraphGSAP className="text-blue-800 font-medium">Krishna Engineering College</ParagraphGSAP>
            </h2>

            <ParagraphGSAP className="text-gray-700 mb-6 leading-relaxed text-lg" style={bodyFont}>
              At Krishna Engineering College, we are dedicated to shaping bright
              futures by providing world-class technical education, nurturing
              innovation, and empowering students to become leaders of tomorrow.
            </ParagraphGSAP>

            <ParagraphGSAP
              className="border-l-4 border-blue-800/30 pl-5 italic text-gray-800 mb-8 py-2"
              style={bodyFont}
            >
              "Since its inception in 2001, Krishna Engineering College has become
              one of the most reputed educational institutions in the region."
            </ParagraphGSAP>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 border-b-4 border-blue-800/20">
                <div className="text-3xl font-light text-blue-800 mb-1" style={headingFont}>30+</div>
                <div className="text-xs uppercase tracking-widest text-gray-600">Years</div>
              </div>
              <div  className="text-center p-4 border-b-4 border-blue-800/20">
                <div className="text-3xl font-light text-blue-800 mb-1" style={headingFont}>7K+</div>
                <div className="text-xs uppercase tracking-widest text-gray-600">Graduates</div>
              </div>
              <div  className="text-center p-4 border-b-4 border-blue-800/20">
                <div className="text-3xl font-light text-blue-800 mb-1" style={headingFont}>50+</div>
                <div className="text-xs uppercase tracking-widest text-gray-600">Programs</div>
              </div>
            </div>

            {/* CTA Button */}
            <button
            
              className="px-8 py-4 bg-blue-800 text-white font-medium transition-all duration-300 hover:bg-blue-900 transform hover:-translate-y-1 inline-flex items-center"
            >
              <span>Read Full Message</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSectionGSAP;
