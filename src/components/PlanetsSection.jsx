/**
 * PlanetsSection.jsx
 * Fetches and displays planet data from an external API.
 * Uses a refined cards system with large, viewable images and glow effects.
 */
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Globe, Sun } from 'lucide-react';

export default function PlanetsSection() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map planet names to high-quality cinematic images from Unsplash
  const planetImageMap = {
    'Mercury': 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=800',
    'Venus': 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&q=80&w=800',
    'Earth': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    'Mars': 'https://images.unsplash.com/photo-1614728463871-240772753a89?auto=format&fit=crop&q=80&w=800',
    'Jupiter': 'https://images.unsplash.com/photo-1630833557094-22c38047bbff?auto=format&fit=crop&q=80&w=800',
    'Saturn': 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3?auto=format&fit=crop&q=80&w=800',
    'Uranus': 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800',
    'Neptune': 'https://images.unsplash.com/photo-1614727133107-5290236a644f?auto=format&fit=crop&q=80&w=800',
    'Pluto': 'https://images.unsplash.com/photo-1504333638930-c8787321eee0?auto=format&fit=crop&q=80&w=800'
  };

  // Fetch planet data from the provided API endpoint
  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('https://anurella.github.io/json/planets.json');
        if (!response.ok) throw new Error('Orbital uplink failed');
        const data = await response.json();
        
        // Transform data to ensure field names match our component and images are high-quality
        const transformedData = data.map(item => ({
          name: item.planet,
          distance_from_sun: item.distanceFromSun + ' million km',
          image: planetImageMap[item.planet] || 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bac4?auto=format&fit=crop&q=80&w=800'
        }));

        setPlanets(transformedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  // Loading state placeholder with orbital spinner
  if (loading) {
    return (
      <div className="py-48 text-center bg-[#050505]">
        <div className="relative inline-block">
          <div className="w-24 h-24 border-2 border-blue-500/20 rounded-full animate-[spin_3s_linear_infinite]" />
          <div className="absolute inset-0 w-24 h-24 border-t-2 border-blue-500 rounded-full animate-spin" />
        </div>
        <p className="mt-8 text-gray-500 font-display font-black tracking-[0.3em] uppercase text-xs">Awaiting Data Stream...</p>
      </div>
    );
  }

  // Error state display
  if (error) {
    return (
      <div className="py-48 text-center bg-[#050505]">
        <p className="text-red-500 font-display font-bold text-xl uppercase tracking-widest">SYSTEM ERROR: {error}</p>
        <button onClick={() => window.location.reload()} className="mt-8 text-white underline font-bold">RETRY LINK</button>
      </div>
    );
  }

  return (
    <section id="planets" className="py-32 px-8 bg-[#f0f7ff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tight text-blue-900">
              Visualizing the Differences Between Planets
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how 
              vastly different terrestrial planets are from gas giants and ice giants.
            </p>
          </motion.div>
        </div>

        {/* Planet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {planets.map((planet, index) => (
            <PlanetCard key={`${planet.name}-${index}`} planet={planet} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * PlanetCard Component
 * Displays individual planet data with high-end glass style and large images.
 */
function PlanetCard({ planet, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg"
    >
      <figure className="w-full h-full">
        <img
          src={planet.image}
          alt={planet.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Subtle Overlay with Planet Name */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <figcaption className="text-white">
            <h3 className="text-xl font-bold tracking-tight">{planet.name}</h3>
            <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               {planet.distance_from_sun} from Sun
            </p>
          </figcaption>
        </div>
      </figure>
    </motion.div>
  );
}
