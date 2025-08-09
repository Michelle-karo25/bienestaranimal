import React from 'react';

const BienestarFooter = () => {
  return (
    <footer id="contacto" className="bg-amber-800 text-amber-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Contacto</h3>
          <p className="mb-2">Calle Mascotas Felices 123</p>
          <p className="mb-2">contacto@bienestaranimal.com</p>
          <p>Tel: 555-123-4567</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Horario</h3>
          <p className="mb-2">Lunes a Viernes: 9am - 6pm</p>
          <p>Sábado: 10am - 2pm</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-amber-700 text-center">
        <p>© {new Date().getFullYear()} Bienestar Animal. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default BienestarFooter;