/**
 * Navbar.jsx
 * A sleek, high-end navigation bar with glassmorphic background on scroll.
 * Features a minimalist brand identity and responsive mobile menu.
 */
import React, { useState, useEffect } from 'react';
import { Menu, X, Orbit } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to detect scroll position for the 'glass' appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'PLANETS', href: '#planets' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-6',
        isScrolled ? 'bg-black/60 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Identity */}
        <a href="#hero" className="flex items-center gap-3 group">
          <Orbit className="w-8 h-8 text-white group-hover:rotate-[30deg] transition-transform duration-500" />
          <span className="font-display text-2xl font-black tracking-tight text-white italic">planet</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold tracking-[0.2em] text-gray-400 hover:text-white transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="group relative px-8 py-3 overflow-hidden rounded-full transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white group-hover:bg-blue-500 transition-colors duration-500" />
            <span className="relative text-black group-hover:text-white text-xs font-black tracking-widest">CONNECT</span>
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-y-0 right-0 w-80 bg-black/95 backdrop-blur-2xl border-l border-white/5 md:hidden p-12 z-50 flex flex-col"
          >
            <button className="self-end mb-12 text-white" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-4xl font-display font-bold text-gray-500 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-8 bg-blue-500 text-white text-center py-6 rounded-2xl font-black tracking-widest text-lg shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONNECT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
