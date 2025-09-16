"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const headingFont = {
  fontFamily: "'Dancing Script', cursive",
};

const bodyFont = {
  fontFamily: "'Poppins', sans-serif",
};

const letterAnimationHeading = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const fadeSlide = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
});

// Variants for staggered card animation
const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const featuredEvents = [
  {
    id: 1,
    date: "May 11, 2025",
    time: "10:00 AM - 4:00 PM",
    title: "Annual Green Technology Summit",
    description:
      "Join industry leaders for a day of innovation and networking focused on sustainable technology solutions.",
    image: "https://framerusercontent.com/images/3mNtGqXBqR5iT2lsSC3gChzyUHo.png",
    location: "Convention Center, New York",
    reverse: false,
  },
  {
    id: 2,
    date: "June 5, 2025",
    time: "9:00 AM - 5:00 PM",
    title: "Clean Energy Innovation Conference",
    description:
      "Explore the latest breakthroughs and opportunities in renewable energy and sustainable infrastructure.",
    image: "https://framerusercontent.com/images/3mNtGqXBqR5iT2lsSC3gChzyUHo.png",
    location: "Tech Hub, San Francisco",
    reverse: true,
  },
];

const upcomingEvents = [
  {
    id: 3,
    date: "July 20, 2025",
    time: "2:00 PM - 6:00 PM",
    title: "Sustainable Business Workshop",
    description:
      "Hands-on workshop for businesses looking to implement eco-friendly practices and reduce carbon footprint.",
    image: "https://framerusercontent.com/images/3mNtGqXBqR5iT2lsSC3gChzyUHo.png",
    location: "Business Center, Chicago",
  },
  {
    id: 4,
    date: "August 15, 2025",
    time: "11:00 AM - 3:00 PM",
    title: "Climate Action Networking Event",
    description:
      "Connect with like-minded professionals and organizations committed to environmental sustainability.",
    image: "https://framerusercontent.com/images/3mNtGqXBqR5iT2lsSC3gChzyUHo.png",
    location: "Eco Campus, Seattle",
  },
  {
    id: 5,
    date: "September 10, 2025",
    time: "1:00 PM - 5:00 PM",
    title: "Green Finance Symposium",
    description:
      "Learn about investment opportunities and financial strategies supporting sustainable development.",
    image: "https://framerusercontent.com/images/3mNtGqXBqR5iT2lsSC3gChzyUHo.png",
    location: "Financial District, Boston",
  },
];

const Events = () => {
  const heading = "Upcoming Events & Conferences";

  return (
    <section
      id="events"
      className=" py-24 px-6 sm:px-8 lg:px-20"
      style={bodyFont}
    >
      <div className="max-w-7xl mx-auto">
        {/* Animated Heading */}

        <motion.h3
          className="font-semibold uppercase tracking-wide text-sm mb-4 text-blue-600 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience Knowledge, Innovation & Collaboration
        </motion.h3>


        <motion.h2
  className="text-5xl sm:text-6xl leading-tight mb-6"
  style={headingFont}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.6 }}
>
  {heading.split(" ").map((word, wi) => (
    <span key={wi} className="inline-block mr-2">
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterAnimationHeading}
          style={{ display: "inline-block" }}
          className={word === "Events" ? "text-blue-600" : ""}
        >
          {char}
        </motion.span>
      ))}
    </span>
  ))}
</motion.h2>



        {/* Paragraph */}
        <motion.p
          className="text-gray-600 max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Stay connected with the latest events and conferences that bring
          together experts, innovators, and thought leaders to shape a
          sustainable future. Explore upcoming programs and secure your spot
          today.
        </motion.p>

        {/* Featured Events */}
        <div className="space-y-24 mb-4">
          {featuredEvents.map(({ id, date, time, title, description, image, location, reverse }) => (
            <div
              key={id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <motion.div
                className="lg:w-1/2 text-gray-800"
                variants={fadeSlide(reverse ? "right" : "left")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-blue-600 font-semibold text-sm">
                    <div className="flex items-center p-2 bg-blue-100 rounded-2xl font-semibold text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {time}
                    </div>
                    <Calendar className="w-4 h-4 ml-3 mr-1" />
                    {date}
                  </div>
                </div>
                <h3 className="text-3xl font-extrabold mb-5">{title}</h3>
                <p className="text-lg leading-relaxed mb-6">{description}</p>
                <div className="flex items-center text-blue-700 font-medium">
                  <MapPin className="w-4 h-4 mr-2" />
                  {location}
                </div>
                <button className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Register Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>

              {/* Image with overlay */}
              <motion.div
                className="relative lg:w-1/2 w-full rounded-xl overflow-hidden shadow-2xl"
                variants={fadeSlide(reverse ? "left" : "right")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-72 sm:h-96 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured Event
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Upcoming Events Cards with Stagger */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {upcomingEvents.map(({ id, date, time, title, description, image, location }) => (
            <motion.div
              key={id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              variants={cardVariant}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {date}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-blue-600 mb-3">
                  <Clock className="w-4 h-4 mr-1" />
                  {time}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">{title}</h4>
                <p className="text-gray-600 mb-4 flex-grow">{description}</p>
                <div className="flex items-center text-sm text-blue-700 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {location}
                </div>
                <button className="w-full py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>

      {/* Add Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
};

export default Events;
