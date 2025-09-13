import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Trophy,
  Award,
  Users,
  BookOpen,
  GraduationCap,
  Building,
  Calendar,
  Target,
  Star,
  Briefcase,
  Bookmark,
  Heart,
  MapPin,
  TrendingUp,
} from "lucide-react";

const achievements = [
  { icon: <Building className="w-6 h-6" />, text: "AICTE Approved College" },
  { icon: <BookOpen className="w-6 h-6" />, text: "4 B.Tech Disciplines" },
  { icon: <Briefcase className="w-6 h-6" />, text: "Top Firm Placements" },
  { icon: <Users className="w-6 h-6" />, text: "120 CSE Seats" },
  { icon: <Trophy className="w-6 h-6" />, text: "₹10 LPA Placements" },
  { icon: <MapPin className="w-6 h-6" />, text: "Bhilai Junwani Campus" },
];

const stats = [
  { 
    value: 240, 
    suffix: "+", 
    label: "Total B.Tech Seats", 
    icon: <BookOpen className="w-8 h-8" />, 
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200"
  },
  { 
    value: 6, 
    prefix: "₹", 
    suffix: " LPA", 
    label: "Avg Placement Package", 
    icon: <TrendingUp className="w-8 h-8" />, 
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    borderColor: "border-emerald-200"
  },
  { 
    value: 99, 
    suffix: "%", 
    label: "Placement Rate", 
    icon: <Users className="w-8 h-8" />, 
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    borderColor: "border-amber-200"
  },
  { 
    value: 5, 
    suffix: " acres", 
    label: "Campus Area", 
    icon: <Building className="w-8 h-8" />, 
    color: "text-red-600",
    bgColor: "bg-red-100",
    borderColor: "border-red-200"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      }
    }
  }
};

const Pill = ({ icon, text }) => (
  <motion.div 
    className="flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-50/80 to-indigo-50/80 px-6 py-3 border border-blue-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group mx-2 backdrop-blur-sm"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="text-blue-600 transition-transform group-hover:scale-110 group-hover:text-blue-700">{icon}</span>
    <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
      {text}
    </span>
  </motion.div>
);

const StatCard = ({ value, suffix, prefix, label, icon, color, bgColor, borderColor }) => (
  <motion.div 
    className={`bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 text-center border ${borderColor} hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group`}
    variants={itemVariants}
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex justify-center mb-3">
      <motion.div 
        className={`p-3 rounded-full ${bgColor} ${color} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.7 }}
      >
        {icon}
      </motion.div>
    </div>
    <div className={`text-4xl font-bold mb-1 ${color}`}>
      <CountUp 
        end={value} 
        duration={13} 
        prefix={prefix || ""} 
        suffix={suffix || ""} 
        enableScrollSpy
        scrollSpyDelay={200}
        scrollSpyOnce
      />
    </div>
    <div className="text-sm font-medium text-gray-600 mt-2">{label}</div>
  </motion.div>
);

const AchievementsMarquee = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-50/30 to-white/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <motion.div 
          className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-10 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-2 relative z-10">
        {/* Heading */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center justify-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-3 h-3 bg-blue-600 rounded-full mr-2"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
            <motion.div 
              className="w-3 h-3 bg-blue-600 rounded-full mr-2"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            ></motion.div>
            <motion.div 
              className="w-3 h-3 bg-blue-600 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            ></motion.div>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
              KRISHNA ENGINEERING COLLEGE
            </span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Excellence in Engineering Education & Innovation
          </motion.p>
        </motion.div>

        {/* Main Marquee */}
        <motion.div 
          className="relative mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="overflow-hidden py-4">
            <motion.div 
              className="flex whitespace-nowrap"
              variants={marqueeVariants}
              animate="animate"
            >
              {achievements.map((a, i) => (
                <Pill key={`marquee1-${i}`} icon={a.icon} text={a.text} />
              ))}
              {/* Duplicate for seamless loop */}
              {achievements.map((a, i) => (
                <Pill key={`marquee2-${i}`} icon={a.icon} text={a.text} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              prefix={stat.prefix}
              icon={stat.icon}
              color={stat.color}
              bgColor={stat.bgColor}
              borderColor={stat.borderColor}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsMarquee;