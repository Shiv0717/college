import React, { useState } from "react";

const categories = [
  "Departments",
  "Courses",
  "Admissions",
  "Events",
  "Research",
  "Clubs",
  "Faculty",
  "Alumni",
];

const UniversityMenu = () => {
  const [active, setActive] = useState("Departments");

  return (
    <div className="bg-gradient-to-r from-gray-900 to-blue-900  border-b border-gray-700">
      <div className="flex max-w-7xl mx-auto overflow-x-auto py-3 px-6 space-x-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative flex-shrink-0 text-sm font-medium transition-colors duration-300
              ${
                active === cat
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
          >
            {cat}
            {/* underline animation */}
            {active === cat && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 rounded transition-all duration-300"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UniversityMenu;
