import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Colors
const colors = {
  primary: "#1a365d",     // Deep blue (university primary)
  secondary: "#b38b59",   // Gold accent (university secondary)
  tertiary: "#2d3748",    // Dark gray
  accent: "#3182ce",      // Light blue
  light: "#e9d8a6",       // Cream/beige
};

// Affiliations data
const affiliations = [
  { Icon: Award, label: "Best Result", color: "text-yellow-500" },
  { Icon: Star, label: "Quality Education", color: "text-green-500" },
  { Icon: Trophy, label: "Placement", color: "text-red-500" },
  { Icon: GraduationCap, label: "Mentor", color: "text-purple-500" },
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
      {
        name: "About College",
        path: "/about",
        icon: Building,
        description: "Our journey and achievements",
      },
      {
        name: "Principal's Message",
        path: "/principal",
        icon: Mic,
        description: "Words from our leadership",
      },
      {
        name: "HOD",
        path: "/hod",
        icon: Users,
        description: "Heads of Departments",
      },
      {
        name: "Mission & Vision",
        path: "/mission",
        icon: Award,
        description: "Our guiding principles",
      },
      {
        name: "Governance",
        path: "/governance",
        icon: Library,
        description: "Management structure",
      },
    ],
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
        description: "Explore our academic departments",
      },
      {
        name: "Courses",
        path: "/courses",
        icon: GraduationCap,
        description: "Programs we offer",
      },
      {
        name: "Faculty",
        path: "/faculty",
        icon: Users,
        description: "Meet our professors",
      },
      {
        name: "Research",
        path: "/research",
        icon: Beaker,
        description: "Innovation and projects",
      },
    ],
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
        description: "Step-by-step guide",
      },
      {
        name: "Requirements",
        path: "/admission#requirements",
        icon: Bookmark,
        description: "Eligibility criteria",
      },
      {
        name: "Scholarships",
        path: "/admission#scholarships",
        icon: Award,
        description: "Financial assistance",
      },
    ],
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
        description: "Campus amenities",
      },
      {
        name: "Infrastructure",
        path: "/infrastructure",
        icon: MapPin,
        description: "Our campus layout",
      },
      {
        name: "Gallery",
        path: "/gallery",
        icon: Image,
        description: "Campus visuals",
      },
    ],
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
        description: "Our success records",
      },
      {
        name: "Recruiters",
        path: "/placements#recruiters",
        icon: Briefcase,
        description: "Our industry partners",
      },
      {
        name: "Training",
        path: "/placements#training",
        icon: School,
        description: "Career preparation",
      },
    ],
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
        description: "Latest announcements",
      },
      {
        name: "Events",
        path: "/event",
        icon: Calendar,
        description: "Upcoming activities",
      },
      {
        name: "Press",
        path: "/press",
        icon: Bookmark,
        description: "Media coverage",
      },
      {
        name: "Alumni",
        path: "/alumni",
        icon: School,
        description: "Our graduates network",
      },
      {
        name: "Affiliation",
        path: "/affiliation",
        icon: Award,
        description: "Accreditations",
      },
      {
        name: "Contact",
        path: "/contact",
        icon: Phone,
        description: "Get in touch with us",
      },
    ],
  },
];

const UniversityMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  // Refs for GSAP animations
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  const affiliationRefs = useRef([]);
  const menuItemRefs = useRef([]);
  const megaMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.fromTo(logoRef.current,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out"
        }
      );

      // Affiliations animation
      affiliationRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(ref,
            { opacity: 0, x: 20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              delay: index * 0.1,
              ease: "power2.out"
            }
          );
        }
      });

      // Menu items animation
      menuItemRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(ref,
            { opacity: 0, y: -10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: index * 0.05,
              ease: "back.out(1.7)"
            }
          );
        }
      });
    }, menuRef);

    return () => ctx.revert();
  }, []);

  // Animate mega menu when activeMenu changes
  useEffect(() => {
    if (activeMenu && megaMenuRef.current) {
      gsap.fromTo(megaMenuRef.current,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        }
      );
    }
  }, [activeMenu]);

  const closeAllMenus = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <div ref={menuRef} className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar with Logo and Affiliations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div ref={logoRef} className="flex-shrink-0">
            <div className="flex items-center">
              <img
                src="/images/2025-08-27 19.10.46.jpg"
                className="w-14 h-14 rounded-full p-1 object-cover border border-gray-200"
                alt="Krishna Engineering College Logo"
              />
              <div className="ml-3" style={{ fontFamily: 'inter, serif' }}>
                <h1 className="text-lg md:text-xl font-bold text-gray-900">
                  KRISHNA
                </h1>
                <p className="text-xs text-gray-600 -mt-1">
                  ENGINEERING COLLEGE
                </p>
                <span className="text-xs text-blue-700 font-medium md:text-sm" style={{ color: colors.primary }}>
                  Managed By KPS GROUP
                </span>
              </div>
            </div>
          </div>

          {/* Affiliations - Right Side */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6" style={{ fontFamily: 'inter, serif' }}>
            {affiliations.map((affiliation, index) => {
              const IconComponent = affiliation.Icon;
              return (
                <div 
                  key={index} 
                  ref={el => affiliationRefs.current[index] = el}
                  className="flex items-center group"
                >
                  <div 
                    className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors"
                    style={{ backgroundColor: `${colors.primary}10` }}
                  >
                    <IconComponent
                      size={16}
                      className={`${affiliation.color} transition-colors duration-300 group-hover:text-blue-700`}
                    />
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
          <div className="flex justify-center relative">
            <div className="flex space-x-1">
              {mainCategories.map((category, index) => {
                const IconComponent = category.icon;

                return (
                  <div
                    key={category.name}
                    ref={el => menuItemRefs.current[index] = el}
                    className="relative group"
                    style={{ fontFamily: "inter, serif" }}
                    onMouseEnter={() => setActiveMenu(category.name)}
                    onMouseLeave={() => {
                      setActiveMenu(null);
                      setHoveredItem(null);
                    }}
                  >
                    <Link
                      to={category.path}
                      className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors group-hover:bg-blue-50 rounded-t-lg"
                      style={{ 
                        color: activeMenu === category.name ? colors.primary : '#374151',
                        backgroundColor: activeMenu === category.name ? `${colors.primary}10` : 'transparent'
                      }}
                    >
                      <IconComponent size={18} className="mr-1" />
                      {category.name}
                      {category.submenu && (
                        <ChevronDown
                          size={16}
                          className="ml-1 transition-transform group-hover:rotate-180"
                        />
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
            
            {/* Centered Mega Menu Container */}
            {activeMenu && (
              <div
                ref={megaMenuRef}
                className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl"
                onMouseEnter={() => setActiveMenu(activeMenu)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {mainCategories.map((category) => {
                  if (category.name === activeMenu && category.submenu) {
                    const IconComponent = category.icon;
                    
                    return (
                      <div
                        key={category.name}
                        className="rounded-b-lg shadow-xl bg-white border border-gray-200 overflow-hidden"
                      >
                        {/* Mega Menu Header */}
                        <div 
                          className="bg-blue-800 text-white py-4 px-6"
                          style={{ backgroundColor: colors.primary }}
                        >
                          <div className="flex items-center">
                            <IconComponent size={24} className="mr-3" />
                            <div>
                              <h3 className="text-xl font-bold">
                                {category.name}
                              </h3>
                              <p className="text-sm opacity-90">
                                {category.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Mega Menu Content */}
                        <div className="p-6 grid grid-cols-2 gap-4">
                          {category.submenu.map((item) => {
                            const ItemIcon = item.icon;
                            return (
                              <div
                                key={item.name}
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
                                  style={{ 
                                    backgroundColor: hoveredItem === item.name ? `${colors.primary}10` : 'transparent'
                                  }}
                                >
                                  <div 
                                    className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3"
                                    style={{ backgroundColor: `${colors.primary}20` }}
                                  >
                                    <ItemIcon
                                      size={18}
                                      className="text-blue-700"
                                      style={{ color: colors.primary }}
                                    />
                                  </div>
                                  <div>
                                    <h4 
                                      className="font-semibold text-gray-900"
                                      style={{ color: colors.tertiary }}
                                    >
                                      {item.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white border-t border-gray-200"
        >
          {/* Mobile Affiliations */}
          <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              RECOGNITIONS & AWARDS
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {affiliations.map((affiliation, index) => {
                const IconComponent = affiliation.Icon;
                return (
                  <div
                    key={index}
                    className="flex items-center p-2 bg-white rounded-lg border border-gray-200"
                  >
                    <IconComponent size={16} className="mr-2 text-blue-700" style={{ color: colors.primary }} />
                    <span className="text-xs text-gray-700">
                      {affiliation.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="py-2 space-y-1">
            {mainCategories.map((category) => {
              const IconComponent = category.icon;
              const hasSubmenu =
                category.submenu && category.submenu.length > 0;

              return (
                <div
                  key={category.name}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <div
                    className={`flex items-center justify-between px-4 py-3 ${
                      hasSubmenu ? "cursor-pointer" : ""
                    }`}
                    onClick={() =>
                      hasSubmenu &&
                      setMobileSubmenu(
                        mobileSubmenu === category.name ? null : category.name
                      )
                    }
                  >
                    <Link
                      to={category.path}
                      className="flex items-center font-medium text-gray-700"
                      onClick={!hasSubmenu ? closeAllMenus : undefined}
                      style={{ color: colors.tertiary }}
                    >
                      <IconComponent
                        size={20}
                        className="mr-3 text-blue-700"
                        style={{ color: colors.primary }}
                      />
                      {category.name}
                    </Link>

                    {hasSubmenu && (
                      <ChevronDown 
                        size={16} 
                        className="text-gray-500" 
                        style={{ transform: mobileSubmenu === category.name ? 'rotate(180deg)' : 'rotate(0)' }}
                      />
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {hasSubmenu && mobileSubmenu === category.name && (
                    <div
                      className="bg-gray-50 pl-12 pr-4"
                      style={{ backgroundColor: `${colors.primary}05` }}
                    >
                      <div className="py-2 space-y-2">
                        {category.submenu.map((item) => {
                          const ItemIcon = item.icon;
                          return (
                            <div
                              key={item.name}
                            >
                              <Link
                                to={item.path}
                                className="flex items-center py-2 text-sm text-gray-700 hover:text-blue-700 transition-colors"
                                onClick={closeAllMenus}
                                style={{ color: colors.tertiary }}
                              >
                                <ItemIcon
                                  size={16}
                                  className="mr-3 text-gray-500"
                                  style={{ color: colors.primary }}
                                />
                                {item.name}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversityMenu;