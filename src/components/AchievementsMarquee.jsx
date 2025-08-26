import React from "react";
import Marquee from "react-fast-marquee";
import {
  Trophy,
  Award,
  Users,
  BookOpen,
  GraduationCap,
  Building,
  Calendar,
  Target,
} from "lucide-react";

const achievements = [
  { icon: <Trophy className="w-6 h-6 text-indigo-600" />, text: "NAAC Accredited A+ Grade" },
  { icon: <Award className="w-6 h-6 text-indigo-600" />, text: "Best Engineering College 2023" },
  { icon: <Users className="w-6 h-6 text-indigo-600" />, text: "5000+ Happy Students" },
  { icon: <BookOpen className="w-6 h-6 text-indigo-600" />, text: "12+ Academic Programs" },
  { icon: <GraduationCap className="w-6 h-6 text-indigo-600" />, text: "95% Placement Record" },
  { icon: <Building className="w-6 h-6 text-indigo-600" />, text: "25 Acre Green Campus" },
  { icon: <Calendar className="w-6 h-6 text-indigo-600" />, text: "15+ Years of Excellence" },
  { icon: <Target className="w-6 h-6 text-indigo-600" />, text: "100+ Industry Partnerships" },
];

const Pill = ({ icon, text }) => (
  <div className="flex items-center gap-3 rounded-full bg-white px-6 py-3 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
    <span className="transition-transform group-hover:scale-110">{icon}</span>
    <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
      {text}
    </span>
  </div>
);

const AchievementsMarquee = () => {
  return (
    <section className="w-full py-16 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-100 rounded-full -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-50 rounded-full translate-x-16 translate-y-16"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Krishna College{" "}
            <span className="text-indigo-600">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating excellence in engineering education and innovation
          </p>
        </div>

        {/* Main Marquee */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          <Marquee speed={50} pauseOnHover gradient={false} className="py-4">
            <div className="flex items-center gap-6 mr-6">
              {achievements.slice(0, 4).map((a, i) => (
                <Pill key={`row1-${i}`} icon={a.icon} text={a.text} />
              ))}
            </div>
          </Marquee>
        </div>

        {/* Secondary Marquee (reverse direction) */}
        <div className="relative mt-6">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          <Marquee
            speed={45}
            pauseOnHover
            gradient={false}
            direction="right"
            className="py-4"
          >
            <div className="flex items-center gap-6 mr-6">
              {achievements.slice(4).map((a, i) => (
                <Pill key={`row2-${i}`} icon={a.icon} text={a.text} />
              ))}
            </div>
          </Marquee>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:shadow-md transition">
            <div className="text-3xl font-bold text-indigo-600 mb-2">5000+</div>
            <div className="text-sm font-medium text-gray-600">
              Alumni Network
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:shadow-md transition">
            <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
            <div className="text-sm font-medium text-gray-600">
              Placement Rate
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:shadow-md transition">
            <div className="text-3xl font-bold text-indigo-600 mb-2">25+</div>
            <div className="text-sm font-medium text-gray-600">
              Acres Campus
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:shadow-md transition">
            <div className="text-3xl font-bold text-indigo-600 mb-2">15+</div>
            <div className="text-sm font-medium text-gray-600">
              Years Excellence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsMarquee;
