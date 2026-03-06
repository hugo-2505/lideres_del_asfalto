import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, HardHat } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-asphalt/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="https://res.cloudinary.com/dmtqp1wqz/image/upload/v1772814399/Logo_sin_fondo_xxrzag.png" alt="Líderes del Asfalto" className="h-10 w-auto" referrerPolicy="no-referrer" />
          <span className="font-bold text-xl tracking-tight hidden sm:block">Líderes del Asfalto</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#comunidad" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">La Comunidad</a>
          <a href="#tecnologia" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Tecnología</a>
          <a href="#pilares" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pilares</a>
          <a href="#blog" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Blog</a>
          <button 
            onClick={scrollToPricing}
            className="bg-traffic text-asphalt hover:bg-traffic-hover px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,204,0,0.3)]"
          >
            Ingresar a la Comunidad
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-asphalt-light border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl"
        >
          <a href="#comunidad" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white font-medium">La Comunidad</a>
          <a href="#tecnologia" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white font-medium">Tecnología</a>
          <a href="#pilares" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white font-medium">Pilares</a>
          <a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white font-medium">Blog</a>
          <button 
            onClick={scrollToPricing}
            className="bg-traffic text-asphalt w-full py-3 rounded-lg font-bold mt-2"
          >
            Ingresar a la Comunidad
          </button>
        </motion.div>
      )}
    </header>
  );
}
