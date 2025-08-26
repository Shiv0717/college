"use client";
import React from "react";
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Topbar = () => {
  return (
    <div className="w-full bg-[#FDC800] text-blue-900 text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Left - Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>info@krishnacollege.edu</span>
          </div>
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-yellow-400">
            <Facebook size={16} />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <Twitter size={16} />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
