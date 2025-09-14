'use client';
import React from 'react';

const leader = {
  name: 'Mr. Anand Kumar Tripathi',
  role: 'Chairman & Managing Director',
  image: 'https://krishnasoftwaresolutions.com/img/chairman.png',
  bio: 'A visionary educationist with over 25 years of experience in academic excellence.',
  quote: 'Education is not just about degrees, but about shaping character and building futures.',
  tenure: '2011 ‐ Present',
  vision: 'Knowledge for Holistic Development, Morality, Ethics, Patriotism & Character Building.',
  mission: [
    'To provide best service in the field of Education.',
    'To motivate & promote Critical Thinking, Creativity, Innovation, Collaboration & Communication.',
    'To train & develop Flexibility, Adaptability, Leadership, Responsibility, Initiative, Social, Cultural & Emotional Skills.',
  ],
  awards: [
    'Bhasha Samanway Puraskar',
    'Akshaya National Award',
    'Ambedkar, The Pride of Nation Award',
  ],
  phone: '9752545670',
};

const Leadership = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header / Banner Style */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/3">
            <img
              src={leader.image}
              alt={leader.name}
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div className="lg:w-2/3 space-y-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700">{leader.name}</h2>
            <p className="text-emerald-700 font-medium text-lg">{leader.role}</p>
            <p className="text-sm text-gray-500">Tenure: {leader.tenure}</p>
            <p className="mt-4 text-gray-700 text-lg">{leader.bio}</p>
            <blockquote className="mt-4 italic text-blue-600 border-l-4 border-blue-400 pl-4">
              “{leader.quote}”
            </blockquote>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Our Vision</h3>
            <p className="text-gray-700">{leader.vision}</p>
          </div>

          {/* Mission */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Our Mission</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {leader.mission.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Awards */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Awards & Recognitions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {leader.awards.map((award, idx) => (
              <li key={idx}>{award}</li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
          >
            More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
