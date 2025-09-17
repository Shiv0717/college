"use client";
import React, { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

const stats = [
  { label: "Patients treated w/ care", value: 300000 },
  { label: "Positive recovery", value: 97 },
  { label: "Certified professionals", value: 330 },
  { label: "Active support", value: 24 },
  { label: "Specialized services", value: 110 },
  { label: "Years of experience", value: 15 },
];

// Animated Counter that triggers on view
const AnimatedNumber = ({ value, suffix = "", inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(counter);
  }, [inView, value]);

  return <span className="text-3xl font-bold text-black">{count}{suffix}</span>;
};

const AboutUs = () => {
  const statsRef = useRef(null);
  const paragraphRef = useRef(null);

  const [statsInView, setStatsInView] = useState(false);
  const [paragraphInView, setParagraphInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === statsRef.current) {
            if (entry.isIntersecting) setStatsInView(true);
          }
          if (entry.target === paragraphRef.current) {
            if (entry.isIntersecting) setParagraphInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 font-inter">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-[30%] flex flex-col justify-end md:items-center lg:items-start text-center lg:text-left gap-4">
          <h3 className="text-left text-sm text-black font-semibold uppercase">About Us</h3>
          <img
            src="https://picsum.photos/400/400"
            alt="About us"
            className="w-full lg:w-72 h-72 object-cover rounded-lg mt-6 lg:mt-0"
          />
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[70%] flex flex-col justify-center gap-10">
          {/* Paragraph with scroll color animation */}
          <p
            ref={paragraphRef}
            className={`text-3xl font-medium leading-relaxed transition-colors duration-1000`}
            style={{ color: paragraphInView ? "#000000" : "#888888" }}
          >
            We provide comprehensive detailed healthcare solutions from experts
            in medical support, diagnostics, and patient care, running smoothly
            and efficiently while managing tasks & clinical support.
          </p>

          {/* Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                {/* Slightly rotated arrow */}
                <ArrowRight className="text-black w-6 h-6 rotate-12" />
                <div className="flex flex-col">
                  <AnimatedNumber
                    value={stat.value}
                    inView={statsInView}
                    suffix={stat.label.includes("%") ? "%" : stat.value > 1000 ? "K+" : "+"}
                  />
                  <span className="text-black">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
