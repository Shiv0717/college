import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Mail,
  Phone,
  Briefcase,
  Star,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Users,
  FileText,
  Calendar,
  MapPin
} from 'lucide-react';

const Hod = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const hods = [
    {
      id: 1,
      name: "Ash Kumar Soni",
      department: "Mechanical Engineering",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      qualification: "M.Tech (Production Engg), B.E (Mechanical Engg)",
      experience: "14 years",
      email: "hod.mech.ash@kec.edu",
      phone: "+91 9876543214",
      specialization: "Production Engineering",
      achievements: [
        "5 publications",
        "Guided 5 student projects"
      ],
      bio: "An experienced mechanical engineering professional with expertise in production engineering. Committed to academic excellence and student development."
    },
    {
      id: 6,
      name: "Prabhat Kumar Patel",
      department: "Civil Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      qualification: "B.E (Civil), M.Tech (CTM - Civil Engineering), MBA (Finance), MBA (HR & Marketing), Pursuing AMIE",
      experience: "7 years",
      email: "hod.civil.prabhat@kec.edu",
      phone: "+91 9876543215",
      specialization: "Construction Technology and Management",
      achievements: [
        "6 research papers published in UGC-approved journals",
        "Presented papers in peer-reviewed journals",
        "Best Young Faculty Award - Novel Research Academy",
        "Best Research Scholar Award - Bhartiya Vikas Sansthan",
        "Bharatiya Gaurav Samman - Bhartiya Kala Sanskriti Academy",
        "Best Young Researcher Award - Institute of Scholars",
        "Top 10 Motivated Faculty of India - Engineering Graphics with Timoshenko",
        "Featured on Health & Success Magazine cover (June 2020)"
      ],
      bio: "A highly accomplished academician with multiple qualifications and numerous awards. Passionate about research and student mentorship."
    },
    {
      id: 3,
      name: "Dr. Joy Sonashalol",
      department: "Computer Science & Engineering",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      qualification: "Ph.D. in Artificial Intelligence",
      experience: "20 years",
      email: "hod.cse@kec.edu",
      phone: "+91 9876543212",
      specialization: "Artificial Intelligence, Machine Learning, Data Science",
      achievements: [
        "Developed AI-driven learning platforms",
        "Author of 3 textbooks in Machine Learning and AI",
        "Consultant for multiple software product companies"
      ],
      bio: "A leading academician in computer science, known for pioneering research in artificial intelligence and machine learning. Passionate about shaping future tech leaders through innovation and mentorship."
    },      
    {
      id: 4,
      name: "Mr. Tarachand Sahu",
      department: "Electrical Engineering",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      qualification: "B.E. (Electrical & Electronics Engineering), M.Tech (Electrical Engineering)",
      experience: "—",
      email: "tarachand.sahu@kec.edu",
      phone: "+91 9876543216",
      specialization: "Electrical Machines, Power Systems",
      achievements: [
        "Published 2 research papers in reputed journals"
      ],
      bio: "Mr. Tarachand Sahu is an Assistant Professor in the Department of Electrical Engineering. His teaching and academic interests lie in the areas of power systems and electrical machines. He is committed to student development and technical excellence."
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hods.map((hod) => (
            <div key={hod.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${expandedCards[hod.id] ? 'ring-2 ring-blue-500 shadow-xl' : 'hover:shadow-md'}`}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={hod.image} 
                  alt={hod.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent w-full h-2/3" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-2xl">{hod.name}</h3>
                  <p className="text-sm opacity-90">{hod.department}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Qualification</p>
                      <p className="font-medium text-sm line-clamp-1">{hod.qualification.split(',')[0]}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Experience</p>
                      <p className="font-medium text-sm">{hod.experience}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Specialization</p>
                    <p className="font-medium text-sm">{hod.specialization}</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-4">
                  <a href={`mailto:${hod.email}`} className="text-blue-600 text-sm hover:text-blue-800 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    {hod.email}
                  </a>
                </div>

                <button
                  onClick={() => toggleExpand(hod.id)}
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  {expandedCards[hod.id] ? (
                    <>
                      Show Less <ChevronUp className="h-4 w-4 ml-2" />
                    </>
                  ) : (
                    <>
                      View Full Profile <ChevronDown className="h-4 w-4 ml-2" />
                    </>
                  )}
                </button>
              </div>

              {/* Expanded Content - Only shows for the selected card */}
              {expandedCards[hod.id] && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <BookOpen className="text-blue-600 mr-2" size={20} />
                          Qualifications
                        </h3>
                        <p className="text-gray-700 text-sm">{hod.qualification}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <Users className="text-blue-600 mr-2" size={20} />
                          Bio
                        </h3>
                        <p className="text-gray-700 text-sm">{hod.bio}</p>
                      </div>
                    </div>
                    
                    {/* Achievements section */}
                    <div className="bg-yellow-50 rounded-xl p-5 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Award className="text-yellow-600 mr-3" size={20} />
                        Achievements & Awards
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {hod.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center mr-3 mt-0.5">
                              <Star className="h-4 w-4 text-yellow-600" />
                            </div>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Contact Details */}
                    <div className="bg-blue-50 rounded-xl p-5">
                      <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                        <FileText className="text-blue-600 mr-2" size={20} />
                        Contact Information
                      </h3>
                      <div className="space-y-2">
                        <a href={`mailto:${hod.email}`} className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                          <Mail className="h-4 w-4 mr-3" />
                          {hod.email}
                        </a>
                        <a href={`tel:${hod.phone}`} className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                          <Phone className="h-4 w-4 mr-3" />
                          {hod.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Department Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center">
                <Users className="mr-2" size={20} />
                Role of HODs
              </h3>
              <p className="text-gray-700">
                Our Heads of Department are accomplished academicians and industry experts who provide strategic 
                direction to their departments, mentor faculty members, ensure curriculum relevance, and foster 
                research and innovation among students.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center">
                <Award className="mr-2" size={20} />
                Department Achievements
              </h3>
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