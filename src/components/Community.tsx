import React from 'react';
import { motion } from 'motion/react';
import { Video, Bot, Users, Ticket, CheckCircle2 } from 'lucide-react';

export default function Community() {
  const benefits = [
    {
      icon: <Video className="w-6 h-6 text-traffic" />,
      title: "Masterclasses Mensuales",
      description: "Desde diseño de mezclas hasta asfalto modificado."
    },
    {
      icon: <Bot className="w-6 h-6 text-traffic" />,
      title: "El Ingeniero IA 24/7",
      description: "Nuestro bot entrenado con miles de normativas resolverá las dudas de tu obra al instante."
    },
    {
      icon: <Users className="w-6 h-6 text-traffic" />,
      title: "Deal Room (Networking)",
      description: "Conecta con proveedores y dueños de constructoras en toda Latam."
    },
    {
      icon: <Ticket className="w-6 h-6 text-traffic" />,
      title: "Fast-Track CILA 2027",
      description: "Acceso prioritario a entradas y eventos en Panamá."
    }
  ];

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="comunidad" className="py-24 bg-asphalt-light relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Tu Membresía VIP al <span className="text-canal-light">Círculo Interno</span> de la Construcción
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              No somos un foro público. Somos la plataforma donde los verdaderos contratistas e ingenieros cierran negocios y actualizan sus metodologías.
            </p>
            
            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 bg-asphalt p-2 rounded-lg border border-white/10 h-fit">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={scrollToPricing}
              className="bg-canal hover:bg-canal-light text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-canal/50 w-full sm:w-auto"
            >
              Quiero mi Acceso Inmediato ($9.99)
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Mockup of the platform */}
            <div className="bg-asphalt rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative">
              <img 
                src="https://res.cloudinary.com/dmtqp1wqz/image/upload/v1772814393/Gemini_Generated_Image_eg1jjaeg1jjaeg1j_xirvdk.png" 
                alt="Comunidad Privada" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -right-6 top-10 bg-asphalt border border-traffic/30 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <CheckCircle2 className="text-traffic w-6 h-6" />
              <div>
                <p className="text-xs text-gray-400">Nuevo Miembro</p>
                <p className="text-sm font-bold">Ing. Carlos M. se unió</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
