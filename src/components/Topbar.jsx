"use client";
import React from "react";
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Topbar = () => {
  return (
    <div className="w-full bg-[#FDC800] text-blue-900 text-sm z-99">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2 md:gap-0">
        
        {/* Left - Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-center md:text-left">
          {/* Always show phone */}
          <div className="flex items-center justify-center gap-2">
            <Phone size={14} />
            <span className="font-medium">9285123400 / 9826130624</span>
          </div>

          {/* Email - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-2">
            <Mail size={14} />
            <span className="font-medium">krishnaengineeringcollege@gmail.com</span>
          </div>
        </div>

        {/* Right - Social Icons (only on desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-blue-600 transition">
            <Facebook size={16} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Twitter size={16} />
          </a>
          <a href="#" className="hover:text-pink-600 transition">
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
