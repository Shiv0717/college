import React from "react";

const AboutSectionDarkCard = () => {
  return (
    <section className="w-full h-auto md:h-[500px] flex flex-col md:flex-row overflow-hidden">
      {/* Left Side: Image (60%) */}
      <div className="w-full md:w-3/5 h-64 md:h-auto">
        <img
          src="https://www.kecbhilai.com/images/blog_01.jpg"
          alt="Krishna Engineering College"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Card (40%) */}
      <div className="w-full md:w-2/5 bg-gray-900 text-white flex items-center justify-center p-8">
        <div className="space-y-6 max-w-md">
          <h2 className="text-3xl font-bold leading-snug">
            About <span className="text-green-400">Krishna Engineering College</span>
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed">
            Krishna Engineering College (KEC), Bhilai, is committed to academic excellence, innovation,
            and producing future-ready engineers with values and global competence.
          </p>

          <ul className="space-y-2 text-sm text-gray-300">
            <li>🎓 35+ Years of Academic Excellence</li>
            <li>🏢 State-of-the-art Infrastructure</li>
            <li>🌐 Industry-Oriented Curriculum</li>
          </ul>

          <button className="mt-4 px-5 py-2 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionDarkCard;
