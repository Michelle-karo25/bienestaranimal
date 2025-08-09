import React from 'react';

const BienestarHero = () => {
  return (
    <section className="bg-gradient-to-r from-amber-100 to-amber-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-amber-900 mb-6">Tu mascota merece lo mejor</h2>
        <p className="text-xl text-amber-700 mb-8">
          Cuidado profesional, atención personalizada y mucho amor para tu compañero peludo
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition transform hover:scale-105">
          Conoce nuestros servicios
        </button>
      </div>
    </section>
  );
};

export default BienestarHero;