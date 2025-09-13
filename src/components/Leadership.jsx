"use client";
import React from "react";

const leaders = [
  {
    name: "Mr. Anand Kumar Tripathi",
    role: "Chairman & Managing Director",
    image: "https://krishnasoftwaresolutions.com/img/chairman.png",
    achievements: [
      "Chairman – Krishna Engineering College",
      "Vice Chairman – Krishna Education Society",
      "Vice President – KPS Group",
    ],
    bio: "A visionary educationist and leader with over 25 years of experience in academic excellence and institutional development.",
    quote:
      "Education is not just about degrees, but about shaping character and building futures.",
    tenure: "2011 - Present",
  },
  {
    name: "Mr. M. M. Tripathi",
    role: "Chairman, Krishna Education Society",
    image: "https://www.kecbhilai.com/images/MANAGEMENT%20&%20HIGHER%20AUTHORITIES/mmtripathi.jpg",
    achievements: [
      "Chairman – Krishna Education Society",
      "Founder visionary of KEC's managing body",
    ],
    bio: "As the head of the governing body, Mr. M. M. Tripathi leads the Krishna Education Society, overseeing the strategic vision and expansion.",
    quote: "There is no purifier greater than knowledge.",
    tenure: "2005 - Present",
  },
  {
    name: "Mr. Pramod Kumar Tripathi",
    role: "Secretary, Krishna Education Society",
    image: "https://www.kecbhilai.com/images/MANAGEMENT%20&%20HIGHER%20AUTHORITIES/pramodtripathi.jpg",
    achievements: [
      "Secretary – Krishna Education Society",
      "Governance and administrative leadership",
    ],
    bio: "In his role as Secretary, Mr. Pramod Kumar Tripathi handles critical administrative functions and governance decisions.",
    quote:
      "Dedication to service and education is the true path to progress.",
    tenure: "2010 - Present",
  },
];

const Leadership = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-2">
              Our <span className="text-emerald-700">Leadership</span>
            </h2>
            <p className="text-slate-600 max-w-xl">
              Meet the visionary leaders who guide our institution with wisdom,
              dedication, and a commitment to excellence.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 transition-colors group"
          >
            Explore all leaders
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Leaders List */}
        <div className="space-y-10">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
            >
              {/* Left: Text */}
              <div className="md:flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-medium text-emerald-700 mb-2">
                      {leader.role}
                    </p>
                  </div>
                  <span className="text-xs font-medium bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                    {leader.tenure}
                  </span>
                </div>

                <p className="text-slate-600 mb-4 mt-3">{leader.bio}</p>

                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 mb-4">
                  <p className="italic text-slate-700">"{leader.quote}"</p>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">
                    Key Roles & Achievements
                  </h4>
                  <ul className="space-y-1">
                    {leader.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-600 flex items-start"
                      >
                        <svg
                          className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Image */}
              <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
                <div className="relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 border-2 border-white rounded-lg opacity-20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
