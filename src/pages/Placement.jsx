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
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <BuildingLibraryIcon className="h-8 w-8 text-blue-900" />
            <h1 className="text-xl font-bold text-blue-900">Krishna College Placement Portal</h1>
          </motion.div>
          <nav className="hidden md:flex space-x-6">
            {['Overview', 'Recruiters', 'Process', 'Statistics', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-blue-900 font-medium transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Launching Careers, Building Futures
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            At Krishna College, we bridge the gap between talent and opportunity with our comprehensive placement program.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors"
          >
            Student Registration
          </motion.button>
        </div>
      </section>

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
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Krishna College</h4>
              <p className="text-gray-400">Excellence in education since 1985. Shaping futures through quality education and holistic development.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Placements</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 Krishna College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlacementPortal;