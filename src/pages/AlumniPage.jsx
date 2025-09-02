import React, { useState } from 'react';
import { 
  Search, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  Mail, 
  Phone, 
  Link, 
  X,
  Calendar,
  ChevronDown,
  Users,
  Award,
  BookOpen,
  HeartHandshake,
  Network,
  Star,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';

const AlumniPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [batchFilter, setBatchFilter] = useState('all');
  const [companyFilter, setCompanyFilter] = useState('all');
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  // Alumni data based on KEC Bhilai information
  const alumniData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      batch: "2015",
      degree: "B.Tech in Computer Science",
      currentPosition: "Senior Software Engineer",
      company: "Microsoft",
      location: "Bangalore, India",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      achievements: ["Microsoft MVP", "Published 5 research papers", "Open source contributor"],
      contact: {
        email: "rajesh.kumar@example.com",
        linkedin: "https://linkedin.com/in/rajeshkumar",
        phone: "+91 9876543210"
      },
      story: "After graduating from KEC in 2015, I joined Microsoft as a software engineer. The strong foundation in computer science I received at KEC helped me excel in my career."
    },
    {
      id: 2,
      name: "Priya Sharma",
      batch: "2018",
      degree: "B.Tech in Electronics",
      currentPosition: "Product Manager",
      company: "Google",
      location: "California, USA",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      achievements: ["Led product team of 20", "Women in Tech awardee", "Patent holder"],
      contact: {
        email: "priya.sharma@example.com",
        linkedin: "https://linkedin.com/in/priyasharma",
        phone: "+1 1234567890"
      },
      story: "KEC provided me with not just technical knowledge but also the confidence to lead teams. My electronics background helps me understand tech products better."
    },
    {
      id: 3,
      name: "Amit Patel",
      batch: "2012",
      degree: "B.Tech in Mechanical",
      currentPosition: "Founder & CEO",
      company: "AutoInnovate",
      location: "Pune, India",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      achievements: ["Successful exit of first startup", "Forbes 30 under 30", "Mentor to startups"],
      contact: {
        email: "amit.patel@example.com",
        linkedin: "https://linkedin.com/in/amitpatel",
        phone: "+91 8765432109"
      },
      story: "The mechanical engineering program at KEC taught me problem-solving skills that I've applied to build my company from the ground up."
    },
    {
      id: 4,
      name: "Sanjana Singh",
      batch: "2019",
      degree: "B.Tech in IT",
      currentPosition: "Data Scientist",
      company: "Amazon",
      location: "Seattle, USA",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      achievements: ["Developed ML models with 95% accuracy", "Published in IEEE Journal", "Speaker at AI conferences"],
      contact: {
        email: "sanjana.singh@example.com",
        linkedin: "https://linkedin.com/in/sanjanasingh",
        phone: "+1 2345678901"
      },
      story: "The IT department at KEC had excellent faculty who encouraged research and innovation. That foundation helped me pursue a career in data science."
    },
    {
      id: 5,
      name: "Vikram Malhotra",
      batch: "2016",
      degree: "B.Tech in Civil",
      currentPosition: "Project Manager",
      company: "L&T Construction",
      location: "Mumbai, India",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      achievements: ["Managed $50M infrastructure project", "Award for sustainable construction", "Guest lecturer at IITs"],
      contact: {
        email: "vikram.malhotra@example.com",
        linkedin: "https://linkedin.com/in/vikrammalhotra",
        phone: "+91 7654321098"
      },
      story: "The practical approach to civil engineering at KEC, with site visits and hands-on projects, prepared me for real-world challenges in construction."
    },
    {
      id: 6,
      name: "Neha Gupta",
      batch: "2017",
      degree: "B.Tech in Electrical",
      currentPosition: "Research Scientist",
      company: "Tesla",
      location: "California, USA",
      photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      achievements: ["5 patents in battery technology", "Research grant recipient", "IEEE senior member"],
      contact: {
        email: "neha.gupta@example.com",
        linkedin: "https://linkedin.com/in/nehagupta",
        phone: "+1 3456789012"
      },
      story: "The electrical engineering labs at KEC were well-equipped, allowing me to experiment and develop a passion for renewable energy systems."
    }
  ];

  // Get unique batches and companies for filters
  const batches = [...new Set(alumniData.map(alumni => alumni.batch))].sort((a, b) => b - a);
  const companies = [...new Set(alumniData.map(alumni => alumni.company))].sort();

  // Filter alumni based on active filters
  const filteredAlumni = alumniData.filter(alumni => {
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'entrepreneurs' && alumni.currentPosition.toLowerCase().includes('founder')) ||
                      (activeTab === 'corporate' && !alumni.currentPosition.toLowerCase().includes('founder'));
    const matchesSearch = alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alumni.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alumni.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBatch = batchFilter === 'all' || alumni.batch === batchFilter;
    const matchesCompany = companyFilter === 'all' || alumni.company === companyFilter;
    
    return matchesTab && matchesSearch && matchesBatch && matchesCompany;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">KEC Bhilai Alumni Network</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting past and present students of Krishna Engineering College, Bhilai. Together we grow, achieve, and give back.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">5000+</div>
            <div className="text-gray-600">Alumni Members</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <GraduationCap className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">25+</div>
            <div className="text-gray-600">Batches</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Briefcase className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">20+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Award className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">100+</div>
            <div className="text-gray-600">Industry Leaders</div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl p-6 shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search alumni by name, company, or degree"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative">
                <select
                  className="appearance-none pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                  value={batchFilter}
                  onChange={(e) => setBatchFilter(e.target.value)}
                >
                  <option value="all">All Batches</option>
                  {batches.map(batch => (
                    <option key={batch} value={batch}>{batch} Batch</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
              
              <div className="relative">
                <select
                  className="appearance-none pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                  value={companyFilter}
                  onChange={(e) => setCompanyFilter(e.target.value)}
                >
                  <option value="all">All Companies</option>
                  {companies.map(company => (
                    <option key={company} value={company}>{company}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('all')}
            >
              All Alumni
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'corporate' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('corporate')}
            >
              Corporate Leaders
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'entrepreneurs' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('entrepreneurs')}
            >
              Entrepreneurs
            </button>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAlumni.map(alumni => (
            <div key={alumni.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={alumni.photo} 
                  alt={alumni.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full h-1/2" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl">{alumni.name}</h3>
                  <p className="text-sm">{alumni.batch} Batch • {alumni.degree.split(' in ')[0]}</p>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <Briefcase className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-700">{alumni.currentPosition}</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <Building2 className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-700">{alumni.company}</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-700">{alumni.location}</span>
                </div>
                
                <div className="flex space-x-2 mb-4">
                  {alumni.achievements.slice(0, 2).map((achievement, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {achievement}
                    </span>
                  ))}
                  {alumni.achievements.length > 2 && (
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                      +{alumni.achievements.length - 2} more
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => setSelectedAlumni(alumni)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredAlumni.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No alumni found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Alumni Engagement Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <HeartHandshake className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Mentorship Program</h3>
              <p className="text-gray-600">Guide current students and share your industry experience</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Network className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Alumni Events</h3>
              <p className="text-gray-600">Connect with fellow alumni at reunions and networking events</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Guest Lectures</h3>
              <p className="text-gray-600">Share your expertise with current students through talks</p>
            </div>
          </div>
        </div>

        {/* Alumni Modal */}
        {selectedAlumni && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64">
                <img 
                  src={selectedAlumni.photo} 
                  alt={selectedAlumni.name} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedAlumni(null)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full h-1/2" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold">{selectedAlumni.name}</h2>
                  <p>{selectedAlumni.batch} Batch • {selectedAlumni.degree}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Current Position</p>
                      <p className="font-medium">{selectedAlumni.currentPosition}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Company</p>
                      <p className="font-medium">{selectedAlumni.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-medium">{selectedAlumni.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Batch</p>
                      <p className="font-medium">{selectedAlumni.batch}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Success Story</h3>
                  <p className="text-gray-700">{selectedAlumni.story}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Achievements</h3>
                  <ul className="space-y-2">
                    {selectedAlumni.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Connect</h3>
                  <div className="flex space-x-4">
                    <a href={selectedAlumni.contact.linkedin} className="flex items-center text-blue-600 hover:text-blue-800">
                      <Linkedin className="h-5 w-5 mr-1" />
                      LinkedIn
                    </a>
                    <a href={`mailto:${selectedAlumni.contact.email}`} className="flex items-center text-blue-600 hover:text-blue-800">
                      <Mail className="h-5 w-5 mr-1" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniPage;