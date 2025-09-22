import React from "react";
import { Users, BookOpen, Trophy, Globe, GraduationCap, Building, Target, BarChart3, Briefcase, TrendingUp } from "lucide-react";

const CollegeDashboard = () => {
  const stats = [
    { icon: GraduationCap, label: "Total Students", value: "15,000+", change: "+12%", trend: "up", color: "bg-blue-500" },
    { icon: Users, label: "Faculty Members", value: "1,200+", change: "+8%", trend: "up", color: "bg-green-500" },
    { icon: Building, label: "Departments", value: "45", change: "+2", trend: "up", color: "bg-orange-500" },
    { icon: Trophy, label: "Ranking", value: "#15", change: "National", trend: "stable", color: "bg-yellow-500" },
  ];

  const programs = [
    { name: "Engineering", students: 4500, growth: 15, color: "bg-blue-500" },
    { name: "Business", students: 3200, growth: 12, color: "bg-green-500" },
    { name: "Arts & Sciences", students: 2800, growth: 8, color: "bg-orange-500" },
    { name: "Medicine", students: 2200, growth: 20, color: "bg-red-500" },
    { name: "Law", students: 1800, growth: 5, color: "bg-yellow-500" },
  ];

  const achievements = [
    { icon: Trophy, title: "Research Grants", value: "$45M", subtitle: "Annual Funding", color: "from-blue-500 to-blue-600" },
    { icon: Globe, title: "International Students", value: "28%", subtitle: "Diversity Ratio", color: "from-green-500 to-green-600" },
    { icon: Target, title: "Placement Rate", value: "94%", subtitle: "Graduate Employment", color: "from-orange-500 to-orange-600" },
    { icon: BarChart3, title: "Alumni Network", value: "85K+", subtitle: "Global Reach", color: "from-yellow-500 to-yellow-600" },
    { icon: Trophy, title: "Research Grants", value: "$45M", subtitle: "Annual Funding", color: "from-blue-500 to-blue-600" },
    { icon: Globe, title: "International Students", value: "28%", subtitle: "Diversity Ratio", color: "from-green-500 to-green-600" },
  ];



  const placementStats = [
    { company: "Google", hires: 45, package: "$145K", trend: "+18%", logo: "G", color: "bg-blue-500" },
    { company: "Microsoft", hires: 38, package: "$138K", trend: "+12%", logo: "M", color: "bg-green-500" },
    { company: "Apple", hires: 32, package: "$142K", trend: "+22%", logo: "A", color: "bg-orange-500" },
    { company: "Amazon", hires: 28, package: "$135K", trend: "+15%", logo: "A", color: "bg-yellow-500" },
    { company: "Meta", hires: 25, package: "$148K", trend: "+20%", logo: "f", color: "bg-blue-600" },
    { company: "Tesla", hires: 18, package: "$152K", trend: "+25%", logo: "T", color: "bg-red-500" },
  ];

  const topRecruiters = [
    { name: "Goldman Sachs", hires: 42, color: "bg-yellow-500" },
    { name: "McKinsey & Company", hires: 35, color: "bg-blue-500" },
    { name: "Boston Consulting", hires: 28, color: "bg-green-500" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 text-center lg:text-left">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider font-inter mb-2 block">
            University Dashboard
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 font-playfair mb-3">
             Krishna Engineering College
          </h1>
          <p className="text-slate-600 text-base font-inter max-w-3xl mx-auto lg:mx-0">
            Founded in 1885, KEC has been at the forefront of innovation, 
            research, and academic excellence. Our mission is to promote the public welfare 
            by exercising an influence on behalf of humanity and civilization.
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Stats & Programs */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg ${stat.color} bg-opacity-10`}>
                      <stat.icon className={`w-5 h-5 ${stat.color.replace('bg-', 'text-')}`} />
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                  <p className="text-slate-600 text-xs font-inter">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Placement Success Section */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-100">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 font-playfair">Placement Success</h2>
                  <p className="text-slate-500 text-sm">Top recruiters & placement statistics</p>
                </div>
              </div>

              {/* Top Companies Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {placementStats.map((company, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg ${company.color} flex items-center justify-center text-white font-bold text-lg`}>
                        {company.logo}
                      </div>
                      <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {company.trend}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">{company.company}</h3>
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>{company.hires} hires</span>
                      <span className="font-semibold">{company.package}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Top Recruiters Progress */}
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900">Top Recruiting Partners</h3>
                {topRecruiters.map((recruiter, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-3 h-3 rounded-full ${recruiter.color}`}></div>
                      <span className="font-medium text-slate-700 text-sm">{recruiter.name}</span>
                    </div>
                    <div className="flex items-center gap-4 flex-1 max-w-[200px]">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${recruiter.color}`}
                          style={{ width: `${(recruiter.hires / 50) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-slate-600 font-inter w-8 text-right">
                        {recruiter.hires}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programs Chart */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5">
                <h2 className="text-lg font-bold text-slate-900 font-playfair mb-2 sm:mb-0">Program Enrollment</h2>
                <span className="text-xs text-slate-500 font-inter">2024 Academic Year</span>
              </div>
              <div className="space-y-3">
                {programs.map((program, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-2 h-2 rounded-full ${program.color}`}></div>
                      <span className="font-medium text-slate-700 text-sm font-inter min-w-[120px]">{program.name}</span>
                    </div>
                    <div className="flex items-center gap-3 flex-1 max-w-[200px]">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${program.color}`}
                          style={{ width: `${(program.students / 5000) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex gap-2 min-w-[80px] justify-end">
                        <span className="text-xs text-slate-600 font-inter">
                          {program.students}
                        </span>
                        <span className="text-xs text-green-600 font-inter">
                          +{program.growth}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Info & Links */}
          <div className="space-y-6">
            
            {/* University Info Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-5 text-white">
              <h2 className="text-xl font-bold font-playfair mb-4">At a Glance</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="font-inter text-sm">Founded</span>
                  <span className="font-medium">1885</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="font-inter text-sm">Campus Size</span>
                  <span className="font-medium">8,180 acres</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="font-inter text-sm">Endowment</span>
                  <span className="font-medium">$36.3B</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-inter text-sm">Acceptance Rate</span>
                  <span className="font-medium">4.3%</span>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                      <achievement.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{achievement.value}</h3>
                      <p className="text-slate-700 font-medium text-sm font-inter">{achievement.title}</p>
                      <p className="text-slate-500 text-xs font-inter">{achievement.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

           
            
          </div>
        </div>     
      </div>
    </section>
  );
};

export default CollegeDashboard;