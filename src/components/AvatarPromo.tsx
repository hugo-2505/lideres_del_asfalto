import React from 'react';
import { motion } from 'motion/react';
import { Ticket } from 'lucide-react';

export default function AvatarPromo() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-asphalt relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,75,135,0.15)_0%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,75,135,0.3)] aspect-[9/16] max-w-sm mx-auto lg:mx-0">
              <video 
                src="https://res.cloudinary.com/dmtqp1wqz/video/upload/v1772814392/Cila_Promotion_frnuuq.mp4" 
                autoPlay 
                loop 
                controls
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <span className="inline-block bg-traffic text-asphalt text-xs font-bold px-3 py-1 rounded-full mb-2 animate-pulse">
                  ¡Mensaje Importante!
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Nos vemos en <span className="text-canal-light">CILA Panamá 2027</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              El Congreso Ibero-Latinoamericano del Asfalto es el evento más importante de nuestra industria. Al unirte a la comunidad "Líderes del Asfalto", no solo obtienes conocimiento técnico de primer nivel, sino que aseguras tu lugar en la red de contactos que dominará el evento en 2027.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Networking previo con los asistentes VIP.",
                "Acceso a mesas de negocios exclusivas.",
                "Tarifas preferenciales para miembros."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <Ticket className="w-5 h-5 text-traffic shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={scrollToPricing}
              className="bg-canal hover:bg-canal-light text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-canal/50 w-full sm:w-auto"
            >
              Asegura tu Membresía Hoy
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
