import React from 'react';

export function LogoWall() {
  const partners = [
    { name: 'TechFarm', width: 120 },
    { name: 'AgroTech', width: 140 },
    { name: 'SmartFarms', width: 130 },
    { name: 'GreenTech', width: 125 },
    { name: 'FarmAI', width: 110 },
    { name: 'AgriSolutions', width: 150 },
  ];

  return (
    <section className="py-16 bg-light-bg border-y border-light-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-dark-light font-medium uppercase tracking-wide text-sm mb-8">
            Trusted by industry leaders
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="flex justify-center items-center animate-fade-in hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="bg-dark-light/10 rounded-lg flex items-center justify-center text-dark-light font-semibold text-sm px-4 py-2"
                style={{ width: partner.width }}
              >
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}