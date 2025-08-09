import React from 'react';

const BienestarHeader = () => {
  return (
    <header className="bg-amber-50 py-8 px-4 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h1 className="text-4xl font-bold text-amber-800">Bienestar Animal</h1>
          <p className="text-amber-600 mt-2">Cuidado profesional con amor</p>
        </div>
        <nav className="flex space-x-6">
          <a href="#servicios" className="text-amber-700 hover:text-amber-900 transition">Servicios</a>
          <a href="#testimonios" className="text-amber-700 hover:text-amber-900 transition">Testimonios</a>
          <a href="#contacto" className="text-amber-700 hover:text-amber-900 transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default BienestarHeader;