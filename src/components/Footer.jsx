import React from 'react';
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
  Globe,
  Award,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white pt-12 pb-6 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Information */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-5">
              <div className="bg-yellow-400 p-2 rounded-lg mr-3">
                <School className="text-blue-900" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400">Krishna Engineering College</h3>
            </div>
            
            <p className="mb-4 text-blue-100 leading-relaxed">
              Krishna Engineering College is a state of the art engineering college recognized for excellence, 
              innovation, and societal relevance. We produce creative and strong engineers and research solutions 
              to national challenges with an unprecedented commitment to integrating across engineering, science, 
              business and other disciplines to yield transformative results.
            </p>
            
            <div className="flex items-center mb-4">
              <Award className="text-yellow-400 mr-2" size={18} />
              <span className="text-sm">Affiliated to Dr. A.P.J. Abdul Kalam Technical University</span>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300">
                <Youtube size={20} />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-yellow-400 flex items-center pb-2 border-b border-blue-700">
              <Link className="mr-2" size={20} />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { icon: Home, text: "Home" },
                { icon: BookOpen, text: "Admissions" },
                { icon: GraduationCap, text: "Courses" },
                { icon: Briefcase, text: "Placements" },
                { icon: Calendar, text: "Events" }
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="group hover:text-yellow-400 transition-colors flex items-center">
                    <ChevronRight className="mr-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                    <item.icon className="mr-2" size={18} />
                    <span className="group-hover:translate-x-1 transition-transform">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-yellow-400 flex items-center pb-2 border-b border-blue-700">
              <MapPin className="mr-2" size={20} />
              Contact Us
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 text-yellow-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-medium">Krishna Engineering College</p>
                  <p className="text-blue-100 text-sm">Behind Smriti Nagar Petrol Pump Junwani,</p>
                  <p className="text-blue-100 text-sm">Khamahariya, Bhilai</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="mr-3 text-yellow-400" size={18} />
                <div>
                  <p className="font-medium">Phone Numbers</p>
                  <p className="text-blue-100 text-sm">9285123400 / 9826130624</p>
                  <p className="text-blue-100 text-sm">7000130299 / 7587329553</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MessageCircle className="mr-3 text-yellow-400" size={18} />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-blue-100 text-sm">9244005187</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="mr-3 text-yellow-400" size={18} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-blue-100 text-sm">admissions@kecbhilai.com</p>
                  <p className="text-blue-100 text-sm">krishnaengineeringcollege@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
  {/* Left - Copyright */}
  <p className="mb-4 md:mb-0 text-blue-200 text-sm">
    © 2023 Krishna Engineering College. All rights reserved.
  </p>

  {/* Right - Crafted by */}
  <a
    href="https://www.linkedin.com/in/u-shiv-kumar-625376219/" // <-- replace with your actual LinkedIn
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-blue-200 hover:text-yellow-400 transition-colors flex items-center"
  >
   Designed & Developed by 
    <span className="ml-1 font-semibold text-white">Shiv Kumar</span>
  </a>
</div>
      </div>
    </footer>
  );
}

export default Footer;