import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-deep-space-34531-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#050505] z-1" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-400 font-display font-semibold tracking-widest uppercase text-sm block mb-4">
            Exploring the Infinite
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-none mb-8 tracking-tighter">
            Journey Beyond <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              The Stars
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover the secrets of our solar system. From the searing heat of Mercury to the 
            frozen depths of Neptune, experience the data like never before.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#planets"
              className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              Explore the Data
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
