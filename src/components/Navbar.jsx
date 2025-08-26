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
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const navItems = [
    { name: "Home", path: "/", icon: <GraduationCap className="w-5 h-5" /> },
    {
      name: "About",
      path: "/about",
      icon: <Users className="w-5 h-5" />,
      dropdown: [
        { name: "About College", path: "/about" },
        { name: "Principal's Message", path: "/principal" },
        { name: "Mission & Vision", path: "/mission" },
        { name: "Infrastructure", path: "/infra" },
      ],
    },
    {
      name: "Departments",
      path: "/departments",
      icon: <BookOpen className="w-5 h-5" />,
      dropdown: [
        { name: "Computer Science", path: "/departments/cse" },
        { name: "Electronics", path: "/departments/ece" },
        { name: "Mechanical", path: "/departments/mech" },
        { name: "Civil", path: "/departments/civil" },
      ],
    },
    { name: "Placements", path: "/placements", icon: <Users className="w-5 h-5" /> },
    { name: "Contact", path: "/contact", icon: <Phone className="w-5 h-5" /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

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
            <h1 className="text-lg md:text-xl font-bold tracking-wide leading-tight">
              Krishna Engineering
            </h1>
            <p className="text-xs text-blue-200">College</p>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => item.dropdown && setDropdownOpen(item.name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  to={item.path}
                  className="flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group"
                >
                  <span
                    className={`mr-2 ${
                      hoveredItem === item.name ? "text-yellow-400" : ""
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="flex items-center gap-1">
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} />}
                  </span>
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {dropdownOpen === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50"
                    >
                      {item.dropdown.map((drop, i) => (
                        <Link
                          key={i}
                          to={drop.path}
                          className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-700"
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
              className="bg-yellow-400 text-blue-900 font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-yellow-300 transition-colors duration-300 flex items-center space-x-1"
            >
              <span>Apply Now</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
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
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400"
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
            className="md:hidden bg-blue-800 shadow-xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <div key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center px-3 py-3 text-base font-medium rounded-lg text-white hover:bg-blue-700 hover:text-yellow-400"
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </Link>
                  {/* Show dropdown inside mobile */}
                  {item.dropdown && (
                    <div className="ml-8 space-y-1">
                      {item.dropdown.map((drop, i) => (
                        <Link
                          key={i}
                          to={drop.path}
                          className="block px-3 py-2 text-sm text-gray-200 hover:text-yellow-400 hover:bg-blue-700 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
