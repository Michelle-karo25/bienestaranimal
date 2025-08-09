import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.email) {
      newErrors.email = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato del correo no es válido.';
    }
    if (!formData.interest) newErrors.interest = 'Debes seleccionar un interés.';
    if (!formData.message) newErrors.message = 'El mensaje es obligatorio.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Aquí iría la lógica para enviar el formulario (ej. a una API)
      console.log('Formulario enviado:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000); // Ocultar mensaje después de 5 segundos
    }
  };

  return (
    <section id="contacto" className="py-28 px-6 bg-amber-50">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            ¿Listo para <span className="text-amber-600">ayudar</span>?
          </h2>
          <p className="text-lg text-gray-600">
            Contáctanos para adoptar, ser voluntario o resolver cualquier duda.
          </p>
        </div>

        {isSubmitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">¡Éxito!</strong>
            <span className="block sm:inline"> Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Tu nombre"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="tu.correo@ejemplo.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">Teléfono (opcional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Ej. 55 1234 5678"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-gray-700 text-sm font-medium mb-2">Me interesa</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className={`w-full px-5 py-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 ${errors.interest ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Selecciona una opción</option>
              <option value="adopcion">Adoptar una mascota</option>
              <option value="voluntariado">Ser voluntario</option>
              <option value="donacion">Hacer una donación</option>
              <option value="consulta">Consulta general</option>
            </select>
            {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Tu mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Cuéntanos cómo podemos ayudarte..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;