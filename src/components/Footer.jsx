import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Award,
  GraduationCap,
  BookOpen,
  Users
} from "lucide-react";

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
    { name: "About Us", url: "#" },
    { name: "Research", url: "#" },
    { name: "Campus Tour", url: "#" },
    { name: "Alumni", url: "#" },
  ];

  const programs = [
    "Computer Science & Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Electronics & Communication",
    "Artificial Intelligence",
    "Data Science",
    "Business Administration"
  ];

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      text: "9285123400 / 9826130624",
      subtext: "7000130299 / 7587329553"
    },
    {
      icon: <Phone size={20} />,
      text: "WhatsApp: 9244005187",
      subtext: ""
    },
    {
      icon: <Mail size={20} />,
      text: "admissions@kecbhilai.com",
      subtext: "krishnaengineeringcollege@gmail.com"
    },
    {
      icon: <MapPin size={20} />,
      text: "Behind Smriti Nagar Petrol Pump Junwani,",
      subtext: "Khamahariya, Bhilai"
    },
    {
      icon: <Clock size={20} />,
      text: "Monday - Saturday: 9:00 AM - 5:00 PM",
      subtext: "Sunday: Closed"
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, url: "#", name: "Facebook" },
    { icon: <Twitter size={20} />, url: "#", name: "Twitter" },
    { icon: <Instagram size={20} />, url: "#", name: "Instagram" },
    { icon: <Linkedin size={20} />, url: "#", name: "LinkedIn" },
    { icon: <Youtube size={20} />, url: "#", name: "YouTube" }
  ];

  const achievements = [
    { icon: <Award size={18} />, text: "NAAC Accredited" },
    { icon: <GraduationCap size={18} />, text: "95% Placement Rate" },
    { icon: <BookOpen size={18} />, text: "50+ Research Publications" },
    { icon: <Users size={18} />, text: "5000+ Alumni Network" }
  ];

  return (
    <footer className="bg-gray-900 rounded-t-3xl text-white pt-20 pb-10" style={bodyFont}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* College Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-light mb-6" style={headingFont}>
              Krishna Engineering College
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg max-w-xl">
              A premier institution recognized for excellence, innovation, and societal relevance. 
              We produce creative engineers and research solutions to national challenges with 
              an unprecedented commitment to integrating across engineering, science, business 
              and other disciplines to yield transformative results.
            </p>
            
            {/* Approvals */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-blue-800 text-white px-5 py-3 font-medium flex items-center">
                <Award size={18} className="mr-2" />
                Approved by AICTE
              </div>
              <div className="bg-blue-800 text-white px-5 py-3 font-medium flex items-center">
                <Award size={18} className="mr-2" />
                Affiliated to CSVTU
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center text-blue-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="mr-2">{achievement.icon}</span>
                  <span className="text-sm">{achievement.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-medium mb-6 border-b border-blue-800 pb-3" style={headingFont}>
              Academic Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ExternalLink size={16} className="mr-2 text-blue-400" />
                    <span className="text-sm">{program}</span>
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
            <h4 className="text-xl font-medium mb-6 border-b border-blue-800 pb-3" style={headingFont}>
              Contact Information
            </h4>
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-blue-400 mt-0.5 mr-3">
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

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="text-lg font-medium mb-4" style={headingFont}>Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Links Section */}
      

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Krishna Engineering College. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Transforming Education Since 2001
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Accessibility
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Careers
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