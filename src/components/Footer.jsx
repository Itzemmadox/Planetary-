/**
 * Footer.jsx
 * The final informational section of the application.
 * Contains team information, navigation links, and official academy pointers.
 */
import React from 'react';
import { Github, ExternalLink, Rocket, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#030712] text-white pt-24 pb-8 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-16 border-b border-white/10 mb-8">
          
          {/* About Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold uppercase tracking-tight">About</h4>
            <p className="text-gray-400 leading-relaxed max-w-md">
              We are a team of dedicated space enthusiasts exploring the intersection of data and cosmos. 
              Built by <span className="text-white font-medium">Amaka & Ifeoma</span> as part of our capstone mission. 
              Our goal is to make planetary science accessible and visually stunning.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 md:justify-items-end">
            <div className="space-y-6">
              <h4 className="text-xl font-bold uppercase tracking-tight">Academic Uplink</h4>
              <a 
                href="https://tsacademyonline.com/" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors block"
              >
                TSacademy
              </a>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-bold uppercase tracking-tight">Group Uplink</h4>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors block capitalize"
              >
                Cosmic Creators Repo
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col md:row-reverse md:flex-row justify-between items-center gap-6 text-sm text-gray-400 font-medium">
          <p>© {currentYear} Amaka & Ifeoma A. All rights reserved</p>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy & Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
