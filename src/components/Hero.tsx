import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584351583369-6baf055b51a7?q=80&w=2070&auto=format&fit=crop" 
          alt="Construcción de carreteras" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-asphalt via-asphalt/80 to-asphalt"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,75,135,0.2)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-traffic text-sm font-semibold tracking-wide mb-6 uppercase">
              Acceso Abierto a Interesados
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <video 
              src="https://res.cloudinary.com/dmtqp1wqz/video/upload/v1772814391/Logo_Animation_Video_Ready_ani2ab.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-64 md:w-80 h-auto rounded-2xl shadow-[0_0_30px_rgba(255,204,0,0.2)]"
            />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            El futuro de la infraestructura vial <span className="text-transparent bg-clip-text bg-gradient-to-r from-traffic to-yellow-200">no se aprende en la universidad.</span> Se aprende aquí.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Únete a la red privada de los 10 líderes más influyentes del asfalto en Ibero-Latinoamérica. Accede a tecnología de punta, networking cerrado y prepárate para el Congreso CILA Panamá 2027.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button 
              onClick={scrollToPricing}
              className="w-full sm:w-auto bg-traffic text-asphalt hover:bg-traffic-hover px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,204,0,0.4)] hover:shadow-[0_0_30px_rgba(255,204,0,0.6)] transform hover:-translate-y-1"
            >
              Únete a la Comunidad - $9.99/mes <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="#comunidad"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <PlayCircle className="w-5 h-5" /> Ver cómo funciona
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
