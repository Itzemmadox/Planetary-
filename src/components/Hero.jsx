/**
 * Hero.jsx
 * The cinematic entrance to the application.
 * Utilizes full-bleed background video, atmospheric overlays, and high-impact typography.
 */
import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center bg-[#030b1e] overflow-hidden pt-32 pb-24">
      {/* Decorative radial glow behind the planet */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white">
              Explore Our Solar <br />
              System Through Data
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Understand the planets not just by name, but by measurable facts. 
              From size and mass to gravity and density, this page breaks down 
              the solar system in a clear, data-driven way.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#planets"
                className="w-full sm:w-fit px-8 py-4 bg-blue-600 text-white rounded-md font-bold text-sm tracking-wide hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 text-center"
              >
                Explore the Data
              </a>
              <a
                href="#contact"
                className="w-full sm:w-fit px-8 py-4 border border-white/20 text-white rounded-md font-bold text-sm tracking-wide hover:bg-white/5 transition-all text-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right Column: Planetary Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end py-10"
          >
            <div className="relative w-full max-w-md xl:max-w-lg aspect-square">
              {/* Main Planet Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.6)] border-4 border-blue-500/20 animate-pulse-slow">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                  alt="Earth as seen from space"
                  className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
                />
                {/* Inner Shadow for 3D effect */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] rounded-full pointer-events-none" />
              </div>
              
              {/* Decorative Halo Rings */}
              <div className="absolute -inset-4 rounded-full border border-blue-400/20 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-8 rounded-full border border-blue-400/10 animate-spin-slow-reverse pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
