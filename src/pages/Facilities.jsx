
import React from "react";
import { motion } from "framer-motion";
import { 
  Monitor, 

  BookOpen, 
  Languages, 
  Settings,
  ArrowRight
} from "lucide-react";

const facilities = [
  {
    id: "computer-center",
    title: "Computer Center",
    desc: "Our state-of-the-art Computer Center is equipped with high-performance systems, updated software, and high-speed internet. It ensures that students gain practical exposure to modern computing technologies.",
    img: "https://source.unsplash.com/1600x900/?computer-lab",
    icon: Monitor,
    features: ["High-performance systems", "Latest software", "High-speed internet", "24/7 access"]
  },
  {
    id: "laboratories",
    title: "Laboratories",
    desc: "Well-equipped laboratories across departments provide hands-on experience and encourage innovation, experimentation, and research among students.",
    img: "https://source.unsplash.com/1600x900/?laboratory",
    icon: Monitor,
    features: ["Department-specific labs", "Modern equipment", "Research facilities", "Safety protocols"]
  },
  {
    id: "library",
    title: "Central Library",
    desc: "Our Central Library houses a vast collection of books, journals, e-resources, and digital databases, offering students and faculty the resources they need for academic excellence.",
    img: "https://source.unsplash.com/1600x900/?library",
    icon: BookOpen,
    features: ["50,000+ books", "E-resources", "Study spaces", "Digital databases"]
  },
  {
    id: "language-lab",
    title: "Language Lab",
    desc: "The Language Lab is designed to improve communication skills, fluency, and confidence in students through interactive learning tools and digital modules.",
    img: "https://source.unsplash.com/1600x900/?language",
    icon: Languages,
    features: ["Interactive software", "Audio-visual tools", "Group sessions", "Skill assessment"]
  },
  {
    id: "workshop",
    title: "Workshop",
    desc: "Our spacious workshop is equipped with modern machinery and tools, providing students with practical exposure to industrial practices and hands-on training.",
    img: "https://source.unsplash.com/1600x900/?workshop",
    icon: Settings,
    features: ["Modern machinery", "Safety equipment", "Industrial tools", "Expert supervision"]
  },
];

const FacilitiesPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Header Section */}
      <section className=" text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
  <motion.h1 
    className="text-4xl md:text-5xl font-bold mb-6 text-blue-900"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    World-Class Facilities
  </motion.h1>
  <motion.p 
    className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    At Krishna Engineering College, we provide state-of-the-art infrastructure and 
    facilities to support innovative learning, research, and overall development of our students.
  </motion.p>
  <motion.div 
    className="w-24 h-1 bg-yellow-500 mx-auto mt-8"
    initial={{ width: 0 }}
    animate={{ width: 96 }}
    transition={{ duration: 0.7, delay: 0.4 }}
  />
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
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-24 gap-12`}
            >
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:w-1/2 w-full"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={facility.img}
                    alt={facility.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="text-white font-medium flex items-center">
                      View Gallery <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:w-1/2 w-full"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-xl mr-4">
                    <IconComponent className="text-blue-700" size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-blue-900">
                    {facility.title}
                  </h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {facility.desc}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Features:</h3>
                  <ul className="grid grid-cols-2 gap-3">
                    {facility.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors duration-300 flex items-center">
                  Learn More <ArrowRight size={18} className="ml-2" />
                </button>
              </motion.div>
            </section>
          );
        })}
      </div>

      {/* Call to Action */}
      
    </div>
  );
};

export default FacilitiesPage;