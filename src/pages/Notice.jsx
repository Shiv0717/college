import React from "react";
import { Megaphone } from "lucide-react"; // using lucide-react for icons

const Notice = () => {
  const notices = [
    {
      id: 1,
      title: "Mid-Semester Examination Schedule Released",
      date: "August 20, 2025",
      link: "#",
    },
    {
      id: 2,
      title: "Placement Drive – Infosys & TCS",
      date: "August 15, 2025",
      link: "#",
    },
    {
      id: 3,
      title: "Holiday Notice – Independence Day",
      date: "August 14, 2025",
      link: "#",
    },
    {
      id: 4,
      title: "Workshop on AI & Machine Learning",
      date: "August 10, 2025",
      link: "#",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-800 flex items-center gap-2">
        <Megaphone size={28} /> College Notices
      </h1>

      <div className="bg-white shadow-md rounded-xl divide-y">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="p-4 hover:bg-blue-50 transition flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {notice.title}
              </h2>
              <p className="text-sm text-gray-500">{notice.date}</p>
            </div>
            <a
              href={notice.link}
              className="text-blue-600 font-medium hover:underline"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
