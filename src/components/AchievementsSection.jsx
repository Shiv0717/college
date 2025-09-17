"use client";
import React from "react";
import { ChevronRight, Award, Users, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";

// Fonts
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Lora', serif" };

// Achievements data
const achievements = [
  {
    number: "65+",
    label: "Years Experience",
    description:
      "We have over 65 years of combined experience in providing world-class education.",
    image: "https://picsum.photos/500/600?random=1",
    icon: <Award className="w-6 h-6" />,
  },
  {
    number: "100+",
    label: "Research Publications",
    description:
      "Our faculty and students have contributed to more than 100 research publications globally.",
    image: "https://picsum.photos/500/600?random=2",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    number: "15+",
    label: "National Awards",
    description:
      "We are proud recipients of 15+ national awards recognizing excellence in academics.",
    image: "https://picsum.photos/500/600?random=3",
    icon: <Star className="w-6 h-6" />,
  },
  {
    number: "5000+",
    label: "Graduates",
    description:
      "Over 5000 graduates have gone on to excel in diverse industries worldwide.",
    image: "https://picsum.photos/500/600?random=4",
    icon: <Users className="w-6 h-6" />,
  },
];

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

const AchievementsSection = () => {
  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      style={bodyFont}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjgiLz48L2c+PC9zdmc+')]"
        ></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <p className="text-blue-700 uppercase tracking-wider text-sm font-semibold mb-3">
            Our Excellence
          </p>

          {/* Letter Animation */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex flex-wrap"
            style={headingFont}
          >
            {"Our Achievements".split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-blue-600 mt-3 md:mt-4"></div>
        </div>

        {/* Infinite Marquee */}
        <div className="relative w-full overflow-hidden py-4">
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-50%"], // keeps sliding seamlessly
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...achievements, ...achievements].map((achieve, index) => (
              <div key={index} className="flex-shrink-0 w-[350px] mx-4">
                <AchievementCard achieve={achieve} headingFont={headingFont} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&family=Lora:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    </section>
  );
};

// Separate component for the achievement card
const AchievementCard = ({ achieve, headingFont }) => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden group cursor-pointer rounded-2xl shadow-lg">
      {/* Background Image */}
      <img
        src={achieve.image}
        alt={achieve.label}
        className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-110 transition-transform duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
          {/* Number */}
          <div className="text-4xl font-bold text-white mb-2">{achieve.number}</div>

          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
            <div className="text-white">{achieve.icon}</div>
          </div>

          {/* Label */}
          <h3 className="text-white text-lg font-bold mb-2" style={headingFont}>
            {achieve.label}
          </h3>

          {/* Description */}
          <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3">{achieve.description}</p>

          {/* Hover CTA */}
          <div className="flex items-center text-blue-200 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Learn more</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
