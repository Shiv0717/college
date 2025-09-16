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
  Trophy
} from "lucide-react";

// Affiliations data
const affiliations = [
  { Icon: Award, label: "Best Result" },
  { Icon: Star, label: "Quality Education" },
  { Icon: Trophy, label: "Placement" },
  { Icon: GraduationCap, label: "Mentor" },
];

// Main categories with expanded details
const mainCategories = [
  {
    name: "Home",
    path: "/",
    icon: Home,
    description: "Welcome to Krishna Engineering College"
  },
  {
    name: "About",
    path: "/about",
    icon: Users,
    description: "Discover our history and leadership",
    submenu: [
      { 
        name: "About College", 
        path: "/about",
        icon: Building,
        description: "Our journey and achievements" 
      },
      { 
        name: "Principal's Message", 
        path: "/principal",
        icon: Mic,
        description: "Words from our leadership" 
      },
      { 
        name: "HOD", 
        path: "/hod",
        icon: Users,
        description: "Heads of Departments" 
      },
      { 
        name: "Mission & Vision", 
        path: "/mission",
        icon: Award,
        description: "Our guiding principles" 
      },
      { 
        name: "Governance", 
        path: "/governance",
        icon: Library,
        description: "Management structure" 
      }
    ]
  },
  {
    name: "Academics",
    path: "/departments",
    icon: BookOpen,
    description: "Programs and departments",
    submenu: [
      { 
        name: "Departments", 
        path: "/departments",
        icon: BookOpen,
        description: "Explore our academic departments" 
      },
      { 
        name: "Courses", 
        path: "/courses",
        icon: GraduationCap,
        description: "Programs we offer" 
      },
      { 
        name: "Faculty", 
        path: "/faculty",
        icon: Users,
        description: "Meet our professors" 
      },
      { 
        name: "Research", 
        path: "/research",
        icon: Beaker,
        description: "Innovation and projects" 
      }
    ]
  },
  {
    name: "Admission",
    path: "/admission",
    icon: GraduationCap,
    description: "Join our institution",
    submenu: [
      { 
        name: "Process", 
        path: "/admission#process",
        icon: BarChart3,
        description: "Step-by-step guide" 
      },
      { 
        name: "Requirements", 
        path: "/admission#requirements",
        icon: Bookmark,
        description: "Eligibility criteria" 
      },
      { 
        name: "Scholarships", 
        path: "/admission#scholarships",
        icon: Award,
        description: "Financial assistance" 
      }
    ]
  },
  {
    name: "Campus",
    path: "/facilities",
    icon: Building,
    description: "Our facilities and infrastructure",
    submenu: [
      { 
        name: "Facilities", 
        path: "/facilities",
        icon: Building,
        description: "Campus amenities" 
      },
      { 
        name: "Infrastructure", 
        path: "/infrastructure",
        icon: MapPin,
        description: "Our campus layout" 
      },
      { 
        name: "Gallery", 
        path: "/gallery",
        icon: Image,
        description: "Campus visuals" 
      }
    ]
  },
  {
    name: "Placements",
    path: "/placements",
    icon: Briefcase,
    description: "Career opportunities",
    submenu: [
      { 
        name: "Placement Stats", 
        path: "/placements#stats",
        icon: BarChart3,
        description: "Our success records" 
      },
      { 
        name: "Recruiters", 
        path: "/placements#recruiters",
        icon: Briefcase,
        description: "Our industry partners" 
      },
      { 
        name: "Training", 
        path: "/placements#training",
        icon: School,
        description: "Career preparation" 
      }
    ]
  },
  {
    name: "Connect",
    path: "#",
    icon: Bookmark,
    description: "More ways to engage",
    submenu: [
      { 
        name: "Notices", 
        path: "/notice",
        icon: Newspaper,
        description: "Latest announcements" 
      },
      { 
        name: "Events", 
        path: "/event",
        icon: Calendar,
        description: "Upcoming activities" 
      },
      { 
        name: "Press", 
        path: "/press",
        icon: Bookmark,
        description: "Media coverage" 
      },
      { 
        name: "Alumni", 
        path: "/alumni",
        icon: School,
        description: "Our graduates network" 
      },
      { 
        name: "Affiliation", 
        path: "/affiliation",
        icon: Award,
        description: "Accreditations" 
      },
      { 
        name: "Contact", 
        path: "/contact",
        icon: Phone,
        description: "Get in touch with us" 
      }
    ]
  }
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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeAllMenus = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const subMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };

  return (
    <div className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar with Logo and Affiliations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img 
                src="/images/2025-08-27 19.10.46.jpg" 
                className="w-14 h-14 rounded-full p-1 object-cover border border-gray-200" 
                alt="Krishna Engineering College Logo"
              />
              <div className="ml-3">
                <h1 className="text-lg md:text-xl font-bold text-gray-900">KRISHNA</h1>
                <p className="text-xs text-gray-600 -mt-1">ENGINEERING COLLEGE</p> 
                <span className="text-xs text-blue-700 font-medium md:text-sm">Managed By KPS GROUP</span> 
              </div>
            </div>
          </div>
          
          {/* Affiliations - Right Side */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {affiliations.map((affiliation, index) => {
              const IconComponent = affiliation.Icon;
              return (
                <div key={index} className="flex items-center group">
                  <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors text-blue-700">
                    <IconComponent size={16} />
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700 hidden lg:inline">
                    {affiliation.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Menu with Mega Menu */}
      <div className="hidden md:block border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="flex space-x-1">
              {mainCategories.map((category) => {
                const IconComponent = category.icon;
                
                return (
                  <div
                    key={category.name}
                    className="relative group"
                    onMouseEnter={() => setActiveMenu(category.name)}
                    onMouseLeave={() => {
                      setActiveMenu(null);
                      setHoveredItem(null);
                    }}
                  >
                    <Link
                      to={category.path}
                      className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors group-hover:bg-blue-50 rounded-t-lg"
                    >
                      <IconComponent size={18} className="mr-1" />
                      {category.name}
                      {category.submenu && (
                        <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                      )}
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {category.submenu && activeMenu === category.name && (
  <motion.div
    className="absolute top-full left-1/2 transform -translate-x-1/2 min-w-[600px] max-w-[90vw] rounded-b-lg shadow-xl bg-white border border-gray-200 z-50 overflow-hidden"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
  >

                        {/* Mega Menu Header */}
                        <div className="bg-blue-800 text-white py-4 px-6">
                          <div className="flex items-center">
                            <IconComponent size={24} className="mr-3" />
                            <div>
                              <h3 className="text-xl font-bold">{category.name}</h3>
                              <p className="text-sm opacity-90">{category.description}</p>
                            </div>
                          </div>
                        </div>

                        {/* Mega Menu Content */}
                        <div className="p-6 grid grid-cols-2 gap-4">
                          {category.submenu.map((item) => {
                            const ItemIcon = item.icon;
                            return (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                              >
                                <Link
                                  to={item.path}
                                  className={`flex items-start p-3 rounded-lg transition-all duration-200 ${
                                    hoveredItem === item.name
                                      ? "bg-blue-50 transform scale-[1.02] shadow-md"
                                      : "hover:bg-blue-50"
                                  }`}
                                  onClick={closeAllMenus}
                                  onMouseEnter={() => setHoveredItem(item.name)}
                                  onMouseLeave={() => setHoveredItem(null)}
                                >
                                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                                    <ItemIcon size={18} className="text-blue-700" />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t border-gray-200"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            {/* Mobile Affiliations */}
            <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">RECOGNITIONS & AWARDS</h3>
              <div className="grid grid-cols-2 gap-2">
                {affiliations.map((affiliation, index) => {
                  const IconComponent = affiliation.Icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="flex items-center p-2 bg-white rounded-lg border border-gray-200"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <IconComponent size={16} className="mr-2 text-blue-700" />
                      <span className="text-xs text-gray-700">{affiliation.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="py-2 space-y-1">
              {mainCategories.map((category) => {
                const IconComponent = category.icon;
                const hasSubmenu = category.submenu && category.submenu.length > 0;
                
                return (
                  <div key={category.name} className="border-b border-gray-100 last:border-b-0">
                    <div 
                      className={`flex items-center justify-between px-4 py-3 ${hasSubmenu ? 'cursor-pointer' : ''}`}
                      onClick={() => hasSubmenu && setMobileSubmenu(mobileSubmenu === category.name ? null : category.name)}
                    >
                      <Link
                        to={category.path}
                        className="flex items-center font-medium text-gray-700"
                        onClick={!hasSubmenu ? closeAllMenus : undefined}
                      >
                        <IconComponent size={20} className="mr-3 text-blue-700" />
                        {category.name}
                      </Link>
                      
                      {hasSubmenu && (
                        <motion.div
                          variants={chevronVariants}
                          animate={mobileSubmenu === category.name ? "open" : "closed"}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} className="text-gray-500" />
                        </motion.div>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {hasSubmenu && mobileSubmenu === category.name && (
                        <motion.div
                          className="bg-gray-50 pl-12 pr-4"
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={subMenuVariants}
                        >
                          <div className="py-2 space-y-2">
                            {category.submenu.map((item) => {
                              const ItemIcon = item.icon;
                              return (
                                <motion.div
                                  key={item.name}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 }}
                                >
                                  <Link
                                    to={item.path}
                                    className="flex items-center py-2 text-sm text-gray-700 hover:text-blue-700 transition-colors"
                                    onClick={closeAllMenus}
                                  >
                                    <ItemIcon size={16} className="mr-3 text-gray-500" />
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