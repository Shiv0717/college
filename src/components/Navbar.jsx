"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  GraduationCap,
  BookOpen,
  Users,
  Phone,
  ChevronDown,
  Home,
  Briefcase,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navItems = [
    { 
      name: "Home", 
      path: "/", 
      icon: <Home className="w-5 h-5" /> 
    },
    {
      name: "About",
      path: "/about",
      icon: <Users className="w-5 h-5" />,
      dropdown: [
        { name: "About College", path: "/about" },
        { name: "Principal's Message", path: "/principal" },
        { name: "Mission & Vision", path: "/mission" },
        { name: "Infrastructure", path: "/infrastructure" },
        { name: "Facilities", path: "/facilities" },
        { name: "Governance", path: "/governance" },
      ],
    },
    {
      name: "Departments",
      path: "/departments",
      icon: <BookOpen className="w-5 h-5" />,
      dropdown: [
        { name: "Computer Science", path: "/departments/cse" },
        { name: "Mechanical Engineering", path: "/departments/mech" },
        { name: "Civil Engineering", path: "/departments/civil" },
        { name: "Electrical Engineering", path: "/departments/eee" },
      ],
    },
    
    { 
      name: "Contact", 
      path: "/contact", 
      icon: <Phone className="w-5 h-5" /> 
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMobileDropdown = (itemName) => {
    setMobileDropdown(mobileDropdown === itemName ? null : itemName);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="flex items-center">
             <img src="/images/2025-08-27 19.10.46.jpg" className=" w-10 h-10 lg:w-14 lg:h-14 mr-3"></img>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight">KRISHNA</span>
                <span className="text-xs text-yellow-400 -mt-1">ENGINEERING COLLEGE</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group relative"
                >
                  <span className="mr-2 group-hover:text-yellow-400 transition-colors">
                    {item.icon}
                  </span>
                  <span className="flex items-center gap-1 group-hover:text-yellow-400 transition-colors">
                    {item.name}
                    {item.dropdown && (
                      <motion.span
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    )}
                  </span>
                  
                  {/* Hover indicator */}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-1 w-56 bg-white text-gray-800 rounded-lg shadow-xl z-50 overflow-hidden border border-gray-200"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((drop, i) => (
                        <Link
                          key={i}
                          to={drop.path}
                          className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Apply Now Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 193, 7, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-blue-900 font-bold px-6 py-2.5 rounded-lg shadow-md hover:bg-yellow-300 transition-colors duration-300 flex items-center space-x-2"
            >
              <span> <Link to={'/admission'}> Apply Now </Link></span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-blue-800 shadow-xl overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-blue-700 last:border-b-0">
                  <div 
                    className="flex items-center justify-between px-3 py-3 text-base font-medium rounded-lg text-white hover:bg-blue-700 transition-colors"
                    onClick={() => item.dropdown ? toggleMobileDropdown(item.name) : setIsOpen(false)}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      <Link to={item.path} onClick={() => !item.dropdown && setIsOpen(false)}>
                        {item.name}
                      </Link>
                    </div>
                    {item.dropdown && (
                      <motion.span
                        animate={{ rotate: mobileDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && mobileDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 bg-blue-900 rounded-lg overflow-hidden"
                      >
                        {item.dropdown.map((drop, i) => (
                          <Link
                            key={i}
                            to={drop.path}
                            className="block px-4 py-3 text-sm text-gray-200 hover:text-yellow-400 hover:bg-blue-700 transition-colors border-b border-blue-800 last:border-b-0"
                            onClick={() => setIsOpen(false)}
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Mobile Apply Button */}
              <div className="px-3 pt-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-yellow-400 text-blue-900 font-bold px-4 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Apply Now</span>
                  <span>→</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;