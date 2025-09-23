"use client";
import React, { useState, useRef, useEffect } from "react";
import { Cpu, Zap, Settings, GraduationCap, Users, BookOpen, Award, Calendar, Code, Network, Database, Cloud, ArrowRight, Play, Pause } from "lucide-react";
import { gsap } from "gsap";

const EngineeringDepartments = () => {
  const [activeDepartment, setActiveDepartment] = useState(0);
  const [isHoverEnabled, setIsHoverEnabled] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef([]);
  const navItemsRef = useRef([]);
  const departments = [
    {
      id: 1,
      number: "01",
      title: "Computer Science & Engineering",
      shortTitle: "CSE",
      description:
        "Pioneering the future of technology with cutting-edge research in AI, Machine Learning, Cybersecurity, and Software Development. Our CSE department produces innovators who shape the digital world.",
      icon: Cpu,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&h=700&fit=crop",
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-600",
      bgColor: "bg-blue-500",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
      stats: {
        students: "1200+",
        faculty: "45",
        labs: "15",
        placements: "98%",
      },
      features: [
        "AI & Machine Learning",
        "Cybersecurity",
        "Cloud Computing",
        "Data Science",
      ],
      icons: [Code, Network, Database, Cloud],
    },
    {
      id: 2,
      number: "02",
      title: "Mechanical Engineering",
      shortTitle: "MECH",
      description:
        "Driving innovation in design, manufacturing, and automation. Our Mechanical Engineering program focuses on robotics, thermal systems, and advanced materials technology for industrial applications.",
      icon: Settings,
      image:
        "https://plus.unsplash.com/premium_photo-1664297997167-88170c57bc35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-orange-500 to-red-500",
      textColor: "text-orange-600",
      bgColor: "bg-orange-500",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500",
      stats: {
        students: "950+",
        faculty: "38",
        labs: "12",
        placements: "95%",
      },
      features: [
        "Robotics & Automation",
        "Thermal Engineering",
        "CAD/CAM",
        "Advanced Materials",
      ],
      icons: [Settings, GraduationCap, Award, Users],
    },
    {
      id: 3,
      number: "03",
      title: "Electrical Engineering",
      shortTitle: "EEE",
      description:
        "Powering the future with innovations in renewable energy, smart grids, and electronic systems. Our Electrical Engineering department leads in power systems, control engineering, and IoT applications.",
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&h=700&fit=crop",
      color: "from-green-500 to-emerald-500",
      textColor: "text-green-600",
      bgColor: "bg-green-500",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
      stats: {
        students: "800+",
        faculty: "32",
        labs: "10",
        placements: "96%",
      },
      features: [
        "Power Systems",
        "Renewable Energy",
        "Control Systems",
        "IoT & Embedded",
      ],
      icons: [Zap, BookOpen, Award, Calendar],
    },
    {
      id: 4,
      number: "04",
      title: "Civil Engineering",
      shortTitle: "CIVIL",
      description:
        "Building the foundation of modern infrastructure with expertise in structural engineering, construction technology, and sustainable design. Our Civil Engineering department shapes the skylines and smart cities of tomorrow.",
      icon: GraduationCap,
      image:
        "https://plus.unsplash.com/premium_photo-1664474927853-900d5ee1fd80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-red-500 to-red-500",
      textColor: "text-red-600",
      bgColor: "bg-red-500",
      gradient: "bg-gradient-to-r from-red-500 to-red-500",
      stats: {
        students: "1000+",
        faculty: "40",
        labs: "14",
        placements: "94%",
      },
      features: [
        "Structural Engineering",
        "Transportation Engineering",
        "Geotechnical Engineering",
        "Environmental Engineering",
      ],
      icons: [Users, Award, Database, Settings],
    },
  ];
  

  const activeDept = departments[activeDepartment];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleDepartmentChange((activeDepartment + 1) % departments.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeDepartment, isAutoPlaying]);

  // Enhanced GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out"
        }
      );

      // Floating background elements animation
      gsap.to(".floating-element", {
        y: 20,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Enhanced department change animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax and scale animation
      gsap.fromTo(imageRef.current,
        { 
          opacity: 0, 
          scale: 1.1,
          x: 50 
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "power3.out"
        }
      );

      // Content slide-in with stagger
      const tl = gsap.timeline();
      tl.fromTo(titleRef.current,
        { opacity: 0, x: -60, y: 20 },
        { opacity: 1, x: 0, y: 0, duration: 0.8, ease: "back.out(1.7)" }
      )
      .fromTo(descriptionRef.current,
        { opacity: 0, x: -40, y: 10 },
        { opacity: 1, x: 0, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(featuresRef.current,
        { 
          opacity: 0, 
          y: 30,
          stagger: 0.1 
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out" 
        },
        "-=0.3"
      )
      .fromTo(statsRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
        "-=0.2"
      );

      // Active nav item highlight animation
      gsap.to(navItemsRef.current[activeDepartment], {
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        duration: 0.3,
        ease: "power2.out"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [activeDepartment]);

  const handleDepartmentChange = (index) => {
    if (index === activeDepartment) return;

    // Reset previous active nav item
    if (navItemsRef.current[activeDepartment]) {
      gsap.to(navItemsRef.current[activeDepartment], {
        scale: 1,
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        duration: 0.3
      });
    }

    // Enhanced exit animation
    const tl = gsap.timeline();
    tl.to([imageRef.current, titleRef.current, descriptionRef.current, statsRef.current, ...featuresRef.current], {
      opacity: 0,
      x: -30,
      duration: 0.4,
      ease: "power3.in",
      stagger: 0.05
    })
    .add(() => {
      setActiveDepartment(index);
    });
  };

  const handleHoverChange = (index) => {
    if (isHoverEnabled && index !== activeDepartment) {
      // Hover preview animation
      gsap.to(navItemsRef.current[index], {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out"
      });
      
      setTimeout(() => {
        if (activeDepartment !== index) {
          gsap.to(navItemsRef.current[index], {
            scale: 1,
            duration: 0.2
          });
        }
      }, 300);
      
      handleDepartmentChange(index);
    }
  };

  const handleHoverStart = (index) => {
    if (isHoverEnabled && index !== activeDepartment) {
      gsap.to(navItemsRef.current[index], {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  };

  const handleHoverEnd = (index) => {
    if (isHoverEnabled && index !== activeDepartment) {
      gsap.to(navItemsRef.current[index], {
        scale: 1,
        duration: 0.2
      });
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
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100/20" />
      
      {/* Animated floating elements */}
      <div className={`floating-element absolute top-20 left-10 w-72 h-72 ${activeDept.gradient} rounded-full blur-3xl opacity-10`} />
      <div className={`floating-element absolute bottom-20 right-10 w-96 h-96 ${activeDept.gradient} rounded-full blur-3xl opacity-10`} />
      <div className={`floating-element absolute top-1/2 left-1/4 w-64 h-64 ${activeDept.gradient} rounded-full blur-3xl opacity-5`} />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${activeDept.textColor.split('-')[1]} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div ref={contentRef} className="relative z-10 space-y-6 lg:space-y-8">
          {/* Section Header */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl ${activeDept.gradient} flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110`}>
                <activeDept.icon size={24} className="text-white" />
              </div>
              <div>
                <span className="text-3xl font-semibold uppercase tracking-widest text-gray-500">
                  Engineering Departments
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${activeDept.bgColor} animate-pulse`} />
                  <span className="text-xs text-gray-400"> Innovation and technical excellence</span>
                </div>
              </div>
            </div>
            
            <div ref={titleRef} className="transform transition-all duration-300">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                
                {activeDept.title}
              </h1>
            </div>
            
            <p ref={descriptionRef} className="text-base lg:text-lg text-gray-600 leading-relaxed font-light">
              {activeDept.description}
            </p>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mt-4 lg:mt-6">
            {activeDept.features.map((feature, index) => {
              const IconComponent = activeDept.icons[index];
              return (
                <div 
                  key={feature}
                  ref={el => featuresRef.current[index] = el}
                  className="group flex items-center gap-3 p-3 lg:p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-100/50 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                >
                  <div className={`p-2 rounded-lg ${activeDept.bgColor} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                    <IconComponent size={18} className={`${activeDept.textColor}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                  <ArrowRight size={16} className="ml-auto text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              );
            })}
          </div>

          {/* Enhanced Stats */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6 lg:mt-8 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100/50">
            {Object.entries(activeDept.stats).map(([key, value]) => (
              <div key={key} className="text-center group cursor-pointer">
                <div className={`text-xl lg:text-3xl font-bold ${activeDept.textColor} mb-1 transition-transform duration-300 group-hover:scale-110`}>
                  {value}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                  {key}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Department Navigation */}
          <div className="flex flex-col gap-3 lg:gap-4 mt-6 lg:mt-8">
            {departments.map((dept, index) => (
              <button
                key={dept.id}
                ref={el => navItemsRef.current[index] = el}
                onMouseEnter={() => handleHoverStart(index)}
                onMouseLeave={() => handleHoverEnd(index)}
                onClick={() => handleDepartmentChange(index)}
                className={`group relative flex items-center gap-4 lg:gap-6 p-4 lg:p-5 rounded-xl lg:rounded-2xl transition-all duration-300 border-2 overflow-hidden ${
                  activeDepartment === index 
                    ? `bg-white shadow-xl border-l-4 ${dept.bgColor} scale-105`
                    : 'bg-white/50 backdrop-blur-sm border-transparent hover:bg-white/70'
                } ${!isHoverEnabled ? 'hover:bg-white/50' : ''}`}
              >
                {/* Animated background */}
                <div className={`absolute inset-0 ${dept.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* <div className={`text-2xl lg:text-3xl font-bold transition-all duration-300 ${
                  activeDepartment === index ? dept.textColor : 'text-gray-300'
                }`}>
                  {dept.number}
                </div> */}
                
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
                    : 'bg-gray-200 group-hover:bg-gray-300'
                }`} />
              </button>
            ))}
          </div>

          {/* Enhanced Control Toggle */}
          <div className="flex items-center justify-between mt-6 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/50">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">Navigation:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsHoverEnabled(true)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isHoverEnabled 
                      ? `${activeDept.gradient} text-white shadow-lg` 
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  Hover
                </button>
                <button
                  onClick={() => setIsHoverEnabled(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    !isHoverEnabled 
                      ? `${activeDept.gradient} text-white shadow-lg` 
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  Click Only
                </button>
              </div>
            </div>
            
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isAutoPlaying 
                  ? `${activeDept.bgColor} text-white` 
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        </div>

        {/* Enhanced Right Image */}
        <div className="relative h-[400px] lg:h-[700px] rounded-2xl lg:rounded-3xl overflow-hidden mt-8 lg:mt-0 group">
          <img
            ref={imageRef}
            src={activeDept.image}
            alt={activeDept.title}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl lg:rounded-3xl transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Enhanced Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl lg:rounded-3xl`} />
          
          {/* Animated Department Badge */}
          <div className={`absolute top-6 lg:top-8 left-6 lg:left-8 px-4 lg:px-6 py-2 lg:py-3 rounded-full backdrop-blur-md bg-white/90 shadow-lg transform transition-transform duration-300 hover:scale-105`}>
            <span className={`text-xs lg:text-sm font-bold ${activeDept.textColor}`}>
              {activeDept.shortTitle} DEPARTMENT
            </span>
          </div>

          {/* Enhanced Quick Navigation Dots */}
          <div className="absolute top-1/2 right-4 lg:right-8 transform -translate-y-1/2 flex flex-col gap-3 lg:gap-4">
            {departments.map((dept, index) => (
              <button
                key={dept.id}
                onMouseEnter={() => isHoverEnabled && handleHoverStart(index)}
                onMouseLeave={() => isHoverEnabled && handleHoverEnd(index)}
                onClick={() => handleDepartmentChange(index)}
                className={`group relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full backdrop-blur-sm transition-all duration-300 ${
                  activeDepartment === index 
                    ? 'bg-white/90 shadow-lg scale-110' 
                    : 'bg-black/20 hover:bg-black/30 hover:scale-105'
                }`}
              >
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeDepartment === index 
                    ? dept.bgColor
                    : 'bg-white/60 group-hover:bg-white/80'
                }`} />
                <span className="absolute right-full mr-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {dept.shortTitle}
                </span>
              </button>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-4 left-4 right-4 lg:left-8 lg:right-8">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className={`h-full ${activeDept.bgColor} transition-all duration-1000 ease-out`}
                style={{ width: isAutoPlaying ? '100%' : '0%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringDepartments;