import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  BookOpen,
  Briefcase,
  Newspaper,
  Beaker,
  GraduationCap,
  Image,
  Calendar,
  Award,
  ChevronDown,
  X,
  Menu,
  School,
  Building,
  Bookmark,
  Phone,
  MapPin,
  Library,
  Mic,
  BarChart3,
  Star,
  Trophy,
} from "lucide-react";

// Color palette
const colors = {
  primary: "#1a365d",     // Deep blue
  secondary: "#b38b59",   // Gold
  tertiary: "#2d3748",    // Dark gray
  accent: "#3182ce",      // Light blue
  light: "#e9d8a6",       // Cream/beige
};

// Affiliations data
const affiliations = [
  { Icon: Award, label: "Best Result", color: colors.secondary },
  { Icon: Star, label: "Quality Education", color: colors.accent },
  { Icon: Trophy, label: "Placement", color: colors.primary },
  { Icon: GraduationCap, label: "Mentor", color: colors.tertiary },
];

// Main categories with expanded details
const mainCategories = [
  {
    name: "Home",
    path: "/",
    icon: Home,
    description: "Welcome to Krishna Engineering College",
  },
  {
    name: "About",
    path: "/about",
    icon: Users,
    description: "Discover our history and leadership",
    submenu: [
      { name: "About College", path: "/about", icon: Building, description: "Our journey and achievements" },
      { name: "Principal's Message", path: "/principal", icon: Mic, description: "Words from our leadership" },
      { name: "HOD", path: "/hod", icon: Users, description: "Heads of Departments" },
      { name: "Mission & Vision", path: "/mission", icon: Award, description: "Our guiding principles" },
      { name: "Governance", path: "/governance", icon: Library, description: "Management structure" },
    ],
  },
  {
    name: "Academics",
    path: "/departments",
    icon: BookOpen,
    description: "Programs and departments",
    submenu: [
      { name: "Departments", path: "/departments", icon: BookOpen, description: "Explore our academic departments" },
      { name: "Courses", path: "/courses", icon: GraduationCap, description: "Programs we offer" },
      { name: "Faculty", path: "/faculty", icon: Users, description: "Meet our professors" },
      { name: "Research", path: "/research", icon: Beaker, description: "Innovation and projects" },
    ],
  },
  {
    name: "Admission",
    path: "/admission",
    icon: GraduationCap,
    description: "Join our institution",
    submenu: [
      { name: "Process", path: "/admission#process", icon: BarChart3, description: "Step-by-step guide" },
      { name: "Requirements", path: "/admission#requirements", icon: Bookmark, description: "Eligibility criteria" },
      { name: "Scholarships", path: "/admission#scholarships", icon: Award, description: "Financial assistance" },
    ],
  },
  {
    name: "Campus",
    path: "/facilities",
    icon: Building,
    description: "Our facilities and infrastructure",
    submenu: [
      { name: "Facilities", path: "/facilities", icon: Building, description: "Campus amenities" },
      { name: "Infrastructure", path: "/infrastructure", icon: MapPin, description: "Our campus layout" },
      { name: "Gallery", path: "/gallery", icon: Image, description: "Campus visuals" },
    ],
  },
  {
    name: "Placements",
    path: "/placements",
    icon: Briefcase,
    description: "Career opportunities",
    submenu: [
      { name: "Placement Stats", path: "/placements#stats", icon: BarChart3, description: "Our success records" },
      { name: "Recruiters", path: "/placements#recruiters", icon: Briefcase, description: "Our industry partners" },
      { name: "Training", path: "/placements#training", icon: School, description: "Career preparation" },
    ],
  },
  {
    name: "Connect",
    path: "#",
    icon: Bookmark,
    description: "More ways to engage",
    submenu: [
      { name: "Notices", path: "/notice", icon: Newspaper, description: "Latest announcements" },
      { name: "Events", path: "/event", icon: Calendar, description: "Upcoming activities" },
      { name: "Press", path: "/press", icon: Bookmark, description: "Media coverage" },
      { name: "Alumni", path: "/alumni", icon: School, description: "Our graduates network" },
      { name: "Affiliation", path: "/affiliation", icon: Award, description: "Accreditations" },
      { name: "Contact", path: "/contact", icon: Phone, description: "Get in touch with us" },
    ],
  },
];

const UniversityMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
        setMobileSubmenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeAllMenus = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.4 } },
  };

  const subMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.2 } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <div className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/2025-08-27 19.10.46.jpg"
              className="w-14 h-14 rounded-full p-1 object-cover border"
              alt="Krishna Engineering College Logo"
              style={{ borderColor: colors.tertiary }}
            />
            <div className="ml-3" style={{ fontFamily: "inter, serif" }}>
              <h1 className="text-lg md:text-xl font-bold" style={{ color: colors.primary }}>
                KRISHNA
              </h1>
              <p className="text-xs" style={{ color: colors.tertiary }}>
                ENGINEERING COLLEGE
              </p>
              <span className="text-xs md:text-sm font-medium" style={{ color: colors.accent }}>
                Managed By KPS GROUP
              </span>
            </div>
          </div>

          {/* Affiliations */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {affiliations.map((aff, index) => {
              const IconComponent = aff.Icon;
              return (
                <div key={index} className="flex items-center group">
                  <div className="p-2 rounded-full" style={{ backgroundColor: "#f8fafc" }}>
                    <IconComponent size={16} style={{ color: aff.color }} />
                  </div>
                  <span className="ml-2 text-sm font-medium hidden lg:inline" style={{ color: colors.tertiary }}>
                    {aff.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md"
              style={{ color: colors.tertiary }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center relative">
            <div className="flex space-x-1">
              {mainCategories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={cat.name}
                    className="relative group"
                    style={{ fontFamily: "inter, serif" }}
                    onMouseEnter={() => setActiveMenu(cat.name)}
                    onMouseLeave={() => { setActiveMenu(null); setHoveredItem(null); }}
                  >
                    <Link
                      to={cat.path}
                      className="flex items-center px-4 py-3 text-sm font-medium rounded-t-lg"
                      style={{ color: colors.tertiary }}
                    >
                      <IconComponent size={18} className="mr-1"  style={{ color: colors.secondary }} />
                      {cat.name}
                      {cat.submenu && <ChevronDown size={16} className="ml-1" />}
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Mega Menu */}
            <AnimatePresence>
              {activeMenu && (
                <motion.div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {mainCategories.map((cat) => {
                    if (cat.name === activeMenu && cat.submenu) {
                      const IconComponent = cat.icon;
                      return (
                        <div
                          key={cat.name}
                          className="rounded-b-lg shadow-xl bg-white border overflow-hidden"
                          style={{ borderColor: colors.tertiary }}
                        >
                          <div className="py-4 px-6" style={{ backgroundColor: colors.primary, color: "white" }}>
                            <div className="flex items-center">
                              <IconComponent size={24} className="mr-3"  />
                              <div>
                                <h3 className="text-xl font-bold">{cat.name}</h3>
                                <p className="text-sm opacity-90">{cat.description}</p>
                              </div>
                            </div>
                          </div>

                          <div className="p-6 grid grid-cols-2 gap-4">
                            {cat.submenu.map((item) => {
                              const ItemIcon = item.icon;
                              return (
                                <motion.div key={item.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                  <Link
                                    to={item.path}
                                    className="flex items-start p-3 rounded-lg transition-all duration-200"
                                    style={{
                                      backgroundColor: hoveredItem === item.name ? colors.light : "transparent",
                                    }}
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    onClick={closeAllMenus}
                                  >
                                    <div
                                      className="flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center mr-3"
                                      style={{ backgroundColor: colors.primary, }}
                                    >
                                      <ItemIcon size={18} style={{ color: "white" }} />
                                    </div>
                                    <div>
                                      <h4 className="font-semibold" style={{ color: colors.primary }}>
                                        {item.name}
                                      </h4>
                                      <p className="text-sm" style={{ color: colors.tertiary }}>
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-4 py-3 border-b" style={{ backgroundColor: "#f9fafb" }}>
              <h3 className="text-sm font-semibold" style={{ color: colors.tertiary }}>
                RECOGNITIONS & AWARDS
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {affiliations.map((aff, i) => {
                  const IconComponent = aff.Icon;
                  return (
                    <motion.div
                      key={i}
                      className="flex items-center p-2 bg-white rounded-lg border"
                      style={{ borderColor: colors.tertiary }}
                    >
                      <IconComponent size={16} style={{ color: aff.color }} />
                      <span className="ml-2 text-xs" style={{ color: colors.tertiary }}>
                        {aff.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="py-2 space-y-1">
              {mainCategories.map((cat) => {
                const IconComponent = cat.icon;
                const hasSub = cat.submenu?.length > 0;
                return (
                  <div key={cat.name} className="border-b last:border-b-0" style={{ borderColor: "#e2e8f0" }}>
                    <div
                      className="flex items-center justify-between px-4 py-3 cursor-pointer"
                      onClick={() => hasSub && setMobileSubmenu(mobileSubmenu === cat.name ? null : cat.name)}
                    >
                      <Link
                        to={cat.path}
                        className="flex items-center font-medium"
                        style={{ color: colors.tertiary }}
                        onClick={!hasSub ? closeAllMenus : undefined}
                      >
                        <IconComponent size={20} style={{ color: colors.primary }} className="mr-3" />
                        {cat.name}
                      </Link>
                      {hasSub && (
                        <motion.div
                          variants={chevronVariants}
                          animate={mobileSubmenu === cat.name ? "open" : "closed"}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} style={{ color: colors.tertiary }} />
                        </motion.div>
                      )}
                    </div>

                    <AnimatePresence>
                      {hasSub && mobileSubmenu === cat.name && (
                        <motion.div className="pl-12 pr-4 bg-gray-50" initial="closed" animate="open" exit="closed" variants={subMenuVariants}>
                          <div className="py-2 space-y-2">
                            {cat.submenu.map((item) => {
                              const ItemIcon = item.icon;
                              return (
                                <motion.div key={item.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                                  <Link
                                    to={item.path}
                                    className="flex items-center py-2 text-sm hover:underline"
                                    style={{ color: colors.tertiary }}
                                    onClick={closeAllMenus}
                                  >
                                    <ItemIcon size={16} style={{ color: colors.accent }} className="mr-3" />
                                    {item.name}
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UniversityMenu;
