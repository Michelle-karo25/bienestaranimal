import React, { useState } from 'react';

const AnimalFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    name: '',    // Nuevo filtro: Nombre del animal
    type: '',
    gender: '',
    size: '',
    vaccinated: '',
    sterilized: '',
    breed: '',
    age: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      name: '',
      type: '',
      gender: '',
      size: '',
      vaccinated: '',
      sterilized: '',
      breed: '',
      age: '',
      city: ''
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 mb-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Filtra tu búsqueda</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={filters.name}
            onChange={handleChange}
            placeholder="Ej. Max, Luna"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">Todos</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="breed" className="block text-sm font-medium text-gray-700 mb-1">Raza</label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={filters.breed}
            onChange={handleChange}
            placeholder="Ej. Labrador, Siamés"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Edad (años)</label>
          <input
            type="number"
            id="age"
            name="age"
            value={filters.age}
            onChange={handleChange}
            placeholder="Ej. 2"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Ciudad</label>
          <input
            type="text"
            id="city"
            name="city"
            value={filters.city}
            onChange={handleChange}
            placeholder="Ej. Ciudad de México"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Género</label>
          <select
            id="gender"
            name="gender"
            value={filters.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">Todos</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>
        </div>
        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">Tamaño</label>
          <select
            id="size"
            name="size"
            value={filters.size}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">Todos</option>
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
          </select>
        </div>
        <div>
          <label htmlFor="vaccinated" className="block text-sm font-medium text-gray-700 mb-1">Vacunado</label>
          <select
            id="vaccinated"
            name="vaccinated"
            value={filters.vaccinated}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">Indiferente</option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="sterilized" className="block text-sm font-medium text-gray-700 mb-1">Esterilizado</label>
          <select
            id="sterilized"
            name="sterilized"
            value={filters.sterilized}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">Indiferente</option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
      <div className="mt-6 text-right">
        <button
          onClick={handleClearFilters}
          className="px-6 py-2 bg-gray-200 text-gray-800 font-bold rounded-full hover:bg-gray-300 transition-colors"
        >
          Limpiar Filtros
        </button>
      </div>
    </div>
  );
};

export default AnimalFilter;