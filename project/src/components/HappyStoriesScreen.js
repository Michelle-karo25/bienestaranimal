import React from 'react';

const HappyStoriesScreen = () => {
  const stories = [
    {
      id: 1,
      title: "Max encontró su familia activa",
      animalName: "Max",
      adopterName: "Familia Pérez",
      description: "Max, un labrador mix lleno de energía, encontró su hogar ideal con la familia Pérez, quienes disfrutan de largas caminatas y juegos al aire libre. ¡Ahora Max tiene un patio enorme para correr!",
      image: "https://via.placeholder.com/600x400/FFD700/FFFFFF?text=Max+Feliz",
      date: "15 de Enero, 2023"
    },
    {
      id: 2,
      title: "Luna, la reina del sofá",
      animalName: "Luna",
      adopterName: "Sofía G.",
      description: "Luna, la gata siamesa más cariñosa, ahora disfruta de siestas interminables en el sofá de Sofía. Su ronroneo es la banda sonora de este nuevo hogar.",
      image: "https://via.placeholder.com/600x400/ADD8E6/FFFFFF?text=Luna+Feliz",
      date: "20 de Febrero, 2023"
    },
    {
      id: 3,
      title: "Rocky y su nueva aventura",
      animalName: "Rocky",
      adopterName: "Carlos y Ana",
      description: "Rocky, el bulldog francés con personalidad única, se ha adaptado perfectamente a su nuevo hogar. Sus dueños lo adoran y disfrutan de sus ocurrencias diarias.",
      image: "https://via.placeholder.com/600x400/90EE90/FFFFFF?text=Rocky+Feliz",
      date: "5 de Marzo, 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-10 px-6">
      <h1 className="text-5xl font-bold text-center text-purple-800 mb-12 font-serif">
        Historias Felices
      </h1>
      <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-12">
        Conoce a los animales que encontraron su hogar para siempre y las familias que los aman.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {stories.map(story => (
          <div key={story.id} className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src={story.image} 
              alt={story.title} 
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{story.title}</h3>
              <p className="text-gray-600 text-sm mb-3">
                <span className="font-semibold">{story.animalName}</span> con la <span className="font-semibold">{story.adopterName}</span>
              </p>
              <p className="text-gray-700 mb-4 line-clamp-3">{story.description}</p>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>{story.date}</span>
                <button className="text-amber-600 hover:text-amber-800 font-semibold">
                  Leer más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 transition-colors transform hover:scale-105">
          Comparte tu Historia Feliz
        </button>
      </div>
    </div>
  );
};

export default HappyStoriesScreen;