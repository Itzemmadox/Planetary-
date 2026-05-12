import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface Planet {
  name: string;
  distance_from_sun: string;
  image: string;
  description?: string;
}

export default function PlanetsSection() {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('https://anurella.github.io/json/planets.json');
        if (!response.ok) throw new Error('Failed to fetch planet data');
        const data = await response.json();
        setPlanets(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  if (loading) {
    return (
      <div className="py-24 text-center">
        <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-400 font-display uppercase tracking-widest text-sm">Calibrating Sensors...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-24 text-center">
        <p className="text-red-400">Error: {error}</p>
      </div>
    );
  }

  return (
    <section id="planets" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight">Our Planets</h2>
            <div className="h-1 w-24 bg-blue-500 rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-xl text-lg">
              Traverse the vastness of space and explore the unique characteristics of each celestial body in our 
              solar neighborhood.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {planets.map((planet, index) => (
            <PlanetCard key={`${planet.name}-${index}`} planet={planet} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PlanetCardProps {
  planet: Planet;
  index: number;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
    >
      <figure className="relative p-8 flex flex-col items-center text-center">
        <div className="relative w-48 h-48 mb-6 group-hover:scale-110 transition-transform duration-700">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <img
            src={planet.image}
            alt={planet.name}
            className="relative w-full h-full object-contain pointer-events-none drop-shadow-2xl"
          />
        </div>
        
        <figcaption>
          <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-blue-400 transition-colors">
            {planet.name}
          </h3>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Distance from Sun</span>
            <span className="text-lg font-mono text-gray-300">{planet.distance_from_sun}</span>
          </div>
        </figcaption>
      </figure>
      
      <div className="px-8 pb-8">
        <button className="w-full py-3 bg-white/5 rounded-xl text-sm font-bold border border-white/10 hover:bg-white hover:text-black transition-all duration-300">
          Learn More
        </button>
      </div>
    </motion.div>
  );
}
