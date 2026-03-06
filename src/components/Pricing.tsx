import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const features = [
    "Librería de clases IA",
    "Networking Latam (Deal Room)",
    "Chatbot Técnico ilimitado",
    "Artículos y estudios exclusivos",
    "Pre-registro CILA 2027 Panamá"
  ];

  return (
    <section id="pricing" className="py-24 bg-asphalt relative border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-traffic/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">La Industria Avanza.<br/><span className="text-traffic">¿Te quedas atrás o lideras?</span></h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto bg-asphalt-light border-2 border-traffic rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(255,204,0,0.1)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-traffic text-asphalt font-bold text-xs uppercase tracking-wider py-1 px-4 rounded-bl-lg">
            Más Popular
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">Miembro Fundador</h3>
          <p className="text-gray-400 mb-6">Acceso total al círculo interno.</p>
          
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl font-extrabold text-white">$9.99</span>
            <span className="text-gray-400 font-medium">USD / mes</span>
          </div>
          
          <div className="space-y-4 mb-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 bg-traffic/20 rounded-full p-0.5">
                  <Check className="w-4 h-4 text-traffic" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
          
          <button className="w-full bg-traffic text-asphalt hover:bg-traffic-hover py-5 rounded-xl font-extrabold text-xl transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,204,0,0.5)] transform hover:-translate-y-1">
            Suscribirme Ahora Mismo
          </button>
          
          <p className="text-center text-xs text-gray-500 mt-4">
            Cancela cuando quieras. Pago seguro procesado por Stripe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
