import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechPrograms = () => {
  const sectionRef = useRef(null);
  const programsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Programs animation
      programsRef.current.forEach((program, index) => {
        gsap.fromTo(program,
          { 
            opacity: 0, 
            y: 60,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: program,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const programs = [
    {
      id: 1,
      title: "Drone Technology",
      icon: "🚁",
      description: "Master the fundamentals of drone technology, from assembly to flight programming.",
      duration: "4 Weeks",
      level: "Beginner to Intermediate",
      features: [
        "Hands-on drone assembly workshop",
        "Flight simulation training",
        "Aerial photography & videography",
        "Drone programming with Python"
      ],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1000&q=80",
      price: "₹12,999",
      originalPrice: "₹16,999",
      discount: "23% off",
      color: "#00BA59",
      status: "Enrolling Now",
      students: "124 enrolled"
    },
    {
      id: 2,
      title: "EV Manufacturing & Embedded Systems",
      icon: "⚡",
      description: "Comprehensive training in electric vehicle technology and embedded systems design.",
      duration: "4 Weeks",
      level: "Intermediate to Advanced",
      features: [
        "EV architecture & components",
        "Battery management systems",
        "Embedded C programming",
        "PCB design & fabrication"
      ],
      image: "https://images.unsplash.com/photo-1593941707882-a5bba53377fe?auto=format&fit=crop&w=1000&q=80",
      price: "₹14,999",
      originalPrice: "₹19,999",
      discount: "25% off",
      color: "#1D78FD",
      status: "Starting Soon",
      students: "89 enrolled"
    },
    {
      id: 3,
      title: "Advanced Coding Program",
      icon: "💻",
      description: "Intensive coding bootcamp focusing on advanced algorithms and modern development practices.",
      duration: "4 Weeks",
      level: "Intermediate to Advanced",
      features: [
        "Data structures & algorithms",
        "Web & mobile app development",
        "Cloud deployment & DevOps",
        "AI & machine learning basics"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      price: "₹11,999",
      originalPrice: "₹15,999",
      discount: "25% off",
      color: "#FF6463",
      status: "Limited Seats",
      students: "156 enrolled"
    }
  ];

  const addToRefs = (el) => {
    if (el && !programsRef.current.includes(el)) {
      programsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-6 mb-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
            Tech Programs
          </h1>
          <p className="text-gray-400 text-lg" style={{ fontFamily: "'Lato', sans-serif" }}>
            Intensive, project-based programs to accelerate your tech career
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Left Panel - Program Overview */}
          <div className="bg-gray-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                Program Overview
              </h3>
              <p className="text-sm text-gray-300 mb-6" style={{ fontFamily: "'Lato', sans-serif" }}>
                Select from our intensive programs designed for future-ready skills development.
              </p>
              
              <div className="space-y-4">
                {programs.map((program) => (
                  <div key={program.id} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/50">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-lg"
                      style={{ backgroundColor: `${program.color}20` }}
                    >
                      {program.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-white text-sm">{program.title}</p>
                      <p className="text-xs text-gray-400">{program.students}</p>
                    </div>
                    <span 
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ 
                        backgroundColor: `${program.color}20`,
                        color: program.color
                      }}
                    >
                      {program.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-700">
              <button className="w-full bg-teal-500 text-black py-3 rounded-lg font-semibold hover:bg-teal-400 transition-colors">
                View All Programs
              </button>
            </div>
          </div>

          {/* Middle Top Card - Featured Program */}
          <div 
            className="rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden"
            style={{ backgroundColor: '#00BA59' }}
            ref={addToRefs}
          >
            <div className="relative z-10">
              <h4 className="text-sm font-semibold text-black mb-2">FEATURED PROGRAM</h4>
              <h2 className="text-xl font-bold text-black mt-2" style={{ fontFamily: "'Merriweather', serif" }}>
                Drone Technology Mastery
              </h2>
              <p className="text-black/80 text-sm mt-2 mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
                Hands-on training from assembly to advanced flight programming
              </p>
              <div className="flex items-center justify-between">
                <span className="text-black font-semibold">4 Weeks • 124 Students</span>
                <button className="bg-black text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-800 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-black/10 rounded-tl-full"></div>
          </div>

          {/* Right Top Card - Program Image */}
          <div className="rounded-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80"
              alt="Tech Learning"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
              <h3 className="text-lg font-semibold" style={{ fontFamily: "'Merriweather', serif" }}>Hands-On Learning</h3>
              <p className="text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>Real projects, real experience</p>
            </div>
          </div>

          {/* Bottom Left Card - EV Program */}
          <div className="md:col-span-2 bg-gray-800 text-white rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                EV Manufacturing & Embedded Systems
              </h3>
              <p className="text-gray-400 text-sm mb-6" style={{ fontFamily: "'Lato', sans-serif" }}>
                Comprehensive training in electric vehicle technology and embedded systems design for the future of transportation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {programs[1].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: programs[1].color }}
                    ></div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="font-semibold">Next Cohort Starts</h4>
                <p className="text-xs text-gray-400">March 15, 2024 • 89 students enrolled</p>
              </div>
              <div className="flex space-x-2">
                <button className="border border-gray-500 text-gray-300 text-xs px-4 py-2 rounded-lg hover:border-gray-400 transition-colors">
                  Learn More
                </button>
                <button 
                  className="text-white text-xs px-4 py-2 rounded-lg font-semibold"
                  style={{ backgroundColor: programs[1].color }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Right Card - Coding Program */}
          <div className="bg-black text-white rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Advanced Coding</h3>
                <span 
                  className="text-xs font-semibold px-2 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${programs[2].color}20`,
                    color: programs[2].color
                  }}
                >
                  {programs[2].status}
                </span>
              </div>
              
              <p className="text-gray-400 text-sm mb-6" style={{ fontFamily: "'Lato', sans-serif" }}>
                Intensive coding bootcamp focusing on advanced algorithms and modern development practices.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Duration</span>
                  <span className="text-white">4 Weeks</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Level</span>
                  <span className="text-white">Intermediate+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Students</span>
                  <span className="text-white">156 enrolled</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-700">
              <div>
                <span className="text-lg font-bold">{programs[2].price}</span>
                <span className="text-sm text-gray-400 line-through ml-2">{programs[2].originalPrice}</span>
              </div>
              <button 
                className="text-white text-sm px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: programs[2].color }}
              >
                Enroll
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-1">2,500+</div>
            <div className="text-sm text-gray-400">Students Trained</div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-1">94%</div>
            <div className="text-sm text-gray-400">Placement Rate</div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-1">50+</div>
            <div className="text-sm text-gray-400">Industry Partners</div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-1">100+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Lato:wght@300;400;500;600;700&display=swap');
      `}</style>
    </div>
  );
};

export default TechPrograms;