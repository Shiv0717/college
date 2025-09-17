import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";

const sections = [
  {
    id: "01",
    title: "Departments",
    description: "Explore our academic departments that shape innovation and research.",
    link: "#",
    image: "https://picsum.photos/600/400?random=6",
  },
  {
    id: "02",
    title: "Academies",
    description: "Specialized academies that nurture practical skills and global exposure.",
    link: "#",
    image: "https://picsum.photos/600/400?random=7",
  },
  {
    id: "03",
    title: "Expertise",
    description: "Areas of expertise where our faculty and students excel worldwide.",
    link: "#",
    image: "https://picsum.photos/600/400?random=8",
  },
  {
    id: "04",
    title: "Placements",
    description: "Career opportunities with top recruiters and industry leaders.",
    link: "#",
    image: "https://picsum.photos/600/400?random=9",
  },
  {
    id: "05",
    title: "Research & Innovation",
    description: "Innovative projects and solutions driving future technologies.",
    link: "#",
    image: "https://picsum.photos/600/400?random=10",
  },
];

// Animation wrapper component
const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

const CoursesOffered = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 font-[Poppins,sans-serif] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-blue-700 uppercase tracking-wider text-sm font-semibold mb-3">
              Departments
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Academic Excellence
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>

        <div className="flex flex-col space-y-8">
          {sections.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 0.1}>
              <div className="relative group bg-white border-l-4 border-blue-600 py-8 px-8 transition-all duration-700 hover:border-blue-800 overflow-hidden rounded-r-lg hover:bg-gray-900">
                {/* Content Container */}
                <div className="relative z-10">
                  {/* Number + Title + Link */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-center space-x-6 mb-4 md:mb-0">
                      {/* Number with enhanced gradient effect */}
                      <div className="relative flex-shrink-0">
                        <span className="text-5xl font-bold text-transparent [-webkit-text-stroke:2px_#1e40af] group-hover:[-webkit-text-stroke:2px_#3b82f6]">
                          {item.id}.
                        </span>
                        <span className="absolute inset-0 text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          {item.id}.
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-500">
                        {item.title}
                      </h3>
                    </div>

                    {/* Enhanced Link with smooth transition */}
                    <a
                      href={item.link}
                      className="flex items-center text-blue-600 font-medium transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 group-hover:bg-blue-600 group-hover:text-white px-3 py-2 rounded-md"
                    >
                      <span className="mr-2">Explore</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </a>
                  </div>

                  {/* Description with enhanced animation */}
                  <div className="mt-4 pl-0 md:pl-20">
                    <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Enhanced Hover Background Overlay with parallax effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 overflow-hidden">
                  <div 
                    className="w-full h-full transform scale-110 group-hover:scale-100 transition-transform duration-1000"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(100%) brightness(1.2)'
                    }}
                  ></div>
                </div>

                {/* Enhanced hover effect line with gradient */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-700 group-hover:w-full"></div>

                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:border-blue-400"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Enhanced CTA at the bottom */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mt-16">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-900 transform hover:-translate-y-1 group"
            >
              <span>Explore All Programs</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CoursesOffered;