import React from 'react';
import {
  GraduationCap,
  Award,
  Mail,
  Phone,
  Briefcase,
  Star,
} from 'lucide-react';

const Hod = () => {
  const hods = [
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      department: "Civil Engineering",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      qualification: "Ph.D. in Structural Engineering, IIT Delhi",
      experience: "18 years",
      email: "hod.civil@kec.edu",
      phone: "+91 9876543210",
      specialization: "Structural Analysis, Earthquake Engineering",
      achievements: [
        "Published 45+ research papers",
        "Recipient of Best Teacher Award 2020",
        "Lead consultant for multiple bridge projects"
      ]
    },
    {
      id: 2,
      name: "Dr. Priya Singh",
      department: "Computer Science & Engineering",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      qualification: "Ph.D. in Artificial Intelligence, IIIT Hyderabad",
      experience: "15 years",
      email: "hod.cse@kec.edu",
      phone: "+91 9876543211",
      specialization: "Machine Learning, Natural Language Processing",
      achievements: [
        "Patent in AI-based healthcare systems",
        "Research grants worth ₹2.5 crores",
        "Mentored 10+ Ph.D. scholars"
      ]
    },
    {
      id: 3,
      name: "Dr. Amit Kumar",
      department: "Mechanical Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      qualification: "Ph.D. in Thermal Engineering, IIT Bombay",
      experience: "20 years",
      email: "hod.mech@kec.edu",
      phone: "+91 9876543212",
      specialization: "Heat Transfer, Renewable Energy Systems",
      achievements: [
        "Developed efficient solar thermal systems",
        "Author of 3 engineering textbooks",
        "Consultant for automotive industry"
      ]
    },
    {
      id: 4,
      name: "Dr. Sunita Patel",
      department: "Electrical Engineering",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      qualification: "Ph.D. in Power Systems, IIT Kanpur",
      experience: "16 years",
      email: "hod.ee@kec.edu",
      phone: "+91 9876543213",
      specialization: "Smart Grids, Power Electronics",
      achievements: [
        "Led national smart grid initiative",
        "Awarded Women in Engineering 2021",
        "10+ sponsored research projects"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Heads of Department</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our esteemed Heads of Department who lead academic excellence and innovation at Krishna Engineering College
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {hods.map((hod) => (
            <div key={hod.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={hod.image} 
                  alt={hod.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full h-1/2" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl">{hod.name}</h3>
                  <p className="text-sm">{hod.department}</p>
                </div>
              </div>

              <div className="p-6">
                {/* Qualification */}
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Qualification</p>
                    <p className="font-medium text-sm">{hod.qualification.split(',')[0]}</p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="font-medium">{hod.experience}</p>
                  </div>
                </div>

                {/* Specialization */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Specialization</p>
                  <p className="font-medium text-sm">{hod.specialization}</p>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-sm text-gray-600 mb-2">Contact</p>
                  <div className="flex flex-col space-y-2">
                    <a href={`mailto:${hod.email}`} className="text-blue-600 text-sm hover:text-blue-800 flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      {hod.email}
                    </a>
                    <a href={`tel:${hod.phone}`} className="text-blue-600 text-sm hover:text-blue-800 flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      {hod.phone}
                    </a>
                  </div>
                </div>

                {/* View Profile Button */}
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Department Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Role of HODs</h3>
              <p className="text-gray-700">
                Our Heads of Department are accomplished academicians and industry experts who provide strategic 
                direction to their departments, mentor faculty members, ensure curriculum relevance, and foster 
                research and innovation among students.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Department Achievements</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Industry-academia collaboration programs</li>
                <li>State-of-the-art laboratories and research facilities</li>
                <li>Regular curriculum updates aligned with industry needs</li>
                <li>Excellent placement records across all departments</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hod;
