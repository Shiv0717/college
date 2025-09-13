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
  HeartHandshake,
  Star,
  Trophy,
  ChevronRight
} from "lucide-react";

// Affiliations data
const affiliations = [
  { Icon: Award, label: "Best Result", color: "text-red-500" },
  { Icon: Star, label: "Quality Education", color: "text-blue-500" },
  { Icon: Trophy, label: "Placement", color: "text-amber-500" },
  { Icon: GraduationCap, label: "Mentor", color: "text-purple-500" },
];

// Main categories with expanded details
const mainCategories = [
  {
    name: "Home",
    path: "/",
    icon: Home,
    color: "text-teal-600",
    bgColor: "bg-teal-500",
    gradient: "from-teal-500 to-teal-600",
    hoverGradient: "hover:from-teal-600 hover:to-teal-700",
    description: "Welcome to Krishna Engineering College"
  },
  {
    name: "About",
    path: "/about",
    icon: Users,
    color: "text-indigo-600",
    bgColor: "bg-indigo-500",
    gradient: "from-indigo-500 to-indigo-600",
    hoverGradient: "hover:from-indigo-600 hover:to-indigo-700",
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
    color: "text-purple-600",
    bgColor: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600",
    hoverGradient: "hover:from-purple-600 hover:to-purple-700",
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
    color: "text-emerald-600",
    bgColor: "bg-emerald-500",
    gradient: "from-emerald-500 to-emerald-600",
    hoverGradient: "hover:from-emerald-600 hover:to-emerald-700",
    description: "Join our institution",
    highlight: true,
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
      },
      { 
        name: "Apply Now", 
        path: "/apply",
        icon: HeartHandshake,
        description: "Start your application",
        highlight: true
      }
    ]
  },
  {
    name: "Campus",
    path: "/facilities",
    icon: Building,
    color: "text-amber-600",
    bgColor: "bg-amber-500",
    gradient: "from-amber-500 to-amber-600",
    hoverGradient: "hover:from-amber-600 hover:to-amber-700",
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
    color: "text-blue-600",
    bgColor: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600",
    hoverGradient: "hover:from-blue-600 hover:to-blue-700",
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
    color: "text-gray-600",
    bgColor: "bg-gray-500",
    gradient: "from-gray-500 to-gray-600",
    hoverGradient: "hover:from-gray-600 hover:to-gray-700",
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
    <div className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      {/* Affiliations Bar - Desktop */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center py-2">
            <div className="flex items-center space-x-6">
              {affiliations.map((affiliation, index) => {
                const IconComponent = affiliation.Icon;
                return (
                  <div key={index} className="flex items-center group">
                    <div className={`p-2 rounded-full bg-white shadow-sm group-hover:shadow-md transition-shadow ${affiliation.color}`}>
                      <IconComponent size={16} />
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700">{affiliation.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-1">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img src="/images/2025-08-27 19.10.46.jpg" className="w-14 h-14 rounded-full p-1 object-cover"></img>
              <div className=" sm:block ml-3">
                <h1 className="text-lg md:text-xl font-bold text-gray-900">KRISHNA</h1>
                <p className="text-xs text-gray-600 -mt-1">ENGINEERING COLLEGE</p> 
                <span className="text-xs text-blue-600 font-medium md:text-sm">Managed By KPS GROUP</span> 
              </div>
            </div>
          </div>
          
          {/* Desktop Menu Items - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-4">
            <div className="flex space-x-1 justify-center">
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
                      className={`flex flex-col items-center px-4 py-3 text-sm font-medium rounded-lg mx-1 transition-all duration-300 ${category.hoverGradient} group-hover:text-white ${category.color}`}
                    >
                      <div className="relative">
                        <IconComponent size={20} className="mb-1 transition-transform duration-300 group-hover:scale-110" />
                        {category.highlight && (
                          <span className="absolute -top-1 -right-2 h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-semibold tracking-wide">{category.name}</span>
                      
                      {/* Animated background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                    </Link>

                    {/* Mega Dropdown Submenu - Centered */}
                    {category.submenu && activeMenu === category.name && (
                      <motion.div 
                        className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-[600px] rounded-xl shadow-2xl bg-white ring-1 ring-gray-200 z-50 overflow-hidden"
                        onMouseEnter={() => setActiveMenu(category.name)}
                        onMouseLeave={() => setActiveMenu(null)}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={`py-4 px-6 bg-gradient-to-r ${category.gradient} text-white`}>
                          <div className="flex items-center">
                            <IconComponent size={24} className="mr-3 " />
                            <div>
                              <h3 className="text-xl font-bold">{category.name}</h3>
                              <p className="text-sm opacity-90">{category.description}</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-6 grid grid-cols-2 gap-4">
                          {category.submenu.map((item) => {
                            const ItemIcon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-start p-4 rounded-lg transition-all duration-200 ${hoveredItem === item.name ? 'bg-gray-50 transform scale-[1.02] shadow-md' : 'hover:bg-gray-50'}`}
                                onClick={closeAllMenus}
                                onMouseEnter={() => setHoveredItem(item.name)}
                                onMouseLeave={() => setHoveredItem(null)}
                              >
                                <div className={`flex-shrink-0 h-10 w-10 rounded-lg ${category.bgColor} bg-opacity-10 flex items-center justify-center mr-4`}>
                                  <ItemIcon size={18} className='text-white' />
                                </div>
                                <div>
                                  <div className="flex items-center">
                                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                                    {item.highlight && (
                                      <span className="ml-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                </div>
                              </Link>
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

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block ml-6">
            <Link
              to="/apply"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
              onClick={closeAllMenus}
            >
              <HeartHandshake size={18} className="mr-2" />
              <span className="hidden sm:inline">Apply Now</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="lg:hidden bg-white border-t border-gray-200"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              {/* Mobile Affiliations */}
              <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">RECOGNITIONS & AWARDS</h3>
                <div className="grid grid-cols-2 gap-2">
                  {affiliations.map((affiliation, index) => {
                    const IconComponent = affiliation.Icon;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex items-center justify-center p-2 bg-white rounded-lg border border-gray-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <IconComponent size={16} className={`mr-2 ${affiliation.color}`} />
                        <span className="text-xs text-gray-700">{affiliation.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="py-4 space-y-1">
                {mainCategories.map((category) => {
                  const IconComponent = category.icon;
                  const hasSubmenu = category.submenu && category.submenu.length > 0;
                  
                  return (
                    <div key={category.name} className="border-b border-gray-100 last:border-b-0">
                      <div 
                        className={`flex items-center justify-between px-4 py-3 rounded-lg ${hasSubmenu ? 'cursor-pointer' : ''}`}
                        onClick={() => hasSubmenu && setMobileSubmenu(mobileSubmenu === category.name ? null : category.name)}
                      >
                        <Link
                          to={category.path}
                          className={`flex items-center font-medium ${category.color}`}
                          onClick={!hasSubmenu ? closeAllMenus : undefined}
                        >
                          <IconComponent size={20} className="mr-3" />
                          {category.name}
                          {category.highlight && (
                            <span className="ml-2 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">New</span>
                          )}
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
                                      className="flex items-center py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                                      onClick={closeAllMenus}
                                    >
                                      <ItemIcon size={16} className="mr-3 text-gray-500" />
                                      {item.name}
                                      {item.highlight && (
                                        <span className="ml-2 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">Featured</span>
                                      )}
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
                
                {/* Mobile CTA Button */}
                <div className="px-4 py-3 mt-4">
                  <Link
                    to="/apply"
                    className=" w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-center px-4 py-3 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center"
                    onClick={closeAllMenus}
                  >
                    <HeartHandshake size={18} className="mr-2" />
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UniversityMenu;