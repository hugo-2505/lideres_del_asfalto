import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';

export default function EventSection() {
  return (
    <section className="py-24 bg-canal relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-asphalt/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm font-bold tracking-wide mb-6 uppercase">
              Evento Oficial
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
              CILA Panamá 2027
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              El Congreso Ibero-Latinoamericano del Asfalto. Prepárate con nosotros y obtén acceso prioritario, networking exclusivo y tarifas especiales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-center gap-3 text-white">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Fecha</p>
                  <p className="font-bold">Noviembre 2027</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Ubicación</p>
                  <p className="font-bold">Ciudad de Panamá</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 md:h-96 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl"
          >
            <img 
              src="https://res.cloudinary.com/dmtqp1wqz/image/upload/v1772814393/Gemini_Generated_Image_359n69359n69359n_kzdfkl.png" 
              alt="Panamá CILA 2027" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canal/80 to-transparent flex items-end p-6">
              <p className="text-white font-bold text-xl">Sede Oficial CILA XXII</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
