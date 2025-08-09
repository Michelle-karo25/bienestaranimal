import React from 'react';

const AdopcionHero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-r from-amber-100 to-amber-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-amber-900 mb-6">Cambia dos vidas: la suya y la tuya</h2>
        <p className="text-xl text-amber-700 mb-8">
          Cada adopción reduce el abandono animal y llena un hogar de amor. 
          <span className="block mt-2 text-amber-600 font-semibold">¡Ya hemos unido 124 mascotas con sus familias!</span>
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition transform hover:scale-105">
            Ver mascotas
          </button>
          <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-bold py-3 px-8 rounded-lg shadow-sm transition">
            Ser voluntario
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdopcionHero;