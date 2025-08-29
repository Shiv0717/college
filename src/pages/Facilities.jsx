import React from "react";
import { motion } from "framer-motion";
import { 
  Monitor, 
  BookOpen, 
  Languages, 
  Settings,
  ArrowRight,
  Wifi,
  Clock,
  Users,
  Award,
  Microscope,
  Bookmark,
  Headphones,

} from "lucide-react";

const facilities = [
  {
    id: "computer-center",
    title: "Advanced Computer Center",
    desc: "Our state-of-the-art Computer Center spans over 5,000 sq. ft. and is equipped with 300+ high-performance systems with the latest Intel i7 processors, 32GB RAM, and dedicated graphics cards. All systems run updated software suites for programming, design, and data analysis, connected through a gigabit network with enterprise-grade cybersecurity protection.",
    img: "https://source.unsplash.com/1600x900/?computer-lab,technology",
    icon: Monitor,
    features: ["300+ High-performance systems", "Latest software suites", "Gigabit internet connectivity", "24/7 access with biometric security", "Dedicated programming and AI labs"],
    stats: { systems: "300+", area: "5000 sq ft", hours: "24/7" }
  },
  {
    id: "laboratories",
    title: "Advanced Research Laboratories",
    desc: "Our 15+ specialized laboratories across engineering disciplines provide hands-on experience with cutting-edge equipment. From robotics and IoT labs to advanced materials testing and electronics workshops, each facility is designed to encourage innovation, experimentation, and research with industry-standard tools and safety protocols.",
    img: "https://source.unsplash.com/1600x900/?laboratory,science",
    icon: Microscope,
    features: ["15+ Department-specific labs", "Industry-standard equipment", "Research incubation center", "Safety protocols and training", "Industry collaboration projects"],
    stats: { labs: "15+", projects: "50+ yearly", equipment: "200+ units" }
  },
  {
    id: "library",
    title: "Digital Resource Library",
    desc: "Our four-story Central Library houses a vast collection of over 85,000 books, 200+ print journals, and provides access to 50+ digital databases including IEEE Xplore, SpringerLink, and JSTOR. The library features silent study zones, group discussion rooms, a multimedia section, and 24/7 online resource access for all students.",
    img: "https://source.unsplash.com/1600x900/?library,books",
    icon: BookOpen,
    features: ["85,000+ books and resources", "50+ digital databases", "Study pods and group rooms", "24/7 online access", "Multimedia learning center"],
    stats: { books: "85,000+", databases: "50+", floors: "4" }
  },
  {
    id: "language-lab",
    title: "Digital Language Laboratory",
    desc: "The 80-station Language Lab uses cutting-edge software like Globarina and Orell Digital to improve communication skills through immersive learning. Features include speech analysis, accent training, TOEFL/IELTS preparation modules, and virtual reality scenarios for real-world language practice.",
    img: "https://source.unsplash.com/1600x900/?language,education",
    icon: Headphones,
    features: ["80-station digital lab", "Speech analysis software", "TOEFL/IELTS preparation", "Virtual reality scenarios", "Multimedia content creation"],
    stats: { stations: "80", languages: "8", software: "10+ suites" }
  },
  {
    id: "workshop",
    title: "Engineering Innovation Workshop",
    desc: "Our 10,000 sq. ft. workshop complex is equipped with CNC machines, 3D printers, laser cutters, and traditional workshop tools. The facility supports prototyping, product development, and provides hands-on training with industrial equipment under expert supervision with emphasis on safety and precision.",
    img: "https://source.unsplash.com/1600x900/?workshop,engineering",
    icon: Headphones,
    features: ["CNC and precision tools", "3D printing and prototyping", "Industrial-grade equipment", "Expert technical supervision", "Product incubation center"],
    stats: { area: "10,000 sq ft", machines: "50+", projects: "100+ yearly" }
  },
  {
    id: "innovation-center",
    title: "Student Innovation Center",
    desc: "The Innovation Center provides dedicated spaces for student projects, startups, and collaborative work. Equipped with presentation facilities, brainstorming rooms, and maker spaces, this center fosters creativity and entrepreneurship with mentorship from industry experts and faculty.",
    img: "https://source.unsplash.com/1600x900/?innovation,technology",
    icon: Award,
    features: ["Maker spaces", "Startup incubation", "Collaborative workstations", "Industry mentorship", "Presentation facilities"],
    stats: { startups: "15+", mentors: "30+", events: "50+ yearly" }
  }
];

const FacilitiesPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Header Section */}
      <section className="py-16 px-6 text-blue-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            World-Class <span className="text-blue-900">Facilities</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            At Krishna Engineering College, we provide state-of-the-art infrastructure and 
            facilities to support innovative learning, research, and overall development of our students.
          </motion.p>
          <motion.div 
            className="w-24 h-2 bg-yellow-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          />
        </div>
      </section>

      {/* Stats Overview Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="text-blue-700" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-blue-900">500+</h3>
              <p className="text-gray-600">Computer Systems</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-blue-700" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-blue-900">85K+</h3>
              <p className="text-gray-600">Library Resources</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="text-blue-700" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-blue-900">20+</h3>
              <p className="text-gray-600">Specialized Labs</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-700" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-blue-900">15+</h3>
              <p className="text-gray-600">Startups Incubated</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities List */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        {facilities.map((facility, index) => {
          const IconComponent = facility.icon;
          return (
            <section
              key={facility.id}
              id={facility.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-28 gap-12`}
            >
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="md:w-1/2 w-full"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    src={facility.img}
                    alt={facility.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="text-white font-medium flex items-center bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors">
                      View Gallery <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                  
                  {/* Stats overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="flex items-center space-x-4">
                      {Object.entries(facility.stats).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold text-blue-900">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="md:w-1/2 w-full"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl mr-4 shadow-sm">
                    <IconComponent className="text-blue-700" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-blue-900">
                    {facility.title}
                  </h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {facility.desc}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                    <Bookmark size={20} className="mr-2 text-blue-600" />
                    Key Features:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {facility.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700 bg-blue-50 p-3 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors duration-300 flex items-center shadow-md">
                    Learn More <ArrowRight size={18} className="ml-2" />
                  </button>
                  <button className="px-6 py-3 border border-blue-700 text-blue-700 hover:bg-blue-50 font-medium rounded-lg transition-colors duration-300 flex items-center">
                    Schedule Visit
                  </button>
                </div>
              </motion.div>
            </section>
          );
        })}
      </div>

      {/* Call to Action Section */}
      
    </div>
  );
};

export default FacilitiesPage;