/**
 * FactsSection.jsx
 * Displays a detailed, grouped table of planetary facts.
 * Categorized into Terrestrial, Jovian (Gas/Ice Giants), and Dwarf planets.
 */
import React from 'react';

/**
 * FactsSection.jsx
 * Displays a detailed, grouped table of planetary facts matches the provided mockup.
 */
export default function FactsSection() {
  // Data as shown in the mockup design
  const mockupData = {
    mass: "0.330",
    diameter: "4,878",
    density: "5427",
    gravity: "3.7"
  };

  const terrestrialPlanets = ['Mercury', 'Venus', 'Earth', 'Mars'];
  const gasGiants = ['Jupiter', 'Saturn'];
  const iceGiants = ['Uranus', 'Neptune'];
  const dwarfPlanets = ['Pluto'];

  return (
    <section id="facts" className="py-24 px-8 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#1e4eb8] mb-4">Planetary Facts at a Glance</h2>
          <p className="text-[#334155] max-w-4xl text-lg leading-relaxed">
            Below is a comparative table of major planets in our solar system. The data highlights key physical 
            properties used by astronomers and researchers worldwide.
          </p>
        </div>

        {/* NASA Metadata */}
        <div className="mb-6">
          <p className="text-sm font-bold text-[#1e293b]">
            Data about the planets of our solar system (Planetary facts taken from NASA)
          </p>
        </div>

        {/* Table Container with Rounded Corners */}
        <div className="overflow-x-auto rounded-xl border border-[#d1d5db] shadow-xl">
          <table className="w-full text-center border-collapse text-sm">
            {/* Header Row */}
            <thead className="bg-[#1e4eb8] text-white">
              <tr>
                {/* Spacers for Category columns */}
                <th className="px-4 py-5 w-24"></th>
                <th className="px-4 py-5 w-24"></th>
                <th className="px-6 py-5 font-semibold tracking-wide">Name</th>
                <th className="px-6 py-5 font-semibold tracking-wide">Mass (10 24kg)</th>
                <th className="px-6 py-5 font-semibold tracking-wide">Diameter (km)</th>
                <th className="px-6 py-5 font-semibold tracking-wide">Density (kg/m3)</th>
                <th className="px-6 py-5 font-semibold tracking-wide">Gravity (m/s2)</th>
              </tr>
            </thead>

            <tbody>
              {/* --- Terrestrial Planets Group --- */}
              {terrestrialPlanets.map((planet, index) => (
                <tr key={planet} className={index % 2 === 0 ? "bg-[#f0f7ff]" : "bg-white"}>
                  {index === 0 && (
                    <td rowSpan={4} colSpan={2} className="bg-[#dce7f9] font-bold text-[#1e3a8a] border-r border-[#e2e8f0] align-middle px-4">
                      Terrestrial Planets
                    </td>
                  )}
                  <td className="px-6 py-5 border-b border-[#e2e8f0] font-medium text-slate-700">{planet}</td>
                  <td className="px-6 py-5 border-b border-[#e2e8f0] text-slate-600">{mockupData.mass}</td>
                  <td className="px-6 py-5 border-b border-[#e2e8f0] text-slate-600">{mockupData.diameter}</td>
                  <td className="px-6 py-5 border-b border-[#e2e8f0] text-slate-600">{mockupData.density}</td>
                  <td className="px-6 py-5 border-b border-[#e2e8f0] text-slate-600">{mockupData.gravity}</td>
                </tr>
              ))}

              {/* --- Jovian Planets Group --- */}
              {/* Gas Giants */}
              {gasGiants.map((planet, index) => (
                <tr key={planet} className={index % 2 === 0 ? "bg-[#f0f7ff]" : "bg-white"}>
                  {index === 0 && (
                    <>
                      <td rowSpan={4} className="bg-[#dce7f9] font-bold text-[#1e3a8a] border-r border-[#e2e8f0] align-middle px-4">
                        Jovian Planets
                      </td>
                      <td rowSpan={2} className="bg-[#dce7f9] font-bold text-[#1e3a8a] border-r border-[#e2e8f0] align-middle px-4">
                        Gas Giants
                      </td>
                    </>
                  )}
                  <td className="px-6 py-5 border-b border-[#e2e8f0] font-medium text-slate-700">{planet}</td>
                  <td className="px-6 py-5 border-b border-[#e2e8f0] text-slate-600">{mockupData.mass}</td>
                  <td className="px-6 py-5 border-b border-[#e2e8f0] text-slate-600">{mockupData.diameter}</td>
                  <td className="px-6 py-5 border-b border-[#e2e8f0] text-slate-600">{mockupData.density}</td>
                  <td className="px-6 py-5 border-b border-[#e2e8f0] text-slate-600">{mockupData.gravity}</td>
                </tr>
              ))}
              {/* Ice Giants */}
              {iceGiants.map((planet, index) => (
                <tr key={planet} className={index % 2 === 0 ? "bg-[#f0f7ff]" : "bg-white"}>
                  {index === 0 && (
                    <td rowSpan={2} className="bg-[#dce7f9] font-bold text-[#1e3a8a] border-r border-[#e2e8f0] align-middle px-4">
                      Ice Giants
                    </td>
                  )}
                  <td className="px-6 py-5 border-b border-[#e2e8f0] font-medium text-slate-700">{planet}</td>
                  <td className="px-6 py-5 border-b border-[#e2e8f0] text-slate-600">{mockupData.mass}</td>
                  <td className="px-6 py-5 border-b border-[#e2e8f0] text-slate-600">{mockupData.diameter}</td>
                  <td className="px-6 py-5 border-b border-[#e2e8f0] text-slate-600">{mockupData.density}</td>
                  <td className="px-6 py-5 border-b border-[#e2e8f0] text-slate-600">{mockupData.gravity}</td>
                </tr>
              ))}

              {/* --- Dwarf Planets Group --- */}
              <tr className="bg-[#f0f7ff]">
                <td colSpan={2} className="bg-[#dce7f9] font-bold text-[#1e3a8a] border-r border-[#e2e8f0] px-4 py-5">
                  Dwarf Planets
                </td>
                <td className="px-6 py-5 font-medium text-slate-700">Pluto</td>
                <td className="px-6 py-5 text-slate-600">{mockupData.mass}</td>
                <td className="px-6 py-5 text-slate-600">{mockupData.diameter}</td>
                <td className="px-6 py-5 text-slate-600">{mockupData.density}</td>
                <td className="px-6 py-5 text-slate-600">{mockupData.gravity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
