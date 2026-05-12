import React from 'react';
import { Github, ExternalLink, Rocket } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const teamMembers = ['Alex', 'Jordan', 'Sam', 'Taylor'];

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* About Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Rocket className="text-blue-500 w-6 h-6" />
            <span className="font-display font-bold text-lg">COSMIC CREATORS</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm">
            We are a team of passionate developers exploring the frontiers of web technology. 
            This project serves as our capstone for the TS Academy program.
          </p>
          <div className="flex flex-wrap gap-2">
            {teamMembers.map((member) => (
              <span
                key={member}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
              >
                {member}
              </span>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="md:col-start-3 space-y-6 md:text-right">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-4">
            <li>
              <a href="#hero" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a>
            </li>
            <li>
              <a href="#planets" className="text-gray-400 hover:text-white transition-colors text-sm">Explore Data</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
            </li>
          </ul>
          
          <div className="pt-4 flex flex-col gap-4 items-start md:items-end">
            <a
              href="https://tsacademyonline.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              TS Academy <ExternalLink size={14} />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Github size={16} /> Cosmic Creators Repo
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest font-semibold">
        <p>© {currentYear} COSMIC CREATORS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
