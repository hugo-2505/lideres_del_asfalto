import React from 'react';
import { HardHat } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-asphalt-light py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="https://res.cloudinary.com/dmtqp1wqz/image/upload/v1772814399/Logo_sin_fondo_xxrzag.png" alt="Líderes del Asfalto" className="h-8 w-auto grayscale opacity-70" referrerPolicy="no-referrer" />
          <span className="font-bold text-lg text-gray-400 tracking-tight">Líderes del Asfalto</span>
        </div>
        
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Líderes del Asfalto. Todos los derechos reservados.
        </div>
        
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Términos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
