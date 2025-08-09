import React from 'react';

const HomeScreen = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        <img 
          src="/images/logo.png" // Asegúrate de tener un logo en public/images/logo.png
          alt="Hogar Animal Logo" 
          className="w-48 h-48 mx-auto mb-6 animate-bounce-slow"
        />
        <h1 className="text-5xl font-extrabold text-amber-800 mb-4 font-serif">
          ¡Bienvenido a Hogar Animal!
        </h1>
        <p className="text-xl text-gray-700 max-w-md mx-auto">
          Conecta con animales que buscan un hogar y ayuda a quienes más lo necesitan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
        <button 
          onClick={() => onNavigate('buscar')}
          className="bg-amber-600 text-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
        >
          <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span className="text-2xl font-bold">Buscar</span>
          <span className="text-lg text-amber-100">Encuentra tu compañero</span>
        </button>

        <button 
          onClick={() => onNavigate('buscar')} 
          className="bg-orange-600 text-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
        >
          <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          <span className="text-2xl font-bold">Adoptar</span>
          <span className="text-lg text-orange-100">Dale un hogar</span>
        </button>

        <button 
          onClick={() => onNavigate('reportar')}
          className="bg-red-600 text-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
        >
          <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          <span className="text-2xl font-bold">Reportar</span>
          <span className="text-lg text-red-100">Ayuda a un animal</span>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;