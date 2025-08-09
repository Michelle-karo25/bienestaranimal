import React, { useState } from 'react';
import { BellRing, CheckCircle, Info, XCircle } from 'lucide-react'; // Iconos para diferentes tipos de notificaciones

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: '¡Solicitud de adopción aprobada!',
      message: 'Tu solicitud para adoptar a Max ha sido aprobada. Revisa tu correo para los siguientes pasos.',
      time: 'Hace 5 minutos',
      read: false
    },
    {
      id: 2,
      type: 'info',
      title: 'Nuevo animal disponible: Luna',
      message: '¡Luna, una hermosa gata siamesa, acaba de llegar a nuestro refugio y busca un hogar!',
      time: 'Hace 1 hora',
      read: false
    },
    {
      id: 3,
      type: 'warning',
      title: 'Actualización de tu solicitud',
      message: 'Tu solicitud para Rocky requiere información adicional. Por favor, revisa los detalles.',
      time: 'Ayer',
      read: true
    },
    {
      id: 4,
      type: 'error',
      title: 'Error al procesar tu reporte',
      message: 'Hubo un problema al enviar tu reporte de animal vulnerable. Inténtalo de nuevo.',
      time: 'Hace 3 días',
      read: true
    },
    {
      id: 5,
      type: 'success',
      title: '¡Gracias por tu donación!',
      message: 'Hemos recibido tu donación. ¡Tu apoyo hace la diferencia!',
      time: 'Hace 1 semana',
      read: true
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'info': return <Info className="w-6 h-6 text-blue-500" />;
      case 'warning': return <BellRing className="w-6 h-6 text-yellow-500" />;
      case 'error': return <XCircle className="w-6 h-6 text-red-500" />;
      default: return <Info className="w-6 h-6 text-gray-500" />;
    }
  };

  const getBorderColor = (type) => {
    switch (type) {
      case 'success': return 'border-green-300';
      case 'info': return 'border-blue-300';
      case 'warning': return 'border-yellow-300';
      case 'error': return 'border-red-300';
      default: return 'border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 font-serif">
        Notificaciones
      </h1>

      {notifications.length === 0 ? (
        <div className="text-center text-gray-600 text-xl py-10">
          No tienes notificaciones nuevas. ¡Todo tranquilo por aquí!
        </div>
      ) : (
        <div className="max-w-2xl mx-auto space-y-4">
          {notifications.map(notif => (
            <div 
              key={notif.id} 
              className={`flex items-start p-4 rounded-xl shadow-md transition-all duration-300 
                ${notif.read ? 'bg-white opacity-70' : 'bg-white border-l-4 ' + getBorderColor(notif.type)}`}
            >
              <div className="flex-shrink-0 mr-4 mt-1">
                {getIcon(notif.type)}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">{notif.title}</h3>
                <p className="text-gray-700 text-sm mb-2">{notif.message}</p>
                <p className="text-gray-500 text-xs">{notif.time}</p>
              </div>
              <div className="flex-shrink-0 flex flex-col space-y-2 ml-4">
                {!notif.read && (
                  <button 
                    onClick={() => markAsRead(notif.id)}
                    className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                    title="Marcar como leído"
                  >
                    Leído
                  </button>
                )}
                <button 
                  onClick={() => deleteNotification(notif.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                  title="Eliminar notificación"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationsScreen;