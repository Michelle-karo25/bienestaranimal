import React from 'react';

const AdopcionFooter = () => {
  return (
    <footer className="bg-amber-800 text-amber-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Bienestar Animal</h3>
          <p className="mb-4">Rescatando, rehabilitando y encontrando hogares para mascotas desde 2010.</p>
          <p>Registro Oficial: BA123456789</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
          <ul className="space-y-2">
            <li><a href="#adopcion" className="hover:text-white transition">Mascotas en adopción</a></li>
            <li><a href="#proceso" className="hover:text-white transition">Cómo adoptar</a></li>
            <li><a href="#historias" className="hover:text-white transition">Historias felices</a></li>
            <li><a href="#contacto" className="hover:text-white transition">Contáctanos</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-amber-700 hover:bg-amber-600 w-10 h-10 rounded-full flex items-center justify-center transition">
              <span className="text-lg">📱</span>
            </a>
            <a href="#" className="bg-amber-700 hover:bg-amber-600 w-10 h-10 rounded-full flex items-center justify-center transition">
              <span className="text-lg">📷</span>
            </a>
            <a href="#" className="bg-amber-700 hover:bg-amber-600 w-10 h-10 rounded-full flex items-center justify-center transition">
              <span className="text-lg">🎥</span>
            </a>
          </div>
          <p className="mt-6 text-amber-200">contacto@bienestaranimal.com</p>
          <p className="text-amber-200">Tel: 555-987-6543</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-amber-700 text-center">
        <p>© {new Date().getFullYear()} Bienestar Animal. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default AdopcionFooter;