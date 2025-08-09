import React, { useState } from 'react';

const AdopcionGallery = () => {
  const [activeTab, setActiveTab] = useState('perros');
  const [selectedPet, setSelectedPet] = useState(null);

  const pets = {
    perros: [
      { id: 1, name: 'Toby', age: 2, breed: 'Mezcla', image: 'dog1.jpg', description: 'Juguetón y cariñoso. Se lleva bien con niños.' },
      { id: 2, name: 'Luna', age: 4, breed: 'Labrador', image: 'dog2.jpg', description: 'Tranquila y obediente. Perfecta para apartamentos.' }
    ],
    gatos: [
      { id: 3, name: 'Michi', age: 1, breed: 'Siamés', image: 'cat1.jpg', description: 'Curioso y activo. Le encanta trepar.' },
      { id: 4, name: 'Pelusa', age: 3, breed: 'Persa', image: 'cat2.jpg', description: 'Cariñosa y tranquila. Ideal para personas mayores.' }
    ]
  };

  return (
    <section id="adopcion" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">Nuestros Peludos Buscan Hogar</h2>
        
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => setActiveTab('perros')} 
            className={`px-6 py-2 mx-2 rounded-t-lg ${activeTab === 'perros' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800'}`}
          >
            Perros
          </button>
          <button 
            onClick={() => setActiveTab('gatos')} 
            className={`px-6 py-2 mx-2 rounded-t-lg ${activeTab === 'gatos' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800'}`}
          >
            Gatos
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets[activeTab].map(pet => (
            <div key={pet.id} className="bg-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-amber-200 flex items-center justify-center">
                <span className="text-5xl">🐕</span> {/* Reemplazar por imagen real */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800">{pet.name}</h3>
                <p className="text-amber-600">{pet.age} años · {pet.breed}</p>
                <button 
                  onClick={() => setSelectedPet(pet)}
                  className="mt-4 w-full bg-amber-100 hover:bg-amber-200 text-amber-800 py-2 rounded-lg transition"
                >
                  Conoce más
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedPet && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white max-w-md rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-amber-800 mb-2">{selectedPet.name}</h3>
                <p className="text-amber-600 mb-4">{selectedPet.age} años · {selectedPet.breed}</p>
                <p className="text-gray-700 mb-6">{selectedPet.description}</p>
                <div className="flex space-x-4">
                  <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg">
                    Adoptar
                  </button>
                  <button 
                    onClick={() => setSelectedPet(null)}
                    className="flex-1 border border-amber-600 text-amber-600 py-2 rounded-lg"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdopcionGallery;