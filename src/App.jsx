/**
 * App.jsx
 * The main application container that holds all page sections.
 * Uses a dark, cinematic theme consistent throughout the app.
 */
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import PlanetsSection from './components/PlanetsSection';
import FactsSection from './components/FactsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 selection:text-white">
      {/* Navigation Header */}
      <Navbar />
      
      {/* Main Content Area */}
      <main>
        {/* Cinematic Hero Section */}
        <Hero />

        {/* Informational Intro */}
        <IntroSection />
        
        {/* Dynamic Planet Data Grid */}
        <PlanetsSection />

        {/* Detailed Data Table */}
        <FactsSection />
        
        {/* User Interaction Section */}
        <ContactForm />
      </main>
      
      {/* Informational Footer */}
      <Footer />
    </div>
  );
}
