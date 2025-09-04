import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { 
  BriefcaseIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  BuildingLibraryIcon,
  CalendarIcon,
  CheckCircleIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ChevronUpDownIcon,
  StarIcon,
  RocketLaunchIcon,
  TrophyIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import DataTable from 'react-data-table-component';
import CompaniesVisitedTable from '../components/CompaniesVisitedTable';

const PlacementPortal = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
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

  const stats = [
    { value: '95%', label: 'Placement Rate', icon: ChartBarIcon, color: 'from-green-500 to-green-600' },
    { value: '250+', label: 'Companies Visited', icon: BriefcaseIcon, color: 'from-blue-500 to-blue-600' },
    { value: '₹18 LPA', label: 'Highest Package', icon: ArrowTrendingUpIcon, color: 'from-purple-500 to-purple-600' },
    { value: '₹7.5 LPA', label: 'Average Package', icon: AcademicCapIcon, color: 'from-orange-500 to-orange-600' }
  ];

  const recruiters = [
    { name: 'Codenicely', logo: 'https://cdn.worldvectorlogo.com/logos/codenicely.svg' }, // not official, placeholder
    { name: 'Sthanve Software', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' }, // no official logo found
    { name: 'Augtech Nextwealth', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'Gravity Engineering Services', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'IB Group', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'Avinash Builders', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'AQUAPLAST Infraproject Pvt. Ltd.', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'IIT Bhilai', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/IIT_Bhilai_Logo.svg/1200px-IIT_Bhilai_Logo.svg.png' },
    { name: 'Deepija Telecommunication Pvt Ltd', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'Adani', logo: 'https://cdn.worldvectorlogo.com/logos/adani.svg' },
    { name: 'Kalptaru Projects KPIL', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'RR ISPAT', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'Shri Balaji Construction', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'Maple Architect', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'Raipur Ultratech', logo: 'https://cdn.worldvectorlogo.com/logos/ultratech.svg' },
    { name: 'Sarthi Associates', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'Utopia Durg', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'Swami Constructions Raipur', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'Chandak & Sharda Associates Durg', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'Green Earth Solution Ltd. Raipur', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'KPIL', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'Govt Job Coalfield India', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' },
    { name: 'Govt Job CSPDCL', logo: 'https://cdn.worldvectorlogo.com/logos/placeholder.svg' }
  ];
  

  const testimonials = [
    {
      name: "Saziya Naaz",
      company: "Codenicely",
      package: "",  // No data given
      role: "Software Engineer",
      quote: "Krishna College’s placement support helped me prepare well and land a great opportunity at Codenicely.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Tara Chand Dewangan",
      company: "Sthanve Software",
      package: "",
      role: "Software Developer",
      quote: "Thanks to the college’s guidance, I successfully secured my position at Sthanve Software.",
      image: "https://randomuser.me/api/portraits/men/43.jpg"
    },
    {
      name: "Devvrat",
      company: "Augtech Nextwealth",
      package: "",
      role: "Developer",
      quote: "The placement cell provided excellent training and interview preparation for my role at Augtech Nextwealth.",
      image: "https://randomuser.me/api/portraits/men/58.jpg"
    },
    {
      name: "Anubhav Nayar",
      company: "Gravity Engineering Services",
      package: "",
      role: "Engineer",
      quote: "I’m grateful to KEC’s placement team for their continuous support throughout the hiring process.",
      image: "https://randomuser.me/api/portraits/men/27.jpg"
    },
    {
      name: "Harsh Kumar Shrivastava",
      company: "Augtech Nextwealth",
      package: "",
      role: "Software Engineer",
      quote: "The college’s placement workshops really boosted my confidence for the interviews.",
      image: "https://randomuser.me/api/portraits/men/34.jpg"
    },
    {
      name: "Shikhar Sinha",
      company: "Sthanve Software",
      package: "",
      role: "Software Developer",
      quote: "Thanks to Krishna College, I was able to crack the interview with Sthanve Software.",
      image: "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
      name: "Raveena Ratrey",
      company: "IB Group",
      package: "",
      role: "Analyst",
      quote: "The placement team’s guidance was instrumental in helping me land a job at IB Group.",
      image: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
      name: "Tejpratap Sahu",
      company: "Sthanve Software",
      package: "",
      role: "Software Engineer",
      quote: "Great placement support from Krishna Engineering College led to my selection at Sthanve Software.",
      image: "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
      name: "Kunal Sahu",
      company: "Avinash Builders",
      package: "",
      role: "Civil Engineer",
      quote: "The training and placement cell gave me the tools I needed for a successful career in civil engineering.",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Vikas Mourya",
      company: "AQUAPLAST Infraproject Pvt. Ltd.",
      package: "",
      role: "Civil Engineer",
      quote: "I appreciate the constant support from the placement cell during my job search.",
      image: "https://randomuser.me/api/portraits/men/53.jpg"
    },
    {
      name: "Abhishek Bhimte",
      company: "Sthanve Software",
      package: "",
      role: "Software Developer",
      quote: "Krishna College’s placement assistance played a key role in helping me join Sthanve Software.",
      image: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      name: "Jaya",
      company: "IIT Bhilai (Project Assistant)",
      package: "",
      role: "Project Assistant",
      quote: "The college helped me secure a research opportunity at IIT Bhilai.",
      image: "https://randomuser.me/api/portraits/women/29.jpg"
    },
    {
      name: "Mukul Kurwe",
      company: "IIT Bhilai (Project Assistant)",
      package: "",
      role: "Project Assistant",
      quote: "Thanks to the placement team for connecting me with IIT Bhilai for this project role.",
      image: "https://randomuser.me/api/portraits/men/28.jpg"
    },
    {
      name: "Payal Dewangan",
      company: "Deepija Telecommunication Pvt Ltd",
      package: "",
      role: "Telecom Engineer",
      quote: "I’m thankful for the placement support in securing my position at Deepija Telecom.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Devid Kumar",
      company: "Adani (via NPTI)",
      package: "",
      role: "Electrical Engineer",
      quote: "The placement cell prepared me well for the role at Adani through NPTI.",
      image: "https://randomuser.me/api/portraits/men/30.jpg"
    },
    {
      name: "Domendra Kumar",
      company: "Kalptaru Projects KPIL, RR ISPAT",
      package: "",
      role: "Electrical Engineer",
      quote: "Placement team’s constant support helped me find my role at Kalptaru Projects.",
      image: "https://randomuser.me/api/portraits/men/35.jpg"
    }
    // You can continue adding others similarly...
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Animation */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full -translate-y-36 translate-x-36 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full translate-y-48 -translate-x-48 opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
              <RocketLaunchIcon className="w-5 h-5 mr-2" />
              Launch Your Career
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Placement Portal</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl">Connecting talent with opportunity. Your pathway to a successful career starts here.</p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-50 transition-all flex items-center"
              >
                <PlayIcon className="h-5 w-5 mr-2" />
                Watch Placement Journey
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all flex items-center"
              >
                <BriefcaseIcon className="h-5 w-5 mr-2" />
                View Opportunities
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center mb-12 text-blue-900"
          >
            Our Placement Achievements
          </motion.h2>
          
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-md`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center mb-12 text-blue-900"
          >
            Our Top Recruiters
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          >
            {recruiters.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-center hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="h-12 w-full flex items-center justify-center">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button 
              whileHover={{ x: 5 }}
              className="text-blue-900 font-semibold flex items-center justify-center mx-auto hover:text-blue-700 transition-colors"
            >
              View all  <ArrowRightIcon className="h-5 w-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials with Swiper */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center mb-12 text-blue-900"
          >
            Student Success Stories
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="px-4"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ 
                clickable: true,
                el: '.testimonial-pagination',
                bulletClass: 'swiper-pagination-bullet !bg-blue-300 !opacity-50',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600 !opacity-100'
              }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-gradient-to-br mb-4 from-gray-50 to-white p-6 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col"
                  >
                    <div className="flex items-start mb-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 shadow-md">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role} at {testimonial.company}</p>
                        <div className="flex items-center text-sm text-green-600 mt-1">
                         
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4 flex-1">
                      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <HeartIcon className="h-5 w-5 text-red-400" />
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom pagination container */}
            <div className="testimonial-pagination flex justify-center space-x-2 mt-6" />
          </motion.div>
        </div>
      </section>

      

      {/* Companies Visited Table Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <CompaniesVisitedTable />
        </div>
      </section>
    </div>
  );
};

export default PlacementPortal;