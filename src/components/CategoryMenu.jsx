import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import {
  Users,
  GraduationCap,
  Briefcase,
  Award,
  Beaker,
  Newspaper,
  Image,
  Calendar,
  FileText,
  Info
} from "lucide-react";
import { Link } from "react-router-dom";

// Menu items
const categories = [
  { name: "Research & Development", path: "/research", icon: Beaker },
  { name: "Notices & Media", path: "/notice", icon: Newspaper },
  { name: "Admission", path: "/admission", icon: GraduationCap },
  { name: "Faculty", path: "/faculty", icon: Users },
  { name: "Placements", path: "/placements", icon: Briefcase },
  { name: "Affiliation", path: "/affiliation", icon: Award },
  { name: "Press", path: "/press", icon: FileText },
  { name: "Event", path: "/event", icon: Calendar },
  { name: "Gallery", path: "/gallery", icon: Image },
  { name: "Alumni", path: "/alumni", icon: GraduationCap },
  {
    name: "Mandatory",
    path: "/mandatory/Mandatory Disclosures_KEC.pdf",
    icon: Info,
    isPDF: true,
  },
];

const UniversityMenu = () => {
  const [active, setActive] = useState("About Us");
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-700 shadow-md border-b border-blue-600">
      <Marquee
        pauseOnHover={true}
        speed={40}
        gradient={false}
        className="py-1"
      >
        <div className="flex gap-2 sm:gap-4 px-2 sm:px-6">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isPDF = cat.isPDF;

            const baseClasses = `group relative flex-shrink-0 whitespace-nowrap px-4 sm:px-5 py-2.5 text-sm font-medium transition-all duration-300 flex items-center rounded-md`;
            const activeClasses =
              active === cat.name
                ? "text-white bg-blue-900/40"
                : "text-blue-100 hover:text-white hover:bg-blue-700/40";
            const iconClasses = `mr-2 transition-all duration-300 ${
              active === cat.name
                ? "text-blue-300"
                : "text-blue-200 group-hover:text-blue-300"
            }`;

            return isPDF ? (
              <a
                key={cat.name}
                href={cat.path}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(cat.name)}
                onMouseLeave={() => setHovered(null)}
                className={`${baseClasses} ${activeClasses}`}
              >
                <IconComponent size={18} className={iconClasses} />
                <span>{cat.name}</span>
              </a>
            ) : (
              <Link
                key={cat.name}
                to={cat.path}
                onClick={() => setActive(cat.name)}
                onMouseEnter={() => setHovered(cat.name)}
                onMouseLeave={() => setHovered(null)}
                className={`${baseClasses} ${activeClasses}`}
              >
                <IconComponent size={18} className={iconClasses} />
                <span>{cat.name}</span>

                {active === cat.name && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 rounded-t-full"></span>
                )}

                {hovered === cat.name && active !== cat.name && (
                  <span className="absolute inset-0 bg-white/10 rounded-md transition-all duration-300"></span>
                )}
              </Link>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default UniversityMenu;
