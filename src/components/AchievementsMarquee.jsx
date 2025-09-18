"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// University color palette
const colors = {
  primary: "#1a365d",     // Deep blue (headings, CTA)
  secondary: "#b38b59",   // Gold accent (highlights, stats, borders)
  tertiary: "#2d3748",    // Dark gray (body text)
  accent: "#3182ce",      // Light blue (subhead, divider, hover states)
  light: "#e9d8a6",       // Beige (quotes, subtle tints)
};

// Fonts
const headingFont = { fontFamily: "'Cormorant Garamond', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

// Animated letters with GSAP
const AnimatedLettersGSAP = ({ text, className, delay = 0, style }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 40, rotationX: -90 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        delay: delay,
      }
    );
  }, [delay]);

  return (
    <span ref={containerRef} className={className} style={style}>
      {text.split("").map((letter, idx) => (
        <span key={idx} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
};

// Paragraph animation
const ParagraphGSAP = ({ children, className, delay = 0, style }) => {
  const paraRef = useRef(null);

  useEffect(() => {
    if (!paraRef.current) return;

    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        delay: delay,
      }
    );
  }, [delay]);

  return (
    <p ref={paraRef} className={className} style={style}>
      {children}
    </p>
  );
};

const FounderSectionGSAP = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const decorRef1 = useRef(null);
  const decorRef2 = useRef(null);
  const statsRef = useRef([]);
  const ctaRef = useRef(null);
  const dividerRef = useRef(null);
  statsRef.current = [];

  const addStatRef = (el) => {
    if (el && !statsRef.current.includes(el)) statsRef.current.push(el);
  };

  useEffect(() => {
    // Image animations
    if (imageRef1.current) {
      gsap.fromTo(
        imageRef1.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef1.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (imageRef2.current) {
      gsap.fromTo(
        imageRef2.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef2.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Decorative elements animation
    if (decorRef1.current && decorRef2.current) {
      gsap.fromTo(
        [decorRef1.current, decorRef2.current],
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: decorRef1.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Stats animation
    if (statsRef.current.length > 0) {
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: 0.5,
        }
      );
    }

    // CTA button animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: 0.8,
        }
      );
    }

    // Divider animation
    if (dividerRef.current) {
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke={colors.primary}
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <ParagraphGSAP
            className="uppercase tracking-[0.2em] text-xs font-medium mb-3"
            style={{ color: colors.accent }}
          >
            About Us
          </ParagraphGSAP>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-light mb-4"
            style={headingFont}
          >
            <AnimatedLettersGSAP
              text="Excellence in Education"
              className="inline-block"
              style={{ color: colors.primary }}
            />
          </h2>

          <div
            ref={dividerRef}
            className="w-24 h-0.5 mx-auto mt-5 transform origin-center"
            style={{ backgroundColor: colors.accent }}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - images */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
            <img
              ref={imageRef1}
              src="https://framerusercontent.com/images/pj3yU0TmIwVcFXGpK8xYQPel7f8.jpg"
              alt="KEC Founder"
              className="absolute left-0 top-0 w-4/5 h-4/5 object-cover z-20 opacity-0"
              style={{ border: `2px solid ${colors.primary}` }}
            />
            <img
              ref={imageRef2}
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Founder mentoring students"
              className="absolute right-0 bottom-0 w-3/5 h-3/5 object-cover z-10 opacity-0"
              style={{ border: `2px solid ${colors.secondary}` }}
            />
            <div
              ref={decorRef1}
              className="absolute -top-6 -left-6 w-24 h-24 z-0 opacity-0"
              style={{ border: `1px solid ${colors.accent}` }}
            ></div>
            <div
              ref={decorRef2}
              className="absolute -bottom-6 -right-6 w-20 h-20 z-0 opacity-0"
              style={{ border: `1px solid ${colors.accent}` }}
            ></div>
          </div>

          {/* Right side content */}
          <div className="lg:pl-8">
            <ParagraphGSAP
              className="uppercase text-xs tracking-[0.2em] font-medium mb-4"
              style={{ color: colors.accent }}
            >
              Since 1990
            </ParagraphGSAP>

            <h2
              className="text-4xl sm:text-5xl font-light mb-6 leading-tight"
              style={headingFont}
            >
              <ParagraphGSAP
                className="block mb-2"
                style={{ color: colors.tertiary }}
              >
                Learn more about
              </ParagraphGSAP>
              <ParagraphGSAP
                className="font-medium"
                style={{ color: colors.secondary }}
              >
                Krishna Engineering College
              </ParagraphGSAP>
            </h2>

            <ParagraphGSAP
              className="mb-6 leading-relaxed text-lg"
              style={{ ...bodyFont, color: colors.tertiary }}
            >
              At Krishna Engineering College, we are dedicated to shaping bright
              futures by providing world-class technical education, nurturing
              innovation, and empowering students to become leaders of tomorrow.
            </ParagraphGSAP>

            <ParagraphGSAP
              className="pl-5 italic mb-8 py-2 border-l-4"
              style={{
                ...bodyFont,
                color: colors.tertiary,
                borderColor: colors.secondary,
                backgroundColor: `${colors.light}40`,
              }}
            >
              "Since its inception in 2001, Krishna Engineering College has
              become one of the most reputed educational institutions in the
              region."
            </ParagraphGSAP>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div
                ref={addStatRef}
                className="text-center p-4 border-b-2 opacity-0"
                style={{ borderColor: colors.accent }}
              >
                <div
                  className="text-3xl font-light mb-1"
                  style={{ ...headingFont, color: colors.primary }}
                >
                  30+
                </div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ color: colors.tertiary }}
                >
                  Years
                </div>
              </div>
              <div
                ref={addStatRef}
                className="text-center p-4 border-b-2 opacity-0"
                style={{ borderColor: colors.accent }}
              >
                <div
                  className="text-3xl font-light mb-1"
                  style={{ ...headingFont, color: colors.primary }}
                >
                  7K+
                </div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ color: colors.tertiary }}
                >
                  Graduates
                </div>
              </div>
              <div
                ref={addStatRef}
                className="text-center p-4 border-b-2 opacity-0"
                style={{ borderColor: colors.accent }}
              >
                <div
                  className="text-3xl font-light mb-1"
                  style={{ ...headingFont, color: colors.primary }}
                >
                  50+
                </div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ color: colors.tertiary }}
                >
                  Programs
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              ref={ctaRef}
              className="px-8 py-4 font-medium transition-all duration-300 transform inline-flex items-center opacity-0"
              style={{
                backgroundColor: colors.primary,
                color: "white",
                border: `1px solid ${colors.primary}`,
              }}
              onMouseEnter={(e) => {
                gsap.to(e.target, {
                  backgroundColor: colors.accent,
                  borderColor: colors.accent,
                  duration: 0.3,
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, {
                  backgroundColor: colors.primary,
                  borderColor: colors.primary,
                  duration: 0.3,
                });
              }}
            >
              <span>Read Full Message</span>
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default FounderSectionGSAP;
