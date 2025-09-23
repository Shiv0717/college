"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Super40RegisterForm = ({ onSubmit }) => {
  const formRef = useRef(null);
  const imageRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(formRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Image */}
          <div 
            ref={imageRef}
            className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-12 flex items-center justify-center"
          >
            <div className="text-center text-white">
              <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4">Super 40 Program</h1>
              <p className="text-blue-100 text-lg mb-6">
                Join our exclusive program designed to help students excel in their academic journey with personalized mentoring and expert guidance.
              </p>
              <div className="space-y-2 text-blue-200">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Expert Faculty</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Personalized Mentoring</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Comprehensive Study Material</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 lg:p-12">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-2">
                  Register Now
                </h2>
                <p className="text-blue-700">Limited seats available. Secure your spot today!</p>
              </div>

              <div>
                <label className="block text-blue-900 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 placeholder-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>

              <div>
                <label className="block text-blue-900 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 placeholder-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>

              <div>
                <label className="block text-blue-900 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 placeholder-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>

              <div>
                <label className="block text-blue-900 font-semibold mb-2">School Name</label>
                <input
                  type="text"
                  name="school"
                  placeholder="Enter your school name"
                  value={formData.school}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 placeholder-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Register Now
              </button>

              <p className="text-center text-blue-700 text-sm mt-4">
                By registering, you agree to our terms and conditions.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Super40RegisterForm;