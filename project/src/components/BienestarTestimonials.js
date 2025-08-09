import React from 'react';

const BienestarTestimonials = () => {
  const testimonials = [
    {
      name: "Ana Martínez",
      pet: "Max (Golden Retriever)",
      text: "El mejor cuidado que he encontrado para Max. Siempre vuelve feliz y relajado."
    },
    {
      name: "Carlos López",
      pet: "Luna (Gato Siames)",
      text: "Por fin encontré un lugar donde tratan a Luna con el respeto que merece."
    }
  ];

  return (
    <section id="testimonios" className="py-16 px-4 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-amber-700 italic mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-amber-600">{testimonial.name}</p>
              <p className="text-sm text-amber-500">{testimonial.pet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BienestarTestimonials;