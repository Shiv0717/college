"use client";
import React from "react";
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const colors = {
  primary: "#1a365d",     // Deep blue (university primary)
  secondary: "#b38b59",   // Gold accent (university secondary)
  tertiary: "#2d3748",    // Dark gray
  accent: "#3182ce",      // Light blue
  light: "#e9d8a6",       // Cream/beige
};

const Topbar = () => {
  return (
    <div
      className="w-full text-white text-sm z-50"
      style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2 md:gap-0">
        
        {/* Left - Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-center md:text-left">
          <div className="flex items-center justify-center gap-2">
            <Phone size={14} className="text-[${colors.secondary}]" />
            <span className="font-medium">{`9285123400 / 9826130624`}</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Mail size={14} className="text-[${colors.secondary}]" />
            <span className="font-medium">krishnaengineeringcollege@gmail.com</span>
          </div>
        </div>

        {/* Right - Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="transition" style={{ color: colors.light }}>
            <Facebook size={16} />
          </a>
          <a href="#" className="transition" style={{ color: colors.light }}>
            <Twitter size={16} />
          </a>
          <a href="#" className="transition" style={{ color: colors.light }}>
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
