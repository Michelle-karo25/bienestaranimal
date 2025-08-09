import React, { useState } from 'react';
import { FileText, CheckCircle, XCircle, Clock, User, PawPrint, MessageSquare, Info } from 'lucide-react';
import RequestDetailModal from './RequestDetailModal'; // Importa el nuevo modal

const AdoptionRequestsScreen = ({ onStartChat }) => { // Recibe onStartChat como prop
  const [requests, setRequests] = useState([
    {
      id: 1,
      animalName: 'Max',
      animalBreed: 'Labrador Mix',
      animalAge: '2 años',
      applicantName: 'Ana García',
      applicantEmail: 'ana.garcia@example.com',
      applicantPhone: '55 1234 5678',
      status: 'Pendiente', // Pendiente, Aprobada, Rechazada, En Revisión
      date: '2023-10-26',
      details: 'Interesada en un perro activo para su familia con niños. Tiene experiencia previa con labradores. Casa con jardín y cerca de un parque.',
      homeType: 'Casa con jardín',
      experience: 'Sí, con labradores',
      familyMembers: '2 adultos, 2 niños (8 y 12 años)'
    },
    {
      id: 2,
      animalName: 'Luna',
      animalBreed: 'Siamés',
      animalAge: '1.5 años',
      applicantName: 'Roberto Fernández',
      applicantEmail: 'roberto.f@example.com',
      applicantPhone: '55 8765 4321',
      status: 'Aprobada',
      date: '2023-10-20',
      details: 'Busca un gato tranquilo para su apartamento. Vive solo y trabaja desde casa. Ambiente tranquilo y sin otras mascotas.',
      homeType: 'Apartamento',
      experience: 'No, primera mascota',
      familyMembers: '1 adulto'
    },
    {
      id: 3,
      animalName: 'Rocky',
      animalBreed: 'Bulldog Francés',
      animalAge: '3 años',
      applicantName: 'María López',
      applicantEmail: 'maria.l@example.com',
      applicantPhone: '55 1122 3344',
      status: 'Rechazada',
      date: '2023-10-18',
      details: 'No cumple con los requisitos de espacio para un bulldog francés. Vive en un estudio pequeño y trabaja muchas horas. Se le sugirieron otras opciones.',
      homeType: 'Estudio',
      experience: 'Sí, con perros pequeños',
      familyMembers: '1 adulto'
    },
    {
      id: 4,
      animalName: 'Mia',
      animalBreed: 'Mestiza',
      animalAge: '6 meses',
      applicantName: 'Carlos Ruiz',
      applicantEmail: 'carlos.r@example.com',
      applicantPhone: '55 9988 7766',
      status: 'En Revisión',
      date: '2023-10-25',
      details: 'Solicitud para cachorra. Se requiere entrevista para evaluar compatibilidad con su estilo de vida. Familia con adolescentes y un perro mayor.',
      homeType: 'Casa',
      experience: 'Sí, con perros',
      familyMembers: '2 adultos, 2 adolescentes, 1 perro'
    },
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pendiente': return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'Aprobada': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'Rechazada': return <XCircle className="w-5 h-5 text-red-500" />;
      case 'En Revisión': return <FileText className="w-5 h-5 text-blue-500" />;
      default: return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pendiente': return 'bg-yellow-100 text-yellow-800';
      case 'Aprobada': return 'bg-green-100 text-green-800';
      case 'Rechazada': return 'bg-red-100 text-red-800';
      case 'En Revisión': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
  };

  const handleCloseModal = () => {
    setSelectedRequest(null);
  };

  const handleUpdateStatus = (id, newStatus) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: newStatus } : req
    ));
    alert(`Solicitud ${id} actualizada a: ${newStatus}`);
    if (selectedRequest && selectedRequest.id === id) {
      setSelectedRequest(prev => ({ ...prev, status: newStatus }));
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 py-10 px-6">
      <h1 className="text-5xl font-bold text-center text-purple-800 mb-12 font-serif">
        Solicitudes de Adopción
      </h1>
      <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-12">
        Gestiona las solicitudes de adopción de nuestros peludos.
      </p>

      {requests.length === 0 ? (
        <div className="text-center text-gray-600 text-xl py-10">
          No hay solicitudes de adopción pendientes. ¡Todo en orden!
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {requests.map(req => (
            <div key={req.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between transition-all duration-300 hover:shadow-xl">
              <div className="flex-grow mb-4 md:mb-0">
                <div className="flex items-center mb-2">
                  <PawPrint className="w-6 h-6 text-amber-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">{req.animalName} ({req.animalBreed})</h3>
                </div>
                <div className="flex items-center text-gray-700 mb-1">
                  <User className="w-4 h-4 mr-2" />
                  <span>Solicitante: <span className="font-semibold">{req.applicantName}</span></span>
                </div>
                <p className="text-gray-500 text-sm mb-2">Fecha: {req.date}</p>
                <p className="text-gray-600 text-sm line-clamp-2">{req.details}</p>
              </div>

              <div className="flex flex-col items-end space-y-3 md:ml-6">
                <span className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusColor(req.status)} flex items-center`}>
                  {getStatusIcon(req.status)}
                  <span className="ml-2">{req.status}</span>
                </span>
                <button 
                  onClick={() => handleViewDetails(req)} // Pasa el objeto de la solicitud
                  className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center"
                >
                  <Info className="w-4 h-4 mr-2" /> Ver Detalles
                </button>
                {/* Botón para iniciar chat */}
                <button 
                  onClick={() => onStartChat(req.applicantName, req.animalName)}
                  className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-600 transition-colors flex items-center justify-center"
                >
                  <MessageSquare className="w-4 h-4 mr-2" /> Iniciar Chat
                </button>
                {req.status === 'Pendiente' && (
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleUpdateStatus(req.id, 'Aprobada')}
                      className="bg-green-500 text-white px-3 py-1 rounded-full text-xs hover:bg-green-600 transition-colors"
                    >
                      Aprobar
                    </button>
                    <button 
                      onClick={() => handleUpdateStatus(req.id, 'Rechazada')}
                      className="bg-red-500 text-white px-3 py-1 rounded-full text-xs hover:bg-red-600 transition-colors"
                    >
                      Rechazar
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedRequest && (
        <RequestDetailModal 
          request={selectedRequest} 
          onClose={handleCloseModal} 
          onUpdateStatus={handleUpdateStatus} 
          getStatusColor={getStatusColor}
          getStatusIcon={getStatusIcon}
        />
      )}
    </div>
  );
};

export default AdoptionRequestsScreen;