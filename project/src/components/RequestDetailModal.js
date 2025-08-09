import React from 'react';
import { X, User, Mail, Phone, Home, Heart, Calendar, Info, PawPrint } from 'lucide-react';

const RequestDetailModal = ({ request, onClose, onUpdateStatus, getStatusColor, getStatusIcon }) => {
  if (!request) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose} // Cierra el modal al hacer clic fuera
    >
      <div 
        className="bg-white rounded-3xl overflow-hidden w-full max-w-2xl relative shadow-2xl transform scale-95 animate-scale-in"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 shadow-md flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
            <FileText className="mr-3 text-blue-600" size={30} />
            Detalles de Solicitud
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Sección del Animal */}
            <div className="bg-amber-50 p-4 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-amber-800 mb-2 flex items-center">
                <PawPrint className="mr-2" size={20} /> Animal Solicitado
              </h3>
              <p className="text-gray-700"><span className="font-medium">Nombre:</span> {request.animalName}</p>
              <p className="text-gray-700"><span className="font-medium">Raza:</span> {request.animalBreed}</p>
              <p className="text-gray-700"><span className="font-medium">Edad:</span> {request.animalAge}</p>
            </div>

            {/* Sección del Solicitante */}
            <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                <User className="mr-2" size={20} /> Datos del Solicitante
              </h3>
              <p className="text-gray-700"><span className="font-medium">Nombre:</span> {request.applicantName}</p>
              <p className="text-gray-700 flex items-center"><Mail className="w-4 h-4 mr-1" /> {request.applicantEmail}</p>
              <p className="text-gray-700 flex items-center"><Phone className="w-4 h-4 mr-1" /> {request.applicantPhone}</p>
            </div>
          </div>

          {/* Detalles de la Solicitud */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <Info className="mr-2" size={20} /> Información Adicional
            </h3>
            <p className="text-gray-700 mb-2"><span className="font-medium">Fecha de Solicitud:</span> {request.date}</p>
            <p className="text-gray-700 mb-2"><span className="font-medium">Tipo de Hogar:</span> {request.homeType}</p>
            <p className="text-gray-700 mb-2"><span className="font-medium">Experiencia Previa:</span> {request.experience}</p>
            <p className="text-gray-700 mb-2"><span className="font-medium">Miembros de la Familia:</span> {request.familyMembers}</p>
            <p className="text-gray-700"><span className="font-medium">Notas del Solicitante:</span> {request.details}</p>
          </div>

          {/* Estado y Acciones */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center mb-4 sm:mb-0">
              <span className="text-lg font-semibold text-gray-800 mr-3">Estado Actual:</span>
              <span className={`px-4 py-1 rounded-full text-base font-semibold ${getStatusColor(request.status)} flex items-center`}>
                {getStatusIcon(request.status)}
                <span className="ml-2">{request.status}</span>
              </span>
            </div>
            <div className="flex space-x-2">
              {request.status === 'Pendiente' && (
                <>
                  <button 
                    onClick={() => onUpdateStatus(request.id, 'Aprobada')}
                    className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
                  >
                    Aprobar
                  </button>
                  <button 
                    onClick={() => onUpdateStatus(request.id, 'Rechazada')}
                    className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition-colors"
                  >
                    Rechazar
                  </button>
                  <button 
                    onClick={() => onUpdateStatus(request.id, 'En Revisión')}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
                  >
                    En Revisión
                  </button>
                </>
              )}
              {/* Puedes añadir más botones de acción según el estado */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetailModal;