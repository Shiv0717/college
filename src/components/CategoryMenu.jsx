import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
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
  Info,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";

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
  const swiperRef = useRef(null);

  return (
    <div className="bg-blue-600 shadow-lg border-b border-blue-600">
      <div
        className="max-w-9xl mx-auto px-2 sm:px-6"
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView="auto"
          spaceBetween={10}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          modules={[FreeMode, Autoplay]}
        >
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isPDF = cat.isPDF;

            const commonClasses =
              "group relative whitespace-nowrap px-4 sm:px-5 py-3 text-sm font-medium transition-all duration-300 flex items-center rounded-md";
            const activeClasses =
              active === cat.name
                ? "text-white bg-blue-900/40"
                : "text-blue-100 hover:text-white hover:bg-blue-700/40";

            const iconClasses = `mr-2 transition-all duration-300 ${
              active === cat.name
                ? "text-blue-300"
                : "text-blue-200 group-hover:text-blue-300"
            }`;

            return (
              <SwiperSlide key={cat.name} className="!w-auto flex-shrink-0">
                {isPDF ? (
                  <a
                    href={cat.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${commonClasses} ${activeClasses}`}
                    onMouseEnter={() => setHovered(cat.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <IconComponent size={18} className={iconClasses} />
                    <span>{cat.name}</span>
                  </a>
                ) : (
                  <Link
                    to={cat.path}
                    onClick={() => setActive(cat.name)}
                    onMouseEnter={() => setHovered(cat.name)}
                    onMouseLeave={() => setHovered(null)}
                    className={`${commonClasses} ${activeClasses}`}
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
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default UniversityMenu;
