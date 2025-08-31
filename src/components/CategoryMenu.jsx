import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import {
  Users,
  Building,
  Bell,
  Clipboard,
  Briefcase,
  Info,
  Award,
  Beaker,
  Newspaper,
  Image,
  Calendar,
  FileText,
  GraduationCap,
  BookOpen
} from "lucide-react";

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
  { name: "Mandatory", path: "/mandatory/Mandatory Disclosures_KEC.pdf", icon: Info, isPDF: true },
];

const UniversityMenu = () => {
  const [active, setActive] = useState("About Us");
  const [hovered, setHovered] = useState(null);
  const swiperRef = useRef(null);

  // Initialize Swiper when component mounts
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-700 shadow-lg border-b border-blue-600">
      <div className="max-w-9xl mx-auto ">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, FreeMode]}
          spaceBetween={0}
          slidesPerView={"auto"}
          freeMode={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="university-menu-swiper"
        >
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isPDF = cat.isPDF;

            return (
              <SwiperSlide key={cat.name} className="!w-auto">
                {isPDF ? (
                  <a
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

                    {hovered === cat.name && (
                      <span className="absolute inset-0 bg-white/10 rounded-md transition-all duration-300"></span>
                    )}
                  </a>
                ) : (
                  <Link
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

                    {active === cat.name && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 rounded-t-full"></span>
                    )}

                    {hovered === cat.name && active !== cat.name && (
                      <span className="absolute inset-0 bg-white/10 rounded-md transition-all duration-300"></span>
                    )}
                  </Link>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        
        {/* Custom navigation buttons */}
        
      </div>
      
      <style jsx>{`
        .university-menu-swiper {
          padding: 0 30px;
        }
        .swiper-button-prev, .swiper-button-next {
          background: rgba(255, 255, 255, 0.1);
          width: 30px;
          height: 100%;
          top: 0;
          margin-top: 0;
          border-radius: 4px;
          transition: background 0.3s;
        }
        .swiper-button-prev:hover, .swiper-button-next:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .swiper-button-prev {
          left: 0;
        }
        .swiper-button-next {
          right: 0;
        }
        .swiper-button-disabled {
          opacity: 0.35;
        }
      `}</style>
    </div>
  );
};

export default UniversityMenu;