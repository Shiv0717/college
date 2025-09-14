import React from "react";
import {
  School,
  Link,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Home,
  BookOpen,
  GraduationCap,
  Briefcase,
  Calendar,
  MessageCircle,
  Award,
  ChevronRight,
  Heart,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white pt-16 pb-8 px-4 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.kecbhilai.com/images/slider_img2.jpg"
          alt="College Campus Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-800/80 to-blue-700/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-800/80"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-1 opacity-10 pattern-grid-lg pattern-blue-500 pattern-size-8 pattern-opacity-100"></div>
      
      {/* Circular logo background */}
      <div className="absolute -right-32 -bottom-32 w-96 h-96 opacity-10 z-1">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-4 bg-blue-500 rounded-full flex items-center justify-center">
            <School className="text-white" size={80} />
          </div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Information */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative">
                
              
              </div>
              <h3 className="text-2xl font-bold text-yellow-400">
                Krishna Engineering College
              </h3>
            </div>

            <p className="mb-6 text-blue-100 leading-relaxed text-lg">
              Krishna Engineering College is a state of the art engineering
              college recognized for excellence, innovation, and societal
              relevance. We produce creative and strong engineers and research
              solutions to national challenges with an unprecedented commitment
              to integrating across engineering, science, business and other
              disciplines to yield transformative results.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-8">
              <div className="flex items-center mb-3 sm:mb-0 bg-blue-800/50 py-2 px-4 rounded-lg backdrop-blur-sm">
                <Award className="text-yellow-400 mr-2" size={18} />
                <span className="text-sm text-white">Approved by AICTE</span>
              </div>
              <div className="flex items-center bg-blue-800/50 py-2 px-4 rounded-lg backdrop-blur-sm">
                <Award className="text-yellow-400 mr-2" size={18} />
                <span className="text-sm text-white">Affiliated to CSVTU</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: "hover:bg-blue-600" },
                { icon: Twitter, color: "hover:bg-sky-500" },
                { icon: Linkedin, color: "hover:bg-blue-700" },
                { icon: Youtube, color: "hover:bg-red-600" },
                { icon: Instagram, color: "hover:bg-pink-600" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`bg-blue-800/80 p-3 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400 flex items-center pb-3 border-b border-blue-700">
              <Link className="mr-2" size={20} />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Home, text: "Home" },
                { icon: BookOpen, text: "Admissions" },
                { icon: GraduationCap, text: "Courses" },
                { icon: Briefcase, text: "Placements" },
                { icon: Calendar, text: "Events" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="group hover:text-yellow-400 transition-all duration-300 flex items-center py-2 px-3 rounded-lg hover:bg-blue-800/50 backdrop-blur-sm"
                  >
                    <div className="relative">
                      <ChevronRight
                        className="mr-3 text-yellow-400 absolute -left-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                        size={16}
                      />
                    </div>
                    <item.icon className="mr-3" size={18} />
                    <span className="group-hover:translate-x-2 transition-transform">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400 flex items-center pb-3 border-b border-blue-700">
              <MapPin className="mr-2" size={20} />
              Contact Us
            </h4>

            <div className="space-y-5">
              <div className="flex items-start p-3 rounded-lg hover:bg-blue-800/50 transition-all duration-300 backdrop-blur-sm">
                <MapPin
                  className="mr-3 text-yellow-400 mt-1 flex-shrink-0"
                  size={18}
                />
                <div>
                  <p className="font-medium">Krishna Engineering College</p>
                  <p className="text-blue-100 text-sm">
                    Behind Smriti Nagar Petrol Pump Junwani,
                  </p>
                  <p className="text-blue-100 text-sm">Khamahariya, Bhilai</p>
                </div>
              </div>

              <div className="flex items-center p-3 rounded-lg hover:bg-blue-800/50 transition-all duration-300 backdrop-blur-sm">
                <Phone className="mr-3 text-yellow-400" size={18} />
                <div>
                  <p className="font-medium">Phone Numbers</p>
                  <p className="text-blue-100 text-sm">
                    9285123400 / 9826130624
                  </p>
                  <p className="text-blue-100 text-sm">
                    7000130299 / 7587329553
                  </p>
                </div>
              </div>

              <div className="flex items-center p-3 rounded-lg hover:bg-blue-800/50 transition-all duration-300 backdrop-blur-sm">
                <MessageCircle className="mr-3 text-yellow-400" size={18} />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-blue-100 text-sm">9244005187</p>
                </div>
              </div>

              <div className="flex items-center p-3 rounded-lg hover:bg-blue-800/50 transition-all duration-300 backdrop-blur-sm">
                <Mail className="mr-3 text-yellow-400" size={18} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-blue-100 text-sm">
                    admissions@kecbhilai.com
                  </p>
                  <p className="text-blue-100 text-sm">
                    krishnaengineeringcollege@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Left - Copyright */}
          <p className="mb-4 md:mb-0 text-blue-200 text-sm flex items-center">
            © 2023 Krishna Engineering College. All rights reserved.
          </p>

          {/* Right - Crafted by */}
          <a
            href="https://www.linkedin.com/in/u-shiv-kumar-625376219/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-200 hover:text-yellow-400 transition-colors flex items-center group"
          >
            <span className="flex items-center">
              Crafted with 
              <Heart className="mx-1 text-red-500" size={14} fill="currentColor" />
              by
            </span>
            <span className="ml-1 font-semibold text-white group-hover:text-yellow-400 transition-colors flex items-center">
              Shiv Kumar
              <Sparkles className="ml-1 text-yellow-400" size={14} />
            </span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .pattern-grid-lg {
          background-image: linear-gradient(to right, #3b82f6 1px, transparent 1px),
                            linear-gradient(to bottom, #3b82f6 1px, transparent 1px);
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;