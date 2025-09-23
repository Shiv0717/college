import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Star, 
  Award, 
  TrendingUp, 
  Users, 
  Briefcase, 
  MapPin, 
  Calendar,
  ArrowRight,
  ArrowLeft,
  Quote,
  GraduationCap,
  Building,
  FileText
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AlumniSuccessStories = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const sliderRef = useRef(null);
  const featuredRef = useRef(null);
  const statsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [counters, setCounters] = useState({
    alumni: 0,
    satisfaction: 0,
    salary: 0,
    countries: 0
  });

  const [visibleCards, setVisibleCards] = useState(3); // Responsive card count

  const alumniStories = [
    {
      id: 1,
      name: "Sarah Chen",
      graduationYear: "2018",
      degree: "Computer Science",
      currentPosition: "Senior Software Engineer at Google",
      achievement: "Led development of AI features used by 1B+ users",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      color: "#FF7B35",
      quote: "The hands-on projects and mentorship prepared me for real-world challenges in tech.",
      stats: {
        salary: "250",
        promotions: "3",
        years: "6"
      },
      featured: true,
      companyLogo: "🔍"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      graduationYear: "2015",
      degree: "Business Administration",
      currentPosition: "Founder & CEO at InnovateTech",
      achievement: "Built $50M revenue startup from dorm room idea",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      color: "#00BA59",
      quote: "The entrepreneurship program gave me the tools and confidence to build my vision.",
      stats: {
        employees: "150",
        funding: "20",
        years: "8"
      },
      companyLogo: "🚀"
    },
    {
      id: 3,
      name: "Emily Watson",
      graduationYear: "2020",
      degree: "Graphic Design",
      currentPosition: "Creative Director at Apple",
      achievement: "Redesigned flagship product interfaces reaching millions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      color: "#1D78FD",
      quote: "The design thinking approach I learned here shapes every project I lead today.",
      stats: {
        projects: "25",
        awards: "12",
        years: "4"
      },
      companyLogo: "🍎"
    },
    {
      id: 4,
      name: "Dr. James Patterson",
      graduationYear: "2012",
      degree: "Psychology",
      currentPosition: "Clinical Researcher at Harvard Medical",
      achievement: "Published groundbreaking research on cognitive behavioral therapy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      color: "#FF6463",
      quote: "The research opportunities and faculty guidance set the foundation for my career.",
      stats: {
        publications: "30",
        citations: "2.5",
        years: "12"
      },
      companyLogo: "⚕️"
    },
    {
      id: 5,
      name: "Lisa Wang",
      graduationYear: "2019",
      degree: "Mechanical Engineering",
      currentPosition: "Lead Engineer at Tesla",
      achievement: "Developed sustainable energy solutions for electric vehicles",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      color: "#8B5CF6",
      quote: "The engineering program taught me to think critically and solve complex problems.",
      stats: {
        patents: "5",
        projects: "18",
        years: "5"
      },
      companyLogo: "⚡"
    },
    {
      id: 6,
      name: "Alex Thompson",
      graduationYear: "2017",
      degree: "Finance",
      currentPosition: "Investment Banker at Goldman Sachs",
      achievement: "Managed $2B in assets for Fortune 500 companies",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      color: "#06B6D4",
      quote: "The financial modeling skills I gained have been invaluable in my career.",
      stats: {
        deals: "45",
        assets: "2",
        years: "7"
      },
      companyLogo: "💼"
    }
  ];

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const featuredAlumni = alumniStories.find(alumni => alumni.featured) || alumniStories[0];
  const sliderAlumni = alumniStories.filter(alumni => !alumni.featured);

  // Counter animation
  useEffect(() => {
    const animateCounters = () => {
      const targets = {
        alumni: 50000,
        satisfaction: 90,
        salary: 85,
        countries: 150
      };

      Object.keys(targets).forEach(key => {
        let start = 0;
        const end = targets[key];
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(start)
          }));
        }, 16);
      });
    };

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      onEnter: animateCounters,
      once: true
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation with stagger letters
      const heading = headerRef.current?.querySelector('h2');
      if (heading) {
        const letters = heading.textContent.split('');
        heading.innerHTML = letters.map(letter => 
          `<span class="letter">${letter === ' ' ? '&nbsp;' : letter}</span>`
        ).join('');
        
        gsap.fromTo(heading.querySelectorAll('.letter'),
          { 
            opacity: 0, 
            y: 60,
            rotationX: -90
          },
          { 
            opacity: 1, 
            y: 0,
            rotationX: 0,
            duration: 1,
            stagger: 0.03,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Featured card staggered animation
      const featuredElements = featuredRef.current?.querySelectorAll('.featured-element');
      if (featuredElements) {
        gsap.fromTo(featuredElements,
          { 
            opacity: 0, 
            y: 50,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Enhanced hover animations for desktop only
      if (window.innerWidth >= 768) {
        const featuredCard = featuredRef.current;
        if (featuredCard) {
          featuredCard.addEventListener('mouseenter', () => {
            gsap.to(featuredCard, {
              y: -10,
              scale: 1.02,
              duration: 0.4,
              ease: "power2.out"
            });
            
            gsap.to(featuredCard.querySelectorAll('.stat-item'), {
              y: -5,
              scale: 1.05,
              duration: 0.3,
              stagger: 0.1,
              ease: "power2.out"
            });
          });

          featuredCard.addEventListener('mouseleave', () => {
            gsap.to(featuredCard, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out"
            });
            
            gsap.to(featuredCard.querySelectorAll('.stat-item'), {
              y: 0,
              scale: 1,
              duration: 0.3,
              stagger: 0.1
            });
          });
        }

        // Enhanced slider card hover animations for desktop
        cardsRef.current.forEach((card) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -8,
              scale: 1.03,
              rotationY: 5,
              duration: 0.3,
              ease: "power2.out"
            });
            
            const image = card.querySelector('img');
            gsap.to(image, {
              scale: 1.1,
              duration: 0.4,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 0.3,
              ease: "power2.out"
            });
            
            const image = card.querySelector('img');
            gsap.to(image, {
              scale: 1,
              duration: 0.4
            });
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const addToStatsRefs = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % Math.ceil(sliderAlumni.length / visibleCards));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + Math.ceil(sliderAlumni.length / visibleCards)) % Math.ceil(sliderAlumni.length / visibleCards));
  };

  const getVisibleAlumni = () => {
    const startIndex = activeIndex * visibleCards;
    return sliderAlumni.slice(startIndex, startIndex + visibleCards);
  };

  const Counter = ({ value, suffix = "" }) => {
    return <span>{value.toLocaleString()}{suffix}</span>;
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-8 md:py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-48 md:w-72 h-48 md:h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-8 md:mb-16">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3 md:mb-4 bg-blue-50 px-3 md:px-4 py-1 md:py-2 rounded-full">
            <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
            Trailblazers & Innovators
          </span>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-orange-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
              Alumni Success 
            </span>
          </h2>
          
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover how our graduates are making waves across industries worldwide. 
            Their journeys from campus to career inspire the next generation of leaders.
          </p>
        </div>

        {/* Main Content - Stack on mobile, 40/60 split on desktop */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Left Side - Featured Alumni Card */}
          <div className="lg:w-2/5">
            <div 
              ref={featuredRef}
              className="featured-card group relative bg-white rounded-2xl md:rounded-3xl transition-all duration-500 overflow-hidden cursor-pointer h-full shadow-lg"
              style={{ 
                borderLeft: `6px solid ${featuredAlumni.color}`,
                background: `linear-gradient(135deg, white 0%, ${featuredAlumni.color}08 100%)`
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundColor: featuredAlumni.color }}
              />

              <div className="relative p-4 md:p-6 lg:p-8 z-10 h-full flex flex-col">
                {/* Header Section */}
                <div className="featured-element flex items-center justify-between mb-4 md:mb-6">
                  <div 
                    className="px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold text-white shadow-lg flex items-center gap-1 md:gap-2"
                    style={{ backgroundColor: featuredAlumni.color }}
                  >
                    <Star className="w-3 h-3 md:w-4 md:h-4" />
                    Featured Alumni
                  </div>
                  <div 
                    className="w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg"
                    style={{ backgroundColor: featuredAlumni.color }}
                  >
                    {featuredAlumni.companyLogo}
                  </div>
                </div>

                {/* Alumni Image & Info */}
                <div className="featured-element flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                      <img
                        src={featuredAlumni.image}
                        alt={featuredAlumni.name}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div 
                      className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 px-2 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                      style={{ backgroundColor: featuredAlumni.color }}
                    >
                      '{featuredAlumni.graduationYear.slice(2)}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 truncate">{featuredAlumni.name}</h3>
                    <p className="text-gray-600 text-sm md:text-base mb-2 truncate">{featuredAlumni.degree}</p>
                    <div 
                      className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-white truncate"
                      style={{ backgroundColor: featuredAlumni.color }}
                    >
                      <Briefcase className="w-3 h-3" />
                      <span className="truncate">{featuredAlumni.currentPosition.split(' at ')[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Achievement */}
                <div className="featured-element mb-4 md:mb-6">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed bg-gradient-to-r from-gray-50 to-blue-50 p-3 md:p-4 rounded-xl">
                    {featuredAlumni.achievement}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="featured-element grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                  {Object.entries(featuredAlumni.stats).map(([key, value], index) => (
                    <div 
                      key={key} 
                      className="stat-item bg-white rounded-lg md:rounded-xl p-2 md:p-3 text-center shadow-sm border border-gray-100"
                    >
                      <div 
                        className="text-base md:text-lg font-bold mb-1"
                        style={{ color: featuredAlumni.color }}
                      >
                        {value}{key === 'salary' ? 'K' : key === 'funding' ? 'M' : key === 'citations' ? 'K' : ''}
                      </div>
                      <div className="text-xs text-gray-600 capitalize truncate">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Quote Section */}
                <div className="featured-element mt-auto">
                  <div className="relative bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6">
                    <Quote className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-6 h-6 md:w-8 md:h-8 text-gray-300" />
                    <p className="text-gray-700 italic leading-relaxed text-sm md:text-base text-center">
                      "{featuredAlumni.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Slider */}
          <div className="lg:w-3/5">
            <div ref={sliderRef} className="relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 h-full shadow-lg">
              {/* Slider Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2 md:gap-3">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  More Success Stories
                </h3>
                
                {/* Enhanced Slider Controls */}
                <div className="flex items-center space-x-3 md:space-x-4 w-full sm:w-auto justify-between sm:justify-normal">
                  <span className="text-sm text-gray-600 font-medium whitespace-nowrap">
                    {activeIndex + 1} / {Math.ceil(sliderAlumni.length / visibleCards)}
                  </span>
                  <div className="flex space-x-2 md:space-x-3">
                    <button 
                      onClick={prevSlide}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border-2 border-gray-200 flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
                    >
                      <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-blue-600" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border-2 border-gray-200 flex items-center justify-center hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
                    >
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-green-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Slider Content */}
              <div className="space-y-4 md:space-y-6">
                {getVisibleAlumni().map((alumni, index) => (
                  <div
                    key={alumni.id}
                    ref={addToRefs}
                    className="group relative bg-gradient-to-r from-gray-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-transparent shadow-sm"
                    style={{ borderLeft: `4px solid ${alumni.color}` }}
                  >
                    <div className="flex items-center space-x-3 md:space-x-4">
                      {/* Image */}
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                          <img
                            src={alumni.image}
                            alt={alumni.name}
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div 
                          className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 px-1 md:px-2 py-0.5 md:py-1 rounded-full text-xs font-bold text-white shadow-md"
                          style={{ backgroundColor: alumni.color }}
                        >
                          '{alumni.graduationYear.slice(2)}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 md:mb-3 gap-2">
                          <div className="min-w-0">
                            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1 truncate">{alumni.name}</h4>
                            <p className="text-xs md:text-sm text-gray-600 flex items-center gap-1 truncate">
                              <GraduationCap className="w-3 h-3 flex-shrink-0" />
                              {alumni.degree}
                            </p>
                          </div>
                          <div 
                            className="px-2 md:px-3 py-1 rounded-full text-xs font-semibold text-white flex-shrink-0 self-start sm:self-center truncate max-w-[120px] md:max-w-none"
                            style={{ backgroundColor: alumni.color }}
                          >
                            <span className="truncate">{alumni.currentPosition.split(' at ')[0]}</span>
                          </div>
                        </div>
                        
                        <p className="text-xs md:text-sm text-gray-700 mb-2 md:mb-3 line-clamp-2">{alumni.achievement}</p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <span className="text-xs text-gray-500 flex items-center gap-1 whitespace-nowrap">
                            <Building className="w-3 h-3" />
                            {alumni.currentPosition.split(' at ')[1] || 'Global'}
                          </span>
                          <div className="flex space-x-1 md:space-x-2 flex-wrap gap-1">
                            {Object.entries(alumni.stats).slice(0, 2).map(([key, value]) => (
                              <div key={key} className="text-xs bg-white px-2 py-1 rounded border flex items-center gap-1">
                                <FileText className="w-3 h-3" style={{ color: alumni.color }} />
                                <span className="font-semibold" style={{ color: alumni.color }}>
                                  {value}{key === 'salary' ? 'K' : key === 'funding' ? 'M' : ''}
                                </span> 
                                <span className="hidden sm:inline">{key}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Bar with Counter Animation */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
          {[
            { value: counters.alumni, label: "Alumni Worldwide", color: "#FF7B35", icon: Users },
            { value: counters.satisfaction, label: "Career Satisfaction", color: "#00BA59", icon: TrendingUp },
            { value: counters.salary, label: "Average Salary", color: "#1D78FD", icon: Award },
            { value: counters.countries, label: "Countries Represented", color: "#FF6463", icon: MapPin }
          ].map((stat, index) => (
            <div 
              key={index}
              ref={addToStatsRefs}
              className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-sm border border-gray-200/50 hover:scale-105 transition-transform duration-300 shadow-sm"
              style={{ backgroundColor: `${stat.color}08` }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl mb-2 md:mb-3" style={{ backgroundColor: `${stat.color}20` }}>
                <stat.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: stat.color }} />
              </div>
              
              <div 
                className="text-2xl md:text-3xl font-bold mb-1"
                style={{ color: stat.color }}
              >
                <Counter value={stat.value} suffix={stat.label.includes('Salary') ? 'K' : stat.label.includes('Satisfaction') ? '%' : '+'} />
              </div>
              
              <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSuccessStories;