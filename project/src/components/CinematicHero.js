import React from 'react';

const CinematicHero = ({ onNavigate }) => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* Placeholder para video. En un proyecto real, aquí iría tu video */}
        {/* Asegúrate de que el archivo de video (ej. hero-video.mp4) esté en la carpeta 'public/videos' de tu proyecto */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" /> {/* <--- MODIFICA ESTA LÍNEA */}
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Encuentra a tu <span className="text-amber-400">alma gemela</span> peluda
        </h1>
        
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Más de 500 historias de amor comenzaron aquí. ¿Serás el próximo?
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => onNavigate('adopta')}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-colors"
          >
            Ver mascotas disponibles
          </button>
          
          <button
            onClick={() => onNavigate('proceso')}
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg transition-colors"
          >
            Conoce nuestro trabajo
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default CinematicHero;