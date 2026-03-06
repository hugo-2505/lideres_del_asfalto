import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      image: "https://res.cloudinary.com/dmtqp1wqz/image/upload/v1772814394/Gemini_Generated_Image_ctdb80ctdb80ctdb_bwcptp.png",
      title: "El Asfalto Autorreparable: ¿Cómo la inducción magnética alarga la vida del pavimento en un 30%?",
      excerpt: "Descubre cómo la adición de fibras de acero y cápsulas rejuvenecedoras está transformando el mantenimiento de vías..."
    },
    {
      image: "https://res.cloudinary.com/dmtqp1wqz/image/upload/v1772814393/Gemini_Generated_Image_yo68x6yo68x6yo68_ucgjrw.png",
      title: "Mezclas Tibias (WMA): Reducción de 50°F que salva presupuestos y al planeta.",
      excerpt: "El análisis definitivo sobre cómo los aditivos químicos y de espumación permiten compactar asfalto reduciendo emisiones en planta..."
    },
    {
      image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?q=80&w=800&auto=format&fit=crop",
      title: "Carreteras de Plástico: Separando el Mito de la Realidad de los Polímeros.",
      excerpt: "Evaluamos el impacto real del PET y PP reciclado en mezclas bituminosas contra la deformación plástica y el ahuellamiento..."
    }
  ];

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="blog" className="py-24 bg-asphalt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Inteligencia Vial: Últimos Artículos</h2>
          <p className="text-xl text-gray-400">Las investigaciones que están cambiando las carreteras del mundo.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-asphalt-light rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors group cursor-pointer"
              onClick={scrollToPricing}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-asphalt/40 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-traffic transition-colors">{article.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <span className="text-canal-light font-semibold text-sm flex items-center gap-1">
                  Leer artículo <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={scrollToPricing}
            className="bg-traffic text-asphalt hover:bg-traffic-hover px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg"
          >
            Lee los estudios completos dentro de la Comunidad
          </button>
        </div>
      </div>
    </section>
  );
}
