import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X, MapPin, Clock, Users, ArrowRight, Filter, Search } from "lucide-react";

const eventsData = [
  {
    id: 1,
    title: "Annual Tech Symposium",
    date: "2025-09-15",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium",
    category: "Technology",
    description: "A gathering of tech enthusiasts, students, and faculty to showcase projects, research, and workshops on emerging technologies.",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb2540?auto=format&fit=crop&w=800&q=80",
    attendees: 250,
    status: "upcoming",
    registrationLink: "#"
  },
  {
    id: 2,
    title: "Cultural Fest",
    date: "2025-10-05",
    time: "11:00 AM - 6:00 PM",
    location: "College Grounds",
    category: "Cultural",
    description: "Celebrate diversity and creativity with dance, music, drama, and art performances from students across all departments.",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=80",
    attendees: 500,
    status: "upcoming",
    registrationLink: "#"
  },
  {
    id: 3,
    title: "Guest Lecture on AI & ML",
    date: "2025-09-25",
    time: "2:00 PM - 5:00 PM",
    location: "Lecture Hall 2",
    category: "Lecture",
    description: "A session by industry experts on Artificial Intelligence and Machine Learning trends, applications, and career opportunities.",
    image: "https://images.unsplash.com/photo-1581091012184-49b91f4b7a0f?auto=format&fit=crop&w=800&q=80",
    attendees: 120,
    status: "upcoming",
    registrationLink: "#"
  },
  {
    id: 4,
    title: "Hackathon 2025",
    date: "2025-08-10",
    time: "9:00 AM - 9:00 PM",
    location: "Computer Lab",
    category: "Technology",
    description: "24-hour coding competition where students solve real-world problems with innovative tech solutions.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    attendees: 100,
    status: "upcoming",
    registrationLink: "#"
  },
  {
    id: 5,
    title: "Sports Day",
    date: "2025-03-15",
    time: "8:00 AM - 5:00 PM",
    location: "Sports Ground",
    category: "Sports",
    description: "Annual sports competition with various athletic events and team games.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    attendees: 300,
    status: "past",
    registrationLink: "#"
  },
  {
    id: 6,
    title: "Industry Connect Workshop",
    date: "2025-11-20",
    time: "1:00 PM - 4:00 PM",
    location: "Seminar Hall",
    category: "Workshop",
    description: "Interactive session with industry professionals to bridge the gap between academia and industry.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    attendees: 80,
    status: "upcoming",
    registrationLink: "#"
  },
];

const categories = [...new Set(eventsData.map(event => event.category))];

const EventComponent = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = eventsData.filter(event => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === "upcoming");
  const pastEvents = filteredEvents.filter(event => event.status === "past");

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            College Events
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore the exciting events, workshops, and seminars happening on our campus.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10 bg-white rounded-2xl p-6 shadow-md"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-600" />
              <select 
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span 
              className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-all ${selectedCategory === "All" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </span>
            {categories.map(category => (
              <span 
                key={category}
                className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-all ${selectedCategory === category ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Upcoming Events
            </h3>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.id}
                  className="relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group border border-gray-100"
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedEvent(event)}
                  layout
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {event.category}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 text-sm font-medium mb-1">
                        <Calendar size={14} /> 
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Clock size={12} /> {event.time}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-1">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <MapPin size={14} /> {event.location}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Users size={14} /> {event.attendees}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
              Past Events
            </h3>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <motion.div
                  key={event.id}
                  className="relative bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer group border border-gray-100 opacity-80"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedEvent(event)}
                  layout
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-gray-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {event.category}
                    </span>
                    <div className="absolute bottom-4 left-4 text-white text-sm">
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2 line-clamp-1">
                      {event.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin size={14} /> {event.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white rounded-2xl shadow-md"
          >
            <div className="text-gray-400 mb-4 text-lg">No events found matching your criteria</div>
            <button 
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-2 mx-auto"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear filters <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 z-10"
                onClick={() => setSelectedEvent(null)}
              >
                <X size={20} />
              </button>
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                    {selectedEvent.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedEvent.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} /> 
                      {new Date(selectedEvent.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} /> {selectedEvent.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} /> {selectedEvent.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-blue-700 font-bold text-xl">{selectedEvent.attendees}+</div>
                    <div className="text-gray-600 text-sm">Expected Attendees</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-blue-700 font-bold text-xl">
                      {selectedEvent.status === "upcoming" ? "Upcoming" : "Completed"}
                    </div>
                    <div className="text-gray-600 text-sm">Event Status</div>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-800 mb-3">About This Event</h4>
                <p className="text-gray-700 mb-6 leading-relaxed">{selectedEvent.description}</p>
                
                {selectedEvent.status === "upcoming" && (
                  <div className="flex gap-4">
                    <a 
                      href={selectedEvent.registrationLink}
                      className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors flex-1 text-center"
                    >
                      Register Now
                    </a>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors flex-1">
                      Add to Calendar
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventComponent;