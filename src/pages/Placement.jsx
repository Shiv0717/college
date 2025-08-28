import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const PlacementPortal = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const stats = [
    { value: '95%', label: 'Placement Rate', icon: ChartBarIcon },
    { value: '250+', label: 'Companies Visited', icon: BriefcaseIcon },
    { value: '₹18 LPA', label: 'Highest Package', icon: ArrowTrendingUpIcon },
    { value: '₹7.5 LPA', label: 'Average Package', icon: AcademicCapIcon }
  ];

  const recruiters = [
    'Microsoft', 'Amazon', 'Google', 'Infosys', 'TCS', 'Wipro',
    'Accenture', 'IBM', 'Deloitte', 'Cognizant', 'Capgemini', 'Tech Mahindra'
  ];

  const placementProcess = [
    { step: 1, title: 'Registration', description: 'Students register for placement drive' },
    { step: 2, title: 'Pre-Placement Talk', description: 'Companies present their opportunities' },
    { step: 3, title: 'Aptitude Test', description: 'Initial screening of candidates' },
    { step: 4, title: 'Group Discussion', description: 'Assessment of communication skills' },
    { step: 5, title: 'Technical Interview', description: 'Evaluation of technical knowledge' },
    { step: 6, title: 'HR Interview', description: 'Final assessment for cultural fit' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    
      

      {/* Hero Section */}
     

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-900"
          >
            Our Placement Achievements
          </motion.h2>
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-900" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</h3>
                <p className="text-gray-700">{stat.label}</p>
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
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-900"
          >
            Our Top Recruiters
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {recruiters.map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-all border border-gray-100"
              >
                <span className="text-lg font-medium text-blue-900">{company}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <button className="text-blue-900 font-semibold flex items-center justify-center mx-auto hover:text-blue-700 transition-colors">
              View all recruiters <ArrowRightIcon className="h-5 w-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-900"
          >
            Our Placement Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placementProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-blue-900 font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Drives */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-900"
          >
            Upcoming Placement Drives
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md mb-6 flex items-start border border-gray-200"
              >
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <CalendarIcon className="h-6 w-6 text-blue-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-900 mb-1">Tech Solutions Inc. Recruitment Drive</h3>
                  <p className="text-gray-600 mb-2">September 25, 2023 • 10:00 AM • College Auditorium</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">Eligibility: 7.0 CGPA and above</span>
                    <span>Roles: Software Developer, Data Analyst</span>
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-900"
          >
            Student Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <UserGroupIcon className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Rahul Sharma</h4>
                    <p className="text-gray-600">Placed at Microsoft</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"The placement cell at Krishna College provided excellent training and guidance that helped me secure my dream job at Microsoft. The mock interviews were especially helpful!"</p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
                  <span>Package: ₹18 LPA</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-900"
          >
            Contact Our Placement Cell
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-900">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-blue-900 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-blue-900">Address</h4>
                    <p className="text-gray-700">123 College Road, Academic Nagar, Bengaluru, Karnataka - 560001</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-6 w-6 text-blue-900 mr-3" />
                  <div>
                    <h4 className="font-medium text-blue-900">Phone</h4>
                    <p className="text-gray-700">+91 80 2345 6789</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-6 w-6 text-blue-900 mr-3" />
                  <div>
                    <h4 className="font-medium text-blue-900">Email</h4>
                    <p className="text-gray-700">placement@krishnacollege.edu.in</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-900">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">Your Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">Your Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">Your Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"></textarea>
                </div>
                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors w-full">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default PlacementPortal;