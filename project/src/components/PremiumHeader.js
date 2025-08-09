import React, { useState, useEffect } from 'react';

const PremiumHeader = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-3xl mr-2">🐾</span>
            <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Alma Animal
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Inicio', 'Adopta', 'Proceso', 'Historias', 'Contacto'].map((item, index) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`relative font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 transition-colors`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <button 
            onClick={() => alert('¡Gracias por tu donación! (Funcionalidad de donación en desarrollo)')}
            className={`hidden md:block px-6 py-2 rounded-full font-medium ${scrolled ? 'bg-amber-600 text-white hover:bg-amber-700' : 'bg-white text-amber-800 hover:bg-amber-100'} transition-colors`}
          >
            Donar
          </button>
        </div>
      </div>
    </header>
  );
};

export default PremiumHeader;