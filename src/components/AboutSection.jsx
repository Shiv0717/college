"use client";
import React from "react";
import { ArrowRight, GraduationCap, Users, Building2, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-red-600 to-orange-500 mb-4 px-4 py-1 text-sm font-medium text-white">
            <Award className="h-4 w-4 mr-2" />
            Premier Institution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            World Class{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              Campus
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Krishna Engineering College is an aesthetically vibrant, technology-enabled campus designed
            to support and inspire students. With modern infrastructure, research labs, and a focus on
            innovation, KEC nurtures the next generation of engineers and leaders.
          </p>
        </div>

        {/* Image + Stats Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Image */}
          <div className="lg:w-7/12 relative">
            <div className="overflow-hidden rounded-2xl shadow-xl border-4 border-white">
              <img
                src="https://www.kecbhilai.com/images/slider_img2.jpg"
                alt="Campus"
                className="w-full h-[550px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Stats Box */}
          <div className="lg:w-5/12 bg-gray-50 border border-gray-200 text-slate-900 p-8 md:p-10 rounded-2xl shadow-md flex flex-col justify-center">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-red-100 rounded-full">
                    <GraduationCap className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-red-600 mb-1">25+</h3>
                <p className="text-sm text-slate-600">Years of Excellence</p>
              </div>

              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-amber-100 rounded-full">
                    <Users className="h-8 w-8 text-amber-600" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-amber-600 mb-1">60+</h3>
                <p className="text-sm text-slate-600">Expert Faculty</p>
              </div>

              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Building2 className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-green-600 mb-1">100+</h3>
                <p className="text-sm text-slate-600">Recruiters</p>
              </div>

              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <svg
                      className="h-8 w-8 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-purple-600 mb-1">10k+</h3>
                <p className="text-sm text-slate-600">Alumni Network</p>
              </div>
            </div>

            {/* Explore More */}
            <div className="text-center pt-4 border-t border-gray-200">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 group"
              >
                Explore Campus
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
