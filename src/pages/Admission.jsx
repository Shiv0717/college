import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Calendar, DollarSign, CheckCircle } from 'lucide-react';

const AdmissionKEC = () => {
  const [activeTab, setActiveTab] = useState("process");
  
  const steps = [
    "Fill Online Application Form",
    "Submit Required Documents",
    "Appear for Entrance/Counseling (if applicable)",
    "Pay Admission & Tuition Fee",
    "Confirm Enrollment"
  ];

  const eligibility = [
    "B.Tech: 10+2 with Physics, Chemistry, and Mathematics with minimum 45% aggregate (40% for SC/ST).",
    "M.Tech: Bachelor's degree in Engineering/Technology with relevant specialization.",
    "MBA: Graduation in any discipline with valid CAT/MAT/UPSEE score."
  ];

  const documents = [
    "10th & 12th Marksheet/Certificate",
    "Graduation Marksheet (for PG courses)",
    "Transfer & Migration Certificate",
    "Passport Size Photographs",
    "Caste/Category Certificate (if applicable)",
    "Entrance Exam Score Card (if applicable)",
    "CG PET Score Card",
    "Domicile certificate",
    "Residence Certificate",
    "Freedom fighter certificate (if required)",
    "Physically Handicapped certificate (if required)"
  ];

  const feeStructure = [
    { program: "B.Tech (CSE/AI/IT)", tuitionFee: "₹85,000", developmentFee: "₹15,000", total: "₹1,00,000" },
    { program: "B.Tech (Mechanical/Civil)", tuitionFee: "₹75,000", developmentFee: "₹15,000", total: "₹90,000" },
    { program: "B.Tech (ECE/EEE)", tuitionFee: "₹80,000", developmentFee: "₹15,000", total: "₹95,000" },
    { program: "M.Tech", tuitionFee: "₹60,000", developmentFee: "₹10,000", total: "₹70,000" },
    { program: "MBA", tuitionFee: "₹55,000", developmentFee: "₹10,000", total: "₹65,000" }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <motion.div
          className="text-center bg-white p-8 md:p-12 rounded-2xl  mb-12 border border-blue-100"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Admissions @ Krishna Engineering College
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto leading-relaxed">
            Begin your journey at KEC Bhilai. Explore our programs, check eligibility,
            and apply online for a successful career ahead.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-blue-200">
          {[
            { id: "process", label: "Admission Process", icon: FileText },
            { id: "eligibility", label: "Eligibility", icon: CheckCircle },
            { id: "documents", label: "Required Documents", icon: Download },
            { id: "fees", label: "Fee Structure", icon: DollarSign },
            { id: "apply", label: "Apply Now", icon: Calendar }
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-3 mx-2 mb-2 rounded-t-lg font-semibold transition-colors ${activeTab === tab.id ? "bg-blue-900 text-white" : "bg-white text-blue-900 hover:bg-blue-100"}`}
              >
                <IconComponent size={20} className="mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-12 border border-blue-100">
          {/* Admission Process */}
          {activeTab === "process" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Admission Process</h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start p-5 bg-blue-50 rounded-lg border border-blue-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-lg text-blue-800">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Eligibility Criteria */}
          {activeTab === "eligibility" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Eligibility Criteria</h2>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <ul className="space-y-4">
                  {eligibility.map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-blue-800 text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Required Documents */}
          {activeTab === "documents" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Required Documents</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <FileText className="text-blue-700 mr-3 flex-shrink-0" size={20} />
                    <span className="text-blue-800">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Fee Structure */}
          {activeTab === "fees" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Fee Structure (Per Year)</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-blue-50 rounded-xl border border-blue-200">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="py-3 px-4 text-left">Program</th>
                      <th className="py-3 px-4 text-center">Tuition Fee</th>
                      <th className="py-3 px-4 text-center">Development Fee</th>
                      <th className="py-3 px-4 text-center">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <motion.tr 
                        key={index}
                        className={index % 2 === 0 ? "bg-blue-100" : "bg-blue-50"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <td className="py-3 px-4 text-blue-900 font-medium">{fee.program}</td>
                        <td className="py-3 px-4 text-center text-blue-800">{fee.tuitionFee}</td>
                        <td className="py-3 px-4 text-center text-blue-800">{fee.developmentFee}</td>
                        <td className="py-3 px-4 text-center text-blue-900 font-semibold">{fee.total}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-center">
                  <strong>Note:</strong> Additional one-time charges may include registration fee, security deposit (refundable), and other applicable charges.
                </p>
              </div>
            </motion.div>
          )}

          {/* Apply Now Form */}
          {activeTab === "apply" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Apply Now</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-900 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700" 
                  />
                </div>
                <div>
                  <label className="block text-blue-900 mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700" 
                  />
                </div>
                <div>
                  <label className="block text-blue-900 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700" 
                  />
                </div>
                <div>
                  <label className="block text-blue-900 mb-2">Select Course</label>
                  <select className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700">
                    <option>Select Course</option>
                    <option>B.Tech - Computer Science & Engineering</option>
                    <option>B.Tech - Artificial Intelligence & Machine Learning</option>
                    <option>B.Tech - Information Technology</option>
                    <option>B.Tech - Mechanical Engineering</option>
                    <option>B.Tech - Civil Engineering</option>
                    <option>B.Tech - Electronics & Communication Engineering</option>
                    <option>B.Tech - Electrical & Electronics Engineering</option>
                    <option>M.Tech</option>
                    <option>MBA</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-blue-900 mb-2">Message (Optional)</label>
                  <textarea 
                    placeholder="Any specific questions or comments" 
                    rows="4" 
                    className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  ></textarea>
                </div>
                <div className="md:col-span-2 flex justify-center mt-4">
                  <button 
                    type="submit" 
                    className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center"
                  >
                    <FileText className="mr-2" size={20} />
                    Submit Application
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>

        {/* Additional Info Section */}
        <motion.div 
          className="bg-blue-900 text-white p-8 md:p-12 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Need Assistance with Admission?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
              <p>Admission Office: 0771-1234567</p>
              <p>Email: admissions@kecbhilai.edu.in</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Visit Campus</h4>
              <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
              <p>Sunday: 10:00 AM - 2:00 PM</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Download Brochure</h4>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-2 px-6 rounded-lg transition-colors duration-300 flex items-center mx-auto">
                <Download className="mr-2" size={18} />
                Download PDF
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionKEC;