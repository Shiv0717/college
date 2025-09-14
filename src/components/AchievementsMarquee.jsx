import React from "react";

const AchievementsMarquee = () => {
  return (
    <div>
      <div className="my-10 ml-20 w-[50%]">
        <h1 className="text-4xl font-bold text-gray-900">
          About Krishna Engineering College
        </h1>
        <p className="text-xl mt-6 text-gray-700 leading-relaxed">
          Krishna Engineering College (KEC), Bhilai, is a premier institution 
          committed to delivering quality education in engineering and technology. 
          With state-of-the-art infrastructure, experienced faculty, and strong 
          industry collaborations, KEC empowers students to innovate, lead, 
          and excel in their chosen fields.
        </p>
        <p className="text-xl mt-4 text-gray-700 leading-relaxed">
          Our vision is to shape not only successful professionals but also 
          responsible leaders who can meet global challenges with confidence 
          and integrity.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <img
          src="https://www.kecbhilai.com/images/campus.jpg"
          className="rounded-3xl shadow-lg"
          alt="Krishna Engineering College Campus"
        />
      </div>
    </div>
  );
};

export default AchievementsMarquee;
