import React from 'react';
import { Home, Search, Bell, User, Heart, DollarSign } from 'lucide-react'; // Importa iconos de Lucide React, incluyendo DollarSign para Donar

const BottomNavigationBar = ({ activeTab, onNavigate }) => {
  const navItems = [
    { name: 'Inicio', icon: Home, path: 'inicio' },
    { name: 'Buscar', icon: Search, path: 'buscar' },
    { name: 'Historias', icon: Heart, path: 'historias' },
    { name: 'Notificaciones', icon: Bell, path: 'notificaciones' },
    { name: 'Donar', icon: DollarSign, path: 'donar' }, // Nueva pestaña para Donar
    { name: 'Perfil', icon: User, path: 'perfil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => onNavigate(item.path)}
            className={`flex flex-col items-center justify-center p-2 flex-grow transition-colors duration-200 
              ${activeTab === item.path ? 'text-amber-600' : 'text-gray-500 hover:text-amber-500'}`}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigationBar;