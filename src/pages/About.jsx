import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Home, 
  Activity, 
  Monitor, 
  Mic, 
  Heart, 
  Coffee, 
  Bus,
  Award,
  GraduationCap,
  Users,
  BookText,
  Dumbbell,
  ShoppingCart,
  BanknoteIcon
} from 'lucide-react';

// Sample images (replace with actual image paths)
const facilityImages = {
  library: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  hostel: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
  sports: "https://images.unsplash.com/photo-1549060279-7e168fce7090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  labs: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  auditorium: "https://images.unsplash.com/photo-1567446537738-74804ee3a9bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  healthcare: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  cafeteria: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  transport: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
};

const facilities = [
  { 
    title: 'Library', 
    desc: '50,000+ books, IEEE & DELNET access, spacious AC premises with digital resources and quiet study areas.', 
    icon: BookOpen,
    image: facilityImages.library
  },
  { 
    title: 'Hostels', 
    desc: 'Separate hostels for boys and girls with single/double/triple sharing options; Wi-Fi, nutritious meals, gym & laundry facilities.', 
    icon: Home,
    image: facilityImages.hostel
  },
  { 
    title: 'Sports', 
    desc: 'Playgrounds for cricket, basketball, volleyball; indoor facilities for badminton, table-tennis, and chess.', 
    icon: Activity,
    image: facilityImages.sports
  },
  { 
    title: 'Labs & IT', 
    desc: 'Well-equipped labs with high-speed Wi-Fi and modern hardware/software for practical learning across all disciplines.', 
    icon: Monitor,
    image: facilityImages.labs
  },
  { 
    title: 'Auditorium', 
    desc: 'Spacious 500+ capacity venue with modern audio-visual setup for events, seminars and cultural activities.', 
    icon: Mic,
    image: facilityImages.auditorium
  },
  { 
    title: 'Healthcare', 
    desc: 'On-campus medical wing with qualified doctors & technician offering free medical services to students and staff.', 
    icon: Heart,
    image: facilityImages.healthcare
  },
  { 
    title: 'Cafeteria & Store', 
    desc: 'Hygienic food at affordable prices and a well-stocked convenience store for daily needs and stationery.', 
    icon: Coffee,
    image: facilityImages.cafeteria
  },
  { 
    title: 'Transport', 
    desc: 'Fleet of buses servicing students and staff across Bhilai and nearby areas with convenient pick-up/drop points.', 
    icon: Bus,
    image: facilityImages.transport
  }
];

const About = () => (
  <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-6">
          <Award className="text-blue-900 mr-2" size={28} />
          <span className="text-blue-900 font-semibold">NAAC Accredited</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
          Krishna Engineering College, Bhilai
        </h1>
        
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        
        <p className="text-lg text-blue-800 max-w-3xl mx-auto leading-relaxed">
          Established in 2008 by the Krishna Education Society, KEC Bhilai is affiliated with 
          Chhattisgarh Swami Vivekanand Technical University (CSVTU). We foster technical excellence, 
          innovation, and holistic development to prepare students for real-world challenges.
        </p>
      </motion.div>

      {/* Key Stats */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {[
          { icon: GraduationCap, number: "2000+", label: "Students" },
          { icon: Users, number: "150+", label: "Faculty" },
          { icon: BookText, number: "50+", label: "Programs" },
          { icon: Award, number: "15+", label: "Years" },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center border border-blue-100">
            <stat.icon className="mx-auto text-blue-900 mb-3" size={32} />
            <div className="text-2xl font-bold text-blue-900">{stat.number}</div>
            <div className="text-blue-700">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Facilities Section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-2 text-center">Campus Facilities</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((f, index) => {
            const IconComponent = f.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={f.image} 
                    alt={f.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg mr-4">
                      <IconComponent className="text-blue-900" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900">{f.title}</h3>
                  </div>
                  <p className="text-blue-800">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Additional Highlights */}
      <motion.div
        className="bg-blue-900 text-white p-8 md:p-12 rounded-2xl shadow-lg mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Key Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              "B.Tech programs in CSE, IT, AI & ML, Mechanical, Civil, ECE, EEE",
              "Library spans over 1000 sqm, fully computerized and air-conditioned",
              "Industry-oriented curriculum with focus on practical learning",
              "Regular workshops and seminars by industry experts"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-yellow-500 p-1 rounded-full mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-blue-100">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            {[
              "Placement cell with strong industry connections and 85% placement rate",
              "Student clubs for technical, cultural and sports activities",
              "Research and innovation center with modern equipment",
              "Green campus with rainwater harvesting and solar power initiatives"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-yellow-500 p-1 rounded-full mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-blue-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center bg-white p-8 rounded-xl shadow-md border border-blue-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Begin Your Engineering Journey With Us</h3>
        <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
          Join our vibrant community of learners and innovators at Krishna Engineering College, Bhilai
        </p>
        <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
          Explore Admissions
        </button>
      </motion.div>
    </div>
  </div>
);

export default About;