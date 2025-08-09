import React from 'react';

const BienestarServices = () => {
  const services = [
    {
      title: "Peluquería Canina",
      description: "Baño terapéutico, corte de pelo y uñas con productos 100% naturales",
      icon: "✂️"
    },
    {
      title: "Guardería",
      description: "Espacio seguro y divertido para cuando no puedes estar con ellos",
      icon: "🏠"
    },
    {
      title: "Terapia",
      description: "Sesiones de rehabilitación y masajes para mascotas mayores",
      icon: "💆"
    }
  ];

  return (
    <section id="servicios" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-amber-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">{service.title}</h3>
              <p className="text-amber-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BienestarServices;