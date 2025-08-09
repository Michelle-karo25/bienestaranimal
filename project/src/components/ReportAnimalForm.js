import React, { useState } from 'react';
import { MapPin, Camera, Send } from 'lucide-react'; // Iconos para el formulario

const ReportAnimalForm = () => {
  const [formData, setFormData] = useState({
    animalType: '',
    location: '',
    description: '',
    contactName: '',
    contactPhone: '',
    image: null // Para la imagen
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.animalType) newErrors.animalType = 'El tipo de animal es obligatorio.';
    if (!formData.location) newErrors.location = 'La ubicación es obligatoria.';
    if (!formData.description) newErrors.description = 'La descripción es obligatoria.';
    if (!formData.contactName) newErrors.contactName = 'Tu nombre es obligatorio.';
    if (!formData.contactPhone) newErrors.contactPhone = 'Tu teléfono es obligatorio.';
    // if (!formData.image) newErrors.image = 'Es recomendable adjuntar una imagen.'; // Opcional, si quieres que sea obligatorio

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

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files[0] }));
      if (errors.image) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.image;
          return newErrors;
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Aquí iría la lógica para enviar el formulario (ej. a una API)
      console.log('Reporte enviado:', formData);
      setIsSubmitted(true);
      setFormData({ animalType: '', location: '', description: '', contactName: '', contactPhone: '', image: null });
      setTimeout(() => setIsSubmitted(false), 5000); // Ocultar mensaje después de 5 segundos
    }
  };

  return (
    <div className="min-h-screen bg-red-50 py-10 px-6">
      <h1 className="text-5xl font-bold text-center text-red-800 mb-12 font-serif">
        Reportar Animal Vulnerable
      </h1>
      <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-12">
        Tu reporte puede salvar una vida. Por favor, proporciona la mayor cantidad de detalles posible.
      </p>

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        {isSubmitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">¡Reporte enviado!</strong>
            <span className="block sm:inline"> Gracias por tu ayuda. Nuestro equipo revisará la información.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="animalType" className="block text-gray-700 text-sm font-medium mb-2">Tipo de Animal</label>
            <select
              id="animalType"
              name="animalType"
              value={formData.animalType}
              onChange={handleChange}
              className={`w-full px-5 py-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.animalType ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Selecciona el tipo de animal</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Ave">Ave</option>
              <option value="Otro">Otro (especificar en descripción)</option>
            </select>
            {errors.animalType && <p className="text-red-500 text-xs mt-1">{errors.animalType}</p>}
          </div>

          <div>
            <label htmlFor="location" className="block text-gray-700 text-sm font-medium mb-2">Ubicación Exacta</label>
            <div className="relative">
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`w-full pl-12 pr-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Ej. Calle Falsa 123, Colonia Siempre Viva"
              />
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
          </div>

          <div>
            <label htmlFor="description" className="block text-gray-700 text-sm font-medium mb-2">Descripción del Animal y Situación</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Describe al animal (color, tamaño, estado de salud) y la situación (herido, abandonado, etc.)"
            ></textarea>
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
          </div>

          <div>
            <label htmlFor="image" className="block text-gray-700 text-sm font-medium mb-2">Adjuntar Imagen (Opcional)</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <Camera className="mr-2 text-gray-500" size={20} />
                <span className="text-gray-700 font-medium">Subir Foto</span>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              {formData.image && (
                <span className="text-gray-600 text-sm">{formData.image.name}</span>
              )}
            </div>
            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contactName" className="block text-gray-700 text-sm font-medium mb-2">Tu Nombre</label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.contactName ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Tu nombre completo"
              />
              {errors.contactName && <p className="text-red-500 text-xs mt-1">{errors.contactName}</p>}
            </div>
            <div>
              <label htmlFor="contactPhone" className="block text-gray-700 text-sm font-medium mb-2">Tu Teléfono</label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.contactPhone ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Ej. 55 1234 5678"
              />
              {errors.contactPhone && <p className="text-red-500 text-xs mt-1">{errors.contactPhone}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors flex items-center justify-center space-x-2"
          >
            <Send size={20} />
            <span>Enviar Reporte</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportAnimalForm;