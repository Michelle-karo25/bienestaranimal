import React from 'react';
import AnimalProfileCard from './AnimalProfileCard';

const AnimalProfileList = ({ animals, onAdoptClick }) => {
  if (animals.length === 0) {
    return (
      <div className="text-center text-gray-600 text-xl py-10">
        No se encontraron mascotas con los filtros seleccionados. ¡Intenta con otras opciones!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto">
      {animals.map(animal => (
        <AnimalProfileCard key={animal.id} animal={animal} onAdoptClick={onAdoptClick} />
      ))}
    </div>
  );
};

export default AnimalProfileList;