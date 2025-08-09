import React, { useState } from 'react';

const AnimalProfileCard = ({ animal, onAdoptClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % animal.images.length
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + animal.images.length) % animal.images.length
    );
  };

  const handleContactRefugeClick = () => {
    alert(`¡Gracias por tu interés en ${animal.name}! Hemos enviado tu solicitud de contacto al refugio. Pronto se comunicarán contigo.`);
    // Aquí podrías integrar una API para enviar un correo, abrir un chat, etc.
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={animal.images[currentImageIndex]} // Usa la imagen actual de la galería
          alt={`${animal.name} - ${currentImageIndex + 1}`} 
          className="w-full h-full object-cover object-center"
        />
        {animal.images.length > 1 && (
          <>
            <button 
              onClick={goToPreviousImage} 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button 
              onClick={goToNextImage} 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
              {animal.images.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`block w-2 h-2 rounded-full ${currentImageIndex === idx ? 'bg-white' : 'bg-gray-400'}`}
                ></span>
              ))}
            </div>
          </>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-3xl font-bold text-white">{animal.name}</h3>
          <p className="text-amber-200 text-lg">{animal.breed} • {animal.age} años</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4 line-clamp-3">{animal.description}</p>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <span className="bg-amber-50 text-amber-800 text-sm font-medium px-3 py-1 rounded-full text-center">
            {animal.gender}
          </span>
          <span className="bg-amber-50 text-amber-800 text-sm font-medium px-3 py-1 rounded-full text-center">
            {animal.size}
          </span>
          <span className="bg-amber-50 text-amber-800 text-sm font-medium px-3 py-1 rounded-full text-center">
            {animal.vaccinated ? 'Vacunado' : 'No Vacunado'}
          </span>
          <span className="bg-amber-50 text-amber-800 text-sm font-medium px-3 py-1 rounded-full text-center">
            {animal.sterilized ? 'Esterilizado' : 'No Esterilizado'}
          </span>
        </div>
        <div className="flex flex-col space-y-3">
          <button 
            onClick={() => onAdoptClick(animal)}
            className="w-full bg-amber-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-amber-700 transition-colors transform hover:scale-105"
          >
            ¡Quiero Adoptar!
          </button>
          <button 
            onClick={handleContactRefugeClick}
            className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-300 transition-colors transform hover:scale-105"
          >
            Contactar Refugio
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalProfileCard;