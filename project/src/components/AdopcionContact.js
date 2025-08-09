import React, { useState } from 'react';

const AdopcionContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'consulta'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interest: 'consulta'
    });
  };

  return (
    <section id="contacto" className="py-16 px-4 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">Contáctanos</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-amber-700 mb-6">Envía un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="interest" className="block text-amber-600 mb-1">Me interesa:</label>
                <select 
                  id="interest" 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="consulta">Consulta general</option>
                  <option value="adopcion">Adopción</option>
                  <option value="voluntariado">Ser voluntario</option>
                  <option value="donacion">Hacer donación</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="name" className="block text-amber-600 mb-1">Nombre completo:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-amber-600 mb-1">Correo electrónico:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-amber-600 mb-1">Teléfono:</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-amber-600 mb-1">Mensaje:</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition mt-6"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-amber-700 mb-6">Visítanos</h3>
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <p className="text-amber-800 font-semibold mb-2">Refugio Bienestar Animal</p>
              <p className="text-amber-600 mb-4">Calle de los Animales Felices 123, Col. Amor</p>
              <p className="text-amber-600">Horario: Lunes a Viernes 10am - 6pm</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold text-amber-700 mb-4">Otras formas de ayudar:</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">💰</span>
                  <span className="text-amber-600">Donaciones económicas</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">🛒</span>
                  <span className="text-amber-600">Donación de alimento o medicinas</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">🏠</span>
                  <span className="text-amber-600">Hogar temporal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdopcionContact;