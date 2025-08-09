import React from 'react';

const PremiumFooter = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por suscribirte a nuestro newsletter! (Funcionalidad de suscripción en desarrollo)');
    e.target.reset();
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Columna 1: Logo y Descripción */}
        <div className="col-span-full lg:col-span-1">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-2 text-amber-400">🐾</span>
            <h3 className="text-3xl font-serif font-bold text-white">Alma Animal</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Dedicados a rescatar, rehabilitar y encontrar hogares amorosos para animales necesitados.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-6">Explora</h4>
          <ul className="space-y-3">
            <li><a href="#inicio" className="hover:text-amber-400 transition-colors">Inicio</a></li>
            <li><a href="#adopta" className="hover:text-amber-400 transition-colors">Mascotas en Adopción</a></li>
            <li><a href="#proceso" className="hover:text-amber-400 transition-colors">Cómo Adoptar</a></li>
            <li><a href="#historias" className="hover:text-amber-400 transition-colors">Historias Felices</a></li>
            <li><a href="#contacto" className="hover:text-amber-400 transition-colors">Contáctanos</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-6">Contacto</h4>
          <ul className="space-y-3">
            <li><a href="mailto:info@almaanimal.org" className="hover:text-amber-400 transition-colors">info@almaanimal.org</a></li>
            <li><a href="tel:+525512345678" className="hover:text-amber-400 transition-colors">+52 55 1234 5678</a></li>
            <li>
              <address className="not-italic text-gray-400">
                Calle Refugio Feliz #456, <br />
                Col. Esperanza, CDMX, México
              </address>
            </li>
          </ul>
        </div>

        {/* Columna 4: Newsletter */}
        <div className="col-span-full md:col-span-1 lg:col-span-1">
          <h4 className="text-xl font-semibold text-white mb-6">Mantente Informado</h4>
          <p className="text-gray-400 mb-4">
            Suscríbete a nuestro newsletter para recibir noticias y actualizaciones.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors"
            >
              Suscribir
            </button>
          </form>
          <div className="flex space-x-4 mt-8">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              {/* Icono de Facebook */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              {/* Icono de Instagram */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.92.333 4.145.645 3.369.958 2.671 1.45 2.064 2.057 1.457 2.664.96 3.369.646 4.145.333 4.92.131 5.775.072 7.053.014 8.333 0 8.74 0 12s.014 3.267.072 4.547c.06 1.277.261 2.122.574 2.908.313.776.805 1.471 1.412 2.078.607.607 1.302 1.099 2.078 1.412.786.313 1.63.514 2.908.574 1.28.058 1.67.072 4.547.072s3.267-.014 4.547-.072c1.277-.06 2.122-.261 2.908-.574.776-.313 1.471-.805 2.078-1.412.607-.607 1.099-1.302 1.412-2.078.313-.786.514-1.63.574-2.908.058-1.28.072-1.67.072-4.547s-.014-3.267-.072-4.547c-.06-1.277-.261-2.122-.574-2.908-.313-.776-.805-1.471-1.412-2.078-.607-.607-1.302-.96-2.078-1.412C21.08 2.333 20.235 2.131 18.957 2.072 17.677 2.014 17.26 2 12 2zm0 3.635c3.405 0 3.858.015 5.185.074 1.29.057 1.756.244 2.057.368.56.228.965.477 1.386.898.42.42.668.825.897 1.386.124.301.311.767.368 2.057.058 1.327.074 1.78.074 5.185s-.016 3.858-.074 5.185c-.057 1.29-.244 1.756-.368 2.057-.228.56-.477.965-.898 1.386-.42.42-.825.668-1.386.897-.301.124-.767.311-2.057.368-1.327.058-1.78.074-5.185.074s-3.858-.016-5.185-.074c-1.29-.057-1.756-.244-2.057-.368-.56-.228-.965-.477-1.386-.898-.42-.42-.668-.825-.897-1.386-.124-.301-.311-.767-.368-2.057-.058-1.327-.074-1.78-.074-5.185s.016-3.858.074-5.185c.057-1.29.244-1.756.368-2.057.228-.56.477-.965.898-1.386.42-.42.825-.668 1.386-.897.301-.124.767-.311 2.057-.368C8.142 5.655 8.595 5.635 12 5.635zm0 3.635a3.635 3.635 0 100 7.27 3.635 3.635 0 000-7.27zm0 2.365a1.27 1.27 0 110 2.54 1.27 1.27 0 010-2.54zm5.325-3.635a.897.897 0 100 1.794.897.897 0 000-1.794z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              {/* Icono de Twitter/X */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.21-6.873L4.92 21.75H1.616l7.228-8.26L1.01 2.25h3.308l5.97 7.908L18.244 2.25zm-2.91 17.485L3.713 4.5H7.15l12.952 17.235h-3.308z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-gray-700 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Alma Animal. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default PremiumFooter;