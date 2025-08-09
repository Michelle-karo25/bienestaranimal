import React from 'react';

const AdopcionStories = () => {
  const stories = [
    {
      id: 1,
      petName: "Rufo",
      owner: "Familia González",
      story: "Rufo llegó a nuestras vidas cuando más lo necesitábamos. Después de perder a nuestro perro anterior, él nos ayudó a sanar.",
      image: "story1.jpg"
    },
    {
      id: 2,
      petName: "Mina",
      owner: "Carlos Rodríguez",
      story: "Mina era una gata asustadiza en el refugio. Hoy es la reina de mi departamento y mi mejor compañera de teletrabajo.",
      image: "story2.jpg"
    }
  ];

  return (
    <section id="historias" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">Historias que nos inspiran</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map(story => (
            <div key={story.id} className="bg-amber-50 rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-amber-200 flex items-center justify-center">
                <span className="text-5xl">🐶</span> {/* Reemplazar por imagen real */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800">{story.petName} y {story.owner}</h3>
                <p className="text-amber-600 italic mt-4">"{story.story}"</p>
                <button className="mt-6 text-amber-700 font-semibold hover:text-amber-900 transition">
                  Ver historia completa →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdopcionStories;