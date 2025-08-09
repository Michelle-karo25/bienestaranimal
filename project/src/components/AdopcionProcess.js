import React from 'react';

const AdopcionProcess = () => {
  const steps = [
    { number: 1, title: "Visítanos", description: "Conoce a nuestros peludos en el refugio o agenda una cita virtual" },
    { number: 2, title: "Entrevista", description: "Platicaremos contigo para encontrar la mejor compatibilidad" },
    { number: 3, title: "Documentación", description: "Requieres INE, comprobante de domicilio y firma de contrato" },
    { number: 4, title: "¡Adopción!", description: "Lleva a tu nuevo amigo a casa con su cartilla de vacunación" }
  ];

  return (
    <section id="proceso" className="py-16 px-4 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">Cómo Adoptar</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(step => (
            <div key={step.number} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-700">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">{step.title}</h3>
              <p className="text-amber-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-amber-800 mb-4">Requisitos:</h3>
          <ul className="space-y-2 text-amber-700">
            <li className="flex items-start">
              <span className="mr-2">✓</span> Ser mayor de 21 años
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span> Identificación oficial vigente
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span> Comprobante de domicilio
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span> Compromiso de esterilización (si aplica)
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span> Donación voluntaria para gastos veterinarios
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdopcionProcess;