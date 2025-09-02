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
  Star,
  Briefcase,
  Bookmark,
  Heart,
  MapPin,
  TrendingUp
} from "lucide-react";


  const achievements = [
    { icon: <Building className="w-6 h-6 text-indigo-600" />, text: "AICTE Approved College" },
    { icon: <BookOpen className="w-6 h-6 text-purple-500" />, text: "4 B.Tech Disciplines" },
    { icon: <Briefcase className="w-6 h-6 text-blue-500" />, text: "Top Firm Placements" },
    { icon: <Users className="w-6 h-6 text-green-500" />, text: "120 CSE Seats" },
    { icon: <Trophy className="w-6 h-6 text-yellow-500" />, text: "₹10 LPA Placements" },
    { icon: <MapPin className="w-6 h-6 text-red-500" />, text: "Bhilai Junwani Campus" }
  ];


const stats = [
  { value: "240+", label: "Total B.Tech Seats", icon: <BookOpen className="w-8 h-8" /> },
  { value: "₹6 LPA", label: "Avg Placement Package", icon: <TrendingUp className="w-8 h-8" /> },
  { value: "80-99%", label: "Placement Rate", icon: <Users className="w-8 h-8" /> },
  { value: "5 acres", label: "Campus Area", icon: <Building className="w-8 h-8" /> }
];

const Pill = ({ icon, text }) => (
  <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group mx-2">
    <span className="transition-transform group-hover:scale-110">{icon}</span>
    <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
      {text}
    </span>
  </div>
);

const StatCard = ({ value, label, icon }) => (
  <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 text-center border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
    <div className="flex justify-center mb-3">
      <div className="p-2 rounded-full bg-blue-100 text-blue-700 group-hover:scale-110 transition-transform">
        {icon}
      </div>
    </div>
    <div className="text-3xl font-bold text-blue-900 mb-1">{value}</div>
    <div className="text-sm font-medium text-gray-600">{label}</div>
  </div>
);

const AchievementsMarquee = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="hidden lg:flex  absolute top-10 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
      <div className="hidden lg:flex  absolute bottom-10 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20"></div>
      <div className="hidden lg:flex  absolute top-1/3 left-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-900">KRISHNA ENGINEERING COLLEGE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Excellence in Engineering Education & Innovation
          </p>
        </div>

        {/* Main Marquee */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>

          <Marquee speed={40} pauseOnHover gradient={false} className="py-4">
            {achievements.map((a, i) => (
              <Pill key={`marquee1-${i}`} icon={a.icon} text={a.text} />
            ))}
          </Marquee>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6  mt-12">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Accolades Section */}
        {/* <div className="mt-16 bg-white rounded-2xl p-8 border border-blue-100 shadow-sm">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Our <span className="text-blue-700">Accolades</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">NAAC A+ Accreditation</h4>
                <p className="text-gray-600 mt-1">Highest grade accreditation for quality education</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Bookmark className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Industry Recognition</h4>
                <p className="text-gray-600 mt-1">Awarded Best Engineering College 2023</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Student Satisfaction</h4>
                <p className="text-gray-600 mt-1">5000+ happy students and growing alumni network</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Placement Excellence</h4>
                <p className="text-gray-600 mt-1">95% placement rate with 100+ industry partners</p>
              </div>
            </div> 
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default AchievementsMarquee;