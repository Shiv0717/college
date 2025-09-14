import React from 'react';
import { motion } from 'framer-motion';

const FounderSection = () => {
  return (
    <div className="bg-white py-10 px-5 md:px-20 flex flex-col md:flex-row gap-10 items-center justify-between shadow-md">
      
      {/* Left - Image */}
      <motion.div
        className="rounded-xl border-4 border-blue-500 p-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/founder.jpg" // Replace with actual image path
          alt="Late Shri K. Sudhakaran"
          className="rounded-xl w-64 h-auto object-cover"
        />
        <div className="mt-4 text-center">
          <h3 className="text-lg font-bold">Late Shri K. Sudhakaran</h3>
          <p className="text-sm text-gray-600">Founder Chairman</p>
        </div>
      </motion.div>

      {/* Right - Text Content */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          A Great Visionary, Will Always Be Remembered For His Strength, Patience And Passion To Reach The Stars.
        </h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-600">Our Vision</h3>
          <p className="text-gray-700">
            Knowledge for Holistic Development, Morality, Ethics, Patriotism & Character Building.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-600">Our Mission</h3>
          <p className="text-gray-700">
            To provide best service in the field of Education. To motivate & Promote Critical Thinking, Creativity,
            Innovation, Collaboration & Communication. To train & develop Flexibility, Adaptibility, Leadership,
            Responsibility, Initiative, Social, Cultural & Emotional Skills.
          </p>
        </div>

        {/* Awards */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-purple-600">Recipient ➝</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Bhasha Samanway Puraskar</li>
            <li>Akshaya National Award</li>
            <li>Ambedkar, The Pride of Nation Award</li>
          </ul>
        </div>

       
       
      </motion.div>
    </div>
  );
};

export default FounderSection;