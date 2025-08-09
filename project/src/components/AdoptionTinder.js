import React, { useState } from 'react';

// Aquí defines la información de tus mascotas, incluyendo la ruta de la imagen
const pets = [
  {
    id: 1,
    name: "Max",
    type: "Perro",
    breed: "Labrador Mix",
    age: "2 años",
    gender: "Macho",
    description: "Juguetón y energético. Le encanta correr y jugar fetch. Se lleva bien con niños y otros perros.",
    image: "/images/max.jpg" // <--- Asegúrate de que esta imagen esté en public/images/max.jpg
  },
  {
    id: 2,
    name: "Luna",
    type: "Gato",
    breed: "Siamés",
    age: "1.5 años",
    gender: "Hembra",
    description: "Tranquila y cariñosa. Perfecta para apartamentos. Le encanta acurrucarse en el regazo.",
    image: "/images/luna.jpg" // <--- Asegúrate de que esta imagen esté en public/images/luna.jpg
  },
  {
    id: 3,
    name: "Rocky",
    type: "Perro",
    breed: "Bulldog Francés",
    age: "3 años",
    gender: "Macho",
    description: "Divertido y leal. Aunque parece serio, es un payaso que adora hacer reír a su familia.",
    image: "/images/rocky.jpg" // <--- Asegúrate de que esta imagen esté en public/images/rocky.jpg
  }
];

const AdoptionTinder = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const handleSwipe = (dir) => {
    setCurrentIndex((prev) => (prev + dir + pets.length) % pets.length);
  };

  const openModal = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPet(null);
  };

  const handleAdoptClick = () => {
    alert(`¡Excelente! Has iniciado el proceso para adoptar a ${selectedPet.name}. Te redirigiremos al formulario de contacto.`);
    closeModal();
    onNavigate('contacto'); // Navega al formulario de contacto
  };

  return (
    <section id="adopta" className="py-28 px-6 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Conoce a nuestros <span className="text-amber-600">rescatados</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desliza para descubrir a estos ángeles esperando una segunda oportunidad
          </p>
        </div>

        <div className="relative h-[600px] max-w-md mx-auto">
          <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="h-3/5 bg-amber-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                {/* AQUÍ SE USA LA IMAGEN DE LA MASCOTA */}
                {/* Asegúrate de que las imágenes (ej. max.jpg, luna.jpg) estén en la carpeta 'public/images' de tu proyecto */}
                <img 
                  src={pets[currentIndex].image} 
                  alt={pets[currentIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-3xl font-bold text-white">{pets[currentIndex].name}</h3>
                  <div className="flex items-center space-x-4 text-white/90 mt-1">
                    <span>{pets[currentIndex].type}</span>
                    <span>•</span>
                    <span>{pets[currentIndex].breed}</span>
                    <span>•</span>
                    <span>{pets[currentIndex].age}</span>
                  </div>
                </div>
              </div>

              <div className="flex-grow p-6 flex flex-col">
                <div className="flex-grow">
                  <p className="text-gray-700 mb-6">{pets[currentIndex].description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-amber-50 rounded-lg p-3">
                      <p className="text-xs text-amber-600 mb-1">Tamaño</p>
                      <p className="font-medium">Mediano</p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3">
                      <p className="text-xs text-amber-600 mb-1">Salud</p>
                      <p className="font-medium">Vacunado</p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3">
                      <p className="text-xs text-amber-600 mb-1">Personalidad</p>
                      <p className="font-medium">Juguetón</p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3">
                      <p className="text-xs text-amber-600 mb-1">Esterilizado</p>
                      <p className="font-medium">Sí</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => handleSwipe(-1)}
                    className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>

                  <button
                    onClick={() => openModal(pets[currentIndex])}
                    className="flex-grow mx-4 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors"
                  >
                    Quiero adoptar
                  </button>

                  <button
                    onClick={() => handleSwipe(1)}
                    className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => onNavigate('adopta')} // Podría navegar a una página con todos los peludos
            className="inline-flex items-center text-amber-600 font-medium group hover:text-amber-800 transition-colors"
          >
            Ver todos los peludos disponibles
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Modal de Adopción */}
      {showModal && selectedPet && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden w-full max-w-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="h-64 bg-amber-100 relative overflow-hidden">
              {/* AQUÍ SE USA LA IMAGEN DE LA MASCOTA EN EL MODAL */}
              <img 
                src={selectedPet.image} 
                alt={selectedPet.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedPet.name}</h3>
              <div className="flex items-center space-x-4 text-gray-500 mb-6">
                <span>{selectedPet.type}</span>
                <span>•</span>
                <span>{selectedPet.breed}</span>
                <span>•</span>
                <span>{selectedPet.age}</span>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Proceso de Adopción</h4>
                <div className="space-y-4">
                  {[
                    "1. Completa el formulario de solicitud",
                    "2. Entrevista telefónica o presencial",
                    "3. Visita al refugio para conocer al animal",
                    "4. Revisión de documentos y requisitos",
                    "5. Firma de contrato de adopción"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAdoptClick}
                  className="flex-grow bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg shadow transition-colors"
                >
                  Iniciar solicitud
                </button>
                <button
                  onClick={closeModal}
                  className="flex-grow border border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Guardar para después
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdoptionTinder;