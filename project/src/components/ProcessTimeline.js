import React from 'react';

const ProcessTimeline = ({ onNavigate }) => {
  const steps = [
    {
      title: "1. Explora y Conoce",
      description: "Navega por nuestra galería de mascotas. Cada perfil tiene detalles sobre su personalidad y necesidades.",
      icon: "🔍"
    },
    {
      title: "2. Envía tu Solicitud",
      description: "Completa nuestro formulario de adopción. Es el primer paso para que podamos conocerte mejor.",
      icon: "📝"
    },
    {
      title: "3. Entrevista y Compatibilidad",
      description: "Nuestro equipo se pondrá en contacto para una entrevista. Queremos asegurar la mejor unión.",
      icon: "💬"
    },
    {
      title: "4. Visita y Convivencia",
      description: "Ven a nuestro refugio para conocer a tu futuro compañero. Pasa tiempo con él y asegúrate de que haya química.",
      icon: "❤️"
    },
    {
      title: "5. ¡Bienvenido a Casa!",
      description: "Una vez aprobada la adopción, te ayudaremos con los últimos trámites y consejos para la adaptación.",
      icon: "🏡"
    }
  ];

  return (
    <section id="proceso" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Nuestro <span className="text-amber-600">Proceso</span> de Adopción
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un camino sencillo y transparente para encontrar a tu nuevo mejor amigo.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-center md:mb-16">
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'}`}>
                <div className="bg-amber-50 p-8 rounded-2xl shadow-lg mb-8 md:mb-0">
                  <div className="text-5xl mb-4 md:mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-amber-800 mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => onNavigate('contacto')}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-colors"
          >
            Iniciar Proceso de Adopción
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;