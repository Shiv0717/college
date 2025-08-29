import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Award, Shield, Globe, Star } from "lucide-react";

const AffiliationAccreditation = () => {
  const affiliations = [
    {
      title: "Chhattisgarh Swami Vivekanand Technical University (CSVTU)",
      description: "Affiliated with the premier technical university of Chhattisgarh",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />
    },
    {
      title: "All India Council for Technical Education (AICTE)",
      description: "Approved by the national-level apex advisory body for technical education",
      icon: <Shield className="w-6 h-6 text-green-600" />
    },
    {
      title: "Department of Higher Education, Govt. of Chhattisgarh",
      description: "Recognized by the State Government of Chhattisgarh",
      icon: <Award className="w-6 h-6 text-purple-600" />
    }
  ];

  const accreditations = [
    {
      title: "NAAC Accreditation with 'A' Grade",
      description: "Awarded by the National Assessment and Accreditation Council for excellence in higher education",
      score: "CGPA 3.25/4",
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "NBA Accredited Programs",
      description: "Select programs accredited by the National Board of Accreditation",
      programs: "Computer Science & Engineering, Mechanical Engineering",
      icon: <Award className="w-6 h-6 text-blue-600" />
    },
    {
      title: "ISO 9001:2015 Certified",
      description: "Certified for quality management systems in education",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />
    }
  ];

  const recognitions = [
    "Ranked among top engineering colleges in Chhattisgarh by leading education portals",
    "Best Industry-Linked Technical Institute Award 2022",
    "Excellence in Technical Education Award by ISTE",
    "Green Campus Initiative recognition"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Affiliation & Accreditation
          </h1>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto">
            Krishna Engineering College is recognized by statutory bodies and accredited for maintaining 
            high standards in technical education and infrastructure.
          </p>
        </motion.div>

        {/* Affiliations Section */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex items-center mb-8">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <BookOpen className="w-8 h-8 text-blue-700" />
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Institutional Affiliations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {affiliations.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-blue-50 p-6 rounded-xl border border-blue-200 hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-blue-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Accreditations Section */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-center mb-8">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <Award className="w-8 h-8 text-green-700" />
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Accreditations & Certifications</h2>
          </div>
          
          <div className="space-y-6">
            {accreditations.map((item, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row p-6 bg-green-50 rounded-xl border border-green-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <div className="mb-4 md:mb-0 md:mr-6">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-blue-800 mb-2">{item.description}</p>
                  {item.score && (
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.score}
                    </div>
                  )}
                  {item.programs && (
                    <p className="text-blue-700 mt-2"><span className="font-medium">Programs:</span> {item.programs}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recognitions Section */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex items-center mb-8">
            <div className="p-3 bg-purple-100 rounded-lg mr-4">
              <Globe className="w-8 h-8 text-purple-700" />
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Awards & Recognitions</h2>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
            <ul className="space-y-4">
              {recognitions.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-blue-800 text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Quality Commitment */}
        <motion.div 
          className="bg-blue-900 text-white rounded-2xl shadow-lg p-8 md:p-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Commitment to Quality Education</h3>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            Krishna Engineering College is dedicated to maintaining the highest standards of academic excellence, 
            infrastructure, and student support services as validated by our accreditations and affiliations.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Download Accreditation Certificates
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AffiliationAccreditation;