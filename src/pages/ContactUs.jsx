"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div id="contact" className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-12 md:py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 md:mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about admissions, programs, or campus life? We're here to help you 
            with everything you need to know about Krishna Engineering College.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 space-y-6"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4 md:mb-6">Contact Information</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-lg mr-3 flex-shrink-0">
                    <MapPin className="text-blue-700" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-gray-800 text-sm md:text-base">Our Location</h4>
                    <p className="text-gray-600 text-xs md:text-sm mt-1 break-words">
                      Krishna Engineering College, Behind Smriti Nagar Petrol Pump Junwani, 
                      Khamahariya, Bhilai, Chhattisgarh 490020
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-lg mr-3 flex-shrink-0">
                    <Phone className="text-blue-700" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-gray-800 text-sm md:text-base">Phone Numbers</h4>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">
                      +91 9285123400<br />
                      +91 9826130624<br />
                      +91 7000130299<br />
                      +91 7587329553
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-lg mr-3 flex-shrink-0">
                    <Mail className="text-blue-700" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-gray-800 text-sm md:text-base">Email Address</h4>
                    <p className="text-gray-600 text-xs md:text-sm mt-1 break-words">
                      admissions@kecbhilai.com<br />
                      krishnaengineeringcollege@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-lg mr-3 flex-shrink-0">
                    <Clock className="text-blue-700" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-gray-800 text-sm md:text-base">Office Hours</h4>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">
                      Monday - Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-3/5 bg-white rounded-xl md:rounded-2xl shadow-xl p-4 md:p-6 lg:p-8"
          >
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1 md:mb-2">Send us a Message</h3>
              <p className="text-gray-500 text-sm md:text-base">We typically respond within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-gray-700 mb-1 md:mb-2 text-sm md:text-base font-medium">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 md:mb-2 text-sm md:text-base font-medium">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-gray-700 mb-1 md:mb-2 text-sm md:text-base font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 1234567890"
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 md:mb-2 text-sm md:text-base font-medium">Subject *</label>
                  <select 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="academics">Academic Programs</option>
                    <option value="campus">Campus Tour</option>
                    <option value="placement">Placement Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-1 md:mb-2 text-sm md:text-base font-medium">Message *</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 md:py-4 rounded-lg transition-all duration-300 flex items-center justify-center text-sm md:text-base"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg mt-6">
              <iframe
                title="Krishna Engineering College Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.042892081!2d81.3815!3d21.1939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDExJzM4LjAiTiA4McKwMjMnMTMuNSJF!5e0!3m2!1sen!2sin!4v1694080381429"
                className="w-full h-48 md:h-56 lg:h-64"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
      </div>
    </div>
  );
};

export default ContactUs;