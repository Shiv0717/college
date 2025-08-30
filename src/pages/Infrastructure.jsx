import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  WifiIcon, 
  ComputerDesktopIcon, 
  BookOpenIcon, 
  AcademicCapIcon,
  BuildingLibraryIcon,
  HeartIcon,
  BeakerIcon,
  MusicalNoteIcon,
  ClockIcon,
  UserGroupIcon,
  CameraIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  ArrowRightIcon,
  
} from '@heroicons/react/24/outline';

const infrastructureData = [
  {
    id: 1,
    name: "Advanced Computer Labs",
    description: "State-of-the-art computer labs equipped with high-end systems, latest software, and high-speed internet for programming, AI/ML, data science, and research projects.",
    image: "https://images.unsplash.com/photo-1581091012184-49b91f4b7a0f?auto=format&fit=crop&w=800&q=80",
    features: ["24/7 Access", "High-speed Internet", "Latest Software", "Dedicated Servers"],
    icon: ComputerDesktopIcon,
    stats: { systems: 500, labs: 12 },
    category: "technology",
    location: "Tech Wing, Block B"
  },
  {
    id: 2,
    name: "Digital Library & Reading Halls",
    description: "A vast collection of physical and digital resources with online databases, e-journals, and quiet study areas to support academic excellence and research.",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    features: ["Online Databases", "E-Journals", "Group Study Rooms", "24/7 Access"],
    icon: BookOpenIcon,
    stats: { books: 50000, journals: 2000 },
    category: "academic",
    location: "Central Library Building"
  },
  {
    id: 3,
    name: "Sports Complex",
    description: "Modern indoor and outdoor sports facilities including basketball courts, badminton courts, cricket grounds, Olympic-size swimming pool, and fully-equipped gymnasium.",
    image: "https://images.unsplash.com/photo-1571019613911-ec00c1007b20?auto=format&fit=crop&w=800&q=80",
    features: ["Gymnasium", "Swimming Pool", "Indoor Courts", "Athletics Track"],
    icon: HeartIcon,
    stats: { sports: 15, courts: 8 },
    category: "sports",
    location: "East Campus"
  },
  {
    id: 4,
    name: "Auditorium & Conference Halls",
    description: "Fully equipped auditoriums with advanced audio-visual systems for seminars, workshops, cultural events, and international conferences.",
    image: "https://images.unsplash.com/photo-1607438466642-58cbd14f2300?auto=format&fit=crop&w=800&q=80",
    features: ["1000+ Capacity", "HD Projection", "Recording Studio", "Green Rooms"],
    icon: UserGroupIcon,
    stats: { capacity: 1200, halls: 3 },
    category: "academic",
    location: "Main Administration Block"
  },
  {
    id: 5,
    name: "Science & Research Labs",
    description: "Specialized laboratories for physics, chemistry, biology, and engineering with modern equipment and safety systems for advanced research.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    features: ["Advanced Equipment", "Research Facilities", "Safety Systems", "Dedicated Mentors"],
    icon: BeakerIcon,
    stats: { labs: 18, equipment: 200 },
    category: "research",
    location: "Science Block, 3rd Floor"
  },
  {
    id: 6,
    name: "Hostel Accommodation",
    description: "Comfortable and secure hostel facilities with modern amenities, Wi-Fi, recreational areas, and 24/7 security for outstation students.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    features: ["Wi-Fi", "Dining Hall", "Recreation Room", "24/7 Security"],
    icon: BuildingLibraryIcon,
    stats: { capacity: 2000, hostels: 4 },
    category: "accommodation",
    location: "North Campus Residence"
  },
  {
    id: 7,
    name: "Cafeteria & Food Court",
    description: "Hygienic and diverse food options with multiple cuisines, snack bars, and comfortable seating areas for students and staff.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    features: ["Multiple Cuisines", "Hygienic Kitchen", "Comfortable Seating", "Open Late"],
    icon: ClockIcon,
    stats: { outlets: 8, seating: 500 },
    category: "amenities",
    location: "Central Plaza"
  },
  {
    id: 8,
    name: "Amphitheater & Cultural Center",
    description: "Open-air amphitheater and cultural center for performances, gatherings, and cultural events with professional lighting and sound systems.",
    image: "https://images.unsplash.com/photo-1582058091505-6b8c3a6c9be3?auto=format&fit=crop&w=800&q=80",
    features: ["Open Air", "Professional Sound", "Lighting Systems", "Green Rooms"],
    icon: MusicalNoteIcon,
    stats: { capacity: 800, events: 50 },
    category: "cultural",
    location: "West Campus Gardens"
  },
  {
    id: 9,
    name: "Medical Facility",
    description: "Fully equipped medical center with qualified doctors, nursing staff, ambulance service, and tie-ups with nearby hospitals for emergencies.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
    features: ["24/7 Service", "Qualified Doctors", "Ambulance", "Pharmacy"],
    icon: HeartIcon,
    stats: { doctors: 5, beds: 20 },
    category: "amenities",
    location: "Health Center, Ground Floor"
  },
  {
    id: 10,
    name: "Wi-Fi Campus",
    description: "Seamless high-speed internet connectivity across the entire campus with secure access points and dedicated IT support team.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    features: ["High-speed Internet", "Campus-wide Coverage", "Secure Access", "IT Support"],
    icon: WifiIcon,
    stats: { access_points: 200, speed: "1Gbps" },
    category: "technology",
    location: "Campus-wide"
  },
  {
    id: 11,
    name: "Transportation",
    description: "College bus service covering all major routes in the city with comfortable, safe, and punctual transportation for students and staff.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    features: ["City-wide Coverage", "AC Buses", "GPS Tracking", "Female Attendants"],
    icon: ClockIcon,
    stats: { buses: 30, routes: 25 },
    category: "amenities",
    location: "Main Gate Transport Hub"
  },
  {
    id: 12,
    name: "Media & Photography Studio",
    description: "Professional-grade media studio with photography, videography, and editing facilities for creative projects and media studies.",
    image: "https://images.unsplash.com/photo-1491897554428-130e60e3e2e6?auto=format&fit=crop&w=800&q=80",
    features: ["Professional Equipment", "Editing Suites", "Green Screen", "Sound Booth"],
    icon: CameraIcon,
    stats: { studios: 3, equipment: 50 },
    category: "cultural",
    location: "Arts Block, 2nd Floor"
  }
];

const Infrastructure = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); 
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    visible: { 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const categories = [
    { id: 'all', name: 'All Facilities', count: infrastructureData.length },
    { id: 'technology', name: 'Technology', count: infrastructureData.filter(item => item.category === 'technology').length },
    { id: 'academic', name: 'Academic', count: infrastructureData.filter(item => item.category === 'academic').length },
    { id: 'sports', name: 'Sports', count: infrastructureData.filter(item => item.category === 'sports').length },
    { id: 'research', name: 'Research', count: infrastructureData.filter(item => item.category === 'research').length },
    { id: 'accommodation', name: 'Accommodation', count: infrastructureData.filter(item => item.category === 'accommodation').length },
    { id: 'cultural', name: 'Cultural', count: infrastructureData.filter(item => item.category === 'cultural').length },
    { id: 'amenities', name: 'Amenities', count: infrastructureData.filter(item => item.category === 'amenities').length }
  ];

  const filteredData = infrastructureData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50/30 py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
            <MapPinIcon className="h-4 w-4 mr-1" /> Campus Facilities
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text  bg-gradient-to-r from-blue-900 to-indigo-900">
            World-Class Infrastructure
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our campus is designed to provide the best learning environment with state-of-the-art facilities that foster innovation, creativity, and holistic development.
          </p>
        </motion.div>

        {/* Controls Section */}
        <motion.div 
  className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8 p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ delay: 0.2 }}
>
  {/* Categories Filter */}
  <div className="w-full md:w-auto">
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-3 py-2 rounded-full font-medium transition-all flex items-center gap-2 text-sm sm:text-base ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
          }`}
        >
          <span className="whitespace-nowrap">{category.name}</span>
          <span className={`text-xs px-1.5 py-0.5 rounded-full min-w-[24px] text-center ${
            activeCategory === category.id 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {category.count}
          </span>
        </motion.button>
      ))}
    </div>
  </div>

  {/* Search and View Controls */}
  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
    {/* Search Input */}
    <div className="relative flex-1 min-w-[200px]">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search facilities..."
        className="pl-9 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full h-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>

    {/* View Toggle */}
    <div className="flex bg-gray-100 p-1 rounded-full border border-gray-200">
      <motion.button 
        onClick={() => setViewMode('grid')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`p-2 rounded-full transition-all ${
          viewMode === 'grid' 
            ? 'bg-white shadow-lg text-blue-600' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
        title="Grid view"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </motion.button>
      
      <motion.button 
        onClick={() => setViewMode('map')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`p-2 rounded-full transition-all ${
          viewMode === 'map' 
            ? 'bg-white shadow-lg text-blue-600' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
        title="Map view"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      </motion.button>
    </div>

    {/* Filter Button for Mobile */}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="md:hidden px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium flex items-center gap-2"
      onClick={() => setIsFilterOpen(!isFilterOpen)}
    >
      
      <span>Filters</span>
    </motion.button>
  </div>

  {/* Mobile Filter Dropdown */}
  {isFilterOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden w-full bg-gray-50 rounded-xl p-4 mt-2"
    >
      <div className="grid grid-cols-2 gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setIsFilterOpen(false);
            }}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-200'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>
    </motion.div>
  )}
</motion.div>

        {/* Results count */}
        <motion.div 
          className="mb-6 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Showing {filteredData.length} of {infrastructureData.length} facilities
        </motion.div>

        {/* Facilities Grid */}
        {viewMode === 'grid' && (
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white text-blue-900 p-2 rounded-lg shadow-md">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs font-medium bg-blue-600 px-2 py-1 rounded-full">{item.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {item.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPinIcon className="h-4 w-4 mr-1" />
                    <span>{item.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.features.slice(0, 3).map((feature, index) => (
                      <span 
                        key={index}
                        className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full border border-blue-100"
                      >
                        {feature}
                      </span>
                    ))}
                    {item.features.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">
                        +{item.features.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      {Object.entries(item.stats).map(([key, value], idx) => (
                        <div key={idx}>
                          <span className="font-semibold text-gray-900">
                            {typeof value === 'number' ? value.toLocaleString() : value}
                          </span>
                          <span className="ml-1">{key}</span>
                        </div>
                      ))}
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      Details <ArrowRightIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Map View (simplified) */}
        {viewMode === 'map' && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center border border-gray-200"
          >
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <MapPinIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Campus Map View</h3>
              <p className="text-gray-600 mb-4">Interactive campus map showing all facilities and their locations</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                Explore Interactive Map
              </button>
            </div>
          </motion.div>
        )}

        {/* No results message */}
        {filteredData.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-400 rounded-full mb-4">
              <MagnifyingGlassIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No facilities found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white overflow-hidden relative"
        >
          <div className="absolute -right-12 -top-12 w-96 h-96 bg-white/5 rounded-full"></div>
          <div className="absolute -left-12 -bottom-12 w-80 h-80 bg-indigo-500/10 rounded-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Campus at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "50+", label: "Labs & Facilities" },
                { value: "25", label: "Acres Campus" },
                { value: "100%", label: "Wi-Fi Coverage" },
                { value: "2000+", label: "Hostel Capacity" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                  onClick={() => setSelectedItem(null)}
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-medium bg-blue-600 px-3 py-1.5 rounded-full">{selectedItem.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{selectedItem.name}</h2>
                
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPinIcon className="h-5 w-5 mr-1.5" />
                  <span>{selectedItem.location}</span>
                </div>
                
                <p className="text-gray-700 mb-6">{selectedItem.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedItem.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="flex-shrink-0 h-5 w-5 text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-2 text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Facility Statistics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(selectedItem.stats).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-900">
                          {typeof value === 'number' ? value.toLocaleString() : value}
                        </div>
                        <div className="text-sm text-gray-600 capitalize mt-1">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Infrastructure;