import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Heart,
  GraduationCap,
  Award,
  Clock,
  Send,
  ArrowUpRight,
  Building,
  Users,
  BookOpen,
  Target,
  ArrowUp
} from "lucide-react";

// Color palette
const colors = {
  orange: "#FF7B35",
  green: "#00BA59",
  blue: "#1D78FD",
  red: "#FF6463",
  dark: "#0F172A",
  light: "#F8FAFC"
};

const Footer = () => {
  const quickLinks = [
    { name: "Home", url: "#", icon: Building, color: colors.orange },
    { name: "Admissions", url: "#", icon: Users, color: colors.green },
    { name: "Courses", url: "#", icon: BookOpen, color: colors.blue },
    { name: "Placements", url: "#", icon: Target, color: colors.red },
    { name: "Events", url: "#", icon: Clock, color: colors.orange },
    { name: "Contact Us", url: "#", icon: Send, color: colors.green },
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: "9285123400 / 9826130624",
      subtext: "7000130299 / 7587329553",
      color: colors.green
    },
    {
      icon: Phone,
      text: "WhatsApp: 9244005187",
      subtext: "",
      color: colors.green
    },
    {
      icon: Mail,
      text: "admissions@kecbhilai.com",
      subtext: "krishnaengcollege@gmail.com",
      color: colors.blue
    },
    {
      icon: MapPin,
      text: "Behind Smriti Nagar Petrol Pump Junwani,",
      subtext: "Khamahariya, Bhilai",
      color: colors.red
    }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      url: "#", 
      name: "Facebook",
      color: colors.blue,
    },
    { 
      icon: Twitter, 
      url: "#", 
      name: "Twitter",
      color: colors.blue,
    },
    { 
      icon: Instagram, 
      url: "#", 
      name: "Instagram",
      color: colors.red,
    },
    { 
      icon: Youtube, 
      url: "#", 
      name: "YouTube",
      color: colors.red,
    },
  ];

  const achievements = [
    { text: "AICTE Approved", icon: Award, color: colors.orange },
    { text: "CSVTU Affiliated", icon: GraduationCap, color: colors.green },
  ];

  const kpsSchools = [
    "KPS Nehru Nagar",
    "KPS Raipur",
    "KPS Bilaspur",
    "KPS Naya Raipur",
    "KPS Sundernagar",
    "KPS Sarona",
    "KPS Durg",
    "KPS Utai",
    "KPS Sindhiya Nagar"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-t-3xl text-white pt-12 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* College Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="p-3 rounded-2xl"
                style={{ 
                  backgroundColor: `${colors.blue}10`,
                  border: `1px solid ${colors.blue}30`
                }}
              >
                <GraduationCap className="w-8 h-8" style={{ color: colors.blue }} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Krishna Engineering College
                </h3>
                <p className="text-slate-300 text-sm mt-1">Excellence in Technical Education Since 2009</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-8 leading-relaxed text-lg max-w-2xl">
              A premier institution recognized for excellence, innovation, and societal relevance. 
              We nurture creative engineers and develop solutions to national challenges through 
              cutting-edge research and industry collaboration.
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ 
                    backgroundColor: `${achievement.color}10`,
                    border: `1px solid ${achievement.color}30`
                  }}
                >
                  <achievement.icon className="w-5 h-5" style={{ color: achievement.color }} />
                  <span className="text-sm font-medium text-white">{achievement.text}</span>
                </div>
              ))}
            </div>

            {/* KPS Group Section */}
            <div
              className="rounded-2xl p-6 mb-8"
              style={{ backgroundColor: `${colors.blue}05`, border: `1px solid ${colors.blue}20` }}
            >
              <h4
                className="text-xl font-semibold mb-4 pb-2 inline-flex items-center gap-2"
                style={{ borderBottom: `2px solid ${colors.blue}` }}
              >
                <Building className="w-5 h-5" style={{ color: colors.blue }} />
                KPS Group
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-slate-200">
                {kpsSchools.map((school, index) => (
                  <div
                    key={index}
                    className="text-sm"
                  >
                    {school}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-300">Connect With Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${social.color}10`,
                      border: `1px solid ${social.color}30`
                    }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" style={{ color: social.color }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div 
              className="rounded-2xl p-6 h-full"
              style={{ 
                backgroundColor: `${colors.green}05`,
                border: `1px solid ${colors.green}20`
              }}
            >
              <h4 className="text-xl font-semibold mb-6 pb-3 inline-flex items-center gap-2" style={{ borderBottom: `2px solid ${colors.green}` }}>
                <ExternalLink className="w-5 h-5" style={{ color: colors.green }} />
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="flex items-center gap-3 p-3 rounded-lg"
                      style={{ backgroundColor: `${link.color}05` }}
                    >
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${link.color}20` }}
                      >
                        <link.icon className="w-4 h-4" style={{ color: link.color }} />
                      </div>
                      <span className="text-slate-200 font-medium">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information & Map */}
          <div>
            <div 
              className="rounded-2xl p-6 h-full"
              style={{ 
                backgroundColor: `${colors.orange}05`,
                border: `1px solid ${colors.orange}20`
              }}
            >
              <h4 className="text-xl font-semibold mb-6 pb-3 inline-flex items-center gap-2" style={{ borderBottom: `2px solid ${colors.orange}` }}>
                <Send className="w-5 h-5" style={{ color: colors.orange }} />
                Contact Info
              </h4>
              <div className="space-y-3 mb-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-lg"
                    style={{ backgroundColor: `${item.color}05` }}
                  >
                    <div 
                      className="p-2 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm leading-tight">{item.text}</p>
                      {item.subtext && (
                        <p className="text-slate-400 text-xs mt-1">{item.subtext}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Map Section */}
              <div className="mt-6">
                <h5 className="text-lg font-semibold mb-3 text-white">Location Map</h5>
                <div className="rounded-xl overflow-hidden border-2" style={{ borderColor: colors.orange }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59504.690549261424!2d81.29730872663683!3d21.230137076599473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d41cba65b87%3A0xa9e4dad8f8e1e7db!2sKrishna%20Engineering%20College!5e0!3m2!1sen!2sus!4v1758765096031!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Krishna Engineering College Location"
                    className="w-full h-48"
                  ></iframe>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-4 space-y-2">
                <button 
                  className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.green }}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </button>
                <button 
                  className="w-full border-2 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                  style={{ borderColor: colors.blue, color: colors.blue }}
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-4 text-slate-400 flex-wrap">
              <p className="text-sm flex items-center gap-2">
                © {new Date().getFullYear()} Krishna Engineering College
                <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                All rights reserved
              </p>
              <span 
                className="flex items-center gap-1 text-sm px-3 py-1 rounded-full"
                style={{ 
                  backgroundColor: `${colors.red}10`,
                  border: `1px solid ${colors.red}30`
                }}
              >
                Made with <Heart className="w-4 h-4 mx-1" style={{ color: colors.red }} fill="currentColor" /> by KEC Team
              </span>
            </div>

            {/* Policy Links */}
            <div className="flex items-center gap-6 flex-wrap">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((item, index) => (
                <a 
                  key={index}
                  href="#"
                  className="text-slate-400 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl flex items-center gap-2"
              style={{ backgroundColor: colors.orange }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
              <span className="text-sm font-medium">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;