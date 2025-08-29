import React, { useState } from "react";
import { 
  Users, 
  Building, 
  Bell, 
  Clipboard, 
  Briefcase,
  Info,
  Award,
  Beaker
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  
  { name: "Research & Development", path: "/research", icon: Beaker },
  { name: "Notices & Media", path: "/notice", icon: Bell },
  { name: "Admission", path: "/admission", icon: Clipboard },
  { name: "Faculty", path: "/faculty", icon: Users },
  { name: "Placements", path: "/placements", icon: Briefcase },
  { name: "Affiliation", path: "/affiliation", icon: Award },
  { name: "Press", path: "/press", icon: Users },
  { name: "Event", path: "/event", icon: Briefcase },
  { name: "gallery", path: "/gallery", icon: Award },
  { name: "Mandatory", path: "/mandatory/Mandatory Disclosures_KEC.pdf", icon: Info, isPDF: true },
  
];

const UniversityMenu = () => {
  const [active, setActive] = useState("About Us");
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-700 shadow-lg border-b border-blue-600">
      <div className="flex max-w-9xl mx-auto overflow-x-auto px-2 sm:px-6 scrollbar-hide">
        {categories.map((cat) => {
          const IconComponent = cat.icon;
          const isPDF = cat.isPDF;

          // Render <a> tag for PDF links
          if (isPDF) {
            return (
              <a
                key={cat.name}
                href={cat.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex-shrink-0 whitespace-nowrap px-4 sm:px-5 py-3 text-sm font-medium transition-all duration-300 flex items-center
                  ${
                    active === cat.name
                      ? "text-white bg-blue-900/40"
                      : "text-blue-100 hover:text-white hover:bg-blue-700/40"
                  }`}
                onMouseEnter={() => setHovered(cat.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <IconComponent 
                  size={18} 
                  className={`mr-2 transition-all duration-300 ${
                    active === cat.name ? "text-blue-300" : "text-blue-200 group-hover:text-blue-300"
                  }`} 
                />
                <span>{cat.name}</span>

                {/* Hover effect */}
                {hovered === cat.name && (
                  <span className="absolute inset-0 bg-white/10 rounded-md transition-all duration-300"></span>
                )}
              </a>
            );
          }

          // Default React Router Link for other menu items
          return (
            <Link
              key={cat.name}
              to={cat.path}
              onClick={() => setActive(cat.name)}
              onMouseEnter={() => setHovered(cat.name)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative flex-shrink-0 whitespace-nowrap px-4 sm:px-5 py-3 text-sm font-medium transition-all duration-300 flex items-center
                ${
                  active === cat.name
                    ? "text-white bg-blue-900/40"
                    : "text-blue-100 hover:text-white hover:bg-blue-700/40"
                }`}
            >
              <IconComponent 
                size={18} 
                className={`mr-2 transition-all duration-300 ${
                  active === cat.name ? "text-blue-300" : "text-blue-200 group-hover:text-blue-300"
                }`} 
              />
              <span>{cat.name}</span>

              {/* Active indicator bar */}
              {active === cat.name && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 rounded-t-full"></span>
              )}

              {/* Hover effect */}
              {hovered === cat.name && active !== cat.name && (
                <span className="absolute inset-0 bg-white/10 rounded-md transition-all duration-300"></span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UniversityMenu;
