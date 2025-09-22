import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Award, TrendingUp, Users, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const LeadershipProfiles = () => {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const [activeLeader, setActiveLeader] = useState(0);

  const leaders = [
    {
      id: "L01",
      name: "Alice Johnson",
      role: "CEO, InnovateX",
      bio: "Visionary leader with over 15 years of experience in tech and innovation. Known for inspiring teams and driving transformative projects.",
      image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80",
      achievements: ["Built a $50M startup", "Mentored 100+ leaders", "Keynote speaker at global conferences"],
      stats: [{ icon: TrendingUp, value: "15+", label: "Years Exp" }, { icon: Users, value: "50M", label: "Revenue" }],
      color: "#2563eb",
      gradient: "from-blue-50 to-blue-100",
      accent: "blue"
    },
    {
      id: "L02",
      name: "Michael Smith",
      role: "Founder, GreenFuture",
      bio: "Passionate about sustainability and social impact. Michael leads with empathy, empowering communities and organizations to create meaningful change.",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80",
      achievements: ["Founded 3 social enterprises", "Awarded Social Impact Leader 2023", "Published thought leadership articles"],
      stats: [{ icon: Award, value: "3", label: "Enterprises" }, { icon: Star, value: "2023", label: "Award Year" }],
      color: "#059669",
      gradient: "from-green-50 to-green-100",
      accent: "green"
    },
    {
      id: "L03",
      name: "Sara Lee",
      role: "COO, TechNova",
      bio: "Expert in operational excellence and team building. Sara focuses on efficiency, culture, and scaling organizations to achieve high impact.",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
      achievements: ["Scaled operations to 500+ employees", "Optimized global processes", "Recipient of Leadership Excellence Award"],
      stats: [{ icon: Users, value: "500+", label: "Team Size" }, { icon: TrendingUp, value: "45%", label: "Growth" }],
      color: "#dc2626",
      gradient: "from-red-50 to-red-100",
      accent: "red"
    },
  ];

  const accentColors = {
    blue: { light: "bg-blue-50", medium: "bg-blue-100", dark: "text-blue-700", border: "border-blue-200" },
    green: { light: "bg-green-50", medium: "bg-green-100", dark: "text-green-700", border: "border-green-200" },
    red: { light: "bg-red-50", medium: "bg-red-100", dark: "text-red-700", border: "border-red-200" }
  };

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;
  
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
    // Initial card setup
    gsap.set(cards, { 
      y: 80,
      scale: 0.98
    });
    
    gsap.set(cards[0], { 
      y: 0, 
      scale: 1 
    });
  
    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;
  
      const nextCard = cards[index + 1];
      
      ScrollTrigger.create({
        trigger: card,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1.2,
        onEnter: () => setActiveLeader(index + 1),
        onEnterBack: () => setActiveLeader(index),
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Animate vertical position and scale only
          gsap.to(card, {
            y: -40 * progress,
            scale: 1 - 0.03 * progress,
            duration: 0.1
          });
  
          gsap.to(nextCard, {
            y: 80 - 80 * progress,
            scale: 0.98 + 0.02 * progress,
            duration: 0.1
          });
        }
      });
    });
  
    ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "top 70%",
      onEnter: () => setActiveLeader(cards.length - 1),
      onEnterBack: () => setActiveLeader(cards.length - 2)
    });
  
    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);
  

  const addToRefs = (el, index) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  const currentAccent = leaders[activeLeader]?.accent || "blue";

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-100/50">
      <div className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Sidebar - 40% */}
          <div className="lg:w-2/5">
            <div className="lg:sticky lg:top-24">
              <div className="mb-8">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider font-inter mb-3 block">
                  Leadership Excellence
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-playfair leading-tight">
                  Visionary
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                    Leaders
                  </span>
                </h1>
                <p className="text-slate-600 text-base leading-relaxed font-inter">
                  Discover the stories behind exceptional leaders who are shaping the future through innovation, empathy, and transformative vision.
                </p>
              </div>
              
              {/* Active Leader Preview */}
              <div className={`${accentColors[currentAccent].light} p-6 rounded-2xl shadow-sm border ${accentColors[currentAccent].border} transition-all duration-500`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-4 border-white shadow-md">
                      <img 
                        src={leaders[activeLeader]?.image} 
                        alt={leaders[activeLeader]?.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div 
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white"
                      style={{ backgroundColor: leaders[activeLeader]?.color }}
                    ></div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 font-playfair">
                      {leaders[activeLeader]?.name}
                    </h2>
                    <p className="text-slate-600 text-sm font-inter">
                      {leaders[activeLeader]?.role}
                    </p>
                  </div>
                </div>
                
                <p className="text-slate-700 text-sm leading-relaxed font-inter mb-4">
                  {leaders[activeLeader]?.bio}
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {leaders[activeLeader]?.stats.map((stat, index) => (
                    <div key={index} className="text-center p-2 rounded-lg bg-white/80">
                      <stat.icon className={`w-4 h-4 mx-auto mb-1 ${accentColors[currentAccent].dark}`} />
                      <div className="font-bold text-slate-900 text-sm">{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      {leaders.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === activeLeader 
                              ? `${accentColors[currentAccent].medium} border ${accentColors[currentAccent].border}`
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500 font-inter">
                      {activeLeader + 1} of {leaders.length}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-inter">
                    Scroll to explore
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 60% */}
          <div ref={containerRef} className="lg:w-3/5 space-y-6 relative">
            {leaders.map((leader, index) => {
              const accent = accentColors[leader.accent];
              
              return (
                <div
                  key={leader.id}
                  ref={(el) => addToRefs(el, index)}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-500 border border-gray-200 overflow-hidden"
                  style={{ willChange: "transform, opacity" }}
                >
                  {/* Accent Header */}
                  <div 
                    className="h-1 w-full"
                    style={{ backgroundColor: leader.color }}
                  />

                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                      <div className="relative flex-shrink-0">
                        <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                          <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                        </div>
                        <div 
                          className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-3 border-white shadow-lg flex items-center justify-center"
                          style={{ backgroundColor: leader.color }}
                        >
                          <Award className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-slate-900 font-playfair">{leader.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${accent.light} ${accent.dark} border ${accent.border}`}>
                            {leader.role}
                          </span>
                        </div>
                        
                        <div className="w-16 h-1 rounded-full mb-3" style={{ backgroundColor: leader.color }} />
                        
                        <p className="text-slate-700 leading-relaxed font-inter mb-4">{leader.bio}</p>
                        
                        {/* Mini Stats */}
                        <div className="flex gap-4">
                          {leader.stats.map((stat, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <stat.icon className={`w-4 h-4 ${accent.dark}`} />
                              <span className="text-sm font-medium text-slate-700">{stat.value}</span>
                              <span className="text-xs text-slate-500">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 font-inter flex items-center gap-2">
                        <Check size={18} style={{ color: leader.color }} />
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {leader.achievements.map((ach, i) => (
                          <div 
                            key={i} 
                            className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 hover:translate-x-1 group/ach"
                            style={{ backgroundColor: `${leader.color}08` }}
                          >
                            <div 
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-300 group-hover/ach:scale-150"
                              style={{ backgroundColor: leader.color }}
                            />
                            <span className="text-slate-700 text-sm font-inter">{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipProfiles;