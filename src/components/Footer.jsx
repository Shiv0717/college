import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink, Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react";

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

const Footer = () => {
  const quickLinks = [
    { name: "Home", url: "#" },
    { name: "Admissions", url: "#" },
    { name: "Courses", url: "#" },
    { name: "Placements", url: "#" },
    { name: "Events", url: "#" },
    { name: "Contact Us", url: "#" },
  ];

  const contactInfo = [
    {
      icon: <Phone size={18} />,
      text: "9285123400 / 9826130624",
      subtext: "7000130299 / 7587329553"
    },
    {
      icon: <Phone size={18} />,
      text: "WhatsApp: 9244005187",
      subtext: ""
    },
    {
      icon: <Mail size={18} />,
      text: "admissions@kecbhilai.com",
      subtext: "krishnaengcollege@gmail.com"
    },
    {
      icon: <MapPin size={18} />,
      text: "Behind Smriti Nagar Petrol Pump Junwani,",
      subtext: "Khamahariya, Bhilai"
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, url: "#", name: "Facebook" },
    { icon: <Twitter size={20} />, url: "#", name: "Twitter" },
    { icon: <Instagram size={20} />, url: "#", name: "Instagram" },
    { icon: <Youtube size={20} />, url: "#", name: "YouTube" },
  ];

  return (
    <footer className="bg-[#1C398E] rounded-t-2xl text-white pt-20 pb-10 relative overflow-hidden" style={bodyFont}>
      {/* Background decorative elements */}
      
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* College Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              
              <h3 className="text-3xl font-light" style={headingFont}>
                Krishna Engineering College
              </h3>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md text-lg">
              Krishna Engineering College is a state of the art engineering college recognized for excellence, innovation, and societal relevance. We produce creative and strong engineers and research solutions to national challenges.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className=" text-white px-5 py-2.5 text-sm font-medium rounded-md ">
                Approved by AICTE
              </div>
              <div className=" text-white px-5 py-2.5 text-sm font-medium rounded-md ">
                Affiliated to CSVTU
              </div>
              
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4 text-blue-300" style={headingFont}>Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-medium mb-6 pb-2 border-b-2 border-blue-700 inline-block" style={headingFont}>
              Quick Links
            </h4>
            <ul className="space-y-4 mt-6">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a 
                    href={link.url} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center group py-2"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:text-blue-300 transition-colors">{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            
            
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-medium mb-6 pb-2 border-b-2 border-blue-700 inline-block" style={headingFont}>
              Contact Information
            </h4>
            <div className="space-y-5 mt-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start  p-4 rounded-lg hover:bg-gray-750 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <div className="text-blue-400 mt-0.5 mr-4 bg-blue-900/20 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-300">{item.text}</p>
                    {item.subtext && (
                      <p className="text-gray-400 text-sm mt-1">{item.subtext}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
           
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              © {new Date().getFullYear()} Krishna Engineering College. All rights reserved. 
              <span className="flex items-center mx-1">
                Made with <Heart size={14} className="text-red-500 mx-1" /> by KEC Team
              </span>
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&family=Lora:wght@400;500;600&display=swap" rel="stylesheet" />
    </footer>
  );
};

export default Footer;