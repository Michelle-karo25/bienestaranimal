import React, { useState } from 'react';
import { User, Mail, Phone, Heart, Settings, LogOut, FileText, CheckCircle, XCircle, Clock } from 'lucide-react'; // Iconos para el perfil y solicitudes

const UserProfileScreen = ({ onNavigate }) => {
  // Datos de usuario de ejemplo
  const [user, setUser] = useState({
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '55 1234 5678',
    profilePicture: 'https://via.placeholder.com/150/FFD700/FFFFFF?text=JP', // Placeholder para la foto de perfil
    bio: 'Amante de los animales y voluntario ocasional. Buscando un nuevo compañero peludo para mi hogar.',
    favoriteAnimals: 5, // Número de animales favoritos
    adoptionRequests: [ // Historial de solicitudes de adopción
      {
        id: 101,
        animalName: 'Max',
        animalBreed: 'Labrador Mix',
        status: 'Aprobada',
        date: '2023-10-20',
        notes: '¡Felicidades! Max te espera en el refugio.'
      },
      {
        id: 102,
        animalName: 'Luna',
        animalBreed: 'Siamés',
        status: 'Pendiente',
        date: '2023-10-25',
        notes: 'Tu solicitud está siendo revisada. Pronto nos pondremos en contacto.'
      },
      {
        id: 103,
        animalName: 'Rocky',
        animalBreed: 'Bulldog Francés',
        status: 'Rechazada',
        date: '2023-10-18',
        notes: 'Lamentamos informarte que tu solicitud no pudo ser aprobada por motivos de espacio.'
      },
    ]
  });

  const handleEditProfile = () => {
    alert('Funcionalidad de editar perfil en construcción. ¡Pronto podrás cambiar tu foto y datos!');
    // Aquí iría la lógica para navegar a una pantalla de edición de perfil
  };

  const handleLogout = () => {
    alert('¡Sesión cerrada! Vuelve pronto.');
    // Aquí iría la lógica para cerrar la sesión del usuario
    onNavigate('inicio'); // Redirigir al inicio después de cerrar sesión
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pendiente': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'Aprobada': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Rechazada': return <XCircle className="w-4 h-4 text-red-500" />;
      default: return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pendiente': return 'bg-yellow-100 text-yellow-800';
      case 'Aprobada': return 'bg-green-100 text-green-800';
      case 'Rechazada': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-6">
      <h1 className="text-5xl font-bold text-center text-blue-800 mb-12 font-serif">
        Mi Perfil
      </h1>

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <img 
              src={user.profilePicture} 
              alt="Foto de Perfil" 
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-300 shadow-md"
            />
            <button 
              onClick={handleEditProfile}
              className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 shadow-md hover:bg-blue-700 transition-colors"
              title="Editar foto de perfil"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            </button>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h2>
          <p className="text-gray-600 text-center max-w-md">{user.bio}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center bg-gray-50 p-4 rounded-xl shadow-sm">
            <Mail className="text-blue-500 mr-3" size={24} />
            <div>
              <p className="text-sm text-gray-500">Correo Electrónico</p>
              <p className="font-medium text-gray-800">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-50 p-4 rounded-xl shadow-sm">
            <Phone className="text-blue-500 mr-3" size={24} />
            <div>
              <p className="text-sm text-gray-500">Teléfono</p>
              <p className="font-medium text-gray-800">{user.phone}</p>
            </div>
          </div>
        </div>

        {/* Sección de Historial de Solicitudes de Adopción */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <FileText className="mr-2 text-blue-600" size={24} />
            Mis Solicitudes de Adopción ({user.adoptionRequests.length})
          </h3>
          {user.adoptionRequests.length === 0 ? (
            <p className="text-gray-600">Aún no has enviado ninguna solicitud de adopción.</p>
          ) : (
            <div className="space-y-4">
              {user.adoptionRequests.map(request => (
                <div key={request.id} className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-gray-800">{request.animalName} ({request.animalBreed})</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center ${getStatusColor(request.status)}`}>
                      {getStatusIcon(request.status)}
                      <span className="ml-1">{request.status}</span>
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">Fecha: {request.date}</p>
                  <p className="text-gray-700 text-sm">{request.notes}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4 mb-8">
          <button 
            onClick={() => alert('Animales favoritos en construcción. ¡Pronto podrás guardar a tus preferidos!')}
            className="w-full flex items-center justify-between bg-blue-100 text-blue-800 font-semibold py-4 px-6 rounded-xl shadow-md hover:bg-blue-200 transition-colors"
          >
            <div className="flex items-center">
              <Heart className="mr-3" size={24} />
              <span>Animales Favoritos</span>
            </div>
            <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">{user.favoriteAnimals}</span>
          </button>
        </div>

        <div className="space-y-4">
          <button 
            onClick={handleEditProfile}
            className="w-full flex items-center bg-gray-100 text-gray-800 font-semibold py-4 px-6 rounded-xl shadow-md hover:bg-gray-200 transition-colors"
          >
            <Settings className="mr-3" size={24} />
            <span>Editar Perfil</span>
          </button>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center bg-red-100 text-red-800 font-semibold py-4 px-6 rounded-xl shadow-md hover:bg-red-200 transition-colors"
          >
            <LogOut className="mr-3" size={24} />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileScreen;