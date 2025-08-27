import React, { useState } from "react";
import { 
  Users, 
  BookOpen, 
  FileText, 
  Building, 
 
  Bell, 
  Clipboard,
  ChevronDown
} from "lucide-react";

const categories = [
  { name: "About Us", icon: Users },
  { name: "Programs & Eligibility", icon: BookOpen },
  { name: "Examination", icon: FileText },
  { name: "Infrastructure", icon: Building },
  
  { name: "Notices & Media", icon: Bell },
  { name: "Admission", icon: Clipboard },
];

const UniversityMenu = () => {
  const [active, setActive] = useState("About Us");
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-700 shadow-lg border-b border-blue-600">
      <div className="flex max-w-7xl mx-auto overflow-x-auto px-2 sm:px-6 scrollbar-hide">
        {categories.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <button
              key={cat.name}
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
              
              {/* Subtle dropdown indicator for items that might have submenus */}
              <ChevronDown 
                size={14} 
                className={`ml-1 transition-transform duration-300 ${
                  active === cat.name ? "text-blue-300 rotate-180" : "text-blue-200/70 group-hover:text-blue-300"
                }`} 
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default UniversityMenu;