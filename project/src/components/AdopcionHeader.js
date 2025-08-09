import React from 'react';

const AdopcionHeader = () => {
  return (
    <header className="bg-amber-50 py-8 px-4 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h1 className="text-4xl font-bold text-amber-800">Bienestar Animal</h1>
          <p className="text-amber-600 mt-2">Encuentra a tu compañero perfecto</p>
        </div>
        <nav className="flex space-x-6">
          <a href="#inicio" className="text-amber-700 hover:text-amber-900 transition">Inicio</a>
          <a href="#adopcion" className="text-amber-700 hover:text-amber-900 transition">Adóptame</a>
          <a href="#proceso" className="text-amber-700 hover:text-amber-900 transition">Cómo adoptar</a>
          <a href="#historias" className="text-amber-700 hover:text-amber-900 transition">Historias felices</a>
          <a href="#contacto" className="text-amber-700 hover:text-amber-900 transition">Contáctanos</a>
        </nav>
      </div>
    </header>
  );
};

export default AdopcionHeader;