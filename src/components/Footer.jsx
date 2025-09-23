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
      bgColor: "hover:bg-blue-600"
    },
    { 
      icon: Twitter, 
      url: "#", 
      name: "Twitter",
      color: colors.blue,
      bgColor: "hover:bg-blue-400"
    },
    { 
      icon: Instagram, 
      url: "#", 
      name: "Instagram",
      color: colors.red,
      bgColor: "hover:bg-pink-600"
    },
    { 
      icon: Youtube, 
      url: "#", 
      name: "YouTube",
      color: colors.red,
      bgColor: "hover:bg-red-600"
    },
  ];

  const achievements = [
    { text: "AICTE Approved", icon: Award, color: colors.orange },
    { text: "CSVTU Affiliated", icon: GraduationCap, color: colors.green },
    { text: "ISO Certified", icon: Award, color: colors.blue },
    { text: "NBA Accredited", icon: Target, color: colors.red }
  ];

  const stats = [
    { number: "5000+", label: "Students", color: colors.orange },
    { number: "94%", label: "Placement", color: colors.green },
    { number: "50+", label: "Companies", color: colors.blue },
    { number: "15+", label: "Years", color: colors.red }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-t-3xl text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Stats Bar */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* College Info */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="p-3 rounded-2xl backdrop-blur-sm border"
                style={{ 
                  backgroundColor: `${colors.blue}10`,
                  borderColor: `${colors.blue}30`
                }}
              >
                <GraduationCap className="w-8 h-8" style={{ color: colors.blue }} />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-white bg-clip-text text-transparent">
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
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl backdrop-blur-sm border hover:scale-105 transition-transform duration-300"
                  style={{ 
                    backgroundColor: `${achievement.color}10`,
                    borderColor: `${achievement.color}30`
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <achievement.icon className="w-5 h-5" style={{ color: achievement.color }} />
                  <span className="text-sm font-medium text-white">{achievement.text}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-300">Connect With Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="group relative w-12 h-12 rounded-xl backdrop-blur-sm flex items-center justify-center transition-all duration-300 border"
                    style={{ 
                      backgroundColor: `${social.color}10`,
                      borderColor: `${social.color}30`
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" style={{ color: social.color }} />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <div 
              className="rounded-2xl p-6 backdrop-blur-sm border h-full"
              style={{ 
                backgroundColor: `${colors.green}05`,
                borderColor: `${colors.green}20`
              }}
            >
              <h4 className="text-xl font-semibold mb-6 pb-3 border-b-2 inline-flex items-center gap-2" style={{ borderColor: colors.green }}>
                <ExternalLink className="w-5 h-5" style={{ color: colors.green }} />
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a 
                      href={link.url} 
                      className="group flex items-center gap-3 p-3 rounded-lg hover:backdrop-blur-sm transition-all duration-300"
                      style={{ backgroundColor: `${link.color}05` }}
                    >
                      <div 
                        className="p-2 rounded-lg group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${link.color}20` }}
                      >
                        <link.icon className="w-4 h-4" style={{ color: link.color }} />
                      </div>
                      <span className="text-slate-200 group-hover:text-white transition-colors font-medium">
                        {link.name}
                      </span>
                      <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" style={{ color: link.color }} />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <div 
              className="rounded-2xl p-6 backdrop-blur-sm border h-full"
              style={{ 
                backgroundColor: `${colors.orange}05`,
                borderColor: `${colors.orange}20`
              }}
            >
              <h4 className="text-xl font-semibold mb-6 pb-3 border-b-2 inline-flex items-center gap-2" style={{ borderColor: colors.orange }}>
                <Send className="w-5 h-5" style={{ color: colors.orange }} />
                Contact Info
              </h4>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="group flex items-start gap-3 p-3 rounded-lg hover:backdrop-blur-sm transition-all duration-300 cursor-pointer"
                    style={{ backgroundColor: `${item.color}05` }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div 
                      className="p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform"
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
                  </motion.div>
                ))}
              </div>
              
              {/* Quick Action Buttons */}
              <div className="mt-6 space-y-2">
                <motion.button 
                  className="w-full py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.green }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </motion.button>
                <motion.button 
                  className="w-full border-2 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                  style={{ borderColor: colors.blue, color: colors.blue }}
                  whileHover={{ scale: 1.02, backgroundColor: `${colors.blue}10` }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-slate-700 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-4 text-slate-400 flex-wrap">
              <p className="text-sm flex items-center gap-2">
                © {new Date().getFullYear()} Krishna Engineering College
                <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                All rights reserved
              </p>
              <motion.span 
                className="flex items-center gap-1 text-sm backdrop-blur-sm px-3 py-1 rounded-full border"
                style={{ 
                  backgroundColor: `${colors.red}10`,
                  borderColor: `${colors.red}30`
                }}
                whileHover={{ scale: 1.05 }}
              >
                Made with <Heart className="w-4 h-4 mx-1" style={{ color: colors.red }} fill="currentColor" /> by KEC Team
              </motion.span>
            </div>

            {/* Policy Links */}
            <div className="flex items-center gap-6 flex-wrap">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((item, index) => (
                <motion.a 
                  key={index}
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  whileHover={{ y: -1 }}
                  style={{ color: colors.slate }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-3 rounded-xl transition-colors flex items-center gap-2"
              style={{ backgroundColor: colors.orange }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
              <span className="text-sm font-medium">Top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

     
    </footer>
  );
};

export default Footer;