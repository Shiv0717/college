// AdmissionKEC.jsx
import React from "react";
import { motion } from "framer-motion";

const steps = [
  "Fill Online Application Form",
  "Submit Required Documents",
  "Appear for Entrance/ Counseling (if applicable)",
  "Pay Admission & Tuition Fee",
  "Confirm Enrollment"
];

const eligibility = [
  "B.Tech: 10+2 with Physics, Chemistry, and Mathematics with minimum 45% aggregate (40% for SC/ST).",
  "M.Tech: Bachelor’s degree in Engineering/Technology with relevant specialization.",
  "MBA: Graduation in any discipline with valid CAT/MAT/UPSEE score."
];

const documents = [
  "10th & 12th Marksheet/Certificate",
  "Graduation Marksheet (for PG courses)",
  "Transfer & Migration Certificate",
  "Passport Size Photographs",
  "Caste/Category Certificate (if applicable)",
  "Entrance Exam Score Card (if applicable)"
];

const AdmissionKEC = () => {
  return (
    <div className="container mx-auto p-6 space-y-10">
      {/* Hero Section */}
      <motion.div
  className="text-center bg-white text-blue-900 p-10 rounded-2xl "
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">
    Admissions @ Krishna Engineering College
  </h1>
  <p className="max-w-2xl mx-auto text-lg">
    Begin your journey at KEC Bhilai. Explore our programs, check eligibility,
    and apply online for a successful career ahead.
  </p>
</motion.div>

      {/* Admission Process */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Admission Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-5 bg-white rounded-lg shadow hover:shadow-xl transition"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Step {index + 1}
              </h3>
              <p className="text-gray-600">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Eligibility Criteria */}
      <motion.section
        className="bg-gray-50 p-6 rounded-xl shadow-inner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Eligibility Criteria</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          {eligibility.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </motion.section>

      {/* Required Documents */}
      <motion.section
        className="bg-white p-6 rounded-xl shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Required Documents</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          {documents.map((doc, i) => (
            <li key={i}>{doc}</li>
          ))}
        </ul>
      </motion.section>

      {/* Apply Now Form */}
      <motion.section
        className="bg-blue-50 p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Apply Now</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700" 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700" 
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700" 
          />
          <select className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700">
            <option>Select Course</option>
            <option>B.Tech</option>
            <option>M.Tech</option>
            <option>MBA</option>
          </select>
          <textarea 
            placeholder="Your Message" 
            rows="4" 
            className="col-span-1 md:col-span-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
          ></textarea>
          <button 
            type="submit" 
            className="col-span-1 md:col-span-2 bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </motion.section>
    </div>
  );
};

export default AdmissionKEC;
