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
  Calendar
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Information */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400 flex items-center">
              <School className="mr-2" size={28} />
              Krishna Engineering College
            </h3>
            <p className="mb-2">Affiliated to Dr. A.P.J. Abdul Kalam Technical University</p>
            <p className="mb-2">Accredited by NAAC & NBA</p>
            <p className="mb-4">Providing quality technical education since 2008</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400 flex items-center">
              <Link className="mr-2" size={20} />
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors flex items-center">
                  <Home className="mr-2" size={18} />
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors flex items-center">
                  <BookOpen className="mr-2" size={18} />
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors flex items-center">
                  <GraduationCap className="mr-2" size={18} />
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors flex items-center">
                  <Briefcase className="mr-2" size={18} />
                  Placements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors flex items-center">
                  <Calendar className="mr-2" size={18} />
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400 flex items-center">
              <MapPin className="mr-2" size={20} />
              Contact Us
            </h4>
            <address className="not-italic">
              <p className="mb-2 flex items-center">
                <MapPin className="mr-2 text-yellow-400" size={18} />
                Krishna Engineering College<br />
                Knowledge Park III, Greater Noida<br />
                Uttar Pradesh 201310
              </p>
              <p className="mb-2 flex items-center">
                <Phone className="mr-2 text-yellow-400" size={18} />
                +91 120 232 3456
              </p>
              <p className="mb-2 flex items-center">
                <Mail className="mr-2 text-yellow-400" size={18} />
                info@krishnaengg.edu.in
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-6 text-center">
          <p>© 2023 Krishna Engineering College. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-sm text-white hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white hover:text-yellow-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white hover:text-yellow-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;