import React from 'react';
import { motion } from 'motion/react';
import { Shield, ThermometerSnowflake, Recycle, Droplets, ArrowRight } from 'lucide-react';

export default function Technology() {
  const techs = [
    {
      icon: <Shield className="w-8 h-8 text-traffic" />,
      title: "Asfalto Autorreparable",
      desc: "Inducción magnética y cápsulas rejuvenecedoras para extender la vida útil."
    },
    {
      icon: <ThermometerSnowflake className="w-8 h-8 text-canal-light" />,
      title: "Mezclas Tibias (WMA)",
      desc: "Reducción de temperaturas de compactación para ahorrar energía y emisiones."
    },
    {
      icon: <Recycle className="w-8 h-8 text-green-500" />,
      title: "Polímeros y Plásticos",
      desc: "Uso de PET y PP reciclado para combatir la deformación plástica."
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-400" />,
      title: "Sistemas SuDS",
      desc: "Pavimentos permeables y drenantes para gestión inteligente de aguas."
    }
  ];

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tecnologia" className="py-24 bg-asphalt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Qué aprenderás?</h2>
          <p className="text-xl text-gray-400">Tecnología y Datos Reales aplicados a la infraestructura vial moderna.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-asphalt-light border border-white/5 p-8 rounded-2xl hover:border-traffic/50 transition-colors group"
            >
              <div className="bg-asphalt w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
              <p className="text-gray-400 leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={scrollToPricing}
            className="inline-flex items-center gap-2 text-traffic hover:text-traffic-hover font-bold text-lg group"
          >
            Domina estas tecnologías en nuestra comunidad 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
