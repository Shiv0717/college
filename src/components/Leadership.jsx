import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react"; // For achievements icons

gsap.registerPlugin(ScrollTrigger);

const LeadershipProfiles = () => {
  const cardsRef = useRef([]);
  const [activeLeader, setActiveLeader] = useState(null);

  const leaders = [
    {
      id: "L01",
      name: "Alice Johnson",
      role: "CEO, InnovateX",
      bio: "Visionary leader with over 15 years of experience in tech and innovation. Known for inspiring teams and driving transformative projects.",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80",
      achievements: [
        "Built a $50M startup",
        "Mentored 100+ leaders",
        "Keynote speaker at global conferences",
      ],
      color: "#FF7F50",
    },
    {
      id: "L02",
      name: "Michael Smith",
      role: "Founder, GreenFuture",
      bio: "Passionate about sustainability and social impact. Michael leads with empathy, empowering communities and organizations to create meaningful change.",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80",
      achievements: [
        "Founded 3 social enterprises",
        "Awarded Social Impact Leader 2023",
        "Published thought leadership articles",
      ],
      color: "#6A5ACD",
    },
    {
      id: "L03",
      name: "Sara Lee",
      role: "COO, TechNova",
      bio: "Expert in operational excellence and team building. Sara focuses on efficiency, culture, and scaling organizations to achieve high impact.",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
      achievements: [
        "Scaled operations to 500+ employees",
        "Optimized global processes",
        "Recipient of Leadership Excellence Award",
      ],
      color: "#20B2AA",
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current;

    // Set initial state
    cards.forEach((card, i) => {
      gsap.set(card, {
        opacity: 1,
        y: i === 0 ? 0 : 50,
        scale: i === 0 ? 1 : 0.95,
      });
    });

    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;

      const nextCard = cards[i + 1];
      const currentCard = card;

      ScrollTrigger.create({
        trigger: currentCard,
        start: "top top+=150",
        end: () => `+=${currentCard.offsetHeight + 200}`,
        pin: true,
        pinSpacing: false,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;

          // Animate current card
          gsap.to(currentCard, {
            opacity: 1 - progress,
            y: -50 * progress,
            scale: 1 - 0.05 * progress,
            overwrite: "auto",
          });

          // Animate next card
          gsap.to(nextCard, {
            opacity: 1,
            y: 50 - 50 * progress,
            scale: 0.95 + 0.05 * progress,
            overwrite: "auto",
          });

          // Update left sidebar
          if (progress > 0.5) {
            setActiveLeader(leaders[i + 1]);
          } else {
            setActiveLeader(leaders[i]);
          }
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/20">
      <div className="px-6">
        <div className="flex flex-col lg:flex-row">
          {/* Left Sidebar */}
          <div className="lg:w-2/5 mb-16 lg:mb-0">
            <div className="sticky top-38">
              <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 lg:p-10 border border-blue-100/50 backdrop-blur-sm">
                {/* Header Section */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
                    <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
                    Executive Leadership
                  </div>

                  <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-5 font-merriweather">
                    Leadership Profiles
                  </h1>

                  <p className="text-lg text-gray-600 leading-relaxed font-lato">
                    Discover visionary leaders shaping industries through
                    innovation, strategy, and transformative leadership.
                  </p>
                </div>

                {/* Active Leader Preview */}
                {activeLeader && (
                  <div className="bg-white/80 rounded-2xl p-7  border border-gray-200/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                    {/* Leader Header */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                          <img
                            src={activeLeader.image}
                            alt={activeLeader.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div
                          className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-2 border-white shadow-md"
                          style={{ backgroundColor: activeLeader.color }}
                        ></div>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1 font-merriweather">
                          {activeLeader.name}
                        </h2>
                        <div
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white"
                          style={{ backgroundColor: activeLeader.color }}
                        >
                          {activeLeader.role}
                        </div>
                      </div>
                    </div>

                    {/* Bio Section */}
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed font-lato text-base bg-gray-50/50 p-4 rounded-xl border border-gray-200/50">
                        {activeLeader.bio}
                      </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="text-center p-3 bg-blue-50/50 rounded-lg border border-blue-200/30">
                        <div className="text-sm font-semibold text-blue-800">
                          Experience
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          15+ Years
                        </div>
                      </div>
                      <div className="text-center p-3 bg-green-50/50 rounded-lg border border-green-200/30">
                        <div className="text-sm font-semibold text-green-800">
                          Achievements
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          25+
                        </div>
                      </div>
                    </div>

                    {/* Highlighted Achievement */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl p-4 border border-gray-200/40">
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-3 h-3 rounded-full animate-pulse"
                          style={{ backgroundColor: activeLeader.color }}
                        ></div>
                        <span className="text-sm font-semibold text-gray-700">
                          Notable Achievement
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 font-lato">
                        {activeLeader.achievements[0]}
                      </p>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="mt-6 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        Scroll to explore more leaders
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer CTA */}
                <div className="mt-8 text-center">
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                    View All Leaders
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="lg:w-3/5 lg:pl-16 space-y-8 relative">
            {leaders.map((leader, index) => (
              <div
                key={leader.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl relative overflow-hidden border border-gray-200/60 hover:border-gray-300/80 transition-all duration-500 "
                style={{ willChange: "transform, opacity" }}
              >
                {/* Color Accent Bar */}
                <div
                  className="absolute top-0 left-0 w-3 h-full"
                  style={{ backgroundColor: leader.color }}
                ></div>

                {/* Header Gradient */}
                <div
                  className="absolute top-0 left-3 right-0 h-32 opacity-5"
                  style={{ backgroundColor: leader.color }}
                ></div>

                <div className="p-8 ml-3 relative z-10">
                  {/* Header Section */}
                  <div className="flex items-start gap-6 mb-8">
                    {/* Profile Image */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      {/* Status Indicator */}
                      <div
                        className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-2 border-white shadow-lg"
                        style={{ backgroundColor: leader.color }}
                      ></div>
                    </div>

                    {/* Name and Role */}
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 font-merriweather group-hover:text-gray-800 transition-colors">
                        {leader.name}
                      </h3>
                      <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg"
                        style={{ backgroundColor: leader.color }}
                      >
                        <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                        {leader.role}
                      </div>
                    </div>
                  </div>

                  {/* Bio Section */}
                  <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed text-lg font-lato bg-gray-100/50 p-4 rounded-xl border border-gray-200/50">
                      {leader.bio}
                    </p>
                  </div>

                  {/* Achievements Grid */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-lg flex items-center gap-2 mb-4 font-merriweather">
                      <div
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: leader.color }}
                      ></div>
                      Key Achievements
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {leader.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200/60 hover:border-gray-300/80 transition-all duration-300 group/achievement hover:shadow-md"
                        >
                          {/* Check Icon */}
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 group-hover/achievement:scale-110"
                            style={{ backgroundColor: leader.color }}
                          >
                            <Check size={16} />
                          </div>

                          {/* Achievement Text */}
                          <span className="text-gray-700 font-medium font-lato text-sm leading-tight">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Stats */}
                  <div className="mt-8 pt-6 border-t border-gray-200/50">
                    <div className="flex items-center justify-between text-sm text-gray-600 font-lato">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Available for mentorship
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Industry leader
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Effects */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${leader.color}03, transparent)`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipProfiles;
