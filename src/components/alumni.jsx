import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AlumniSuccessStories = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const alumniStories = [
    {
      id: 1,
      name: "Sarah Chen",
      graduationYear: "2018",
      degree: "Computer Science",
      currentPosition: "Senior Software Engineer at Google",
      achievement: "Led development of AI features used by 1B+ users",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      color: "#00BA59",
      quote: "The hands-on projects and mentorship prepared me for real-world challenges in tech.",
      stats: {
        salary: "$250K",
        promotions: "3",
        years: "6"
      },
      featured: true
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      graduationYear: "2015",
      degree: "Business Administration",
      currentPosition: "Founder & CEO at InnovateTech",
      achievement: "Built $50M revenue startup from dorm room idea",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      color: "#FF6463",
      quote: "The entrepreneurship program gave me the tools and confidence to build my vision.",
      stats: {
        employees: "150",
        funding: "$20M",
        years: "8"
      }
    },
    {
      id: 3,
      name: "Emily Watson",
      graduationYear: "2020",
      degree: "Graphic Design",
      currentPosition: "Creative Director at Apple",
      achievement: "Redesigned flagship product interfaces reaching millions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      color: "#FECF54",
      quote: "The design thinking approach I learned here shapes every project I lead today.",
      stats: {
        projects: "25+",
        awards: "12",
        years: "4"
      }
    },
    {
      id: 4,
      name: "Dr. James Patterson",
      graduationYear: "2012",
      degree: "Psychology",
      currentPosition: "Clinical Researcher at Harvard Medical",
      achievement: "Published groundbreaking research on cognitive behavioral therapy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      color: "#1D78FD",
      quote: "The research opportunities and faculty guidance set the foundation for my career.",
      stats: {
        publications: "30+",
        citations: "2.5K",
        years: "12"
      }
    },
    {
      id: 5,
      name: "Lisa Wang",
      graduationYear: "2019",
      degree: "Computer Science",
      currentPosition: "Product Manager at Meta",
      achievement: "Launched features impacting 500M+ daily active users",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      color: "#00BA59",
      quote: "The collaborative projects taught me how to lead cross-functional teams effectively.",
      stats: {
        products: "15+",
        teams: "8",
        years: "5"
      }
    },
    {
      id: 6,
      name: "David Thompson",
      graduationYear: "2016",
      degree: "Business Administration",
      currentPosition: "Investment Partner at Sequoia Capital",
      achievement: "Led investments in 3 unicorn startups",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
      color: "#FF6463",
      quote: "The case study method and networking opportunities opened doors in venture capital.",
      stats: {
        investments: "$150M",
        exits: "7",
        years: "8"
      }
    },
    {
      id: 7,
      name: "Anita Kapoor",
      graduationYear: "2017",
      degree: "Mechanical Engineering",
      currentPosition: "Robotics Engineer at Tesla",
      achievement: "Designed automation systems for self-driving cars",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face",
      color: "#FECF54",
      quote: "Hands-on labs and engineering challenges built my problem-solving mindset.",
      stats: {
        patents: "5",
        projects: "18",
        years: "7"
      }
    },
    {
      id: 8,
      name: "Michael Lee",
      graduationYear: "2013",
      degree: "Law",
      currentPosition: "Partner at Global Law Associates",
      achievement: "Won precedent-setting cases in international trade law",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      color: "#1D78FD",
      quote: "Moot courts and internships gave me the confidence to argue complex cases.",
      stats: {
        cases: "200+",
        wins: "180",
        years: "11"
      }
    },
    {
      id: 9,
      name: "Sophia Martinez",
      graduationYear: "2021",
      degree: "Biotechnology",
      currentPosition: "Research Scientist at Moderna",
      achievement: "Contributed to next-gen mRNA vaccine research",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=400&h=400&fit=crop&crop=face",
      color: "#00BA59",
      quote: "The lab facilities and mentorship shaped my path in biomedical innovation.",
      stats: {
        patents: "3",
        trials: "10+",
        years: "3"
      }
    },
    {
      id: 10,
      name: "Daniel Carter",
      graduationYear: "2010",
      degree: "Architecture",
      currentPosition: "Founder at Carter Designs",
      achievement: "Designed award-winning sustainable smart buildings",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      color: "#FF6463",
      quote: "Studio projects here taught me to balance creativity with real-world impact.",
      stats: {
        projects: "50+",
        awards: "15",
        years: "14"
      }
    },
    {
      id: 11,
      name: "Aisha Khan",
      graduationYear: "2014",
      degree: "Economics",
      currentPosition: "Chief Economist at World Bank",
      achievement: "Advised governments on global financial policy",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face",
      color: "#1D78FD",
      quote: "The interdisciplinary exposure gave me a global perspective on economics.",
      stats: {
        reports: "40+",
        countries: "25",
        years: "10"
      }
    },
    {
      id: 12,
      name: "Jason Miller",
      graduationYear: "2011",
      degree: "Environmental Science",
      currentPosition: "Director at Green Earth Initiative",
      achievement: "Led international campaigns reducing plastic waste by 30%",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
      color: "#FECF54",
      quote: "Field research projects made me passionate about driving real environmental change.",
      stats: {
        campaigns: "12",
        impact: "30%",
        years: "13"
      }
    }
  ];
  
  const featuredAlumni = alumniStories.find(alumni => alumni.featured) || alumniStories[0];
  const sliderAlumni = alumniStories.filter(alumni => !alumni.featured);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current, 
        { 
          opacity: 0, 
          y: 80,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Featured card animation
      gsap.fromTo('.featured-card',
        { 
          opacity: 0, 
          x: -100,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.featured-card',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Slider animation
      gsap.fromTo(sliderRef.current,
        { 
          opacity: 0, 
          x: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards animation with stagger
      gsap.fromTo(cardsRef.current,
        { 
          opacity: 0, 
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animations for featured card
      const featuredCard = document.querySelector('.featured-card');
      if (featuredCard) {
        featuredCard.addEventListener('mouseenter', () => {
          gsap.to(featuredCard, {
            y: -5,
            scale: 1.02,
            duration: 0.4,
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
        });
      }

      // Hover animations for slider cards
      cardsRef.current.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -5,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % Math.ceil(sliderAlumni.length / 2));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + Math.ceil(sliderAlumni.length / 2)) % Math.ceil(sliderAlumni.length / 2));
  };

  const getVisibleAlumni = () => {
    const startIndex = activeIndex * 3;
    return sliderAlumni.slice(startIndex, startIndex + 3);
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50/20"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-xs font-semibold text-blue-800 tracking-widest uppercase mb-2 block font-lato">
            Trailblazers & Innovators
          </span>
          <h2 
            className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Alumni Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our graduates are making waves across industries worldwide. 
            Their journeys from campus to career inspire the next generation of leaders.
          </p>
        </div>

        {/* Main Content - 40/60 Split */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Left Side - Featured Alumni (40%) */}
          <div className="lg:w-2/5">
            <div 
              className="featured-card group relative bg-white rounded-2xl transition-all duration-500 overflow-hidden cursor-pointer h-full"
              style={{ borderLeft: `6px solid ${featuredAlumni.color}` }}
            >
              {/* Background Pattern */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ backgroundColor: featuredAlumni.color }}
              />

              {/* Content */}
              <div className="relative p-8 z-10 h-full flex flex-col">
                {/* Featured Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg"
                    style={{ backgroundColor: featuredAlumni.color }}
                  >
                    Featured Alumni
                  </div>
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg"
                    style={{ backgroundColor: featuredAlumni.color }}
                  >
                    ★
                  </div>
                </div>

                {/* Alumni Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                      <img
                        src={featuredAlumni.image}
                        alt={featuredAlumni.name}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div 
                      className="absolute -bottom-3 -right-3 px-3 py-2 rounded-full text-sm font-bold text-white shadow-lg"
                      style={{ backgroundColor: featuredAlumni.color }}
                    >
                      '{featuredAlumni.graduationYear.slice(2)}
                    </div>
                  </div>
                </div>

                {/* Alumni Info */}
                <div className="text-center mb-6">
                  <h3 
                    className="text-2xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    {featuredAlumni.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{featuredAlumni.degree}</p>
                  <div 
                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white mb-4"
                    style={{ backgroundColor: featuredAlumni.color }}
                  >
                    {featuredAlumni.currentPosition}
                  </div>
                </div>

               

                {/* Quote */}
                <div className="mt-auto p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-3xl mb-2 text-gray-300">"</div>
                    <p className="text-gray-700 italic leading-relaxed">{featuredAlumni.quote}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  {Object.entries(featuredAlumni.stats).map(([key, value]) => (
                    <div key={key} className="bg-white rounded-lg p-3 shadow-sm">
                      <div 
                        className="text-lg font-bold mb-1"
                        style={{ color: featuredAlumni.color }}
                      >
                        {value}
                      </div>
                      <div className="text-xs text-gray-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Slider (60%) */}
          <div className="lg:w-3/5">
            <div ref={sliderRef} className="relative bg-white rounded-2xl  p-8 h-full">
              {/* Slider Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 
                  className="text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  More Success Stories
                </h3>
                
                {/* Slider Controls */}
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    {activeIndex + 1} / {Math.ceil(sliderAlumni.length / 2)}
                  </span>
                  <div className="flex space-x-2">
                    <button 
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      ←
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>

              {/* Slider Content */}
              <div className="space-y-6">
                {getVisibleAlumni().map((alumni, index) => (
                  <div
                    key={alumni.id}
                    ref={addToRefs}
                    className="group relative bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
                    style={{ borderLeft: `4px solid ${alumni.color}` }}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Image */}
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl overflow-hidden border-4 border-white shadow-md">
                          <img
                            src={alumni.image}
                            alt={alumni.name}
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div 
                          className="absolute -bottom-2 -right-2 px-2 py-1 rounded-full text-xs font-bold text-white shadow-md"
                          style={{ backgroundColor: alumni.color }}
                        >
                          '{alumni.graduationYear.slice(2)}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-1">{alumni.name}</h4>
                            <p className="text-sm text-gray-600">{alumni.degree}</p>
                          </div>
                          <div 
                            className="px-3 py-1 rounded-full text-xs font-semibold text-white flex-shrink-0 ml-2"
                            style={{ backgroundColor: alumni.color }}
                          >
                            {alumni.currentPosition.split(' at ')[0]}
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-3 line-clamp-2">{alumni.achievement}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {alumni.currentPosition.split(' at ')[1] ? `at ${alumni.currentPosition.split(' at ')[1]}` : ''}
                          </span>
                          <div className="flex space-x-2">
                            {Object.entries(alumni.stats).slice(0, 2).map(([key, value]) => (
                              <div key={key} className="text-xs bg-white px-2 py-1 rounded">
                                <span className="font-semibold" style={{ color: alumni.color }}>{value}</span> {key}
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

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-blue-600 mb-1" style={{ fontFamily: "'Merriweather', serif" }}>50K+</div>
            <div className="text-sm text-gray-600">Alumni Worldwide</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-green-600 mb-1" style={{ fontFamily: "'Merriweather', serif" }}>90%</div>
            <div className="text-sm text-gray-600">Career Satisfaction</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-yellow-600 mb-1" style={{ fontFamily: "'Merriweather', serif" }}>$85K</div>
            <div className="text-sm text-gray-600">Average Salary</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-red-600 mb-1" style={{ fontFamily: "'Merriweather', serif" }}>150+</div>
            <div className="text-sm text-gray-600">Countries Represented</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Lato:wght@300;400;500;600;700&display=swap');
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default AlumniSuccessStories;