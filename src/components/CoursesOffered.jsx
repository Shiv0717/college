"use client";
import React, { useState, useRef, useEffect } from "react";
import { Cpu, Zap, Settings, GraduationCap, Users, BookOpen, Award, Calendar, Code, Network, Database, Cloud } from "lucide-react";
import { gsap } from "gsap";

const EngineeringDepartments = () => {
  const [activeDepartment, setActiveDepartment] = useState(0);
  const [isHoverEnabled, setIsHoverEnabled] = useState(true);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef(null);

  const departments = [
    {
      id: 1,
      number: "01",
      title: "Computer Science & Engineering",
      shortTitle: "CSE",
      description: "Pioneering the future of technology with cutting-edge research in AI, Machine Learning, Cybersecurity, and Software Development. Our CSE department produces innovators who shape the digital world.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&h=700&fit=crop",
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-600",
      bgColor: "bg-blue-500",
      stats: {
        students: "1200+",
        faculty: "45",
        labs: "15",
        placements: "98%"
      },
      features: ["AI & Machine Learning", "Cybersecurity", "Cloud Computing", "Data Science"],
      icons: [Code, Network, Database, Cloud]
    },
    {
      id: 2,
      number: "02",
      title: "Mechanical Engineering",
      shortTitle: "MECH",
      description: "Driving innovation in design, manufacturing, and automation. Our Mechanical Engineering program focuses on robotics, thermal systems, and advanced materials technology for industrial applications.",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1581094794322-7a81a13e5c1d?w=1000&h=700&fit=crop",
      color: "from-orange-500 to-red-500",
      textColor: "text-orange-600",
      bgColor: "bg-orange-500",
      stats: {
        students: "950+",
        faculty: "38",
        labs: "12",
        placements: "95%"
      },
      features: ["Robotics & Automation", "Thermal Engineering", "CAD/CAM", "Advanced Materials"],
      icons: [Settings, GraduationCap, Award, Users]
    },
    {
      id: 3,
      number: "03",
      title: "Electrical Engineering",
      shortTitle: "EEE",
      description: "Powering the future with innovations in renewable energy, smart grids, and electronic systems. Our Electrical Engineering department leads in power systems, control engineering, and IoT applications.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&h=700&fit=crop",
      color: "from-green-500 to-emerald-500",
      textColor: "text-green-600",
      bgColor: "bg-green-500",
      stats: {
        students: "800+",
        faculty: "32",
        labs: "10",
        placements: "96%"
      },
      features: ["Power Systems", "Renewable Energy", "Control Systems", "IoT & Embedded"],
      icons: [Zap, BookOpen, Award, Calendar]
    }
  ];

  const activeDept = departments[activeDepartment];

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }
      );

      // Initial content animation
      gsap.fromTo([titleRef.current, descriptionRef.current],
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.3,
          ease: "power3.out"
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Department change animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out"
        }
      );

      // Content animation
      gsap.fromTo([titleRef.current, descriptionRef.current, statsRef.current],
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out"
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, [activeDepartment]);

  const handleDepartmentChange = (index) => {
    if (index === activeDepartment) return;
    
    // Exit animation before changing
    gsap.to([imageRef.current, titleRef.current, descriptionRef.current, statsRef.current], {
      opacity: 0,
      x: -30,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => {
        setActiveDepartment(index);
      }
    });
  };

  const handleHoverChange = (index) => {
    if (isHoverEnabled && index !== activeDepartment) {
      handleDepartmentChange(index);
    }
  };

  // Disable hover on mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsHoverEnabled(window.innerWidth > 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white flex items-center px-4 lg:px-20 py-16 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100/30" />
      
      {/* Floating animated elements */}
      <div className={`absolute top-20 left-10 w-72 h-72 bg-gradient-to-r ${activeDept.color} rounded-full blur-3xl opacity-10 animate-pulse`} />
      <div className={`absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r ${activeDept.color} rounded-full blur-3xl opacity-10 animate-pulse`} />

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Content */}
        <div ref={contentRef} className="relative z-10 space-y-6 lg:space-y-8">
          {/* Section Header */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-r ${activeDept.color} flex items-center justify-center shadow-lg`}>
                <activeDept.icon size={24} className="text-white" />
              </div>
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                  Engineering Departments
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${activeDept.bgColor} animate-pulse`} />
                  <span className="text-xs text-gray-400">Currently Active</span>
                </div>
              </div>
            </div>
            
            <div ref={titleRef}>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className={`${activeDept.textColor}`}>{activeDept.number}</span><br />
                {activeDept.title}
              </h1>
            </div>
            
            <p ref={descriptionRef} className="text-base lg:text-lg text-gray-600 leading-relaxed">
              {activeDept.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mt-4 lg:mt-6">
            {activeDept.features.map((feature, index) => {
              const IconComponent = activeDept.icons[index];
              return (
                <div key={feature} className="flex items-center gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100">
                  <div className={`p-2 rounded-lg ${activeDept.bgColor} bg-opacity-10`}>
                    <IconComponent size={18} className={`${activeDept.textColor}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6 lg:mt-8">
            {Object.entries(activeDept.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className={`text-xl lg:text-3xl font-bold ${activeDept.textColor} mb-1`}>
                  {value}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500">
                  {key}
                </div>
              </div>
            ))}
          </div>

          {/* Department Navigation */}
          <div className="flex flex-col gap-3 lg:gap-4 mt-6 lg:mt-8">
            {departments.map((dept, index) => (
              <button
                key={dept.id}
                onMouseEnter={() => handleHoverChange(index)}
                onClick={() => handleDepartmentChange(index)}
                className={`group flex items-center gap-4 lg:gap-6 p-4 lg:p-5 rounded-xl lg:rounded-2xl transition-all duration-300 border-2 border-gray-400 ${
                  activeDepartment === index 
                    ? `bg-white shadow-lg lg:shadow-xl border-l-4 ${dept.bgColor} scale-[1.02]`
                    : 'bg-transparent border-transparent hover:bg-white/50'
                } ${!isHoverEnabled ? 'hover:bg-transparent' : ''}`}
              >
                <div className={`text-2xl lg:text-3xl font-bold transition-all duration-300 ${
                  activeDepartment === index ? dept.textColor : 'text-gray-300'
                }`}>
                  {dept.number}
                </div>
                
                <div className="flex-1 text-left">
                  <h3 className={`text-lg lg:text-xl font-semibold transition-all duration-300 ${
                    activeDepartment === index ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {dept.shortTitle}
                  </h3>
                  <p className={`text-xs lg:text-sm transition-all duration-300 ${
                    activeDepartment === index ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {dept.title}
                  </p>
                </div>
                
                <div className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                  activeDepartment === index 
                    ? `${dept.bgColor} scale-150` 
                    : 'bg-gray-200'
                }`} />
              </button>
            ))}
          </div>

          {/* Control Toggle */}
          <div className="flex items-center gap-4 mt-4 p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-600">Navigation:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setIsHoverEnabled(true)}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  isHoverEnabled 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                Hover
              </button>
              <button
                onClick={() => setIsHoverEnabled(false)}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  !isHoverEnabled 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                Click Only
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] lg:h-[700px] rounded-2xl lg:rounded-3xl overflow-hidden mt-8 lg:mt-0">
          <img
            ref={imageRef}
            src={activeDept.image}
            alt={activeDept.title}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl lg:rounded-3xl"
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl lg:rounded-3xl`} />
          
          {/* Department Badge */}
          <div className={`absolute top-4 lg:top-8 left-4 lg:left-8 px-4 lg:px-6 py-2 lg:py-3 rounded-full backdrop-blur-md bg-white/90 shadow-lg`}>
            <span className={`text-xs lg:text-sm font-bold ${activeDept.textColor}`}>
              {activeDept.shortTitle} DEPARTMENT
            </span>
          </div>

          {/* Quick Navigation Dots */}
          <div className="absolute top-1/2 right-4 lg:right-8 transform -translate-y-1/2 flex flex-col gap-3 lg:gap-4">
            {departments.map((dept, index) => (
              <button
                key={dept.id}
                onMouseEnter={() => isHoverEnabled && handleDepartmentChange(index)}
                onClick={() => handleDepartmentChange(index)}
                className={`group relative flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full backdrop-blur-sm transition-all duration-300 ${
                  activeDepartment === index 
                    ? 'bg-white/90 shadow-lg scale-110' 
                    : 'bg-black/20 hover:bg-black/30'
                }`}
              >
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeDepartment === index 
                    ? dept.bgColor
                    : 'bg-white/60'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringDepartments;