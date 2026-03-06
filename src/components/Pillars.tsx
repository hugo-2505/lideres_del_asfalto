import React from 'react';
import { motion } from 'motion/react';

export default function Pillars() {
  // Mock data for the 10 pillars
  const pillars = Array.from({ length: 10 }).map((_, i) => ({
    name: `Experto ${i + 1}`,
    role: i % 2 === 0 ? "Dr. en Ingeniería de Pavimentos" : "Director de Infraestructura",
    image: `https://i.pravatar.cc/150?img=${i + 11}`
  }));

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pilares" className="py-24 bg-asphalt-light border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Los 10 Pilares</h2>
          <p className="text-xl text-gray-400">Aprende de los líderes más influyentes de Ibero-Latinoamérica.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="text-center group"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-transparent group-hover:border-traffic transition-colors">
                <img 
                  src={pillar.image} 
                  alt={pillar.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-canal/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="font-bold text-white text-sm md:text-base">{pillar.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{pillar.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={scrollToPricing}
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            Aprende directamente de ellos
          </button>
        </div>
      </div>
    </section>
  );
}
