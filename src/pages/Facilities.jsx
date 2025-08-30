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
  MapPin,
  Calendar,
  Star,
  ChevronRight,
  Eye,
  GalleryVerticalEnd,
  Building,
  Cpu,
  FlaskRound,
  LibraryBig,
  LanguagesIcon,
  Factory,
  Lightbulb
} from "lucide-react";

const facilities = [
  {
    id: "computer-center",
    title: "Advanced Computer Center",
    desc: "Our state-of-the-art Computer Center spans over 5,000 sq. ft. and is equipped with 300+ high-performance systems with the latest Intel i7 processors, 32GB RAM, and dedicated graphics cards. All systems run updated software suites for programming, design, and data analysis.",
    img: "https://images.unsplash.com/photo-1590402494610-2c7a0d599afd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    icon: Cpu,
    features: ["300+ High-performance systems", "Latest software suites", "Gigabit internet connectivity", "24/7 access with biometric security", "Dedicated programming and AI labs"],
    stats: { systems: "300+", area: "5000 sq ft", hours: "24/7" },
    color: "from-blue-500 to-blue-700"
  },
  {
    id: "laboratories",
    title: "Advanced Research Laboratories",
    desc: "Our 15+ specialized laboratories across engineering disciplines provide hands-on experience with cutting-edge equipment. From robotics and IoT labs to advanced materials testing and electronics workshops.",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    icon: FlaskRound,
    features: ["15+ Department-specific labs", "Industry-standard equipment", "Research incubation center", "Safety protocols and training", "Industry collaboration projects"],
    stats: { labs: "15+", projects: "50+ yearly", equipment: "200+ units" },
    color: "from-purple-500 to-purple-700"
  },
  {
    id: "library",
    title: "Digital Resource Library",
    desc: "Our four-story Central Library houses a vast collection of over 85,000 books, 200+ print journals, and provides access to 50+ digital databases including IEEE Xplore, SpringerLink, and JSTOR.",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    icon: LibraryBig,
    features: ["85,000+ books and resources", "50+ digital databases", "Study pods and group rooms", "24/7 online access", "Multimedia learning center"],
    stats: { books: "85,000+", databases: "50+", floors: "4" },
    color: "from-green-500 to-green-700"
  },
  {
    id: "language-lab",
    title: "Digital Language Laboratory",
    desc: "The 80-station Language Lab uses cutting-edge software to improve communication skills through immersive learning. Features include speech analysis, accent training, and TOEFL/IELTS preparation modules.",
    img: "https://images.unsplash.com/photo-1569336415964-4f2d8ce9d48b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    icon: LanguagesIcon,
    features: ["80-station digital lab", "Speech analysis software", "TOEFL/IELTS preparation", "Virtual reality scenarios", "Multimedia content creation"],
    stats: { stations: "80", languages: "8", software: "10+ suites" },
    color: "from-amber-500 to-amber-700"
  },
  {
    id: "workshop",
    title: "Engineering Innovation Workshop",
    desc: "Our 10,000 sq. ft. workshop complex is equipped with CNC machines, 3D printers, laser cutters, and traditional workshop tools. The facility supports prototyping and product development.",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    icon: Factory,
    features: ["CNC and precision tools", "3D printing and prototyping", "Industrial-grade equipment", "Expert technical supervision", "Product incubation center"],
    stats: { area: "10,000 sq ft", machines: "50+", projects: "100+ yearly" },
    color: "from-orange-500 to-orange-700"
  },
  {
    id: "innovation-center",
    title: "Student Innovation Center",
    desc: "The Innovation Center provides dedicated spaces for student projects, startups, and collaborative work. Equipped with presentation facilities, brainstorming rooms, and maker spaces.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    icon: Lightbulb,
    features: ["Maker spaces", "Startup incubation", "Collaborative workstations", "Industry mentorship", "Presentation facilities"],
    stats: { startups: "15+", mentors: "30+", events: "50+ yearly" },
    color: "from-pink-500 to-pink-700"
  }
];

const FacilitiesPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Header Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 text-blue-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-30 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Building className="w-4 h-4 mr-2" />
            State-of-the-Art Infrastructure
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Facilities</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            At Krishna Engineering College, we provide state-of-the-art infrastructure and 
            facilities to support innovative learning, research, and overall development of our students.
          </motion.p>
          
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          />
        </div>
      </section>

      {/* Stats Overview Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { icon: Cpu, value: "500+", label: "Computer Systems", color: "from-blue-500 to-blue-600" },
              { icon: LibraryBig, value: "85K+", label: "Library Resources", color: "from-green-500 to-green-600" },
              { icon: FlaskRound, value: "20+", label: "Specialized Labs", color: "from-purple-500 to-purple-600" },
              { icon: Lightbulb, value: "15+", label: "Startups Incubated", color: "from-orange-500 to-orange-600" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white p-4 md:p-6 rounded-2xl shadow-lg text-center border-0 hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className={`inline-flex items-center justify-center p-3 md:p-4 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-3 md:mb-4 shadow-md`}>
                  <stat.icon size={24} className="md:w-7 md:h-7" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities List */}
      <div className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6">
        {facilities.map((facility, index) => {
          const IconComponent = facility.icon;
          return (
            <motion.section
              key={facility.id}
              id={facility.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center mb-16 md:mb-28 gap-8 md:gap-12`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2 w-full"
              >
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl group">
                  <img
                    src={facility.img}
                    alt={facility.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                    <button className="text-white font-medium flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-4 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base">
                      <GalleryVerticalEnd className="mr-2 w-4 h-4 md:w-5 md:h-5" /> View Gallery
                    </button>
                  </div>
                  
                  {/* Stats overlay */}
                  <motion.div 
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4 md:space-x-6">
                      {Object.entries(facility.stats).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="text-base md:text-lg font-bold text-blue-900">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2 w-full"
              >
                <div className="flex items-center mb-4 md:mb-6">
                  <div className={`p-2 md:p-3 rounded-xl mr-3 md:mr-4 shadow-sm border bg-gradient-to-br ${facility.color} text-white`}>
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                    {facility.title}
                  </h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6 md:mb-8">
                  {facility.desc}
                </p>
                
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3 md:mb-4 flex items-center">
                    <Bookmark size={20} className="mr-2 text-blue-600" />
                    Key Features:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {facility.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center text-gray-700 bg-blue-50 p-2 md:p-3 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors text-sm md:text-base"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <motion.button 
                    className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg md:rounded-xl transition-all duration-300 flex items-center shadow-md hover:shadow-lg text-sm md:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </motion.button>
                  <motion.button 
                    className="px-4 py-2 md:px-6 md:py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg md:rounded-xl transition-colors duration-300 flex items-center text-sm md:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="mr-2 w-4 h-4 md:w-5 md:h-5" /> Visit
                  </motion.button>
                </div>
              </motion.div>
            </motion.section>
          );
        })}
      </div>

     
    </div>
  );
};

export default FacilitiesPage;