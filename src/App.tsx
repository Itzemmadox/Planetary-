/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlanetsSection from './components/PlanetsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <main>
        <Hero />
        <PlanetsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
